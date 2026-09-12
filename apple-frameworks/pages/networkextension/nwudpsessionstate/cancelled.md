> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nwudpsessionstate/cancelled](https://developer.apple.com/documentation/networkextension/nwudpsessionstate/cancelled)

# NWUDPSessionState.cancelled (Swift)

**Framework:** Network Extension  
**Kind:** Case  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The session has been cancelled by the client calling `cancel`.

> Use the [nw_connection_state_t](../../network/nw_connection_state_t.md) type from the [Network](../../network.md) framework instead.

## Declaration

```swift
case cancelled
```

## See Also

### Session States

- [NWUDPSessionState.invalid](invalid.md): Deprecated. The session is in an invalid or uninitialized state.
- [NWUDPSessionState.waiting](waiting.md): Deprecated. The session is waiting for better conditions before attempting to make the session ready.
- [NWUDPSessionState.preparing](preparing.md): Deprecated. The remote endpoint is being resolved.
- [NWUDPSessionState.ready](ready.md): Deprecated. The session is ready for reading and writing data.
- [NWUDPSessionState.failed](failed.md): Deprecated. None of the currently resolved endpoints can be used at this time, either due to problems with the path or the client rejecting the endpoints.

# NWUDPSessionStateCancelled (Objective-C)

**Framework:** Network Extension  
**Kind:** Enumeration Case  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The session has been cancelled by the client calling `cancel`.

> Use the [nw_connection_state_t](../../network/nw_connection_state_t.md) type from the [Network](../../network.md) framework instead.

## Declaration

```objectivec
NWUDPSessionStateCancelled
```

## See Also

### Session States

- [NWUDPSessionStateInvalid](invalid.md): Deprecated. The session is in an invalid or uninitialized state.
- [NWUDPSessionStateWaiting](waiting.md): Deprecated. The session is waiting for better conditions before attempting to make the session ready.
- [NWUDPSessionStatePreparing](preparing.md): Deprecated. The remote endpoint is being resolved.
- [NWUDPSessionStateReady](ready.md): Deprecated. The session is ready for reading and writing data.
- [NWUDPSessionStateFailed](failed.md): Deprecated. None of the currently resolved endpoints can be used at this time, either due to problems with the path or the client rejecting the endpoints.
