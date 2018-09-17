const Router = require('express').Router;
const uuid = require('uuid4');
const routes = Router();

routes.get('/200', function(req, res) {
    const id = uuid();
    uuid.valid(id);
    console.log(id + ' everythings good');
    res.send('OK');
});

routes.get('/noaccess/1', (req, res) => {
    const id = uuid();
    uuid.valid(id);
    console.log(id + ' requesting access 1');
    // The message we send back to the client is almost the same at the
    // route noaccess2, let's make them the same
    try{
        throw new Error("You don't have access to this route.");
    }
    catch(e){
        console.log(id + " You don't have access to this route.");
    }
    res.status(200).send(':\\')
});

routes.get('/noaccess/2', (req, res) => {
    const id = uuid();
    uuid.valid(id);
    console.log(id + 'requesting access 2');
    
    try{
        throw new Error("You don't have access to this route.");
    }
    catch(e){
        console.log(id + " You don't have access to this route.");
    }
    res.status(200).send(':/')
});

routes.get('/internal', (req, res) => {
    const id = uuid();
    uuid.valid(id);
    console.log(id + ' I should pass my id down the rabbit hole');
    someInternalFunction(id);
    res.status(200).send("No time to stop and talk I'm late I'm late I'm late");
});

function someInternalFunction(id) {
    console.log(id + ' my id should match the one that came before me');

    
    try{
        throw new Error("Deep from within");
    }
    catch(e){
        console.log(id + " Deep from within");
    }
}

module.exports = routes;
