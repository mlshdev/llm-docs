> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtiosocketlistenerdelegate](https://developer.apple.com/documentation/virtualization/vzvirtiosocketlistenerdelegate)

# VZVirtioSocketListenerDelegate (Swift)

**Framework:** Virtualization  
**Kind:** Protocol  
**Availability:** macOS 11.0+

An interface you use to manage connections between the guest operating system and host computer.

## Declaration

```swift
protocol VZVirtioSocketListenerDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Adopt the [VZVirtioSocketListenerDelegate](vzvirtiosocketlistenerdelegate.md) protocol in a custom object and use it to accept or reject socket-based connection attempts from the guest operating system to the host computer. You may use the same object to manage connection attempts on multiple ports.

## Topics

### Accepting new connections

- [listener(\_:shouldAcceptNewConnection:from:)](vzvirtiosocketlistenerdelegate/listener%28__shouldacceptnewconnection_from_%29.md): Returns a Boolean value that indicates whether to accept a new connection from the guest operating system.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Responding to new connections

- [delegate](vzvirtiosocketlistener/delegate.md): The custom object you use to respond to port-based connection attempts.

# VZVirtioSocketListenerDelegate (Objective-C)

**Framework:** Virtualization  
**Kind:** Protocol  
**Availability:** macOS 11.0+

An interface you use to manage connections between the guest operating system and host computer.

## Declaration

```objectivec
@protocol VZVirtioSocketListenerDelegate <NSObject>
```

<a id="overview"></a>

## Overview

Adopt the [VZVirtioSocketListenerDelegate](vzvirtiosocketlistenerdelegate.md) protocol in a custom object and use it to accept or reject socket-based connection attempts from the guest operating system to the host computer. You may use the same object to manage connection attempts on multiple ports.

## Topics

### Accepting new connections

- [listener:shouldAcceptNewConnection:fromSocketDevice:](vzvirtiosocketlistenerdelegate/listener%28__shouldacceptnewconnection_from_%29.md): Returns a Boolean value that indicates whether to accept a new connection from the guest operating system.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Responding to new connections

- [delegate](vzvirtiosocketlistener/delegate.md): The custom object you use to respond to port-based connection attempts.
