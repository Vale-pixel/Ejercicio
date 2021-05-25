class Calidad1_5 {

        constructor(x,y,r,g,b){
            this.x = x;
            this.y = y;
            this.r = r;
            this.g= g;
            this.b = b;
    
        }
        
    
        mostrar(){
            fill(this.r,this.g,this.b);
            rect(this.x,this.y,50,50);
        }
    
    
}