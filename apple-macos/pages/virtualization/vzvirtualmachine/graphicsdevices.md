> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtualmachine/graphicsdevices](https://developer.apple.com/documentation/virtualization/vzvirtualmachine/graphicsdevices)

# graphicsDevices (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The list of configured graphics devices on the virtual machine.

## Declaration

```swift
var graphicsDevices: [VZGraphicsDevice] { get }
```

<a id="Discussion"></a>

## Discussion

Returns an empty array if there are no graphics devices configured.

## See Also

### Related Documentation

- [VZGraphicsDeviceConfiguration](../vzgraphicsdeviceconfiguration.md): The base class for a graphics device configuration.
- [VZVirtualMachineConfiguration](../vzvirtualmachineconfiguration.md): The environment attributes and list of devices to use during the configuration of macOS or Linux VMs.

### Getting the state of the VM

- [state](state-swift.property.md): The current execution state of the VM.
- [VZVirtualMachine.State](state-swift.enum.md): The execution states of the VM.
- [canStart](canstart.md): A Boolean value that indicates whether you can start the VM.
- [canPause](canpause.md): A Boolean value that indicates whether you can pause the VM.
- [canResume](canresume.md): A Boolean value that indicates whether you can resume the VM.
- [canStop](canstop.md): A Boolean value that indicates whether you can stop the VM.
- [canRequestStop](canrequeststop.md): A Boolean value that indicates whether you can ask the guest operating system to stop running.
- [queue](queue.md): The queue associated with this virtual machine.

# graphicsDevices (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The list of configured graphics devices on the virtual machine.

## Declaration

```objectivec
@property (copy, readonly) NSArray<VZGraphicsDevice *> * graphicsDevices;
```

<a id="Discussion"></a>

## Discussion

Returns an empty array if there are no graphics devices configured.

## See Also

### Related Documentation

- [VZGraphicsDeviceConfiguration](../vzgraphicsdeviceconfiguration.md): The base class for a graphics device configuration.
- [VZVirtualMachineConfiguration](../vzvirtualmachineconfiguration.md): The environment attributes and list of devices to use during the configuration of macOS or Linux VMs.

### Getting the state of the VM

- [state](state-swift.property.md): The current execution state of the VM.
- [VZVirtualMachineState](state-swift.enum.md): The execution states of the VM.
- [canStart](canstart.md): A Boolean value that indicates whether you can start the VM.
- [canPause](canpause.md): A Boolean value that indicates whether you can pause the VM.
- [canResume](canresume.md): A Boolean value that indicates whether you can resume the VM.
- [canStop](canstop.md): A Boolean value that indicates whether you can stop the VM.
- [canRequestStop](canrequeststop.md): A Boolean value that indicates whether you can ask the guest operating system to stop running.
- [queue](queue.md): The queue associated with this virtual machine.
