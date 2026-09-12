> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/messageport](https://developer.apple.com/documentation/foundation/messageport)

# MessagePort (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A port that can be used as an endpoint for distributed object connections (or raw messaging).

## Declaration

```swift
class MessagePort
```

<a id="overview"></a>

## Overview

[MessagePort](messageport.md) is a subclass of [Port](port.md) that allows for local (on the same machine) communication only. A companion class, [SocketPort](socketport.md), allows for both local and remote communication, but may be more expensive than [MessagePort](messageport.md) for the local case.

[MessagePort](messageport.md) defines no additional methods over those already defined by [Port](port.md).

> **Note**

>  [MessagePort](messageport.md) conforms to the [NSCoding](nscoding.md) protocol, but only supports coding by an [NSPortCoder](nsportcoder.md) object. [Port](port.md) and its subclasses do not support archiving.

> **Important**

>  Avoid [MessagePort](messageport.md). There’s little reason to use [MessagePort](messageport.md) rather than [NSMachPort](nsmachport.md) or [SocketPort](socketport.md). There’s no particular performance or functionality advantage. It is recommended avoiding its use.
>
> [MessagePort](messageport.md) may be deprecated in the macOS 10.6 or later.

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

### Related Documentation

- [Distributed Objects Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DistrObjects/DistrObjects.html#//apple_ref/doc/uid/10000102i)

### Legacy

- [NSMachPortDelegate](nsmachportdelegate.md): An interface for handling incoming Mach messages.
- [NSMachPort](nsmachport.md): A port that can be used as an endpoint for distributed object connections (or raw messaging).
- [PortDelegate](portdelegate.md): An interface for handling incoming messages.
- [PortMessage](portmessage.md): A low-level, operating system-independent type for inter-application (and inter-thread) messages.
- [NSProtocolChecker](nsprotocolchecker.md): An object that restricts the messages that can be sent to another object (referred to as the checker’s delegate).

# NSMessagePort (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A port that can be used as an endpoint for distributed object connections (or raw messaging).

## Declaration

```objectivec
@interface NSMessagePort : NSPort
```

<a id="overview"></a>

## Overview

[NSMessagePort](messageport.md) is a subclass of [NSPort](port.md) that allows for local (on the same machine) communication only. A companion class, [NSSocketPort](socketport.md), allows for both local and remote communication, but may be more expensive than [NSMessagePort](messageport.md) for the local case.

[NSMessagePort](messageport.md) defines no additional methods over those already defined by [NSPort](port.md).

> **Note**

>  [NSMessagePort](messageport.md) conforms to the [NSCoding](nscoding.md) protocol, but only supports coding by an [NSPortCoder](nsportcoder.md) object. [NSPort](port.md) and its subclasses do not support archiving.

> **Important**

>  Avoid [NSMessagePort](messageport.md). There’s little reason to use [NSMessagePort](messageport.md) rather than [NSMachPort](nsmachport.md) or [NSSocketPort](socketport.md). There’s no particular performance or functionality advantage. It is recommended avoiding its use.
>
> [NSMessagePort](messageport.md) may be deprecated in the macOS 10.6 or later.

## Relationships

### Inherits From

- [NSPort](port.md)

## See Also

### Related Documentation

- [Distributed Objects Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DistrObjects/DistrObjects.html#//apple_ref/doc/uid/10000102i)

### Legacy

- [NSMachPortDelegate](nsmachportdelegate.md): An interface for handling incoming Mach messages.
- [NSConnectionDelegate](nsconnectiondelegate.md): Deprecated. An interface for interacting with low-level, interprocess connections.
- [NSConnection](nsconnection.md): Deprecated. An object that manages the communication between objects in different threads or between a thread and a process running on a local or remote system.
- [NSDistantObject](nsdistantobject.md): Deprecated. A proxy for objects in other applications or threads.
- [NSDistantObjectRequest](nsdistantobjectrequest.md): Deprecated. An object used by the distributed objects system to help handle invocations between different processes.
- [NSMachBootstrapServer](nsmachbootstrapserver.md): Deprecated. A port name server that takes and returns Mach port objects.
- [NSMachPort](nsmachport.md): A port that can be used as an endpoint for distributed object connections (or raw messaging).
- [NSMessagePortNameServer](nsmessageportnameserver.md): Deprecated. A server takes and returns message ports.
- [NSPortCoder](nsportcoder.md): Deprecated. A coder used to transmit object proxies (and sometimes objects themselves) between connections.
- [NSPortDelegate](portdelegate.md): An interface for handling incoming messages.
- [NSPortMessage](portmessage.md): A low-level, operating system-independent type for inter-application (and inter-thread) messages.
- [NSPortNameServer](nsportnameserver.md): Deprecated. An object-oriented interface to the port registration service used by the distributed objects system.
- [NSProtocolChecker](nsprotocolchecker.md): An object that restricts the messages that can be sent to another object (referred to as the checker’s delegate).
- [NSSocketPortNameServer](nssocketportnameserver.md): Deprecated. A port name server that takes and returns socket ports.
