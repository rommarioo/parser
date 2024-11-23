import {works} from "./works.js";

export interface INewSection {
    type: "insert_new_section";
    name: null | string;
    objectId: number | null;
    fullName: null | string;
}

export interface INewTask {
    type: "insert_task";
    name: string | null;
    sectionId: number | null;
    measurement_id: number | null;
}
//Ангар №2 Цех изготовления	позиция
// object id = 148
const test = {
    data: [
        {name: 'Нарезка арматуры', measurement_id: 4},
        {name: 'Изготовление деталей', measurement_id: 4},
        {name: 'Сопутствующие работы для выполнения проектного плана', measurement_id: 5},
        {name: 'Уборка территории от строительного мусора', measurement_id: 1},
    ]



}

const base = "https://lk.sps38.pro"

const createNewTask = async (newTaskData: INewTask) => {
    const url = `/api/workSheets`;
    try {
        const response = await fetch(base + url, {
            method: "POST",
            body: JSON.stringify(newTaskData),
        });
        return response.json();
    } catch (error) {
        console.error(error);
    }
};

test.data.forEach(el => {
    // createNewSection()
    // createNewTask({type: "insert_task", name: el.name, sectionId: });
})
const createNewSection = async (newSectionData: INewSection) => {
    const url = `/api/workSheets`;
    try {
        const response = await fetch(base + url, {
            method: "POST",
            body: JSON.stringify(newSectionData),
        });
        return response.json();
    } catch (error) {
        console.error(error);
    }
};