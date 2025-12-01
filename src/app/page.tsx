"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Coffee, Heart } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="large"
      background="aurora"
      cardStyle="layered-gradient"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Bean & Brew"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Menu", id: "products" },
            { name: "Reviews", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="BEAN & BREW"
          description="Experience the finest specialty coffee, crafted with passion and served with warmth in our cozy café."
          slides={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764585526742-8k744cw9.jpg",
              imageAlt: "Coffee shop interior"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764585528416-hacgccs5.jpg",
              imageAlt: "Espresso with latte art"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764585529780-3gj0wfb8.jpg",
              imageAlt: "Coffee beans roasting"
            }
          ]}
          buttons={[
            { text: "Explore Menu", href: "products" },
            { text: "Reserve Table", href: "contact" }
          ]}
          autoplayDelay={4000}
          showDimOverlay={true}
        />
      </div>
      
      <div id="about" data-section="about">
        <TextSplitAbout
          title="Our Story"
          description={[
            "Bean & Brew was founded in 2015 by two coffee enthusiasts passionate about bringing specialty coffee culture to our community.",
            "We source our beans from sustainable farms around the world, roast them in-house, and serve every cup with care and expertise. Our baristas are certified professionals dedicated to creating the perfect drink for each customer.",
            "Beyond great coffee, we believe in creating a warm, welcoming space where people can connect, work, or simply enjoy a moment of peace."
          ]}
          buttons={[
            { text: "Visit Us Today", href: "contact" }
          ]}
          showBorder={false}
        />
      </div>
      
      <div id="products" data-section="products">
        <ProductCardOne
          title="Featured Menu"
          description="Discover our handcrafted specialty drinks and delicious pastries, made fresh daily."
          tag="Popular Items"
          tagIcon={Coffee}
          products={[
            {
              id: "1",
              name: "Classic Cappuccino",
              price: "$5.50",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764585531432-rfhd5np9.jpg",
              imageAlt: "Cappuccino"
            },
            {
              id: "2",
              name: "Iced Latte",
              price: "$6.00",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764585532659-hq33u6cz.jpg",
              imageAlt: "Iced Latte"
            },
            {
              id: "3",
              name: "Double Espresso",
              price: "$4.00",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764585533940-hfea1edx.jpg",
              imageAlt: "Double Espresso"
            },
            {
              id: "4",
              name: "Fresh Pastry",
              price: "$4.50",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764585535116-etf5014k.jpg",
              imageAlt: "Fresh Croissant"
            }
          ]}
          textboxLayout="default"
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Customers Love"
          description="Read what regular visitors have to say about their Bean & Brew experience."
          tag="Customer Reviews"
          tagIcon={Heart}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Regular Customer",
              company: "Local Designer",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764585536322-9ad5ewyn.jpg",
              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Freelance Writer",
              company: "Digital Media",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764585537578-k11rpgf8.jpg",
              imageAlt: "Michael Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Entrepreneur",
              company: "Tech Startup",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764585538862-72zewyld.jpg",
              imageAlt: "Emily Rodriguez"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Coffee Enthusiast",
              company: "Coffee Community",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764585539902-4u66ijz6.jpg",
              imageAlt: "David Kim"
            },
            {
              id: "5",
              name: "Jessica Martinez",
              role: "Teacher",
              company: "Education",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764585540882-w87s41lo.jpg",
              imageAlt: "Jessica Martinez"
            },
            {
              id: "6",
              name: "Thomas Wilson",
              role: "Business Owner",
              company: "Local Business",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764585542376-hxh51zgw.jpg",
              imageAlt: "Thomas Wilson"
            }
          ]}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Get In Touch"
          description="Have questions or want to reserve a table? We'd love to hear from you. Fill out the form below and we'll get back to you shortly."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Your Email",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your reservation or inquiry...",
            rows: 5,
            required: true
          }}
          buttonText="Send Message"
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Bean & Brew"
          copyrightText="© 2024 Bean & Brew Coffee Shop. All rights reserved."
          columns={[
            {
              title: "Hours",
              items: [
                { label: "Monday - Friday: 7AM - 9PM" },
                { label: "Saturday - Sunday: 8AM - 10PM" }
              ]
            },
            {
              title: "Location",
              items: [
                { label: "123 Coffee Lane" },
                { label: "City, State 12345" },
                { label: "Call: (555) 123-4567" }
              ]
            },
            {
              title: "Quick Links",
              items: [
                { label: "About", href: "about" },
                { label: "Menu", href: "products" },
                { label: "Contact", href: "contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}