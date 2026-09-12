> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsconnection/rootobject-c.property](https://developer.apple.com/documentation/foundation/nsconnection/rootobject-c.property)

# rootObject

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

The object that the receiver (or its parent) makes available to other applications or threads.

## Declaration

```objectivec
@property (retain, nullable) id rootObject;
```

<a id="Discussion"></a>

## Discussion

The object that the receiver (or its parent) makes available to other applications or threads, or `nil` if there is no root object.

To get a proxy to this object in another application or thread, invoke the [rootProxyForConnectionWithRegisteredName:host:](rootproxyforconnectionwithregisteredname_host_.md) class method with the appropriate arguments.

Changing the root object only affects new connection requests and [rootProxy](rootproxy.md) messages to established `NSConnection` objects—applications that have proxies to the old root object can still send messages through it.

## See Also

### Related Documentation

- [rootProxy](rootproxy.md): Deprecated. The proxy for the root object of the receiver’s peer in another application or thread.

### Vending a Service

- [serviceConnectionWithName:rootObject:usingNameServer:](serviceconnectionwithname_rootobject_usingnameserver_.md): Deprecated. Creates and returns a new connection object representing a vended service on the specified port name server.
- [serviceConnectionWithName:rootObject:](serviceconnectionwithname_rootobject_.md): Deprecated. Creates and returns a new connection object representing a vended service on the default system port name server.
- [registerName:](registername_.md): Deprecated. Registers the specified service using with the default system port name server.
- [registerName:withNameServer:](registername_withnameserver_.md): Deprecated. Registers a service with the specified port name server.
