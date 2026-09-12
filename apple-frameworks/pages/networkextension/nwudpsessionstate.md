> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nwudpsessionstate](https://developer.apple.com/documentation/networkextension/nwudpsessionstate)

# NWUDPSessionState (Swift)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

> Use the [nw_connection_state_t](../network/nw_connection_state_t.md) type from the [Network](../network.md) framework instead.

## Declaration

```swift
enum NWUDPSessionState
```

## Topics

### Session States

- [NWUDPSessionState.invalid](nwudpsessionstate/invalid.md): Deprecated. The session is in an invalid or uninitialized state.
- [NWUDPSessionState.waiting](nwudpsessionstate/waiting.md): Deprecated. The session is waiting for better conditions before attempting to make the session ready.
- [NWUDPSessionState.preparing](nwudpsessionstate/preparing.md): Deprecated. The remote endpoint is being resolved.
- [NWUDPSessionState.ready](nwudpsessionstate/ready.md): Deprecated. The session is ready for reading and writing data.
- [NWUDPSessionState.failed](nwudpsessionstate/failed.md): Deprecated. None of the currently resolved endpoints can be used at this time, either due to problems with the path or the client rejecting the endpoints.
- [NWUDPSessionState.cancelled](nwudpsessionstate/cancelled.md): Deprecated. The session has been cancelled by the client calling `cancel`.

### Initializers

- [init(rawValue:)](nwudpsessionstate/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Monitoring the session state

- [state](nwudpsession/state.md): Deprecated. The current state of the UDP session.
- [isViable](nwudpsession/isviable.md): Deprecated. The viability of a UDP session represents whether or not data can be transferred.

# NWUDPSessionState (Objective-C)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

> Use the [nw_connection_state_t](../network/nw_connection_state_t.md) type from the [Network](../network.md) framework instead.

## Declaration

```objectivec
enum NWUDPSessionState : NSInteger;
```

## Topics

### Session States

- [NWUDPSessionStateInvalid](nwudpsessionstate/invalid.md): Deprecated. The session is in an invalid or uninitialized state.
- [NWUDPSessionStateWaiting](nwudpsessionstate/waiting.md): Deprecated. The session is waiting for better conditions before attempting to make the session ready.
- [NWUDPSessionStatePreparing](nwudpsessionstate/preparing.md): Deprecated. The remote endpoint is being resolved.
- [NWUDPSessionStateReady](nwudpsessionstate/ready.md): Deprecated. The session is ready for reading and writing data.
- [NWUDPSessionStateFailed](nwudpsessionstate/failed.md): Deprecated. None of the currently resolved endpoints can be used at this time, either due to problems with the path or the client rejecting the endpoints.
- [NWUDPSessionStateCancelled](nwudpsessionstate/cancelled.md): Deprecated. The session has been cancelled by the client calling `cancel`.

## See Also

### Monitoring the session state

- [state](nwudpsession/state.md): Deprecated. The current state of the UDP session.
- [viable](nwudpsession/isviable.md): Deprecated. The viability of a UDP session represents whether or not data can be transferred.
