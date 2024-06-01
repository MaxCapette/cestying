"use client";
import React from 'react';
import FormContact from './contactform';
import "./contact.css";

const ContactPage: React.FC = () => {
    return (
        
            <div className="contactCase " >
                <h2 className="text-gray-900 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl pb-10">Contactez-nous</h2>
                <p className="text-gray-900 md:text-lg lg:text-xl px-5 ">
                Vous avez un projet en tête ou avez besoin d&apos;aide avec nos produits ? </p>
                <p className="text-gray-900 md:text-lg lg:text-xl px-5 pb-10">
                Remplissez le formulaire ci-dessous et l&apos;un de nos experts vous contactera rapidement.
                </p>
                <FormContact />
            </div>
      
    );
};

export default ContactPage;