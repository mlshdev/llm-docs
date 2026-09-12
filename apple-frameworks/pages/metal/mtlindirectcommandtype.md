> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlindirectcommandtype](https://developer.apple.com/documentation/metal/mtlindirectcommandtype)

# MTLIndirectCommandType (Swift)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

The types of commands that you can encode into the indirect command buffer.

## Declaration

```swift
struct MTLIndirectCommandType
```

## Topics

### Creating a set of command types

- [init(rawValue:)](mtlindirectcommandtype/init%28rawvalue_%29.md): Initializes the set of command types from a raw integer value.

### Specifying command types

- [draw](mtlindirectcommandtype/draw.md): A draw call command.
- [drawIndexed](mtlindirectcommandtype/drawindexed.md): An indexed draw call command.
- [drawPatches](mtlindirectcommandtype/drawpatches.md): A draw call command for tessellated patches.
- [drawIndexedPatches](mtlindirectcommandtype/drawindexedpatches.md): An indexed draw call command for tessellated patches.
- [concurrentDispatch](mtlindirectcommandtype/concurrentdispatch.md): A compute command using a grid aligned to threadgroup boundaries.
- [concurrentDispatchThreads](mtlindirectcommandtype/concurrentdispatchthreads.md): A compute command using an arbitrarily sized grid.

### Type Properties

- [drawMeshThreadgroups](mtlindirectcommandtype/drawmeshthreadgroups.md)
- [drawMeshThreads](mtlindirectcommandtype/drawmeshthreads.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Indirect command buffers

- [Creating an indirect command buffer](creating-an-indirect-command-buffer.md): Configure a descriptor to specify the properties of an indirect command buffer.
- [Specifying drawing and dispatch arguments indirectly](specifying-drawing-and-dispatch-arguments-indirectly.md): Use indirect commands if you don’t know your draw or dispatch call arguments when you encode the command.
- [Encoding indirect command buffers on the CPU](encoding-indirect-command-buffers-on-the-cpu.md): Reduce CPU overhead and simplify your command execution by reusing commands.
- [Encoding indirect command buffers on the GPU](encoding-indirect-command-buffers-on-the-gpu.md): Maximize CPU to GPU parallelization by generating render commands on the GPU.
- [MTLIndirectCommandBuffer](mtlindirectcommandbuffer.md): A command buffer containing reusable commands, encoded either on the CPU or GPU.
- [MTLIndirectCommandBufferDescriptor](mtlindirectcommandbufferdescriptor.md): A configuration you create to customize an indirect command buffer.
- [MTLIndirectCommandBufferExecutionRange](mtlindirectcommandbufferexecutionrange.md): A range of commands in an indirect command buffer.
- [MTLIndirectCommandBufferExecutionRangeMake(\_:\_:)](mtlindirectcommandbufferexecutionrangemake%28____%29.md): Creates a command execution range.

# MTLIndirectCommandType (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

The types of commands that you can encode into the indirect command buffer.

## Declaration

```objectivec
enum MTLIndirectCommandType : NSUInteger;
```

## Topics

### Specifying command types

- [MTLIndirectCommandTypeDraw](mtlindirectcommandtype/draw.md): A draw call command.
- [MTLIndirectCommandTypeDrawIndexed](mtlindirectcommandtype/drawindexed.md): An indexed draw call command.
- [MTLIndirectCommandTypeDrawPatches](mtlindirectcommandtype/drawpatches.md): A draw call command for tessellated patches.
- [MTLIndirectCommandTypeDrawIndexedPatches](mtlindirectcommandtype/drawindexedpatches.md): An indexed draw call command for tessellated patches.
- [MTLIndirectCommandTypeConcurrentDispatch](mtlindirectcommandtype/concurrentdispatch.md): A compute command using a grid aligned to threadgroup boundaries.
- [MTLIndirectCommandTypeConcurrentDispatchThreads](mtlindirectcommandtype/concurrentdispatchthreads.md): A compute command using an arbitrarily sized grid.

### Enumeration Cases

- [MTLIndirectCommandTypeDrawMeshThreadgroups](mtlindirectcommandtype/drawmeshthreadgroups.md)
- [MTLIndirectCommandTypeDrawMeshThreads](mtlindirectcommandtype/drawmeshthreads.md)

## See Also

### Indirect command buffers

- [Creating an indirect command buffer](creating-an-indirect-command-buffer.md): Configure a descriptor to specify the properties of an indirect command buffer.
- [Specifying drawing and dispatch arguments indirectly](specifying-drawing-and-dispatch-arguments-indirectly.md): Use indirect commands if you don’t know your draw or dispatch call arguments when you encode the command.
- [Encoding indirect command buffers on the CPU](encoding-indirect-command-buffers-on-the-cpu.md): Reduce CPU overhead and simplify your command execution by reusing commands.
- [Encoding indirect command buffers on the GPU](encoding-indirect-command-buffers-on-the-gpu.md): Maximize CPU to GPU parallelization by generating render commands on the GPU.
- [MTLIndirectCommandBuffer](mtlindirectcommandbuffer.md): A command buffer containing reusable commands, encoded either on the CPU or GPU.
- [MTLIndirectCommandBufferDescriptor](mtlindirectcommandbufferdescriptor.md): A configuration you create to customize an indirect command buffer.
- [MTLIndirectCommandBufferExecutionRange](mtlindirectcommandbufferexecutionrange.md): A range of commands in an indirect command buffer.
- [MTLIndirectCommandBufferExecutionRangeMake](mtlindirectcommandbufferexecutionrangemake%28____%29.md): Creates a command execution range.
