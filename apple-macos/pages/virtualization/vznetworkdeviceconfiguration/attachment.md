> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vznetworkdeviceconfiguration/attachment](https://developer.apple.com/documentation/virtualization/vznetworkdeviceconfiguration/attachment)

# attachment (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The object that defines how the virtual network device communicates with the host system.

## Declaration

```swift
var attachment: VZNetworkDeviceAttachment? { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `nil`. Assign an appropriate value to specify the type of network interface you want to make available to the guest operating system. For example, assign a [VZBridgedNetworkDeviceAttachment](../vzbridgednetworkdeviceattachment.md) object to grant access to one of the host computer’s physical network interfaces.

> **Important**

>  If you assign a [VZBridgedNetworkDeviceAttachment](../vzbridgednetworkdeviceattachment.md) object to this property, your app must have the [com.apple.vm.networking](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.vm.networking) entitlement. Without that entitlement, validation of your [VZVirtualMachineConfiguration](../vzvirtualmachineconfiguration.md) object fails.

## See Also

### Setting configuration attributes

- [macAddress](macaddress.md): The media access control (MAC) address to assign to the network device.

# attachment (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The object that defines how the virtual network device communicates with the host system.

## Declaration

```objectivec
@property (strong, readwrite, nullable) VZNetworkDeviceAttachment * attachment;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `nil`. Assign an appropriate value to specify the type of network interface you want to make available to the guest operating system. For example, assign a [VZBridgedNetworkDeviceAttachment](../vzbridgednetworkdeviceattachment.md) object to grant access to one of the host computer’s physical network interfaces.

> **Important**

>  If you assign a [VZBridgedNetworkDeviceAttachment](../vzbridgednetworkdeviceattachment.md) object to this property, your app must have the [com.apple.vm.networking](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.vm.networking) entitlement. Without that entitlement, validation of your [VZVirtualMachineConfiguration](../vzvirtualmachineconfiguration.md) object fails.

## See Also

### Setting configuration attributes

- [MACAddress](macaddress.md): The media access control (MAC) address to assign to the network device.
