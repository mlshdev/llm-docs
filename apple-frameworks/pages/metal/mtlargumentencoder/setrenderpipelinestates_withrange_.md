> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlargumentencoder/setrenderpipelinestates:withrange:](https://developer.apple.com/documentation/metal/mtlargumentencoder/setrenderpipelinestates:withrange:)

# setRenderPipelineStates:withRange:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 13.0+ · visionOS 1.0+

Encodes references to an array of render pipeline states into the argument buffer.

## Declaration

```objectivec
- (void) setRenderPipelineStates:(id<MTLRenderPipelineState> const[]) pipelines withRange:(NSRange) range;
```

## Parameters

- `pipelines`: An array of pipeline states the method encodes.
- `range`: A range of indices within the argument buffer for each element in `pipelines`. The values correspond to either the index IDs of declarations in Metal Shading Language (MSL) or the [index](../mtlargumentdescriptor/index.md) property of [MTLArgumentDescriptor](../mtlargumentdescriptor.md) instances.

## See Also

### Encoding pipeline states

- [setRenderPipelineState:atIndex:](setrenderpipelinestate%28__index_%29.md): Encodes a reference to a render pipeline state into the argument buffer.
- [setComputePipelineState:atIndex:](setcomputepipelinestate%28__index_%29.md): Encodes a reference to a compute pipeline state into the argument buffer.
- [setComputePipelineStates:withRange:](setcomputepipelinestates_withrange_.md): Encodes references to an array of compute pipeline states into the argument buffer.
