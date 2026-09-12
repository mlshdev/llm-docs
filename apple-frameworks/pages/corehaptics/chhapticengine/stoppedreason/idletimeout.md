> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticengine/stoppedreason/idletimeout](https://developer.apple.com/documentation/corehaptics/chhapticengine/stoppedreason/idletimeout)

# CHHapticEngine.StoppedReason.idleTimeout (Swift)

**Framework:** Core Haptics  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS · tvOS 14.0+ · visionOS 1.0+

The engine shut down because you’ve enabled automatic shutdown, and the engine reached its idle timeout.

## Declaration

```swift
case idleTimeout
```

<a id="Discussion"></a>

## Discussion

If there’s a time-critical pattern to play, restart the engine. Otherwise, do nothing and the engine will automatically restart when the next pattern plays.

> **Note**

>  Delegating engine restart to the system can add a slight delay to the start of the pattern.

## See Also

### Stopped Reasons

- [CHHapticEngine.StoppedReason.audioSessionInterrupt](audiosessioninterrupt.md): The system interrupted the audio session.
- [CHHapticEngine.StoppedReason.applicationSuspended](applicationsuspended.md): The system suspended your app.
- [CHHapticEngine.StoppedReason.engineDestroyed](enginedestroyed.md): The system destroyed the engine.
- [CHHapticEngine.StoppedReason.gameControllerDisconnect](gamecontrollerdisconnect.md): The engine stopped because the associated game controller disconnected from the device.
- [CHHapticEngine.StoppedReason.notifyWhenFinished](notifywhenfinished.md): You’ve asked the system to notify you when it shuts down the engine.
- [CHHapticEngine.StoppedReason.systemError](systemerror.md): A system error stopped the engine.

# CHHapticEngineStoppedReasonIdleTimeout (Objective-C)

**Framework:** Core Haptics  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS · tvOS 14.0+ · visionOS 1.0+

The engine shut down because you’ve enabled automatic shutdown, and the engine reached its idle timeout.

## Declaration

```objectivec
CHHapticEngineStoppedReasonIdleTimeout
```

<a id="Discussion"></a>

## Discussion

If there’s a time-critical pattern to play, restart the engine. Otherwise, do nothing and the engine will automatically restart when the next pattern plays.

> **Note**

>  Delegating engine restart to the system can add a slight delay to the start of the pattern.

## See Also

### Stopped Reasons

- [CHHapticEngineStoppedReasonAudioSessionInterrupt](audiosessioninterrupt.md): The system interrupted the audio session.
- [CHHapticEngineStoppedReasonApplicationSuspended](applicationsuspended.md): The system suspended your app.
- [CHHapticEngineStoppedReasonEngineDestroyed](enginedestroyed.md): The system destroyed the engine.
- [CHHapticEngineStoppedReasonGameControllerDisconnect](gamecontrollerdisconnect.md): The engine stopped because the associated game controller disconnected from the device.
- [CHHapticEngineStoppedReasonNotifyWhenFinished](notifywhenfinished.md): You’ve asked the system to notify you when it shuts down the engine.
- [CHHapticEngineStoppedReasonSystemError](systemerror.md): A system error stopped the engine.
