> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nwtcpconnectionstate](https://developer.apple.com/documentation/networkextension/nwtcpconnectionstate)

# NWTCPConnectionState (Swift)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Defined connection states. New types may be defined in the future.

> Use the [nw_connection_state_t](../network/nw_connection_state_t.md) type from the [Network](../network.md) framework instead.

## Declaration

```swift
enum NWTCPConnectionState
```

## Topics

### Connection States

- [NWTCPConnectionState.invalid](nwtcpconnectionstate/invalid.md): Deprecated. The connection is in an invalid or uninitialized state.
- [NWTCPConnectionState.connecting](nwtcpconnectionstate/connecting.md): Deprecated. The connection is attempting to connect. This includes endpoint resolution when applicable.
- [NWTCPConnectionState.waiting](nwtcpconnectionstate/waiting.md): Deprecated. The connection has attempted to connect but failed. It is now waiting for better conditions before trying again.
- [NWTCPConnectionState.connected](nwtcpconnectionstate/connected.md): Deprecated. The connection is established. It is now possible to transfer data. If TLS is in use, the TLS handshake has finished.
- [NWTCPConnectionState.disconnected](nwtcpconnectionstate/disconnected.md): Deprecated. The connection is disconnected. It is no longer possible to transfer data. The application should call `cancel` to clean up resources.
- [NWTCPConnectionState.cancelled](nwtcpconnectionstate/cancelled.md): Deprecated. The connection has been cancelled by the client calling `cancel`.

### Initializers

- [init(rawValue:)](nwtcpconnectionstate/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Monitoring the connection status

- [state](nwtcpconnection/state.md): Deprecated. The status of the connection.
- [isViable](nwtcpconnection/isviable.md): Deprecated. The viability of a TCP connection indicates whether or not data can be transferred.
- [error](nwtcpconnection/error.md): Deprecated. The connection-wide error property.

# NWTCPConnectionState (Objective-C)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Defined connection states. New types may be defined in the future.

> Use the [nw_connection_state_t](../network/nw_connection_state_t.md) type from the [Network](../network.md) framework instead.

## Declaration

```objectivec
enum NWTCPConnectionState : NSInteger;
```

## Topics

### Connection States

- [NWTCPConnectionStateInvalid](nwtcpconnectionstate/invalid.md): Deprecated. The connection is in an invalid or uninitialized state.
- [NWTCPConnectionStateConnecting](nwtcpconnectionstate/connecting.md): Deprecated. The connection is attempting to connect. This includes endpoint resolution when applicable.
- [NWTCPConnectionStateWaiting](nwtcpconnectionstate/waiting.md): Deprecated. The connection has attempted to connect but failed. It is now waiting for better conditions before trying again.
- [NWTCPConnectionStateConnected](nwtcpconnectionstate/connected.md): Deprecated. The connection is established. It is now possible to transfer data. If TLS is in use, the TLS handshake has finished.
- [NWTCPConnectionStateDisconnected](nwtcpconnectionstate/disconnected.md): Deprecated. The connection is disconnected. It is no longer possible to transfer data. The application should call `cancel` to clean up resources.
- [NWTCPConnectionStateCancelled](nwtcpconnectionstate/cancelled.md): Deprecated. The connection has been cancelled by the client calling `cancel`.

## See Also

### Monitoring the connection status

- [state](nwtcpconnection/state.md): Deprecated. The status of the connection.
- [viable](nwtcpconnection/isviable.md): Deprecated. The viability of a TCP connection indicates whether or not data can be transferred.
- [error](nwtcpconnection/error.md): Deprecated. The connection-wide error property.
