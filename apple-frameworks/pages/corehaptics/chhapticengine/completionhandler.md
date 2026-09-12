> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticengine/completionhandler](https://developer.apple.com/documentation/corehaptics/chhapticengine/completionhandler)

# CHHapticEngine.CompletionHandler (Swift)

**Framework:** Core Haptics  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS · tvOS 14.0+ · visionOS 1.0+

A typealias for a completion handler that the engine calls after starting or stopping.

## Declaration

```swift
typealias CompletionHandler = ((any Error)?) -> Void
```

## See Also

### Starting and Stopping the Haptic Engine

- [start()](start%28%29.md): Synchronously starts the haptic engine.
- [start(completionHandler:)](start%28completionhandler_%29.md): Asynchronously starts the haptic engine.
- [stop(completionHandler:)](stop%28completionhandler_%29.md): Asynchronously stops the haptic engine and executes the completion handler once the engine has stopped.

# CHHapticCompletionHandler (Objective-C)

**Framework:** Core Haptics  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS · tvOS 14.0+ · visionOS 1.0+

A typealias for a completion handler that the engine calls after starting or stopping.

## Declaration

```objectivec
typedef void (^)(NSError *) CHHapticCompletionHandler;
```

## See Also

### Starting and Stopping the Haptic Engine

- [startAndReturnError:](start%28%29.md): Synchronously starts the haptic engine.
- [startWithCompletionHandler:](start%28completionhandler_%29.md): Asynchronously starts the haptic engine.
- [stopWithCompletionHandler:](stop%28completionhandler_%29.md): Asynchronously stops the haptic engine and executes the completion handler once the engine has stopped.
