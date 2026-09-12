> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticengine/stoppedhandler-swift.property](https://developer.apple.com/documentation/corehaptics/chhapticengine/stoppedhandler-swift.property)

# stoppedHandler (Swift)

**Framework:** Core Haptics  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

A closure the haptic engine calls when it stops due to external causes.

## Declaration

```swift
var stoppedHandler: CHHapticEngine.StoppedHandler { get set }
```

## Mentioned In

- [Preparing your app to play haptics](../preparing-your-app-to-play-haptics.md)

<a id="Discussion"></a>

## Discussion

External causes that can cause the system to call this closure include audio session interruptions, app suspensions, or system errors. Calling [stop(completionHandler:)](stop%28completionhandler_%29.md) doesn’t invoke this callback.

Callbacks to this closure don’t occur on the main thread, so handle them in a thread-safe manner.

## See Also

### Handling Haptic Engine Stoppages

- [CHHapticEngine.StoppedHandler](stoppedhandler-swift.typealias.md): A typealias for the block that the haptic engine calls after it stops due to an external cause.
- [CHHapticEngine.StoppedReason](stoppedreason.md): The enumeration of reasons the haptic engine stopped running.

# stoppedHandler (Objective-C)

**Framework:** Core Haptics  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

A closure the haptic engine calls when it stops due to external causes.

## Declaration

```objectivec
@property (atomic, readwrite) CHHapticEngineStoppedHandler stoppedHandler;
```

## Mentioned In

- [Preparing your app to play haptics](../preparing-your-app-to-play-haptics.md)

<a id="Discussion"></a>

## Discussion

External causes that can cause the system to call this closure include audio session interruptions, app suspensions, or system errors. Calling [stopWithCompletionHandler:](stop%28completionhandler_%29.md) doesn’t invoke this callback.

Callbacks to this closure don’t occur on the main thread, so handle them in a thread-safe manner.

## See Also

### Handling Haptic Engine Stoppages

- [CHHapticEngineStoppedHandler](stoppedhandler-swift.typealias.md): A typealias for the block that the haptic engine calls after it stops due to an external cause.
- [CHHapticEngineStoppedReason](stoppedreason.md): The enumeration of reasons the haptic engine stopped running.
