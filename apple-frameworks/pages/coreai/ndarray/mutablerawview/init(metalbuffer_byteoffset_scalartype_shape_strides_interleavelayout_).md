> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/ndarray/mutablerawview/init(metalbuffer:byteoffset:scalartype:shape:strides:interleavelayout:)](https://developer.apple.com/documentation/coreai/ndarray/mutablerawview/init(metalbuffer:byteoffset:scalartype:shape:strides:interleavelayout:))

# init(metalBuffer:byteOffset:scalarType:shape:strides:interleaveLayout:)

**Framework:** Core AI  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Initialize a raw view from an existing metal buffer, interpreted as the specified scalar type.

## Declaration

```swift
init(metalBuffer: borrowing any MTLBuffer, byteOffset: Int = 0, scalarType: NDArray.ScalarType, shape: [Int], strides: [Int] = [], interleaveLayout: NDArray.InterleaveLayout? = nil)
```

<a id="discussion"></a>

## Discussion

`metalBuffer` must have `shared` storage mode.

Note that the provided `scalarType` will be stored and later checked if you attempt to convert the raw view to a typed view.

Also note that the `shape/strides` must not be able to produce offsets that go outside of the range of `metalBuffer`.

This initializer is unsafe, you are responsible for ensuring that no other code (or GPU pipeline) reads or writes the buffer while the resulting view is alive.

- metalBuffer: The metal buffer to be referenced by the resulting view.
- byteOffset: The offset into this metal buffer to be interpreted as the start of this view.
- scalarType: The type of scalars in the provided span.
- shape: The shape of the resulting view.
- strides: The strides of the resulting view. If left empty, they will be computed as contiguous row-major.
- interleaveLayout: Which dimension is interleaved and by what factor. See [NDArray.InterleaveLayout](../interleavelayout-swift.struct.md).

## See Also

### Creating a mutable raw view

- [init(mutableBytes:byteOffset:scalarType:shape:strides:interleaveLayout:)](init%28mutablebytes_byteoffset_scalartype_shape_strides_interleavelayout_%29.md): Initialize a raw view from existing raw memory, interpreted as the specified scalar type.
- [init(ioSurface:byteOffset:scalarType:shape:strides:interleaveLayout:)](init%28iosurface_byteoffset_scalartype_shape_strides_interleavelayout_%29.md): Initialize a mutable raw view from an existing IOSurface, interpreted as the specified scalar type.
