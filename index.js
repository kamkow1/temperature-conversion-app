const inquirer = require('inquirer');

const celsiusToFahrenheit = (degs) => (9 * degs + (160)) / 5;
const fahrenheitToCelsius = (degs) => (5 * (degs - 32)) / 9;

inquirer
    .prompt([
        {
            type: 'list',
            name: 'operationType',
            message: 'wybierz rodzaj operacji',
            choices: ['°C => °F', '°F => °C']
        }
    ])
    .then((a) => {
        if (a.operationType === '°C => °F') {
            console.info('wybrano °C => °F');
            inquirer
                .prompt([
                    {
                        type: 'number',
                        name: 'celsius',
                        message: 'podaj wartość w stopniach celsiusza'
                    }
                ]).then((anws) => {
                    console.info(`${anws.celsius} stopni celsiusza to ${celsiusToFahrenheit(anws.celsius)} stopni fahrenheita`);
                });
        }

        if (a.operationType === '°F => °C') {
            console.info('wybrano °F => °C');
            inquirer
                .prompt([
                    {
                        type: 'number',
                        name: 'fahrenheit',
                        message: 'podaj wartość w stopniach fahrenheita'
                    }
                ]).then((anws) => {
                    console.info(`${anws.fahrenheit} stopni fahrenheita to ${fahrenheitToCelsius(anws.fahrenheit)} celsiusza`);
                });
        }
    });