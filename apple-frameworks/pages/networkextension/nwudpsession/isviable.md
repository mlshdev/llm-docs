> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nwudpsession/isviable](https://developer.apple.com/documentation/networkextension/nwudpsession/isviable)

# isViable (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The viability of a UDP session represents whether or not data can be transferred.

> Use the [nw_connection_set_viability_changed_handler(\_:\_:)](../../network/nw_connection_set_viability_changed_handler%28____%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```swift
var isViable: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Evaluates to [true](https://developer.apple.com/documentation/swift/true) if the session can read and write data, [false](https://developer.apple.com/documentation/swift/false) otherwise. Use Key-Value Observing to watch this property.

## See Also

### Monitoring the session state

- [state](state.md): Deprecated. The current state of the UDP session.
- [NWUDPSessionState](../nwudpsessionstate.md): Deprecated.

# viable (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The viability of a UDP session represents whether or not data can be transferred.

> Use the [nw_connection_set_viability_changed_handler](../../network/nw_connection_set_viability_changed_handler%28____%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isViable) BOOL viable;
```

<a id="Discussion"></a>

## Discussion

Evaluates to [true](https://developer.apple.com/documentation/swift/true) if the session can read and write data, [false](https://developer.apple.com/documentation/swift/false) otherwise. Use Key-Value Observing to watch this property.

## See Also

### Monitoring the session state

- [state](state.md): Deprecated. The current state of the UDP session.
- [NWUDPSessionState](../nwudpsessionstate.md): Deprecated.
