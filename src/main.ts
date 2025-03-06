import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule, NgIf, AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
 imports: [
		NgIf,
		AsyncPipe,
	 	CommonModule
  ],
  template: `
    <div class="menu-container">
      <div class="menu">
        <div class="menu-content">
          <div class="menu-logo">Strategic Domination</div>
          <nav class="menu-nav">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Contact</a>
          </nav>
          <button class="theme-toggle" (click)="toggleTheme()" aria-label="Toggle theme">
            <svg class="theme-icon" [ngClass]="{'sun': currentTheme === 'light', 'moon': currentTheme === 'dark'}" viewBox="0 0 24 24">
              <path *ngIf="currentTheme === 'dark'" fill="currentColor" d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1-8.313-12.454z"/>
              <path *ngIf="currentTheme === 'light'" fill="currentColor" d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"/>
            </svg>
          </button>
          <button class="cta-button">Join the Battle</button>
        </div>
      </div>
    </div>

    <section class="hero">
      <h1>Build Your Family, Conquer Blocks, and Rule the Nation</h1>
      <p>Strategize your moves, dominate territories, and become the ultimate leader in this intense browser-based game of power and strategy.</p>
      <button class="cta-button">Claim Your Territory Now</button>
    </section>

    <section class="features">
      <div class="feature">
        <h3>Build Your Family</h3>
        <p>Recruit members, strengthen your gang, and expand your influence.</p>
      </div>
      <div class="feature">
        <h3>Conquer Blocks</h3>
        <p>Strategize and dominate territories to gain control.</p>
      </div>
      <div class="feature">
        <h3>Rule the Nation</h3>
        <p>Become the ultimate leader by outsmarting your rivals.</p>
      </div>
    </section>

    <section class="testimonials">
      <h2>What Players Are Saying</h2>
      <div class="testimonial">
        <p>"The best strategy game I’ve played in years!"</p>
        <span>- Player123</span>
      </div>
    </section>

    <footer>
      <div class="footer-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Contact Us</a>
      </div>
      <div class="social-links">
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">Discord</a>
      </div>
    </footer>
  `,
})
export class App {
  currentTheme = 'dark';

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', this.currentTheme);
  }
}

bootstrapApplication(App)
