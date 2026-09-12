> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlindirectcomputecommand](https://developer.apple.com/documentation/metal/mtlindirectcomputecommand)

# MTLIndirectComputeCommand (Swift)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 13.0+ · visionOS 1.0+

A compute command in an indirect command buffer.

## Declaration

```swift
protocol MTLIndirectComputeCommand : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Don’t implement this protocol; you get instances of this type by asking an [MTLIndirectCommandBuffer](mtlindirectcommandbuffer.md) for them.

Use this instance to reset or encode a command. You need to reset a command before encoding a new command.

## Topics

### Setting a command’s arguments

- [setComputePipelineState(\_:)](mtlindirectcomputecommand/setcomputepipelinestate%28__%29.md): Sets the command’s compute pipeline state.
- [setImageblockWidth(\_:height:)](mtlindirectcomputecommand/setimageblockwidth%28__height_%29.md): Sets the size, in pixels, of the imageblock.
- [setKernelBuffer(\_:offset:at:)](mtlindirectcomputecommand/setkernelbuffer%28__offset_at_%29.md): Sets a buffer for the compute function.
- [setThreadgroupMemoryLength(\_:index:)](mtlindirectcomputecommand/setthreadgroupmemorylength%28__index_%29.md): Sets the size of a block of threadgroup memory.
- [setThreadgroupMemoryLength(\_:at:)](mtlindirectcomputecommand/setthreadgroupmemorylength%28__at_%29.md): Deprecated. Sets the size of a block of threadgroup memory.
- [setStageInRegion(\_:)](mtlindirectcomputecommand/setstageinregion%28__%29.md): Sets the region of the stage-in attributes to apply to the compute kernel.
- [setStageIn(\_:)](mtlindirectcomputecommand/setstagein%28__%29.md): Deprecated. Sets the region of the stage-in attributes to apply to the compute kernel.

### Synchronizing command execution

- [setBarrier()](mtlindirectcomputecommand/setbarrier%28%29.md): Adds a barrier to ensure that commands executed prior to this command are complete before this command executes.
- [clearBarrier()](mtlindirectcomputecommand/clearbarrier%28%29.md): Removes any barrier set on the command.

### Encoding a compute command

- [concurrentDispatchThreadgroups(\_:threadsPerThreadgroup:)](mtlindirectcomputecommand/concurrentdispatchthreadgroups%28__threadsperthreadgroup_%29.md): Encodes a compute command using a grid aligned to threadgroup boundaries.
- [concurrentDispatchThreads(\_:threadsPerThreadgroup:)](mtlindirectcomputecommand/concurrentdispatchthreads%28__threadsperthreadgroup_%29.md): Encodes a compute command using an arbitrarily sized grid.

### Resetting a command

- [reset()](mtlindirectcomputecommand/reset%28%29.md): Resets the command to its default state.

### Instance Methods

- [setKernelBuffer(\_:offset:attributeStride:at:)](mtlindirectcomputecommand/setkernelbuffer%28__offset_attributestride_at_%29.md)

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Indirect compute commands

- [MTLRegion](mtlregion.md): The bounds for a subset of an instance’s elements.
- [MTLSize](mtlsize.md): A type that represents one, two, or three dimensions of a type instance, such as an array or texture.
- [MTLOrigin](mtlorigin.md): The coordinates for the front upper-left corner of a region.
- [MTLStageInRegionIndirectArguments](mtlstageinregionindirectarguments.md): The data layout required for the arguments needed to specify the stage-in region.
- [MTLDispatchThreadgroupsIndirectArguments](mtldispatchthreadgroupsindirectarguments.md): The data layout required for arguments needed to specify the size of threadgroups.

# MTLIndirectComputeCommand (Objective-C)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 13.0+ · visionOS 1.0+

A compute command in an indirect command buffer.

## Declaration

```objectivec
@protocol MTLIndirectComputeCommand <NSObject>
```

<a id="overview"></a>

## Overview

Don’t implement this protocol; you get instances of this type by asking an [MTLIndirectCommandBuffer](mtlindirectcommandbuffer.md) for them.

Use this instance to reset or encode a command. You need to reset a command before encoding a new command.

## Topics

### Setting a command’s arguments

- [setComputePipelineState:](mtlindirectcomputecommand/setcomputepipelinestate%28__%29.md): Sets the command’s compute pipeline state.
- [setImageblockWidth:height:](mtlindirectcomputecommand/setimageblockwidth%28__height_%29.md): Sets the size, in pixels, of the imageblock.
- [setKernelBuffer:offset:atIndex:](mtlindirectcomputecommand/setkernelbuffer%28__offset_at_%29.md): Sets a buffer for the compute function.
- [setThreadgroupMemoryLength:atIndex:](mtlindirectcomputecommand/setthreadgroupmemorylength%28__index_%29.md): Sets the size of a block of threadgroup memory.
- [setStageInRegion:](mtlindirectcomputecommand/setstageinregion%28__%29.md): Sets the region of the stage-in attributes to apply to the compute kernel.

### Synchronizing command execution

- [setBarrier](mtlindirectcomputecommand/setbarrier%28%29.md): Adds a barrier to ensure that commands executed prior to this command are complete before this command executes.
- [clearBarrier](mtlindirectcomputecommand/clearbarrier%28%29.md): Removes any barrier set on the command.

### Encoding a compute command

- [concurrentDispatchThreadgroups:threadsPerThreadgroup:](mtlindirectcomputecommand/concurrentdispatchthreadgroups%28__threadsperthreadgroup_%29.md): Encodes a compute command using a grid aligned to threadgroup boundaries.
- [concurrentDispatchThreads:threadsPerThreadgroup:](mtlindirectcomputecommand/concurrentdispatchthreads%28__threadsperthreadgroup_%29.md): Encodes a compute command using an arbitrarily sized grid.

### Resetting a command

- [reset](mtlindirectcomputecommand/reset%28%29.md): Resets the command to its default state.

### Instance Methods

- [setKernelBuffer:offset:attributeStride:atIndex:](mtlindirectcomputecommand/setkernelbuffer%28__offset_attributestride_at_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Indirect compute commands

- [MTLRegion](mtlregion.md): The bounds for a subset of an instance’s elements.
- [MTLSize](mtlsize.md): A type that represents one, two, or three dimensions of a type instance, such as an array or texture.
- [MTLOrigin](mtlorigin.md): The coordinates for the front upper-left corner of a region.
- [MTLStageInRegionIndirectArguments](mtlstageinregionindirectarguments.md): The data layout required for the arguments needed to specify the stage-in region.
- [MTLDispatchThreadgroupsIndirectArguments](mtldispatchthreadgroupsindirectarguments.md): The data layout required for arguments needed to specify the size of threadgroups.
