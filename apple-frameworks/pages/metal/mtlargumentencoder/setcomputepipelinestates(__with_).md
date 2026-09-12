> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlargumentencoder/setcomputepipelinestates(_:with:)](https://developer.apple.com/documentation/metal/mtlargumentencoder/setcomputepipelinestates(_:with:))

# setComputePipelineStates(\_:with:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 14.0) · iPadOS 13.0+ (deprecated in 14.0) · tvOS 13.0+ (deprecated in 14.0) · visionOS

Encodes references to an array of compute pipeline states into the argument buffer.

## Declaration

```swift
func setComputePipelineStates(_ pipelines: UnsafePointer<(any MTLComputePipelineState)?>, with range: NSRange)
```

## Parameters

- `pipelines`: An array of pipeline states the method encodes.
- `range`: A range of indices within the argument buffer for each element in `pipelines`. The values correspond to either the index IDs of declarations in Metal Shading Language (MSL) or the [index](../mtlargumentdescriptor/index.md) property of [MTLArgumentDescriptor](../mtlargumentdescriptor.md) instances.

## See Also

### Encoding pipeline states

- [setRenderPipelineState(\_:index:)](setrenderpipelinestate%28__index_%29.md): Encodes a reference to a render pipeline state into the argument buffer.
- [setRenderPipelineStates(\_:range:)](setrenderpipelinestates%28__range_%29.md): Encodes references to an array of render pipeline states into the argument buffer.
- [setComputePipelineState(\_:index:)](setcomputepipelinestate%28__index_%29.md): Encodes a reference to a compute pipeline state into the argument buffer.
- [setComputePipelineState(\_:at:)](setcomputepipelinestate%28__at_%29.md): Deprecated. Encodes a reference to a compute pipeline state into the argument buffer.
- [setComputePipelineStates(\_:range:)](setcomputepipelinestates%28__range_%29.md): Encodes references to an array of compute pipeline states into the argument buffer.
