> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlargumentencoder/setcomputepipelinestates(_:range:)](https://developer.apple.com/documentation/metal/mtlargumentencoder/setcomputepipelinestates(_:range:))

# setComputePipelineStates(\_:range:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 13.0+ · visionOS

Encodes references to an array of compute pipeline states into the argument buffer.

## Declaration

```swift
func setComputePipelineStates(_ pipelines: [(any MTLComputePipelineState)?], range: Range<Int>)
```

## Parameters

- `pipelines`: An array of pipeline states the method encodes.
- `range`: A range of indices within the argument buffer for each element in `pipelines`. The values correspond to either the index IDs of declarations in Metal Shading Language (MSL) or the [index](../mtlargumentdescriptor/index.md) property of [MTLArgumentDescriptor](../mtlargumentdescriptor.md) instances.

## See Also

### Encoding pipeline states

- [setRenderPipelineState(\_:index:)](setrenderpipelinestate%28__index_%29.md): Encodes a reference to a render pipeline state into the argument buffer.
- [setRenderPipelineStates(\_:range:)](setrenderpipelinestates%28__range_%29.md): Encodes references to an array of render pipeline states into the argument buffer.
- [setComputePipelineState(\_:index:)](setcomputepipelinestate%28__index_%29.md): Encodes a reference to a compute pipeline state into the argument buffer.
- [setComputePipelineStates(\_:with:)](setcomputepipelinestates%28__with_%29.md): Deprecated. Encodes references to an array of compute pipeline states into the argument buffer.
- [setComputePipelineState(\_:at:)](setcomputepipelinestate%28__at_%29.md): Deprecated. Encodes a reference to a compute pipeline state into the argument buffer.
