
 const works = {
      data: [
        {name: 'Монтаж опалубки', measurement_id: 1},
        {name: 'Устройство бетонной подготовки', measurement_id: 6},
        {name: 'Армирование', measurement_id: 1},
        {name: 'Бетонирование', measurement_id: 6},
        {name: 'Уход за бетоном', measurement_id: 1},
        {name: 'Монтаж сборных ж/б конструкций', measurement_id: 4},
        {
          name: 'Подготовка шероховатости бетонной поверхности',
          measurement_id: 1
        },
        {name: 'Гидроизоляция ж/б конструкций', measurement_id: 1},
        {name: 'Теплоизоляция ж/б конструкций', measurement_id: 6},
        {name: 'Кирпичная кладка', measurement_id: 6},
        {name: 'Устройство деформационных швов', measurement_id: 7},
        {name: 'Снятие ПРС', measurement_id: 1},
        {name: 'Вертикальная планировка', measurement_id: 1},
        {name: 'Выемка грунта', measurement_id: 6},
        {name: 'Обратная засыпка', measurement_id: 6},
        {name: 'Устройство подготовки из ЩПС', measurement_id: 6},
        {name: 'Устройство подготовки из щебня', measurement_id: 6},
        {
          name: 'Устройство подготовки из скального грунта',
          measurement_id: 6
        },
        {name: 'Монтаж металлоконструкций', measurement_id: 1},
        {
          name: 'Подготовка поверхности металлоконструкций',
          measurement_id: 1
        },
        {name: 'АКЗ металлоконструкций', measurement_id: 1},
        {name: 'Огнезащита металлоконструкций', measurement_id: 1},
        {name: 'Сварочные работы', measurement_id: 1},
        {
          name: 'Монтаж ограждающих конструкций (стен) из сэндвич-панелей',
          measurement_id: 1
        },
        {
          name: 'Монтаж ограждающих конструкций (стен) из профлиста',
          measurement_id: 1
        },
        {name: 'Герметизация швов', measurement_id: 7},
        {name: 'Монтаж перегородок', measurement_id: 1},
        {name: 'Устройство внутренних стен', measurement_id: 1},
        {name: 'Заполнение оконных проемов', measurement_id: 1},
        {name: 'Заполнение дверных проемов', measurement_id: 1},
        {name: 'Установка ворот', measurement_id: 1},
        {name: 'Устройство кровли из профнастила', measurement_id: 1},
        {
          name: 'Устройство пароизолирующего слоя кровли',
          measurement_id: 1
        },
        {
          name: 'Устройство гидроизолирующего слоя кровли',
          measurement_id: 1
        },
        {
          name: 'Устройство теплоизолирующего слоя кровли',
          measurement_id: 6
        },
        {name: 'Черновая отделка стен', measurement_id: 1},
        {name: 'Чистовая отделка стен', measurement_id: 1},
        {name: 'Черновая отделка потолка', measurement_id: 1},
        {name: 'Чистовая отделка потолка', measurement_id: 1},
        {name: 'Послойная черновая отделка пола', measurement_id: 1},
        {name: 'Устройство цементно-песчаной стяжки', measurement_id: 1},
        {name: 'Чистовая отделка пола', measurement_id: 1},
        {name: 'Наружные отделочные работы', measurement_id: 1},
        {name: 'Монтаж технологического трубопровода', measurement_id: 7},
        {
          name: 'Монтаж запорной арматуры технологического трубопровода',
          measurement_id: 7
        },
        {name: 'АКЗ технологического трубопровода', measurement_id: 7},
        {
          name: 'Теплоизоляция технологического трубопровода',
          measurement_id: 7
        },
        {name: 'Монтаж трубопроводов системы отопления', measurement_id: 7},
        {name: 'Монтаж отопительных элементов', measurement_id: 4},
        {name: 'Монтаж тепловых пунктов', measurement_id: 4},
        {name: 'Теплоизоляция трубопроводов отопления', measurement_id: 6},
        {
          name: 'Монтаж оборудования вентиляции и кондиционирования воздуха',
          measurement_id: 4
        },
        {name: 'Монтаж воздуховодов', measurement_id: 1},
        {
          name: 'Монтаж трубопроводов системы вентиляции и кондиционирования',
          measurement_id: 7
        },
        {name: 'Теплоизоляция воздуховодов', measurement_id: 6},
        {name: 'АКЗ воздуховодов', measurement_id: 1},
        {name: 'Огнезащита воздуховодов', measurement_id: 1},
        {name: 'Монтаж трубопроводов водоснабжения', measurement_id: 7},
        {name: 'Окраска трубопроводов водоснабжения', measurement_id: 1},
        {
          name: 'Монтаж оборудования системы водоснабжения',
          measurement_id: 4
        },
        {
          name: 'Теплоизоляция трубопроводов водоснабжения',
          measurement_id: 6
        },
        {name: 'Монтаж трубопроводов водоотведения', measurement_id: 7},
        {name: 'Монтаж сантехкомплектов', measurement_id: 4},
        {name: 'Монтаж оборудования водоотведения', measurement_id: 4},
        {name: 'Окраска трубопроводов водоотведения', measurement_id: 1},
        {name: 'Прокладка кабеля электроснабжения', measurement_id: 7},
        {name: 'Монтаж распределительных пунктов', measurement_id: 4},
        {name: 'Монтаж кабеленесущих систем', measurement_id: 7},
        {name: 'Прокладка кабеля электросвещения', measurement_id: 7},
        {name: 'Установка осветительных приборов', measurement_id: 4},
        {name: 'Монтаж контура заземления', measurement_id: 7},
        {name: 'Монтаж опор ВЛ', measurement_id: 4},
        {name: 'Монтаж опор освещения', measurement_id: 4},
        {name: 'Прокладка кабеля СС, АК, ПС, СОТ', measurement_id: 7},
        {name: 'Установка оборудования СС, АК, ПС, СОТ', measurement_id: 4},
        {name: 'Монтаж козлового крана', measurement_id: 4},
        {name: 'Монтаж мостового крана', measurement_id: 4},
        {name: 'Монтаж конвейера', measurement_id: 4},
        {name: 'Монтаж дробильного оборудования', measurement_id: 4},
        {name: 'Монтаж шаровой мельницы', measurement_id: 4},
        {name: 'Монтаж грохота', measurement_id: 4},
        {name: 'Монтаж флотационной машины', measurement_id: 4},
        {name: 'Монтаж автомобильных весов', measurement_id: 4},
        {name: 'Монтаж теплообменного оборудования', measurement_id: 4},
        {name: 'Монтаж компрессорного оборудования', measurement_id: 4},
        {name: 'Монтаж вентиляторов и дымососов', measurement_id: 4},
        {name: 'Монтаж насосного оборудования', measurement_id: 4},
        {name: 'Монтаж трансформаторов', measurement_id: 4},
        {name: 'Монтаж блочных трансформаторных подстанций',
          measurement_id: 4
        },
        {name: 'Монтаж емкостного оборудования', measurement_id: 4},
        {name: 'Устройство тепляка', measurement_id: 1},
        {name: 'Прокладка греющего кабеля', measurement_id: 7},
        {name: 'Изготовление деталей', measurement_id: 4},
        {name: 'Установка строительных лесов', measurement_id: 1},
        {name: 'Монтаж временных ограждений', measurement_id: 7},
        {name: 'Уборка территории от снега', measurement_id: 1},
        {name: 'Нарезка арматуры', measurement_id: 4},
        {
          name: 'Сопутствующие работы для выполнения проектного плана',
          measurement_id: 5
        }
      ]
      }





