import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit {

  @ViewChild('moto') moto!: ElementRef<HTMLImageElement>;

  ngAfterViewInit(): void {
    const el = this.moto.nativeElement;

    el.classList.remove('moto-arrastre');
    void el.offsetWidth;
    el.classList.add('moto-arrastre');
  }

  animarMoto(): void {
    const el = this.moto.nativeElement;

    el.classList.remove('moto-correr');
    void el.offsetWidth;
    el.classList.add('moto-correr');
  }
}
