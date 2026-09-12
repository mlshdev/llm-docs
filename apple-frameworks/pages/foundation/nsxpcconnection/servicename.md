> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsxpcconnection/servicename](https://developer.apple.com/documentation/foundation/nsxpcconnection/servicename)

# serviceName (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The name of the XPC service that this connection was configured to connect to.

## Declaration

```swift
var serviceName: String? { get }
```

## See Also

### Managing the connection interface

- [endpoint](endpoint.md): If the connection was created with an [NSXPCListenerEndpoint](../nsxpclistenerendpoint.md) object, returns the endpoint object used.
- [exportedInterface](exportedinterface.md): The [NSXPCInterface](../nsxpcinterface.md) object that describes the protocol for the exported object on this connection.
- [exportedObject](exportedobject.md): An exported object for the connection.
- [remoteObjectInterface](remoteobjectinterface.md): Defines the [NSXPCInterface](../nsxpcinterface.md) object that describes the protocol for the object represented by the `remoteObjectProxy`.
- [remoteObjectProxy](remoteobjectproxy.md): Returns a proxy for the remote object (that is, the `exportedObject` from the other side of this connection).

# serviceName (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The name of the XPC service that this connection was configured to connect to.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * serviceName;
```

## See Also

### Managing the connection interface

- [endpoint](endpoint.md): If the connection was created with an [NSXPCListenerEndpoint](../nsxpclistenerendpoint.md) object, returns the endpoint object used.
- [exportedInterface](exportedinterface.md): The [NSXPCInterface](../nsxpcinterface.md) object that describes the protocol for the exported object on this connection.
- [exportedObject](exportedobject.md): An exported object for the connection.
- [remoteObjectInterface](remoteobjectinterface.md): Defines the [NSXPCInterface](../nsxpcinterface.md) object that describes the protocol for the object represented by the `remoteObjectProxy`.
- [remoteObjectProxy](remoteobjectproxy.md): Returns a proxy for the remote object (that is, the `exportedObject` from the other side of this connection).
