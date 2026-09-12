> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vznetworkdeviceattachment](https://developer.apple.com/documentation/virtualization/vznetworkdeviceattachment)

# VZNetworkDeviceAttachment (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 11.0+

The common behaviors for the network attachment points of your virtual machine.

## Declaration

```swift
class VZNetworkDeviceAttachment
```

<a id="overview"></a>

## Overview

Don’t create a [VZNetworkDeviceAttachment](vznetworkdeviceattachment.md) object directly. Instead, instantiate one of its concrete subclasses and use that object to configure your network devices. Each concrete subclass represents a specific type of network interface on the host computer.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [VZBridgedNetworkDeviceAttachment](vzbridgednetworkdeviceattachment.md)
- [VZFileHandleNetworkDeviceAttachment](vzfilehandlenetworkdeviceattachment.md)
- [VZNATNetworkDeviceAttachment](vznatnetworkdeviceattachment.md)
- [VZVmnetNetworkDeviceAttachment](vzvmnetnetworkdeviceattachment.md)

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
- [VZVmnetNetworkDeviceAttachment](vzvmnetnetworkdeviceattachment.md): A network device attachment that allows a custom network topology.

# VZNetworkDeviceAttachment (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 11.0+

The common behaviors for the network attachment points of your virtual machine.

## Declaration

```objectivec
@interface VZNetworkDeviceAttachment : NSObject
```

<a id="overview"></a>

## Overview

Don’t create a [VZNetworkDeviceAttachment](vznetworkdeviceattachment.md) object directly. Instead, instantiate one of its concrete subclasses and use that object to configure your network devices. Each concrete subclass represents a specific type of network interface on the host computer.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [VZBridgedNetworkDeviceAttachment](vzbridgednetworkdeviceattachment.md)
- [VZFileHandleNetworkDeviceAttachment](vzfilehandlenetworkdeviceattachment.md)
- [VZNATNetworkDeviceAttachment](vznatnetworkdeviceattachment.md)
- [VZVmnetNetworkDeviceAttachment](vzvmnetnetworkdeviceattachment.md)

## See Also

### Attachment points

- [VZBridgedNetworkDeviceAttachment](vzbridgednetworkdeviceattachment.md): A network device that interacts directly with a physical network interface on the host computer.
- [VZFileHandleNetworkDeviceAttachment](vzfilehandlenetworkdeviceattachment.md): A network device that transmits raw network packets and frames using a datagram socket.
- [VZNATNetworkDeviceAttachment](vznatnetworkdeviceattachment.md): A device that routes network requests through the host computer and performs network address translation on the resulting packets.
- [VZVmnetNetworkDeviceAttachment](vzvmnetnetworkdeviceattachment.md): A network device attachment that allows a custom network topology.
