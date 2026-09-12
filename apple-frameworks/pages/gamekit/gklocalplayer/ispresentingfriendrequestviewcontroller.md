> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gklocalplayer/ispresentingfriendrequestviewcontroller](https://developer.apple.com/documentation/gamekit/gklocalplayer/ispresentingfriendrequestviewcontroller)

# isPresentingFriendRequestViewController (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

A Boolean value that indicates whether your game presents the friends request view controller.

## Declaration

```swift
var isPresentingFriendRequestViewController: Bool { get }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the friends request view controller appears; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Adding Friends

- [presentFriendRequestCreator(from:)](presentfriendrequestcreator%28from_%29-7j1kn.md): Presents a view controller with a Messages sheet for the player to request friends.
- [presentFriendRequestCreator(from:)](presentfriendrequestcreator%28from_%29-7clh6.md): Opens the Messages app with a sheet for the player to request friends.

# isPresentingFriendRequestViewController (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

A Boolean value that indicates whether your game presents the friends request view controller.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL isPresentingFriendRequestViewController;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the friends request view controller appears; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Adding Friends

- [presentFriendRequestCreatorFromViewController:error:](presentfriendrequestcreator%28from_%29-7j1kn.md): Presents a view controller with a Messages sheet for the player to request friends.
- [presentFriendRequestCreatorFromWindow:error:](presentfriendrequestcreator%28from_%29-7clh6.md): Opens the Messages app with a sheet for the player to request friends.
