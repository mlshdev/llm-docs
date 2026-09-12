> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfrunloopstop(_:)](https://developer.apple.com/documentation/corefoundation/cfrunloopstop(_:))

# CFRunLoopStop(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Forces a CFRunLoop object to stop running.

## Declaration

```swift
func CFRunLoopStop(_ rl: CFRunLoop!)
```

## Parameters

- `rl`: The run loop to stop.

<a id="Discussion"></a>

## Discussion

This function forces `rl` to stop running and return control to the function that called [CFRunLoopRun()](cfrunlooprun%28%29.md) or [CFRunLoopRunInMode(\_:\_:\_:)](cfrunloopruninmode%28______%29.md) for the current run loop activation. If the run loop is nested with a callout from one activation starting another activation running, only the innermost activation is exited.

## See Also

### Starting and Stopping a Run Loop

- [CFRunLoopRun()](cfrunlooprun%28%29.md): Runs the current thread’s CFRunLoop object in its default mode indefinitely.
- [CFRunLoopRunInMode(\_:\_:\_:)](cfrunloopruninmode%28______%29.md): Runs the current thread’s CFRunLoop object in a particular mode.
- [CFRunLoopWakeUp(\_:)](cfrunloopwakeup%28__%29.md): Wakes a waiting CFRunLoop object.
- [CFRunLoopIsWaiting(\_:)](cfrunloopiswaiting%28__%29.md): Returns a Boolean value that indicates whether the run loop is waiting for an event.

# CFRunLoopStop (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Forces a CFRunLoop object to stop running.

## Declaration

```objectivec
extern void CFRunLoopStop(CFRunLoopRef rl);
```

## Parameters

- `rl`: The run loop to stop.

<a id="Discussion"></a>

## Discussion

This function forces `rl` to stop running and return control to the function that called [CFRunLoopRun](cfrunlooprun%28%29.md) or [CFRunLoopRunInMode](cfrunloopruninmode%28______%29.md) for the current run loop activation. If the run loop is nested with a callout from one activation starting another activation running, only the innermost activation is exited.

## See Also

### Starting and Stopping a Run Loop

- [CFRunLoopRun](cfrunlooprun%28%29.md): Runs the current thread’s CFRunLoop object in its default mode indefinitely.
- [CFRunLoopRunInMode](cfrunloopruninmode%28______%29.md): Runs the current thread’s CFRunLoop object in a particular mode.
- [CFRunLoopWakeUp](cfrunloopwakeup%28__%29.md): Wakes a waiting CFRunLoop object.
- [CFRunLoopIsWaiting](cfrunloopiswaiting%28__%29.md): Returns a Boolean value that indicates whether the run loop is waiting for an event.
