import {
  service,
  ServiceResponse,
  endpoints,
} from '../../../core-services/rest-service';
import {stores} from '@/store';

export class MoviesService {
  popularList = () =>
    new Promise<any>((resolve, reject) => {
      try {
        service
          ?.get(
            `${endpoints.movies.popular}?api_key=1bd4b196208e259472d225ae1d3a5e33`,
          )
          .then(response => {
            console.log({response});
            stores.moviesStore.updatePopularList(response?.data);
            resolve(response?.data);
          })
          .catch(error => {
            reject(new ServiceResponse<any>(0, error.message, undefined));
          });
      } catch (error) {
        reject(error);
      }
    });
}
