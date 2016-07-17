var myApp = angular.module('myApp', []);
myApp.controller('MainController', ['$scope', 'navigation', 'specials', function($scope, navigation, specials){
    $scope.navigation = navigation;
    $scope.specials = specials;
}]);


myApp.constant('navigation', [
    {
        name: 'Магазин',
        main: 'true',
        submenu: [
            {
                name: 'Домашня сторінка магазину'
            },
            {
                name: 'Office',
                submenu: [
                    {
                        name: 'Всі версії Office'
                    },
                    {
                        name: 'Програмні комплекси Office'
                    },
                    {
                        name: 'Усі програми Office'
                    },
                    {
                        name: 'Office для вашого Mac'
                    },
                    {
                        name: 'Office 365'
                    },
                    {
                        name: 'Порівняння прогармних комплексів Office'
                    },
                    {
                        name: 'Мовні пакети Office'
                    }
                ]
            },
            {
                name: 'Windows',
                submneu: [
                    {
                        name: 'Windows 10 Home'
                    },
                    {
                        name: 'Windows 10 Pro'
                    }
                ]
            }
        ]
    },
    {
        name: 'Продукти',
        submenu: [
            {
                name: 'Програмне забезпечення та служби',
                submenu: [
                    {
                        name: 'Windows'
                    },
                    {
                        name: 'Office'
                    },
                    {
                        name: 'Безкоштовні завантаження та безпека'
                    },
                    {
                        name: 'Internet Explorer'
                    },
                    {
                        name: 'Microsoft Edge'
                    },
                    {
                        name: 'Skype'
                    },
                    {
                        name: 'OneNote'
                    }
                ]
            },
            {
                name: 'Пристрої та Xbox',
                submenu: [
                    {
                        name: 'Компютерні аксесуари'
                    },
                    {
                        name: 'Microsoft Lumia'
                    }
                ]
            },
            {
                name: 'Для бізнесу',
                submenu: [
                    {
                        name: 'Microsoft Azure'
                    },
                    {
                        name: 'Microsoft Dynamics'
                    },
                    {
                        name: 'Windows для бізнесу'
                    },
                    {
                        name: 'Office для бізнесу'
                    },
                    {
                        name: 'Skype для біщнесу'
                    },
                    {
                        name: 'Корпоративні рішення'
                    },
                    {
                        name: 'Рішення для малого бізнесу'
                    },
                    {
                        name: 'Знайти постачальника рішень'
                    }
                ]
            },
            {
                name: 'Для IТ-фахівців і розробників',
                submenu: [
                    {
                        name: 'Розробка програм Windows'
                    },
                    {
                        name: 'Microsoft Azure'
                    },
                    {
                        name: 'MSDN'
                    },
                    {
                        name: 'Visual Studio'
                    }
                ]
            },
            {
                name: 'Освіта',
                submenu: [
                    {
                        name: 'Освіта'
                    }
                ]
            }
        ]
    },
    {
        name: 'Підтримка'
    }
]);
myApp.constant('specials', [
    {
        img: 'https://scontent.oculuscdn.com/t64.5771-25/11162714_283652092025521_547216123_n.jpg/eve-valkyrie.jpg',
        title: 'EVE: Valkyrie',
        subtitle: 'FEATURED CONTENT',
        link: 'https://www.oculus.com/rift/#eve-valkyrie'
    },
    {
        img: 'https://scontent.oculuscdn.com/t64.5771-25/12504834_1610504179262797_1233001088_n.jpg/luckys-tale.jpg;',
        title: 'Lucky\'s Tale',
        subtitle: 'INCLUDED WITH ALL RIFT PURCHASES',
        link: 'https://www.oculus.com/rift/#luckys-tale'
    },
    {
        img: 'https://scontent.oculuscdn.com/t64.5771-25/12680264_165436440535334_659901318_n.jpg/oc3-stage-image.jpg',
        subtitle: 'FEATURED STORY',
        title: 'Announcing Oculus Connect 3 and Rift Availability Update',
        link: 'https://www.oculus.com/en-us/blog/announcing-oculus-connect-3-and-rift-availability-update/'
    }
]);