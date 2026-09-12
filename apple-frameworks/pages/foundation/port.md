> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/port](https://developer.apple.com/documentation/foundation/port)

# Port (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An abstract class that represents a communication channel.

## Declaration

```swift
class Port
```

<a id="overview"></a>

## Overview

Communication occurs between [Port](port.md) objects, which typically reside in different threads or tasks. The distributed objects system uses [Port](port.md) objects to send [PortMessage](portmessage.md) objects back and forth. Implement interapplication communication using distributed objects whenever possible and use [Port](port.md) objects only when necessary.

To receive incoming messages, add [Port](port.md) objects to an instance of [RunLoop](runloop.md) as input sources. [NSConnection](nsconnection.md) objects automatically add their receive port when initialized.

When the [Port](port.md) object receives a port message, it forwards the message to its delegate in a [handleMachMessage(\_:)](nsmachportdelegate/handlemachmessage%28__%29.md) or [handle(\_:)](portdelegate/handle%28__%29.md) message. The delegate should implement only one of these methods to process the incoming message in whatever form desired. [handleMachMessage(\_:)](nsmachportdelegate/handlemachmessage%28__%29.md) provides a message as a raw Mach message beginning with a `msg_header_t` structure. [handle(\_:)](portdelegate/handle%28__%29.md) provides a message as an instance of [PortMessage](portmessage.md), which is an object-oriented wrapper for a Mach message. If a delegate has not been set, the `NSPort` object handles the message itself.

When you are finished using a port object, you must explicitly invalidate the port object prior to sending it a `release` message. Similarly, if your application uses garbage collection, you must invalidate the port object before removing any strong references to it. If you do not invalidate the port, the resulting port object may linger and create a memory leak. To invalidate the port object, invoke its [invalidate()](port/invalidate%28%29.md) method.

Foundation defines three concrete subclasses of `NSPort`. [NSMachPort](nsmachport.md) and [MessagePort](messageport.md) allow local (on the same machine) communication only. [SocketPort](socketport.md) allows for both local and remote communication, but may be more expensive than the others for the local case. When creating an `NSPort` object, using [allocWithZone:](nsport-allocwithzone.md) or [port](nsport/port.md), an [NSMachPort](nsmachport.md) object is created instead.

For backward compatibility on Mach, `-[NSPort allocWithZone:]` returns an instance of the [NSMachPort](nsmachport.md) class when sent to this class. Otherwise, it returns an instance of a concrete subclass that can be used for messaging between threads or processes on the local machine, or, in the case of [SocketPort](socketport.md), between processes on separate machines.

> **Important**

>  [Port](port.md) conforms to the [NSCoding](nscoding.md) protocol, but only supports coding by an [NSPortCoder](nsportcoder.md). [Port](port.md) and its subclasses do not support archiving.

## Topics

### Validation

- [invalidate()](port/invalidate%28%29.md): Marks the receiver as invalid and posts an [didBecomeInvalidNotification](port/didbecomeinvalidnotification.md) to the default notification center.
- [isValid](port/isvalid.md): A Boolean value that indicates whether the receiver is valid.

### Working with the delegate

- [setDelegate(\_:)](port/setdelegate%28__%29.md): Sets the receiver’s delegate to a given object.
- [delegate()](port/delegate%28%29.md): Returns the receiver’s delegate.

### Setting information

- [send(before:components:from:reserved:)](port/send%28before_components_from_reserved_%29.md): This method is provided for subclasses that have custom types of `NSPort`.
- [send(before:msgid:components:from:reserved:)](port/send%28before_msgid_components_from_reserved_%29.md): This method is provided for subclasses that have custom types of `NSPort`.
- [reservedSpaceLength](port/reservedspacelength.md): The number of bytes of space reserved by the receiver for sending data.

### Port monitoring

- [remove(from:forMode:)](port/remove%28from_formode_%29.md): This method should be implemented by a subclass to stop monitoring of a port when removed from a give run loop in a given input mode.
- [schedule(in:forMode:)](port/schedule%28in_formode_%29.md): This method should be implemented by a subclass to set up monitoring of a port when added to a given run loop in a given input mode.

### Working with notifications

- [didBecomeInvalidNotification](port/didbecomeinvalidnotification.md): Posted from the [invalidate()](port/invalidate%28%29.md) method, which is invoked when the `NSPort` is deallocated or when it notices that its communication channel has been damaged. The notification object is the `NSPort` object that has become invalid. This notification does not contain a `userInfo` dictionary.

### Working with notification messages

- [Port.DidBecomeInvalidMessage](port/didbecomeinvalidmessage.md): A message the system sends when a port becomes invalid.

### Data Types

- [SocketNativeHandle](socketnativehandle.md): Type for the platform-specific native socket handle.

### Initializers

- [init(coder:)](port/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MessagePort](messageport.md)
- [NSMachPort](nsmachport.md)
- [SocketPort](socketport.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](nscoding.md)
- [NSCopying](nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Sockets

- [Host](host.md): Deprecated. A representation of an individual host on the network.
- [SocketPort](socketport.md): A port that represents a BSD socket.

# NSPort (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An abstract class that represents a communication channel.

## Declaration

```objectivec
@interface NSPort : NSObject
```

<a id="overview"></a>

## Overview

Communication occurs between [NSPort](port.md) objects, which typically reside in different threads or tasks. The distributed objects system uses [NSPort](port.md) objects to send [NSPortMessage](portmessage.md) objects back and forth. Implement interapplication communication using distributed objects whenever possible and use [NSPort](port.md) objects only when necessary.

To receive incoming messages, add [NSPort](port.md) objects to an instance of [NSRunLoop](runloop.md) as input sources. [NSConnection](nsconnection.md) objects automatically add their receive port when initialized.

When the [NSPort](port.md) object receives a port message, it forwards the message to its delegate in a [handleMachMessage:](nsmachportdelegate/handlemachmessage%28__%29.md) or [handlePortMessage:](portdelegate/handle%28__%29.md) message. The delegate should implement only one of these methods to process the incoming message in whatever form desired. [handleMachMessage:](nsmachportdelegate/handlemachmessage%28__%29.md) provides a message as a raw Mach message beginning with a `msg_header_t` structure. [handlePortMessage:](portdelegate/handle%28__%29.md) provides a message as an instance of [NSPortMessage](portmessage.md), which is an object-oriented wrapper for a Mach message. If a delegate has not been set, the `NSPort` object handles the message itself.

When you are finished using a port object, you must explicitly invalidate the port object prior to sending it a `release` message. Similarly, if your application uses garbage collection, you must invalidate the port object before removing any strong references to it. If you do not invalidate the port, the resulting port object may linger and create a memory leak. To invalidate the port object, invoke its [invalidate](port/invalidate%28%29.md) method.

Foundation defines three concrete subclasses of `NSPort`. [NSMachPort](nsmachport.md) and [NSMessagePort](messageport.md) allow local (on the same machine) communication only. [NSSocketPort](socketport.md) allows for both local and remote communication, but may be more expensive than the others for the local case. When creating an `NSPort` object, using [allocWithZone:](nsport-allocwithzone.md) or [port](nsport/port.md), an [NSMachPort](nsmachport.md) object is created instead.

For backward compatibility on Mach, `-[NSPort allocWithZone:]` returns an instance of the [NSMachPort](nsmachport.md) class when sent to this class. Otherwise, it returns an instance of a concrete subclass that can be used for messaging between threads or processes on the local machine, or, in the case of [NSSocketPort](socketport.md), between processes on separate machines.

> **Important**

>  [NSPort](port.md) conforms to the [NSCoding](nscoding.md) protocol, but only supports coding by an [NSPortCoder](nsportcoder.md). [NSPort](port.md) and its subclasses do not support archiving.

## Topics

### Creating instances

- [allocWithZone:](nsport-allocwithzone.md): Returns an instance of the `NSMachPort` class.
- [port](nsport/port.md): Creates and returns a new `NSPort` object capable of both sending and receiving messages.

### Validation

- [invalidate](port/invalidate%28%29.md): Marks the receiver as invalid and posts an [NSPortDidBecomeInvalidNotification](port/didbecomeinvalidnotification.md) to the default notification center.
- [valid](port/isvalid.md): A Boolean value that indicates whether the receiver is valid.

### Working with the delegate

- [setDelegate:](port/setdelegate%28__%29.md): Sets the receiver’s delegate to a given object.
- [delegate](port/delegate%28%29.md): Returns the receiver’s delegate.

### Creating connections

- [addConnection:toRunLoop:forMode:](nsport/addconnection_torunloop_formode_.md): Deprecated. Adds the receiver to the list of ports monitored by a given run loop for the given input mode.
- [removeConnection:fromRunLoop:forMode:](nsport/removeconnection_fromrunloop_formode_.md): Deprecated. Removes the receiver from the list of ports monitored by `runLoop` in the given input mode, `mode`.

### Setting information

- [sendBeforeDate:components:from:reserved:](port/send%28before_components_from_reserved_%29.md): This method is provided for subclasses that have custom types of `NSPort`.
- [sendBeforeDate:msgid:components:from:reserved:](port/send%28before_msgid_components_from_reserved_%29.md): This method is provided for subclasses that have custom types of `NSPort`.
- [reservedSpaceLength](port/reservedspacelength.md): The number of bytes of space reserved by the receiver for sending data.

### Port monitoring

- [removeFromRunLoop:forMode:](port/remove%28from_formode_%29.md): This method should be implemented by a subclass to stop monitoring of a port when removed from a give run loop in a given input mode.
- [scheduleInRunLoop:forMode:](port/schedule%28in_formode_%29.md): This method should be implemented by a subclass to set up monitoring of a port when added to a given run loop in a given input mode.

### Working with notifications

- [NSPortDidBecomeInvalidNotification](port/didbecomeinvalidnotification.md): Posted from the [invalidate](port/invalidate%28%29.md) method, which is invoked when the `NSPort` is deallocated or when it notices that its communication channel has been damaged. The notification object is the `NSPort` object that has become invalid. This notification does not contain a `userInfo` dictionary.

### Data Types

- [NSSocketNativeHandle](socketnativehandle.md): Type for the platform-specific native socket handle.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NSMachPort](nsmachport.md)
- [NSMessagePort](messageport.md)
- [NSSocketPort](socketport.md)

### Conforms To

- [NSCoding](nscoding.md)
- [NSCopying](nscopying.md)

## See Also

### Sockets

- [NSHost](host.md): Deprecated. A representation of an individual host on the network.
- [NSSocketPort](socketport.md): A port that represents a BSD socket.
