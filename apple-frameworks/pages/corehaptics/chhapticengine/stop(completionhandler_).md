> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticengine/stop(completionhandler:)](https://developer.apple.com/documentation/corehaptics/chhapticengine/stop(completionhandler:))

# stop(completionHandler:) (Swift)

**Framework:** Core Haptics  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Asynchronously stops the haptic engine and executes the completion handler once the engine has stopped.

## Declaration

```swift
func stop(completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
func stop() async throws
```

## Parameters

- `completionHandler`: The completion handler to execute after the engine stops.

## Mentioned In

- [Preparing your app to play haptics](../preparing-your-app-to-play-haptics.md)

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func stop() async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Starting and Stopping the Haptic Engine

- [start()](start%28%29.md): Synchronously starts the haptic engine.
- [start(completionHandler:)](start%28completionhandler_%29.md): Asynchronously starts the haptic engine.
- [CHHapticEngine.CompletionHandler](completionhandler.md): A typealias for a completion handler that the engine calls after starting or stopping.

# stopWithCompletionHandler: (Objective-C)

**Framework:** Core Haptics  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Asynchronously stops the haptic engine and executes the completion handler once the engine has stopped.

## Declaration

```objectivec
- (void) stopWithCompletionHandler:(CHHapticCompletionHandler) completionHandler;
```

## Parameters

- `completionHandler`: The completion handler to execute after the engine stops.

## Mentioned In

- [Preparing your app to play haptics](../preparing-your-app-to-play-haptics.md)

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func stop() async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Starting and Stopping the Haptic Engine

- [startAndReturnError:](start%28%29.md): Synchronously starts the haptic engine.
- [startWithCompletionHandler:](start%28completionhandler_%29.md): Asynchronously starts the haptic engine.
- [CHHapticCompletionHandler](completionhandler.md): A typealias for a completion handler that the engine calls after starting or stopping.
