> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nwudpsession/hasbetterpath](https://developer.apple.com/documentation/networkextension/nwudpsession/hasbetterpath)

# hasBetterPath (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

If a session has a better path, new session would use a different interface.

> Use the [nw_connection_set_better_path_available_handler(\_:\_:)](../../network/nw_connection_set_better_path_available_handler%28____%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```swift
var hasBetterPath: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Evaluates to [true](https://developer.apple.com/documentation/swift/true) if a new session to the remote endpoint would use a different and preferred path. If the current session is not viable, this can be used as a hint to try again. If the current session is still viable, this can indicate that the system or user has a preference for the newly available network path. For example, if the session is established over a cellular data network and Wi-Fi is now available, then the session has a better path available and this property is set to [true](https://developer.apple.com/documentation/swift/true). Use the `initWithUpgradeForSession:` initializer to create a new session with the same parameters as the current session. Use Key-Value Observing to watch this property.

## See Also

### Related Documentation

- [isViable](isviable.md): Deprecated. The viability of a UDP session represents whether or not data can be transferred.

### Responding to network changes

- [init(upgradeFor:)](init%28upgradefor_%29.md): Deprecated. This convenience initializer can be used to create a new session based on the original session’s endpoint and parameters.

# hasBetterPath (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

If a session has a better path, new session would use a different interface.

> Use the [nw_connection_set_better_path_available_handler](../../network/nw_connection_set_better_path_available_handler%28____%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL hasBetterPath;
```

<a id="Discussion"></a>

## Discussion

Evaluates to [true](https://developer.apple.com/documentation/swift/true) if a new session to the remote endpoint would use a different and preferred path. If the current session is not viable, this can be used as a hint to try again. If the current session is still viable, this can indicate that the system or user has a preference for the newly available network path. For example, if the session is established over a cellular data network and Wi-Fi is now available, then the session has a better path available and this property is set to [true](https://developer.apple.com/documentation/swift/true). Use the `initWithUpgradeForSession:` initializer to create a new session with the same parameters as the current session. Use Key-Value Observing to watch this property.

## See Also

### Related Documentation

- [viable](isviable.md): Deprecated. The viability of a UDP session represents whether or not data can be transferred.

### Responding to network changes

- [initWithUpgradeForSession:](init%28upgradefor_%29.md): Deprecated. This convenience initializer can be used to create a new session based on the original session’s endpoint and parameters.
