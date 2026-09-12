> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkitjs/canvasrenderingcontext2d/1632556-beginpath](https://developer.apple.com/documentation/webkitjs/canvasrenderingcontext2d/1632556-beginpath)

# beginPath

**Interface language:** Data

**Framework:** WebKit JS  
**Kind:** Instance Method  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

Denotes the beginning of new path.

## Declaration

```
void beginPath();
```

<a id="discussion"></a>

## Discussion

Any calls to `arcTo`, `bezierCurveTo`, `lineTo`, `moveTo`, or `quadraticCurveTo` after a call to `beginPath` add elements to a single path. A subsequent call to `strokePath` or `fillPath` outlines or fills the shape defined by the path. It is not necessary to close a path in order to draw it.

## See Also

### Creating Paths (Lines, Curves, Arcs, and Shapes)

- [clip](1631003-clip.md): Constrains the clipping region of the canvas to the current path.
- [isPointInPath](1631233-ispointinpath.md): Determines whether a specified point is within the area defined by the current path.
