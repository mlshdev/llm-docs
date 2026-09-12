> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/inferencefunction/asyncmutablevalue/init(unsafebuffer:byteoffset:scalartype:shape:strides:interleavelayout:)](https://developer.apple.com/documentation/coreai/inferencefunction/asyncmutablevalue/init(unsafebuffer:byteoffset:scalartype:shape:strides:interleavelayout:))

# init(unsafeBuffer:byteOffset:scalarType:shape:strides:interleaveLayout:)

**Framework:** Core AI  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates an async ndArray value that directly references the provided metal buffer, interpreted as the specified scalar type and shape.

## Declaration

```swift
init(unsafeBuffer: consuming any MTLBuffer, byteOffset: Int = 0, scalarType: NDArray.ScalarType, shape: [Int], strides: [Int] = [], interleaveLayout: NDArray.InterleaveLayout? = nil)
```

<a id="discussion"></a>

## Discussion

`unsafeBuffer` must have `shared` storage mode.

Initializing an async value this way requires that you manually ensure the provided metal buffer is not mutated while this value is being used by an inference function.

- unsafeBuffer: The metal buffer to be referenced by the resulting value.
- byteOffset: The offset into this metal buffer to be interpreted as the start of this value.
- scalarType: The type of scalars in the provided buffer.
- shape: The shape of the resulting value.
- strides: The strides of the resulting value. If left empty, they will be computed as contiguous row-major.
- interleaveLayout: Which dimension is interleaved and by what factor. See [NDArray.InterleaveLayout](../../ndarray/interleavelayout-swift.struct.md).

## See Also

### Creating an async mutable value

- [init(\_:)](init%28__%29-4aqgq.md): Initialize the state from an existing pixel buffer.
- [init(\_:)](init%28__%29-x6se.md): Initialize the state from an existing ndArray.
- [init(descriptor:)](init%28descriptor_%29.md): Initialize a new state by creating a value matching the provided descriptor.
