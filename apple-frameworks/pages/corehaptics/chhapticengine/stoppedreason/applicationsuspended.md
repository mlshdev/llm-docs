> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticengine/stoppedreason/applicationsuspended](https://developer.apple.com/documentation/corehaptics/chhapticengine/stoppedreason/applicationsuspended)

# CHHapticEngine.StoppedReason.applicationSuspended (Swift)

**Framework:** Core Haptics  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS · tvOS 14.0+ · visionOS 1.0+

The system suspended your app.

## Declaration

```swift
case applicationSuspended
```

<a id="Discussion"></a>

## Discussion

This condition occurs if the system suspended your app while it was in the background. Restart the engine when your app returns to the foreground to ensure proper haptic playback.

## See Also

### Stopped Reasons

- [CHHapticEngine.StoppedReason.audioSessionInterrupt](audiosessioninterrupt.md): The system interrupted the audio session.
- [CHHapticEngine.StoppedReason.engineDestroyed](enginedestroyed.md): The system destroyed the engine.
- [CHHapticEngine.StoppedReason.gameControllerDisconnect](gamecontrollerdisconnect.md): The engine stopped because the associated game controller disconnected from the device.
- [CHHapticEngine.StoppedReason.idleTimeout](idletimeout.md): The engine shut down because you’ve enabled automatic shutdown, and the engine reached its idle timeout.
- [CHHapticEngine.StoppedReason.notifyWhenFinished](notifywhenfinished.md): You’ve asked the system to notify you when it shuts down the engine.
- [CHHapticEngine.StoppedReason.systemError](systemerror.md): A system error stopped the engine.

# CHHapticEngineStoppedReasonApplicationSuspended (Objective-C)

**Framework:** Core Haptics  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS · tvOS 14.0+ · visionOS 1.0+

The system suspended your app.

## Declaration

```objectivec
CHHapticEngineStoppedReasonApplicationSuspended
```

<a id="Discussion"></a>

## Discussion

This condition occurs if the system suspended your app while it was in the background. Restart the engine when your app returns to the foreground to ensure proper haptic playback.

## See Also

### Stopped Reasons

- [CHHapticEngineStoppedReasonAudioSessionInterrupt](audiosessioninterrupt.md): The system interrupted the audio session.
- [CHHapticEngineStoppedReasonEngineDestroyed](enginedestroyed.md): The system destroyed the engine.
- [CHHapticEngineStoppedReasonGameControllerDisconnect](gamecontrollerdisconnect.md): The engine stopped because the associated game controller disconnected from the device.
- [CHHapticEngineStoppedReasonIdleTimeout](idletimeout.md): The engine shut down because you’ve enabled automatic shutdown, and the engine reached its idle timeout.
- [CHHapticEngineStoppedReasonNotifyWhenFinished](notifywhenfinished.md): You’ve asked the system to notify you when it shuts down the engine.
- [CHHapticEngineStoppedReasonSystemError](systemerror.md): A system error stopped the engine.
