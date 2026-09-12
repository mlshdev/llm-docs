> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nssocketportnameserver](https://developer.apple.com/documentation/foundation/nssocketportnameserver)

# NSSocketPortNameServer

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Class  
**Availability:** macOS 10.0+ (deprecated in 10.13)

A port name server that takes and returns socket ports.

> Use [NSXPCConnection](nsxpcconnection.md) instead.

## Declaration

```objectivec
@interface NSSocketPortNameServer : NSPortNameServer
```

<a id="overview"></a>

## Overview

Port removal functionality is supported by the [removePortForName:](nssocketportnameserver/removeportforname_.md) method and should be used to remove invalid socket ports.

Unlike the other port name servers, [NSSocketPortNameServer](nssocketportnameserver.md) can operate over a network. By registering your socket ports, you make them available to other computers on the local network without hard-coding the TCP port numbers. Clients just need to know the name of the port.

[NSPortNameServer](nsportnameserver.md) is implemented using [NSNetService](netservice.md) and registers ports in the local network domain. The registered name of a port must be unique within the local domain, not just the local host. The name server only supports TCP/IP (either IPv4 or IPv6) sockets.

> **Note**

>  Prior to OS X 10.2, [NSSocketPortNameServer](nssocketportnameserver.md) was inoperable.

## Topics

### Getting the Server Object

- [sharedInstance](nssocketportnameserver/sharedinstance.md): Deprecated. Returns the shared socket port name server.

### Looking up Ports

- [portForName:](nssocketportnameserver/portforname_.md): Deprecated. Looks up and returns the port registered under the specified name on the local host.
- [portForName:host:](nssocketportnameserver/portforname_host_.md): Deprecated. Looks up and returns the port registered under the specified name on a specified host.
- [portForName:host:nameServerPortNumber:](nssocketportnameserver/portforname_host_nameserverportnumber_.md): Deprecated. Looks up and returns the port registered under the specified name on a specified host.

### Registering and Removing Ports

- [registerPort:name:](nssocketportnameserver/registerport_name_.md): Deprecated. Registers a given port as a network service with the specified name in the local domain.
- [registerPort:name:nameServerPortNumber:](nssocketportnameserver/registerport_name_nameserverportnumber_.md): Deprecated. Registers a given port as a network service with the specified name in the local domain.
- [removePortForName:](nssocketportnameserver/removeportforname_.md): Deprecated. Unregisters the port for a given name on the local host.

### Configuring the Default Port Number

- [defaultNameServerPortNumber](nssocketportnameserver/defaultnameserverportnumber.md): Deprecated. Returns the port number used to contact the name server.

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
- [NSMessagePortNameServer](nsmessageportnameserver.md): Deprecated. A server takes and returns message ports.
- [NSPortCoder](nsportcoder.md): Deprecated. A coder used to transmit object proxies (and sometimes objects themselves) between connections.
- [NSPortDelegate](portdelegate.md): An interface for handling incoming messages.
- [NSPortMessage](portmessage.md): A low-level, operating system-independent type for inter-application (and inter-thread) messages.
- [NSPortNameServer](nsportnameserver.md): Deprecated. An object-oriented interface to the port registration service used by the distributed objects system.
- [NSProtocolChecker](nsprotocolchecker.md): An object that restricts the messages that can be sent to another object (referred to as the checker’s delegate).
