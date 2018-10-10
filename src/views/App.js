import React, { Component } from "react";
import logo from "../images/logo.png";

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="Marcos Navarro - logo" />
          <h1 className="app-title">Marcos Navarro Pérez</h1>
          <h2 className="app-subtitle">Desarrollador Fullstack Web y Apps</h2>
        </header>
        <div className="app-body">
          <p>
            Hola, me presento, soy Marcos Navarro desarrollador de aplicaciones
            tanto web como para dispositivos móviles.
          </p>
          <p>
            Para empezar a conocerme mejor, os cuento un poco mi historia. Mi
            vocación viene desde años atrás, en la que en el instituto tuve que
            decidir a qué me iba a dedicar y la asignatura de Informática me dió
            la respuesta, me inquietó muchísimo y me hizo entrar muy a fondo en
            este mundillo, empezando a programar en Q-BASIC.
          </p>
          <p>
            Una vez terminado el Bachillerato, me inscribí en el módulo de Grado
            Superior en Sistemas de Telecomunicaciones e Informáticos. Dos años,
            los cuales fueron para mí dónde más me hizo ver que mi camino
            elegido había sido el correcto. Aprendiendo muchísimo cada día,
            tanto de la rama de telecomunicaciones y la de informática.
          </p>
          <p>
            Una vez terminada esa etapa de dos años, hice las prácticas en mi
            primera empresa, la cual más tarde, aunque esta estaba enfocada más
            a la parte de telecomunicaciones, me hizo aún más crecer y obtener
            sobre todo experiencia laboral.
          </p>
          <p>
            Pasado dos años y unos meses me quedé sin trabajo y aunque en ese
            tiempo no había dejado de lado a la programación, volví a las
            andadas con más fuerza asistiendo a cursos, meetings y volviendome a
            relacionarme más a fondo con el mundo de la programación.
          </p>
          <p>
            A principios me relacione más con la programación web, la cual en
            estos cursos y charlas a las que asistía iban más enfocadas a ello.
            Fui conociendo los distintos CMS (Wordpress, Joomla!, …), con el que
            iba mejorando y aprendiendo buenas practicas a la hora de escribir
            código y estructurarlo con patrones de diseño, el más usado MVC. Por
            lo que mis primeros lenguajes fueron PHP, MySQL, Javascript
            (jQuery). También fui mejorando y cogiendo una buena habilidad con
            CSS y usando algunos de sus preprocesadores (Less, Sass). Fui
            conociendo el Cloud Computing con Openshift que fue el primero dónde
            dí mis primeros pasos, aunque hay muchos más (Heroku, DigitalOcean).
            Con el paso del tiempo y tras unos cuantos cursos salió mi segundo
            empleo.
          </p>
          <p>
            En el, mi trabajo consistía en desarrollar diferentes proyectos web
            con diferentes tecnologías, tanto del lado back-end como front-end.
            Al igual que desarrollar aplicaciones nativas para Android. Fue un
            puesto de trabajo con el que más me ayudó a conocerme, a superar
            retos y sobretodo dónde más aprendí en experiencia laboral en el
            mundo de la programación.
          </p>
          <p>
            Mis ganas de evolucionar y de seguir creciendo cada vez eran más
            grandes, así que decidí cambiar de rumbo cambiar. En mi actual
            empresa, estoy muy contento con mi andadura del aprendizaje y
            crecimiento continuo.
          </p>
          <p>
            En definitiva, un inquieto y amante del mundo binario. Cada día es
            un día más para aprovecharlo y seguir aprendiendo más sobre este
            mundo en el que nunca deja de enseñarme. Ganas de seguir aprendiendo
            al 100%.
          </p>
          <hr className="separator" />
          <h3 className="header-3">Experiencia</h3>
          <p>
            <label className="label-li">PcComponentes y Multimedia SL</label>{" "}
            <span className="date">(Septiembre 2018 - Actualmente)</span>
          </p>
          <p>Programador ReactJS</p>
          <p>
            <label className="label-li">Fundación I+D del Software Libre</label>{" "}
            <span className="date">(Septiembre 2016 - Septiembre 2018)</span>
          </p>
          <p>Programador Fullstack</p>
          <p>
            <label className="label-li">Codigonexo S.L.U.</label>{" "}
            <span className="date">(Octubre 2013 - Septiembre 2016)</span>
          </p>
          <p>Programador web FullStack y Android</p>
          <p>
            <label className="label-li">Infogra S.L.U.</label>{" "}
            <span className="date">(Agosto 2010 - Octubre 2012)</span>
          </p>
          <p>
            Especialista en Fibra Óptica e instalación y mantenimiento de redes
            informáticas.
          </p>
          <hr className="separator" />
          <h3 className="header-3">Formación</h3>
          <p>
            Desarrollo de aplicaciones con Symfony 3{" "}
            <span className="date">(Enero 2016 – Junio 2016)</span>
          </p>
          <p>
            Desarrollo de servicios en la nube con HTML5, Javascript y node.js{" "}
            <span className="date">(Junio 2015 – Agosto 2015)</span>
          </p>
          <p>
            Curso Desarrollo en HTML5, CSS y Javascript de WebApps, incluyendo
            móviles FirefoxOS{" "}
            <span className="date">(Octubre 2014 – Diciembre 2014)</span>
          </p>
          <p>
            Curso de Diseño y programación de Aplicaciones Web{" "}
            <span className="date">(Abril 2013 – Octubre 2013)</span>
          </p>
          <p>
            Curso de Programación Web y Administrador de Sistemas{" "}
            <span className="date">(Marzo 2012 – Agosto 2012)</span>
          </p>
          <p>
            Curso de Administración y Diseñador de Bases de datos en Oracle{" "}
            <span className="date">(Enero 2012 – Abril 2012)</span>
          </p>
          <p>
            FPS en Sistemas de Telecomunicaciones e Informáticos{" "}
            <span className="date">(Septiembre 2008 – Junio 2010)</span>
          </p>
        </div>
        <p className="app-icons-social">
          <a href="https://github.com/marcnava13" className="fa fa-github" />
          <a
            href="https://www.linkedin.com/in/marcosnp"
            className="fa fa-linkedin"
          />
        </p>
        <p className="app-footer">© Copyright 2018 Marcos Navarro Pérez</p>
      </div>
    );
  }
}

export default App;
