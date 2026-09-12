> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsportcoder](https://developer.apple.com/documentation/foundation/nsportcoder)

# NSPortCoder

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

A coder used to transmit object proxies (and sometimes objects themselves) between connections.

> Use [NSXPCConnection](nsxpcconnection.md) instead.

## Declaration

```objectivec
@interface NSPortCoder : NSCoder
```

<a id="overview"></a>

## Overview

[NSPortCoder](nsportcoder.md) is a concrete subclass of [NSCoder](nscoder.md) used in the distributed objects system to transmit object proxies (and sometimes objects themselves) between [NSConnection](nsconnection.md) objects. An [NSPortCoder](nsportcoder.md) instance is always created and used by an [NSConnection](nsconnection.md) object; you should never need to explicitly create or use one directly yourself.

## Topics

### Creating an NSPortCoder Object

- [portCoderWithReceivePort:sendPort:components:](nsportcoder/portcoderwithreceiveport_sendport_components_.md): Deprecated. Creates and returns a new `NSPortCoder` object.
- [initWithReceivePort:sendPort:components:](nsportcoder/initwithreceiveport_sendport_components_.md): Deprecated. Initializes and returns an `NSPortCoder` object.

### Getting the Connection

- [connection](nsportcoder/connection.md): Deprecated. Returns the `NSConnection` object that uses the receiver.

### Encoding NSPort Objects

- [encodePortObject:](nsportcoder/encodeportobject_.md): Deprecated. Encodes a given port so it can be properly reconstituted in the receiving process or thread.
- [decodePortObject](nsportcoder/decodeportobject.md): Deprecated. Decodes and returns an `NSPort` object that was previously encoded with any of the general `encode...Object:` messages.

### Checking for Encoding

- [isBycopy](nsportcoder/isbycopy.md): Deprecated. Returns a Boolean value that indicates whether the receiver is encoding an object by copying it.
- [isByref](nsportcoder/isbyref.md): Deprecated. Returns a Boolean value that indicates whether the receiver is encoding an object by reference.

### Dispatching

- [dispatch](nsportcoder/dispatch.md): Deprecated. Processes and acts upon the distributed object message with which the receiver was initialized.

## Relationships

### Inherits From

- [NSCoder](nscoder.md)

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
- [NSPortDelegate](portdelegate.md): An interface for handling incoming messages.
- [NSPortMessage](portmessage.md): A low-level, operating system-independent type for inter-application (and inter-thread) messages.
- [NSPortNameServer](nsportnameserver.md): Deprecated. An object-oriented interface to the port registration service used by the distributed objects system.
- [NSProtocolChecker](nsprotocolchecker.md): An object that restricts the messages that can be sent to another object (referred to as the checker’s delegate).
- [NSSocketPortNameServer](nssocketportnameserver.md): Deprecated. A port name server that takes and returns socket ports.
