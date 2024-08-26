// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

async function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  };

// retrieve database number in which id is available
  const getDatabase = await central(id)
  //console.log(getDatabase);

  // using retrieved database get user data from database for given id
  const dataForIdFromDb = await dbs[getDatabase](id);
  //console.log(dataForIdFromDb);

  //get data from vault for given id
  const dataForIdFromVault =  await vault(id);
  //console.log(dataForIdFromVault);

// Combine the results
    const userData = {
        id,
        name: dataForIdFromVault.name,
        username: dataForIdFromDb.username,
        email: dataForIdFromVault.email,
        address: dataForIdFromVault.address,
        phone: dataForIdFromVault.phone,
        website: dataForIdFromDb.website,
        company: dataForIdFromDb.company
    };
    return userData;

    /** return {
        ...dataForIdFromDb,
        ...dataForIdFromVault
    } */   // Can also return object using spread operator

}
const user1 = getUserData(2);
console.log(user1);


/** When complete, test your code by passing it many different values for id, including:
Valid numbers – 1 through 10 (inclusive).
Invalid numbers – less than 1 or higher than 10.
Invalid data types – strings, Booleans, etc. */

const user2 = getUserData(-2);
console.log(user2);

const user3 = getUserData(12);
console.log(user3);

const user5 = getUserData(false);
console.log(user5);

const user4 =  getUserData('person');
console.log(user4);


