> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/command-buffer-debugging](https://developer.apple.com/documentation/metal/command-buffer-debugging)

# Command buffer debugging (Swift)

**Framework:** Metal  
**Kind:** API Collection

Properties and methods for programmatically debugging runtime issues with a command buffer.

## Topics

### Identifying the command buffer

- [label](mtlcommandbuffer/label.md): An optional name that can help you identify the command buffer.
- [commandQueue](mtlcommandbuffer/commandqueue.md): The command queue that creates the command buffer.
- [device](mtlcommandbuffer/device.md): The GPU device that indirectly owns the command buffer because you create it from a command queue the device also owns.

### Grouping commands within a GPU frame capture

- [pushDebugGroup(\_:)](mtlcommandbuffer/pushdebuggroup%28__%29.md): Marks the beginning of a debug group and gives it an identifying label, which temporarily replaces the previous group, if applicable.
- [popDebugGroup()](mtlcommandbuffer/popdebuggroup%28%29.md): Marks the end of a debug group and, if applicable, restores the previous group from a stack.

### Getting error details

- [error](mtlcommandbuffer/error.md): A description of an error when the GPU encounters an issue as it runs the command buffer.
- [errorOptions](mtlcommandbuffer/erroroptions.md): Settings that determine which information the command buffer records about execution errors, and how it does it.
- [MTLCommandBufferEncoderInfo](mtlcommandbufferencoderinfo.md): A container that provides additional information about a runtime failure a GPU encounters as it runs the commands in a command buffer.
- [MTLCommandBufferEncoderInfoErrorKey](mtlcommandbufferencoderinfoerrorkey.md): A key to a command buffer error’s user information dictionary that retrieves additional information about a GPU’s runtime error.

### Reading the runtime message logs

- [logs](mtlcommandbuffer/logs-518l2.md): The messages the command buffer records as the GPU runs its commands.

### Checking scheduling times on the CPU

- [kernelStartTime](mtlcommandbuffer/kernelstarttime.md): The host time, in seconds, when the CPU begins to schedule the command buffer.
- [kernelEndTime](mtlcommandbuffer/kernelendtime.md): The host time, in seconds, when the CPU finishes scheduling the command buffer.

### Checking execution times on the GPU

- [gpuStartTime](mtlcommandbuffer/gpustarttime.md): The host time, in seconds, when the GPU starts command buffer execution.
- [gpuEndTime](mtlcommandbuffer/gpuendtime.md): The host time, in seconds, when the GPU finishes execution of the command buffer.

### Determining whether to maintain strong references

- [retainedReferences](mtlcommandbuffer/retainedreferences.md): A Boolean value that indicates whether the command buffer maintains strong references to the resources it uses.

## See Also

### Troubleshooting a command buffer

- [status](mtlcommandbuffer/status.md): The command buffer’s current state.
- [MTLCommandBufferStatus](mtlcommandbufferstatus.md): The discrete states for a command buffer that represent its life cycle stages.

# Command buffer debugging (Objective-C)

**Framework:** Metal  
**Kind:** API Collection

Properties and methods for programmatically debugging runtime issues with a command buffer.

## Topics

### Identifying the command buffer

- [label](mtlcommandbuffer/label.md): An optional name that can help you identify the command buffer.
- [commandQueue](mtlcommandbuffer/commandqueue.md): The command queue that creates the command buffer.
- [device](mtlcommandbuffer/device.md): The GPU device that indirectly owns the command buffer because you create it from a command queue the device also owns.

### Grouping commands within a GPU frame capture

- [pushDebugGroup:](mtlcommandbuffer/pushdebuggroup%28__%29.md): Marks the beginning of a debug group and gives it an identifying label, which temporarily replaces the previous group, if applicable.
- [popDebugGroup](mtlcommandbuffer/popdebuggroup%28%29.md): Marks the end of a debug group and, if applicable, restores the previous group from a stack.

### Getting error details

- [error](mtlcommandbuffer/error.md): A description of an error when the GPU encounters an issue as it runs the command buffer.
- [errorOptions](mtlcommandbuffer/erroroptions.md): Settings that determine which information the command buffer records about execution errors, and how it does it.
- [MTLCommandBufferEncoderInfo](mtlcommandbufferencoderinfo.md): A container that provides additional information about a runtime failure a GPU encounters as it runs the commands in a command buffer.
- [MTLCommandBufferEncoderInfoErrorKey](mtlcommandbufferencoderinfoerrorkey.md): A key to a command buffer error’s user information dictionary that retrieves additional information about a GPU’s runtime error.

### Reading the runtime message logs

- [logs](mtlcommandbuffer/logs.md): The messages the command buffer records as the GPU runs its commands.

### Checking scheduling times on the CPU

- [kernelStartTime](mtlcommandbuffer/kernelstarttime.md): The host time, in seconds, when the CPU begins to schedule the command buffer.
- [kernelEndTime](mtlcommandbuffer/kernelendtime.md): The host time, in seconds, when the CPU finishes scheduling the command buffer.

### Checking execution times on the GPU

- [GPUStartTime](mtlcommandbuffer/gpustarttime.md): The host time, in seconds, when the GPU starts command buffer execution.
- [GPUEndTime](mtlcommandbuffer/gpuendtime.md): The host time, in seconds, when the GPU finishes execution of the command buffer.

### Determining whether to maintain strong references

- [retainedReferences](mtlcommandbuffer/retainedreferences.md): A Boolean value that indicates whether the command buffer maintains strong references to the resources it uses.

## See Also

### Troubleshooting a command buffer

- [status](mtlcommandbuffer/status.md): The command buffer’s current state.
- [MTLCommandBufferStatus](mtlcommandbufferstatus.md): The discrete states for a command buffer that represent its life cycle stages.
