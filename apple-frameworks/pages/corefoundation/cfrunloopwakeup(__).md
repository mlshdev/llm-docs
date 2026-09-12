> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfrunloopwakeup(_:)](https://developer.apple.com/documentation/corefoundation/cfrunloopwakeup(_:))

# CFRunLoopWakeUp(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Wakes a waiting CFRunLoop object.

## Declaration

```swift
func CFRunLoopWakeUp(_ rl: CFRunLoop!)
```

## Parameters

- `rl`: The run loop to wake up.

<a id="Discussion"></a>

## Discussion

A run loop goes to sleep when it is waiting for a source or timer to become ready to fire. If no source or timer fires, the run loop stays there until it times out or is explicitly woken up. If a run loop is modified, such as a new source added, you need to wake up the run loop to allow it to process the change. Version 0 sources use [CFRunLoopWakeUp(\_:)](cfrunloopwakeup%28__%29.md) to cause the run loop to wake up after setting a source to be signaled, if they want the source handled immediately.

## See Also

### Starting and Stopping a Run Loop

- [CFRunLoopRun()](cfrunlooprun%28%29.md): Runs the current thread’s CFRunLoop object in its default mode indefinitely.
- [CFRunLoopRunInMode(\_:\_:\_:)](cfrunloopruninmode%28______%29.md): Runs the current thread’s CFRunLoop object in a particular mode.
- [CFRunLoopStop(\_:)](cfrunloopstop%28__%29.md): Forces a CFRunLoop object to stop running.
- [CFRunLoopIsWaiting(\_:)](cfrunloopiswaiting%28__%29.md): Returns a Boolean value that indicates whether the run loop is waiting for an event.

# CFRunLoopWakeUp (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Wakes a waiting CFRunLoop object.

## Declaration

```objectivec
extern void CFRunLoopWakeUp(CFRunLoopRef rl);
```

## Parameters

- `rl`: The run loop to wake up.

<a id="Discussion"></a>

## Discussion

A run loop goes to sleep when it is waiting for a source or timer to become ready to fire. If no source or timer fires, the run loop stays there until it times out or is explicitly woken up. If a run loop is modified, such as a new source added, you need to wake up the run loop to allow it to process the change. Version 0 sources use [CFRunLoopWakeUp](cfrunloopwakeup%28__%29.md) to cause the run loop to wake up after setting a source to be signaled, if they want the source handled immediately.

## See Also

### Starting and Stopping a Run Loop

- [CFRunLoopRun](cfrunlooprun%28%29.md): Runs the current thread’s CFRunLoop object in its default mode indefinitely.
- [CFRunLoopRunInMode](cfrunloopruninmode%28______%29.md): Runs the current thread’s CFRunLoop object in a particular mode.
- [CFRunLoopStop](cfrunloopstop%28__%29.md): Forces a CFRunLoop object to stop running.
- [CFRunLoopIsWaiting](cfrunloopiswaiting%28__%29.md): Returns a Boolean value that indicates whether the run loop is waiting for an event.
