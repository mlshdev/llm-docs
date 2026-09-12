> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsportnameserver](https://developer.apple.com/documentation/foundation/nsportnameserver)

# NSPortNameServer

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

An object-oriented interface to the port registration service used by the distributed objects system.

> Use [NSXPCConnection](nsxpcconnection.md) instead.

## Declaration

```objectivec
@interface NSPortNameServer : NSObject
```

<a id="overview"></a>

## Overview

[NSConnection](nsconnection.md) objects use this interface to contact each other and to distribute objects over the network; you should rarely need to interact directly with an [NSPortNameServer](nsportnameserver.md).

You get an [NSPortNameServer](nsportnameserver.md) object by using the [systemDefaultPortNameServer](nsportnameserver/systemdefaultportnameserver.md) class method—never allocate and initialize an instance directly. With the default server object you can register an [NSPort](port.md) object under a given name, making it available on the network, and also unregister it so that it can’t be looked up (although other applications that have already looked up the [NSPort](port.md) object  can still use it until it becomes invalid). See the [NSPort](port.md) class specification for more information.

## Topics

### Getting the Server Object

- [systemDefaultPortNameServer](nsportnameserver/systemdefaultportnameserver.md): Deprecated. Returns the single instance of `NSPortNameServer` for the application.

### Looking up Ports

- [portForName:](nsportnameserver/portforname_.md): Deprecated. Looks up and returns the port registered under the specified name on the local host.
- [portForName:host:](nsportnameserver/portforname_host_.md): Deprecated. Looks up and returns the port registered under the specified name on a specified host.

### Registering Ports

- [registerPort:name:](nsportnameserver/registerport_name_.md): Deprecated. Makes a given port available on the network under a specified name.
- [removePortForName:](nsportnameserver/removeportforname_.md): Deprecated. Unregisters the port for a given name on the local host.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NSMachBootstrapServer](nsmachbootstrapserver.md)
- [NSMessagePortNameServer](nsmessageportnameserver.md)
- [NSSocketPortNameServer](nssocketportnameserver.md)

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
- [NSProtocolChecker](nsprotocolchecker.md): An object that restricts the messages that can be sent to another object (referred to as the checker’s delegate).
- [NSSocketPortNameServer](nssocketportnameserver.md): Deprecated. A port name server that takes and returns socket ports.
