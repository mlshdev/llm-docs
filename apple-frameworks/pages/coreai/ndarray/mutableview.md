> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/ndarray/mutableview](https://developer.apple.com/documentation/coreai/ndarray/mutableview)

# NDArray.MutableView

**Framework:** Core AI  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A mutable view over the storage of a tensor.

## Declaration

```swift
struct MutableView<Element> where Element : BitwiseCopyable
```

## Mentioned In

- [Integrating on-device AI models in your app with Core AI](../integrating-on-device-ai-models-in-your-app-with-core-ai.md)

## Topics

### Creating a mutable view

- [init(mutableSpan:shape:strides:)](mutableview/init%28mutablespan_shape_strides_%29.md): Conforms when `Element` conforms to `BitwiseCopyable`. Initialize a view from a `MutableSpan`.

### Inspecting the view

- [isContiguous](mutableview/iscontiguous.md): Conforms when `Element` conforms to `BitwiseCopyable`. Returns `true` if the elements in this view have a row-major contiguous layout.
- [rank](mutableview/rank.md): Conforms when `Element` conforms to `BitwiseCopyable`. The rank of the tensor.
- [shape](mutableview/shape.md): Conforms when `Element` conforms to `BitwiseCopyable`. The shape of the tensor.
- [strides](mutableview/strides.md): Conforms when `Element` conforms to `BitwiseCopyable`. The strides of the tensor.
- [interleaveLayout](mutableview/interleavelayout.md): Conforms when `Element` conforms to `BitwiseCopyable`. Returns which dimension is interleaved, and by what factor it is interleaved. Or returns `nil` if there is not an interleaved dimension.

### Accessing elements

- [contiguousElements](mutableview/contiguouselements.md): Conforms when `Element` conforms to `BitwiseCopyable`. Returns a `MutableSpan` over the backing memory of this view if the memory is in a contiguous layout, otherwise returns `nil`.
- [subscript(scalarAt:)](mutableview/subscript%28scalarat_%29.md): Conforms when `Element` conforms to `BitwiseCopyable`. Access the element at a multi-dimensional `index`.

### Writing data

- [copyElements(from:)](mutableview/copyelements%28from_%29.md): Conforms when `Element` conforms to `BitwiseCopyable`. Copies the elements from `sequence` into this view in row-major order.
- [copyElements(fromContentsOf:)](mutableview/copyelements%28fromcontentsof_%29.md): Conforms when `Element` conforms to `BitwiseCopyable`. Copies the elements from `collection` into this view in row-major order.

### Accessing memory

- [withUnsafeMutablePointer(\_:)](mutableview/withunsafemutablepointer%28__%29.md): Conforms when `Element` conforms to `BitwiseCopyable`. Invokes the provided closure with the backing data and memory layout of this view.

### Slicing the view

- [slice(at:)](mutableview/slice%28at_%29-50cpv.md): Conforms when `Element` conforms to `BitwiseCopyable`. Returns a sub-view with the same rank as this view by slicing the dimensions at the provided ranges.
- [slice(at:)](mutableview/slice%28at_%29-qyjq.md): Conforms when `Element` conforms to `BitwiseCopyable`. Returns a sub-view with the same rank as this view by slicing the dimensions at the provided ranges.
- [mutatingSlice(at:)](mutableview/mutatingslice%28at_%29-30asd.md): Conforms when `Element` conforms to `BitwiseCopyable`. Returns a sub-view with the same rank as this view by slicing the dimensions at the provided ranges.
- [mutatingSlice(at:)](mutableview/mutatingslice%28at_%29-9pmi4.md): Conforms when `Element` conforms to `BitwiseCopyable`. Returns a sub-view with the same rank as this view by slicing the dimensions at the provided ranges.

### Converting to other views

- [view](mutableview/view.md): Conforms when `Element` conforms to `BitwiseCopyable`. An immutable view of this mutable view.
- [mutableRawView](mutableview/mutablerawview.md): Conforms when `Element` conforms to `BitwiseCopyable`. Returns a mutable raw view over the same data.

## See Also

### Accessing views

- [NDArray.View](view.md): An immutable non-owning view over the contents of a `NDArray`.
- [NDArray.RawView](rawview.md): A type-erased immutable view over the memory owned by a tensor.
- [NDArray.MutableRawView](mutablerawview.md): A type-erased mutable view over the memory owned by a tensor.
