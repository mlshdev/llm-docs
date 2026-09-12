> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessiontask/state-swift.enum](https://developer.apple.com/documentation/foundation/urlsessiontask/state-swift.enum)

# URLSessionTask.State (Swift)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants for determining the current state of a task.

## Declaration

```swift
enum State
```

## Topics

### Task states

- [URLSessionTask.State.running](state-swift.enum/running.md): The task is currently being serviced by the session.
- [URLSessionTask.State.suspended](state-swift.enum/suspended.md): The task was suspended by the app.
- [URLSessionTask.State.canceling](state-swift.enum/canceling.md): The task has received a `cancel` message.
- [URLSessionTask.State.completed](state-swift.enum/completed.md): The task has completed (without being canceled), and the task’s delegate receives no further callbacks.

### Initializers

- [init(rawValue:)](state-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Controlling the task state

- [cancel()](cancel%28%29.md): Cancels the task.
- [resume()](resume%28%29.md): Resumes the task, if it is suspended.
- [suspend()](suspend%28%29.md): Temporarily suspends a task.
- [state](state-swift.property.md): The current state of the task—active, suspended, in the process of being canceled, or completed.
- [priority](priority.md): The relative priority at which you’d like a host to handle the task, specified as a floating point value between `0.0` (lowest priority) and `1.0` (highest priority).
- [URL session task priority](../url-session-task-priority.md): Constants for providing task priority hints to a host, used with the [priority](priority.md) property.

# NSURLSessionTaskState (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants for determining the current state of a task.

## Declaration

```objectivec
enum NSURLSessionTaskState : NSInteger;
```

## Topics

### Task states

- [NSURLSessionTaskStateRunning](state-swift.enum/running.md): The task is currently being serviced by the session.
- [NSURLSessionTaskStateSuspended](state-swift.enum/suspended.md): The task was suspended by the app.
- [NSURLSessionTaskStateCanceling](state-swift.enum/canceling.md): The task has received a `cancel` message.
- [NSURLSessionTaskStateCompleted](state-swift.enum/completed.md): The task has completed (without being canceled), and the task’s delegate receives no further callbacks.

## See Also

### Controlling the task state

- [cancel](cancel%28%29.md): Cancels the task.
- [resume](resume%28%29.md): Resumes the task, if it is suspended.
- [suspend](suspend%28%29.md): Temporarily suspends a task.
- [state](state-swift.property.md): The current state of the task—active, suspended, in the process of being canceled, or completed.
- [priority](priority.md): The relative priority at which you’d like a host to handle the task, specified as a floating point value between `0.0` (lowest priority) and `1.0` (highest priority).
- [URL session task priority](../url-session-task-priority.md): Constants for providing task priority hints to a host, used with the [priority](priority.md) property.
