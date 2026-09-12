> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfrunlooprun()](https://developer.apple.com/documentation/corefoundation/cfrunlooprun())

# CFRunLoopRun() (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Runs the current thread’s CFRunLoop object in its default mode indefinitely.

## Declaration

```swift
func CFRunLoopRun()
```

<a id="Discussion"></a>

## Discussion

The current thread’s run loop runs in the default mode (see [Default Run Loop Mode](default-run-loop-mode.md)) until the run loop is stopped with [CFRunLoopStop(\_:)](cfrunloopstop%28__%29.md) or all the sources and timers are removed from the default run loop mode.

Run loops can be run recursively. You can call [CFRunLoopRun()](cfrunlooprun%28%29.md) from within any run loop callout and create nested run loop activations on the current thread’s call stack.

## See Also

### Starting and Stopping a Run Loop

- [CFRunLoopRunInMode(\_:\_:\_:)](cfrunloopruninmode%28______%29.md): Runs the current thread’s CFRunLoop object in a particular mode.
- [CFRunLoopWakeUp(\_:)](cfrunloopwakeup%28__%29.md): Wakes a waiting CFRunLoop object.
- [CFRunLoopStop(\_:)](cfrunloopstop%28__%29.md): Forces a CFRunLoop object to stop running.
- [CFRunLoopIsWaiting(\_:)](cfrunloopiswaiting%28__%29.md): Returns a Boolean value that indicates whether the run loop is waiting for an event.

# CFRunLoopRun (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Runs the current thread’s CFRunLoop object in its default mode indefinitely.

## Declaration

```objectivec
extern void CFRunLoopRun();
```

<a id="Discussion"></a>

## Discussion

The current thread’s run loop runs in the default mode (see [Default Run Loop Mode](default-run-loop-mode.md)) until the run loop is stopped with [CFRunLoopStop](cfrunloopstop%28__%29.md) or all the sources and timers are removed from the default run loop mode.

Run loops can be run recursively. You can call [CFRunLoopRun](cfrunlooprun%28%29.md) from within any run loop callout and create nested run loop activations on the current thread’s call stack.

## See Also

### Starting and Stopping a Run Loop

- [CFRunLoopRunInMode](cfrunloopruninmode%28______%29.md): Runs the current thread’s CFRunLoop object in a particular mode.
- [CFRunLoopWakeUp](cfrunloopwakeup%28__%29.md): Wakes a waiting CFRunLoop object.
- [CFRunLoopStop](cfrunloopstop%28__%29.md): Forces a CFRunLoop object to stop running.
- [CFRunLoopIsWaiting](cfrunloopiswaiting%28__%29.md): Returns a Boolean value that indicates whether the run loop is waiting for an event.
