> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzfilehandlenetworkdeviceattachment](https://developer.apple.com/documentation/virtualization/vzfilehandlenetworkdeviceattachment)

# VZFileHandleNetworkDeviceAttachment (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 11.0+

A network device that transmits raw network packets and frames using a datagram socket.

## Declaration

```swift
class VZFileHandleNetworkDeviceAttachment
```

<a id="overview"></a>

## Overview

A [VZFileHandleNetworkDeviceAttachment](vzfilehandlenetworkdeviceattachment.md) object maps a network interface to a connected datagram socket. This attachment transmits data at the data link layer. You configure and manage the socket in your app, and manage the corresponding data transfers.

To configure a network device with a socket-based file handle:

1. Create a socket with the `SOCK_DGRAM` type in your app.
2. Create a [FileHandle](https://developer.apple.com/documentation/foundation/filehandle) from the socket’s file descriptor.
3. Create the [VZFileHandleNetworkDeviceAttachment](vzfilehandlenetworkdeviceattachment.md) object using the file handle.
4. Assign the attachment object to the [attachment](vznetworkdeviceconfiguration/attachment.md) property of a [VZVirtioNetworkDeviceConfiguration](vzvirtionetworkdeviceconfiguration.md) object.
5. Add the [VZVirtioNetworkDeviceConfiguration](vzvirtionetworkdeviceconfiguration.md) object to the [networkDevices](vzvirtualmachineconfiguration/networkdevices.md) property of your [VZVirtualMachineConfiguration](vzvirtualmachineconfiguration.md).

This attachment doesn’t require your app to have the [com.apple.vm.networking](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.vm.networking) entitlement.

## Topics

### Creating the attachment point

- [init(fileHandle:)](vzfilehandlenetworkdeviceattachment/init%28filehandle_%29.md): Creates the attachment from a file handle that contains a connected datagram socket.

### Getting the file handle

- [fileHandle](vzfilehandlenetworkdeviceattachment/filehandle.md): The file handle assigned to this attachment.

### Specifying the network packet size

- [maximumTransmissionUnit](vzfilehandlenetworkdeviceattachment/maximumtransmissionunit.md): An integer value that indicates the maximum transmission unit (MTU) associated with this attachment.

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
- [VZNATNetworkDeviceAttachment](vznatnetworkdeviceattachment.md): A device that routes network requests through the host computer and performs network address translation on the resulting packets.
- [VZVmnetNetworkDeviceAttachment](vzvmnetnetworkdeviceattachment.md): A network device attachment that allows a custom network topology.
- [VZNetworkDeviceAttachment](vznetworkdeviceattachment.md): The common behaviors for the network attachment points of your virtual machine.

# VZFileHandleNetworkDeviceAttachment (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 11.0+

A network device that transmits raw network packets and frames using a datagram socket.

## Declaration

```objectivec
@interface VZFileHandleNetworkDeviceAttachment : VZNetworkDeviceAttachment
```

<a id="overview"></a>

## Overview

A [VZFileHandleNetworkDeviceAttachment](vzfilehandlenetworkdeviceattachment.md) object maps a network interface to a connected datagram socket. This attachment transmits data at the data link layer. You configure and manage the socket in your app, and manage the corresponding data transfers.

To configure a network device with a socket-based file handle:

1. Create a socket with the `SOCK_DGRAM` type in your app.
2. Create a [NSFileHandle](https://developer.apple.com/documentation/foundation/filehandle) from the socket’s file descriptor.
3. Create the [VZFileHandleNetworkDeviceAttachment](vzfilehandlenetworkdeviceattachment.md) object using the file handle.
4. Assign the attachment object to the [attachment](vznetworkdeviceconfiguration/attachment.md) property of a [VZVirtioNetworkDeviceConfiguration](vzvirtionetworkdeviceconfiguration.md) object.
5. Add the [VZVirtioNetworkDeviceConfiguration](vzvirtionetworkdeviceconfiguration.md) object to the [networkDevices](vzvirtualmachineconfiguration/networkdevices.md) property of your [VZVirtualMachineConfiguration](vzvirtualmachineconfiguration.md).

This attachment doesn’t require your app to have the [com.apple.vm.networking](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.vm.networking) entitlement.

## Topics

### Creating the attachment point

- [initWithFileHandle:](vzfilehandlenetworkdeviceattachment/init%28filehandle_%29.md): Creates the attachment from a file handle that contains a connected datagram socket.

### Getting the file handle

- [fileHandle](vzfilehandlenetworkdeviceattachment/filehandle.md): The file handle assigned to this attachment.

### Specifying the network packet size

- [maximumTransmissionUnit](vzfilehandlenetworkdeviceattachment/maximumtransmissionunit.md): An integer value that indicates the maximum transmission unit (MTU) associated with this attachment.

## Relationships

### Inherits From

- [VZNetworkDeviceAttachment](vznetworkdeviceattachment.md)

## See Also

### Attachment points

- [VZBridgedNetworkDeviceAttachment](vzbridgednetworkdeviceattachment.md): A network device that interacts directly with a physical network interface on the host computer.
- [VZNATNetworkDeviceAttachment](vznatnetworkdeviceattachment.md): A device that routes network requests through the host computer and performs network address translation on the resulting packets.
- [VZVmnetNetworkDeviceAttachment](vzvmnetnetworkdeviceattachment.md): A network device attachment that allows a custom network topology.
- [VZNetworkDeviceAttachment](vznetworkdeviceattachment.md): The common behaviors for the network attachment points of your virtual machine.
