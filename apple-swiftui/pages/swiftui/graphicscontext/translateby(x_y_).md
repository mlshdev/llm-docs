> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/graphicscontext/translateby(x:y:)](https://developer.apple.com/documentation/swiftui/graphicscontext/translateby(x:y:))

# translateBy(x:y:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Moves subsequent drawing operations by an amount in each dimension.

## Declaration

```swift
mutating func translateBy(x: CGFloat, y: CGFloat)
```

## Parameters

- `x`: The amount to move in the horizontal direction.
- `y`: The amount to move in the vertical direction.

<a id="discussion"></a>

## Discussion

Calling this method is equivalent to updating the context’s [transform](transform.md) directly using the given translation amount:

```swift
transform = transform.translatedBy(x: x, y: y)
```

## See Also

### Applying transforms

- [scaleBy(x:y:)](scaleby%28x_y_%29.md): Scales subsequent drawing operations by an amount in each dimension.
- [rotate(by:)](rotate%28by_%29.md): Rotates subsequent drawing operations by an angle.
- [concatenate(\_:)](concatenate%28__%29.md): Appends the given transform to the context’s existing transform.
- [transform](transform.md): The current transform matrix, defining user space coordinates.
