> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtualmachinedelegate/virtualmachine(_:networkdevice:attachmentwasdisconnectedwitherror:)](https://developer.apple.com/documentation/virtualization/vzvirtualmachinedelegate/virtualmachine(_:networkdevice:attachmentwasdisconnectedwitherror:))

# virtualMachine(\_:networkDevice:attachmentWasDisconnectedWithError:) (Swift)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

The method the framework calls when an error causes a VM’s network attachment to disconnect.

## Declaration

```swift
optional func virtualMachine(_ virtualMachine: VZVirtualMachine, networkDevice: VZNetworkDevice, attachmentWasDisconnectedWithError error: any Error)
```

## Parameters

- `virtualMachine`: The VM invoking the delegate method.
- `networkDevice`: The disconnected network device.
- `error`: The error that describes why the virtual machine disconnected the network device.

<a id="Discussion"></a>

## Discussion

The system invokes this method when the network interface fails to start, which results in the disconnection of the network attachment. This can happen in many situations such as initial boot, device reset, reboot, and so on. The system may invoke this method several times during a VM’s life cycle. After the system calls this method, the [attachment](../vznetworkdevice/attachment.md) property is `nil`.

# virtualMachine:networkDevice:attachmentWasDisconnectedWithError: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

The method the framework calls when an error causes a VM’s network attachment to disconnect.

## Declaration

```objectivec
- (void) virtualMachine:(VZVirtualMachine *) virtualMachine networkDevice:(VZNetworkDevice *) networkDevice attachmentWasDisconnectedWithError:(NSError *) error;
```

## Parameters

- `virtualMachine`: The VM invoking the delegate method.
- `networkDevice`: The disconnected network device.
- `error`: The error that describes why the virtual machine disconnected the network device.

<a id="Discussion"></a>

## Discussion

The system invokes this method when the network interface fails to start, which results in the disconnection of the network attachment. This can happen in many situations such as initial boot, device reset, reboot, and so on. The system may invoke this method several times during a VM’s life cycle. After the system calls this method, the [attachment](../vznetworkdevice/attachment.md) property is `nil`.
