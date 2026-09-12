> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundtasks/bgtaskscheduler/submit(_:)](https://developer.apple.com/documentation/backgroundtasks/bgtaskscheduler/submit(_:))

# submit(\_:) (Swift)

**Framework:** Background Tasks  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS 13.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Submit a previously registered background task for execution.

> Use -submitTaskRequest:completionHandler: (Swift: submitTaskRequest(\_:completionHandler:), or 'try await submitTaskRequest(\_:)') to capture all error conditions

## Declaration

```swift
func submit(_ taskRequest: BGTaskRequest) throws
```

## Parameters

- `taskRequest`: A background task request object specifying the task identifier and optional configuration information.

## Mentioned In

- [Performing long-running tasks on iOS and iPadOS](../performing-long-running-tasks-on-ios-and-ipados.md)
- [Starting and Terminating Tasks During Development](../starting-and-terminating-tasks-during-development.md)

<a id="Discussion"></a>

## Discussion

Submitting a task request for an unexecuted task that’s already in the queue replaces the previous task request.

There can be a total of 1 refresh task and 10 processing tasks scheduled at any time. Trying to schedule more tasks returns [BGTaskScheduler.Error.Code.tooManyPendingTaskRequests](error/code/toomanypendingtaskrequests.md).

## See Also

### Scheduling a task

- [register(forTaskWithIdentifier:using:launchHandler:)](register%28fortaskwithidentifier_using_launchhandler_%29.md): Register a launch handler for the task with the associated identifier that’s executed on the specified queue.

# submitTaskRequest:error: (Objective-C)

**Framework:** Background Tasks  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS 13.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Submit a previously registered background task for execution.

> Use -submitTaskRequest:completionHandler: (Swift: submitTaskRequest(\_:completionHandler:), or 'try await submitTaskRequest(\_:)') to capture all error conditions

## Declaration

```objectivec
- (BOOL) submitTaskRequest:(BGTaskRequest *) taskRequest error:(NSError **) error;
```

## Parameters

- `taskRequest`: A background task request object specifying the task identifier and optional configuration information.
- `error`: On input, a pointer to an error object. If an error occurs, this pointer is set to an error object containing the error information. Specify `nil` for this parameter to ignore the error information.

<a id="return-value"></a>

## Return Value

`YES` if the method succeeded, otherwise `NO`.

## Mentioned In

- [Performing long-running tasks on iOS and iPadOS](../performing-long-running-tasks-on-ios-and-ipados.md)
- [Starting and Terminating Tasks During Development](../starting-and-terminating-tasks-during-development.md)

<a id="Discussion"></a>

## Discussion

Submitting a task request for an unexecuted task that’s already in the queue replaces the previous task request.

There can be a total of 1 refresh task and 10 processing tasks scheduled at any time. Trying to schedule more tasks returns [BGTaskSchedulerErrorCodeTooManyPendingTaskRequests](error/code/toomanypendingtaskrequests.md).

## See Also

### Scheduling a task

- [registerForTaskWithIdentifier:usingQueue:launchHandler:](register%28fortaskwithidentifier_using_launchhandler_%29.md): Register a launch handler for the task with the associated identifier that’s executed on the specified queue.
