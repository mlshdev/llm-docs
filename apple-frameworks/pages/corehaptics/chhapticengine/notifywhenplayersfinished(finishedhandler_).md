> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corehaptics/chhapticengine/notifywhenplayersfinished(finishedhandler:)

# notifyWhenPlayersFinished(finishedHandler:) (Swift)

**Framework:** Core Haptics  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Notifies you when all haptic pattern players have finished playing their haptic patterns.

## Declaration

```swift
func notifyWhenPlayersFinished(finishedHandler: @escaping CHHapticEngine.FinishedHandler)
```

## Parameters

- `finishedHandler`: A closure to execute when all players have finished playback.

## See Also

### Monitoring Finished Playback

- [CHHapticEngine.FinishedHandler](finishedhandler.md): A type alias for a completion handler to execute after finishing haptic playback.
- [CHHapticEngine.FinishedAction](finishedaction.md): Possible actions to take after the haptic engine finishes execution.

# notifyWhenPlayersFinished: (Objective-C)

**Framework:** Core Haptics  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Notifies you when all haptic pattern players have finished playing their haptic patterns.

## Declaration

```objectivec
- (void) notifyWhenPlayersFinished:(CHHapticEngineFinishedHandler) finishedHandler;
```

## Parameters

- `finishedHandler`: A closure to execute when all players have finished playback.

## See Also

### Monitoring Finished Playback

- [CHHapticEngineFinishedHandler](finishedhandler.md): A type alias for a completion handler to execute after finishing haptic playback.
- [CHHapticEngineFinishedAction](finishedaction.md): Possible actions to take after the haptic engine finishes execution.
