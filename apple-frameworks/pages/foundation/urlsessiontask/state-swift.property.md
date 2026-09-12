> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessiontask/state-swift.property](https://developer.apple.com/documentation/foundation/urlsessiontask/state-swift.property)

# state (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The current state of the task—active, suspended, in the process of being canceled, or completed.

## Declaration

```swift
var state: URLSessionTask.State { get }
```

## See Also

### Controlling the task state

- [cancel()](cancel%28%29.md): Cancels the task.
- [resume()](resume%28%29.md): Resumes the task, if it is suspended.
- [suspend()](suspend%28%29.md): Temporarily suspends a task.
- [URLSessionTask.State](state-swift.enum.md): Constants for determining the current state of a task.
- [priority](priority.md): The relative priority at which you’d like a host to handle the task, specified as a floating point value between `0.0` (lowest priority) and `1.0` (highest priority).
- [URL session task priority](../url-session-task-priority.md): Constants for providing task priority hints to a host, used with the [priority](priority.md) property.

# state (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The current state of the task—active, suspended, in the process of being canceled, or completed.

## Declaration

```objectivec
@property (readonly) NSURLSessionTaskState state;
```

## See Also

### Controlling the task state

- [cancel](cancel%28%29.md): Cancels the task.
- [resume](resume%28%29.md): Resumes the task, if it is suspended.
- [suspend](suspend%28%29.md): Temporarily suspends a task.
- [NSURLSessionTaskState](state-swift.enum.md): Constants for determining the current state of a task.
- [priority](priority.md): The relative priority at which you’d like a host to handle the task, specified as a floating point value between `0.0` (lowest priority) and `1.0` (highest priority).
- [URL session task priority](../url-session-task-priority.md): Constants for providing task priority hints to a host, used with the [priority](priority.md) property.
