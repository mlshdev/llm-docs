> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsprotocolchecker](https://developer.apple.com/documentation/foundation/nsprotocolchecker)

# NSProtocolChecker (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

An object that restricts the messages that can be sent to another object (referred to as the checker’s delegate).

## Declaration

```swift
class NSProtocolChecker
```

<a id="overview"></a>

## Overview

A [NSProtocolChecker](nsprotocolchecker.md) object can be particularly useful when an object with many methods, only a few of which ought to be remotely accessible, is made available using the distributed objects system.

A protocol checker acts as a kind of proxy; when it receives a message that is in its designated protocol, it forwards the message to its target and consequently appears to be the target object itself. However, when it receives a message not in its protocol, it raises an [invalidArgumentException](nsexceptionname/invalidargumentexception.md) to indicate that the message isn’t allowed, whether or not the target object implements the method.

Typically, an object that is to be distributed (yet must restrict messages) creates an [NSProtocolChecker](nsprotocolchecker.md) for itself and returns the checker rather than returning itself in response to any messages. The object might also register the checker as the root object of an NSConnection.

The object should be careful about vending references to `self`—the protocol checker will convert a return value of `self` to indicate the checker rather than the object for any messages forwarded by the checker, but direct references to the object (bypassing the checker) could be passed around by other objects.

## Topics

### Creating a checker

- [init(target:protocol:)](nsprotocolchecker/init%28target_protocol_%29.md): Initializes a newly allocated `NSProtocolChecker` instance that will forward any messages in `aProtocol` to `anObject`, the protocol checker’s target.

### Getting information

- [protocol](nsprotocolchecker/protocol.md): Returns the protocol object the receiver uses.
- [target](nsprotocolchecker/target.md): Returns the target of the receiver.

## Relationships

### Inherits From

- [NSProxy](nsproxy.md)

### Conforms To

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Legacy

- [NSMachPortDelegate](nsmachportdelegate.md): An interface for handling incoming Mach messages.
- [NSMachPort](nsmachport.md): A port that can be used as an endpoint for distributed object connections (or raw messaging).
- [MessagePort](messageport.md): A port that can be used as an endpoint for distributed object connections (or raw messaging).
- [PortDelegate](portdelegate.md): An interface for handling incoming messages.
- [PortMessage](portmessage.md): A low-level, operating system-independent type for inter-application (and inter-thread) messages.

# NSProtocolChecker (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

An object that restricts the messages that can be sent to another object (referred to as the checker’s delegate).

## Declaration

```objectivec
@interface NSProtocolChecker : NSProxy
```

<a id="overview"></a>

## Overview

A [NSProtocolChecker](nsprotocolchecker.md) object can be particularly useful when an object with many methods, only a few of which ought to be remotely accessible, is made available using the distributed objects system.

A protocol checker acts as a kind of proxy; when it receives a message that is in its designated protocol, it forwards the message to its target and consequently appears to be the target object itself. However, when it receives a message not in its protocol, it raises an [NSInvalidArgumentException](nsexceptionname/invalidargumentexception.md) to indicate that the message isn’t allowed, whether or not the target object implements the method.

Typically, an object that is to be distributed (yet must restrict messages) creates an [NSProtocolChecker](nsprotocolchecker.md) for itself and returns the checker rather than returning itself in response to any messages. The object might also register the checker as the root object of an NSConnection.

The object should be careful about vending references to `self`—the protocol checker will convert a return value of `self` to indicate the checker rather than the object for any messages forwarded by the checker, but direct references to the object (bypassing the checker) could be passed around by other objects.

## Topics

### Creating a checker

- [protocolCheckerWithTarget:protocol:](nsprotocolchecker/protocolcheckerwithtarget_protocol_.md): Allocates and initializes an `NSProtocolChecker` instance that will forward any messages in `aProtocol` to `anObject`, the protocol checker’s target.
- [initWithTarget:protocol:](nsprotocolchecker/init%28target_protocol_%29.md): Initializes a newly allocated `NSProtocolChecker` instance that will forward any messages in `aProtocol` to `anObject`, the protocol checker’s target.

### Getting information

- [protocol](nsprotocolchecker/protocol.md): Returns the protocol object the receiver uses.
- [target](nsprotocolchecker/target.md): Returns the target of the receiver.

## Relationships

### Inherits From

- [NSProxy](nsproxy.md)

## See Also

### Legacy

- [NSMachPortDelegate](nsmachportdelegate.md): An interface for handling incoming Mach messages.
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
- [NSSocketPortNameServer](nssocketportnameserver.md): Deprecated. A port name server that takes and returns socket ports.
