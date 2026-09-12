> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nwtcpconnection/endpoint](https://developer.apple.com/documentation/networkextension/nwtcpconnection/endpoint)

# endpoint (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The destination endpoint with which this connection was created.

> Use the [nw_connection_copy_endpoint(\_:)](../../network/nw_connection_copy_endpoint%28__%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```swift
var endpoint: NWEndpoint { get }
```

## See Also

### Getting connection properties

- [localAddress](localaddress.md): Deprecated. The IP address endpoint from which the connection was established.
- [remoteAddress](remoteaddress.md): Deprecated. The IP address endpoint to which the connection was established.
- [connectedPath](connectedpath.md): Deprecated. The network path over which the connection was established.
- [txtRecord](txtrecord.md): Deprecated. The TXT record associated with a connected Bonjour service endpoint.

# endpoint (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The destination endpoint with which this connection was created.

> Use the [nw_connection_copy_endpoint](../../network/nw_connection_copy_endpoint%28__%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```objectivec
@property (nonatomic, readonly) NWEndpoint * endpoint;
```

## See Also

### Getting connection properties

- [localAddress](localaddress.md): Deprecated. The IP address endpoint from which the connection was established.
- [remoteAddress](remoteaddress.md): Deprecated. The IP address endpoint to which the connection was established.
- [connectedPath](connectedpath.md): Deprecated. The network path over which the connection was established.
- [txtRecord](txtrecord.md): Deprecated. The TXT record associated with a connected Bonjour service endpoint.
