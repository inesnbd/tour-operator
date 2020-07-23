var planes = require(.../controller/planes.js);
app.get('/planes', planes.index);
app.get('/planes/:country', planes.one);
app.post('/planes'.planes.create); // requete de creation
app.put('/planes', planes.update); // requete de mise a jour
app.delete('/planes/:id', planes.delete); // requete de suppression