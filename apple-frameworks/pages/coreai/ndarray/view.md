> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/ndarray/view](https://developer.apple.com/documentation/coreai/ndarray/view)

# NDArray.View

**Framework:** Core AI  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

An immutable non-owning view over the contents of a `NDArray`.

## Declaration

```swift
struct View<Element> where Element : BitwiseCopyable
```

## Mentioned In

- [Integrating on-device AI models in your app with Core AI](../integrating-on-device-ai-models-in-your-app-with-core-ai.md)

## Topics

### Creating a view

- [init(span:shape:strides:)](view/init%28span_shape_strides_%29.md): Conforms when `Element` conforms to `BitwiseCopyable`. Initialize a view from a `Span`.

### Inspecting the view

- [isContiguous](view/iscontiguous.md): Conforms when `Element` conforms to `BitwiseCopyable`. Returns `true` if the elements in this view have a row-major contiguous layout.
- [rank](view/rank.md): Conforms when `Element` conforms to `BitwiseCopyable`. The rank of the tensor.
- [shape](view/shape.md): Conforms when `Element` conforms to `BitwiseCopyable`. The shape of the tensor.
- [strides](view/strides.md): Conforms when `Element` conforms to `BitwiseCopyable`. The strides of the tensor.
- [interleaveLayout](view/interleavelayout.md): Conforms when `Element` conforms to `BitwiseCopyable`. Returns which dimension is interleaved, and by what factor it is interleaved. Or returns `nil` if there is not an interleaved dimension.

### Accessing elements

- [contiguousElements](view/contiguouselements.md): Conforms when `Element` conforms to `BitwiseCopyable`. Returns a `Span` over the backing memory of this view if the memory is in a contiguous layout, otherwise returns `nil`.
- [subscript(scalarAt:)](view/subscript%28scalarat_%29.md): Conforms when `Element` conforms to `BitwiseCopyable`. Access the element at a multi-dimensional `index`.

### Accessing memory

- [withUnsafePointer(\_:)](view/withunsafepointer%28__%29.md): Conforms when `Element` conforms to `BitwiseCopyable`. Invokes the provided closure with the backing data and memory layout of this view.

### Slicing the view

- [slice(at:)](view/slice%28at_%29-32gsh.md): Conforms when `Element` conforms to `BitwiseCopyable`. Returns a sub-view with the same rank as this view by slicing the dimensions at the provided ranges.
- [slice(at:)](view/slice%28at_%29-4yomr.md): Conforms when `Element` conforms to `BitwiseCopyable`. Returns a sub-view with the same rank as this view by slicing the dimensions at the provided ranges.

### Converting to a raw view

- [rawView](view/rawview.md): Conforms when `Element` conforms to `BitwiseCopyable`. Returns a raw view over the same backing data

## See Also

### Accessing views

- [NDArray.MutableView](mutableview.md): A mutable view over the storage of a tensor.
- [NDArray.RawView](rawview.md): A type-erased immutable view over the memory owned by a tensor.
- [NDArray.MutableRawView](mutablerawview.md): A type-erased mutable view over the memory owned by a tensor.
