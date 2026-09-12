> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nepackettunnelprovider/createudpsessionthroughtunnel(to:from:)](https://developer.apple.com/documentation/networkextension/nepackettunnelprovider/createudpsessionthroughtunnel(to:from:))

# createUDPSessionThroughTunnel(to:from:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Creates a UDP session through the current tunnel.

> Pass the Swift [virtualInterface](virtualinterface-7l3ol.md) property or the ObjectiveC [virtualInterface](virtualinterface-9fpgd.md) property to the [nw_parameters_require_interface(\_:\_:)](../../network/nw_parameters_require_interface%28____%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```swift
func createUDPSessionThroughTunnel(to remoteEndpoint: NWEndpoint, from localEndpoint: NWHostEndpoint?) -> NWUDPSession
```

## Parameters

- `remoteEndpoint`: The remote endpoint to send UDP datagrams to.
- `localEndpoint`: The local endpoint to bind the UDP session to. If nil, the UDP session will be bound to an ephemeral port on the virtual interface.

<a id="Discussion"></a>

## Discussion

Use this method to create a UDP session to an endpoint inside the private network.

## See Also

### Creating network connections through the tunnel

- [createTCPConnectionThroughTunnel(to:enableTLS:tlsParameters:delegate:)](createtcpconnectionthroughtunnel%28to_enabletls_tlsparameters_delegate_%29.md): Deprecated. Create a TCP connection through the current tunnel.

# createUDPSessionThroughTunnelToEndpoint:fromEndpoint: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Creates a UDP session through the current tunnel.

> Pass the Swift [virtualInterface](virtualinterface-7l3ol.md) property or the ObjectiveC [virtualInterface](virtualinterface-9fpgd.md) property to the [nw_parameters_require_interface](../../network/nw_parameters_require_interface%28____%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```objectivec
- (NWUDPSession *) createUDPSessionThroughTunnelToEndpoint:(NWEndpoint *) remoteEndpoint fromEndpoint:(NWHostEndpoint *) localEndpoint;
```

## Parameters

- `remoteEndpoint`: The remote endpoint to send UDP datagrams to.
- `localEndpoint`: The local endpoint to bind the UDP session to. If nil, the UDP session will be bound to an ephemeral port on the virtual interface.

<a id="Discussion"></a>

## Discussion

Use this method to create a UDP session to an endpoint inside the private network.

## See Also

### Creating network connections through the tunnel

- [createTCPConnectionThroughTunnelToEndpoint:enableTLS:TLSParameters:delegate:](createtcpconnectionthroughtunnel%28to_enabletls_tlsparameters_delegate_%29.md): Deprecated. Create a TCP connection through the current tunnel.
