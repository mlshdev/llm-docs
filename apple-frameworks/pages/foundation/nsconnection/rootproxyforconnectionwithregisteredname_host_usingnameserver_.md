> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsconnection/rootproxyforconnectionwithregisteredname:host:usingnameserver:](https://developer.apple.com/documentation/foundation/nsconnection/rootproxyforconnectionwithregisteredname:host:usingnameserver:)

# rootProxyForConnectionWithRegisteredName:host:usingNameServer:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Returns a proxy for the root object of the `NSConnection` object registered with `server` under `name` on a given host.

## Declaration

```objectivec
+ (NSDistantObject *) rootProxyForConnectionWithRegisteredName:(NSString *) name host:(NSString *) hostName usingNameServer:(NSPortNameServer *) server;
```

## Parameters

- `name`: The name of an `NSConnection` object .
- `hostName`: A host name.
- `server`: The server.

<a id="return-value"></a>

## Return Value

A proxy for the root object of the `NSConnection` object registered with `server` under `name` on the host named `hostName`, or `nil` if that `NSConnection` object has no root object set.

<a id="Discussion"></a>

## Discussion

See [rootProxyForConnectionWithRegisteredName:host:](rootproxyforconnectionwithregisteredname_host_.md) for more information.

## See Also

### Getting a Remote Object

- [connectionWithRegisteredName:host:](connectionwithregisteredname_host_.md): Deprecated. Returns the `NSConnection` object whose send port links it to the `NSConnection` object registered with the default `NSPortNameServer` under a given name on a given host.
- [connectionWithRegisteredName:host:usingNameServer:](connectionwithregisteredname_host_usingnameserver_.md): Deprecated. Returns the `NSConnection` object whose send port links it to the `NSConnection` object registered under a given name with a given server on a given host.
- [rootProxy](rootproxy.md): Deprecated. The proxy for the root object of the receiver’s peer in another application or thread.
- [rootProxyForConnectionWithRegisteredName:host:](rootproxyforconnectionwithregisteredname_host_.md): Deprecated. Returns a proxy for the root object of the `NSConnection` object registered with the default `NSPortNameServer` under a given name on a given host.
- [remoteObjects](remoteobjects.md): Deprecated. The local proxies for remote objects that have been received over the connection but not deallocated yet.
- [localObjects](localobjects.md): Deprecated. The local objects that have been sent over the connection and still have proxies at the other end.
