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

class Sonic extends Sprite 
{
    constructor(x, y, context) 
    {
        super({
            context: context,
            path: 'images/sonic3_spritesheet.png',
            x: x,
            y: y,
            width: 114,
            height: 120,
            frameIndex: 0,
            row: 1,
            tickCount: 0,
            ticksPerFrame: 4,
            frames: 8
        });
    }

    walk() 
    {
        this.frames = 8;
        this.frameIndex = 0;
        this.row = 1;
        this.ticksPerFrame = 4;
    }

    run() 
    {
        this.frames = 4;
        this.frameIndex = 0;
        this.row = 2;
        this.ticksPerFrame = 2;
    }

    idle() 
    {
        this.frames = 9;
        this.frameIndex = 0;
        this.row = 0;
        this.ticksPerFrame = 12;
    }
}
