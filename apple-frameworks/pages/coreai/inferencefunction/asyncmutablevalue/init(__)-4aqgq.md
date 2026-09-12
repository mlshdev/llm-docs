> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/inferencefunction/asyncmutablevalue/init(_:)-4aqgq](https://developer.apple.com/documentation/coreai/inferencefunction/asyncmutablevalue/init(_:)-4aqgq)

# init(\_:)

**Framework:** Core AI  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Initialize the state from an existing pixel buffer.

## Declaration

```swift
init(_ pixelBuffer: consuming CVMutablePixelBuffer)
```

## Parameters

- `pixelBuffer`: The starting pixel buffer value of this state.

## See Also

### Creating an async mutable value

- [init(\_:)](init%28__%29-x6se.md): Initialize the state from an existing ndArray.
- [init(descriptor:)](init%28descriptor_%29.md): Initialize a new state by creating a value matching the provided descriptor.
- [init(unsafeBuffer:byteOffset:scalarType:shape:strides:interleaveLayout:)](init%28unsafebuffer_byteoffset_scalartype_shape_strides_interleavelayout_%29.md): Creates an async ndArray value that directly references the provided metal buffer, interpreted as the specified scalar type and shape.
