> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdistantobject/proxywithtarget:connection:](https://developer.apple.com/documentation/foundation/nsdistantobject/proxywithtarget:connection:)

# proxyWithTarget:connection:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Returns a remote proxy for a given object and connection, creating the proxy if necessary.

## Declaration

```objectivec
+ (id) proxyWithTarget:(id) target connection:(NSConnection *) connection;
```

## Parameters

- `target`: An object in another thread or another application’s address space.
- `connection`: The connection to set as the `NSConnection` object for the returned proxy—it should have been created using the `NSConnection` [connectionWithRegisteredName:host:](../nsconnection/connectionwithregisteredname_host_.md) class method.

<a id="return-value"></a>

## Return Value

A remote proxy for `target` and `connection`, creating the proxy if necessary

<a id="Discussion"></a>

## Discussion

A remote proxy cannot be used until its connection’s peer has a local proxy representing `target` in the other application.

## See Also

### Creating a Remote Proxy

- [initWithTarget:connection:](initwithtarget_connection_.md): Deprecated. Initializes a newly allocated NSDistantObject as a remote proxy for `target`, which is an id in another thread or another application’s address space.
