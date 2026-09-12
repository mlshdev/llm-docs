> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/inferencefunction/asyncmutablevalue/init(descriptor:)](https://developer.apple.com/documentation/coreai/inferencefunction/asyncmutablevalue/init(descriptor:))

# init(descriptor:)

**Framework:** Core AI  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Initialize a new state by creating a value matching the provided descriptor.

## Declaration

```swift
init(descriptor: consuming InferenceValue.Descriptor)
```

## Parameters

- `descriptor`: The descriptor of the inference value to be constructed and held by this state.

<a id="discussion"></a>

## Discussion

Note that the descriptor must not have a dynamic shape.

## See Also

### Creating an async mutable value

- [init(\_:)](init%28__%29-4aqgq.md): Initialize the state from an existing pixel buffer.
- [init(\_:)](init%28__%29-x6se.md): Initialize the state from an existing ndArray.
- [init(unsafeBuffer:byteOffset:scalarType:shape:strides:interleaveLayout:)](init%28unsafebuffer_byteoffset_scalartype_shape_strides_interleavelayout_%29.md): Creates an async ndArray value that directly references the provided metal buffer, interpreted as the specified scalar type and shape.
