> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticengine/stoppedreason/notifywhenfinished](https://developer.apple.com/documentation/corehaptics/chhapticengine/stoppedreason/notifywhenfinished)

# CHHapticEngine.StoppedReason.notifyWhenFinished (Swift)

**Framework:** Core Haptics  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS · tvOS 14.0+ · visionOS 1.0+

You’ve asked the system to notify you when it shuts down the engine.

## Declaration

```swift
case notifyWhenFinished
```

<a id="Discussion"></a>

## Discussion

Restart the engine before starting another pattern player.

## See Also

### Stopped Reasons

- [CHHapticEngine.StoppedReason.audioSessionInterrupt](audiosessioninterrupt.md): The system interrupted the audio session.
- [CHHapticEngine.StoppedReason.applicationSuspended](applicationsuspended.md): The system suspended your app.
- [CHHapticEngine.StoppedReason.engineDestroyed](enginedestroyed.md): The system destroyed the engine.
- [CHHapticEngine.StoppedReason.gameControllerDisconnect](gamecontrollerdisconnect.md): The engine stopped because the associated game controller disconnected from the device.
- [CHHapticEngine.StoppedReason.idleTimeout](idletimeout.md): The engine shut down because you’ve enabled automatic shutdown, and the engine reached its idle timeout.
- [CHHapticEngine.StoppedReason.systemError](systemerror.md): A system error stopped the engine.

# CHHapticEngineStoppedReasonNotifyWhenFinished (Objective-C)

**Framework:** Core Haptics  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS · tvOS 14.0+ · visionOS 1.0+

You’ve asked the system to notify you when it shuts down the engine.

## Declaration

```objectivec
CHHapticEngineStoppedReasonNotifyWhenFinished
```

<a id="Discussion"></a>

## Discussion

Restart the engine before starting another pattern player.

## See Also

### Stopped Reasons

- [CHHapticEngineStoppedReasonAudioSessionInterrupt](audiosessioninterrupt.md): The system interrupted the audio session.
- [CHHapticEngineStoppedReasonApplicationSuspended](applicationsuspended.md): The system suspended your app.
- [CHHapticEngineStoppedReasonEngineDestroyed](enginedestroyed.md): The system destroyed the engine.
- [CHHapticEngineStoppedReasonGameControllerDisconnect](gamecontrollerdisconnect.md): The engine stopped because the associated game controller disconnected from the device.
- [CHHapticEngineStoppedReasonIdleTimeout](idletimeout.md): The engine shut down because you’ve enabled automatic shutdown, and the engine reached its idle timeout.
- [CHHapticEngineStoppedReasonSystemError](systemerror.md): A system error stopped the engine.
