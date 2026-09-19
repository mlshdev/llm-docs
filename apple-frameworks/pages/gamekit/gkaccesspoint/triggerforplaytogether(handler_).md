> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/gamekit/gkaccesspoint/triggerforplaytogether(handler:)

# triggerForPlayTogether(handler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Displays the view that allows players to engage each other with activities and challenges.

## Declaration

```swift
func triggerForPlayTogether(handler: (@Sendable () -> Void)? = nil)
```

```swift
func triggerForPlayTogether() async
```

## Mentioned In

- [Creating engaging challenges from leaderboards](../creating-engaging-challenges-from-leaderboards.md)

# triggerAccessPointForPlayTogetherWithHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Displays the view that allows players to engage each other with activities and challenges.

## Declaration

```objectivec
- (void) triggerAccessPointForPlayTogetherWithHandler:(void (^)()) handler;
```

## Mentioned In

- [Creating engaging challenges from leaderboards](../creating-engaging-challenges-from-leaderboards.md)
