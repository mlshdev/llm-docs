> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/gamekit/gkaccesspoint/triggerforchallenges(handler:)

# triggerForChallenges(handler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Displays the view that allows players to engage each other with challenges.

## Declaration

```swift
func triggerForChallenges(handler: (@Sendable () -> Void)? = nil)
```

```swift
func triggerForChallenges() async
```

# triggerAccessPointForChallengesWithHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Displays the view that allows players to engage each other with challenges.

## Declaration

```objectivec
- (void) triggerAccessPointForChallengesWithHandler:(void (^)()) handler;
```
