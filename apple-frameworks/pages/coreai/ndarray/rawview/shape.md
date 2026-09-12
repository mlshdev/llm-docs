> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/ndarray/rawview/shape](https://developer.apple.com/documentation/coreai/ndarray/rawview/shape)

# shape

**Framework:** Core AI  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The shape of the tensor.

## Declaration

```swift
var shape: Span<Int> { get }
```

## See Also

### Inspecting the view

- [scalarType](scalartype.md)
- [strides](strides.md): The strides of the tensor.
- [bytes](bytes.md): A span over the backing bytes of this tensor.
- [interleaveLayout](interleavelayout.md): Returns which dimension is interleaved, and by what factor it is interleaved. Or returns `nil` if there is not an interleaved dimension.
