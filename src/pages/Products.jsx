import React from "react";
import "../styles/Global.css";
import Eren from "../assets/eren.jpeg";
import Gojo from "../assets/gojo.jpeg";
import Luffy from "../assets/luffy.jpeg";

export default function Products() {
  return (
    <div>
      <div class="products" id="products">
        <h5>Our Products</h5>
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
            <br />
            <a href="#">Download Catalog </a>
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
            <br />
            <a href="#">
              Download Catalog <i class="bx bxs-download"></i>
            </a>
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
            <br />
            <a href="#">
              Download Catalog <i class="bx bxs-download"></i>
            </a>
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
            <br />
            <a href="#">
              Download Catalog <i class="bx bxs-download"></i>
            </a>
          </div>
        </div>
      </div>

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
            <br />
            <a href="#">
              Consult with us <i class="bx bxs-phone-call"></i>
            </a>
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
            <br />
            <a href="#">
              Consult with us <i class="bx bxs-phone-call"></i>
            </a>
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
            <br />
            <a href="#">
              Consult with us <i class="bx bxs-phone-call"></i>
            </a>
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
            <br />
            <a href="#">
              Consult with us <i class="bx bxs-phone-call"></i>
            </a>
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
              illum facere neque reiciendis ipsam ab numquam, officia doloribus
              quisquam asperiores illo.
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
              illum facere neque reiciendis ipsam ab numquam, officia doloribus
              quisquam asperiores illo.
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
              illum facere neque reiciendis ipsam ab numquam, officia doloribus
              quisquam asperiores illo.
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
    </div>
  );
}
