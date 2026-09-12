> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbezierpath/currentpoint](https://developer.apple.com/documentation/appkit/nsbezierpath/currentpoint)

# currentPoint (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The current point (the trailing point or ending point in the most recently added segment).

## Declaration

```swift
var currentPoint: NSPoint { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the point from which the next drawn line or curve segment begins. If the path is empty, accessing this property raises [genericException](https://developer.apple.com/documentation/foundation/nsexceptionname/genericexception).

## See Also

### Related Documentation

- [curve(to:controlPoint1:controlPoint2:)](curve%28to_controlpoint1_controlpoint2_%29.md): Adds a Bezier cubic curve to the path.
- [close()](close%28%29.md): Closes the most recently added subpath.
- [move(to:)](move%28to_%29.md): Moves the path’s current point to the specified location.
- [line(to:)](line%28to_%29.md): Appends a straight line to the path.

### Querying a Path

- [bounds](bounds.md): The bounding box of the path.
- [controlPointBounds](controlpointbounds.md): The bounding box of the path, including any control points.
- [isEmpty](isempty.md): A Boolean value that indicates whether the path is empty.

# currentPoint (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The current point (the trailing point or ending point in the most recently added segment).

## Declaration

```objectivec
@property (readonly) NSPoint currentPoint;
```

<a id="Discussion"></a>

## Discussion

This property contains the point from which the next drawn line or curve segment begins. If the path is empty, accessing this property raises [NSGenericException](https://developer.apple.com/documentation/foundation/nsexceptionname/genericexception).

## See Also

### Related Documentation

- [curveToPoint:controlPoint1:controlPoint2:](curve%28to_controlpoint1_controlpoint2_%29.md): Adds a Bezier cubic curve to the path.
- [closePath](close%28%29.md): Closes the most recently added subpath.
- [moveToPoint:](move%28to_%29.md): Moves the path’s current point to the specified location.
- [lineToPoint:](line%28to_%29.md): Appends a straight line to the path.

### Querying a Path

- [bounds](bounds.md): The bounding box of the path.
- [controlPointBounds](controlpointbounds.md): The bounding box of the path, including any control points.
- [empty](isempty.md): A Boolean value that indicates whether the path is empty.
