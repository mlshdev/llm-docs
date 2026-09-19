> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/gamekit/gkaccesspoint/triggerforarcade(handler:)

# triggerForArcade(handler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+

Brings up the Arcade dashboard.

## Declaration

```swift
func triggerForArcade(handler: (@Sendable () -> Void)? = nil)
```

```swift
func triggerForArcade() async
```

# triggerAccessPointForArcadeWithHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+

Brings up the Arcade dashboard.

## Declaration

```objectivec
- (void) triggerAccessPointForArcadeWithHandler:(void (^)()) handler;
```
