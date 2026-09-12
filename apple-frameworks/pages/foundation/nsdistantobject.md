> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdistantobject](https://developer.apple.com/documentation/foundation/nsdistantobject)

# NSDistantObject

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

A proxy for objects in other applications or threads.

> Use [NSXPCConnection](nsxpcconnection.md) instead.

## Declaration

```objectivec
@interface NSDistantObject : NSProxy
```

<a id="overview"></a>

## Overview

When a distant object receives a message, in most cases it forwards the message through its [NSConnection](nsconnection.md) object to the real object in another application, supplying the return value to the sender of the message if one is received, and propagating any exception back to the invoker of the method that raised it.

[NSDistantObject](nsdistantobject.md) is a concrete subclass of [NSProxy](nsproxy.md), adding two useful instance methods of its own: [connectionForProxy](nsdistantobject/connectionforproxy.md) returns the [NSConnection](nsconnection.md) object that handles the receiver; [setProtocolForProxy:](nsdistantobject/setprotocolforproxy_.md) establishes the set of methods the real object is known to respond to, saving the network traffic required to determine the argument and return types the first time a particular selector is forwarded to the remote proxy.

There are two kinds of distant object: local proxies and remote proxies. A local proxy is created by an [NSConnection](nsconnection.md) object the first time an object is sent to another application. It is used by the connection for bookkeeping purposes and should be considered private. The local proxy is transmitted over the network using the [NSCoding](nscoding.md) protocol to create the remote proxy, which is the object that the other application uses. [NSDistantObject](nsdistantobject.md) defines methods for an [NSConnection](nsconnection.md) object to create instances, but they’re intended only for subclasses to override—you should never invoke them directly. Use the [rootProxyForConnectionWithRegisteredName:host:](nsconnection/rootproxyforconnectionwithregisteredname_host_.md) method of [NSConnection](nsconnection.md), which sets up all the required state for an object-proxy pair.

> **Important**

>  [NSDistantObject](nsdistantobject.md) conforms to the [NSCoding](nscoding.md) protocol, but only supports coding by an [NSPortCoder](nsportcoder.md). [NSDistantObject](nsdistantobject.md) and its subclasses do not support archiving.

## Topics

### Creating a Local Proxy

- [proxyWithLocal:connection:](nsdistantobject/proxywithlocal_connection_.md): Deprecated. Returns a local proxy for a given object and connection, creating the proxy if necessary.
- [initWithLocal:connection:](nsdistantobject/initwithlocal_connection_.md): Deprecated. Initializes an `NSDistantObject` object as a local proxy for a given object.

### Creating a Remote Proxy

- [proxyWithTarget:connection:](nsdistantobject/proxywithtarget_connection_.md): Deprecated. Returns a remote proxy for a given object and connection, creating the proxy if necessary.
- [initWithTarget:connection:](nsdistantobject/initwithtarget_connection_.md): Deprecated. Initializes a newly allocated NSDistantObject as a remote proxy for `target`, which is an id in another thread or another application’s address space.

### Getting a Proxy’s NSConnection

- [connectionForProxy](nsdistantobject/connectionforproxy.md): Deprecated. Returns the connection used by the receiver.

### Setting a Proxy’s Protocol

- [setProtocolForProxy:](nsdistantobject/setprotocolforproxy_.md): Deprecated. Sets the methods known to be handled by the receiver to those in a given protocol.

### Instance Methods

- [initWithCoder:](nsdistantobject/initwithcoder_.md): Deprecated.

## Relationships

### Inherits From

- [NSProxy](nsproxy.md)

### Conforms To

- [NSCoding](nscoding.md)

## See Also

### Legacy

- [NSMachPortDelegate](nsmachportdelegate.md): An interface for handling incoming Mach messages.
- [NSConnectionDelegate](nsconnectiondelegate.md): Deprecated. An interface for interacting with low-level, interprocess connections.
- [NSConnection](nsconnection.md): Deprecated. An object that manages the communication between objects in different threads or between a thread and a process running on a local or remote system.
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
