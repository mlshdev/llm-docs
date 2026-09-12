> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/graphicscontext/scaleby(x:y:)](https://developer.apple.com/documentation/swiftui/graphicscontext/scaleby(x:y:))

# scaleBy(x:y:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Scales subsequent drawing operations by an amount in each dimension.

## Declaration

```swift
mutating func scaleBy(x: CGFloat, y: CGFloat)
```

## Parameters

- `x`: The amount to scale in the horizontal direction.
- `y`: The amount to scale in the vertical direction.

<a id="discussion"></a>

## Discussion

Calling this method is equivalent to updating the context’s [transform](transform.md) directly using the given scale factors:

```swift
transform = transform.scaledBy(x: x, y: y)
```

## See Also

### Applying transforms

- [rotate(by:)](rotate%28by_%29.md): Rotates subsequent drawing operations by an angle.
- [translateBy(x:y:)](translateby%28x_y_%29.md): Moves subsequent drawing operations by an amount in each dimension.
- [concatenate(\_:)](concatenate%28__%29.md): Appends the given transform to the context’s existing transform.
- [transform](transform.md): The current transform matrix, defining user space coordinates.
