> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmachport](https://developer.apple.com/documentation/foundation/nsmachport)

# NSMachPort (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A port that can be used as an endpoint for distributed object connections (or raw messaging).

## Declaration

```swift
class NSMachPort
```

<a id="overview"></a>

## Overview

[NSMachPort](nsmachport.md) is a subclass of [Port](port.md) that wraps a Mach port, the fundamental communication port in macOS. [NSMachPort](nsmachport.md) allows for local (on the same machine) communication only. A companion class, [SocketPort](socketport.md), allows for both local and remote distributed object communication, but may be more expensive than [NSMachPort](nsmachport.md) for the local case.

To use [NSMachPort](nsmachport.md) effectively, you should be familiar with Mach ports, port access rights, and Mach messages. See the Mach OS documentation for more information.

> **Note**

>  [NSMachPort](nsmachport.md) conforms to the [NSCoding](nscoding.md) protocol, but only supports coding by an [NSPortCoder](nsportcoder.md). [Port](port.md) and its subclasses do not support archiving.

## Topics

### Creating and Initializing

- [port(withMachPort:)](nsmachport/port%28withmachport_%29.md): Creates and returns a port object configured with the given Mach port.
- [port(withMachPort:options:)](nsmachport/port%28withmachport_options_%29.md): Creates and returns a port object configured with the specified options and the given Mach port.
- [init(machPort:)](nsmachport/init%28machport_%29.md): Initializes a newly allocated `NSMachPort` object with a given Mach port.
- [init(machPort:options:)](nsmachport/init%28machport_options_%29.md): Initializes a newly allocated `NSMachPort` object with a given Mach port and the specified options.

### Getting the Mach Port

- [machPort](nsmachport/machport.md): The Mach port used by the receiver, represented as an integer.

### Scheduling the Port on a Run Loop

- [remove(from:forMode:)](nsmachport/remove%28from_formode_%29.md): Removes the receiver from the run loop mode `mode` of `runLoop`.
- [schedule(in:forMode:)](nsmachport/schedule%28in_formode_%29.md): Schedules the receiver into the run loop mode `mode` of `runLoop`.

### Getting and Setting the Delegate

- [delegate()](nsmachport/delegate%28%29.md): Returns the receiver’s delegate.
- [setDelegate(\_:)](nsmachport/setdelegate%28__%29.md): Sets the receiver’s delegate to a given object.

### Constants

- [NSMachPort.Options](nsmachport/options.md): Used to remove access rights to a mach port when the `NSMachPort` object is invalidated or destroyed.

## Relationships

### Inherits From

- [Port](port.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](nscoding.md)
- [NSCopying](nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Legacy

- [NSMachPortDelegate](nsmachportdelegate.md): An interface for handling incoming Mach messages.
- [MessagePort](messageport.md): A port that can be used as an endpoint for distributed object connections (or raw messaging).
- [PortDelegate](portdelegate.md): An interface for handling incoming messages.
- [PortMessage](portmessage.md): A low-level, operating system-independent type for inter-application (and inter-thread) messages.
- [NSProtocolChecker](nsprotocolchecker.md): An object that restricts the messages that can be sent to another object (referred to as the checker’s delegate).

# NSMachPort (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A port that can be used as an endpoint for distributed object connections (or raw messaging).

## Declaration

```objectivec
@interface NSMachPort : NSPort
```

<a id="overview"></a>

## Overview

[NSMachPort](nsmachport.md) is a subclass of [NSPort](port.md) that wraps a Mach port, the fundamental communication port in macOS. [NSMachPort](nsmachport.md) allows for local (on the same machine) communication only. A companion class, [NSSocketPort](socketport.md), allows for both local and remote distributed object communication, but may be more expensive than [NSMachPort](nsmachport.md) for the local case.

To use [NSMachPort](nsmachport.md) effectively, you should be familiar with Mach ports, port access rights, and Mach messages. See the Mach OS documentation for more information.

> **Note**

>  [NSMachPort](nsmachport.md) conforms to the [NSCoding](nscoding.md) protocol, but only supports coding by an [NSPortCoder](nsportcoder.md). [NSPort](port.md) and its subclasses do not support archiving.

## Topics

### Creating and Initializing

- [portWithMachPort:](nsmachport/port%28withmachport_%29.md): Creates and returns a port object configured with the given Mach port.
- [portWithMachPort:options:](nsmachport/port%28withmachport_options_%29.md): Creates and returns a port object configured with the specified options and the given Mach port.
- [initWithMachPort:](nsmachport/init%28machport_%29.md): Initializes a newly allocated `NSMachPort` object with a given Mach port.
- [initWithMachPort:options:](nsmachport/init%28machport_options_%29.md): Initializes a newly allocated `NSMachPort` object with a given Mach port and the specified options.

### Getting the Mach Port

- [machPort](nsmachport/machport.md): The Mach port used by the receiver, represented as an integer.

### Scheduling the Port on a Run Loop

- [removeFromRunLoop:forMode:](nsmachport/remove%28from_formode_%29.md): Removes the receiver from the run loop mode `mode` of `runLoop`.
- [scheduleInRunLoop:forMode:](nsmachport/schedule%28in_formode_%29.md): Schedules the receiver into the run loop mode `mode` of `runLoop`.

### Getting and Setting the Delegate

- [delegate](nsmachport/delegate%28%29.md): Returns the receiver’s delegate.
- [setDelegate:](nsmachport/setdelegate%28__%29.md): Sets the receiver’s delegate to a given object.

### Constants

- [NSMachPortOptions](nsmachport/options.md): Used to remove access rights to a mach port when the `NSMachPort` object is invalidated or destroyed.

## Relationships

### Inherits From

- [NSPort](port.md)

## See Also

### Legacy

- [NSMachPortDelegate](nsmachportdelegate.md): An interface for handling incoming Mach messages.
- [NSConnectionDelegate](nsconnectiondelegate.md): Deprecated. An interface for interacting with low-level, interprocess connections.
- [NSConnection](nsconnection.md): Deprecated. An object that manages the communication between objects in different threads or between a thread and a process running on a local or remote system.
- [NSDistantObject](nsdistantobject.md): Deprecated. A proxy for objects in other applications or threads.
- [NSDistantObjectRequest](nsdistantobjectrequest.md): Deprecated. An object used by the distributed objects system to help handle invocations between different processes.
- [NSMachBootstrapServer](nsmachbootstrapserver.md): Deprecated. A port name server that takes and returns Mach port objects.
- [NSMessagePort](messageport.md): A port that can be used as an endpoint for distributed object connections (or raw messaging).
- [NSMessagePortNameServer](nsmessageportnameserver.md): Deprecated. A server takes and returns message ports.
- [NSPortCoder](nsportcoder.md): Deprecated. A coder used to transmit object proxies (and sometimes objects themselves) between connections.
- [NSPortDelegate](portdelegate.md): An interface for handling incoming messages.
- [NSPortMessage](portmessage.md): A low-level, operating system-independent type for inter-application (and inter-thread) messages.
- [NSPortNameServer](nsportnameserver.md): Deprecated. An object-oriented interface to the port registration service used by the distributed objects system.
- [NSProtocolChecker](nsprotocolchecker.md): An object that restricts the messages that can be sent to another object (referred to as the checker’s delegate).
- [NSSocketPortNameServer](nssocketportnameserver.md): Deprecated. A port name server that takes and returns socket ports.
