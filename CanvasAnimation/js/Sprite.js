/*

    Canvas Animation
    Example code for ISFT151 for Educational Purposes
    Prácticas Profesionalizantes III

    Copyright 2022 mgsantiago <mgsantiago@protonmail.com>

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation; either version 2 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program; if not, write to the Free Software
    Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
    MA 02110-1301, USA.
*/

class Sprite 
{
    constructor(options) 
    {
		//Contexto dibujable (elemento canvas)
        this.context = options.context;
        
        //Imagen que contiene la secuencia de cuadros
        this.image = new Image();
        this.image.src = options.path;
        
        //Posición (x,y) del contexto de dibujo
        this.x = options.x;
        this.y = options.y;
        
        //Tamaño del cuadro (ancho, alto)
        this.width = options.width; 
        this.height = options.height;
        
        //Cantidad de cuadros en una fila
        this.frames = options.frames; 
        
        //Cuadro actual
        this.frameIndex = options.frameIndex; 
        
        //Número de fila que posee los cuadros
        this.row = options.row; 
        
        //Velocidad de la animación
        this.ticksPerFrame = options.ticksPerFrame; 
        
        //Tiempo transcurrido
        this.tickCount = options.tickCount; 
    }
	
	/* update() se encarga de mover la posición del cuadro, actualiza la información necesaria para dibujar el próximo cuadro */
    update()
    {
        this.tickCount += 1;
        
        if ( this.tickCount > this.ticksPerFrame )
        {
            this.tickCount = 0;
            
            if (this.frameIndex < this.frames - 1)
            {
                this.frameIndex += 1;
            }
            else
            {
                this.frameIndex = 0;
            }
        }
    }
	
	/* render() se encarga de dibujar un cuadro en una región de la pantalla dibujable */
    render()
    {
        this.context.drawImage(
            this.image,
            this.frameIndex * this.width, // Coordenada del eje x de la esquina superior izquierda
            this.row * this.height, // Coordenada del eje y de la esquina superior izquierda
            this.width, // Ancho del rectángulo
            this.height, // Altura del rectángulo
            this.x, // Posición x
            this.y,// Posición y
            this.width, // Ancho del cuadro
            this.height // Alto del cuadro
        );
    }
}
