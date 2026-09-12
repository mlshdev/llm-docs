> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkitjs/canvasrenderingcontext2d/1631233-ispointinpath](https://developer.apple.com/documentation/webkitjs/canvasrenderingcontext2d/1631233-ispointinpath)

# isPointInPath

**Interface language:** Data

**Framework:** WebKit JS  
**Kind:** Instance Method  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

Determines whether a specified point is within the area defined by the current path.

## Declaration

```
boolean isPointInPath(
    DOMPath path, 
    unrestricted float x, 
    unrestricted float y, 
    optional CanvasWindingRule winding
);
```

## Parameters

- `x`: The x-coordinate of the point in the canvas coordinate system.
- `y`: The y-coordinate of the point in the canvas coordinate system.

<a id="return_value"></a>

## Return Value

Returns `true` if the point is within the path.

<a id="discussion"></a>

## Discussion

All parameter values are in the canvas’s current coordinate system, subject to the current transformation matrix (rotation, scale, and so on).

## See Also

### Creating Paths (Lines, Curves, Arcs, and Shapes)

- [beginPath](1632556-beginpath.md): Denotes the beginning of new path.
- [clip](1631003-clip.md): Constrains the clipping region of the canvas to the current path.
