> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkfriendrequestcomposeviewcontrollerdelegate/friendrequestcomposeviewcontrollerdidfinish(_:)](https://developer.apple.com/documentation/gamekit/gkfriendrequestcomposeviewcontrollerdelegate/friendrequestcomposeviewcontrollerdidfinish(_:))

# friendRequestComposeViewControllerDidFinish(\_:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ (deprecated in 10.0) · iPadOS 4.2+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.12) · visionOS 1.0+ (deprecated in 1.0)

Called when the player dismisses the request.

> No longer supported.

## Declaration

```swift
func friendRequestComposeViewControllerDidFinish(_ viewController: GKFriendRequestComposeViewController)
```

## Parameters

- `viewController`: The friend request view controller that was dismissed by the player.

<a id="Discussion"></a>

## Discussion

Your delegate should dismiss the view controller. If your game paused any gameplay or other activities, it can restart those services in this method.

# friendRequestComposeViewControllerDidFinish: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ (deprecated in 10.0) · iPadOS 4.2+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.12) · visionOS 1.0+ (deprecated in 1.0)

Called when the player dismisses the request.

> No longer supported.

## Declaration

```objectivec
- (void) friendRequestComposeViewControllerDidFinish:(GKFriendRequestComposeViewController *) viewController;
```

## Parameters

- `viewController`: The friend request view controller that was dismissed by the player.

<a id="Discussion"></a>

## Discussion

Your delegate should dismiss the view controller. If your game paused any gameplay or other activities, it can restart those services in this method.
