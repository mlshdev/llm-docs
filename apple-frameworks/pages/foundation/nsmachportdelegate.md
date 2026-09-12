> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmachportdelegate](https://developer.apple.com/documentation/foundation/nsmachportdelegate)

# NSMachPortDelegate (Swift)

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An interface for handling incoming Mach messages.

## Declaration

```swift
protocol NSMachPortDelegate : PortDelegate
```

<a id="overview"></a>

## Overview

Delegates of [NSMachPort](nsmachport.md) objects optionally adopt this protocol.

## Topics

### Handling Mach messages

- [handleMachMessage(\_:)](nsmachportdelegate/handlemachmessage%28__%29.md): Process an incoming Mach message.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [PortDelegate](portdelegate.md)

## See Also

### Legacy

- [NSMachPort](nsmachport.md): A port that can be used as an endpoint for distributed object connections (or raw messaging).
- [MessagePort](messageport.md): A port that can be used as an endpoint for distributed object connections (or raw messaging).
- [PortDelegate](portdelegate.md): An interface for handling incoming messages.
- [PortMessage](portmessage.md): A low-level, operating system-independent type for inter-application (and inter-thread) messages.
- [NSProtocolChecker](nsprotocolchecker.md): An object that restricts the messages that can be sent to another object (referred to as the checker’s delegate).

# NSMachPortDelegate (Objective-C)

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An interface for handling incoming Mach messages.

## Declaration

```objectivec
@protocol NSMachPortDelegate <NSPortDelegate>
```

<a id="overview"></a>

## Overview

Delegates of [NSMachPort](nsmachport.md) objects optionally adopt this protocol.

## Topics

### Handling Mach messages

- [handleMachMessage:](nsmachportdelegate/handlemachmessage%28__%29.md): Process an incoming Mach message.

## Relationships

### Inherits From

- [NSPortDelegate](portdelegate.md)

## See Also

### Legacy

- [NSConnectionDelegate](nsconnectiondelegate.md): Deprecated. An interface for interacting with low-level, interprocess connections.
- [NSConnection](nsconnection.md): Deprecated. An object that manages the communication between objects in different threads or between a thread and a process running on a local or remote system.
- [NSDistantObject](nsdistantobject.md): Deprecated. A proxy for objects in other applications or threads.
- [NSDistantObjectRequest](nsdistantobjectrequest.md): Deprecated. An object used by the distributed objects system to help handle invocations between different processes.
- [NSMachBootstrapServer](nsmachbootstrapserver.md): Deprecated. A port name server that takes and returns Mach port objects.
- [NSMachPort](nsmachport.md): A port that can be used as an endpoint for distributed object connections (or raw messaging).
- [NSMessagePort](messageport.md): A port that can be used as an endpoint for distributed object connections (or raw messaging).
- [NSMessagePortNameServer](nsmessageportnameserver.md): Deprecated. A server takes and returns message ports.
- [NSPortCoder](nsportcoder.md): Deprecated. A coder used to transmit object proxies (and sometimes objects themselves) between connections.
- [NSPortDelegate](portdelegate.md): An interface for handling incoming messages.
- [NSPortMessage](portmessage.md): A low-level, operating system-independent type for inter-application (and inter-thread) messages.
- [NSPortNameServer](nsportnameserver.md): Deprecated. An object-oriented interface to the port registration service used by the distributed objects system.
- [NSProtocolChecker](nsprotocolchecker.md): An object that restricts the messages that can be sent to another object (referred to as the checker’s delegate).
- [NSSocketPortNameServer](nssocketportnameserver.md): Deprecated. A port name server that takes and returns socket ports.
