> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdistantobject/proxywithlocal:connection:](https://developer.apple.com/documentation/foundation/nsdistantobject/proxywithlocal:connection:)

# proxyWithLocal:connection:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Returns a local proxy for a given object and connection, creating the proxy if necessary.

## Declaration

```objectivec
+ (id) proxyWithLocal:(id) target connection:(NSConnection *) connection;
```

## Parameters

- `target`: An object in the receiver’s address space.
- `connection`: The connection for the returned proxy.

<a id="return-value"></a>

## Return Value

A local proxy for `target` and `connection`, creating it if necessary.

<a id="Discussion"></a>

## Discussion

Other applications connect to the proxy using the `NSConnection` [connectionWithRegisteredName:host:](../nsconnection/connectionwithregisteredname_host_.md) class method.

Local proxies should be considered private to their `NSConnection` objects. Only an `NSConnection` object should use this method to create them, and your code shouldn’t retain or otherwise use local proxies.

## See Also

### Related Documentation

- [Distributed Objects Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DistrObjects/DistrObjects.html#//apple_ref/doc/uid/10000102i)

### Creating a Local Proxy

- [initWithLocal:connection:](initwithlocal_connection_.md): Deprecated. Initializes an `NSDistantObject` object as a local proxy for a given object.
