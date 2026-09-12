> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlargumentencoder/setrenderpipelinestate(_:index:)](https://developer.apple.com/documentation/metal/mtlargumentencoder/setrenderpipelinestate(_:index:))

# setRenderPipelineState(\_:index:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 13.0+ · visionOS 1.0+

Encodes a reference to a render pipeline state into the argument buffer.

## Declaration

```swift
func setRenderPipelineState(_ pipeline: (any MTLRenderPipelineState)?, index: Int)
```

## Parameters

- `pipeline`: A pipeline state the method encodes.
- `index`: The index of a pipeline state within the argument buffer. The value corresponds to either the index ID of a declaration in Metal Shading Language (MSL) or the [index](../mtlargumentdescriptor/index.md) property of an [MTLArgumentDescriptor](../mtlargumentdescriptor.md) instance.

## See Also

### Encoding pipeline states

- [setRenderPipelineStates(\_:range:)](setrenderpipelinestates%28__range_%29.md): Encodes references to an array of render pipeline states into the argument buffer.
- [setComputePipelineState(\_:index:)](setcomputepipelinestate%28__index_%29.md): Encodes a reference to a compute pipeline state into the argument buffer.
- [setComputePipelineStates(\_:with:)](setcomputepipelinestates%28__with_%29.md): Deprecated. Encodes references to an array of compute pipeline states into the argument buffer.
- [setComputePipelineState(\_:at:)](setcomputepipelinestate%28__at_%29.md): Deprecated. Encodes a reference to a compute pipeline state into the argument buffer.
- [setComputePipelineStates(\_:range:)](setcomputepipelinestates%28__range_%29.md): Encodes references to an array of compute pipeline states into the argument buffer.

# setRenderPipelineState:atIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 13.0+ · visionOS 1.0+

Encodes a reference to a render pipeline state into the argument buffer.

## Declaration

```objectivec
- (void) setRenderPipelineState:(id<MTLRenderPipelineState>) pipeline atIndex:(NSUInteger) index;
```

## Parameters

- `pipeline`: A pipeline state the method encodes.
- `index`: The index of a pipeline state within the argument buffer. The value corresponds to either the index ID of a declaration in Metal Shading Language (MSL) or the [index](../mtlargumentdescriptor/index.md) property of an [MTLArgumentDescriptor](../mtlargumentdescriptor.md) instance.

## See Also

### Encoding pipeline states

- [setRenderPipelineStates:withRange:](setrenderpipelinestates_withrange_.md): Encodes references to an array of render pipeline states into the argument buffer.
- [setComputePipelineState:atIndex:](setcomputepipelinestate%28__index_%29.md): Encodes a reference to a compute pipeline state into the argument buffer.
- [setComputePipelineStates:withRange:](setcomputepipelinestates_withrange_.md): Encodes references to an array of compute pipeline states into the argument buffer.
