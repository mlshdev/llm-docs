> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nwtcpconnection/error](https://developer.apple.com/documentation/networkextension/nwtcpconnection/error)

# error (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The connection-wide error property.

> Use the [nw_connection_set_state_changed_handler(\_:\_:)](../../network/nw_connection_set_state_changed_handler%28____%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```swift
var error: (any Error)? { get }
```

<a id="Discussion"></a>

## Discussion

Indicates any fatal error that occurred while processing the connection or performing data reading or writing. Use Key-Value Observing to watch this property.

## See Also

### Monitoring the connection status

- [state](state.md): Deprecated. The status of the connection.
- [NWTCPConnectionState](../nwtcpconnectionstate.md): Deprecated. Defined connection states. New types may be defined in the future.
- [isViable](isviable.md): Deprecated. The viability of a TCP connection indicates whether or not data can be transferred.

# error (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The connection-wide error property.

> Use the [nw_connection_set_state_changed_handler](../../network/nw_connection_set_state_changed_handler%28____%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSError * error;
```

<a id="Discussion"></a>

## Discussion

Indicates any fatal error that occurred while processing the connection or performing data reading or writing. Use Key-Value Observing to watch this property.

## See Also

### Monitoring the connection status

- [state](state.md): Deprecated. The status of the connection.
- [NWTCPConnectionState](../nwtcpconnectionstate.md): Deprecated. Defined connection states. New types may be defined in the future.
- [viable](isviable.md): Deprecated. The viability of a TCP connection indicates whether or not data can be transferred.
