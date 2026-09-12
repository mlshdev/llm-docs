> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vznatnetworkdeviceattachment](https://developer.apple.com/documentation/virtualization/vznatnetworkdeviceattachment)

# VZNATNetworkDeviceAttachment (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 11.0+

A device that routes network requests through the host computer and performs network address translation on the resulting packets.

## Declaration

```swift
class VZNATNetworkDeviceAttachment
```

<a id="overview"></a>

## Overview

A [VZNATNetworkDeviceAttachment](vznatnetworkdeviceattachment.md) works with the host computer to perform network address translation (NAT) on the guest system’s network packets, and then route those packets to outside networks. Use this attachment to give the guest system indirect access to external networks, instead of direct access through a shared physical network interface.

To configure a network device with a NAT attachment:

1. Create the [VZNATNetworkDeviceAttachment](vznatnetworkdeviceattachment.md) object.
2. Assign the attachment object to the [attachment](vznetworkdeviceconfiguration/attachment.md) property of a [VZVirtioNetworkDeviceConfiguration](vzvirtionetworkdeviceconfiguration.md) object.
3. Add the [VZVirtioNetworkDeviceConfiguration](vzvirtionetworkdeviceconfiguration.md) object to the [networkDevices](vzvirtualmachineconfiguration/networkdevices.md) property of your [VZVirtualMachineConfiguration](vzvirtualmachineconfiguration.md).

This attachment doesn’t require your app to have the [com.apple.vm.networking](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.vm.networking) entitlement.

## Topics

### Creating the Attachment Point

- [init()](vznatnetworkdeviceattachment/init%28%29.md): Creates an attachment that performs network address translation on the guest system’s network packets.

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

- [VZBridgedNetworkDeviceAttachment](vzbridgednetworkdeviceattachment.md): A network device that interacts directly with a physical network interface on the host computer.
- [VZFileHandleNetworkDeviceAttachment](vzfilehandlenetworkdeviceattachment.md): A network device that transmits raw network packets and frames using a datagram socket.
- [VZVmnetNetworkDeviceAttachment](vzvmnetnetworkdeviceattachment.md): A network device attachment that allows a custom network topology.
- [VZNetworkDeviceAttachment](vznetworkdeviceattachment.md): The common behaviors for the network attachment points of your virtual machine.

# VZNATNetworkDeviceAttachment (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 11.0+

A device that routes network requests through the host computer and performs network address translation on the resulting packets.

## Declaration

```objectivec
@interface VZNATNetworkDeviceAttachment : VZNetworkDeviceAttachment
```

<a id="overview"></a>

## Overview

A [VZNATNetworkDeviceAttachment](vznatnetworkdeviceattachment.md) works with the host computer to perform network address translation (NAT) on the guest system’s network packets, and then route those packets to outside networks. Use this attachment to give the guest system indirect access to external networks, instead of direct access through a shared physical network interface.

To configure a network device with a NAT attachment:

1. Create the [VZNATNetworkDeviceAttachment](vznatnetworkdeviceattachment.md) object.
2. Assign the attachment object to the [attachment](vznetworkdeviceconfiguration/attachment.md) property of a [VZVirtioNetworkDeviceConfiguration](vzvirtionetworkdeviceconfiguration.md) object.
3. Add the [VZVirtioNetworkDeviceConfiguration](vzvirtionetworkdeviceconfiguration.md) object to the [networkDevices](vzvirtualmachineconfiguration/networkdevices.md) property of your [VZVirtualMachineConfiguration](vzvirtualmachineconfiguration.md).

This attachment doesn’t require your app to have the [com.apple.vm.networking](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.vm.networking) entitlement.

## Topics

### Creating the Attachment Point

- [init](vznatnetworkdeviceattachment/init%28%29.md): Creates an attachment that performs network address translation on the guest system’s network packets.

## Relationships

### Inherits From

- [VZNetworkDeviceAttachment](vznetworkdeviceattachment.md)

## See Also

### Attachment points

- [VZBridgedNetworkDeviceAttachment](vzbridgednetworkdeviceattachment.md): A network device that interacts directly with a physical network interface on the host computer.
- [VZFileHandleNetworkDeviceAttachment](vzfilehandlenetworkdeviceattachment.md): A network device that transmits raw network packets and frames using a datagram socket.
- [VZVmnetNetworkDeviceAttachment](vzvmnetnetworkdeviceattachment.md): A network device attachment that allows a custom network topology.
- [VZNetworkDeviceAttachment](vznetworkdeviceattachment.md): The common behaviors for the network attachment points of your virtual machine.
