> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsconnection/registername:](https://developer.apple.com/documentation/foundation/nsconnection/registername:)

# registerName:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Registers the specified service using with the default system port name server.

## Declaration

```objectivec
- (BOOL) registerName:(NSString *) name;
```

## Parameters

- `name`: The name under which to register the receiver.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the operation was successful, otherwise [false](https://developer.apple.com/documentation/swift/false) (for example, if another `NSConnection` object on the same host is already registered under `name`).

<a id="Discussion"></a>

## Discussion

This method connects the receive port of the receiving `NSConnection` object with the specified service name. It registers the name using the port name server returned by the [systemDefaultPortNameServer](../nsportnameserver/systemdefaultportnameserver.md) method of `NSPortNameServer`. If the operation is successful, other `NSConnection` objects can contact the receiver using the [connectionWithRegisteredName:host:](connectionwithregisteredname_host_.md) and [rootProxyForConnectionWithRegisteredName:host:](rootproxyforconnectionwithregisteredname_host_.md) class methods.

If the receiver was already registered under a name and this method returns [false](https://developer.apple.com/documentation/swift/false), the old name remains in effect. If this method is successful, it also unregisters the old name.

To unregister an `NSConnection` object, simply invoke [registerName:](registername_.md) and supply `nil` as the connection name. Unregistering is currently only supported for [NSSocketPort](../socketport.md)-based connections.

## See Also

### Related Documentation

- [systemDefaultPortNameServer](../nsportnameserver/systemdefaultportnameserver.md): Deprecated. Returns the single instance of `NSPortNameServer` for the application.

### Vending a Service

- [serviceConnectionWithName:rootObject:usingNameServer:](serviceconnectionwithname_rootobject_usingnameserver_.md): Deprecated. Creates and returns a new connection object representing a vended service on the specified port name server.
- [serviceConnectionWithName:rootObject:](serviceconnectionwithname_rootobject_.md): Deprecated. Creates and returns a new connection object representing a vended service on the default system port name server.
- [registerName:withNameServer:](registername_withnameserver_.md): Deprecated. Registers a service with the specified port name server.
- [rootObject](rootobject-c.property.md): Deprecated. The object that the receiver (or its parent) makes available to other applications or threads.
