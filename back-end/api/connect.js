// JavaScript Assíncrono
// await e async
// await -> ele espera a ação acontecer pra depois executar
// async -> depende do await para funcionar
// fullfilled -> quando a promessa for completa/preenchida.
import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://eduardosczepanski:qhP9SUp3npN4HbTF@cluster0.oij8h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");
// const songCollection = await db.collection("songs").find({}).toArray(); Sempre que for pegar informação de alguma database

// console.log(songCollection);
