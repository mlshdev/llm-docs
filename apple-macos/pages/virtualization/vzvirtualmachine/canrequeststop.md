> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtualmachine/canrequeststop](https://developer.apple.com/documentation/virtualization/vzvirtualmachine/canrequeststop)

# canRequestStop (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

A Boolean value that indicates whether you can ask the guest operating system to stop running.

## Declaration

```swift
var canRequestStop: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the VM is in a state that allows it to stop running. Call the [requestStop()](requeststop%28%29.md) method to ask the guest operating system to stop running.

## See Also

### Getting the state of the VM

- [state](state-swift.property.md): The current execution state of the VM.
- [VZVirtualMachine.State](state-swift.enum.md): The execution states of the VM.
- [graphicsDevices](graphicsdevices.md): The list of configured graphics devices on the virtual machine.
- [canStart](canstart.md): A Boolean value that indicates whether you can start the VM.
- [canPause](canpause.md): A Boolean value that indicates whether you can pause the VM.
- [canResume](canresume.md): A Boolean value that indicates whether you can resume the VM.
- [canStop](canstop.md): A Boolean value that indicates whether you can stop the VM.
- [queue](queue.md): The queue associated with this virtual machine.

# canRequestStop (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

A Boolean value that indicates whether you can ask the guest operating system to stop running.

## Declaration

```objectivec
@property (readonly) BOOL canRequestStop;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the VM is in a state that allows it to stop running. Call the [requestStopWithError:](requeststop%28%29.md) method to ask the guest operating system to stop running.

## See Also

### Getting the state of the VM

- [state](state-swift.property.md): The current execution state of the VM.
- [VZVirtualMachineState](state-swift.enum.md): The execution states of the VM.
- [graphicsDevices](graphicsdevices.md): The list of configured graphics devices on the virtual machine.
- [canStart](canstart.md): A Boolean value that indicates whether you can start the VM.
- [canPause](canpause.md): A Boolean value that indicates whether you can pause the VM.
- [canResume](canresume.md): A Boolean value that indicates whether you can resume the VM.
- [canStop](canstop.md): A Boolean value that indicates whether you can stop the VM.
- [queue](queue.md): The queue associated with this virtual machine.
