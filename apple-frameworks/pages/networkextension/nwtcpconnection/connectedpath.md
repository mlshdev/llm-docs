> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nwtcpconnection/connectedpath](https://developer.apple.com/documentation/networkextension/nwtcpconnection/connectedpath)

# connectedPath (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The network path over which the connection was established.

> Use the [nw_connection_copy_current_path(\_:)](../../network/nw_connection_copy_current_path%28__%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```swift
var connectedPath: NWPath? { get }
```

<a id="Discussion"></a>

## Discussion

The caller can query additional properties from the [NWPath](../nwpath.md) object for more information. Note that this contains a snapshot of information at the time of connection establishment for this connection only. As a result, some underlying properties might change in time and might not reflect the path for other connections that might be established at different times.

## See Also

### Getting connection properties

- [endpoint](endpoint.md): Deprecated. The destination endpoint with which this connection was created.
- [localAddress](localaddress.md): Deprecated. The IP address endpoint from which the connection was established.
- [remoteAddress](remoteaddress.md): Deprecated. The IP address endpoint to which the connection was established.
- [txtRecord](txtrecord.md): Deprecated. The TXT record associated with a connected Bonjour service endpoint.

# connectedPath (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The network path over which the connection was established.

> Use the [nw_connection_copy_current_path](../../network/nw_connection_copy_current_path%28__%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NWPath * connectedPath;
```

<a id="Discussion"></a>

## Discussion

The caller can query additional properties from the [NWPath](../nwpath.md) object for more information. Note that this contains a snapshot of information at the time of connection establishment for this connection only. As a result, some underlying properties might change in time and might not reflect the path for other connections that might be established at different times.

## See Also

### Getting connection properties

- [endpoint](endpoint.md): Deprecated. The destination endpoint with which this connection was created.
- [localAddress](localaddress.md): Deprecated. The IP address endpoint from which the connection was established.
- [remoteAddress](remoteaddress.md): Deprecated. The IP address endpoint to which the connection was established.
- [txtRecord](txtrecord.md): Deprecated. The TXT record associated with a connected Bonjour service endpoint.
