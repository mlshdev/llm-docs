> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessiontask/state-swift.enum/completed](https://developer.apple.com/documentation/foundation/urlsessiontask/state-swift.enum/completed)

# URLSessionTask.State.completed (Swift)

**Framework:** Foundation  
**Kind:** Case  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The task has completed (without being canceled), and the task’s delegate receives no further callbacks.

## Declaration

```swift
case completed
```

<a id="Discussion"></a>

## Discussion

If the task completed successfully, the task’s [error](../error.md) property is `nil`. Otherwise, it provides an error object that tells what went wrong. A task in this state is not subject to timeouts.

## See Also

### Task states

- [URLSessionTask.State.running](running.md): The task is currently being serviced by the session.
- [URLSessionTask.State.suspended](suspended.md): The task was suspended by the app.
- [URLSessionTask.State.canceling](canceling.md): The task has received a `cancel` message.

# NSURLSessionTaskStateCompleted (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The task has completed (without being canceled), and the task’s delegate receives no further callbacks.

## Declaration

```objectivec
NSURLSessionTaskStateCompleted
```

<a id="Discussion"></a>

## Discussion

If the task completed successfully, the task’s [error](../error.md) property is `nil`. Otherwise, it provides an error object that tells what went wrong. A task in this state is not subject to timeouts.

## See Also

### Task states

- [NSURLSessionTaskStateRunning](running.md): The task is currently being serviced by the session.
- [NSURLSessionTaskStateSuspended](suspended.md): The task was suspended by the app.
- [NSURLSessionTaskStateCanceling](canceling.md): The task has received a `cancel` message.
