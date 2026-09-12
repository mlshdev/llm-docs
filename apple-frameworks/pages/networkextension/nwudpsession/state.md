> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nwudpsession/state](https://developer.apple.com/documentation/networkextension/nwudpsession/state)

# state (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The current state of the UDP session.

> Use the [nw_connection_set_state_changed_handler(\_:\_:)](../../network/nw_connection_set_state_changed_handler%28____%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```swift
var state: NWUDPSessionState { get }
```

<a id="Discussion"></a>

## Discussion

Use Key-Value Observing (KVO) to monitor the state. If the state is `NWUDPSessionStateReady`, then the connection is eligible for reading and writing. The state will be `NWUDPSessionStateFailed` if the endpoint could not be resolved, or all endpoints have been rejected. For information about KVO, see [Key-Value Observing Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueObserving/KeyValueObserving.html#//apple_ref/doc/uid/10000177i).

## See Also

### Monitoring the session state

- [NWUDPSessionState](../nwudpsessionstate.md): Deprecated.
- [isViable](isviable.md): Deprecated. The viability of a UDP session represents whether or not data can be transferred.

# state (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The current state of the UDP session.

> Use the [nw_connection_set_state_changed_handler](../../network/nw_connection_set_state_changed_handler%28____%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```objectivec
@property (nonatomic, readonly) NWUDPSessionState state;
```

<a id="Discussion"></a>

## Discussion

Use Key-Value Observing (KVO) to monitor the state. If the state is `NWUDPSessionStateReady`, then the connection is eligible for reading and writing. The state will be `NWUDPSessionStateFailed` if the endpoint could not be resolved, or all endpoints have been rejected. For information about KVO, see [Key-Value Observing Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueObserving/KeyValueObserving.html#//apple_ref/doc/uid/10000177i).

## See Also

### Monitoring the session state

- [NWUDPSessionState](../nwudpsessionstate.md): Deprecated.
- [viable](isviable.md): Deprecated. The viability of a UDP session represents whether or not data can be transferred.
