> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gklocalplayer/presentfriendrequestcreator(from:)-7j1kn](https://developer.apple.com/documentation/gamekit/gklocalplayer/presentfriendrequestcreator(from:)-7j1kn)

# presentFriendRequestCreator(from:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

Presents a view controller with a Messages sheet for the player to request friends.

## Declaration

```swift
func presentFriendRequestCreator(from viewController: UIViewController) throws
```

## Parameters

- `viewController`: The view controller that contains the Messages sheet, and that this method presents.

## Mentioned In

- [Connecting players with their friends in your game](../connecting-players-with-their-friends-in-your-game.md)

<a id="Discussion"></a>

## Discussion

If this method throws an exception, it doesn’t present the view controller.

## See Also

### Adding Friends

- [isPresentingFriendRequestViewController](ispresentingfriendrequestviewcontroller.md): A Boolean value that indicates whether your game presents the friends request view controller.
- [presentFriendRequestCreator(from:)](presentfriendrequestcreator%28from_%29-7clh6.md): Opens the Messages app with a sheet for the player to request friends.

# presentFriendRequestCreatorFromViewController:error: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · visionOS 1.0+

Presents a view controller with a Messages sheet for the player to request friends.

## Declaration

```objectivec
- (BOOL) presentFriendRequestCreatorFromViewController:(UIViewController *) viewController error:(NSError **) error;
```

```objectivec
- (BOOL) presentFriendRequestCreatorFromViewController:(NSViewController *) viewController error:(NSError **) error;
```

## Parameters

- `viewController`: The view controller that contains the Messages sheet, and that this method presents.
- `error`: Describes an error if it occurs, or `nil` if the operation completes.

<a id="return-value"></a>

## Return Value

[false](https://developer.apple.com/documentation/swift/false) if an error occurs; otherwise, [true](https://developer.apple.com/documentation/swift/true). If an error occurs, this method doesn’t present the view controller.

## Mentioned In

- [Connecting players with their friends in your game](../connecting-players-with-their-friends-in-your-game.md)

<a id="Discussion"></a>

## Discussion

If this method throws an exception, it doesn’t present the view controller.

## See Also

### Adding Friends

- [isPresentingFriendRequestViewController](ispresentingfriendrequestviewcontroller.md): A Boolean value that indicates whether your game presents the friends request view controller.
- [presentFriendRequestCreatorFromWindow:error:](presentfriendrequestcreator%28from_%29-7clh6.md): Opens the Messages app with a sheet for the player to request friends.
