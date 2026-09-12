> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgameactivitylistener/player(_:wantstoplay:completionhandler:)](https://developer.apple.com/documentation/gamekit/gkgameactivitylistener/player(_:wantstoplay:completionhandler:))

# player(\_:wantsToPlay:completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Called when a player intends to play for a specific game activity. A completion handler block is provided to indicate whether the activity was successfully handled.

## Declaration

```swift
optional func player(_ player: GKPlayer, wantsToPlay activity: GKGameActivity, completionHandler: @escaping @Sendable (Bool) -> Void)
```

```swift
optional func player(_ player: GKPlayer, wantsToPlay activity: GKGameActivity) async -> Bool
```

# player:wantsToPlayGameActivity:completionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Called when a player intends to play for a specific game activity. A completion handler block is provided to indicate whether the activity was successfully handled.

## Declaration

```objectivec
- (void) player:(GKPlayer *) player wantsToPlayGameActivity:(GKGameActivity *) activity completionHandler:(void (^)(BOOL handled)) completionHandler;
```
