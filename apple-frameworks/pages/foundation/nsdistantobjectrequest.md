> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdistantobjectrequest](https://developer.apple.com/documentation/foundation/nsdistantobjectrequest)

# NSDistantObjectRequest

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

An object used by the distributed objects system to help handle invocations between different processes.

> Use [NSXPCConnection](nsxpcconnection.md) instead.

## Declaration

```objectivec
@interface NSDistantObjectRequest : NSObject
```

<a id="overview"></a>

## Overview

Do not create [NSDistantObjectRequest](nsdistantobjectrequest.md) objects directly. Unless you are getting involved with the low-level details of distributed objects, there should never be a need to access an [NSDistantObjectRequest](nsdistantobjectrequest.md). To intercept and possibly process requests yourself, implement the [NSConnection](nsconnection.md) delegate method [connection:handleRequest:](nsconnectiondelegate/connection_handlerequest_.md).

## Topics

### Getting Information About a Request

- [connection](nsdistantobjectrequest/connection.md): Deprecated. Returns the `NSConnection` object involved in the request.
- [conversation](nsdistantobjectrequest/conversation.md): Deprecated. Returns the token object representing the conversation in which the receiver was created.
- [invocation](nsdistantobjectrequest/invocation.md): Deprecated. Returns the `NSInvocation` object for the request.

### Raising a Remote Exception

- [replyWithException:](nsdistantobjectrequest/replywithexception_.md): Deprecated. Sends a reply back to the remote object making the distant object request.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Legacy

- [NSMachPortDelegate](nsmachportdelegate.md): An interface for handling incoming Mach messages.
- [NSConnectionDelegate](nsconnectiondelegate.md): Deprecated. An interface for interacting with low-level, interprocess connections.
- [NSConnection](nsconnection.md): Deprecated. An object that manages the communication between objects in different threads or between a thread and a process running on a local or remote system.
- [NSDistantObject](nsdistantobject.md): Deprecated. A proxy for objects in other applications or threads.
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
