> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/inferencefunction/asyncvalue/init(_:)-9wk3](https://developer.apple.com/documentation/coreai/inferencefunction/asyncvalue/init(_:)-9wk3)

# init(\_:)

**Framework:** Core AI  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Initialize the `AsyncValue` holding the provided ndArray.

## Declaration

```swift
init(_ ndArray: consuming NDArray)
```

## See Also

### Creating an async value

- [init(\_:)](init%28__%29-5qtut.md): Initialize the `AsyncValue` holding the provided pixel buffer.
- [init(\_:)](init%28__%29-90hbj.md): Initialize an async value from an existing mutable async value.
- [init(unsafeBuffer:byteOffset:scalarType:shape:strides:interleaveLayout:)](init%28unsafebuffer_byteoffset_scalartype_shape_strides_interleavelayout_%29.md): Creates an async ndArray value that directly references the provided metal buffer, interpreted as the specified scalar type and shape.
