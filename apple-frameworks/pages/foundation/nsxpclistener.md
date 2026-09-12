> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsxpclistener](https://developer.apple.com/documentation/foundation/nsxpclistener)

# NSXPCListener (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A listener that waits for new incoming connections, configures them, and accepts or rejects them.

## Declaration

```swift
class NSXPCListener
```

<a id="overview"></a>

## Overview

Each XPC service, launchd agent, or launchd daemon typically has at least one [NSXPCListener](nsxpclistener.md) object that listens for connections to a specified service name. Each listener must have a delegate that conforms to the [NSXPCListenerDelegate](nsxpclistenerdelegate.md) protocol. When the listener receives a new connection request, it creates a new [NSXPCConnection](nsxpcconnection.md) object, then asks the delegate to inspect, configure, and resume the connection object by calling the delegate’s [listener(\_:shouldAcceptNewConnection:)](nsxpclistenerdelegate/listener%28__shouldacceptnewconnection_%29.md) method.

## Topics

### Creating a listener

- [init(machServiceName:)](nsxpclistener/init%28machservicename_%29.md): Initializes a listener in a LaunchAgent or LaunchDaemon which has a name advertised in a `launchd.plist` file.

### Using standard listeners

- [service()](nsxpclistener/service%28%29.md): Returns the singleton listener used to listen for incoming connections in an XPC service.
- [anonymous()](nsxpclistener/anonymous%28%29.md): Returns a new anonymous listener connection.

### Working with a delegate

- [delegate](nsxpclistener/delegate.md): The delegate for the listener.

### Providing access to clients

- [endpoint](nsxpclistener/endpoint.md): Returns an endpoint object that may be sent over an existing connection.

### Managing connection state

- [activate()](nsxpclistener/activate%28%29.md): Activates the listener.
- [resume()](nsxpclistener/resume%28%29.md): Starts processing of incoming requests.
- [invalidate()](nsxpclistener/invalidate%28%29.md): Invalidates the listener.
- [suspend()](nsxpclistener/suspend%28%29.md): Suspends the listener.

### Working with code-signing

- [setConnectionCodeSigningRequirement(\_:)](nsxpclistener/setconnectioncodesigningrequirement%28__%29.md): Sets the code signing requirement for connections to this listener.

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### XPC Services

- [NSXPCListenerDelegate](nsxpclistenerdelegate.md): The protocol that delegates to the XPC listener use to accept or reject new connections.
- [NSXPCListenerEndpoint](nsxpclistenerendpoint.md): An object that names a specific XPC listener.

# NSXPCListener (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A listener that waits for new incoming connections, configures them, and accepts or rejects them.

## Declaration

```objectivec
@interface NSXPCListener : NSObject
```

<a id="overview"></a>

## Overview

Each XPC service, launchd agent, or launchd daemon typically has at least one [NSXPCListener](nsxpclistener.md) object that listens for connections to a specified service name. Each listener must have a delegate that conforms to the [NSXPCListenerDelegate](nsxpclistenerdelegate.md) protocol. When the listener receives a new connection request, it creates a new [NSXPCConnection](nsxpcconnection.md) object, then asks the delegate to inspect, configure, and resume the connection object by calling the delegate’s [listener:shouldAcceptNewConnection:](nsxpclistenerdelegate/listener%28__shouldacceptnewconnection_%29.md) method.

## Topics

### Creating a listener

- [initWithMachServiceName:](nsxpclistener/init%28machservicename_%29.md): Initializes a listener in a LaunchAgent or LaunchDaemon which has a name advertised in a `launchd.plist` file.

### Using standard listeners

- [serviceListener](nsxpclistener/service%28%29.md): Returns the singleton listener used to listen for incoming connections in an XPC service.
- [anonymousListener](nsxpclistener/anonymous%28%29.md): Returns a new anonymous listener connection.

### Working with a delegate

- [delegate](nsxpclistener/delegate.md): The delegate for the listener.

### Providing access to clients

- [endpoint](nsxpclistener/endpoint.md): Returns an endpoint object that may be sent over an existing connection.

### Managing connection state

- [activate](nsxpclistener/activate%28%29.md): Activates the listener.
- [resume](nsxpclistener/resume%28%29.md): Starts processing of incoming requests.
- [invalidate](nsxpclistener/invalidate%28%29.md): Invalidates the listener.
- [suspend](nsxpclistener/suspend%28%29.md): Suspends the listener.

### Working with code-signing

- [setConnectionCodeSigningRequirement:](nsxpclistener/setconnectioncodesigningrequirement%28__%29.md): Sets the code signing requirement for connections to this listener.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### XPC Services

- [NSXPCListenerDelegate](nsxpclistenerdelegate.md): The protocol that delegates to the XPC listener use to accept or reject new connections.
- [NSXPCListenerEndpoint](nsxpclistenerendpoint.md): An object that names a specific XPC listener.
