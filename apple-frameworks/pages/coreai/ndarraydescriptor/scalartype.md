> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/ndarraydescriptor/scalartype](https://developer.apple.com/documentation/coreai/ndarraydescriptor/scalartype)

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

### Inspecting descriptor properties

- [shape](shape.md): The length of each dimension of the array.
- [rank](rank.md): The number of dimensions in the array.
- [hasDynamicShape](hasdynamicshape.md): A Boolean value that indicates whether the shape has any dynamic dimensions.
- [interleaveLayout](interleavelayout.md): Returns the interleaved layout of this ndArray, or `nil` if there is no interleave.
