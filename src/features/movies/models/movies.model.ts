export class Movies {
  _id: string;
  title: string;
  image: any;
  environment: string;
  dateOfEntry: Date;
  lastUpdated: Date;
  constructor(rawData: {[key in string]: any}) {
    this._id = rawData._id;
    this.title = rawData.title;
    this.image = rawData.image;
    this.environment = rawData.environment;
    this.dateOfEntry = rawData.dateOfEntry;
    this.lastUpdated = rawData.lastUpdated;
  }
}

export class Popular {
  adult: string;
  backdrop_path: string;
  genre_ids: [];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;

  constructor(rawData: {[key in string]: any}) {
    this.adult = rawData.adult;
    this.backdrop_path = rawData.backdrop_path;
    this.genre_ids = rawData.genre_ids;
    this.id = rawData.id;
    this.original_language = rawData.original_language;
    this.original_title = rawData.original_title;
    this.overview = rawData.overview;
    this.popularity = rawData.popularity;
    this.poster_path = rawData.poster_path;
    this.release_date = rawData.release_date;
    this.title = rawData.title;
    this.video = rawData.video;
    this.vote_average = rawData.vote_average;
    this.vote_count = rawData.vote_count;
  }
}
