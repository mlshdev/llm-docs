> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticengine/stoppedreason](https://developer.apple.com/documentation/corehaptics/chhapticengine/stoppedreason)

# CHHapticEngine.StoppedReason (Swift)

**Framework:** Core Haptics  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS · tvOS 14.0+ · visionOS 1.0+

The enumeration of reasons the haptic engine stopped running.

## Declaration

```swift
enum StoppedReason
```

## Topics

### Stopped Reasons

- [CHHapticEngine.StoppedReason.audioSessionInterrupt](stoppedreason/audiosessioninterrupt.md): The system interrupted the audio session.
- [CHHapticEngine.StoppedReason.applicationSuspended](stoppedreason/applicationsuspended.md): The system suspended your app.
- [CHHapticEngine.StoppedReason.engineDestroyed](stoppedreason/enginedestroyed.md): The system destroyed the engine.
- [CHHapticEngine.StoppedReason.gameControllerDisconnect](stoppedreason/gamecontrollerdisconnect.md): The engine stopped because the associated game controller disconnected from the device.
- [CHHapticEngine.StoppedReason.idleTimeout](stoppedreason/idletimeout.md): The engine shut down because you’ve enabled automatic shutdown, and the engine reached its idle timeout.
- [CHHapticEngine.StoppedReason.notifyWhenFinished](stoppedreason/notifywhenfinished.md): You’ve asked the system to notify you when it shuts down the engine.
- [CHHapticEngine.StoppedReason.systemError](stoppedreason/systemerror.md): A system error stopped the engine.

### Initializers

- [init(rawValue:)](stoppedreason/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Handling Haptic Engine Stoppages

- [stoppedHandler](stoppedhandler-swift.property.md): A closure the haptic engine calls when it stops due to external causes.
- [CHHapticEngine.StoppedHandler](stoppedhandler-swift.typealias.md): A typealias for the block that the haptic engine calls after it stops due to an external cause.

# CHHapticEngineStoppedReason (Objective-C)

**Framework:** Core Haptics  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS · tvOS 14.0+ · visionOS 1.0+

The enumeration of reasons the haptic engine stopped running.

## Declaration

```objectivec
enum CHHapticEngineStoppedReason : NSInteger;
```

## Topics

### Stopped Reasons

- [CHHapticEngineStoppedReasonAudioSessionInterrupt](stoppedreason/audiosessioninterrupt.md): The system interrupted the audio session.
- [CHHapticEngineStoppedReasonApplicationSuspended](stoppedreason/applicationsuspended.md): The system suspended your app.
- [CHHapticEngineStoppedReasonEngineDestroyed](stoppedreason/enginedestroyed.md): The system destroyed the engine.
- [CHHapticEngineStoppedReasonGameControllerDisconnect](stoppedreason/gamecontrollerdisconnect.md): The engine stopped because the associated game controller disconnected from the device.
- [CHHapticEngineStoppedReasonIdleTimeout](stoppedreason/idletimeout.md): The engine shut down because you’ve enabled automatic shutdown, and the engine reached its idle timeout.
- [CHHapticEngineStoppedReasonNotifyWhenFinished](stoppedreason/notifywhenfinished.md): You’ve asked the system to notify you when it shuts down the engine.
- [CHHapticEngineStoppedReasonSystemError](stoppedreason/systemerror.md): A system error stopped the engine.

## See Also

### Handling Haptic Engine Stoppages

- [stoppedHandler](stoppedhandler-swift.property.md): A closure the haptic engine calls when it stops due to external causes.
- [CHHapticEngineStoppedHandler](stoppedhandler-swift.typealias.md): A typealias for the block that the haptic engine calls after it stops due to an external cause.
