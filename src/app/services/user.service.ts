import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  constructor() { }
  
  private HelpLink(): string {
    for(let i=0; i<20; i++){
     console.log(i); 
    }
    return 'This is a help Link'; 
  }
}
