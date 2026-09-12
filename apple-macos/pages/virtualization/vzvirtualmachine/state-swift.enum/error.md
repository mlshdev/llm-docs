> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtualmachine/state-swift.enum/error](https://developer.apple.com/documentation/virtualization/vzvirtualmachine/state-swift.enum/error)

# VZVirtualMachine.State.error (Swift)

**Framework:** Virtualization  
**Kind:** Case  
**Availability:** macOS 11.0+

The VM encountered an unrecoverable error.

## Declaration

```swift
case error
```

<a id="Discussion"></a>

## Discussion

The VM encountered an unrecoverable error and the framework can no longer use the VM; you need to destroy the [VZVirtualMachine](../../vzvirtualmachine.md) object.

## See Also

### States

- [VZVirtualMachine.State.stopped](stopped.md): The VM isn’t running.
- [VZVirtualMachine.State.running](running.md): The VM is running.
- [VZVirtualMachine.State.paused](paused.md): The framework has paused a started VM.
- [VZVirtualMachine.State.starting](starting.md): The VM is configuring the hardware preparing to run.
- [VZVirtualMachine.State.pausing](pausing.md): The VM is pausing.
- [VZVirtualMachine.State.stopping](stopping.md): The VM is stopping.
- [VZVirtualMachine.State.resuming](resuming.md): The VM is resuming from a paused state.
- [VZVirtualMachine.State.restoring](restoring.md): The VM is restoring from a saved state.
- [VZVirtualMachine.State.saving](saving.md): The VM is saving its state.
- [VZVirtualMachine.State.stopped](stopped.md): The VM isn’t running.
- [VZVirtualMachine.State.running](running.md): The VM is running.
- [VZVirtualMachine.State.paused](paused.md): The framework has paused a started VM.
- [VZVirtualMachine.State.starting](starting.md): The VM is configuring the hardware preparing to run.
- [VZVirtualMachine.State.pausing](pausing.md): The VM is pausing.
- [VZVirtualMachine.State.stopping](stopping.md): The VM is stopping.

# VZVirtualMachineStateError (Objective-C)

**Framework:** Virtualization  
**Kind:** Enumeration Case  
**Availability:** macOS 11.0+

The VM encountered an unrecoverable error.

## Declaration

```objectivec
VZVirtualMachineStateError
```

<a id="Discussion"></a>

## Discussion

The VM encountered an unrecoverable error and the framework can no longer use the VM; you need to destroy the [VZVirtualMachine](../../vzvirtualmachine.md) object.

## See Also

### States

- [VZVirtualMachineStateStopped](stopped.md): The VM isn’t running.
- [VZVirtualMachineStateRunning](running.md): The VM is running.
- [VZVirtualMachineStatePaused](paused.md): The framework has paused a started VM.
- [VZVirtualMachineStateStarting](starting.md): The VM is configuring the hardware preparing to run.
- [VZVirtualMachineStatePausing](pausing.md): The VM is pausing.
- [VZVirtualMachineStateStopping](stopping.md): The VM is stopping.
- [VZVirtualMachineStateResuming](resuming.md): The VM is resuming from a paused state.
- [VZVirtualMachineStateRestoring](restoring.md): The VM is restoring from a saved state.
- [VZVirtualMachineStateSaving](saving.md): The VM is saving its state.
- [VZVirtualMachineStateStopped](stopped.md): The VM isn’t running.
- [VZVirtualMachineStateRunning](running.md): The VM is running.
- [VZVirtualMachineStatePaused](paused.md): The framework has paused a started VM.
- [VZVirtualMachineStateStarting](starting.md): The VM is configuring the hardware preparing to run.
- [VZVirtualMachineStatePausing](pausing.md): The VM is pausing.
- [VZVirtualMachineStateStopping](stopping.md): The VM is stopping.
