> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsconnection/serviceconnectionwithname:rootobject:usingnameserver:](https://developer.apple.com/documentation/foundation/nsconnection/serviceconnectionwithname:rootobject:usingnameserver:)

# serviceConnectionWithName:rootObject:usingNameServer:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.5+ (deprecated in 10.13)

Creates and returns a new connection object representing a vended service on the specified port name server.

## Declaration

```objectivec
+ (instancetype) serviceConnectionWithName:(NSString *) name rootObject:(id) root usingNameServer:(NSPortNameServer *) server;
```

## Parameters

- `name`: The name of the service you want to publish.
- `root`: The object to use as the root object for the published service. This is the object vended by the connection.
- `server`: The port name server with which to register your service.

<a id="return-value"></a>

## Return Value

An `NSConnection` object representing the vended service or `nil` if there was a problem setting up the connection object.

<a id="Discussion"></a>

## Discussion

This method creates the server-side of a connection object and registers it with the specified port name server. Clients wishing to connect to this service can request a communications port from the same port server and use that port to communicate.

If the specified service name corresponds to a service that is autolaunched by `launchd`, this method allows the service to check in with the `launchd` process. If the service is not autolaunched by `launchd`, this method registers the new connection with the specified name. For more information about `launchd` and its role in launching services, see [Daemons and Services Programming Guide](https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPSystemStartup/Chapters/Introduction.html#//apple_ref/doc/uid/10000172i)

## See Also

### Related Documentation

- [connectionWithRegisteredName:host:usingNameServer:](connectionwithregisteredname_host_usingnameserver_.md): Deprecated. Returns the `NSConnection` object whose send port links it to the `NSConnection` object registered under a given name with a given server on a given host.

### Vending a Service

- [serviceConnectionWithName:rootObject:](serviceconnectionwithname_rootobject_.md): Deprecated. Creates and returns a new connection object representing a vended service on the default system port name server.
- [registerName:](registername_.md): Deprecated. Registers the specified service using with the default system port name server.
- [registerName:withNameServer:](registername_withnameserver_.md): Deprecated. Registers a service with the specified port name server.
- [rootObject](rootobject-c.property.md): Deprecated. The object that the receiver (or its parent) makes available to other applications or threads.
