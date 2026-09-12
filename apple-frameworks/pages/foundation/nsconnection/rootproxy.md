> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsconnection/rootproxy](https://developer.apple.com/documentation/foundation/nsconnection/rootproxy)

# rootProxy

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

The proxy for the root object of the receiver’s peer in another application or thread.

## Declaration

```objectivec
@property (retain, readonly) NSDistantObject * rootProxy;
```

<a id="Discussion"></a>

## Discussion

The proxy returned can change between invocations if the peer `NSConnection` object’s root object is changed.

> **Note**

>  If the `NSConnection` object uses separate send and receive ports and has no peer, when you invoke `rootProxy` it will block for the duration of the reply timeout interval, waiting for a reply.

## See Also

### Related Documentation

- [rootObject](rootobject-c.property.md): Deprecated. The object that the receiver (or its parent) makes available to other applications or threads.

### Getting a Remote Object

- [connectionWithRegisteredName:host:](connectionwithregisteredname_host_.md): Deprecated. Returns the `NSConnection` object whose send port links it to the `NSConnection` object registered with the default `NSPortNameServer` under a given name on a given host.
- [connectionWithRegisteredName:host:usingNameServer:](connectionwithregisteredname_host_usingnameserver_.md): Deprecated. Returns the `NSConnection` object whose send port links it to the `NSConnection` object registered under a given name with a given server on a given host.
- [rootProxyForConnectionWithRegisteredName:host:](rootproxyforconnectionwithregisteredname_host_.md): Deprecated. Returns a proxy for the root object of the `NSConnection` object registered with the default `NSPortNameServer` under a given name on a given host.
- [rootProxyForConnectionWithRegisteredName:host:usingNameServer:](rootproxyforconnectionwithregisteredname_host_usingnameserver_.md): Deprecated. Returns a proxy for the root object of the `NSConnection` object registered with `server` under `name` on a given host.
- [remoteObjects](remoteobjects.md): Deprecated. The local proxies for remote objects that have been received over the connection but not deallocated yet.
- [localObjects](localobjects.md): Deprecated. The local objects that have been sent over the connection and still have proxies at the other end.
