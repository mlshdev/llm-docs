> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkfriendrequestcomposeviewcontroller/composeviewdelegate](https://developer.apple.com/documentation/gamekit/gkfriendrequestcomposeviewcontroller/composeviewdelegate)

# composeViewDelegate (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ (deprecated in 10.0) · iPadOS 4.2+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.12) · visionOS 1.0+ (deprecated in 1.0)

The view controller’s delegate

> No longer supported.

## Declaration

```swift
weak var composeViewDelegate: (any GKFriendRequestComposeViewControllerDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

Before displaying the friend request, your game must set a delegate.

# composeViewDelegate (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ (deprecated in 10.0) · iPadOS 4.2+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.12) · visionOS 1.0+ (deprecated in 1.0)

The view controller’s delegate

> No longer supported.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<GKFriendRequestComposeViewControllerDelegate> composeViewDelegate;
```

<a id="Discussion"></a>

## Discussion

Before displaying the friend request, your game must set a delegate.
