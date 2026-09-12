> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nehotspothelpercommand/createudpsession(_:)](https://developer.apple.com/documentation/networkextension/nehotspothelpercommand/createudpsession(_:))

# createUDPSession(\_:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Creates a new UDP session over the network associated with the command.

> Pass the Swift [interface](interface-46dq.md) property or the ObjectiveC [interface](interface-7rt15.md) property to the [nw_parameters_require_interface(\_:\_:)](../../network/nw_parameters_require_interface%28____%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```swift
func createUDPSession(_ endpoint: NWEndpoint) -> NWUDPSession
```

## Parameters

- `endpoint`: The remote host and port of the session.

<a id="return-value"></a>

## Return Value

A UDP session that will connect over the network associated with the command.

<a id="Discussion"></a>

## Discussion

The UDP session is started automatically. Use KVO to observe the session’s state property to be notified when the session is ready to send and receive UDP datagrams. For information about KVO see [Key-Value Observing Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueObserving/KeyValueObserving.html#//apple_ref/doc/uid/10000177i).

## See Also

### Networking on the hotspot network

- [bind(to:)](../../foundation/nsmutableurlrequest/bind%28to_%29.md): Binds a URL request to the network interface associated with the hotspot helper command instance.
- [createTCPConnection(\_:)](createtcpconnection%28__%29.md): Deprecated. Create a new TCP connection over the network associated with the command.

# createUDPSession: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Creates a new UDP session over the network associated with the command.

> Pass the Swift [interface](interface-46dq.md) property or the ObjectiveC [interface](interface-7rt15.md) property to the [nw_parameters_require_interface](../../network/nw_parameters_require_interface%28____%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```objectivec
- (NWUDPSession *) createUDPSession:(NWEndpoint *) endpoint;
```

## Parameters

- `endpoint`: The remote host and port of the session.

<a id="return-value"></a>

## Return Value

A UDP session that will connect over the network associated with the command.

<a id="Discussion"></a>

## Discussion

The UDP session is started automatically. Use KVO to observe the session’s state property to be notified when the session is ready to send and receive UDP datagrams. For information about KVO see [Key-Value Observing Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueObserving/KeyValueObserving.html#//apple_ref/doc/uid/10000177i).

## See Also

### Networking on the hotspot network

- [bindToHotspotHelperCommand:](../../foundation/nsmutableurlrequest/bind%28to_%29.md): Binds a URL request to the network interface associated with the hotspot helper command instance.
- [createTCPConnection:](createtcpconnection%28__%29.md): Deprecated. Create a new TCP connection over the network associated with the command.
