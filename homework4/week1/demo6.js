//绘制三角形
(function(){
    CanvasRenderingContext2D.prototype.triangle=function(x1,x2,x3,y1,y2,y3){
        this.moveTo(x1,y1);
        this.lineTo(x2,y2);
        this.lineTo(x3,y3);
        this.closePath();
        this.stroke();
    }
})