import {connection} from '../../db/connection';

export async function listCategories() {
  return await connection('category');
}
