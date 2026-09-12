> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/shape/stride](https://developer.apple.com/documentation/accelerate/bnns/shape/stride)

# stride

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

The stride, in elements, of each dimension of the shape.

## Declaration

```swift
var stride: (Int, Int, Int, Int, Int, Int, Int, Int) { get }
```

## See Also

### Inspecting the Properties of a Shape

- [batchStride](batchstride.md): The number of elements between each batch of data in the shape.
- [layout](layout.md): The data layout of the shape.
- [rank](rank.md): The number of dimensions of the shape.
- [size](size.md): The size, in elements, of each dimension of the shape.
