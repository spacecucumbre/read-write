const path = require('path');

const fs = require('fs');

function saveData(jsonPath, newName, overwrite) {

    let folderPath = path.join(__dirname, newName);

    if (fs.existsSync(folderPath)) {

        if (overwrite == true) {
            fs.readFile(jsonPath, function (err, data) {

                if (err) {
                    console.log(err);
                } else {
                    console.log(data);
                }

                let jsonArray = JSON.parse(data);
                console.log(jsonArray);

                jsonArray.forEach(function (element) {
                    const [name, surname] = element.name.split(" ");
                    const stringToSave = `Name: ${name}\nSurname: ${surname}\nStreet: ${element.address.street}\nZip Code: ${element.address.zipcode}\nCity: ${element.address.city}\nPhone: ${element.phone}`

                    fs.writeFileSync(path.join(folderPath, element.id + '-' + name + '-' + surname + '.txt'), stringToSave);
                })

            });
        }
        console.log('Folder exists.');
    } else {
        fs.mkdir(folderPath, function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log('Stworzono folder');
            }
        });

        fs.readFile(jsonPath, function (err, data) {

            if (err) {
                console.log(err);
            } else {
                console.log(data);
            }

            let jsonArray = JSON.parse(data);
            console.log(jsonArray);

            jsonArray.forEach(function (element) {
                const [name, surname] = element.name.split(" ");
                const stringToSave = `Name: ${name}\nSurname: ${surname}\nStreet: ${element.address.street}\nZip Code: ${element.address.zipcode}\nCity: ${element.address.city}\nPhone: ${element.phone}`

                fs.writeFileSync(path.join(__dirname, newName, element.id + '-' + name + '-' + surname + '.txt'), stringToSave);
            })

        });
    }
}

module.exports = saveData;