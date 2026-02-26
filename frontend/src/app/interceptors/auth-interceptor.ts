import { HttpInterceptorFn } from '@angular/common/http';
/*
*intercepto de autenticacion
*agrega automaticamente el JWT a todas las peticiones HTTP
*Excepto login y register)
 */
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  //obtener el token del localStorage
  const token = localStorage.getItem('token');

  //Debug:verificacion si hay token y la URL 
  console.log('[Auth Interceptor] URL:', req.url);
  console.log('[Auth Interceptor] Token existe:', !!token);

  //si la peticion es login /register, no modificar
  if (req.url.includes('/login') || req.url.includes('/register')) {
  console.log('[Auth Interceptor] Ruta Pública, no se agrega token');
  return next(req);
  }

 //si no hay token, continuar si el (puede ser ruta publica)
  if (!token) {
    console.log('[Auth Interceptor] no hay token en localStorage');
    return next(req);
  }

  //clonar la petición y agregar el header Authorization
  const clonedRequest = req.clone({
    setHeaders: {
      Authorization: `Beare ${token}`
    }
  });

  console.log('[Auth Interceptor] Token agregado al header');

  return next(clonedRequest)
};
