> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsxpcconnection/init(servicename:)](https://developer.apple.com/documentation/foundation/nsxpcconnection/init(servicename:))

# init(serviceName:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** macOS 10.8+

Initializes an [NSXPCConnection](../nsxpcconnection.md) object to connect to an [NSXPCListener](../nsxpclistener.md) object in an XPC service, identified by a service name.

## Declaration

```swift
init(serviceName: String)
```

<a id="Discussion"></a>

## Discussion

XPC services are helper processes that are usually part of your application bundle. The service should use [NSXPCListener](../nsxpclistener.md) to wait for new connections.

## See Also

### Creating a connection

- [init(listenerEndpoint:)](init%28listenerendpoint_%29.md): Initializes an [NSXPCConnection](../nsxpcconnection.md) object to connect to an [NSXPCListener](../nsxpclistener.md) object in another process, identified by an [NSXPCListenerEndpoint](../nsxpclistenerendpoint.md) object.
- [init(machServiceName:options:)](init%28machservicename_options_%29.md): Initializes an [NSXPCConnection](../nsxpcconnection.md) object to connect to a LaunchAgent or LaunchDaemon with a name advertised in a `launchd.plist`.
- [NSXPCConnection.Options](options.md): Options that you can pass to a connection.

# initWithServiceName: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Initializes an [NSXPCConnection](../nsxpcconnection.md) object to connect to an [NSXPCListener](../nsxpclistener.md) object in an XPC service, identified by a service name.

## Declaration

```objectivec
- (instancetype) initWithServiceName:(NSString *) serviceName;
```

<a id="Discussion"></a>

## Discussion

XPC services are helper processes that are usually part of your application bundle. The service should use [NSXPCListener](../nsxpclistener.md) to wait for new connections.

## See Also

### Creating a connection

- [initWithListenerEndpoint:](init%28listenerendpoint_%29.md): Initializes an [NSXPCConnection](../nsxpcconnection.md) object to connect to an [NSXPCListener](../nsxpclistener.md) object in another process, identified by an [NSXPCListenerEndpoint](../nsxpclistenerendpoint.md) object.
- [initWithMachServiceName:options:](init%28machservicename_options_%29.md): Initializes an [NSXPCConnection](../nsxpcconnection.md) object to connect to a LaunchAgent or LaunchDaemon with a name advertised in a `launchd.plist`.
- [NSXPCConnectionOptions](options.md): Options that you can pass to a connection.
