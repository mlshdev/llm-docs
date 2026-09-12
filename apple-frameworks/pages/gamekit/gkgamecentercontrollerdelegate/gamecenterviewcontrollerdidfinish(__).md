> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgamecentercontrollerdelegate/gamecenterviewcontrollerdidfinish(_:)](https://developer.apple.com/documentation/gamekit/gkgamecentercontrollerdelegate/gamecenterviewcontrollerdidfinish(_:))

# gameCenterViewControllerDidFinish(\_:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 26.0) · iPadOS 6.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.9+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

Handles when the player dismisses the dashboard.

## Declaration

```swift
func gameCenterViewControllerDidFinish(_ gameCenterViewController: GKGameCenterViewController)
```

## Parameters

- `gameCenterViewController`: The view controller that the player closes.

## Mentioned In

- [Displaying the Game Center dashboard](../displaying-the-game-center-dashboard.md)

<a id="Discussion"></a>

## Discussion

Implement this method to dismiss the Game Center view controller. If your game paused any gameplay or other activities, this method can restart those services.

# gameCenterViewControllerDidFinish: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 26.0) · iPadOS 6.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.9+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

Handles when the player dismisses the dashboard.

## Declaration

```objectivec
- (void) gameCenterViewControllerDidFinish:(GKGameCenterViewController *) gameCenterViewController;
```

## Parameters

- `gameCenterViewController`: The view controller that the player closes.

## Mentioned In

- [Displaying the Game Center dashboard](../displaying-the-game-center-dashboard.md)

<a id="Discussion"></a>

## Discussion

Implement this method to dismiss the Game Center view controller. If your game paused any gameplay or other activities, this method can restart those services.
