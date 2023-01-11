// Link for connection 
// https://www.coderrocketfuel.com/article/store-mongodb-credentials-as-environment-variables-in-nodejs

// Import dotenv to read our env file
const dotenv = require('dotenv');
dotenv.config();

// Import MongoClient
const { MongoClient } = require('mongodb');

//Run main
async function main() {
    const uri = `mongodb+srv://admin:Hereitgoesnow@contacts.qhozpwv.mongodb.net/?retryWrites=true&w=majority`;
    //const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@contacts.qhozpwv.mongodb.net/?retryWrites=true&w=majority`;

    const client = new MongoClient(uri);
     
    try {
        await client.connect();
            // .then( (client) {
            //     let _db = client;
            //     callback(null, _db);
            // });
        console.log('We have a real connection here');
        await displayDb(client);


    } catch (err) {
        console.error(err);
    } finally {
        await client.close();
    }

}

main().catch(console.error);

async function displayDb(client) {
    const dbList = await client.db().admin().listDatabases();
    console.log("Databases: ")
    console.log("////////////////////////////////////////////////////////////");
    dbList.databases.forEach(db => {
        console.log(`- ${db.name}`);
    })
    console.log('DataBase Professional');
    const profDb = dbList.databases.professional;
    console.log(dbList.databases("professional").collection('data').find());
} 