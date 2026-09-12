> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/ndarray/rawview/scalartype](https://developer.apple.com/documentation/coreai/ndarray/rawview/scalartype)

# scalarType

**Framework:** Core AI  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

## Declaration

```swift
var scalarType: NDArray.ScalarType { get }
```

## See Also

### Inspecting the view

- [shape](shape.md): The shape of the tensor.
- [strides](strides.md): The strides of the tensor.
- [bytes](bytes.md): A span over the backing bytes of this tensor.
- [interleaveLayout](interleavelayout.md): Returns which dimension is interleaved, and by what factor it is interleaved. Or returns `nil` if there is not an interleaved dimension.
