> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessiontask/state-swift.enum/suspended](https://developer.apple.com/documentation/foundation/urlsessiontask/state-swift.enum/suspended)

# URLSessionTask.State.suspended (Swift)

**Framework:** Foundation  
**Kind:** Case  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The task was suspended by the app.

## Declaration

```swift
case suspended
```

<a id="Discussion"></a>

## Discussion

No further processing takes place until the task is resumed. A task in this state is not subject to timeouts.

## See Also

### Task states

- [URLSessionTask.State.running](running.md): The task is currently being serviced by the session.
- [URLSessionTask.State.canceling](canceling.md): The task has received a `cancel` message.
- [URLSessionTask.State.completed](completed.md): The task has completed (without being canceled), and the task’s delegate receives no further callbacks.

# NSURLSessionTaskStateSuspended (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The task was suspended by the app.

## Declaration

```objectivec
NSURLSessionTaskStateSuspended
```

<a id="Discussion"></a>

## Discussion

No further processing takes place until the task is resumed. A task in this state is not subject to timeouts.

## See Also

### Task states

- [NSURLSessionTaskStateRunning](running.md): The task is currently being serviced by the session.
- [NSURLSessionTaskStateCanceling](canceling.md): The task has received a `cancel` message.
- [NSURLSessionTaskStateCompleted](completed.md): The task has completed (without being canceled), and the task’s delegate receives no further callbacks.
