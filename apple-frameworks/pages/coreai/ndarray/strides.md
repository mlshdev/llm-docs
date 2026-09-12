> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/ndarray/strides](https://developer.apple.com/documentation/coreai/ndarray/strides)

# strides

**Framework:** Core AI  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The distance, in elements, between consecutive values along each dimension.

## Declaration

```swift
var strides: [Int] { get }
```

<a id="discussion"></a>

## Discussion

The strides array has the same number of elements as [shape](shape.md), where `strides[i]` describes the distance between consecutive elements in the `i`th dimension.

## See Also

### Inspecting an array

- [shape](shape.md): The length of each dimension of the array.
- [scalarType](scalartype-swift.property.md): The scalar type of the array.
- [interleaveLayout](interleavelayout-swift.property.md): Returns the interleaved layout of this ndArray, or `nil` if there is no interleave.
