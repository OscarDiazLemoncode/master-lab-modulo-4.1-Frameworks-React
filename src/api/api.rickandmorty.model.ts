export interface ApiCharacterResponse {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: null | string;
  };
  results: CharacterEntity[];
}

export interface CharacterEntity {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface Pagination {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: null | string;
  };
}
