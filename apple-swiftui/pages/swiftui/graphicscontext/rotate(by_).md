> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/graphicscontext/rotate(by:)](https://developer.apple.com/documentation/swiftui/graphicscontext/rotate(by:))

# rotate(by:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Rotates subsequent drawing operations by an angle.

## Declaration

```swift
mutating func rotate(by angle: Angle)
```

## Parameters

- `angle`: The amount to rotate.

<a id="discussion"></a>

## Discussion

Calling this method is equivalent to updating the context’s [transform](transform.md) directly using the `angle` parameter:

```swift
transform = transform.rotated(by: angle.radians)
```

## See Also

### Applying transforms

- [scaleBy(x:y:)](scaleby%28x_y_%29.md): Scales subsequent drawing operations by an amount in each dimension.
- [translateBy(x:y:)](translateby%28x_y_%29.md): Moves subsequent drawing operations by an amount in each dimension.
- [concatenate(\_:)](concatenate%28__%29.md): Appends the given transform to the context’s existing transform.
- [transform](transform.md): The current transform matrix, defining user space coordinates.
