> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtiosocketlistener](https://developer.apple.com/documentation/virtualization/vzvirtiosocketlistener)

# VZVirtioSocketListener (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 11.0+

An object that listens for port-based connection requests from the guest operating system.

## Declaration

```swift
class VZVirtioSocketListener
```

<a id="overview"></a>

## Overview

Use a [VZVirtioSocketListener](vzvirtiosocketlistener.md) object to route connection requests to your associated delegate object. The socket listener object handles incoming connection requests from the guest operating system and directs them to the methods of its associated [delegate](vzvirtiosocketlistener/delegate.md) object. You may use the same listener object to monitor connections on multiple ports.

After creating a [VZVirtioSocketListener](vzvirtiosocketlistener.md) object, assign a custom object to its [delegate](vzvirtiosocketlistener/delegate.md) property. The delegate must implement the [VZVirtioSocketListenerDelegate](vzvirtiosocketlistenerdelegate.md) protocol. To connect the listener to a port, call the [setSocketListener(\_:forPort:)](vzvirtiosocketdevice/setsocketlistener%28__forport_%29.md) method of your virtual machine’s [VZVirtioSocketDevice](vzvirtiosocketdevice.md) object.

## Topics

### Responding to new connections

- [delegate](vzvirtiosocketlistener/delegate.md): The custom object you use to respond to port-based connection attempts.
- [VZVirtioSocketListenerDelegate](vzvirtiosocketlistenerdelegate.md): An interface you use to manage connections between the guest operating system and host computer.

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

- [VZVirtioSocketConnection](vzvirtiosocketconnection.md): A port-based connection between the guest operating system and the host computer.

# VZVirtioSocketListener (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 11.0+

An object that listens for port-based connection requests from the guest operating system.

## Declaration

```objectivec
@interface VZVirtioSocketListener : NSObject
```

<a id="overview"></a>

## Overview

Use a [VZVirtioSocketListener](vzvirtiosocketlistener.md) object to route connection requests to your associated delegate object. The socket listener object handles incoming connection requests from the guest operating system and directs them to the methods of its associated [delegate](vzvirtiosocketlistener/delegate.md) object. You may use the same listener object to monitor connections on multiple ports.

After creating a [VZVirtioSocketListener](vzvirtiosocketlistener.md) object, assign a custom object to its [delegate](vzvirtiosocketlistener/delegate.md) property. The delegate must implement the [VZVirtioSocketListenerDelegate](vzvirtiosocketlistenerdelegate.md) protocol. To connect the listener to a port, call the [setSocketListener:forPort:](vzvirtiosocketdevice/setsocketlistener%28__forport_%29.md) method of your virtual machine’s [VZVirtioSocketDevice](vzvirtiosocketdevice.md) object.

## Topics

### Responding to new connections

- [delegate](vzvirtiosocketlistener/delegate.md): The custom object you use to respond to port-based connection attempts.
- [VZVirtioSocketListenerDelegate](vzvirtiosocketlistenerdelegate.md): An interface you use to manage connections between the guest operating system and host computer.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Connection management

- [VZVirtioSocketConnection](vzvirtiosocketconnection.md): A port-based connection between the guest operating system and the host computer.
