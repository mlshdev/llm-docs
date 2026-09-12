> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtualmachine/state-swift.enum/resuming](https://developer.apple.com/documentation/virtualization/vzvirtualmachine/state-swift.enum/resuming)

# VZVirtualMachine.State.resuming (Swift)

**Framework:** Virtualization  
**Kind:** Case  
**Availability:** macOS 11.0+

The VM is resuming from a paused state.

## Declaration

```swift
case resuming
```

<a id="Discussion"></a>

## Discussion

This state is an intermediate state between the [VZVirtualMachine.State.paused](paused.md) and [VZVirtualMachine.State.running](running.md) states.

## See Also

### States

- [VZVirtualMachine.State.stopped](stopped.md): The VM isn’t running.
- [VZVirtualMachine.State.running](running.md): The VM is running.
- [VZVirtualMachine.State.paused](paused.md): The framework has paused a started VM.
- [VZVirtualMachine.State.error](error.md): The VM encountered an unrecoverable error.
- [VZVirtualMachine.State.starting](starting.md): The VM is configuring the hardware preparing to run.
- [VZVirtualMachine.State.pausing](pausing.md): The VM is pausing.
- [VZVirtualMachine.State.stopping](stopping.md): The VM is stopping.
- [VZVirtualMachine.State.restoring](restoring.md): The VM is restoring from a saved state.
- [VZVirtualMachine.State.saving](saving.md): The VM is saving its state.
- [VZVirtualMachine.State.stopped](stopped.md): The VM isn’t running.
- [VZVirtualMachine.State.running](running.md): The VM is running.
- [VZVirtualMachine.State.paused](paused.md): The framework has paused a started VM.
- [VZVirtualMachine.State.error](error.md): The VM encountered an unrecoverable error.
- [VZVirtualMachine.State.starting](starting.md): The VM is configuring the hardware preparing to run.
- [VZVirtualMachine.State.pausing](pausing.md): The VM is pausing.

# VZVirtualMachineStateResuming (Objective-C)

**Framework:** Virtualization  
**Kind:** Enumeration Case  
**Availability:** macOS 11.0+

The VM is resuming from a paused state.

## Declaration

```objectivec
VZVirtualMachineStateResuming
```

<a id="Discussion"></a>

## Discussion

This state is an intermediate state between the [VZVirtualMachineStatePaused](paused.md) and [VZVirtualMachineStateRunning](running.md) states.

## See Also

### States

- [VZVirtualMachineStateStopped](stopped.md): The VM isn’t running.
- [VZVirtualMachineStateRunning](running.md): The VM is running.
- [VZVirtualMachineStatePaused](paused.md): The framework has paused a started VM.
- [VZVirtualMachineStateError](error.md): The VM encountered an unrecoverable error.
- [VZVirtualMachineStateStarting](starting.md): The VM is configuring the hardware preparing to run.
- [VZVirtualMachineStatePausing](pausing.md): The VM is pausing.
- [VZVirtualMachineStateStopping](stopping.md): The VM is stopping.
- [VZVirtualMachineStateRestoring](restoring.md): The VM is restoring from a saved state.
- [VZVirtualMachineStateSaving](saving.md): The VM is saving its state.
- [VZVirtualMachineStateStopped](stopped.md): The VM isn’t running.
- [VZVirtualMachineStateRunning](running.md): The VM is running.
- [VZVirtualMachineStatePaused](paused.md): The framework has paused a started VM.
- [VZVirtualMachineStateError](error.md): The VM encountered an unrecoverable error.
- [VZVirtualMachineStateStarting](starting.md): The VM is configuring the hardware preparing to run.
- [VZVirtualMachineStatePausing](pausing.md): The VM is pausing.
