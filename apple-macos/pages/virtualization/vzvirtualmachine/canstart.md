> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtualmachine/canstart](https://developer.apple.com/documentation/virtualization/vzvirtualmachine/canstart)

# canStart (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

A Boolean value that indicates whether you can start the VM.

## Declaration

```swift
var canStart: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the VM is in a state that allows you to start it. Call the [start(completionHandler:)](start%28completionhandler_%29.md) method (Swift)  or [start()](start%28%29.md) method (Objective-C) to start the VM.

## See Also

### Getting the state of the VM

- [state](state-swift.property.md): The current execution state of the VM.
- [VZVirtualMachine.State](state-swift.enum.md): The execution states of the VM.
- [graphicsDevices](graphicsdevices.md): The list of configured graphics devices on the virtual machine.
- [canPause](canpause.md): A Boolean value that indicates whether you can pause the VM.
- [canResume](canresume.md): A Boolean value that indicates whether you can resume the VM.
- [canStop](canstop.md): A Boolean value that indicates whether you can stop the VM.
- [canRequestStop](canrequeststop.md): A Boolean value that indicates whether you can ask the guest operating system to stop running.
- [queue](queue.md): The queue associated with this virtual machine.

# canStart (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

A Boolean value that indicates whether you can start the VM.

## Declaration

```objectivec
@property (readonly) BOOL canStart;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the VM is in a state that allows you to start it. Call the [start(completionHandler:)](start%28completionhandler_%29.md) method (Swift)  or [startWithCompletionHandler:](start%28%29.md) method (Objective-C) to start the VM.

## See Also

### Getting the state of the VM

- [state](state-swift.property.md): The current execution state of the VM.
- [VZVirtualMachineState](state-swift.enum.md): The execution states of the VM.
- [graphicsDevices](graphicsdevices.md): The list of configured graphics devices on the virtual machine.
- [canPause](canpause.md): A Boolean value that indicates whether you can pause the VM.
- [canResume](canresume.md): A Boolean value that indicates whether you can resume the VM.
- [canStop](canstop.md): A Boolean value that indicates whether you can stop the VM.
- [canRequestStop](canrequeststop.md): A Boolean value that indicates whether you can ask the guest operating system to stop running.
- [queue](queue.md): The queue associated with this virtual machine.
