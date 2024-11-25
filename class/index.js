const fs = require('node:fs');

let tasks = [
    {
        "name": "Монтаж опалубки",
        "measurement_id": "м2"
    },
    {
        "name": "Демонтаж опалубки",
        "measurement_id": "м2"
    },
    {
        "name": "Устройство бетонной подготовки",
        "measurement_id": "м3"
    },
    {
        "name": "Армирование",
        "measurement_id": "т"
    },
    {
        "name": "Бетонирование",
        "measurement_id": "м3"
    },
    {
        "name": "Уход за бетоном",
        "measurement_id": "ч"
    },
    {
        "name": "Монтаж сборных ж/б конструкций",
        "measurement_id": "шт"
    },
    {
        "name": "Подготовка шероховатости бетонной поверхности",
        "measurement_id": "м2"
    },
    {
        "name": "Устройство гидрошпонки",
        "measurement_id": "м2"
    },
    {
        "name": "Гидроизоляция ж/б конструкций",
        "measurement_id": "м2"
    },
    {
        "name": "Теплоизоляция ж/б конструкций",
        "measurement_id": "м3"
    },
    {
        "name": "Кирпичная кладка",
        "measurement_id": "м3"
    },
    {
        "name": "Устройство деформационных швов",
        "measurement_id": "м"
    },
    {
        "name": "Снятие ПРС",
        "measurement_id": "м2"
    },
    {
        "name": "Вертикальная планировка",
        "measurement_id": "м2"
    },
    {
        "name": "Выемка грунта",
        "measurement_id": "м3"
    },
    {
        "name": "Обратная засыпка",
        "measurement_id": "м3"
    },
    {
        "name": "Уплотнение грунта",
        "measurement_id": "м2"
    },
    {
        "name": "Устройство подготовки из ЩПС",
        "measurement_id": "м3"
    },
    {
        "name": "Устройство подготовки из щебня",
        "measurement_id": "м3"
    },
    {
        "name": "Устройство подготовки из скального грунта",
        "measurement_id": "м3"
    },
    {
        "name": "Монтаж металлоконструкций",
        "measurement_id": "т"
    },
    {
        "name": "Укрупнительная сборка металлоконструкций",
        "measurement_id": "т"
    },
    {
        "name": "Подготовка поверхности металлоконструкций",
        "measurement_id": "м2"
    },
    {
        "name": "АКЗ металлоконструкций",
        "measurement_id": "м2"
    },
    {
        "name": "Огнезащита металлоконструкций",
        "measurement_id": "м2"
    },
    {
        "name": "Сварочные работы",
        "measurement_id": "м.п."
    },
    {
        "name": "Монтаж ограждающих конструкций (стен) из сэндвич-панелей",
        "measurement_id": "м2"
    },
    {
        "name": "Монтаж ограждающих конструкций (стен) из профлиста",
        "measurement_id": "м2"
    },
    {
        "name": "Герметизация швов",
        "measurement_id": "м"
    },
    {
        "name": "Монтаж перегородок",
        "measurement_id": "м2"
    },
    {
        "name": "Устройство внутренних стен",
        "measurement_id": "м2"
    },
    {
        "name": "Заполнение оконных проемов",
        "measurement_id": "м2"
    },
    {
        "name": "Заполнение дверных проемов",
        "measurement_id": "м2"
    },
    {
        "name": "Установка ворот",
        "measurement_id": "м2"
    },
    {
        "name": "Устройство кровли из профнастила",
        "measurement_id": "м2"
    },
    {
        "name": "Устройство пароизолирующего слоя кровли",
        "measurement_id": "м2"
    },
    {
        "name": "Устройство гидроизолирующего слоя кровли",
        "measurement_id": "м2"
    },
    {
        "name": "Устройство теплоизолирующего слоя кровли",
        "measurement_id": "м3"
    },
    {
        "name": "Черновая отделка стен",
        "measurement_id": "м2"
    },
    {
        "name": "Чистовая отделка стен",
        "measurement_id": "м2"
    },
    {
        "name": "Черновая отделка потолка",
        "measurement_id": "м2"
    },
    {
        "name": "Чистовая отделка потолка",
        "measurement_id": "м2"
    },
    {
        "name": "Послойная черновая отделка пола",
        "measurement_id": "м2"
    },
    {
        "name": "Устройство цементно-песчаной стяжки",
        "measurement_id": "м2"
    },
    {
        "name": "Чистовая отделка пола",
        "measurement_id": "м2"
    },
    {
        "name": "Наружные отделочные работы",
        "measurement_id": "м2"
    },
    {
        "name": "Установка мебели, инвентаря, оборудования",
        "measurement_id": "шт"
    },
    {
        "name": "Монтаж технологического трубопровода",
        "measurement_id": "м"
    },
    {
        "name": "Монтаж запорной арматуры технологического трубопровода",
        "measurement_id": "м"
    },
    {
        "name": "АКЗ технологического трубопровода",
        "measurement_id": "м"
    },
    {
        "name": "Теплоизоляция технологического трубопровода",
        "measurement_id": "м"
    },
    {
        "name": "Монтаж трубопроводов системы отопления",
        "measurement_id": "м"
    },
    {
        "name": "Монтаж отопительных элементов",
        "measurement_id": "шт"
    },
    {
        "name": "Монтаж тепловых пунктов",
        "measurement_id": "шт"
    },
    {
        "name": "Теплоизоляция трубопроводов отопления",
        "measurement_id": "м3"
    },
    {
        "name": "Монтаж оборудования вентиляции и кондиционирования воздуха",
        "measurement_id": "шт"
    },
    {
        "name": "Монтаж воздуховодов",
        "measurement_id": "м2"
    },
    {
        "name": "Монтаж трубопроводов системы вентиляции и кондиционирования",
        "measurement_id": "м"
    },
    {
        "name": "Теплоизоляция воздуховодов",
        "measurement_id": "м3"
    },
    {
        "name": "АКЗ воздуховодов",
        "measurement_id": "м2"
    },
    {
        "name": "Огнезащита воздуховодов",
        "measurement_id": "м2"
    },
    {
        "name": "Монтаж трубопроводов водоснабжения",
        "measurement_id": "м"
    },
    {
        "name": "Окраска трубопроводов водоснабжения",
        "measurement_id": "м2"
    },
    {
        "name": "Монтаж оборудования системы водоснабжения",
        "measurement_id": "шт"
    },
    {
        "name": "Теплоизоляция трубопроводов водоснабжения",
        "measurement_id": "м3"
    },
    {
        "name": "Монтаж трубопроводов водоотведения",
        "measurement_id": "м"
    },
    {
        "name": "Монтаж сантехкомплектов",
        "measurement_id": "шт"
    },
    {
        "name": "Монтаж оборудования водоотведения",
        "measurement_id": "шт"
    },
    {
        "name": "Окраска трубопроводов водоотведения",
        "measurement_id": "м2"
    },
    {
        "name": "Прокладка кабеля электроснабжения",
        "measurement_id": "м"
    },
    {
        "name": "Монтаж распределительных пунктов",
        "measurement_id": "шт"
    },
    {
        "name": "Монтаж кабеленесущих систем",
        "measurement_id": "м"
    },
    {
        "name": "Прокладка кабеля электросвещения",
        "measurement_id": "м"
    },
    {
        "name": "Установка осветительных приборов",
        "measurement_id": "шт"
    },
    {
        "name": "Монтаж контура заземления",
        "measurement_id": "м"
    },
    {
        "name": "Монтаж опор ВЛ",
        "measurement_id": "шт"
    },
    {
        "name": "Монтаж опор освещения",
        "measurement_id": "шт"
    },
    {
        "name": "Прокладка кабеля СС, АК, ПС, СОТ",
        "measurement_id": "м"
    },
    {
        "name": "Установка оборудования СС, АК, ПС, СОТ",
        "measurement_id": "шт"
    },
    {
        "name": "Монтаж козлового крана",
        "measurement_id": "шт"
    },
    {
        "name": "Монтаж тали",
        "measurement_id": "шт"
    },
    {
        "name": "Монтаж мостового крана",
        "measurement_id": "шт"
    },
    {
        "name": "Монтаж конвейера",
        "measurement_id": "шт"
    },
    {
        "name": "Монтаж дробильного оборудования",
        "measurement_id": "шт"
    },
    {
        "name": "Монтаж шаровой мельницы",
        "measurement_id": "шт"
    },
    {
        "name": "Монтаж грохота",
        "measurement_id": "шт"
    },
    {
        "name": "Монтаж флотационной машины",
        "measurement_id": "шт"
    },
    {
        "name": "Монтаж автомобильных весов",
        "measurement_id": "шт"
    },
    {
        "name": "Монтаж теплообменного оборудования",
        "measurement_id": "шт"
    },
    {
        "name": "Монтаж компрессорного оборудования",
        "measurement_id": "шт"
    },
    {
        "name": "Монтаж вентиляторов и дымососов",
        "measurement_id": "шт"
    },
    {
        "name": "Монтаж насосного оборудования",
        "measurement_id": "шт"
    },
    {
        "name": "Монтаж трансформаторов",
        "measurement_id": "шт"
    },
    {
        "name": "Монтаж блочных трансформаторных подстанций",
        "measurement_id": "шт"
    },
    {
        "name": "Монтаж емкостного оборудования",
        "measurement_id": "шт"
    },
    {
        "name": "Монтаж прочего технологического оборудования",
        "measurement_id": "шт"
    },
    {
        "name": "Устройство тепляка",
        "measurement_id": "м2"
    },
    {
        "name": "Прокладка греющего кабеля",
        "measurement_id": "м"
    },
    {
        "name": "Изготовление деталей",
        "measurement_id": "шт"
    },
    {
        "name": "Установка строительных лесов",
        "measurement_id": "м.п."
    },
    {
        "name": "Монтаж временных ограждений",
        "measurement_id": "м"
    },
    {
        "name": "Уборка территории от снега",
        "measurement_id": "м2"
    },
    {
        "name": "Нарезка арматуры",
        "measurement_id": "шт"
    },
    {
        "name": "Уборка территории от строительного мусора",
        "measurement_id": "м2"
    },
    {
        "name": "Сопутствующие работы для выполнения проектного плана",
        "measurement_id": "%"
    }
]

const measurements = ["м2", "кг", "литр", "шт", "%", "м3", "м", "тонн", "п.м", "м.п",]

const findIndex = (str) => {
    let idx = 0
    measurements.forEach((measurement, index) => {
        if (str === measurement) {
            return idx = index
        }
    })
    return idx + 1
}

tasks.forEach((task) => {
    task.measurement_id = findIndex(task.measurement_id)
})

console.log(tasks)

fs.writeFileSync('/Users/User/Desktop/parser/parsed.json', JSON.stringify(tasks))