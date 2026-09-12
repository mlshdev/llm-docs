> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlindirectcomputecommand/setstageinregion(_:)](https://developer.apple.com/documentation/metal/mtlindirectcomputecommand/setstageinregion(_:))

# setStageInRegion(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 13.0+ · visionOS 1.0+

Sets the region of the stage-in attributes to apply to the compute kernel.

## Declaration

```swift
func setStageInRegion(_ region: MTLRegion)
```

## Parameters

- `region`: The offset and maximum size of the grid over which compute threads that read per-thread stage-in data are launched.

## See Also

### Setting a command’s arguments

- [setComputePipelineState(\_:)](setcomputepipelinestate%28__%29.md): Sets the command’s compute pipeline state.
- [setImageblockWidth(\_:height:)](setimageblockwidth%28__height_%29.md): Sets the size, in pixels, of the imageblock.
- [setKernelBuffer(\_:offset:at:)](setkernelbuffer%28__offset_at_%29.md): Sets a buffer for the compute function.
- [setThreadgroupMemoryLength(\_:index:)](setthreadgroupmemorylength%28__index_%29.md): Sets the size of a block of threadgroup memory.
- [setThreadgroupMemoryLength(\_:at:)](setthreadgroupmemorylength%28__at_%29.md): Deprecated. Sets the size of a block of threadgroup memory.
- [setStageIn(\_:)](setstagein%28__%29.md): Deprecated. Sets the region of the stage-in attributes to apply to the compute kernel.

# setStageInRegion: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 13.0+ · visionOS 1.0+

Sets the region of the stage-in attributes to apply to the compute kernel.

## Declaration

```objectivec
- (void) setStageInRegion:(MTLRegion) region;
```

## Parameters

- `region`: The offset and maximum size of the grid over which compute threads that read per-thread stage-in data are launched.

## See Also

### Setting a command’s arguments

- [setComputePipelineState:](setcomputepipelinestate%28__%29.md): Sets the command’s compute pipeline state.
- [setImageblockWidth:height:](setimageblockwidth%28__height_%29.md): Sets the size, in pixels, of the imageblock.
- [setKernelBuffer:offset:atIndex:](setkernelbuffer%28__offset_at_%29.md): Sets a buffer for the compute function.
- [setThreadgroupMemoryLength:atIndex:](setthreadgroupmemorylength%28__index_%29.md): Sets the size of a block of threadgroup memory.
