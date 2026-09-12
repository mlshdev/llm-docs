> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticengine/start()](https://developer.apple.com/documentation/corehaptics/chhapticengine/start())

# start() (Swift)

**Framework:** Core Haptics  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Synchronously starts the haptic engine.

## Declaration

```swift
func start() throws
```

## Mentioned In

- [Playing a single-tap haptic pattern](../playing-a-single-tap-haptic-pattern.md)
- [Preparing your app to play haptics](../preparing-your-app-to-play-haptics.md)

<a id="Discussion"></a>

## Discussion

This method blocks all subsequent event processing on the current thread until the engine has started. It throws an error if the engine can’t start.

## See Also

### Starting and Stopping the Haptic Engine

- [start(completionHandler:)](start%28completionhandler_%29.md): Asynchronously starts the haptic engine.
- [stop(completionHandler:)](stop%28completionhandler_%29.md): Asynchronously stops the haptic engine and executes the completion handler once the engine has stopped.
- [CHHapticEngine.CompletionHandler](completionhandler.md): A typealias for a completion handler that the engine calls after starting or stopping.

# startAndReturnError: (Objective-C)

**Framework:** Core Haptics  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Synchronously starts the haptic engine.

## Declaration

```objectivec
- (BOOL) startAndReturnError:(NSError **) outError;
```

## Parameters

- `outError`: An error that contains information about failed engine creation, or `nil` if no error occurred.

## Mentioned In

- [Playing a single-tap haptic pattern](../playing-a-single-tap-haptic-pattern.md)
- [Preparing your app to play haptics](../preparing-your-app-to-play-haptics.md)

<a id="Discussion"></a>

## Discussion

This method blocks all subsequent event processing on the current thread until the engine has started. It throws an error if the engine can’t start.

## See Also

### Starting and Stopping the Haptic Engine

- [startWithCompletionHandler:](start%28completionhandler_%29.md): Asynchronously starts the haptic engine.
- [stopWithCompletionHandler:](stop%28completionhandler_%29.md): Asynchronously stops the haptic engine and executes the completion handler once the engine has stopped.
- [CHHapticCompletionHandler](completionhandler.md): A typealias for a completion handler that the engine calls after starting or stopping.
