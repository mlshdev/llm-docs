> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticengine/start(completionhandler:)](https://developer.apple.com/documentation/corehaptics/chhapticengine/start(completionhandler:))

# start(completionHandler:) (Swift)

**Framework:** Core Haptics  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Asynchronously starts the haptic engine.

## Declaration

```swift
func start(completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
func start() async throws
```

## Parameters

- `completionHandler`: The closure the system calls to indicate whether the server started successfully or encountered an error.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func start() async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Starting and Stopping the Haptic Engine

- [start()](start%28%29.md): Synchronously starts the haptic engine.
- [stop(completionHandler:)](stop%28completionhandler_%29.md): Asynchronously stops the haptic engine and executes the completion handler once the engine has stopped.
- [CHHapticEngine.CompletionHandler](completionhandler.md): A typealias for a completion handler that the engine calls after starting or stopping.

# startWithCompletionHandler: (Objective-C)

**Framework:** Core Haptics  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Asynchronously starts the haptic engine.

## Declaration

```objectivec
- (void) startWithCompletionHandler:(CHHapticCompletionHandler) completionHandler;
```

## Parameters

- `completionHandler`: The closure the system calls to indicate whether the server started successfully or encountered an error.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func start() async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Starting and Stopping the Haptic Engine

- [startAndReturnError:](start%28%29.md): Synchronously starts the haptic engine.
- [stopWithCompletionHandler:](stop%28completionhandler_%29.md): Asynchronously stops the haptic engine and executes the completion handler once the engine has stopped.
- [CHHapticCompletionHandler](completionhandler.md): A typealias for a completion handler that the engine calls after starting or stopping.
