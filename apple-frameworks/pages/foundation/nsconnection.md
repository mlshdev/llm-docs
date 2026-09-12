> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsconnection](https://developer.apple.com/documentation/foundation/nsconnection)

# NSConnection

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

An object that manages the communication between objects in different threads or between a thread and a process running on a local or remote system.

> Use [NSXPCConnection](nsxpcconnection.md) instead.

## Declaration

```objectivec
@interface NSConnection : NSObject
```

<a id="overview"></a>

## Overview

Connection objects form the backbone of the distributed objects mechanism and normally operate in the background. You use the methods of [NSConnection](nsconnection.md) explicitly when vending an object to other applications, when accessing such a vended object through a proxy, and when altering default communication parameters. At other times, you simply interact with a vended object or its proxy.

A single connection object may be shared by multiple threads and used to access a vended object.

## Topics

### Getting the Default Instance

- [defaultConnection](nsconnection/defaultconnection.md): Deprecated. Returns the default `NSConnection` object for the current thread.

### Creating Instances

- [connectionWithReceivePort:sendPort:](nsconnection/connectionwithreceiveport_sendport_.md): Deprecated. Returns an `NSConnection` object that communicates using given send and receive ports.
- [initWithReceivePort:sendPort:](nsconnection/initwithreceiveport_sendport_.md): Deprecated. Returns an `NSConnection` object initialized with given send and receive ports.

### Running the Connection in a New Thread

- [runInNewThread](nsconnection/runinnewthread.md): Deprecated. Creates and starts a new `NSThread` object and then runs the receiving connection in the new thread.
- [enableMultipleThreads](nsconnection/enablemultiplethreads.md): Deprecated. Configures the receiver to allow requests from multiple threads to the remote object, without requiring each thread to each maintain its own connection.
- [multipleThreadsEnabled](nsconnection/multiplethreadsenabled.md): Deprecated. A Boolean value that indicates whether the receiver supports requests from multiple threads.
- [addRunLoop:](nsconnection/addrunloop_.md): Deprecated. Adds the specified run loop to the list of run loops the receiver monitors and from which it responds to requests.
- [removeRunLoop:](nsconnection/removerunloop_.md): Deprecated. Removes a given `NSRunLoop` object from the list of run loops the receiver monitors and from which it responds to requests.

### Vending a Service

- [serviceConnectionWithName:rootObject:usingNameServer:](nsconnection/serviceconnectionwithname_rootobject_usingnameserver_.md): Deprecated. Creates and returns a new connection object representing a vended service on the specified port name server.
- [serviceConnectionWithName:rootObject:](nsconnection/serviceconnectionwithname_rootobject_.md): Deprecated. Creates and returns a new connection object representing a vended service on the default system port name server.
- [registerName:](nsconnection/registername_.md): Deprecated. Registers the specified service using with the default system port name server.
- [registerName:withNameServer:](nsconnection/registername_withnameserver_.md): Deprecated. Registers a service with the specified port name server.
- [rootObject](nsconnection/rootobject-c.property.md): Deprecated. The object that the receiver (or its parent) makes available to other applications or threads.

### Getting a Remote Object

- [connectionWithRegisteredName:host:](nsconnection/connectionwithregisteredname_host_.md): Deprecated. Returns the `NSConnection` object whose send port links it to the `NSConnection` object registered with the default `NSPortNameServer` under a given name on a given host.
- [connectionWithRegisteredName:host:usingNameServer:](nsconnection/connectionwithregisteredname_host_usingnameserver_.md): Deprecated. Returns the `NSConnection` object whose send port links it to the `NSConnection` object registered under a given name with a given server on a given host.
- [rootProxy](nsconnection/rootproxy.md): Deprecated. The proxy for the root object of the receiver’s peer in another application or thread.
- [rootProxyForConnectionWithRegisteredName:host:](nsconnection/rootproxyforconnectionwithregisteredname_host_.md): Deprecated. Returns a proxy for the root object of the `NSConnection` object registered with the default `NSPortNameServer` under a given name on a given host.
- [rootProxyForConnectionWithRegisteredName:host:usingNameServer:](nsconnection/rootproxyforconnectionwithregisteredname_host_usingnameserver_.md): Deprecated. Returns a proxy for the root object of the `NSConnection` object registered with `server` under `name` on a given host.
- [remoteObjects](nsconnection/remoteobjects.md): Deprecated. The local proxies for remote objects that have been received over the connection but not deallocated yet.
- [localObjects](nsconnection/localobjects.md): Deprecated. The local objects that have been sent over the connection and still have proxies at the other end.

### Getting a Conversation

- [currentConversation](nsconnection/currentconversation.md): Deprecated. Returns a token object representing any conversation in progress in the current thread.

### Getting All NSConnection Objects

- [allConnections](nsconnection/allconnections.md): Deprecated. Returns all valid `NSConnection` objects in the process.

### Configuring Instances

- [requestTimeout](nsconnection/requesttimeout.md): Deprecated. The timeout interval for outgoing remote messages.
- [replyTimeout](nsconnection/replytimeout.md): Deprecated. The timeout interval for replies to outgoing remote messages.
- [independentConversationQueueing](nsconnection/independentconversationqueueing.md): Deprecated. A Boolean value that indicates whether the receiver handles remote messages atomically.
- [addRequestMode:](nsconnection/addrequestmode_.md): Deprecated. Adds `mode` to the set of run-loop input modes that the receiver uses for connection requests.
- [removeRequestMode:](nsconnection/removerequestmode_.md): Deprecated. Removes `mode` from the set of run-loop input modes the receiver uses for connection requests.
- [requestModes](nsconnection/requestmodes-c.property.md): Deprecated. The set of request modes the receiver’s receive port is registered for with its `NSRunLoop` object.
- [invalidate](nsconnection/invalidate.md): Deprecated. Invalidates the receiver.
- [valid](nsconnection/valid.md): Deprecated. A Boolean value that indicates whether the receiver is known to be valid.

### Getting Ports

- [receivePort](nsconnection/receiveport-c.property.md): Deprecated. The port on which the receiver receives incoming network messages.
- [sendPort](nsconnection/sendport-c.property.md): Deprecated. The port that the connection sends outgoing network messages through.
- [dispatchWithComponents:](nsconnection/dispatchwithcomponents_.md): Deprecated. Allows subclasses to ask a connection object to dispatch component data.

### Getting Statistics

- [statistics](nsconnection/statistics-c.property.md): Deprecated. A dictionary containing various statistics for the receiver.

### Setting the Delegate

- [delegate](nsconnection/delegate-c.property.md): Deprecated. The receiver’s delegate.

### Constants

- [NSConnection run loop mode](nsconnection-run-loop-mode.md): `NSConnection` defines the following run loop mode—see [NSRunLoop](runloop.md) for more details.
- [Connection Exception Names](connection-exception-names.md): The name of an exception raised in case of authentication failure.

### Notifications

- [NSConnectionDidDieNotification](nsconnectiondiddienotification.md): Deprecated. Posted when an `NSConnection` object is deallocated or when it’s notified that its `NSPort` object has become invalid. The notification object is the `NSConnection` object. This notification does not contain a `userInfo` dictionary.
- [NSConnectionDidInitializeNotification](nsconnectiondidinitializenotification.md): Deprecated. Posted when an `NSConnection` object is initialized using [initWithReceivePort:sendPort:](nsconnection/initwithreceiveport_sendport_.md) (the designated initializer for `NSConnection`). The notification object is the `NSConnection` object. This notification does not contain a `userInfo` dictionary.

### Instance Variables

- [authCheck](nsconnection/authcheck.md): Deprecated.
- [authGen](nsconnection/authgen.md): Deprecated.
- [busy](nsconnection/busy.md): Deprecated.
- [classInfoImported](nsconnection/classinfoimported.md): Deprecated.
- [delayedRL](nsconnection/delayedrl.md): Deprecated.
- [delegate](nsconnection/delegate-c.ivar.md): Deprecated.
- [doRequest](nsconnection/dorequest.md): Deprecated.
- [invalidateRP](nsconnection/invalidaterp.md): Deprecated.
- [isDead](nsconnection/isdead.md): Deprecated.
- [isMulti](nsconnection/ismulti.md): Deprecated.
- [isQueueing](nsconnection/isqueueing.md): Deprecated.
- [isValid](nsconnection/isvalid.md): Deprecated.
- [localProxyCount](nsconnection/localproxycount.md): Deprecated.
- [receivePort](nsconnection/receiveport-c.ivar.md): Deprecated.
- [registerInfo](nsconnection/registerinfo.md): Deprecated.
- [releasedProxies](nsconnection/releasedproxies.md): Deprecated.
- [replMode](nsconnection/replmode.md): Deprecated.
- [requestModes](nsconnection/requestmodes-c.ivar.md): Deprecated.
- [reserved](nsconnection/reserved.md): Deprecated.
- [rootObject](nsconnection/rootobject-c.ivar.md): Deprecated.
- [runLoops](nsconnection/runloops.md): Deprecated.
- [sendPort](nsconnection/sendport-c.ivar.md): Deprecated.
- [statistics](nsconnection/statistics-c.ivar.md): Deprecated.
- [waitCount](nsconnection/waitcount.md): Deprecated.
- [wantsInvalid](nsconnection/wantsinvalid.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Legacy

- [NSMachPortDelegate](nsmachportdelegate.md): An interface for handling incoming Mach messages.
- [NSConnectionDelegate](nsconnectiondelegate.md): Deprecated. An interface for interacting with low-level, interprocess connections.
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
- [NSSocketPortNameServer](nssocketportnameserver.md): Deprecated. A port name server that takes and returns socket ports.
