> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsconnection/connectionwithregisteredname:host:](https://developer.apple.com/documentation/foundation/nsconnection/connectionwithregisteredname:host:)

# connectionWithRegisteredName:host:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Returns the `NSConnection` object whose send port links it to the `NSConnection` object registered with the default `NSPortNameServer` under a given name on a given host.

## Declaration

```objectivec
+ (instancetype) connectionWithRegisteredName:(NSString *) name host:(NSString *) hostName;
```

## Parameters

- `name`: The name of an `NSConnection` object.
- `hostName`: The name of the host. The domain name `hostName` is an Internet domain name (for example, “`sales.anycorp.com`”). If `hostName` is `nil` or empty, then only the local host is searched for the named `NSConnection` object.

<a id="return-value"></a>

## Return Value

The `NSConnection` object whose send port links it to the `NSConnection` object registered with the default `NSPortNameServer` under `name` on the host named `hostName`. Returns `nil` if no `NSConnection` object can be found for `name` and `hostName`. The returned `NSConnection` object is a child of the default `NSConnection` object for the current thread (that is, it shares the default `NSConnection` object’s receive port).

<a id="Discussion"></a>

## Discussion

To get the object vended by the `NSConnection` object, use the [rootProxy](rootproxy.md) instance method. The [rootProxyForConnectionWithRegisteredName:host:](rootproxyforconnectionwithregisteredname_host_.md) class method immediately returns this object.

## See Also

### Related Documentation

- [defaultConnection](defaultconnection.md): Deprecated. Returns the default `NSConnection` object for the current thread.

### Getting a Remote Object

- [connectionWithRegisteredName:host:usingNameServer:](connectionwithregisteredname_host_usingnameserver_.md): Deprecated. Returns the `NSConnection` object whose send port links it to the `NSConnection` object registered under a given name with a given server on a given host.
- [rootProxy](rootproxy.md): Deprecated. The proxy for the root object of the receiver’s peer in another application or thread.
- [rootProxyForConnectionWithRegisteredName:host:](rootproxyforconnectionwithregisteredname_host_.md): Deprecated. Returns a proxy for the root object of the `NSConnection` object registered with the default `NSPortNameServer` under a given name on a given host.
- [rootProxyForConnectionWithRegisteredName:host:usingNameServer:](rootproxyforconnectionwithregisteredname_host_usingnameserver_.md): Deprecated. Returns a proxy for the root object of the `NSConnection` object registered with `server` under `name` on a given host.
- [remoteObjects](remoteobjects.md): Deprecated. The local proxies for remote objects that have been received over the connection but not deallocated yet.
- [localObjects](localobjects.md): Deprecated. The local objects that have been sent over the connection and still have proxies at the other end.
