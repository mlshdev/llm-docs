> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlindirectcomputecommand/setcomputepipelinestate(_:)](https://developer.apple.com/documentation/metal/mtlindirectcomputecommand/setcomputepipelinestate(_:))

# setComputePipelineState(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 13.0+ · visionOS 1.0+

Sets the command’s compute pipeline state.

## Declaration

```swift
func setComputePipelineState(_ pipelineState: any MTLComputePipelineState)
```

## Parameters

- `pipelineState`: A compute pipeline state instance.

<a id="discussion"></a>

## Discussion

You don’t need to call this method if you create an indirect command buffer with its [inheritPipelineState](../mtlindirectcommandbufferdescriptor/inheritpipelinestate.md) property equal to [true](https://developer.apple.com/documentation/swift/true). The command gets the pipeline state from the parent encoder when you run the command.

If you create an indirect command buffer with its [inheritPipelineState](../mtlindirectcommandbufferdescriptor/inheritpipelinestate.md) property equal to [false](https://developer.apple.com/documentation/swift/false), you need to set the pipeline state prior to encoding a drawing command.

## See Also

### Setting a command’s arguments

- [setImageblockWidth(\_:height:)](setimageblockwidth%28__height_%29.md): Sets the size, in pixels, of the imageblock.
- [setKernelBuffer(\_:offset:at:)](setkernelbuffer%28__offset_at_%29.md): Sets a buffer for the compute function.
- [setThreadgroupMemoryLength(\_:index:)](setthreadgroupmemorylength%28__index_%29.md): Sets the size of a block of threadgroup memory.
- [setThreadgroupMemoryLength(\_:at:)](setthreadgroupmemorylength%28__at_%29.md): Deprecated. Sets the size of a block of threadgroup memory.
- [setStageInRegion(\_:)](setstageinregion%28__%29.md): Sets the region of the stage-in attributes to apply to the compute kernel.
- [setStageIn(\_:)](setstagein%28__%29.md): Deprecated. Sets the region of the stage-in attributes to apply to the compute kernel.

# setComputePipelineState: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 13.0+ · visionOS 1.0+

Sets the command’s compute pipeline state.

## Declaration

```objectivec
- (void) setComputePipelineState:(id<MTLComputePipelineState>) pipelineState;
```

## Parameters

- `pipelineState`: A compute pipeline state instance.

<a id="discussion"></a>

## Discussion

You don’t need to call this method if you create an indirect command buffer with its [inheritPipelineState](../mtlindirectcommandbufferdescriptor/inheritpipelinestate.md) property equal to [true](https://developer.apple.com/documentation/swift/true). The command gets the pipeline state from the parent encoder when you run the command.

If you create an indirect command buffer with its [inheritPipelineState](../mtlindirectcommandbufferdescriptor/inheritpipelinestate.md) property equal to [false](https://developer.apple.com/documentation/swift/false), you need to set the pipeline state prior to encoding a drawing command.

## See Also

### Setting a command’s arguments

- [setImageblockWidth:height:](setimageblockwidth%28__height_%29.md): Sets the size, in pixels, of the imageblock.
- [setKernelBuffer:offset:atIndex:](setkernelbuffer%28__offset_at_%29.md): Sets a buffer for the compute function.
- [setThreadgroupMemoryLength:atIndex:](setthreadgroupmemorylength%28__index_%29.md): Sets the size of a block of threadgroup memory.
- [setStageInRegion:](setstageinregion%28__%29.md): Sets the region of the stage-in attributes to apply to the compute kernel.
