> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uihoverstyle/shape-21npk](https://developer.apple.com/documentation/uikit/uihoverstyle/shape-21npk)

# shape

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

The shape to use for the hover effect.

## Declaration

```swift
@MainActor @preconcurrency var shape: UIShape? { get set }
```

<a id="Discussion"></a>

## Discussion

If the value of this property is `nil`, the system chooses a default shape based on the view.

## See Also

### Specifying a hover shape

- [UIShape](../uishape-swift.struct.md): An abstract representation of a shape.
