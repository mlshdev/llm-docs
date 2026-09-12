> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlargumentencoder/setbuffers:offsets:withrange:](https://developer.apple.com/documentation/metal/mtlargumentencoder/setbuffers:offsets:withrange:)

# setBuffers:offsets:withRange:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Encodes references to an array of buffers into the argument buffer.

## Declaration

```objectivec
- (void) setBuffers:(id<MTLBuffer> const[]) buffers offsets:(const NSUInteger[]) offsets withRange:(NSRange) range;
```

## Parameters

- `buffers`: An array of buffers the method encodes.
- `offsets`: An array of byte offsets for each element in `buffers`.
- `range`: A range of indices within the argument buffer for each element in `buffers`. The values correspond to either the index IDs of declarations in Metal Shading Language (MSL) or the [index](../mtlargumentdescriptor/index.md) property of [MTLArgumentDescriptor](../mtlargumentdescriptor.md) instances.

## See Also

### Encoding buffers

- [setBuffer:offset:atIndex:](setbuffer%28__offset_index_%29.md): Encodes a reference to a buffer into the argument buffer.
