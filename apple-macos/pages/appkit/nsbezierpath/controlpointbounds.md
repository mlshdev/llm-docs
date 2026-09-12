> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbezierpath/controlpointbounds](https://developer.apple.com/documentation/appkit/nsbezierpath/controlpointbounds)

# controlPointBounds (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The bounding box of the path, including any control points.

## Declaration

```swift
var controlPointBounds: NSRect { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the rectangle that encloses the receiver’s path. If the path contains curve segments, the bounding box encloses the control points of the curves as well as the curves themselves.

## See Also

### Querying a Path

- [bounds](bounds.md): The bounding box of the path.
- [currentPoint](currentpoint.md): The current point (the trailing point or ending point in the most recently added segment).
- [isEmpty](isempty.md): A Boolean value that indicates whether the path is empty.

# controlPointBounds (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The bounding box of the path, including any control points.

## Declaration

```objectivec
@property (readonly) NSRect controlPointBounds;
```

<a id="Discussion"></a>

## Discussion

This property contains the rectangle that encloses the receiver’s path. If the path contains curve segments, the bounding box encloses the control points of the curves as well as the curves themselves.

## See Also

### Querying a Path

- [bounds](bounds.md): The bounding box of the path.
- [currentPoint](currentpoint.md): The current point (the trailing point or ending point in the most recently added segment).
- [empty](isempty.md): A Boolean value that indicates whether the path is empty.
