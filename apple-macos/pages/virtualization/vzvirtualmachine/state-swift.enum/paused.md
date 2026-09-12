> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtualmachine/state-swift.enum/paused](https://developer.apple.com/documentation/virtualization/vzvirtualmachine/state-swift.enum/paused)

# VZVirtualMachine.State.paused (Swift)

**Framework:** Virtualization  
**Kind:** Case  
**Availability:** macOS 11.0+

The framework has paused a started VM.

## Declaration

```swift
case paused
```

<a id="Discussion"></a>

## Discussion

The virtual machine can enter this state only from the [VZVirtualMachine.State.pausing](pausing.md) state.

## See Also

### States

- [VZVirtualMachine.State.stopped](stopped.md): The VM isn’t running.
- [VZVirtualMachine.State.running](running.md): The VM is running.
- [VZVirtualMachine.State.error](error.md): The VM encountered an unrecoverable error.
- [VZVirtualMachine.State.starting](starting.md): The VM is configuring the hardware preparing to run.
- [VZVirtualMachine.State.pausing](pausing.md): The VM is pausing.
- [VZVirtualMachine.State.stopping](stopping.md): The VM is stopping.
- [VZVirtualMachine.State.resuming](resuming.md): The VM is resuming from a paused state.
- [VZVirtualMachine.State.restoring](restoring.md): The VM is restoring from a saved state.
- [VZVirtualMachine.State.saving](saving.md): The VM is saving its state.
- [VZVirtualMachine.State.stopped](stopped.md): The VM isn’t running.
- [VZVirtualMachine.State.running](running.md): The VM is running.
- [VZVirtualMachine.State.error](error.md): The VM encountered an unrecoverable error.
- [VZVirtualMachine.State.starting](starting.md): The VM is configuring the hardware preparing to run.
- [VZVirtualMachine.State.pausing](pausing.md): The VM is pausing.
- [VZVirtualMachine.State.stopping](stopping.md): The VM is stopping.

# VZVirtualMachineStatePaused (Objective-C)

**Framework:** Virtualization  
**Kind:** Enumeration Case  
**Availability:** macOS 11.0+

The framework has paused a started VM.

## Declaration

```objectivec
VZVirtualMachineStatePaused
```

<a id="Discussion"></a>

## Discussion

The virtual machine can enter this state only from the [VZVirtualMachineStatePausing](pausing.md) state.

## See Also

### States

- [VZVirtualMachineStateStopped](stopped.md): The VM isn’t running.
- [VZVirtualMachineStateRunning](running.md): The VM is running.
- [VZVirtualMachineStateError](error.md): The VM encountered an unrecoverable error.
- [VZVirtualMachineStateStarting](starting.md): The VM is configuring the hardware preparing to run.
- [VZVirtualMachineStatePausing](pausing.md): The VM is pausing.
- [VZVirtualMachineStateStopping](stopping.md): The VM is stopping.
- [VZVirtualMachineStateResuming](resuming.md): The VM is resuming from a paused state.
- [VZVirtualMachineStateRestoring](restoring.md): The VM is restoring from a saved state.
- [VZVirtualMachineStateSaving](saving.md): The VM is saving its state.
- [VZVirtualMachineStateStopped](stopped.md): The VM isn’t running.
- [VZVirtualMachineStateRunning](running.md): The VM is running.
- [VZVirtualMachineStateError](error.md): The VM encountered an unrecoverable error.
- [VZVirtualMachineStateStarting](starting.md): The VM is configuring the hardware preparing to run.
- [VZVirtualMachineStatePausing](pausing.md): The VM is pausing.
- [VZVirtualMachineStateStopping](stopping.md): The VM is stopping.
