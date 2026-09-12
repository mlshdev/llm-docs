> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgameactivity/state-swift.enum](https://developer.apple.com/documentation/gamekit/gkgameactivity/state-swift.enum)

# GKGameActivity.State (Swift)

**Framework:** GameKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The state of a game activity.

## Declaration

```swift
enum State
```

## Topics

### Enumeration Cases

- [GKGameActivity.State.active](state-swift.enum/active.md): The game activity is active.
- [GKGameActivity.State.ended](state-swift.enum/ended.md): The game activity has ended. This is a terminal state.
- [GKGameActivity.State.initialized](state-swift.enum/initialized.md): The game activity is initialized but has not started.
- [GKGameActivity.State.paused](state-swift.enum/paused.md): The game activity is paused.

### Initializers

- [init(rawValue:)](state-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the activity state

- [state](state-swift.property.md): The state of the game activity.

# GKGameActivityState (Objective-C)

**Framework:** GameKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The state of a game activity.

## Declaration

```objectivec
enum GKGameActivityState : NSUInteger;
```

## Topics

### Enumeration Cases

- [GKGameActivityStateActive](state-swift.enum/active.md): The game activity is active.
- [GKGameActivityStateEnded](state-swift.enum/ended.md): The game activity has ended. This is a terminal state.
- [GKGameActivityStateInitialized](state-swift.enum/initialized.md): The game activity is initialized but has not started.
- [GKGameActivityStatePaused](state-swift.enum/paused.md): The game activity is paused.

## See Also

### Getting the activity state

- [state](state-swift.property.md): The state of the game activity.
