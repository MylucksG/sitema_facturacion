import React from "react";
import PageTitle from "../../components/Common/PageTitle";

function AboutScreen() {
  return (
    <div>
      <div className="p-4">
        <div className="bg-white rounded-xl p-3 font-title">
          <PageTitle title="Acerca de" />
          <div className="mt-4 mb-5 flex flex-row items-center">
            <img
              src="https://media0.giphy.com/media/YmyQ7jxLR1xJeefeB0/giphy.gif"
              className="h-12 mr-3"
              alt="Git"
            />
            <div>
              <a
                href="https://twitter.com/Guaycha_shogi"
                target={"_blank"}
                className="underline cursor-pointer"
                rel="noreferrer"
              >
                Hola, yo soy Mylucks.
              </a>
              <h1> Este es un sistema de facturación gratuito para su negocio.</h1>
            </div>
          </div>

          <PageTitle title="Sistema de Facturación" />
          <div className="mt-2 pl-4 text-sm">
            <ul class="list-disc">
              <li> Puede gestionar fácilmente sus productos</li>
              <li> Puede gestionar fácilmente sus clientes</li>
              <li> Puede exportar a PDF </li>
              <li> Puede exportar a imagen </li>
            </ul>
          </div>
          <div className="font-title mt-3 mb-5">
            <div>
              🤝 Hagamos nuestro mejor esfuerzo!!
            </div>

 
          </div>

          <PageTitle title="Construido con" />
          <div className="mt-2 mb-5 pl-4 text-sm">
            <ul class="list-disc">
              <li> Framer Motion Para cada componente Animación</li>
              <li> Iconos de widgets de Lottiefiles para el panel</li>
              <li> IndexedDB para almacenamiento local </li>
              <li> ReactJS </li>
            </ul>
          </div>

          <PageTitle title="XContactoX" />
          <div className="mt-2 pl-1 text-sm">
            <ul class="list-disc">
            <h1> +0000000000000 </h1>
            </ul>

          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutScreen;