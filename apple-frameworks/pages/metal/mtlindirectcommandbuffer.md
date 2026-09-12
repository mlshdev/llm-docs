> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlindirectcommandbuffer](https://developer.apple.com/documentation/metal/mtlindirectcommandbuffer)

# MTLIndirectCommandBuffer (Swift)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

A command buffer containing reusable commands, encoded either on the CPU or GPU.

## Declaration

```swift
protocol MTLIndirectCommandBuffer : MTLResource
```

## Mentioned In

- [Improving CPU performance by using argument buffers](improving-cpu-performance-by-using-argument-buffers.md)

<a id="overview"></a>

## Overview

Use an indirect command buffer to encode commands once and reuse them, and to encode commands on multiple CPU or GPU threads.

Don’t implement this protocol yourself; instead, create an [MTLIndirectCommandBufferDescriptor](mtlindirectcommandbufferdescriptor.md) instance, configure its properties, and tell the [MTLDevice](mtldevice.md) to create the indirect command buffer. See [Creating an indirect command buffer](creating-an-indirect-command-buffer.md).

## Topics

### Determining the maximum number of commands

- [size](mtlindirectcommandbuffer/size.md): The number of commands contained in the indirect command buffer.

### Retrieving commands

- [indirectRenderCommandAt(\_:)](mtlindirectcommandbuffer/indirectrendercommandat%28__%29.md): Gets the render command at the given index.
- [indirectComputeCommandAt(\_:)](mtlindirectcommandbuffer/indirectcomputecommandat%28__%29.md): Gets the compute command at the given index.
- [indirectComputeCommand(at:)](mtlindirectcommandbuffer/indirectcomputecommand%28at_%29.md): Deprecated. Gets the compute command at the given index.

### Resetting commands

- [reset(\_:)](mtlindirectcommandbuffer/reset%28__%29.md): Resets a range of commands to their default state.

### Instance Properties

- [gpuResourceID](mtlindirectcommandbuffer/gpuresourceid.md)

## Relationships

### Inherits From

- [MTLAllocation](mtlallocation.md)
- [MTLResource](mtlresource.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Indirect command buffers

- [Creating an indirect command buffer](creating-an-indirect-command-buffer.md): Configure a descriptor to specify the properties of an indirect command buffer.
- [Specifying drawing and dispatch arguments indirectly](specifying-drawing-and-dispatch-arguments-indirectly.md): Use indirect commands if you don’t know your draw or dispatch call arguments when you encode the command.
- [Encoding indirect command buffers on the CPU](encoding-indirect-command-buffers-on-the-cpu.md): Reduce CPU overhead and simplify your command execution by reusing commands.
- [Encoding indirect command buffers on the GPU](encoding-indirect-command-buffers-on-the-gpu.md): Maximize CPU to GPU parallelization by generating render commands on the GPU.
- [MTLIndirectCommandBufferDescriptor](mtlindirectcommandbufferdescriptor.md): A configuration you create to customize an indirect command buffer.
- [MTLIndirectCommandType](mtlindirectcommandtype.md): The types of commands that you can encode into the indirect command buffer.
- [MTLIndirectCommandBufferExecutionRange](mtlindirectcommandbufferexecutionrange.md): A range of commands in an indirect command buffer.
- [MTLIndirectCommandBufferExecutionRangeMake(\_:\_:)](mtlindirectcommandbufferexecutionrangemake%28____%29.md): Creates a command execution range.

# MTLIndirectCommandBuffer (Objective-C)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

A command buffer containing reusable commands, encoded either on the CPU or GPU.

## Declaration

```objectivec
@protocol MTLIndirectCommandBuffer <MTLResource>
```

## Mentioned In

- [Improving CPU performance by using argument buffers](improving-cpu-performance-by-using-argument-buffers.md)

<a id="overview"></a>

## Overview

Use an indirect command buffer to encode commands once and reuse them, and to encode commands on multiple CPU or GPU threads.

Don’t implement this protocol yourself; instead, create an [MTLIndirectCommandBufferDescriptor](mtlindirectcommandbufferdescriptor.md) instance, configure its properties, and tell the [MTLDevice](mtldevice.md) to create the indirect command buffer. See [Creating an indirect command buffer](creating-an-indirect-command-buffer.md).

## Topics

### Determining the maximum number of commands

- [size](mtlindirectcommandbuffer/size.md): The number of commands contained in the indirect command buffer.

### Retrieving commands

- [indirectRenderCommandAtIndex:](mtlindirectcommandbuffer/indirectrendercommandat%28__%29.md): Gets the render command at the given index.
- [indirectComputeCommandAtIndex:](mtlindirectcommandbuffer/indirectcomputecommandat%28__%29.md): Gets the compute command at the given index.

### Resetting commands

- [resetWithRange:](mtlindirectcommandbuffer/resetwithrange_.md): Resets a range of commands to their default state.

### Instance Properties

- [gpuResourceID](mtlindirectcommandbuffer/gpuresourceid.md)

## Relationships

### Inherits From

- [MTLResource](mtlresource.md)

## See Also

### Indirect command buffers

- [Creating an indirect command buffer](creating-an-indirect-command-buffer.md): Configure a descriptor to specify the properties of an indirect command buffer.
- [Specifying drawing and dispatch arguments indirectly](specifying-drawing-and-dispatch-arguments-indirectly.md): Use indirect commands if you don’t know your draw or dispatch call arguments when you encode the command.
- [Encoding indirect command buffers on the CPU](encoding-indirect-command-buffers-on-the-cpu.md): Reduce CPU overhead and simplify your command execution by reusing commands.
- [Encoding indirect command buffers on the GPU](encoding-indirect-command-buffers-on-the-gpu.md): Maximize CPU to GPU parallelization by generating render commands on the GPU.
- [MTLIndirectCommandBufferDescriptor](mtlindirectcommandbufferdescriptor.md): A configuration you create to customize an indirect command buffer.
- [MTLIndirectCommandType](mtlindirectcommandtype.md): The types of commands that you can encode into the indirect command buffer.
- [MTLIndirectCommandBufferExecutionRange](mtlindirectcommandbufferexecutionrange.md): A range of commands in an indirect command buffer.
- [MTLIndirectCommandBufferExecutionRangeMake](mtlindirectcommandbufferexecutionrangemake%28____%29.md): Creates a command execution range.
