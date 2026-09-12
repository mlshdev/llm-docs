> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlargumentencoder/setcomputepipelinestate(_:at:)](https://developer.apple.com/documentation/metal/mtlargumentencoder/setcomputepipelinestate(_:at:))

# setComputePipelineState(\_:at:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 14.0) · iPadOS 13.0+ (deprecated in 14.0) · tvOS 13.0+ (deprecated in 14.0) · visionOS

Encodes a reference to a compute pipeline state into the argument buffer.

## Declaration

```swift
func setComputePipelineState(_ pipeline: (any MTLComputePipelineState)?, at index: Int)
```

## Parameters

- `pipeline`: A pipeline state the method encodes.
- `index`: The index of a pipeline state within the argument buffer. The value corresponds to either the index ID of a declaration in Metal Shading Language (MSL) or the [index](../mtlargumentdescriptor/index.md) property of an [MTLArgumentDescriptor](../mtlargumentdescriptor.md) instance.

## See Also

### Encoding pipeline states

- [setRenderPipelineState(\_:index:)](setrenderpipelinestate%28__index_%29.md): Encodes a reference to a render pipeline state into the argument buffer.
- [setRenderPipelineStates(\_:range:)](setrenderpipelinestates%28__range_%29.md): Encodes references to an array of render pipeline states into the argument buffer.
- [setComputePipelineState(\_:index:)](setcomputepipelinestate%28__index_%29.md): Encodes a reference to a compute pipeline state into the argument buffer.
- [setComputePipelineStates(\_:with:)](setcomputepipelinestates%28__with_%29.md): Deprecated. Encodes references to an array of compute pipeline states into the argument buffer.
- [setComputePipelineStates(\_:range:)](setcomputepipelinestates%28__range_%29.md): Encodes references to an array of compute pipeline states into the argument buffer.
