export interface PeliculaModel {
    id: number;
    titulo: string;
    director: string;
    duracion: number;
    genero: string;
    sinopsis: string;
    fechaEstreno: Date;
    poster: string;
    rating: number;
    votos: number;
    precio: number;
    precioPromocionalFin: Date;
    precioPromocionalInicio: Date;
    precioPromocionalFinFin: Date;
    precioPromocionalInicioInicio: Date;
    precioPromocionalFinInicio: Date;
}