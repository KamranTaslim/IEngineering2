import React from "react";
import styles from "./ServicesDetail.module.css";
import { service_Detail_data } from "./ServicesDetails";
function ServicesDetail() {
  return (
    <>
      <div className={styles.main_ServiceDetails}>
        <img
          src="https://img.freepik.com/free-photo/photovoltaic-solar-power-panel-field-green-clean-alternative-power-energy-concept-ai-generative_123827-23424.jpg?t=st=1719307284~exp=1719310884~hmac=cef8091b951eedd9c9667cc319cafef5b8be86ee3639490c8d45d4427b5e3f8a&w=740"
          alt=""
        />
        <h1 className={styles.heading_serviceDetails}>Our Services</h1>
        <div className={styles.data_container}>
          {service_Detail_data.map((data, id) => (
            <div key={id} className={styles.data}>
              <img src={data.img} alt="box_img" />
              <p className={styles.name_para}>{data.name}</p>
              <ul className={styles.services_list}>
                {data.titles.map((title, index) => (
                  <li key={index}>{title}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ServicesDetail;
