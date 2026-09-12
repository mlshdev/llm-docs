> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvmnetnetworkdeviceattachment](https://developer.apple.com/documentation/virtualization/vzvmnetnetworkdeviceattachment)

# VZVmnetNetworkDeviceAttachment (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 26.0+

A network device attachment that allows a custom network topology.

## Declaration

```swift
class VZVmnetNetworkDeviceAttachment
```

<a id="overview"></a>

## Overview

The Virtualization framework backs this attachment by a logical network which the client creates and customizes through the [vmnet](../vmnet.md) framework APIs to allow custom network topology which allows multiple virtual machines to appear on the same network and connect with each other.

## Topics

### Creating the vmnet network device attachment

- [init(network:)](vzvmnetnetworkdeviceattachment/init%28network_%29.md): Creates the attachment and configures it with the specified data.
- [network](vzvmnetnetworkdeviceattachment/network.md): The network object that the you initialize the attachment with.

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
- [VZNATNetworkDeviceAttachment](vznatnetworkdeviceattachment.md): A device that routes network requests through the host computer and performs network address translation on the resulting packets.
- [VZNetworkDeviceAttachment](vznetworkdeviceattachment.md): The common behaviors for the network attachment points of your virtual machine.

# VZVmnetNetworkDeviceAttachment (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 26.0+

A network device attachment that allows a custom network topology.

## Declaration

```objectivec
@interface VZVmnetNetworkDeviceAttachment : VZNetworkDeviceAttachment
```

<a id="overview"></a>

## Overview

The Virtualization framework backs this attachment by a logical network which the client creates and customizes through the [vmnet](../vmnet.md) framework APIs to allow custom network topology which allows multiple virtual machines to appear on the same network and connect with each other.

## Topics

### Creating the vmnet network device attachment

- [initWithNetwork:](vzvmnetnetworkdeviceattachment/init%28network_%29.md): Creates the attachment and configures it with the specified data.
- [network](vzvmnetnetworkdeviceattachment/network.md): The network object that the you initialize the attachment with.

## Relationships

### Inherits From

- [VZNetworkDeviceAttachment](vznetworkdeviceattachment.md)

## See Also

### Attachment points

- [VZBridgedNetworkDeviceAttachment](vzbridgednetworkdeviceattachment.md): A network device that interacts directly with a physical network interface on the host computer.
- [VZFileHandleNetworkDeviceAttachment](vzfilehandlenetworkdeviceattachment.md): A network device that transmits raw network packets and frames using a datagram socket.
- [VZNATNetworkDeviceAttachment](vznatnetworkdeviceattachment.md): A device that routes network requests through the host computer and performs network address translation on the resulting packets.
- [VZNetworkDeviceAttachment](vznetworkdeviceattachment.md): The common behaviors for the network attachment points of your virtual machine.
