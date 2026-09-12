> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gklocalplayer/presentfriendrequestcreator(from:)-7clh6](https://developer.apple.com/documentation/gamekit/gklocalplayer/presentfriendrequestcreator(from:)-7clh6)

# presentFriendRequestCreator(from:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Opens the Messages app with a sheet for the player to request friends.

## Declaration

```swift
func presentFriendRequestCreator(from window: NSWindow?) throws
```

## Parameters

- `window`: The window that’s the anchor for opening the Messages app.

<a id="Discussion"></a>

## Discussion

If this method throws an exception, it doesn’t open the Messages app.

## See Also

### Adding Friends

- [isPresentingFriendRequestViewController](ispresentingfriendrequestviewcontroller.md): A Boolean value that indicates whether your game presents the friends request view controller.
- [presentFriendRequestCreator(from:)](presentfriendrequestcreator%28from_%29-7j1kn.md): Presents a view controller with a Messages sheet for the player to request friends.

# presentFriendRequestCreatorFromWindow:error: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Opens the Messages app with a sheet for the player to request friends.

## Declaration

```objectivec
- (BOOL) presentFriendRequestCreatorFromWindow:(UIWindow *) window error:(NSError **) error;
```

```objectivec
- (BOOL) presentFriendRequestCreatorFromWindow:(NSWindow *) window error:(NSError **) error;
```

## Parameters

- `window`: The window that’s the anchor for opening the Messages app.
- `error`: Describes an error if it occurs, or `nil` if the operation completes.

<a id="return-value"></a>

## Return Value

[false](https://developer.apple.com/documentation/swift/false) if an error occurs; otherwise, [true](https://developer.apple.com/documentation/swift/true). If an error occurs, this method doesn’t open the Messages app.

<a id="Discussion"></a>

## Discussion

If this method throws an exception, it doesn’t open the Messages app.

## See Also

### Adding Friends

- [isPresentingFriendRequestViewController](ispresentingfriendrequestviewcontroller.md): A Boolean value that indicates whether your game presents the friends request view controller.
- [presentFriendRequestCreatorFromViewController:error:](presentfriendrequestcreator%28from_%29-7j1kn.md): Presents a view controller with a Messages sheet for the player to request friends.
