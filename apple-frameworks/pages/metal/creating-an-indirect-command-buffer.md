> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/creating-an-indirect-command-buffer](https://developer.apple.com/documentation/metal/creating-an-indirect-command-buffer)

# Creating an indirect command buffer (Swift)

**Framework:** Metal  
**Kind:** Article

Configure a descriptor to specify the properties of an indirect command buffer.

<a id="overview"></a>

## Overview

An indirect command buffer stores encoded GPU commands persistently. Using an indirect command buffer, you can encode a command once and reuse it multiple times. You can also encode commands into an indirect command buffer simultaneously with multiple threads on the CPU or with a compute kernel on the GPU.

To create an indirect command buffer, first create an [MTLIndirectCommandBufferDescriptor](mtlindirectcommandbufferdescriptor.md) instance and configure the descriptor’s properties. Then call [makeIndirectCommandBuffer(descriptor:maxCommandCount:options:)](mtldevice/makeindirectcommandbuffer%28descriptor_maxcommandcount_options_%29.md) on an [MTLDevice](mtldevice.md) instance to create the indirect command buffer.

## See Also

### Indirect command buffers

- [Specifying drawing and dispatch arguments indirectly](specifying-drawing-and-dispatch-arguments-indirectly.md): Use indirect commands if you don’t know your draw or dispatch call arguments when you encode the command.
- [Encoding indirect command buffers on the CPU](encoding-indirect-command-buffers-on-the-cpu.md): Reduce CPU overhead and simplify your command execution by reusing commands.
- [Encoding indirect command buffers on the GPU](encoding-indirect-command-buffers-on-the-gpu.md): Maximize CPU to GPU parallelization by generating render commands on the GPU.
- [MTLIndirectCommandBuffer](mtlindirectcommandbuffer.md): A command buffer containing reusable commands, encoded either on the CPU or GPU.
- [MTLIndirectCommandBufferDescriptor](mtlindirectcommandbufferdescriptor.md): A configuration you create to customize an indirect command buffer.
- [MTLIndirectCommandType](mtlindirectcommandtype.md): The types of commands that you can encode into the indirect command buffer.
- [MTLIndirectCommandBufferExecutionRange](mtlindirectcommandbufferexecutionrange.md): A range of commands in an indirect command buffer.
- [MTLIndirectCommandBufferExecutionRangeMake(\_:\_:)](mtlindirectcommandbufferexecutionrangemake%28____%29.md): Creates a command execution range.

# Creating an indirect command buffer (Objective-C)

**Framework:** Metal  
**Kind:** Article

Configure a descriptor to specify the properties of an indirect command buffer.

<a id="overview"></a>

## Overview

An indirect command buffer stores encoded GPU commands persistently. Using an indirect command buffer, you can encode a command once and reuse it multiple times. You can also encode commands into an indirect command buffer simultaneously with multiple threads on the CPU or with a compute kernel on the GPU.

To create an indirect command buffer, first create an [MTLIndirectCommandBufferDescriptor](mtlindirectcommandbufferdescriptor.md) instance and configure the descriptor’s properties. Then call [newIndirectCommandBufferWithDescriptor:maxCommandCount:options:](mtldevice/makeindirectcommandbuffer%28descriptor_maxcommandcount_options_%29.md) on an [MTLDevice](mtldevice.md) instance to create the indirect command buffer.

## See Also

### Indirect command buffers

- [Specifying drawing and dispatch arguments indirectly](specifying-drawing-and-dispatch-arguments-indirectly.md): Use indirect commands if you don’t know your draw or dispatch call arguments when you encode the command.
- [Encoding indirect command buffers on the CPU](encoding-indirect-command-buffers-on-the-cpu.md): Reduce CPU overhead and simplify your command execution by reusing commands.
- [Encoding indirect command buffers on the GPU](encoding-indirect-command-buffers-on-the-gpu.md): Maximize CPU to GPU parallelization by generating render commands on the GPU.
- [MTLIndirectCommandBuffer](mtlindirectcommandbuffer.md): A command buffer containing reusable commands, encoded either on the CPU or GPU.
- [MTLIndirectCommandBufferDescriptor](mtlindirectcommandbufferdescriptor.md): A configuration you create to customize an indirect command buffer.
- [MTLIndirectCommandType](mtlindirectcommandtype.md): The types of commands that you can encode into the indirect command buffer.
- [MTLIndirectCommandBufferExecutionRange](mtlindirectcommandbufferexecutionrange.md): A range of commands in an indirect command buffer.
- [MTLIndirectCommandBufferExecutionRangeMake](mtlindirectcommandbufferexecutionrangemake%28____%29.md): Creates a command execution range.
