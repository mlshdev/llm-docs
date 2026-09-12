> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/inferencefunction/asyncmutablevalue/init(_:)-x6se](https://developer.apple.com/documentation/coreai/inferencefunction/asyncmutablevalue/init(_:)-x6se)

# init(\_:)

**Framework:** Core AI  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Initialize the state from an existing ndArray.

## Declaration

```swift
init(_ ndArray: consuming NDArray)
```

## Parameters

- `ndArray`: The starting ndArray value of this state.

<a id="discussion"></a>

## Discussion

> **Note**

> The ndArray will be eagerly copied if not uniquely referenced.

## See Also

### Creating an async mutable value

- [init(\_:)](init%28__%29-4aqgq.md): Initialize the state from an existing pixel buffer.
- [init(descriptor:)](init%28descriptor_%29.md): Initialize a new state by creating a value matching the provided descriptor.
- [init(unsafeBuffer:byteOffset:scalarType:shape:strides:interleaveLayout:)](init%28unsafebuffer_byteoffset_scalartype_shape_strides_interleavelayout_%29.md): Creates an async ndArray value that directly references the provided metal buffer, interpreted as the specified scalar type and shape.
