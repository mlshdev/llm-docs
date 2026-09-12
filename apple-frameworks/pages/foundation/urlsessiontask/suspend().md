> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessiontask/suspend()](https://developer.apple.com/documentation/foundation/urlsessiontask/suspend())

# suspend() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Temporarily suspends a task.

## Declaration

```swift
func suspend()
```

<a id="Discussion"></a>

## Discussion

A task, while suspended, produces no network traffic and isn’t subject to timeouts. Call [resume()](resume%28%29.md) to resume data transfer.

## See Also

### Related Documentation

- [cancel(byProducingResumeData:)](../urlsessiondownloadtask/cancel%28byproducingresumedata_%29.md): Cancels a download and calls a callback with resume data for later use.

### Controlling the task state

- [cancel()](cancel%28%29.md): Cancels the task.
- [resume()](resume%28%29.md): Resumes the task, if it is suspended.
- [state](state-swift.property.md): The current state of the task—active, suspended, in the process of being canceled, or completed.
- [URLSessionTask.State](state-swift.enum.md): Constants for determining the current state of a task.
- [priority](priority.md): The relative priority at which you’d like a host to handle the task, specified as a floating point value between `0.0` (lowest priority) and `1.0` (highest priority).
- [URL session task priority](../url-session-task-priority.md): Constants for providing task priority hints to a host, used with the [priority](priority.md) property.

# suspend (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Temporarily suspends a task.

## Declaration

```objectivec
- (void) suspend;
```

<a id="Discussion"></a>

## Discussion

A task, while suspended, produces no network traffic and isn’t subject to timeouts. Call [resume](resume%28%29.md) to resume data transfer.

## See Also

### Related Documentation

- [cancelByProducingResumeData:](../urlsessiondownloadtask/cancel%28byproducingresumedata_%29.md): Cancels a download and calls a callback with resume data for later use.

### Controlling the task state

- [cancel](cancel%28%29.md): Cancels the task.
- [resume](resume%28%29.md): Resumes the task, if it is suspended.
- [state](state-swift.property.md): The current state of the task—active, suspended, in the process of being canceled, or completed.
- [NSURLSessionTaskState](state-swift.enum.md): Constants for determining the current state of a task.
- [priority](priority.md): The relative priority at which you’d like a host to handle the task, specified as a floating point value between `0.0` (lowest priority) and `1.0` (highest priority).
- [URL session task priority](../url-session-task-priority.md): Constants for providing task priority hints to a host, used with the [priority](priority.md) property.
