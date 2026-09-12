> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/portmessage](https://developer.apple.com/documentation/foundation/portmessage)

# PortMessage (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A low-level, operating system-independent type for inter-application (and inter-thread) messages.

## Declaration

```swift
class PortMessage
```

<a id="overview"></a>

## Overview

Port messages are used primarily by the distributed objects system. You should implement inter-application communication using distributed objects whenever possible and use [PortMessage](portmessage.md) only when necessary.

An [PortMessage](portmessage.md) object has three major parts: the send and receive ports, which are [Port](port.md) objects that link the sender of the message to the receiver, and the components, which form the body of the message. The components are held as an [NSArray](nsarray.md) object containing [NSData](nsdata.md) and [Port](port.md) objects. The [send(before:)](portmessage/send%28before_%29.md) message sends the components out through the send port; any replies to the message arrive on the receive port. See the [Port](port.md) class specification for information on handling incoming messages.

An [PortMessage](portmessage.md) instance can be initialized with a pair of [Port](port.md) objects and an array of components. A port message’s body can contain only [Port](port.md) objects or [NSData](nsdata.md) objects. In the distributed objects system the byte/character arrays are usually encoded [NSInvocation](nsinvocation.md) objects that are being forwarded from a proxy to the corresponding real object.

An [PortMessage](portmessage.md) object also maintains a message identifier, which can be used to indicate the class of a message, such as an Objective-C method invocation, a connection request, an error, and so on. Use the [msgid](portmessage/msgid.md) and [msgid](portmessage/msgid.md) methods to access the identifier.

## Topics

### Creating Instances

- [init(send:receive:components:)](portmessage/init%28send_receive_components_%29.md): Initializes a newly allocated `NSPortMessage` object to send given data on a given port and to receiver replies on another given port.

### Sending the Message

- [send(before:)](portmessage/send%28before_%29.md): Attempts to send the message before the specified date.

### Getting the Components

- [components](portmessage/components.md): Returns the data components of the receiver.

### Getting the Ports

- [receivePort](portmessage/receiveport.md): For an outgoing message, returns the port on which replies to the receiver will arrive. For an incoming message, returns the port the receiver did arrive on.
- [sendPort](portmessage/sendport.md): For an outgoing message, returns the port the receiver will send itself through. For an incoming message, returns the port replies to the receiver should be sent through.

### Accessing the Message ID

- [msgid](portmessage/msgid.md): Returns the identifier for the receiver.

### Initializers

- [init(sendPort:receivePort:components:)](portmessage/init%28sendport_receiveport_components_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Legacy

- [NSMachPortDelegate](nsmachportdelegate.md): An interface for handling incoming Mach messages.
- [NSMachPort](nsmachport.md): A port that can be used as an endpoint for distributed object connections (or raw messaging).
- [MessagePort](messageport.md): A port that can be used as an endpoint for distributed object connections (or raw messaging).
- [PortDelegate](portdelegate.md): An interface for handling incoming messages.
- [NSProtocolChecker](nsprotocolchecker.md): An object that restricts the messages that can be sent to another object (referred to as the checker’s delegate).

# NSPortMessage (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A low-level, operating system-independent type for inter-application (and inter-thread) messages.

## Declaration

```objectivec
@interface NSPortMessage : NSObject
```

<a id="overview"></a>

## Overview

Port messages are used primarily by the distributed objects system. You should implement inter-application communication using distributed objects whenever possible and use [NSPortMessage](portmessage.md) only when necessary.

An [NSPortMessage](portmessage.md) object has three major parts: the send and receive ports, which are [NSPort](port.md) objects that link the sender of the message to the receiver, and the components, which form the body of the message. The components are held as an [NSArray](nsarray.md) object containing [NSData](nsdata.md) and [NSPort](port.md) objects. The [sendBeforeDate:](portmessage/send%28before_%29.md) message sends the components out through the send port; any replies to the message arrive on the receive port. See the [NSPort](port.md) class specification for information on handling incoming messages.

An [NSPortMessage](portmessage.md) instance can be initialized with a pair of [NSPort](port.md) objects and an array of components. A port message’s body can contain only [NSPort](port.md) objects or [NSData](nsdata.md) objects. In the distributed objects system the byte/character arrays are usually encoded [NSInvocation](nsinvocation.md) objects that are being forwarded from a proxy to the corresponding real object.

An [NSPortMessage](portmessage.md) object also maintains a message identifier, which can be used to indicate the class of a message, such as an Objective-C method invocation, a connection request, an error, and so on. Use the [msgid](portmessage/msgid.md) and [msgid](portmessage/msgid.md) methods to access the identifier.

## Topics

### Creating Instances

- [initWithSendPort:receivePort:components:](portmessage/init%28send_receive_components_%29.md): Initializes a newly allocated `NSPortMessage` object to send given data on a given port and to receiver replies on another given port.

### Sending the Message

- [sendBeforeDate:](portmessage/send%28before_%29.md): Attempts to send the message before the specified date.

### Getting the Components

- [components](portmessage/components.md): Returns the data components of the receiver.

### Getting the Ports

- [receivePort](portmessage/receiveport.md): For an outgoing message, returns the port on which replies to the receiver will arrive. For an incoming message, returns the port the receiver did arrive on.
- [sendPort](portmessage/sendport.md): For an outgoing message, returns the port the receiver will send itself through. For an incoming message, returns the port replies to the receiver should be sent through.

### Accessing the Message ID

- [msgid](portmessage/msgid.md): Returns the identifier for the receiver.

### Instance Variables

- [components](nsportmessage/components-c.ivar.md)
- [localPort](nsportmessage/localport.md)
- [msgid](nsportmessage/msgid-c.ivar.md)
- [remotePort](nsportmessage/remoteport.md)
- [reserved](nsportmessage/reserved.md)
- [reserved2](nsportmessage/reserved2.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

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
- [NSPortNameServer](nsportnameserver.md): Deprecated. An object-oriented interface to the port registration service used by the distributed objects system.
- [NSProtocolChecker](nsprotocolchecker.md): An object that restricts the messages that can be sent to another object (referred to as the checker’s delegate).
- [NSSocketPortNameServer](nssocketportnameserver.md): Deprecated. A port name server that takes and returns socket ports.
