> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsconnection/localobjects](https://developer.apple.com/documentation/foundation/nsconnection/localobjects)

# localObjects

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

The local objects that have been sent over the connection and still have proxies at the other end.

## Declaration

```objectivec
@property (copy, readonly) NSArray * localObjects;
```

<a id="Discussion"></a>

## Discussion

When an object’s remote proxy is deallocated, a message is sent back to the receiver to notify it that the local object is no longer shared over the connection.

## See Also

### Getting a Remote Object

- [connectionWithRegisteredName:host:](connectionwithregisteredname_host_.md): Deprecated. Returns the `NSConnection` object whose send port links it to the `NSConnection` object registered with the default `NSPortNameServer` under a given name on a given host.
- [connectionWithRegisteredName:host:usingNameServer:](connectionwithregisteredname_host_usingnameserver_.md): Deprecated. Returns the `NSConnection` object whose send port links it to the `NSConnection` object registered under a given name with a given server on a given host.
- [rootProxy](rootproxy.md): Deprecated. The proxy for the root object of the receiver’s peer in another application or thread.
- [rootProxyForConnectionWithRegisteredName:host:](rootproxyforconnectionwithregisteredname_host_.md): Deprecated. Returns a proxy for the root object of the `NSConnection` object registered with the default `NSPortNameServer` under a given name on a given host.
- [rootProxyForConnectionWithRegisteredName:host:usingNameServer:](rootproxyforconnectionwithregisteredname_host_usingnameserver_.md): Deprecated. Returns a proxy for the root object of the `NSConnection` object registered with `server` under `name` on a given host.
- [remoteObjects](remoteobjects.md): Deprecated. The local proxies for remote objects that have been received over the connection but not deallocated yet.
