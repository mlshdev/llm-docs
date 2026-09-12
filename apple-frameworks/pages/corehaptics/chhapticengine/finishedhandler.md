> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticengine/finishedhandler](https://developer.apple.com/documentation/corehaptics/chhapticengine/finishedhandler)

# CHHapticEngine.FinishedHandler (Swift)

**Framework:** Core Haptics  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS · tvOS 14.0+ · visionOS 1.0+

A type alias for a completion handler to execute after finishing haptic playback.

## Declaration

```swift
typealias FinishedHandler = ((any Error)?) -> CHHapticEngine.FinishedAction
```

## See Also

### Monitoring Finished Playback

- [notifyWhenPlayersFinished(finishedHandler:)](notifywhenplayersfinished%28finishedhandler_%29.md): Notifies you when all haptic pattern players have finished playing their haptic patterns.
- [CHHapticEngine.FinishedAction](finishedaction.md): Possible actions to take after the haptic engine finishes execution.

# CHHapticEngineFinishedHandler (Objective-C)

**Framework:** Core Haptics  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS · tvOS 14.0+ · visionOS 1.0+

A type alias for a completion handler to execute after finishing haptic playback.

## Declaration

```objectivec
typedef enum CHHapticEngineFinishedAction (^)(NSError *) CHHapticEngineFinishedHandler;
```

## See Also

### Monitoring Finished Playback

- [notifyWhenPlayersFinished:](notifywhenplayersfinished%28finishedhandler_%29.md): Notifies you when all haptic pattern players have finished playing their haptic patterns.
- [CHHapticEngineFinishedAction](finishedaction.md): Possible actions to take after the haptic engine finishes execution.
