> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nwtcpconnection/state](https://developer.apple.com/documentation/networkextension/nwtcpconnection/state)

# state (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The status of the connection.

> Use the [nw_connection_set_state_changed_handler(\_:\_:)](../../network/nw_connection_set_state_changed_handler%28____%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```swift
var state: NWTCPConnectionState { get }
```

<a id="Discussion"></a>

## Discussion

Use Key-Value Observing (KVO) to monitor the state. Many methods, such as reading and writing on the connection, are only valid when the state is `NWTCPConnectionStateConnected`. For information about KVO, see [Key-Value Observing Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueObserving/KeyValueObserving.html#//apple_ref/doc/uid/10000177i).

## See Also

### Monitoring the connection status

- [NWTCPConnectionState](../nwtcpconnectionstate.md): Deprecated. Defined connection states. New types may be defined in the future.
- [isViable](isviable.md): Deprecated. The viability of a TCP connection indicates whether or not data can be transferred.
- [error](error.md): Deprecated. The connection-wide error property.

# state (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The status of the connection.

> Use the [nw_connection_set_state_changed_handler](../../network/nw_connection_set_state_changed_handler%28____%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```objectivec
@property (nonatomic, readonly) NWTCPConnectionState state;
```

<a id="Discussion"></a>

## Discussion

Use Key-Value Observing (KVO) to monitor the state. Many methods, such as reading and writing on the connection, are only valid when the state is `NWTCPConnectionStateConnected`. For information about KVO, see [Key-Value Observing Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueObserving/KeyValueObserving.html#//apple_ref/doc/uid/10000177i).

## See Also

### Monitoring the connection status

- [NWTCPConnectionState](../nwtcpconnectionstate.md): Deprecated. Defined connection states. New types may be defined in the future.
- [viable](isviable.md): Deprecated. The viability of a TCP connection indicates whether or not data can be transferred.
- [error](error.md): Deprecated. The connection-wide error property.
