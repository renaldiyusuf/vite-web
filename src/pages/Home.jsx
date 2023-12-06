import React from "react";
import "../styles/Global.css";

export default function Home() {
  return (
    <div>
      <body>
        <div class="main" id="main">
          <div class="left">
            <h5>General Trading and Power Generating T&D Consultance</h5>
            <h3>Company Tagline!</h3>
            <p>
              Hero section should also include a brief overview of the company
              and its mission statement.
            </p>
            <button>Explore more</button>
          </div>
        </div>

        <div class="products" id="products">
          <h5>Our Services</h5>
          <div class="products-items">
            <div class="item">
              <div class="icon">
                <i class="bx bxs-bolt"></i>
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
                <i class="bx bx-cog"></i>
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
                <i class="bx bxs-factory"></i>
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
                <i class="bx bxs-radiation"></i>
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
            <img src={"../assets/background-1.png"} />
          </div>
          <div class="right">
            <h5>About us</h5>
            <p>
              This section should provide a more detailed overview of the
              company, its history, its team, and its culture.
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
                <p>President Commissioner</p>
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

        <div class="feedback" id="feedback">
          <h5>Clients Reviews</h5>

          <div class="customers">
            <div class="item">
              <div class="rating">
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
                ex perspiciatis modi corrupti quaerat nemo harum quo voluptate
                illum facere neque reiciendis ipsam ab numquam, officia
                doloribus quisquam asperiores illo.
              </p>
              <div class="user">
                <img src="../assets/gojo.jpeg" />
                <div class="info">
                  <h5>Satoru Gojo</h5>
                  <p>JJK Stongest Sorcerer</p>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="rating">
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
                ex perspiciatis modi corrupti quaerat nemo harum quo voluptate
                illum facere neque reiciendis ipsam ab numquam, officia
                doloribus quisquam asperiores illo.
              </p>
              <div class="user">
                <img src="../assets/luffy.jpeg" />
                <div class="info">
                  <h5>Monkey D. Luffy</h5>
                  <p>One Piece Pirate King</p>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="rating">
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
                ex perspiciatis modi corrupti quaerat nemo harum quo voluptate
                illum facere neque reiciendis ipsam ab numquam, officia
                doloribus quisquam asperiores illo.
              </p>
              <div class="user">
                <img src="../assets/eren.jpeg" />
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
