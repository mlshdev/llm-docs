> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlindirectcomputecommand/setthreadgroupmemorylength(_:at:)](https://developer.apple.com/documentation/metal/mtlindirectcomputecommand/setthreadgroupmemorylength(_:at:))

# setThreadgroupMemoryLength(\_:at:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 14.0) · iPadOS 13.0+ (deprecated in 14.0) · Mac Catalyst 14.0+ (deprecated in 14.0) · tvOS 13.0+ (deprecated in 14.0) · visionOS

Sets the size of a block of threadgroup memory.

## Declaration

```swift
func setThreadgroupMemoryLength(_ length: Int, at index: Int)
```

## Parameters

- `length`: The size of the threadgroup memory, in bytes, which needs to be a multiple of 16 bytes.
- `index`: The index in the threadgroup memory argument table.

## See Also

### Setting a command’s arguments

- [setComputePipelineState(\_:)](setcomputepipelinestate%28__%29.md): Sets the command’s compute pipeline state.
- [setImageblockWidth(\_:height:)](setimageblockwidth%28__height_%29.md): Sets the size, in pixels, of the imageblock.
- [setKernelBuffer(\_:offset:at:)](setkernelbuffer%28__offset_at_%29.md): Sets a buffer for the compute function.
- [setThreadgroupMemoryLength(\_:index:)](setthreadgroupmemorylength%28__index_%29.md): Sets the size of a block of threadgroup memory.
- [setStageInRegion(\_:)](setstageinregion%28__%29.md): Sets the region of the stage-in attributes to apply to the compute kernel.
- [setStageIn(\_:)](setstagein%28__%29.md): Deprecated. Sets the region of the stage-in attributes to apply to the compute kernel.
