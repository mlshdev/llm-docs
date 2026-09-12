> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gklocalplayer/isauthenticated](https://developer.apple.com/documentation/gamekit/gklocalplayer/isauthenticated)

# isAuthenticated (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A Boolean value that indicates whether a local player has signed in to Game Center.

## Declaration

```swift
var isAuthenticated: Bool { get }
```

## Mentioned In

- [Authenticating a player](../authenticating-a-player.md)

## See Also

### Authenticating the Local Player

- [authenticateHandler](authenticatehandler.md): A handler that GameKit calls while initializing the local player.
- [fetchItems(forIdentityVerificationSignature:)](fetchitems%28foridentityverificationsignature_%29.md): Generates a signature that you can use to authenticate the local player on your own server.
- [GKPlayerAuthenticationDidChangeNotificationName](../../foundation/nsnotification/name-swift.struct/gkplayerauthenticationdidchangenotificationname.md): A notification that posts after GameKit authenticates the local player.

# authenticated (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A Boolean value that indicates whether a local player has signed in to Game Center.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isAuthenticated) BOOL authenticated;
```

```objectivec
@property (atomic, readonly, getter=isAuthenticated) BOOL authenticated;
```

## Mentioned In

- [Authenticating a player](../authenticating-a-player.md)

## See Also

### Authenticating the Local Player

- [authenticateHandler](authenticatehandler.md): A handler that GameKit calls while initializing the local player.
- [fetchItemsForIdentityVerificationSignature:](fetchitems%28foridentityverificationsignature_%29.md): Generates a signature that you can use to authenticate the local player on your own server.
- [GKPlayerAuthenticationDidChangeNotificationName](../gkplayerauthenticationdidchangenotificationname.md): A notification that posts after GameKit initializes the local player.
