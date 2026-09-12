> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlindirectcomputecommand/setthreadgroupmemorylength(_:index:)](https://developer.apple.com/documentation/metal/mtlindirectcomputecommand/setthreadgroupmemorylength(_:index:))

# setThreadgroupMemoryLength(\_:index:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 13.0+ · visionOS 1.0+

Sets the size of a block of threadgroup memory.

## Declaration

```swift
func setThreadgroupMemoryLength(_ length: Int, index: Int)
```

## Parameters

- `length`: The size of the threadgroup memory, in bytes, which needs to be a multiple of 16 bytes.
- `index`: The index in the threadgroup memory argument table.

## See Also

### Setting a command’s arguments

- [setComputePipelineState(\_:)](setcomputepipelinestate%28__%29.md): Sets the command’s compute pipeline state.
- [setImageblockWidth(\_:height:)](setimageblockwidth%28__height_%29.md): Sets the size, in pixels, of the imageblock.
- [setKernelBuffer(\_:offset:at:)](setkernelbuffer%28__offset_at_%29.md): Sets a buffer for the compute function.
- [setThreadgroupMemoryLength(\_:at:)](setthreadgroupmemorylength%28__at_%29.md): Deprecated. Sets the size of a block of threadgroup memory.
- [setStageInRegion(\_:)](setstageinregion%28__%29.md): Sets the region of the stage-in attributes to apply to the compute kernel.
- [setStageIn(\_:)](setstagein%28__%29.md): Deprecated. Sets the region of the stage-in attributes to apply to the compute kernel.

# setThreadgroupMemoryLength:atIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 13.0+ · visionOS 1.0+

Sets the size of a block of threadgroup memory.

## Declaration

```objectivec
- (void) setThreadgroupMemoryLength:(NSUInteger) length atIndex:(NSUInteger) index;
```

## Parameters

- `length`: The size of the threadgroup memory, in bytes, which needs to be a multiple of 16 bytes.
- `index`: The index in the threadgroup memory argument table.

## See Also

### Setting a command’s arguments

- [setComputePipelineState:](setcomputepipelinestate%28__%29.md): Sets the command’s compute pipeline state.
- [setImageblockWidth:height:](setimageblockwidth%28__height_%29.md): Sets the size, in pixels, of the imageblock.
- [setKernelBuffer:offset:atIndex:](setkernelbuffer%28__offset_at_%29.md): Sets a buffer for the compute function.
- [setStageInRegion:](setstageinregion%28__%29.md): Sets the region of the stage-in attributes to apply to the compute kernel.
