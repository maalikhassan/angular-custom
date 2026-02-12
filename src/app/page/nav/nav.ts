import { Component, AfterViewInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav implements AfterViewInit {
  
  ngAfterViewInit() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
      navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
      });

      // Close menu when clicking on a link
      const navLinks = navMenu.querySelectorAll('.nav-link');
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          navToggle.classList.remove('active');
          navMenu.classList.remove('active');
        });
      });

      // Close menu when clicking outside
      document.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        if (!navToggle.contains(target) && !navMenu.contains(target)) {
          navToggle.classList.remove('active');
          navMenu.classList.remove('active');
        }
      });
    }
  }
}
