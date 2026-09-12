> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextselectionhandleview/direction](https://developer.apple.com/documentation/uikit/uitextselectionhandleview/direction)

# direction (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

The orientation of the selection handle.

## Declaration

```swift
var direction: NSDirectionalRectEdge { get set }
```

<a id="Discussion"></a>

## Discussion

Specify [leading](../nsdirectionalrectedge/leading.md) if this view represents the leading selection handle or [trailing](../nsdirectionalrectedge/trailing.md) if it represents the trailing selection handle. The system uses this information to determine where to differentiate the selection handles visually.

## See Also

### Specifying the handle details

- [customShape](customshape.md): The custom shape to draw for the stem of the selection handle.
- [isVertical](isvertical.md): Convenience accessor for @c direction calculations.

# direction (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

The orientation of the selection handle.

## Declaration

```objectivec
@property (nonatomic, assign) NSDirectionalRectEdge direction;
```

<a id="Discussion"></a>

## Discussion

Specify [NSDirectionalRectEdgeLeading](../nsdirectionalrectedge/leading.md) if this view represents the leading selection handle or [NSDirectionalRectEdgeTrailing](../nsdirectionalrectedge/trailing.md) if it represents the trailing selection handle. The system uses this information to determine where to differentiate the selection handles visually.

## See Also

### Specifying the handle details

- [customShape](customshape.md): The custom shape to draw for the stem of the selection handle.
- [vertical](isvertical.md): Convenience accessor for @c direction calculations.
