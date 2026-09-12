> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsxpcconnection/init(machservicename:options:)](https://developer.apple.com/documentation/foundation/nsxpcconnection/init(machservicename:options:))

# init(machServiceName:options:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** macOS 10.8+

Initializes an [NSXPCConnection](../nsxpcconnection.md) object to connect to a LaunchAgent or LaunchDaemon with a name advertised in a `launchd.plist`.

## Declaration

```swift
init(machServiceName name: String, options: NSXPCConnection.Options = [])
```

<a id="Discussion"></a>

## Discussion

For example, if an agent is managed with `launchd` and has a `launchd.plist` in `~/Library/LaunchAgents`, this method would create a connection to that agent. The agent should use [NSXPCListener](../nsxpclistener.md) to wait for new connections.

If the connection is being made to a process that is running in a privileged Mach bootstrap context (for example, a daemon started by a `launchd` property list in `/Library/LaunchDaemons`), then pass the [NSXPCConnection](../nsxpcconnection.md) option.

## See Also

### Creating a connection

- [init(listenerEndpoint:)](init%28listenerendpoint_%29.md): Initializes an [NSXPCConnection](../nsxpcconnection.md) object to connect to an [NSXPCListener](../nsxpclistener.md) object in another process, identified by an [NSXPCListenerEndpoint](../nsxpclistenerendpoint.md) object.
- [NSXPCConnection.Options](options.md): Options that you can pass to a connection.
- [init(serviceName:)](init%28servicename_%29.md): Initializes an [NSXPCConnection](../nsxpcconnection.md) object to connect to an [NSXPCListener](../nsxpclistener.md) object in an XPC service, identified by a service name.

# initWithMachServiceName:options: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Initializes an [NSXPCConnection](../nsxpcconnection.md) object to connect to a LaunchAgent or LaunchDaemon with a name advertised in a `launchd.plist`.

## Declaration

```objectivec
- (instancetype) initWithMachServiceName:(NSString *) name options:(NSXPCConnectionOptions) options;
```

<a id="Discussion"></a>

## Discussion

For example, if an agent is managed with `launchd` and has a `launchd.plist` in `~/Library/LaunchAgents`, this method would create a connection to that agent. The agent should use [NSXPCListener](../nsxpclistener.md) to wait for new connections.

If the connection is being made to a process that is running in a privileged Mach bootstrap context (for example, a daemon started by a `launchd` property list in `/Library/LaunchDaemons`), then pass the [NSXPCConnection](../nsxpcconnection.md) option.

## See Also

### Creating a connection

- [initWithListenerEndpoint:](init%28listenerendpoint_%29.md): Initializes an [NSXPCConnection](../nsxpcconnection.md) object to connect to an [NSXPCListener](../nsxpclistener.md) object in another process, identified by an [NSXPCListenerEndpoint](../nsxpclistenerendpoint.md) object.
- [NSXPCConnectionOptions](options.md): Options that you can pass to a connection.
- [initWithServiceName:](init%28servicename_%29.md): Initializes an [NSXPCConnection](../nsxpcconnection.md) object to connect to an [NSXPCListener](../nsxpclistener.md) object in an XPC service, identified by a service name.
