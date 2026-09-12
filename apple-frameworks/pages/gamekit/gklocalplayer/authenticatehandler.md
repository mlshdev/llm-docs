> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gklocalplayer/authenticatehandler](https://developer.apple.com/documentation/gamekit/gklocalplayer/authenticatehandler)

# authenticateHandler (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A handler that GameKit calls while initializing the local player.

## Declaration

```swift
var authenticateHandler: ((UIViewController?, (any Error)?) -> Void)? { get set }
```

```swift
var authenticateHandler: ((NSViewController?, (any Error)?) -> Void)? { get set }
```

```swift
var authenticateHandler: (((any Error)?) -> Void)? { get set }
```

## Parameters

- `viewController`: A view controller that your game presents to the local player so they can perform any necessary actions to finish initialization, or `nil` if the initialization process is complete.
- `error`: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Authenticating a player](../authenticating-a-player.md)
- [Initializing and configuring Game Center](../initializing-and-configuring-game-center.md)

<a id="Discussion"></a>

## Discussion

Before you can access any Game Center data and use GameKit features, you need to initialize the local player to ensure the player signs in to Game Center on the device running your game. Set this property to a method that GameKit invokes during the initialization process. If `viewController` is `nil`, Game Center initializes the player and the player can start your game. Otherwise, present the view controller so the player can perform any additional actions to complete the process.

Game Center may show a brief initialization screen if the player isn’t already signed into Game Center.

For more information about initializing Game Center with a local player, see [Authenticating a player](../authenticating-a-player.md).

## See Also

### Authenticating the Local Player

- [isAuthenticated](isauthenticated.md): A Boolean value that indicates whether a local player has signed in to Game Center.
- [fetchItems(forIdentityVerificationSignature:)](fetchitems%28foridentityverificationsignature_%29.md): Generates a signature that you can use to authenticate the local player on your own server.
- [GKPlayerAuthenticationDidChangeNotificationName](../../foundation/nsnotification/name-swift.struct/gkplayerauthenticationdidchangenotificationname.md): A notification that posts after GameKit authenticates the local player.

# authenticateHandler (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A handler that GameKit calls while initializing the local player.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) void (^authenticateHandler)(UIViewController *viewController, NSError *error);
```

```objectivec
@property (atomic, copy, nullable) void (^)(NSViewController *, NSError *) authenticateHandler;
```

```objectivec
@property (atomic, copy, nullable) void (^)(NSError *) authenticateHandler;
```

## Parameters

- `viewController`: A view controller that your game presents to the local player so they can perform any necessary actions to finish initialization, or `nil` if the initialization process is complete.
- `error`: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Authenticating a player](../authenticating-a-player.md)
- [Initializing and configuring Game Center](../initializing-and-configuring-game-center.md)

<a id="Discussion"></a>

## Discussion

Before you can access any Game Center data and use GameKit features, you need to initialize the local player to ensure the player signs in to Game Center on the device running your game. Set this property to a method that GameKit invokes during the initialization process. If `viewController` is `nil`, Game Center initializes the player and the player can start your game. Otherwise, present the view controller so the player can perform any additional actions to complete the process.

Game Center may show a brief initialization screen if the player isn’t already signed into Game Center.

For more information about initializing Game Center with a local player, see [Authenticating a player](../authenticating-a-player.md).

## See Also

### Authenticating the Local Player

- [authenticated](isauthenticated.md): A Boolean value that indicates whether a local player has signed in to Game Center.
- [fetchItemsForIdentityVerificationSignature:](fetchitems%28foridentityverificationsignature_%29.md): Generates a signature that you can use to authenticate the local player on your own server.
- [GKPlayerAuthenticationDidChangeNotificationName](../gkplayerauthenticationdidchangenotificationname.md): A notification that posts after GameKit initializes the local player.
