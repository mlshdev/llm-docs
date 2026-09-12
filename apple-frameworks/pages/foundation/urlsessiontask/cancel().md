> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessiontask/cancel()](https://developer.apple.com/documentation/foundation/urlsessiontask/cancel())

# cancel() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Cancels the task.

## Declaration

```swift
func cancel()
```

<a id="Discussion"></a>

## Discussion

This method returns immediately, marking the task as being canceled. Once a task is marked as being canceled, [urlSession(\_:task:didCompleteWithError:)](../urlsessiontaskdelegate/urlsession%28__task_didcompletewitherror_%29.md) will be sent to the task delegate, passing an error in the domain [NSURLErrorDomain](../nsurlerrordomain.md) with the code [NSURLErrorCancelled](../nsurlerrorcancelled-swift.var.md). A task may, under some circumstances, send messages to its delegate before the cancelation is acknowledged.

This method may be called on a task that is suspended.

## See Also

### Related Documentation

- [cancel(byProducingResumeData:)](../urlsessiondownloadtask/cancel%28byproducingresumedata_%29.md): Cancels a download and calls a callback with resume data for later use.

### Controlling the task state

- [resume()](resume%28%29.md): Resumes the task, if it is suspended.
- [suspend()](suspend%28%29.md): Temporarily suspends a task.
- [state](state-swift.property.md): The current state of the task—active, suspended, in the process of being canceled, or completed.
- [URLSessionTask.State](state-swift.enum.md): Constants for determining the current state of a task.
- [priority](priority.md): The relative priority at which you’d like a host to handle the task, specified as a floating point value between `0.0` (lowest priority) and `1.0` (highest priority).
- [URL session task priority](../url-session-task-priority.md): Constants for providing task priority hints to a host, used with the [priority](priority.md) property.

# cancel (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Cancels the task.

## Declaration

```objectivec
- (void) cancel;
```

<a id="Discussion"></a>

## Discussion

This method returns immediately, marking the task as being canceled. Once a task is marked as being canceled, [URLSession:task:didCompleteWithError:](../urlsessiontaskdelegate/urlsession%28__task_didcompletewitherror_%29.md) will be sent to the task delegate, passing an error in the domain [NSURLErrorDomain](../nsurlerrordomain.md) with the code [NSURLErrorCancelled](../nsurlerrorcancelled-swift.var.md). A task may, under some circumstances, send messages to its delegate before the cancelation is acknowledged.

This method may be called on a task that is suspended.

## See Also

### Related Documentation

- [cancelByProducingResumeData:](../urlsessiondownloadtask/cancel%28byproducingresumedata_%29.md): Cancels a download and calls a callback with resume data for later use.

### Controlling the task state

- [resume](resume%28%29.md): Resumes the task, if it is suspended.
- [suspend](suspend%28%29.md): Temporarily suspends a task.
- [state](state-swift.property.md): The current state of the task—active, suspended, in the process of being canceled, or completed.
- [NSURLSessionTaskState](state-swift.enum.md): Constants for determining the current state of a task.
- [priority](priority.md): The relative priority at which you’d like a host to handle the task, specified as a floating point value between `0.0` (lowest priority) and `1.0` (highest priority).
- [URL session task priority](../url-session-task-priority.md): Constants for providing task priority hints to a host, used with the [priority](priority.md) property.
