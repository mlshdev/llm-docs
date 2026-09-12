> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmachbootstrapserver](https://developer.apple.com/documentation/foundation/nsmachbootstrapserver)

# NSMachBootstrapServer

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

A port name server that takes and returns Mach port objects.

> Use [NSXPCConnection](nsxpcconnection.md) instead.

## Declaration

```objectivec
@interface NSMachBootstrapServer : NSPortNameServer
```

<a id="overview"></a>

## Overview

Port removal functionality is not supported in [NSMachBootstrapServer](nsmachbootstrapserver.md); if you want to cancel a service, you have to destroy the port (invalidate the [NSMachPort](nsmachport.md) given to [registerPort:name:](nsmachbootstrapserver/registerport_name_.md)).

## Topics

### Getting the Server Object

- [sharedInstance](nsmachbootstrapserver/sharedinstance.md): Deprecated. Returns the shared instance of the bootstrap server.

### Looking up Ports

- [portForName:](nsmachbootstrapserver/portforname_.md): Deprecated. Looks up and returns the port registered under the specified name on the local host.
- [portForName:host:](nsmachbootstrapserver/portforname_host_.md): Deprecated. Looks up and returns the port registered under the specified name.
- [servicePortWithName:](nsmachbootstrapserver/serviceportwithname_.md): Deprecated. Looks up and returns the port for the vended service that is registered under the specified name.

### Registering Ports

- [registerPort:name:](nsmachbootstrapserver/registerport_name_.md): Deprecated. Registers a port with a specified name.

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
- [NSMachPort](nsmachport.md): A port that can be used as an endpoint for distributed object connections (or raw messaging).
- [NSMessagePort](messageport.md): A port that can be used as an endpoint for distributed object connections (or raw messaging).
- [NSMessagePortNameServer](nsmessageportnameserver.md): Deprecated. A server takes and returns message ports.
- [NSPortCoder](nsportcoder.md): Deprecated. A coder used to transmit object proxies (and sometimes objects themselves) between connections.
- [NSPortDelegate](portdelegate.md): An interface for handling incoming messages.
- [NSPortMessage](portmessage.md): A low-level, operating system-independent type for inter-application (and inter-thread) messages.
- [NSPortNameServer](nsportnameserver.md): Deprecated. An object-oriented interface to the port registration service used by the distributed objects system.
- [NSProtocolChecker](nsprotocolchecker.md): An object that restricts the messages that can be sent to another object (referred to as the checker’s delegate).
- [NSSocketPortNameServer](nssocketportnameserver.md): Deprecated. A port name server that takes and returns socket ports.
