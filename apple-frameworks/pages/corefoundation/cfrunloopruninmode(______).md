> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfrunloopruninmode(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfrunloopruninmode(_:_:_:))

# CFRunLoopRunInMode(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Runs the current thread’s CFRunLoop object in a particular mode.

## Declaration

```swift
func CFRunLoopRunInMode(_ mode: CFRunLoopMode!, _ seconds: CFTimeInterval, _ returnAfterSourceHandled: Bool) -> CFRunLoopRunResult
```

## Parameters

- `mode`: The run loop mode to run. `mode` can be any arbitrary CFString. You do not need to explicitly create a run loop mode, although a run loop mode needs to contain at least one source or timer to run.
- `seconds`: The length of time to run the run loop. If `0`, only one pass is made through the run loop before returning; if multiple sources or timers are ready to fire immediately, only one (possibly two if one is a version 0 source) will be fired, regardless of the value of `returnAfterSourceHandled`.
- `returnAfterSourceHandled`: A flag indicating whether the run loop should exit after processing one source. If `false`, the run loop continues processing events until `seconds` has passed.

<a id="return-value"></a>

## Return Value

A value indicating the reason the run loop exited. Possible values are described below.

<a id="Discussion"></a>

## Discussion

Run loops can be run recursively. You can call [CFRunLoopRunInMode(\_:\_:\_:)](cfrunloopruninmode%28______%29.md) from within any run loop callout and create nested run loop activations on the current thread’s call stack. You are not restricted in which modes you can run from within a callout. You can create another run loop activation running in any available run loop mode, including any modes already running higher in the call stack.

The run loop exits with the following return values under the indicated conditions:

- `kCFRunLoopRunFinished`. The run loop mode `mode` has no sources or timers.
- `kCFRunLoopRunStopped`. The run loop was stopped with [CFRunLoopStop(\_:)](cfrunloopstop%28__%29.md).
- `kCFRunLoopRunTimedOut`. The time interval `seconds` passed.
- `kCFRunLoopRunHandledSource`. A source was processed. This exit condition only applies when `returnAfterSourceHandled` is `true`.

You must not specify the [commonModes](cfrunloopmode/commonmodes.md) constant for the `mode` parameter. Run loops always run in a specific mode. You specify the common modes only when configuring a run-loop observer and only in situations where you want that observer to run in more than one mode.

## See Also

### Starting and Stopping a Run Loop

- [CFRunLoopRun()](cfrunlooprun%28%29.md): Runs the current thread’s CFRunLoop object in its default mode indefinitely.
- [CFRunLoopWakeUp(\_:)](cfrunloopwakeup%28__%29.md): Wakes a waiting CFRunLoop object.
- [CFRunLoopStop(\_:)](cfrunloopstop%28__%29.md): Forces a CFRunLoop object to stop running.
- [CFRunLoopIsWaiting(\_:)](cfrunloopiswaiting%28__%29.md): Returns a Boolean value that indicates whether the run loop is waiting for an event.

# CFRunLoopRunInMode (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Runs the current thread’s CFRunLoop object in a particular mode.

## Declaration

```objectivec
extern CFRunLoopRunResult CFRunLoopRunInMode(CFRunLoopMode mode, CFTimeInterval seconds, Boolean returnAfterSourceHandled);
```

## Parameters

- `mode`: The run loop mode to run. `mode` can be any arbitrary CFString. You do not need to explicitly create a run loop mode, although a run loop mode needs to contain at least one source or timer to run.
- `seconds`: The length of time to run the run loop. If `0`, only one pass is made through the run loop before returning; if multiple sources or timers are ready to fire immediately, only one (possibly two if one is a version 0 source) will be fired, regardless of the value of `returnAfterSourceHandled`.
- `returnAfterSourceHandled`: A flag indicating whether the run loop should exit after processing one source. If `false`, the run loop continues processing events until `seconds` has passed.

<a id="return-value"></a>

## Return Value

A value indicating the reason the run loop exited. Possible values are described below.

<a id="Discussion"></a>

## Discussion

Run loops can be run recursively. You can call [CFRunLoopRunInMode](cfrunloopruninmode%28______%29.md) from within any run loop callout and create nested run loop activations on the current thread’s call stack. You are not restricted in which modes you can run from within a callout. You can create another run loop activation running in any available run loop mode, including any modes already running higher in the call stack.

The run loop exits with the following return values under the indicated conditions:

- `kCFRunLoopRunFinished`. The run loop mode `mode` has no sources or timers.
- `kCFRunLoopRunStopped`. The run loop was stopped with [CFRunLoopStop](cfrunloopstop%28__%29.md).
- `kCFRunLoopRunTimedOut`. The time interval `seconds` passed.
- `kCFRunLoopRunHandledSource`. A source was processed. This exit condition only applies when `returnAfterSourceHandled` is `true`.

You must not specify the [kCFRunLoopCommonModes](cfrunloopmode/commonmodes.md) constant for the `mode` parameter. Run loops always run in a specific mode. You specify the common modes only when configuring a run-loop observer and only in situations where you want that observer to run in more than one mode.

## See Also

### Starting and Stopping a Run Loop

- [CFRunLoopRun](cfrunlooprun%28%29.md): Runs the current thread’s CFRunLoop object in its default mode indefinitely.
- [CFRunLoopWakeUp](cfrunloopwakeup%28__%29.md): Wakes a waiting CFRunLoop object.
- [CFRunLoopStop](cfrunloopstop%28__%29.md): Forces a CFRunLoop object to stop running.
- [CFRunLoopIsWaiting](cfrunloopiswaiting%28__%29.md): Returns a Boolean value that indicates whether the run loop is waiting for an event.
