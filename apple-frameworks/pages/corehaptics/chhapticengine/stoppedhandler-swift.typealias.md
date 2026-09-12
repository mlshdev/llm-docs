> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticengine/stoppedhandler-swift.typealias](https://developer.apple.com/documentation/corehaptics/chhapticengine/stoppedhandler-swift.typealias)

# CHHapticEngine.StoppedHandler (Swift)

**Framework:** Core Haptics  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS · tvOS 14.0+ · visionOS 1.0+

A typealias for the block that the haptic engine calls after it stops due to an external cause.

## Declaration

```swift
typealias StoppedHandler = (CHHapticEngine.StoppedReason) -> Void
```

<a id="Discussion"></a>

## Discussion

The system calls the stopped handler for when it’s stopped by an external event like an audio session interruption or an auto-shutdown.

> **Note**

>  The stopped handler isn’t called if you explicitly stop the engine by calling the [stop(completionHandler:)](stop%28completionhandler_%29.md) method.

## See Also

### Handling Haptic Engine Stoppages

- [stoppedHandler](stoppedhandler-swift.property.md): A closure the haptic engine calls when it stops due to external causes.
- [CHHapticEngine.StoppedReason](stoppedreason.md): The enumeration of reasons the haptic engine stopped running.

# CHHapticEngineStoppedHandler (Objective-C)

**Framework:** Core Haptics  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS · tvOS 14.0+ · visionOS 1.0+

A typealias for the block that the haptic engine calls after it stops due to an external cause.

## Declaration

```objectivec
typedef void (^)(enum CHHapticEngineStoppedReason) CHHapticEngineStoppedHandler;
```

<a id="Discussion"></a>

## Discussion

The system calls the stopped handler for when it’s stopped by an external event like an audio session interruption or an auto-shutdown.

> **Note**

>  The stopped handler isn’t called if you explicitly stop the engine by calling the [stopWithCompletionHandler:](stop%28completionhandler_%29.md) method.

## See Also

### Handling Haptic Engine Stoppages

- [stoppedHandler](stoppedhandler-swift.property.md): A closure the haptic engine calls when it stops due to external causes.
- [CHHapticEngineStoppedReason](stoppedreason.md): The enumeration of reasons the haptic engine stopped running.
