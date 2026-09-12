> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtiosocketconnection](https://developer.apple.com/documentation/virtualization/vzvirtiosocketconnection)

# VZVirtioSocketConnection (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 11.0+

A port-based connection between the guest operating system and the host computer.

## Declaration

```swift
class VZVirtioSocketConnection
```

<a id="overview"></a>

## Overview

A [VZVirtioSocketConnection](vzvirtiosocketconnection.md) object contains the port information for the guest operating system and host computer. You don’t create connection objects directly. When the guest operating system initiates a connection, the virtual machine creates the connection object and passes it to the appropriate [VZVirtioSocketListener](vzvirtiosocketlistener.md) object, which forwards the object to its delegate. When the virtual machine opens a connection to a guest port, the [connect(toPort:)](vzvirtiosocketdevice/connect%28toport_%29.md) method (Objective-C) or [connect(toPort:completionHandler:)](vzvirtiosocketdevice/connect%28toport_completionhandler_%29.md) method (Swift) pass the connection object to your completion handler.

## Topics

### Getting the connection details

- [sourcePort](vzvirtiosocketconnection/sourceport.md): The port number of the system that opened the connection.
- [destinationPort](vzvirtiosocketconnection/destinationport.md): The destination port number of the connection.
- [fileDescriptor](vzvirtiosocketconnection/filedescriptor.md): The file descriptor to use when sending data.

### Closing the connection

- [close()](vzvirtiosocketconnection/close%28%29.md): Close the file descriptor associated with the socket.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Connection management

- [VZVirtioSocketListener](vzvirtiosocketlistener.md): An object that listens for port-based connection requests from the guest operating system.

# VZVirtioSocketConnection (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 11.0+

A port-based connection between the guest operating system and the host computer.

## Declaration

```objectivec
@interface VZVirtioSocketConnection : NSObject
```

<a id="overview"></a>

## Overview

A [VZVirtioSocketConnection](vzvirtiosocketconnection.md) object contains the port information for the guest operating system and host computer. You don’t create connection objects directly. When the guest operating system initiates a connection, the virtual machine creates the connection object and passes it to the appropriate [VZVirtioSocketListener](vzvirtiosocketlistener.md) object, which forwards the object to its delegate. When the virtual machine opens a connection to a guest port, the [connectToPort:completionHandler:](vzvirtiosocketdevice/connect%28toport_%29.md) method (Objective-C) or [connect(toPort:completionHandler:)](vzvirtiosocketdevice/connect%28toport_completionhandler_%29.md) method (Swift) pass the connection object to your completion handler.

## Topics

### Getting the connection details

- [sourcePort](vzvirtiosocketconnection/sourceport.md): The port number of the system that opened the connection.
- [destinationPort](vzvirtiosocketconnection/destinationport.md): The destination port number of the connection.
- [fileDescriptor](vzvirtiosocketconnection/filedescriptor.md): The file descriptor to use when sending data.

### Closing the connection

- [close](vzvirtiosocketconnection/close%28%29.md): Close the file descriptor associated with the socket.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Connection management

- [VZVirtioSocketListener](vzvirtiosocketlistener.md): An object that listens for port-based connection requests from the guest operating system.
