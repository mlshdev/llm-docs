> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neprovider/createtcpconnection(to:enabletls:tlsparameters:delegate:)](https://developer.apple.com/documentation/networkextension/neprovider/createtcpconnection(to:enabletls:tlsparameters:delegate:))

# createTCPConnection(to:enableTLS:tlsParameters:delegate:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Create a TCP connection.

> Use the [nw_connection_t](../../network/nw_connection_t.md) type from the [Network](../../network.md) framework instead.

## Declaration

```swift
func createTCPConnection(to remoteEndpoint: NWEndpoint, enableTLS: Bool, tlsParameters TLSParameters: NWTLSParameters?, delegate: Any?) -> NWTCPConnection
```

## Parameters

- `remoteEndpoint`: The remote endpoint to connect to.
- `enableTLS`: A flag indicating if the TLS protocol should be used to secure the communication over the connection.
- `TLSParameters`: The TLS protocol parameters to use. If `enableTLS` is [true](https://developer.apple.com/documentation/swift/true) and this parameter is nil then the default TLS parameters will be used.
- `delegate`: An optional delegate object that conforms to the [NWTCPConnectionAuthenticationDelegate](../nwtcpconnectionauthenticationdelegate.md) protocol.

<a id="return-value"></a>

## Return Value

A [NWTCPConnection](../nwtcpconnection.md) object. The underlying connection is in the process of being established. You can observe the connection’s `state` property using KVO to determine when the connection is successfully established or fails due to an error. For information about KVO, see [Key-Value Observing Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueObserving/KeyValueObserving.html#//apple_ref/doc/uid/10000177i).

<a id="Discussion"></a>

## Discussion

This method provides a convenient way to create TCP connections from a Network Extension Provider. It is preferred over using the sockets API. For instance, the Tunnel Provider can use this method to create a secure TCP connection with the tunnel server that can be used to tunnel network data.

## See Also

### Creating network connections

- [createUDPSession(to:from:)](createudpsession%28to_from_%29.md): Deprecated. Creates a UDP session.

# createTCPConnectionToEndpoint:enableTLS:TLSParameters:delegate: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Create a TCP connection.

> Use the [nw_connection_t](../../network/nw_connection_t.md) type from the [Network](../../network.md) framework instead.

## Declaration

```objectivec
- (NWTCPConnection *) createTCPConnectionToEndpoint:(NWEndpoint *) remoteEndpoint enableTLS:(BOOL) enableTLS TLSParameters:(NWTLSParameters *) TLSParameters delegate:(id) delegate;
```

## Parameters

- `remoteEndpoint`: The remote endpoint to connect to.
- `enableTLS`: A flag indicating if the TLS protocol should be used to secure the communication over the connection.
- `TLSParameters`: The TLS protocol parameters to use. If `enableTLS` is [true](https://developer.apple.com/documentation/swift/true) and this parameter is nil then the default TLS parameters will be used.
- `delegate`: An optional delegate object that conforms to the [NWTCPConnectionAuthenticationDelegate](../nwtcpconnectionauthenticationdelegate.md) protocol.

<a id="return-value"></a>

## Return Value

A [NWTCPConnection](../nwtcpconnection.md) object. The underlying connection is in the process of being established. You can observe the connection’s `state` property using KVO to determine when the connection is successfully established or fails due to an error. For information about KVO, see [Key-Value Observing Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueObserving/KeyValueObserving.html#//apple_ref/doc/uid/10000177i).

<a id="Discussion"></a>

## Discussion

This method provides a convenient way to create TCP connections from a Network Extension Provider. It is preferred over using the sockets API. For instance, the Tunnel Provider can use this method to create a secure TCP connection with the tunnel server that can be used to tunnel network data.

## See Also

### Creating network connections

- [createUDPSessionToEndpoint:fromEndpoint:](createudpsession%28to_from_%29.md): Deprecated. Creates a UDP session.
