> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkaccesspoint/trigger(gameactivity:handler:)-8i6w7](https://developer.apple.com/documentation/gamekit/gkaccesspoint/trigger(gameactivity:handler:)-8i6w7)

# trigger(gameActivity:handler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Displays the game activity view for the provided activity instance.

## Declaration

```swift
func trigger(gameActivity: GKGameActivity, handler: (@Sendable () -> Void)? = nil)
```

```swift
func trigger(gameActivity: GKGameActivity) async
```

# triggerAccessPointWithGameActivity:handler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Displays the game activity view for the provided activity instance.

## Declaration

```objectivec
- (void) triggerAccessPointWithGameActivity:(GKGameActivity *) gameActivity handler:(void (^)()) handler;
```
