> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdistantobject/initwithtarget:connection:](https://developer.apple.com/documentation/foundation/nsdistantobject/initwithtarget:connection:)

# initWithTarget:connection:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Initializes a newly allocated NSDistantObject as a remote proxy for `target`, which is an id in another thread or another application’s address space.

## Declaration

```objectivec
- (instancetype) initWithTarget:(id) target connection:(NSConnection *) connection;
```

## Parameters

- `target`: An object in another thread or another application’s address space.
- `connection`: The connection to set as the `NSConnection` object for the returned proxy—it should have been created using the [connectionWithRegisteredName:host:](../nsconnection/connectionwithregisteredname_host_.md) class method.

<a id="return-value"></a>

## Return Value

An `NSDistantObject` object initialized as a remote proxy for `target`. If a proxy for `target` and `connection` already exists, the receiver is released and the existing proxy is retained and returned.

<a id="Discussion"></a>

## Discussion

A remote proxy can’t be used until its connection’s peer has a local proxy representing `target` in the other application.

This is the designated initializer for remote proxies. It returns an initialized object, which might be different than the original receiver.

## See Also

### Creating a Remote Proxy

- [proxyWithTarget:connection:](proxywithtarget_connection_.md): Deprecated. Returns a remote proxy for a given object and connection, creating the proxy if necessary.
