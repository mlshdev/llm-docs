> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtiosocketdevice](https://developer.apple.com/documentation/virtualization/vzvirtiosocketdevice)

# VZVirtioSocketDevice (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 11.0+

A device that manages port-based connections between the guest system and the host computer.

## Declaration

```swift
class VZVirtioSocketDevice
```

<a id="overview"></a>

## Overview

Use a [VZVirtioSocketDevice](vzvirtiosocketdevice.md) object to configure services and other communication end points in your virtual machine. Host computers make services available using ports, which identify the type of service and the protocol to use when transmitting data. Use this object to specify the ports available to your guest operating system, and to register handlers to manage the communication on those ports.

Don’t create a [VZVirtioSocketDevice](vzvirtiosocketdevice.md) object directly. Instead, when you request a socket device in your configuration, the virtual machine creates it and stores it in the [socketDevices](vzvirtualmachine/socketdevices.md) property. For each port you want to make available in your virtual machine, call the [setSocketListener(\_:forPort:)](vzvirtiosocketdevice/setsocketlistener%28__forport_%29.md) method and provide an object to manage the port connections.

## Topics

### Configuring Port Listeners

- [setSocketListener(\_:forPort:)](vzvirtiosocketdevice/setsocketlistener%28__forport_%29.md): Configures an object to monitor the specified port for new connections.
- [removeSocketListener(forPort:)](vzvirtiosocketdevice/removesocketlistener%28forport_%29.md): Removes the listener object from the specfied port.

### Connecting to Guest System Ports

- [connect(toPort:completionHandler:)](vzvirtiosocketdevice/connect%28toport_completionhandler_%29.md): Initiates a connection to the specified port of the guest operating system.
- [connect(toPort:)](vzvirtiosocketdevice/connect%28toport_%29.md): Initiates a connection to the specified port of the guest operating system.

## Relationships

### Inherits From

- [VZSocketDevice](vzsocketdevice.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Devices

- [VZSocketDevice](vzsocketdevice.md): The common behavior of socket devices.

# VZVirtioSocketDevice (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 11.0+

A device that manages port-based connections between the guest system and the host computer.

## Declaration

```objectivec
@interface VZVirtioSocketDevice : VZSocketDevice
```

<a id="overview"></a>

## Overview

Use a [VZVirtioSocketDevice](vzvirtiosocketdevice.md) object to configure services and other communication end points in your virtual machine. Host computers make services available using ports, which identify the type of service and the protocol to use when transmitting data. Use this object to specify the ports available to your guest operating system, and to register handlers to manage the communication on those ports.

Don’t create a [VZVirtioSocketDevice](vzvirtiosocketdevice.md) object directly. Instead, when you request a socket device in your configuration, the virtual machine creates it and stores it in the [socketDevices](vzvirtualmachine/socketdevices.md) property. For each port you want to make available in your virtual machine, call the [setSocketListener:forPort:](vzvirtiosocketdevice/setsocketlistener%28__forport_%29.md) method and provide an object to manage the port connections.

## Topics

### Configuring Port Listeners

- [setSocketListener:forPort:](vzvirtiosocketdevice/setsocketlistener%28__forport_%29.md): Configures an object to monitor the specified port for new connections.
- [removeSocketListenerForPort:](vzvirtiosocketdevice/removesocketlistener%28forport_%29.md): Removes the listener object from the specfied port.

### Connecting to Guest System Ports

- [connectToPort:completionHandler:](vzvirtiosocketdevice/connect%28toport_%29.md): Initiates a connection to the specified port of the guest operating system.

## Relationships

### Inherits From

- [VZSocketDevice](vzsocketdevice.md)

## See Also

### Devices

- [VZSocketDevice](vzsocketdevice.md): The common behavior of socket devices.
