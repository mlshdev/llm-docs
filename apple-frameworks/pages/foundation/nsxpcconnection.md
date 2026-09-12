> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsxpcconnection](https://developer.apple.com/documentation/foundation/nsxpcconnection)

# NSXPCConnection (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A bidirectional communication channel between two processes.

## Declaration

```swift
class NSXPCConnection
```

<a id="overview"></a>

## Overview

This class is the primary means of creating and configuring the communication mechanism between two processes. Each process has one instance of this class to represent the endpoint in the communication channel.

## Topics

### Creating a connection

- [init(listenerEndpoint:)](nsxpcconnection/init%28listenerendpoint_%29.md): Initializes an [NSXPCConnection](nsxpcconnection.md) object to connect to an [NSXPCListener](nsxpclistener.md) object in another process, identified by an [NSXPCListenerEndpoint](nsxpclistenerendpoint.md) object.
- [init(machServiceName:options:)](nsxpcconnection/init%28machservicename_options_%29.md): Initializes an [NSXPCConnection](nsxpcconnection.md) object to connect to a LaunchAgent or LaunchDaemon with a name advertised in a `launchd.plist`.
- [NSXPCConnection.Options](nsxpcconnection/options.md): Options that you can pass to a connection.
- [init(serviceName:)](nsxpcconnection/init%28servicename_%29.md): Initializes an [NSXPCConnection](nsxpcconnection.md) object to connect to an [NSXPCListener](nsxpclistener.md) object in an XPC service, identified by a service name.

### Managing connection state

- [activate()](nsxpcconnection/activate%28%29.md): Activates the connection.
- [resume()](nsxpcconnection/resume%28%29.md): Starts or resumes handling of messages on a connection.
- [invalidate()](nsxpcconnection/invalidate%28%29.md): Invalidates the connection.
- [suspend()](nsxpcconnection/suspend%28%29.md): Suspends the connection.
- [interruptionHandler](nsxpcconnection/interruptionhandler.md): An interruption handler that is called if the remote process exits or crashes.
- [invalidationHandler](nsxpcconnection/invalidationhandler.md): An invalidation handler that is called if the connection can not be formed or the connection has terminated and may not be re-established.
- [current()](nsxpcconnection/current%28%29.md): Returns the current connection, in the context of a call to a method on your exported object.
- [scheduleSendBarrierBlock(\_:)](nsxpcconnection/schedulesendbarrierblock%28__%29.md): Add a barrier block to execute on the connection.

### Managing the connection interface

- [serviceName](nsxpcconnection/servicename.md): The name of the XPC service that this connection was configured to connect to.
- [endpoint](nsxpcconnection/endpoint.md): If the connection was created with an [NSXPCListenerEndpoint](nsxpclistenerendpoint.md) object, returns the endpoint object used.
- [exportedInterface](nsxpcconnection/exportedinterface.md): The [NSXPCInterface](nsxpcinterface.md) object that describes the protocol for the exported object on this connection.
- [exportedObject](nsxpcconnection/exportedobject.md): An exported object for the connection.
- [remoteObjectInterface](nsxpcconnection/remoteobjectinterface.md): Defines the [NSXPCInterface](nsxpcinterface.md) object that describes the protocol for the object represented by the `remoteObjectProxy`.
- [remoteObjectProxy](nsxpcconnection/remoteobjectproxy.md): Returns a proxy for the remote object (that is, the `exportedObject` from the other side of this connection).

### Working with security attributes

- [auditSessionIdentifier](nsxpcconnection/auditsessionidentifier.md): The BSM audit session identifier for the connecting process.
- [processIdentifier](nsxpcconnection/processidentifier.md): The process ID (PID) of the connecting process.
- [effectiveGroupIdentifier](nsxpcconnection/effectivegroupidentifier.md): The effective group ID (EGID) of the connecting process.
- [effectiveUserIdentifier](nsxpcconnection/effectiveuseridentifier.md): The effective user ID (EUID) of the connecting process.

### Working with proxy objects

- [remoteObjectProxyWithErrorHandler(\_:)](nsxpcconnection/remoteobjectproxywitherrorhandler%28__%29.md): Returns a proxy for the remote object (that is, the object exported from the other side of this connection) with the specified error handler.
- [synchronousRemoteObjectProxyWithErrorHandler(\_:)](nsxpcconnection/synchronousremoteobjectproxywitherrorhandler%28__%29.md): Returns a proxy that makes a synchronous IPC call instead of the default async behavior.

### Working with code signing

- [setCodeSigningRequirement(\_:)](nsxpcconnection/setcodesigningrequirement%28__%29.md): Sets the code signing requirement for this connection.

### Error codes

- [NSXPCConnectionInterrupted](nsxpcconnectioninterrupted-swift.var.md): The XPC connection was interrupted.
- [NSXPCConnectionInvalid](nsxpcconnectioninvalid-swift.var.md): The XPC connection was invalid.
- [NSXPCConnectionReplyInvalid](nsxpcconnectionreplyinvalid-swift.var.md): The XPC connection reply was invalid.
- [NSXPCConnectionErrorMinimum](nsxpcconnectionerrorminimum-swift.var.md): The lower bounds of XPC connection error code values.
- [NSXPCConnectionErrorMaximum](nsxpcconnectionerrormaximum-swift.var.md): The upper bounds of XPC connection error code values.
- [NSXPCConnectionCodeSigningRequirementFailure](nsxpcconnectioncodesigningrequirementfailure-swift.var.md): A code-signing requirement check failed.

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
- [NSXPCProxyCreating](nsxpcproxycreating.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### XPC Client

- [NSXPCProxyCreating](nsxpcproxycreating.md): Methods for creating new proxy objects.
- [NSXPCInterface](nsxpcinterface.md): An interface that may be sent to an exported object or remote object proxy.
- [NSXPCCoder](nsxpccoder.md): A coder that encodes and decodes objects that your app sends over an XPC connection.

# NSXPCConnection (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A bidirectional communication channel between two processes.

## Declaration

```objectivec
@interface NSXPCConnection : NSObject
```

<a id="overview"></a>

## Overview

This class is the primary means of creating and configuring the communication mechanism between two processes. Each process has one instance of this class to represent the endpoint in the communication channel.

## Topics

### Creating a connection

- [initWithListenerEndpoint:](nsxpcconnection/init%28listenerendpoint_%29.md): Initializes an [NSXPCConnection](nsxpcconnection.md) object to connect to an [NSXPCListener](nsxpclistener.md) object in another process, identified by an [NSXPCListenerEndpoint](nsxpclistenerendpoint.md) object.
- [initWithMachServiceName:options:](nsxpcconnection/init%28machservicename_options_%29.md): Initializes an [NSXPCConnection](nsxpcconnection.md) object to connect to a LaunchAgent or LaunchDaemon with a name advertised in a `launchd.plist`.
- [NSXPCConnectionOptions](nsxpcconnection/options.md): Options that you can pass to a connection.
- [initWithServiceName:](nsxpcconnection/init%28servicename_%29.md): Initializes an [NSXPCConnection](nsxpcconnection.md) object to connect to an [NSXPCListener](nsxpclistener.md) object in an XPC service, identified by a service name.

### Managing connection state

- [activate](nsxpcconnection/activate%28%29.md): Activates the connection.
- [resume](nsxpcconnection/resume%28%29.md): Starts or resumes handling of messages on a connection.
- [invalidate](nsxpcconnection/invalidate%28%29.md): Invalidates the connection.
- [suspend](nsxpcconnection/suspend%28%29.md): Suspends the connection.
- [interruptionHandler](nsxpcconnection/interruptionhandler.md): An interruption handler that is called if the remote process exits or crashes.
- [invalidationHandler](nsxpcconnection/invalidationhandler.md): An invalidation handler that is called if the connection can not be formed or the connection has terminated and may not be re-established.
- [currentConnection](nsxpcconnection/current%28%29.md): Returns the current connection, in the context of a call to a method on your exported object.
- [scheduleSendBarrierBlock:](nsxpcconnection/schedulesendbarrierblock%28__%29.md): Add a barrier block to execute on the connection.

### Managing the connection interface

- [serviceName](nsxpcconnection/servicename.md): The name of the XPC service that this connection was configured to connect to.
- [endpoint](nsxpcconnection/endpoint.md): If the connection was created with an [NSXPCListenerEndpoint](nsxpclistenerendpoint.md) object, returns the endpoint object used.
- [exportedInterface](nsxpcconnection/exportedinterface.md): The [NSXPCInterface](nsxpcinterface.md) object that describes the protocol for the exported object on this connection.
- [exportedObject](nsxpcconnection/exportedobject.md): An exported object for the connection.
- [remoteObjectInterface](nsxpcconnection/remoteobjectinterface.md): Defines the [NSXPCInterface](nsxpcinterface.md) object that describes the protocol for the object represented by the `remoteObjectProxy`.
- [remoteObjectProxy](nsxpcconnection/remoteobjectproxy.md): Returns a proxy for the remote object (that is, the `exportedObject` from the other side of this connection).

### Working with security attributes

- [auditSessionIdentifier](nsxpcconnection/auditsessionidentifier.md): The BSM audit session identifier for the connecting process.
- [processIdentifier](nsxpcconnection/processidentifier.md): The process ID (PID) of the connecting process.
- [effectiveGroupIdentifier](nsxpcconnection/effectivegroupidentifier.md): The effective group ID (EGID) of the connecting process.
- [effectiveUserIdentifier](nsxpcconnection/effectiveuseridentifier.md): The effective user ID (EUID) of the connecting process.

### Working with proxy objects

- [remoteObjectProxyWithErrorHandler:](nsxpcconnection/remoteobjectproxywitherrorhandler%28__%29.md): Returns a proxy for the remote object (that is, the object exported from the other side of this connection) with the specified error handler.
- [synchronousRemoteObjectProxyWithErrorHandler:](nsxpcconnection/synchronousremoteobjectproxywitherrorhandler%28__%29.md): Returns a proxy that makes a synchronous IPC call instead of the default async behavior.

### Working with code signing

- [setCodeSigningRequirement:](nsxpcconnection/setcodesigningrequirement%28__%29.md): Sets the code signing requirement for this connection.

### Error codes

- [NSXPCConnectionInterrupted](nsxpcconnectioninterrupted-c.enum.case.md): The XPC connection was interrupted.
- [NSXPCConnectionInvalid](nsxpcconnectioninvalid-c.enum.case.md): The XPC connection was invalid.
- [NSXPCConnectionReplyInvalid](nsxpcconnectionreplyinvalid-c.enum.case.md): The XPC connection reply was invalid.
- [NSXPCConnectionErrorMinimum](nsxpcconnectionerrorminimum-c.enum.case.md): The lower bounds of XPC connection error code values.
- [NSXPCConnectionErrorMaximum](nsxpcconnectionerrormaximum-c.enum.case.md): The upper bounds of XPC connection error code values.
- [NSXPCConnectionCodeSigningRequirementFailure](nsxpcconnectioncodesigningrequirementfailure-c.enum.case.md): A code-signing requirement check failed.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSXPCProxyCreating](nsxpcproxycreating.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### XPC Client

- [NSXPCProxyCreating](nsxpcproxycreating.md): Methods for creating new proxy objects.
- [NSXPCInterface](nsxpcinterface.md): An interface that may be sent to an exported object or remote object proxy.
- [NSXPCCoder](nsxpccoder.md): A coder that encodes and decodes objects that your app sends over an XPC connection.
