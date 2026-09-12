> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/ndarray/interleavelayout-swift.property](https://developer.apple.com/documentation/coreai/ndarray/interleavelayout-swift.property)

# interleaveLayout

**Framework:** Core AI  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns the interleaved layout of this ndArray, or `nil` if there is no interleave.

## Declaration

```swift
var interleaveLayout: NDArray.InterleaveLayout? { get }
```

<a id="discussion"></a>

## Discussion

See [NDArray.InterleaveLayout](interleavelayout-swift.struct.md) for full documentation.

## See Also

### Inspecting an array

- [shape](shape.md): The length of each dimension of the array.
- [scalarType](scalartype-swift.property.md): The scalar type of the array.
- [strides](strides.md): The distance, in elements, between consecutive values along each dimension.
