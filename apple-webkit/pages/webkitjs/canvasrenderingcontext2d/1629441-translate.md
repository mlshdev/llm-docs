> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkitjs/canvasrenderingcontext2d/1629441-translate](https://developer.apple.com/documentation/webkitjs/canvasrenderingcontext2d/1629441-translate)

# translate

**Interface language:** Data

**Framework:** WebKit JS  
**Kind:** Instance Method  
**Availability:** Safari Desktop 3.0+ · Safari Mobile 1.0+

Moves the origin of the canvas coordinate system.

## Declaration

```
void translate(
    unrestricted float tx, 
    unrestricted float ty
);
```

## Parameters

- `tx`: The x-coordinate in the current canvas coordinate system to be made the new origin.
- `ty`: The y-coordinate in the current canvas coordinate system to be made the new origin.

<a id="discussion"></a>

## Discussion

The specified point x,y in the canvas coordinate system becomes the point 0,0 and the entire coordinate system is translated accordingly.

## See Also

### Changing the Coordinate System

- [rotate](1630553-rotate.md): Rotates the canvas coordinate system.
- [scale](1631799-scale.md): Scales the canvas coordinate system horizontally and vertically.
- [setTransform](1630015-settransform.md): Sets the transformation matrix.
- [transform](1629911-transform.md): Transforms the current transformation matrix using another matrix.
