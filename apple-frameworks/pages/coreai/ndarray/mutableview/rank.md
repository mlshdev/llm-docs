> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/ndarray/mutableview/rank](https://developer.apple.com/documentation/coreai/ndarray/mutableview/rank)

# rank

**Framework:** Core AI  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The rank of the tensor.

## Declaration

```swift
var rank: Int { get }
```

<a id="discussion"></a>

## Discussion

Equivalent to `shape.count`.

## See Also

### Inspecting the view

- [isContiguous](iscontiguous.md): Conforms when `Element` conforms to `BitwiseCopyable`. Returns `true` if the elements in this view have a row-major contiguous layout.
- [shape](shape.md): Conforms when `Element` conforms to `BitwiseCopyable`. The shape of the tensor.
- [strides](strides.md): Conforms when `Element` conforms to `BitwiseCopyable`. The strides of the tensor.
- [interleaveLayout](interleavelayout.md): Conforms when `Element` conforms to `BitwiseCopyable`. Returns which dimension is interleaved, and by what factor it is interleaved. Or returns `nil` if there is not an interleaved dimension.
