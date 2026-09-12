> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlindirectcomputecommand/setkernelbuffer(_:offset:at:)](https://developer.apple.com/documentation/metal/mtlindirectcomputecommand/setkernelbuffer(_:offset:at:))

# setKernelBuffer(\_:offset:at:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 13.0+ · visionOS 1.0+

Sets a buffer for the compute function.

## Declaration

```swift
func setKernelBuffer(_ buffer: any MTLBuffer, offset: Int, at index: Int)
```

## Parameters

- `buffer`: The buffer to set in the buffer argument table.
- `offset`: Where the data begins, in bytes, from the start of the buffer.
- `index`: An index in the buffer argument table.

<a id="discussion"></a>

## Discussion

If you created the indirect command buffer with [inheritBuffers](../mtlindirectcommandbufferdescriptor/inheritbuffers.md) set to [true](https://developer.apple.com/documentation/swift/true), don’t call this method. The command gets the arguments from the parent encoder when you execute the command.

If you need to pass other kinds of parameters to your shader, such as textures and samplers, create an argument buffer and pass it to the shader using this method.

## See Also

### Setting a command’s arguments

- [setComputePipelineState(\_:)](setcomputepipelinestate%28__%29.md): Sets the command’s compute pipeline state.
- [setImageblockWidth(\_:height:)](setimageblockwidth%28__height_%29.md): Sets the size, in pixels, of the imageblock.
- [setThreadgroupMemoryLength(\_:index:)](setthreadgroupmemorylength%28__index_%29.md): Sets the size of a block of threadgroup memory.
- [setThreadgroupMemoryLength(\_:at:)](setthreadgroupmemorylength%28__at_%29.md): Deprecated. Sets the size of a block of threadgroup memory.
- [setStageInRegion(\_:)](setstageinregion%28__%29.md): Sets the region of the stage-in attributes to apply to the compute kernel.
- [setStageIn(\_:)](setstagein%28__%29.md): Deprecated. Sets the region of the stage-in attributes to apply to the compute kernel.

# setKernelBuffer:offset:atIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 13.0+ · visionOS 1.0+

Sets a buffer for the compute function.

## Declaration

```objectivec
- (void) setKernelBuffer:(id<MTLBuffer>) buffer offset:(NSUInteger) offset atIndex:(NSUInteger) index;
```

## Parameters

- `buffer`: The buffer to set in the buffer argument table.
- `offset`: Where the data begins, in bytes, from the start of the buffer.
- `index`: An index in the buffer argument table.

<a id="discussion"></a>

## Discussion

If you created the indirect command buffer with [inheritBuffers](../mtlindirectcommandbufferdescriptor/inheritbuffers.md) set to [true](https://developer.apple.com/documentation/swift/true), don’t call this method. The command gets the arguments from the parent encoder when you execute the command.

If you need to pass other kinds of parameters to your shader, such as textures and samplers, create an argument buffer and pass it to the shader using this method.

## See Also

### Setting a command’s arguments

- [setComputePipelineState:](setcomputepipelinestate%28__%29.md): Sets the command’s compute pipeline state.
- [setImageblockWidth:height:](setimageblockwidth%28__height_%29.md): Sets the size, in pixels, of the imageblock.
- [setThreadgroupMemoryLength:atIndex:](setthreadgroupmemorylength%28__index_%29.md): Sets the size of a block of threadgroup memory.
- [setStageInRegion:](setstageinregion%28__%29.md): Sets the region of the stage-in attributes to apply to the compute kernel.
