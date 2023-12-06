import React from "react";
import "../styles/Global.css";
import "boxicons";
import Images from "../assets/background-2.png";
import Eren from "../assets/eren.jpeg";
import Gojo from "../assets/gojo.jpeg";
import Luffy from "../assets/luffy.jpeg";

export default function Home() {
  return (
    <div>
      <body>
        <div class="products" id="products">
          <h5>Our Services</h5>
          <div class="products-items">
            <div class="item">
              <div class="icon">
                <box-icon type="solid" name="bolt"></box-icon>
              </div>
              <h4>Energies</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                voluptates eos porro eaque maxime. Voluptatem, consectetur odit.
                Facere doloribus a praesentium commodi, labore magni tempora
                ratione eveniet deleniti molestias fuga.
              </p>
            </div>
            <div class="item">
              <div class="icon">
                <box-icon name="cog"></box-icon>
              </div>
              <h4>Machinery</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                voluptates eos porro eaque maxime. Voluptatem, consectetur odit.
                Facere doloribus a praesentium commodi, labore magni tempora
                ratione eveniet deleniti molestias fuga.
              </p>
            </div>
            <div class="item">
              <div class="icon">
                <box-icon type="solid" name="factory"></box-icon>
              </div>
              <h4>Power and Grid</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                voluptates eos porro eaque maxime. Voluptatem, consectetur odit.
                Facere doloribus a praesentium commodi, labore magni tempora
                ratione eveniet deleniti molestias fuga.
              </p>
            </div>
            <div class="item">
              <div class="icon">
                <box-icon type="solid" name="radiation"></box-icon>
              </div>
              <h4>Semiconductor</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                voluptates eos porro eaque maxime. Voluptatem, consectetur odit.
                Facere doloribus a praesentium commodi, labore magni tempora
                ratione eveniet deleniti molestias fuga.
              </p>
            </div>
          </div>
        </div>

        <div class="about" id="about">
          <div class="left">
            <img src={Images} alt="Background" />
          </div>
          <div class="right">
            <h5>
              We help businesses like yours earn more customers & standout from
              competitors
            </h5>
            {/* <p>
              We help businesses like yours earn more customers, standout from
              competitors
            </p> */}
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
                <a href="#">View on LinkedIn </a>
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

        <div class="feedback" id="feedback">
          <h5>Clients Reviews</h5>

          <div class="customers">
            <div class="item">
              <div class="rating">
                <box-icon type="solid" name="star"></box-icon>
                <box-icon type="solid" name="star"></box-icon>
                <box-icon type="solid" name="star"></box-icon>
                <box-icon type="solid" name="star"></box-icon>
                <box-icon type="solid" name="star"></box-icon>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
                ex perspiciatis modi corrupti quaerat nemo harum quo voluptate
                illum facere neque reiciendis ipsam ab numquam, officia
                doloribus quisquam asperiores illo.
              </p>
              <div class="user">
                <img src={Gojo} alt="reviews" />
                <div class="info">
                  <h5>Satoru Gojo</h5>
                  <p>JJK Stongest Sorcerer</p>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="rating">
                <box-icon type="solid" name="star"></box-icon>
                <box-icon type="solid" name="star"></box-icon>
                <box-icon type="solid" name="star"></box-icon>
                <box-icon type="solid" name="star"></box-icon>
                <box-icon type="solid" name="star"></box-icon>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
                ex perspiciatis modi corrupti quaerat nemo harum quo voluptate
                illum facere neque reiciendis ipsam ab numquam, officia
                doloribus quisquam asperiores illo.
              </p>
              <div class="user">
                <img src={Luffy} alt="reviews" />
                <div class="info">
                  <h5>Monkey D. Luffy</h5>
                  <p>One Piece Pirate King</p>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="rating">
                <box-icon type="solid" name="star"></box-icon>
                <box-icon type="solid" name="star"></box-icon>
                <box-icon type="solid" name="star"></box-icon>
                <box-icon type="solid" name="star"></box-icon>
                <box-icon type="solid" name="star"></box-icon>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
                ex perspiciatis modi corrupti quaerat nemo harum quo voluptate
                illum facere neque reiciendis ipsam ab numquam, officia
                doloribus quisquam asperiores illo.
              </p>
              <div class="user">
                <img src={Eren} alt="reviews" />
                <div class="info">
                  <h5>Eren Yeager</h5>
                  <p>AoT Founding Titan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}
