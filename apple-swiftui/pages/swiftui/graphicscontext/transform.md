> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/graphicscontext/transform](https://developer.apple.com/documentation/swiftui/graphicscontext/transform)

# transform

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The current transform matrix, defining user space coordinates.

## Declaration

```swift
var transform: CGAffineTransform { get set }
```

<a id="discussion"></a>

## Discussion

Modify this matrix to transform content that you subsequently draw into the context. Changes that you make don’t affect existing content.

## See Also

### Applying transforms

- [scaleBy(x:y:)](scaleby%28x_y_%29.md): Scales subsequent drawing operations by an amount in each dimension.
- [rotate(by:)](rotate%28by_%29.md): Rotates subsequent drawing operations by an angle.
- [translateBy(x:y:)](translateby%28x_y_%29.md): Moves subsequent drawing operations by an amount in each dimension.
- [concatenate(\_:)](concatenate%28__%29.md): Appends the given transform to the context’s existing transform.
