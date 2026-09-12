> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlindirectcomputecommand/setimageblockwidth(_:height:)](https://developer.apple.com/documentation/metal/mtlindirectcomputecommand/setimageblockwidth(_:height:))

# setImageblockWidth(\_:height:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Sets the size, in pixels, of the imageblock.

## Declaration

```swift
func setImageblockWidth(_ width: Int, height: Int)
```

## Parameters

- `width`: The width of the imageblock.
- `height`: The height of the imageblock.

## See Also

### Setting a command’s arguments

- [setComputePipelineState(\_:)](setcomputepipelinestate%28__%29.md): Sets the command’s compute pipeline state.
- [setKernelBuffer(\_:offset:at:)](setkernelbuffer%28__offset_at_%29.md): Sets a buffer for the compute function.
- [setThreadgroupMemoryLength(\_:index:)](setthreadgroupmemorylength%28__index_%29.md): Sets the size of a block of threadgroup memory.
- [setThreadgroupMemoryLength(\_:at:)](setthreadgroupmemorylength%28__at_%29.md): Deprecated. Sets the size of a block of threadgroup memory.
- [setStageInRegion(\_:)](setstageinregion%28__%29.md): Sets the region of the stage-in attributes to apply to the compute kernel.
- [setStageIn(\_:)](setstagein%28__%29.md): Deprecated. Sets the region of the stage-in attributes to apply to the compute kernel.

# setImageblockWidth:height: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Sets the size, in pixels, of the imageblock.

## Declaration

```objectivec
- (void) setImageblockWidth:(NSUInteger) width height:(NSUInteger) height;
```

## Parameters

- `width`: The width of the imageblock.
- `height`: The height of the imageblock.

## See Also

### Setting a command’s arguments

- [setComputePipelineState:](setcomputepipelinestate%28__%29.md): Sets the command’s compute pipeline state.
- [setKernelBuffer:offset:atIndex:](setkernelbuffer%28__offset_at_%29.md): Sets a buffer for the compute function.
- [setThreadgroupMemoryLength:atIndex:](setthreadgroupmemorylength%28__index_%29.md): Sets the size of a block of threadgroup memory.
- [setStageInRegion:](setstageinregion%28__%29.md): Sets the region of the stage-in attributes to apply to the compute kernel.
