import { clerkMiddleware } from "@clerk/nextjs/server";

// Protege TODA la app: cualquier ruta que no sea de Clerk (login/signup en su
// Account Portal alojado) exige estar autenticado antes de mostrar nada.
// No hay páginas públicas: si no estás logueado, Clerk te redirige a su
// pantalla de login alojada y te trae de vuelta acá después.
export default clerkMiddleware(async (auth) => {
  await auth.protect();
});

export const config = {
  matcher: [
    // Salta los archivos internos de Next y los estáticos con extensión conocida.
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
