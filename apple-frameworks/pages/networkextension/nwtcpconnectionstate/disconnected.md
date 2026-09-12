> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nwtcpconnectionstate/disconnected](https://developer.apple.com/documentation/networkextension/nwtcpconnectionstate/disconnected)

# NWTCPConnectionState.disconnected (Swift)

**Framework:** Network Extension  
**Kind:** Case  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The connection is disconnected. It is no longer possible to transfer data. The application should call `cancel` to clean up resources.

> Use the [nw_connection_state_t](../../network/nw_connection_state_t.md) type from the [Network](../../network.md) framework instead.

## Declaration

```swift
case disconnected
```

## See Also

### Connection States

- [NWTCPConnectionState.invalid](invalid.md): Deprecated. The connection is in an invalid or uninitialized state.
- [NWTCPConnectionState.connecting](connecting.md): Deprecated. The connection is attempting to connect. This includes endpoint resolution when applicable.
- [NWTCPConnectionState.waiting](waiting.md): Deprecated. The connection has attempted to connect but failed. It is now waiting for better conditions before trying again.
- [NWTCPConnectionState.connected](connected.md): Deprecated. The connection is established. It is now possible to transfer data. If TLS is in use, the TLS handshake has finished.
- [NWTCPConnectionState.cancelled](cancelled.md): Deprecated. The connection has been cancelled by the client calling `cancel`.

# NWTCPConnectionStateDisconnected (Objective-C)

**Framework:** Network Extension  
**Kind:** Enumeration Case  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The connection is disconnected. It is no longer possible to transfer data. The application should call `cancel` to clean up resources.

> Use the [nw_connection_state_t](../../network/nw_connection_state_t.md) type from the [Network](../../network.md) framework instead.

## Declaration

```objectivec
NWTCPConnectionStateDisconnected
```

## See Also

### Connection States

- [NWTCPConnectionStateInvalid](invalid.md): Deprecated. The connection is in an invalid or uninitialized state.
- [NWTCPConnectionStateConnecting](connecting.md): Deprecated. The connection is attempting to connect. This includes endpoint resolution when applicable.
- [NWTCPConnectionStateWaiting](waiting.md): Deprecated. The connection has attempted to connect but failed. It is now waiting for better conditions before trying again.
- [NWTCPConnectionStateConnected](connected.md): Deprecated. The connection is established. It is now possible to transfer data. If TLS is in use, the TLS handshake has finished.
- [NWTCPConnectionStateCancelled](cancelled.md): Deprecated. The connection has been cancelled by the client calling `cancel`.
