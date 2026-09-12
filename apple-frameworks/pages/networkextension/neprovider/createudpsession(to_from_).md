> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neprovider/createudpsession(to:from:)](https://developer.apple.com/documentation/networkextension/neprovider/createudpsession(to:from:))

# createUDPSession(to:from:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Creates a UDP session.

> Use the [nw_connection_t](../../network/nw_connection_t.md) type from the [Network](../../network.md) framework instead.

## Declaration

```swift
func createUDPSession(to remoteEndpoint: NWEndpoint, from localEndpoint: NWHostEndpoint?) -> NWUDPSession
```

## Parameters

- `remoteEndpoint`: The remote endpoint to send UDP datagrams to.
- `localEndpoint`: The local endpoint to bind the UDP session to. If nil, the UDP session will be bound to an ephemeral port on the primary physical interface.

<a id="return-value"></a>

## Return Value

A [NWUDPSession](../nwudpsession.md) object. The remote endpoint is in the process of being resolved. You can observe the session’s `state` property using KVO to determine when the session can be used to send and receive UDP datagrams.

<a id="Discussion"></a>

## Discussion

This method provides a convenient way to create UDP connections from a Network Extension Provider. It is preferred over using the sockets API. For instance, the Tunnel Provider can use this method to create a UDP connection with the tunnel server that can be used to tunnel network data.

## See Also

### Creating network connections

- [createTCPConnection(to:enableTLS:tlsParameters:delegate:)](createtcpconnection%28to_enabletls_tlsparameters_delegate_%29.md): Deprecated. Create a TCP connection.

# createUDPSessionToEndpoint:fromEndpoint: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Creates a UDP session.

> Use the [nw_connection_t](../../network/nw_connection_t.md) type from the [Network](../../network.md) framework instead.

## Declaration

```objectivec
- (NWUDPSession *) createUDPSessionToEndpoint:(NWEndpoint *) remoteEndpoint fromEndpoint:(NWHostEndpoint *) localEndpoint;
```

## Parameters

- `remoteEndpoint`: The remote endpoint to send UDP datagrams to.
- `localEndpoint`: The local endpoint to bind the UDP session to. If nil, the UDP session will be bound to an ephemeral port on the primary physical interface.

<a id="return-value"></a>

## Return Value

A [NWUDPSession](../nwudpsession.md) object. The remote endpoint is in the process of being resolved. You can observe the session’s `state` property using KVO to determine when the session can be used to send and receive UDP datagrams.

<a id="Discussion"></a>

## Discussion

This method provides a convenient way to create UDP connections from a Network Extension Provider. It is preferred over using the sockets API. For instance, the Tunnel Provider can use this method to create a UDP connection with the tunnel server that can be used to tunnel network data.

## See Also

### Creating network connections

- [createTCPConnectionToEndpoint:enableTLS:TLSParameters:delegate:](createtcpconnection%28to_enabletls_tlsparameters_delegate_%29.md): Deprecated. Create a TCP connection.
