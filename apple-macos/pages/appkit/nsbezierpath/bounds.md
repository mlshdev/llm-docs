> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbezierpath/bounds](https://developer.apple.com/documentation/appkit/nsbezierpath/bounds)

# bounds (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The bounding box of the path.

## Declaration

```swift
var bounds: NSRect { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the rectangle that encloses the path of the receiver. If the path contains curve segments, the bounding box encloses the curve but may not enclose the control points used to calculate the curve.

If the path is empty, accessing this property raises [genericException](https://developer.apple.com/documentation/foundation/nsexceptionname/genericexception).

## See Also

### Querying a Path

- [controlPointBounds](controlpointbounds.md): The bounding box of the path, including any control points.
- [currentPoint](currentpoint.md): The current point (the trailing point or ending point in the most recently added segment).
- [isEmpty](isempty.md): A Boolean value that indicates whether the path is empty.

# bounds (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The bounding box of the path.

## Declaration

```objectivec
@property (readonly) NSRect bounds;
```

<a id="Discussion"></a>

## Discussion

This property contains the rectangle that encloses the path of the receiver. If the path contains curve segments, the bounding box encloses the curve but may not enclose the control points used to calculate the curve.

If the path is empty, accessing this property raises [NSGenericException](https://developer.apple.com/documentation/foundation/nsexceptionname/genericexception).

## See Also

### Querying a Path

- [controlPointBounds](controlpointbounds.md): The bounding box of the path, including any control points.
- [currentPoint](currentpoint.md): The current point (the trailing point or ending point in the most recently added segment).
- [empty](isempty.md): A Boolean value that indicates whether the path is empty.
