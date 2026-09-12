> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/graphicscontext/concatenate(_:)](https://developer.apple.com/documentation/swiftui/graphicscontext/concatenate(_:))

# concatenate(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Appends the given transform to the context’s existing transform.

## Declaration

```swift
mutating func concatenate(_ matrix: CGAffineTransform)
```

## Parameters

- `matrix`: A transform to append to the existing transform.

<a id="discussion"></a>

## Discussion

Calling this method is equivalent to updating the context’s [transform](transform.md) directly using the `matrix` parameter:

```swift
transform = matrix.concatenating(transform)
```

## See Also

### Applying transforms

- [scaleBy(x:y:)](scaleby%28x_y_%29.md): Scales subsequent drawing operations by an amount in each dimension.
- [rotate(by:)](rotate%28by_%29.md): Rotates subsequent drawing operations by an angle.
- [translateBy(x:y:)](translateby%28x_y_%29.md): Moves subsequent drawing operations by an amount in each dimension.
- [transform](transform.md): The current transform matrix, defining user space coordinates.
