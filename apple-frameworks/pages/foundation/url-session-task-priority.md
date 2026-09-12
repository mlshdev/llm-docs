> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/url-session-task-priority](https://developer.apple.com/documentation/foundation/url-session-task-priority)

# URL session task priority (Swift)

**Framework:** Foundation  
**Kind:** API Collection

Constants for providing task priority hints to a host, used with the [priority](urlsessiontask/priority.md) property.

## Topics

### Priority constants

- [defaultPriority](urlsessiontask/defaultpriority.md): The default URL session task priority, used implicitly for any task you have not prioritized.
- [lowPriority](urlsessiontask/lowpriority.md): A low URL session task priority, with a floating point value above the minimum of `0` and below the default value.
- [highPriority](urlsessiontask/highpriority.md): A high URL session task priority, with a floating point value above the default value and below the maximum of `1.0`.

## See Also

### Controlling the task state

- [cancel()](urlsessiontask/cancel%28%29.md): Cancels the task.
- [resume()](urlsessiontask/resume%28%29.md): Resumes the task, if it is suspended.
- [suspend()](urlsessiontask/suspend%28%29.md): Temporarily suspends a task.
- [state](urlsessiontask/state-swift.property.md): The current state of the task—active, suspended, in the process of being canceled, or completed.
- [URLSessionTask.State](urlsessiontask/state-swift.enum.md): Constants for determining the current state of a task.
- [priority](urlsessiontask/priority.md): The relative priority at which you’d like a host to handle the task, specified as a floating point value between `0.0` (lowest priority) and `1.0` (highest priority).

# URL session task priority (Objective-C)

**Framework:** Foundation  
**Kind:** API Collection

Constants for providing task priority hints to a host, used with the [priority](urlsessiontask/priority.md) property.

## Topics

### Priority constants

- [NSURLSessionTaskPriorityDefault](urlsessiontask/defaultpriority.md): The default URL session task priority, used implicitly for any task you have not prioritized.
- [NSURLSessionTaskPriorityLow](urlsessiontask/lowpriority.md): A low URL session task priority, with a floating point value above the minimum of `0` and below the default value.
- [NSURLSessionTaskPriorityHigh](urlsessiontask/highpriority.md): A high URL session task priority, with a floating point value above the default value and below the maximum of `1.0`.

## See Also

### Controlling the task state

- [cancel](urlsessiontask/cancel%28%29.md): Cancels the task.
- [resume](urlsessiontask/resume%28%29.md): Resumes the task, if it is suspended.
- [suspend](urlsessiontask/suspend%28%29.md): Temporarily suspends a task.
- [state](urlsessiontask/state-swift.property.md): The current state of the task—active, suspended, in the process of being canceled, or completed.
- [NSURLSessionTaskState](urlsessiontask/state-swift.enum.md): Constants for determining the current state of a task.
- [priority](urlsessiontask/priority.md): The relative priority at which you’d like a host to handle the task, specified as a floating point value between `0.0` (lowest priority) and `1.0` (highest priority).
