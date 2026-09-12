> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/ndarray/mutablerawview/interleavelayout](https://developer.apple.com/documentation/coreai/ndarray/mutablerawview/interleavelayout)

# interleaveLayout

**Framework:** Core AI  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns which dimension is interleaved, and by what factor it is interleaved. Or returns `nil` if there is not an interleaved dimension.

## Declaration

```swift
var interleaveLayout: NDArray.InterleaveLayout? { get }
```

<a id="discussion"></a>

## Discussion

See [NDArray.InterleaveLayout](../interleavelayout-swift.struct.md) for full documentation.

## See Also

### Inspecting the view

- [scalarType](scalartype.md): The scalar type of the ndArray.
- [shape](shape.md): The shape of the ndArray.
- [strides](strides.md): The strides of the ndArray.
- [mutableBytes](mutablebytes.md): A mutable span over the backing bytes of this tensor.
