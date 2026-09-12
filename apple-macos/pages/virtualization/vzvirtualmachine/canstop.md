> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtualmachine/canstop](https://developer.apple.com/documentation/virtualization/vzvirtualmachine/canstop)

# canStop (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

A Boolean value that indicates whether you can stop the VM.

## Declaration

```swift
var canStop: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the VM is in a state that allows you to stop it. Call the [stop(completionHandler:)](stop%28completionhandler_%29.md) to stop the VM.

## See Also

### Getting the state of the VM

- [state](state-swift.property.md): The current execution state of the VM.
- [VZVirtualMachine.State](state-swift.enum.md): The execution states of the VM.
- [graphicsDevices](graphicsdevices.md): The list of configured graphics devices on the virtual machine.
- [canStart](canstart.md): A Boolean value that indicates whether you can start the VM.
- [canPause](canpause.md): A Boolean value that indicates whether you can pause the VM.
- [canResume](canresume.md): A Boolean value that indicates whether you can resume the VM.
- [canRequestStop](canrequeststop.md): A Boolean value that indicates whether you can ask the guest operating system to stop running.
- [queue](queue.md): The queue associated with this virtual machine.

# canStop (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

A Boolean value that indicates whether you can stop the VM.

## Declaration

```objectivec
@property (readonly) BOOL canStop;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the VM is in a state that allows you to stop it. Call the [stopWithCompletionHandler:](stop%28completionhandler_%29.md) to stop the VM.

## See Also

### Getting the state of the VM

- [state](state-swift.property.md): The current execution state of the VM.
- [VZVirtualMachineState](state-swift.enum.md): The execution states of the VM.
- [graphicsDevices](graphicsdevices.md): The list of configured graphics devices on the virtual machine.
- [canStart](canstart.md): A Boolean value that indicates whether you can start the VM.
- [canPause](canpause.md): A Boolean value that indicates whether you can pause the VM.
- [canResume](canresume.md): A Boolean value that indicates whether you can resume the VM.
- [canRequestStop](canrequeststop.md): A Boolean value that indicates whether you can ask the guest operating system to stop running.
- [queue](queue.md): The queue associated with this virtual machine.
