> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nwudpsession/init(upgradefor:)](https://developer.apple.com/documentation/networkextension/nwudpsession/init(upgradefor:))

# init(upgradeFor:) (Swift)

**Framework:** Network Extension  
**Kind:** Initializer  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

This convenience initializer can be used to create a new session based on the original session’s endpoint and parameters.

> Use the [nw_connection_create(\_:\_:)](../../network/nw_connection_create%28____%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```swift
init(upgradeFor session: NWUDPSession)
```

<a id="Discussion"></a>

## Discussion

The caller should watch the `hasBetterPath` property on an existing [NWUDPSession](../nwudpsession.md) object. When `hasBetterPath` is [true](https://developer.apple.com/documentation/swift/true), the caller should call `initWithUpgradeForSession:` to create a new session, then start transferring data on the new session as soon as possible to reduce power and and avoid expensive networks. When the new session is ready, the application can start using the new session and tear down the original one.

## See Also

### Responding to network changes

- [hasBetterPath](hasbetterpath.md): Deprecated. If a session has a better path, new session would use a different interface.

# initWithUpgradeForSession: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

This convenience initializer can be used to create a new session based on the original session’s endpoint and parameters.

> Use the [nw_connection_create](../../network/nw_connection_create%28____%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```objectivec
- (instancetype) initWithUpgradeForSession:(NWUDPSession *) session;
```

<a id="Discussion"></a>

## Discussion

The caller should watch the `hasBetterPath` property on an existing [NWUDPSession](../nwudpsession.md) object. When `hasBetterPath` is [true](https://developer.apple.com/documentation/swift/true), the caller should call `initWithUpgradeForSession:` to create a new session, then start transferring data on the new session as soon as possible to reduce power and and avoid expensive networks. When the new session is ready, the application can start using the new session and tear down the original one.

## See Also

### Responding to network changes

- [hasBetterPath](hasbetterpath.md): Deprecated. If a session has a better path, new session would use a different interface.
