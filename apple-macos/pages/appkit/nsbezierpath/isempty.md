> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbezierpath/isempty](https://developer.apple.com/documentation/appkit/nsbezierpath/isempty)

# isEmpty (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the path is empty.

## Declaration

```swift
var isEmpty: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the path contains no elements, or [false](https://developer.apple.com/documentation/swift/false) if it contains at least one element.

## See Also

### Querying a Path

- [bounds](bounds.md): The bounding box of the path.
- [controlPointBounds](controlpointbounds.md): The bounding box of the path, including any control points.
- [currentPoint](currentpoint.md): The current point (the trailing point or ending point in the most recently added segment).

# empty (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the path is empty.

## Declaration

```objectivec
@property (readonly, getter=isEmpty) BOOL empty;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the path contains no elements, or [false](https://developer.apple.com/documentation/swift/false) if it contains at least one element.

## See Also

### Querying a Path

- [bounds](bounds.md): The bounding box of the path.
- [controlPointBounds](controlpointbounds.md): The bounding box of the path, including any control points.
- [currentPoint](currentpoint.md): The current point (the trailing point or ending point in the most recently added segment).
