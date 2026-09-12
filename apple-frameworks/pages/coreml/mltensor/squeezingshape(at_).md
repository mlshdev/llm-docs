> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mltensor/squeezingshape(at:)](https://developer.apple.com/documentation/coreml/mltensor/squeezingshape(at:))

# squeezingShape(at:)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Removes the specified dimensions of size 1 from the shape of the tensor.

## Declaration

```swift
func squeezingShape(at axes: Int...) -> MLTensor
```

## Parameters

- `axes`: The axes to remove if the size is `1`.

<a id="discussion"></a>

## Discussion

For example:

```swift
let x = MLTensor(shape: [1, 2, 1], scalars: [1, 2], scalarType: Float.self)
let y = x.squeezingShape(at: 0)
y.shape // is [2, 1]
```

## See Also

### Removing dimensions from the shape of the tensor

- [squeezingShape()](squeezingshape%28%29.md): Removes all dimensions of size 1 from the shape of the tensor.
