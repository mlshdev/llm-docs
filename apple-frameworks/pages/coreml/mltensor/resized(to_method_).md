> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mltensor/resized(to:method:)](https://developer.apple.com/documentation/coreml/mltensor/resized(to:method:))

# resized(to:method:)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Resize the tensor’s spatial dimensions to size using the specified method.

## Declaration

```swift
func resized(to size: (newHeight: Int, newWidth: Int), method: MLTensor.ResizeMethod = .nearestNeighbor) -> MLTensor
```

## Parameters

- `size`: The new size for the spatial dimensions of the tensor. The size must be positive.
- `method`: The resize method. The default value is `.nearest`.

<a id="discussion"></a>

## Discussion

For example:

```swift
let image = MLTensor(shape: [1, 1, 2, 2], scalars: [
    1, 0,
    0, 1
], scalarType: Float.self)
let resizedImage = image.resized(to: (4, 4), method: .nearest)
// [[[[1, 1, 0, 0],
//    [1, 1, 0, 0],
//    [0, 0, 1, 1],
//    [0, 0, 1, 1]]]]
```

The tensor must be either a 4-dimensional float tensor of shape `[batch, channels, height, width]` or 3-dimensional float tensor of shape `[channel, height, width]`.

## See Also

### Resizing the tensor

- [MLTensor.ResizeMethod](resizemethod.md): A resize algorithm.
