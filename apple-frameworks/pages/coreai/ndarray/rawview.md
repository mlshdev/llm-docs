> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/ndarray/rawview](https://developer.apple.com/documentation/coreai/ndarray/rawview)

# NDArray.RawView

**Framework:** Core AI  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A type-erased immutable view over the memory owned by a tensor.

## Declaration

```swift
struct RawView
```

## Topics

### Creating a raw view

- [init(bytes:byteOffset:scalarType:shape:strides:interleaveLayout:)](rawview/init%28bytes_byteoffset_scalartype_shape_strides_interleavelayout_%29.md): Initialize a raw view from existing raw memory, interpreted as the specified scalar type.
- [init(metalBuffer:byteOffset:scalarType:shape:strides:interleaveLayout:)](rawview/init%28metalbuffer_byteoffset_scalartype_shape_strides_interleavelayout_%29.md): Initialize a raw view from an existing metal buffer, interpreted as the specified scalar type.
- [init(ioSurface:byteOffset:scalarType:shape:strides:interleaveLayout:)](rawview/init%28iosurface_byteoffset_scalartype_shape_strides_interleavelayout_%29.md): Initialize a raw view from an existing IOSurface, interpreted as the specified scalar type.

### Inspecting the view

- [scalarType](rawview/scalartype.md)
- [shape](rawview/shape.md): The shape of the tensor.
- [strides](rawview/strides.md): The strides of the tensor.
- [bytes](rawview/bytes.md): A span over the backing bytes of this tensor.
- [interleaveLayout](rawview/interleavelayout.md): Returns which dimension is interleaved, and by what factor it is interleaved. Or returns `nil` if there is not an interleaved dimension.

### Creating typed views

- [view(as:)](rawview/view%28as_%29.md): Consume this raw view to create a typed view.

### Slicing the view

- [slice(at:)](rawview/slice%28at_%29-1gght.md): Returns a sub-view with the same rank as this view by slicing the dimensions at the provided ranges.
- [slice(at:)](rawview/slice%28at_%29-kd5b.md): Returns a sub-view with the same rank as this view by slicing the dimensions at the provided ranges.

### Instance Methods

- [withUnsafeBytes(\_:)](rawview/withunsafebytes%28__%29.md): Invokes the provided closure with the backing data and memory layout of this view.

## See Also

### Accessing views

- [NDArray.View](view.md): An immutable non-owning view over the contents of a `NDArray`.
- [NDArray.MutableView](mutableview.md): A mutable view over the storage of a tensor.
- [NDArray.MutableRawView](mutablerawview.md): A type-erased mutable view over the memory owned by a tensor.
