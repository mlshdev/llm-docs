> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticengine/stoppedreason/audiosessioninterrupt](https://developer.apple.com/documentation/corehaptics/chhapticengine/stoppedreason/audiosessioninterrupt)

# CHHapticEngine.StoppedReason.audioSessionInterrupt (Swift)

**Framework:** Core Haptics  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS · tvOS 14.0+ · visionOS 1.0+

The system interrupted the audio session.

## Declaration

```swift
case audioSessionInterrupt
```

<a id="Discussion"></a>

## Discussion

Audio session interruptions occur due to interactions with other audio apps. For example, the system interrupts music playback when a user receives a phone call. When an interruption occurs, restart the engine before it starts another pattern player.

## See Also

### Stopped Reasons

- [CHHapticEngine.StoppedReason.applicationSuspended](applicationsuspended.md): The system suspended your app.
- [CHHapticEngine.StoppedReason.engineDestroyed](enginedestroyed.md): The system destroyed the engine.
- [CHHapticEngine.StoppedReason.gameControllerDisconnect](gamecontrollerdisconnect.md): The engine stopped because the associated game controller disconnected from the device.
- [CHHapticEngine.StoppedReason.idleTimeout](idletimeout.md): The engine shut down because you’ve enabled automatic shutdown, and the engine reached its idle timeout.
- [CHHapticEngine.StoppedReason.notifyWhenFinished](notifywhenfinished.md): You’ve asked the system to notify you when it shuts down the engine.
- [CHHapticEngine.StoppedReason.systemError](systemerror.md): A system error stopped the engine.

# CHHapticEngineStoppedReasonAudioSessionInterrupt (Objective-C)

**Framework:** Core Haptics  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS · tvOS 14.0+ · visionOS 1.0+

The system interrupted the audio session.

## Declaration

```objectivec
CHHapticEngineStoppedReasonAudioSessionInterrupt
```

<a id="Discussion"></a>

## Discussion

Audio session interruptions occur due to interactions with other audio apps. For example, the system interrupts music playback when a user receives a phone call. When an interruption occurs, restart the engine before it starts another pattern player.

## See Also

### Stopped Reasons

- [CHHapticEngineStoppedReasonApplicationSuspended](applicationsuspended.md): The system suspended your app.
- [CHHapticEngineStoppedReasonEngineDestroyed](enginedestroyed.md): The system destroyed the engine.
- [CHHapticEngineStoppedReasonGameControllerDisconnect](gamecontrollerdisconnect.md): The engine stopped because the associated game controller disconnected from the device.
- [CHHapticEngineStoppedReasonIdleTimeout](idletimeout.md): The engine shut down because you’ve enabled automatic shutdown, and the engine reached its idle timeout.
- [CHHapticEngineStoppedReasonNotifyWhenFinished](notifywhenfinished.md): You’ve asked the system to notify you when it shuts down the engine.
- [CHHapticEngineStoppedReasonSystemError](systemerror.md): A system error stopped the engine.
