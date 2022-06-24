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
