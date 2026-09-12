> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/computenodegraph/assembly/location](https://developer.apple.com/documentation/computegraph/computenodegraph/assembly/location)

# ComputeNodeGraph.Assembly.Location

**Framework:** Compute Graph  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

## Declaration

```swift
enum Location
```

## Topics

### Enumeration Cases

- [ComputeNodeGraph.Assembly.Location.buffer(index:sizeOffset:)](location/buffer%28index_sizeoffset_%29.md): Buffer that’s bound separately from other data. Size of buffer is stored at sizeOffset in uniforms
- [ComputeNodeGraph.Assembly.Location.constant(value:)](location/constant%28value_%29.md): Value is a fixed 64-bit constant
- [ComputeNodeGraph.Assembly.Location.constantBuffer(index:offset:)](location/constantbuffer%28index_offset_%29.md): Value is in the constantBuffers table at the specified index and offset
- [ComputeNodeGraph.Assembly.Location.context](location/context.md): Value is a context type
- [ComputeNodeGraph.Assembly.Location.deviceBuffer(index:offset:)](location/devicebuffer%28index_offset_%29.md): Value is in the deviceBuffers table at the specified index and offset
- [ComputeNodeGraph.Assembly.Location.port(node:index:)](location/port%28node_index_%29.md): Value is the output of another node
- [ComputeNodeGraph.Assembly.Location.state(index:offset:length:)](location/state%28index_offset_length_%29.md): A context-dependent state value.
- [ComputeNodeGraph.Assembly.Location.texture(index:)](location/texture%28index_%29.md): Value is a texture with the given index
- [ComputeNodeGraph.Assembly.Location.unbound](location/unbound.md): Attribute which is a default value and should be considered “not bound”
- [ComputeNodeGraph.Assembly.Location.uniform(offset:length:)](location/uniform%28offset_length_%29.md): Value is located in uniforms. Its value is located at `offset` in the uniforms with length `length`.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
