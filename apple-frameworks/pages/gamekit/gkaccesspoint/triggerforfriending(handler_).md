> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/gamekit/gkaccesspoint/triggerforfriending(handler:)

# triggerForFriending(handler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Brings up the invite friends view.

## Declaration

```swift
func triggerForFriending(handler: (@Sendable () -> Void)? = nil)
```

```swift
func triggerForFriending() async
```

# triggerAccessPointForFriendingWithHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Brings up the invite friends view.

## Declaration

```objectivec
- (void) triggerAccessPointForFriendingWithHandler:(void (^)()) handler;
```
