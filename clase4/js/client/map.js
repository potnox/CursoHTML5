function Map()
{
	this._id = objPrototype()._id;//required by engine.js
	this.cells = {};
}
Map.prototype.getCellAt = function (pos)
{
	var index = pos.getIndex();
	var cell = this.cells[index];
	if (cell === undefined)
	{
		cell = new Cell();
		this.cells[index] = cell;
	}
	return cell;
}
Map.prototype.render = function(ctx)
{
	ctx.save();
	ctx.translate(-camera.pos.x,-camera.pos.y);
	for(var i = camera.initialX; i <= camera.endX; ++i)
	{
		for(var j = camera.initialY; j <= camera.endY; ++j)
		{
			var cell = this.getCellAt(new Pos(i,j));
			/*
			var dist = distanceBetwenPoints(player.pos,new Pos(i,j));
			//ctx.globalAlpha = 1 - ((dist-5)/(player.vision-5);
			if(dist > player.vision) ctx.globalAlpha = 0;
			else if(dist < 5) ctx.globalAlpha = 1;
			else ctx.globalAlpha = 1-dist/10;
			*/
			ctx.drawImage(cell.buffer,i*50,j*50);
		}
	}
	ctx.restore();
}
