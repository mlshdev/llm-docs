> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/ndarray/mutablerawview](https://developer.apple.com/documentation/coreai/ndarray/mutablerawview)

# NDArray.MutableRawView

**Framework:** Core AI  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A type-erased mutable view over the memory owned by a tensor.

## Declaration

```swift
struct MutableRawView
```

## Topics

### Creating a mutable raw view

- [init(mutableBytes:byteOffset:scalarType:shape:strides:interleaveLayout:)](mutablerawview/init%28mutablebytes_byteoffset_scalartype_shape_strides_interleavelayout_%29.md): Initialize a raw view from existing raw memory, interpreted as the specified scalar type.
- [init(metalBuffer:byteOffset:scalarType:shape:strides:interleaveLayout:)](mutablerawview/init%28metalbuffer_byteoffset_scalartype_shape_strides_interleavelayout_%29.md): Initialize a raw view from an existing metal buffer, interpreted as the specified scalar type.
- [init(ioSurface:byteOffset:scalarType:shape:strides:interleaveLayout:)](mutablerawview/init%28iosurface_byteoffset_scalartype_shape_strides_interleavelayout_%29.md): Initialize a mutable raw view from an existing IOSurface, interpreted as the specified scalar type.

### Inspecting the view

- [scalarType](mutablerawview/scalartype.md): The scalar type of the ndArray.
- [shape](mutablerawview/shape.md): The shape of the ndArray.
- [strides](mutablerawview/strides.md): The strides of the ndArray.
- [mutableBytes](mutablerawview/mutablebytes.md): A mutable span over the backing bytes of this tensor.
- [interleaveLayout](mutablerawview/interleavelayout.md): Returns which dimension is interleaved, and by what factor it is interleaved. Or returns `nil` if there is not an interleaved dimension.

### Creating typed views

- [view(as:)](mutablerawview/view%28as_%29.md): Create a typed `MutableView` of the same storage as this raw view.

### Converting to immutable

- [rawView](mutablerawview/rawview.md): Returns an immutable raw view over the same backing data.

### Slicing the view

- [slice(at:)](mutablerawview/slice%28at_%29-47fbq.md): Returns a sub-view with the same rank as this view by slicing the dimensions at the provided ranges.
- [slice(at:)](mutablerawview/slice%28at_%29-82sdj.md): Returns a sub-view with the same rank as this view by slicing the dimensions at the provided ranges.
- [mutatingSlice(at:)](mutablerawview/mutatingslice%28at_%29-5tnq5.md): Returns a sub-view with the same rank as this view by slicing the dimensions at the provided ranges.
- [mutatingSlice(at:)](mutablerawview/mutatingslice%28at_%29-5ts4w.md): Returns a sub-view with the same rank as this view by slicing the dimensions at the provided ranges.

### Instance Methods

- [withUnsafeMutableBytes(\_:)](mutablerawview/withunsafemutablebytes%28__%29.md): Invokes the provided closure with the backing data and memory layout of this view.

## See Also

### Accessing views

- [NDArray.View](view.md): An immutable non-owning view over the contents of a `NDArray`.
- [NDArray.MutableView](mutableview.md): A mutable view over the storage of a tensor.
- [NDArray.RawView](rawview.md): A type-erased immutable view over the memory owned by a tensor.
