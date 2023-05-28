import axios from "axios";

const api = axios.create({
    baseURL: 'http://academico3.rj.senac.br/api'
});

export default api;

//http://academico3.rj.senac.br/api/UnidadeCurricular/filterByModulo/2

//"/UnidadeCurricular/filterByModulo/2"