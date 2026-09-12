> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfrunloopiswaiting(_:)](https://developer.apple.com/documentation/corefoundation/cfrunloopiswaiting(_:))

# CFRunLoopIsWaiting(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a Boolean value that indicates whether the run loop is waiting for an event.

## Declaration

```swift
func CFRunLoopIsWaiting(_ rl: CFRunLoop!) -> Bool
```

## Parameters

- `rl`: The run loop to examine.

<a id="return-value"></a>

## Return Value

`true` if `rl` has no events to process and is blocking, waiting for a source or timer to become ready to fire; `false` if `rl` either is not running or is currently processing a source, timer, or observer.

<a id="Discussion"></a>

## Discussion

This function is useful only to test the state of another thread’s run loop. When called with the current thread’s run loop, this function always returns `false`.

## See Also

### Starting and Stopping a Run Loop

- [CFRunLoopRun()](cfrunlooprun%28%29.md): Runs the current thread’s CFRunLoop object in its default mode indefinitely.
- [CFRunLoopRunInMode(\_:\_:\_:)](cfrunloopruninmode%28______%29.md): Runs the current thread’s CFRunLoop object in a particular mode.
- [CFRunLoopWakeUp(\_:)](cfrunloopwakeup%28__%29.md): Wakes a waiting CFRunLoop object.
- [CFRunLoopStop(\_:)](cfrunloopstop%28__%29.md): Forces a CFRunLoop object to stop running.

# CFRunLoopIsWaiting (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a Boolean value that indicates whether the run loop is waiting for an event.

## Declaration

```objectivec
extern Boolean CFRunLoopIsWaiting(CFRunLoopRef rl);
```

## Parameters

- `rl`: The run loop to examine.

<a id="return-value"></a>

## Return Value

`true` if `rl` has no events to process and is blocking, waiting for a source or timer to become ready to fire; `false` if `rl` either is not running or is currently processing a source, timer, or observer.

<a id="Discussion"></a>

## Discussion

This function is useful only to test the state of another thread’s run loop. When called with the current thread’s run loop, this function always returns `false`.

## See Also

### Starting and Stopping a Run Loop

- [CFRunLoopRun](cfrunlooprun%28%29.md): Runs the current thread’s CFRunLoop object in its default mode indefinitely.
- [CFRunLoopRunInMode](cfrunloopruninmode%28______%29.md): Runs the current thread’s CFRunLoop object in a particular mode.
- [CFRunLoopWakeUp](cfrunloopwakeup%28__%29.md): Wakes a waiting CFRunLoop object.
- [CFRunLoopStop](cfrunloopstop%28__%29.md): Forces a CFRunLoop object to stop running.
