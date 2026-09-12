> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/shape/layout](https://developer.apple.com/documentation/accelerate/bnns/shape/layout)

# layout

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

The data layout of the shape.

## Declaration

```swift
var layout: BNNSDataLayout { get }
```

## See Also

### Inspecting the Properties of a Shape

- [batchStride](batchstride.md): The number of elements between each batch of data in the shape.
- [rank](rank.md): The number of dimensions of the shape.
- [size](size.md): The size, in elements, of each dimension of the shape.
- [stride](stride.md): The stride, in elements, of each dimension of the shape.
