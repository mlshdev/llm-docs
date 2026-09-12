> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/ndarraydescriptor/interleavelayout](https://developer.apple.com/documentation/coreai/ndarraydescriptor/interleavelayout)

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

In the common case where the model was not explicitly converted with interleave specified on a tensor, this property will be `nil`.

See [NDArray.InterleaveLayout](../ndarray/interleavelayout-swift.struct.md) for full documentation on interleaved layouts.

## See Also

### Inspecting descriptor properties

- [shape](shape.md): The length of each dimension of the array.
- [scalarType](scalartype.md): The scalar type of the array.
- [rank](rank.md): The number of dimensions in the array.
- [hasDynamicShape](hasdynamicshape.md): A Boolean value that indicates whether the shape has any dynamic dimensions.
