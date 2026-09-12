> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzbridgednetworkdeviceattachment](https://developer.apple.com/documentation/virtualization/vzbridgednetworkdeviceattachment)

# VZBridgedNetworkDeviceAttachment (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 11.0+

A network device that interacts directly with a physical network interface on the host computer.

## Declaration

```swift
class VZBridgedNetworkDeviceAttachment
```

<a id="overview"></a>

## Overview

A [VZBridgedNetworkDeviceAttachment](vzbridgednetworkdeviceattachment.md) object represents a physical interface on the host computer. Use this object when configuring a network interface for your virtual machine. A bridged network device sends and receives packets on the same physical interface as the host computer, but does so using a different network layer.

> **Important**

>  To use this attachment, your app must have the [com.apple.vm.networking](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.vm.networking) entitlement. If it doesn’t, the use of this attachment point results in an invalid [VZVirtualMachineConfiguration](vzvirtualmachineconfiguration.md) object.

To configure a network device with a bridged network interface:

1. Obtain a reference to one of the host’s physical network interfaces from the [networkInterfaces](vzbridgednetworkinterface/networkinterfaces.md) property of [VZBridgedNetworkInterface](vzbridgednetworkinterface.md).
2. Create the [VZBridgedNetworkDeviceAttachment](vzbridgednetworkdeviceattachment.md) object using the network interface.
3. Assign the attachment object to the [attachment](vznetworkdeviceconfiguration/attachment.md) property of a [VZVirtioNetworkDeviceConfiguration](vzvirtionetworkdeviceconfiguration.md) object.
4. Add the [VZVirtioNetworkDeviceConfiguration](vzvirtionetworkdeviceconfiguration.md) object to the [networkDevices](vzvirtualmachineconfiguration/networkdevices.md) property of your [VZVirtualMachineConfiguration](vzvirtualmachineconfiguration.md).

## Topics

### Creating the attachment point

- [init(interface:)](vzbridgednetworkdeviceattachment/init%28interface_%29.md): Creates the attachment from a bridged network interface object.

### Getting the network interface

- [interface](vzbridgednetworkdeviceattachment/interface.md): The network interface assigned to this attachment.

## Relationships

### Inherits From

- [VZNetworkDeviceAttachment](vznetworkdeviceattachment.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Attachment points

- [VZFileHandleNetworkDeviceAttachment](vzfilehandlenetworkdeviceattachment.md): A network device that transmits raw network packets and frames using a datagram socket.
- [VZNATNetworkDeviceAttachment](vznatnetworkdeviceattachment.md): A device that routes network requests through the host computer and performs network address translation on the resulting packets.
- [VZVmnetNetworkDeviceAttachment](vzvmnetnetworkdeviceattachment.md): A network device attachment that allows a custom network topology.
- [VZNetworkDeviceAttachment](vznetworkdeviceattachment.md): The common behaviors for the network attachment points of your virtual machine.

# VZBridgedNetworkDeviceAttachment (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 11.0+

A network device that interacts directly with a physical network interface on the host computer.

## Declaration

```objectivec
@interface VZBridgedNetworkDeviceAttachment : VZNetworkDeviceAttachment
```

<a id="overview"></a>

## Overview

A [VZBridgedNetworkDeviceAttachment](vzbridgednetworkdeviceattachment.md) object represents a physical interface on the host computer. Use this object when configuring a network interface for your virtual machine. A bridged network device sends and receives packets on the same physical interface as the host computer, but does so using a different network layer.

> **Important**

>  To use this attachment, your app must have the [com.apple.vm.networking](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.vm.networking) entitlement. If it doesn’t, the use of this attachment point results in an invalid [VZVirtualMachineConfiguration](vzvirtualmachineconfiguration.md) object.

To configure a network device with a bridged network interface:

1. Obtain a reference to one of the host’s physical network interfaces from the [networkInterfaces](vzbridgednetworkinterface/networkinterfaces.md) property of [VZBridgedNetworkInterface](vzbridgednetworkinterface.md).
2. Create the [VZBridgedNetworkDeviceAttachment](vzbridgednetworkdeviceattachment.md) object using the network interface.
3. Assign the attachment object to the [attachment](vznetworkdeviceconfiguration/attachment.md) property of a [VZVirtioNetworkDeviceConfiguration](vzvirtionetworkdeviceconfiguration.md) object.
4. Add the [VZVirtioNetworkDeviceConfiguration](vzvirtionetworkdeviceconfiguration.md) object to the [networkDevices](vzvirtualmachineconfiguration/networkdevices.md) property of your [VZVirtualMachineConfiguration](vzvirtualmachineconfiguration.md).

## Topics

### Creating the attachment point

- [initWithInterface:](vzbridgednetworkdeviceattachment/init%28interface_%29.md): Creates the attachment from a bridged network interface object.

### Getting the network interface

- [interface](vzbridgednetworkdeviceattachment/interface.md): The network interface assigned to this attachment.

## Relationships

### Inherits From

- [VZNetworkDeviceAttachment](vznetworkdeviceattachment.md)

## See Also

### Attachment points

- [VZFileHandleNetworkDeviceAttachment](vzfilehandlenetworkdeviceattachment.md): A network device that transmits raw network packets and frames using a datagram socket.
- [VZNATNetworkDeviceAttachment](vznatnetworkdeviceattachment.md): A device that routes network requests through the host computer and performs network address translation on the resulting packets.
- [VZVmnetNetworkDeviceAttachment](vzvmnetnetworkdeviceattachment.md): A network device attachment that allows a custom network topology.
- [VZNetworkDeviceAttachment](vznetworkdeviceattachment.md): The common behaviors for the network attachment points of your virtual machine.
