> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtualmachine/state-swift.property](https://developer.apple.com/documentation/virtualization/vzvirtualmachine/state-swift.property)

# state (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The current execution state of the VM.

## Declaration

```swift
var state: VZVirtualMachine.State { get }
```

## See Also

### Getting the state of the VM

- [VZVirtualMachine.State](state-swift.enum.md): The execution states of the VM.
- [graphicsDevices](graphicsdevices.md): The list of configured graphics devices on the virtual machine.
- [canStart](canstart.md): A Boolean value that indicates whether you can start the VM.
- [canPause](canpause.md): A Boolean value that indicates whether you can pause the VM.
- [canResume](canresume.md): A Boolean value that indicates whether you can resume the VM.
- [canStop](canstop.md): A Boolean value that indicates whether you can stop the VM.
- [canRequestStop](canrequeststop.md): A Boolean value that indicates whether you can ask the guest operating system to stop running.
- [queue](queue.md): The queue associated with this virtual machine.

# state (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The current execution state of the VM.

## Declaration

```objectivec
@property (readonly) VZVirtualMachineState state;
```

## See Also

### Getting the state of the VM

- [VZVirtualMachineState](state-swift.enum.md): The execution states of the VM.
- [graphicsDevices](graphicsdevices.md): The list of configured graphics devices on the virtual machine.
- [canStart](canstart.md): A Boolean value that indicates whether you can start the VM.
- [canPause](canpause.md): A Boolean value that indicates whether you can pause the VM.
- [canResume](canresume.md): A Boolean value that indicates whether you can resume the VM.
- [canStop](canstop.md): A Boolean value that indicates whether you can stop the VM.
- [canRequestStop](canrequeststop.md): A Boolean value that indicates whether you can ask the guest operating system to stop running.
- [queue](queue.md): The queue associated with this virtual machine.
