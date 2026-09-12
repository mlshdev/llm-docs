> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlargumentencoder/setbuffers(_:offsets:range:)](https://developer.apple.com/documentation/metal/mtlargumentencoder/setbuffers(_:offsets:range:))

# setBuffers(\_:offsets:range:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS

Encodes references to an array of buffers into the argument buffer.

## Declaration

```swift
func setBuffers(_ buffers: [(any MTLBuffer)?], offsets: [Int], range: Range<Int>)
```

## Parameters

- `buffers`: An array of buffers the method encodes.
- `offsets`: An array of byte offsets for each element in `buffers`.
- `range`: A range of indices within the argument buffer for each element in `buffers`. The values correspond to either the index IDs of declarations in Metal Shading Language (MSL) or the [index](../mtlargumentdescriptor/index.md) property of [MTLArgumentDescriptor](../mtlargumentdescriptor.md) instances.

## See Also

### Encoding buffers

- [setBuffer(\_:offset:index:)](setbuffer%28__offset_index_%29.md): Encodes a reference to a buffer into the argument buffer.
