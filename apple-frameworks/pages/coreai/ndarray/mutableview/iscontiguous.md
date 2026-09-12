> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/ndarray/mutableview/iscontiguous](https://developer.apple.com/documentation/coreai/ndarray/mutableview/iscontiguous)

# isContiguous

**Framework:** Core AI  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns `true` if the elements in this view have a row-major contiguous layout.

## Declaration

```swift
var isContiguous: Bool { get }
```

<a id="discussion"></a>

## Discussion

> **Note**

> If this returns `false`, then `contiguousElements` will return `nil`.

## See Also

### Inspecting the view

- [rank](rank.md): Conforms when `Element` conforms to `BitwiseCopyable`. The rank of the tensor.
- [shape](shape.md): Conforms when `Element` conforms to `BitwiseCopyable`. The shape of the tensor.
- [strides](strides.md): Conforms when `Element` conforms to `BitwiseCopyable`. The strides of the tensor.
- [interleaveLayout](interleavelayout.md): Conforms when `Element` conforms to `BitwiseCopyable`. Returns which dimension is interleaved, and by what factor it is interleaved. Or returns `nil` if there is not an interleaved dimension.
