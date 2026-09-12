> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmessageportnameserver](https://developer.apple.com/documentation/foundation/nsmessageportnameserver)

# NSMessagePortNameServer

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

A server takes and returns message ports.

> Use [NSXPCConnection](nsxpcconnection.md) instead.

## Declaration

```objectivec
@interface NSMessagePortNameServer : NSPortNameServer
```

<a id="overview"></a>

## Overview

This port name server takes and returns instances of [NSMessagePort](messageport.md). Port removal functionality is not supported in [NSMessagePortNameServer](nsmessageportnameserver.md); if you want to cancel a service, you have to destroy the port (invalidate the [NSMessagePort](messageport.md) object given to [registerPort:name:](nsportnameserver/registerport_name_.md)).

## Topics

### Getting the Server Object

- [sharedInstance](nsmessageportnameserver/sharedinstance.md): Deprecated. Returns the singleton instance of `NSMessagePortNameServer`.

### Getting Ports By Name

- [portForName:](nsmessageportnameserver/portforname_.md): Deprecated. Returns the `NSPort` object registered under a given name on the local host.
- [portForName:host:](nsmessageportnameserver/portforname_host_.md): Deprecated. Returns the `NSPort` object registered under a given name on the local host.

## Relationships

### Inherits From

- [NSPortNameServer](nsportnameserver.md)

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
- [NSPortCoder](nsportcoder.md): Deprecated. A coder used to transmit object proxies (and sometimes objects themselves) between connections.
- [NSPortDelegate](portdelegate.md): An interface for handling incoming messages.
- [NSPortMessage](portmessage.md): A low-level, operating system-independent type for inter-application (and inter-thread) messages.
- [NSPortNameServer](nsportnameserver.md): Deprecated. An object-oriented interface to the port registration service used by the distributed objects system.
- [NSProtocolChecker](nsprotocolchecker.md): An object that restricts the messages that can be sent to another object (referred to as the checker’s delegate).
- [NSSocketPortNameServer](nssocketportnameserver.md): Deprecated. A port name server that takes and returns socket ports.
