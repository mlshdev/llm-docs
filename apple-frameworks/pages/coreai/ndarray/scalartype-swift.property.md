> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/ndarray/scalartype-swift.property](https://developer.apple.com/documentation/coreai/ndarray/scalartype-swift.property)

# scalarType

**Framework:** Core AI  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The scalar type of the array.

## Declaration

```swift
var scalarType: NDArray.ScalarType { get }
```

## See Also

### Inspecting an array

- [shape](shape.md): The length of each dimension of the array.
- [strides](strides.md): The distance, in elements, between consecutive values along each dimension.
- [interleaveLayout](interleavelayout-swift.property.md): Returns the interleaved layout of this ndArray, or `nil` if there is no interleave.
