//Back-end API RESTful
//Rotas HTTP

import Fastify from "fastify";
import cors from '@fastify/cors'
import { appRoutes } from "./routes"

const app = Fastify()

/** 
 * Metodo HTTP: 
 * Get: Buscar informação
 * Post: Criar alguma coisa
 * Put: Atualizar algum recurso
 * Patch: Atualizar uma informação de um recurso
 * Delete: Deletar um recurso
 */

app.register(cors)
app.register(appRoutes)


app.listen({
    host: "0.0.0.0",
    port:3333,
}).then(() => {
    console.log('HTTP Server running')
    
})