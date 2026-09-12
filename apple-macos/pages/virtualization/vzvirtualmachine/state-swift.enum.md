> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtualmachine/state-swift.enum](https://developer.apple.com/documentation/virtualization/vzvirtualmachine/state-swift.enum)

# VZVirtualMachine.State (Swift)

**Framework:** Virtualization  
**Kind:** Enumeration  
**Availability:** macOS 11.0+

The execution states of the VM.

## Declaration

```swift
enum State
```

## Topics

### States

- [VZVirtualMachine.State.stopped](state-swift.enum/stopped.md): The VM isn’t running.
- [VZVirtualMachine.State.running](state-swift.enum/running.md): The VM is running.
- [VZVirtualMachine.State.paused](state-swift.enum/paused.md): The framework has paused a started VM.
- [VZVirtualMachine.State.error](state-swift.enum/error.md): The VM encountered an unrecoverable error.
- [VZVirtualMachine.State.starting](state-swift.enum/starting.md): The VM is configuring the hardware preparing to run.
- [VZVirtualMachine.State.pausing](state-swift.enum/pausing.md): The VM is pausing.
- [VZVirtualMachine.State.stopping](state-swift.enum/stopping.md): The VM is stopping.
- [VZVirtualMachine.State.resuming](state-swift.enum/resuming.md): The VM is resuming from a paused state.
- [VZVirtualMachine.State.restoring](state-swift.enum/restoring.md): The VM is restoring from a saved state.
- [VZVirtualMachine.State.saving](state-swift.enum/saving.md): The VM is saving its state.
- [VZVirtualMachine.State.stopped](state-swift.enum/stopped.md): The VM isn’t running.
- [VZVirtualMachine.State.running](state-swift.enum/running.md): The VM is running.
- [VZVirtualMachine.State.paused](state-swift.enum/paused.md): The framework has paused a started VM.
- [VZVirtualMachine.State.error](state-swift.enum/error.md): The VM encountered an unrecoverable error.
- [VZVirtualMachine.State.starting](state-swift.enum/starting.md): The VM is configuring the hardware preparing to run.
- [VZVirtualMachine.State.pausing](state-swift.enum/pausing.md): The VM is pausing.
- [VZVirtualMachine.State.stopping](state-swift.enum/stopping.md): The VM is stopping.
- [VZVirtualMachine.State.resuming](state-swift.enum/resuming.md): The VM is resuming from a paused state.
- [VZVirtualMachine.State.restoring](state-swift.enum/restoring.md): The VM is restoring from a saved state.
- [VZVirtualMachine.State.saving](state-swift.enum/saving.md): The VM is saving its state.

### Initializers

- [init(rawValue:)](state-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the state of the VM

- [state](state-swift.property.md): The current execution state of the VM.
- [graphicsDevices](graphicsdevices.md): The list of configured graphics devices on the virtual machine.
- [canStart](canstart.md): A Boolean value that indicates whether you can start the VM.
- [canPause](canpause.md): A Boolean value that indicates whether you can pause the VM.
- [canResume](canresume.md): A Boolean value that indicates whether you can resume the VM.
- [canStop](canstop.md): A Boolean value that indicates whether you can stop the VM.
- [canRequestStop](canrequeststop.md): A Boolean value that indicates whether you can ask the guest operating system to stop running.
- [queue](queue.md): The queue associated with this virtual machine.

# VZVirtualMachineState (Objective-C)

**Framework:** Virtualization  
**Kind:** Enumeration  
**Availability:** macOS 11.0+

The execution states of the VM.

## Declaration

```objectivec
enum VZVirtualMachineState : NSInteger;
```

## Topics

### States

- [VZVirtualMachineStateStopped](state-swift.enum/stopped.md): The VM isn’t running.
- [VZVirtualMachineStateRunning](state-swift.enum/running.md): The VM is running.
- [VZVirtualMachineStatePaused](state-swift.enum/paused.md): The framework has paused a started VM.
- [VZVirtualMachineStateError](state-swift.enum/error.md): The VM encountered an unrecoverable error.
- [VZVirtualMachineStateStarting](state-swift.enum/starting.md): The VM is configuring the hardware preparing to run.
- [VZVirtualMachineStatePausing](state-swift.enum/pausing.md): The VM is pausing.
- [VZVirtualMachineStateStopping](state-swift.enum/stopping.md): The VM is stopping.
- [VZVirtualMachineStateResuming](state-swift.enum/resuming.md): The VM is resuming from a paused state.
- [VZVirtualMachineStateRestoring](state-swift.enum/restoring.md): The VM is restoring from a saved state.
- [VZVirtualMachineStateSaving](state-swift.enum/saving.md): The VM is saving its state.
- [VZVirtualMachineStateStopped](state-swift.enum/stopped.md): The VM isn’t running.
- [VZVirtualMachineStateRunning](state-swift.enum/running.md): The VM is running.
- [VZVirtualMachineStatePaused](state-swift.enum/paused.md): The framework has paused a started VM.
- [VZVirtualMachineStateError](state-swift.enum/error.md): The VM encountered an unrecoverable error.
- [VZVirtualMachineStateStarting](state-swift.enum/starting.md): The VM is configuring the hardware preparing to run.
- [VZVirtualMachineStatePausing](state-swift.enum/pausing.md): The VM is pausing.
- [VZVirtualMachineStateStopping](state-swift.enum/stopping.md): The VM is stopping.
- [VZVirtualMachineStateResuming](state-swift.enum/resuming.md): The VM is resuming from a paused state.
- [VZVirtualMachineStateRestoring](state-swift.enum/restoring.md): The VM is restoring from a saved state.
- [VZVirtualMachineStateSaving](state-swift.enum/saving.md): The VM is saving its state.

## See Also

### Getting the state of the VM

- [state](state-swift.property.md): The current execution state of the VM.
- [graphicsDevices](graphicsdevices.md): The list of configured graphics devices on the virtual machine.
- [canStart](canstart.md): A Boolean value that indicates whether you can start the VM.
- [canPause](canpause.md): A Boolean value that indicates whether you can pause the VM.
- [canResume](canresume.md): A Boolean value that indicates whether you can resume the VM.
- [canStop](canstop.md): A Boolean value that indicates whether you can stop the VM.
- [canRequestStop](canrequeststop.md): A Boolean value that indicates whether you can ask the guest operating system to stop running.
- [queue](queue.md): The queue associated with this virtual machine.
