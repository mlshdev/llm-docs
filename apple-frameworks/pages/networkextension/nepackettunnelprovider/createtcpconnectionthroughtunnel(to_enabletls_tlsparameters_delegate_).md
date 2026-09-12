> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nepackettunnelprovider/createtcpconnectionthroughtunnel(to:enabletls:tlsparameters:delegate:)](https://developer.apple.com/documentation/networkextension/nepackettunnelprovider/createtcpconnectionthroughtunnel(to:enabletls:tlsparameters:delegate:))

# createTCPConnectionThroughTunnel(to:enableTLS:tlsParameters:delegate:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Create a TCP connection through the current tunnel.

> Pass the Swift [virtualInterface](virtualinterface-7l3ol.md) property or the ObjectiveC [virtualInterface](virtualinterface-9fpgd.md) property to the [nw_parameters_require_interface(\_:\_:)](../../network/nw_parameters_require_interface%28____%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```swift
func createTCPConnectionThroughTunnel(to remoteEndpoint: NWEndpoint, enableTLS: Bool, tlsParameters TLSParameters: NWTLSParameters?, delegate: Any?) -> NWTCPConnection
```

## Parameters

- `remoteEndpoint`: The remote endpoint to connect to.
- `enableTLS`: A flag indicating if the TLS protocol should be used to secure the communication over the connection.
- `TLSParameters`: The TLS protocol parameters to use. If `enableTLS` is [true](https://developer.apple.com/documentation/swift/true) and this parameter is nil then the default TLS parameters will be used.
- `delegate`: An optional delegate object that conforms to the [NWTCPConnectionAuthenticationDelegate](../nwtcpconnectionauthenticationdelegate.md) protocol.

<a id="Discussion"></a>

## Discussion

Use this method to create a TCP connection to an endpoint inside the private network.

## See Also

### Creating network connections through the tunnel

- [createUDPSessionThroughTunnel(to:from:)](createudpsessionthroughtunnel%28to_from_%29.md): Deprecated. Creates a UDP session through the current tunnel.

# createTCPConnectionThroughTunnelToEndpoint:enableTLS:TLSParameters:delegate: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Create a TCP connection through the current tunnel.

> Pass the Swift [virtualInterface](virtualinterface-7l3ol.md) property or the ObjectiveC [virtualInterface](virtualinterface-9fpgd.md) property to the [nw_parameters_require_interface](../../network/nw_parameters_require_interface%28____%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```objectivec
- (NWTCPConnection *) createTCPConnectionThroughTunnelToEndpoint:(NWEndpoint *) remoteEndpoint enableTLS:(BOOL) enableTLS TLSParameters:(NWTLSParameters *) TLSParameters delegate:(id) delegate;
```

## Parameters

- `remoteEndpoint`: The remote endpoint to connect to.
- `enableTLS`: A flag indicating if the TLS protocol should be used to secure the communication over the connection.
- `TLSParameters`: The TLS protocol parameters to use. If `enableTLS` is [true](https://developer.apple.com/documentation/swift/true) and this parameter is nil then the default TLS parameters will be used.
- `delegate`: An optional delegate object that conforms to the [NWTCPConnectionAuthenticationDelegate](../nwtcpconnectionauthenticationdelegate.md) protocol.

<a id="Discussion"></a>

## Discussion

Use this method to create a TCP connection to an endpoint inside the private network.

## See Also

### Creating network connections through the tunnel

- [createUDPSessionThroughTunnelToEndpoint:fromEndpoint:](createudpsessionthroughtunnel%28to_from_%29.md): Deprecated. Creates a UDP session through the current tunnel.
