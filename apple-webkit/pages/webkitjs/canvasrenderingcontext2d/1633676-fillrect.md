> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkitjs/canvasrenderingcontext2d/1633676-fillrect](https://developer.apple.com/documentation/webkitjs/canvasrenderingcontext2d/1633676-fillrect)

# fillRect

**Interface language:** Data

**Framework:** WebKit JS  
**Kind:** Instance Method  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

Fills a specified rectangle in the current fill color, gradient, or pattern.

## Declaration

```
void fillRect(
    unrestricted float x, 
    unrestricted float y, 
    unrestricted float width, 
    unrestricted float height
);
```

## Parameters

- `x`: The x-coordinate of the left edge of the rectangle, in pixels from the left edge of the canvas coordinate system.
- `y`: The y-coordinate of the top edge of the rectangle, in pixels from the top of the canvas coordinate system.
- `width`: The width of the rectangle, in pixels.
- `height`: The height of the rectangle, in pixels.

<a id="discussion"></a>

## Discussion

All parameter values are in the canvas’s current coordinate system, subject to the current transformation matrix (rotation, scale, and so on).

## See Also

### Drawing Rectangles

- [clearRect](1632646-clearrect.md): Clears the specified rectangle to transparent black—RGBa(0,0,0,0).
- [strokeRect](1632379-strokerect.md): Draws a rectangle using the current stroke color, pattern, or gradient.
