> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticengine/finishedaction](https://developer.apple.com/documentation/corehaptics/chhapticengine/finishedaction)

# CHHapticEngine.FinishedAction (Swift)

**Framework:** Core Haptics  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS · tvOS 14.0+ · visionOS 1.0+

Possible actions to take after the haptic engine finishes execution.

## Declaration

```swift
enum FinishedAction
```

## Topics

### Finished Actions

- [CHHapticEngine.FinishedAction.leaveEngineRunning](finishedaction/leaveenginerunning.md): Keeps the engine running after it finishes playing all haptic patterns.
- [CHHapticEngine.FinishedAction.stopEngine](finishedaction/stopengine.md): Stops the engine after it finishes playing all haptic patterns.

### Initializers

- [init(rawValue:)](finishedaction/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Monitoring Finished Playback

- [notifyWhenPlayersFinished(finishedHandler:)](notifywhenplayersfinished%28finishedhandler_%29.md): Notifies you when all haptic pattern players have finished playing their haptic patterns.
- [CHHapticEngine.FinishedHandler](finishedhandler.md): A type alias for a completion handler to execute after finishing haptic playback.

# CHHapticEngineFinishedAction (Objective-C)

**Framework:** Core Haptics  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS · tvOS 14.0+ · visionOS 1.0+

Possible actions to take after the haptic engine finishes execution.

## Declaration

```objectivec
enum CHHapticEngineFinishedAction : NSInteger;
```

## Topics

### Finished Actions

- [CHHapticEngineFinishedActionLeaveEngineRunning](finishedaction/leaveenginerunning.md): Keeps the engine running after it finishes playing all haptic patterns.
- [CHHapticEngineFinishedActionStopEngine](finishedaction/stopengine.md): Stops the engine after it finishes playing all haptic patterns.

## See Also

### Monitoring Finished Playback

- [notifyWhenPlayersFinished:](notifywhenplayersfinished%28finishedhandler_%29.md): Notifies you when all haptic pattern players have finished playing their haptic patterns.
- [CHHapticEngineFinishedHandler](finishedhandler.md): A type alias for a completion handler to execute after finishing haptic playback.
