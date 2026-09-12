> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/ndarray/mutablerawview/mutablebytes](https://developer.apple.com/documentation/coreai/ndarray/mutablerawview/mutablebytes)

# mutableBytes

**Framework:** Core AI  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A mutable span over the backing bytes of this tensor.

## Declaration

```swift
@export(implementation) var mutableBytes: MutableRawSpan { get }
```

<a id="discussion"></a>

## Discussion

> **Note**

> When accessing the bytes directly you are responsible for interpreting the layout of the tensor according to the `strides` property of this view. This means you must either ensure the logical elements are contiguous, or dynamically handle nontrivial striding. If the view has an [interleaveLayout](interleavelayout.md), the strides for that dimension are block strides and must be interpreted accordingly — see [NDArray.InterleaveLayout](../interleavelayout-swift.struct.md).

## See Also

### Inspecting the view

- [scalarType](scalartype.md): The scalar type of the ndArray.
- [shape](shape.md): The shape of the ndArray.
- [strides](strides.md): The strides of the ndArray.
- [interleaveLayout](interleavelayout.md): Returns which dimension is interleaved, and by what factor it is interleaved. Or returns `nil` if there is not an interleaved dimension.
