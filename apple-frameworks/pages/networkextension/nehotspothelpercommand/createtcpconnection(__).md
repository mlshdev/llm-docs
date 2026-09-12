> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nehotspothelpercommand/createtcpconnection(_:)](https://developer.apple.com/documentation/networkextension/nehotspothelpercommand/createtcpconnection(_:))

# createTCPConnection(\_:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Create a new TCP connection over the network associated with the command.

> Pass the Swift [interface](interface-46dq.md) property or the ObjectiveC [interface](interface-7rt15.md) property to the [nw_parameters_require_interface(\_:\_:)](../../network/nw_parameters_require_interface%28____%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```swift
func createTCPConnection(_ endpoint: NWEndpoint) -> NWTCPConnection
```

## Parameters

- `endpoint`: The remote host and port of the connection.

<a id="return-value"></a>

## Return Value

A TCP connection that will connect over the network associated with the command.

<a id="Discussion"></a>

## Discussion

The TCP connection is started automatically. Use KVO to observe the connection’s `state` property to be notified when the connection is established or fails.

## See Also

### Networking on the hotspot network

- [bind(to:)](../../foundation/nsmutableurlrequest/bind%28to_%29.md): Binds a URL request to the network interface associated with the hotspot helper command instance.
- [createUDPSession(\_:)](createudpsession%28__%29.md): Deprecated. Creates a new UDP session over the network associated with the command.

# createTCPConnection: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Create a new TCP connection over the network associated with the command.

> Pass the Swift [interface](interface-46dq.md) property or the ObjectiveC [interface](interface-7rt15.md) property to the [nw_parameters_require_interface](../../network/nw_parameters_require_interface%28____%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```objectivec
- (NWTCPConnection *) createTCPConnection:(NWEndpoint *) endpoint;
```

## Parameters

- `endpoint`: The remote host and port of the connection.

<a id="return-value"></a>

## Return Value

A TCP connection that will connect over the network associated with the command.

<a id="Discussion"></a>

## Discussion

The TCP connection is started automatically. Use KVO to observe the connection’s `state` property to be notified when the connection is established or fails.

## See Also

### Networking on the hotspot network

- [bindToHotspotHelperCommand:](../../foundation/nsmutableurlrequest/bind%28to_%29.md): Binds a URL request to the network interface associated with the hotspot helper command instance.
- [createUDPSession:](createudpsession%28__%29.md): Deprecated. Creates a new UDP session over the network associated with the command.
