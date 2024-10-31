import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly url = 'http://localhost:3000/Products';
  
  constructor(private readonly http: HttpClient) { }

  getAllProducts(): Observable<IProduct[]> {
    console.log('Productos obtenidos');
    return this.http.get<IProduct[]>(this.url);
  }

  getProductById(id: string): Observable<IProduct> {
    console.log('Producto buscado', id);
    return this.http.get<IProduct>(`${this.url}/${id}`);
  }

  addProduct(product: IProduct): Observable<IProduct> {
    console.log('Producto registrado', product);
    return this.http.post<IProduct>(this.url, product);
  }

  updateProduct(id: string, product: IProduct): Observable<IProduct> {
    console.log('Producto actualizado', product);
    return this.http.put<IProduct>(`${this.url}/${id}`, product);
  }

  deleteProduct(id: string): Observable<IProduct> {
    console.log('Producto eliminado', id);
    return this.http.delete<IProduct>(`${this.url}/${id}`);
  }
  

}
