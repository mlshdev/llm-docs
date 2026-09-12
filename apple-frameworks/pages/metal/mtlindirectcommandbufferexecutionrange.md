> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlindirectcommandbufferexecutionrange](https://developer.apple.com/documentation/metal/mtlindirectcommandbufferexecutionrange)

# MTLIndirectCommandBufferExecutionRange (Swift)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 13.0+ · visionOS 1.0+

A range of commands in an indirect command buffer.

## Declaration

```swift
struct MTLIndirectCommandBufferExecutionRange
```

## Topics

### Creating a command execution range

- [init()](mtlindirectcommandbufferexecutionrange/init%28%29.md): Initializes an empty command execution range.
- [init(location:length:)](mtlindirectcommandbufferexecutionrange/init%28location_length_%29.md): Initializes an command execution range.
- [MTLIndirectCommandBufferExecutionRangeMake(\_:\_:)](mtlindirectcommandbufferexecutionrangemake%28____%29.md): Creates a command execution range.

### Examining the range

- [location](mtlindirectcommandbufferexecutionrange/location.md): The first index in the command execution range.
- [length](mtlindirectcommandbufferexecutionrange/length.md): The number of items in the command execution range.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Indirect command buffers

- [Creating an indirect command buffer](creating-an-indirect-command-buffer.md): Configure a descriptor to specify the properties of an indirect command buffer.
- [Specifying drawing and dispatch arguments indirectly](specifying-drawing-and-dispatch-arguments-indirectly.md): Use indirect commands if you don’t know your draw or dispatch call arguments when you encode the command.
- [Encoding indirect command buffers on the CPU](encoding-indirect-command-buffers-on-the-cpu.md): Reduce CPU overhead and simplify your command execution by reusing commands.
- [Encoding indirect command buffers on the GPU](encoding-indirect-command-buffers-on-the-gpu.md): Maximize CPU to GPU parallelization by generating render commands on the GPU.
- [MTLIndirectCommandBuffer](mtlindirectcommandbuffer.md): A command buffer containing reusable commands, encoded either on the CPU or GPU.
- [MTLIndirectCommandBufferDescriptor](mtlindirectcommandbufferdescriptor.md): A configuration you create to customize an indirect command buffer.
- [MTLIndirectCommandType](mtlindirectcommandtype.md): The types of commands that you can encode into the indirect command buffer.
- [MTLIndirectCommandBufferExecutionRangeMake(\_:\_:)](mtlindirectcommandbufferexecutionrangemake%28____%29.md): Creates a command execution range.

# MTLIndirectCommandBufferExecutionRange (Objective-C)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A range of commands in an indirect command buffer.

## Declaration

```objectivec
typedef struct { ... } MTLIndirectCommandBufferExecutionRange;
```

## Topics

### Creating a command execution range

- [MTLIndirectCommandBufferExecutionRangeMake](mtlindirectcommandbufferexecutionrangemake%28____%29.md): Creates a command execution range.

### Examining the range

- [location](mtlindirectcommandbufferexecutionrange/location.md): The first index in the command execution range.
- [length](mtlindirectcommandbufferexecutionrange/length.md): The number of items in the command execution range.

## See Also

### Indirect command buffers

- [Creating an indirect command buffer](creating-an-indirect-command-buffer.md): Configure a descriptor to specify the properties of an indirect command buffer.
- [Specifying drawing and dispatch arguments indirectly](specifying-drawing-and-dispatch-arguments-indirectly.md): Use indirect commands if you don’t know your draw or dispatch call arguments when you encode the command.
- [Encoding indirect command buffers on the CPU](encoding-indirect-command-buffers-on-the-cpu.md): Reduce CPU overhead and simplify your command execution by reusing commands.
- [Encoding indirect command buffers on the GPU](encoding-indirect-command-buffers-on-the-gpu.md): Maximize CPU to GPU parallelization by generating render commands on the GPU.
- [MTLIndirectCommandBuffer](mtlindirectcommandbuffer.md): A command buffer containing reusable commands, encoded either on the CPU or GPU.
- [MTLIndirectCommandBufferDescriptor](mtlindirectcommandbufferdescriptor.md): A configuration you create to customize an indirect command buffer.
- [MTLIndirectCommandType](mtlindirectcommandtype.md): The types of commands that you can encode into the indirect command buffer.
- [MTLIndirectCommandBufferExecutionRangeMake](mtlindirectcommandbufferexecutionrangemake%28____%29.md): Creates a command execution range.
