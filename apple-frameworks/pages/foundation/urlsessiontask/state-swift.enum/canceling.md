> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessiontask/state-swift.enum/canceling](https://developer.apple.com/documentation/foundation/urlsessiontask/state-swift.enum/canceling)

# URLSessionTask.State.canceling (Swift)

**Framework:** Foundation  
**Kind:** Case  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The task has received a `cancel` message.

## Declaration

```swift
case canceling
```

<a id="Discussion"></a>

## Discussion

The delegate may or may not have received a [urlSession(\_:task:didCompleteWithError:)](../../urlsessiontaskdelegate/urlsession%28__task_didcompletewitherror_%29.md) message yet. A task in this state is not subject to timeouts.

## See Also

### Task states

- [URLSessionTask.State.running](running.md): The task is currently being serviced by the session.
- [URLSessionTask.State.suspended](suspended.md): The task was suspended by the app.
- [URLSessionTask.State.completed](completed.md): The task has completed (without being canceled), and the task’s delegate receives no further callbacks.

# NSURLSessionTaskStateCanceling (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The task has received a `cancel` message.

## Declaration

```objectivec
NSURLSessionTaskStateCanceling
```

<a id="Discussion"></a>

## Discussion

The delegate may or may not have received a [URLSession:task:didCompleteWithError:](../../urlsessiontaskdelegate/urlsession%28__task_didcompletewitherror_%29.md) message yet. A task in this state is not subject to timeouts.

## See Also

### Task states

- [NSURLSessionTaskStateRunning](running.md): The task is currently being serviced by the session.
- [NSURLSessionTaskStateSuspended](suspended.md): The task was suspended by the app.
- [NSURLSessionTaskStateCompleted](completed.md): The task has completed (without being canceled), and the task’s delegate receives no further callbacks.
