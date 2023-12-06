import React from "react";
import "../styles/Global.css";

export default function About() {
  return (
    <div>
      <div class="about" id="about">
        <div class="left"></div>
        <div class="right">
          <h3>About us</h3>
          <h5>Company History & Culture</h5>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
            eveniet enim cupiditate repellendus accusantium culpa et maiores.
            Facilis quas amet, rerum eum magni eaque sunt sequi unde eligendi
            quibusdam temporibus?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
            consequatur, nulla rem accusamus quisquam laudantium sunt quasi in
            architecto odit atque optio a laboriosam, accusantium quas ab autem
            odio non!
          </p>
        </div>
      </div>

      <div class="founder" id="teams">
        <div class="header">
          <div class="info">
            <h5>Our Founders</h5>
          </div>
        </div>
        <div class="founder-items">
          <div class="item">
            <div class="info">
              <h4>Yanuar Hakim</h4>
              <p>Founder & President Commissioner</p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolores, repudiandae. Mollitia, doloribus tenetur, quo quia
                excepturi distinctio dolor adipisci, amet corporis explicabo
                necessitatibus recusandae provident? Quibusdam eveniet iste
                magni minima?
              </p>
              <a href="#">
                View on LinkedIn <i class="bx bx-link-external"></i>
              </a>
            </div>
          </div>
          <div class="item">
            <div class="info">
              <h4>Auliani Ramadana</h4>
              <p>Managing Director</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatibus ab, accusantium aliquam quod dolorum tempore
                consequatur illo quidem harum ad suscipit aut velit quisquam
                nemo nisi consectetur natus necessitatibus autem?
              </p>
              <a href="#">
                View on LinkedIn <i class="bx bx-link-external"></i>
              </a>
            </div>
          </div>
          <div class="item">
            <div class="info">
              <h4>Renaldi Yusuf</h4>
              <p>Operational Director</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit cumque id mollitia excepturi molestiae suscipit
                voluptate fuga, perferendis rem recusandae doloremque beatae
                eius quod enim sed dicta ad labore consectetur?
              </p>
              <a href="#">
                View on LinkedIn <i class="bx bx-link-external"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
