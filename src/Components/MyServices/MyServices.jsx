import React from 'react'
import './MyServices.css'
const MyServices = () => {
    const services = [
        {
          id: 1,
          title: 'Web Development',
          description: 'Build modern and responsive websites tailored to your needs.'
        },
        {
          id: 2,
          title: 'Mobile App Development',
          description: 'Create intuitive and user-friendly mobile applications.'
        },
        {
          id: 3,
          title: 'SEO Optimization',
          description: 'Enhance your website visibility with advanced SEO strategies.'
        },
        {
          id: 4,
          title: 'Cloud Solutions',
          description: 'Provide secure and scalable cloud services for your business.'
        }
      ];
    return (
      <section className="my-services">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-description">
            Explore the wide range of services we offer to meet your business needs.
          </p>
  
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default MyServices
