> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/gameplaykit/gkstatemachine/state(forclass:)

# state(forClass:)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 9.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```swift
func state<StateType>(forClass stateClass: StateType.Type) -> StateType? where StateType : GKState
```
