import { firebase } from '../database/firebase';
import { Actions } from 'react-native-router-flux';

export const addSession =  (name, topic, date, location, time) => {
    firebase.database().ref().child(name).set({
        name: name,
        topic: topic,
        date: date,
        location: location,
        time: time
    }, () => Actions.BookStatusScreen());
}

// export const updateStudent =  (name, matricno, major, year, status) => {
//     db.ref('/students').child(matricno).update({
//         name: name,
//         matricno: matricno,
//         major: major,
//         year: year,
//         status: status
//     }, () => Actions.ListScreen());
// }

// export const removeStudent =  (matricno) => {
//     db.ref('/students').child(matricno).remove();
//     Actions.ListScreen();
// }