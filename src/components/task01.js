import React from "react";

function City() {
    const cities = ["Kraków", "Olsztyn", "Szczecin", "Ostrów Wielkopolski"];
    const len = cities.map(function (item) {
        return item.length;
    });
    console.log(len);

    return (
        <div>
            Naspępujące miasta: {cities}, ilość ich znaków sprawdź w inspektorze.
        </div>
    );
}
function Task01() {
    return (
        <City/>
    )
}

export default Task01;