> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nwtcpconnection/init(upgradefor:)](https://developer.apple.com/documentation/networkextension/nwtcpconnection/init(upgradefor:))

# init(upgradeFor:) (Swift)

**Framework:** Network Extension  
**Kind:** Initializer  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

This convenience initializer can be used to create a new connection that will only be connected if there exists a better path (as determined by the system) to the remote endpoint of the original connection.

> Use the [nw_connection_create(\_:\_:)](../../network/nw_connection_create%28____%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```swift
init(upgradeFor connection: NWTCPConnection)
```

<a id="Discussion"></a>

## Discussion

An upgraded connection will be initialized using the same remote endpoint and set of parameters from the original connection. If the original connection becomes disconnected or cancelled, the new upgrade connection will automatically be considered better.

The caller should create an [NWTCPConnection](../nwtcpconnection.md) and watch for the `hasBetterPath` property. When this property is [true](https://developer.apple.com/documentation/swift/true), the caller should attempt to create a new upgrade connection, with the goal to start transferring data on the new connection path as soon as possible to reduce power and avoid expensive networks. When the new connection is successfully connected the caller can start using the new connection and cancel the original one.

## See Also

### Responding to network changes

- [hasBetterPath](hasbetterpath.md): Deprecated. If a connection has a better path, new connections would use a different interface.

# initWithUpgradeForConnection: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

This convenience initializer can be used to create a new connection that will only be connected if there exists a better path (as determined by the system) to the remote endpoint of the original connection.

> Use the [nw_connection_create](../../network/nw_connection_create%28____%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```objectivec
- (instancetype) initWithUpgradeForConnection:(NWTCPConnection *) connection;
```

<a id="Discussion"></a>

## Discussion

An upgraded connection will be initialized using the same remote endpoint and set of parameters from the original connection. If the original connection becomes disconnected or cancelled, the new upgrade connection will automatically be considered better.

The caller should create an [NWTCPConnection](../nwtcpconnection.md) and watch for the `hasBetterPath` property. When this property is [true](https://developer.apple.com/documentation/swift/true), the caller should attempt to create a new upgrade connection, with the goal to start transferring data on the new connection path as soon as possible to reduce power and avoid expensive networks. When the new connection is successfully connected the caller can start using the new connection and cancel the original one.

## See Also

### Responding to network changes

- [hasBetterPath](hasbetterpath.md): Deprecated. If a connection has a better path, new connections would use a different interface.
