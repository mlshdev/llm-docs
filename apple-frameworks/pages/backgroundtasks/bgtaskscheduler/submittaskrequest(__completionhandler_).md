> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundtasks/bgtaskscheduler/submittaskrequest(_:completionhandler:)](https://developer.apple.com/documentation/backgroundtasks/bgtaskscheduler/submittaskrequest(_:completionhandler:))

# submitTaskRequest(\_:completionHandler:) (Swift)

**Framework:** Background Tasks  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+

Submits a background task request to be scheduled with a completion handler.

## Declaration

```swift
func submitTaskRequest(_ taskRequest: BGTaskRequest, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func submitTaskRequest(_ taskRequest: BGTaskRequest) async throws
```

## Parameters

- `taskRequest`: The task request object representing the parameters of the background task to be scheduled.
- `completionHandler`: A block that is called when submission completes. The block receives an optional error parameter:

  - `nil` if the task was submitted successfully
  - An `NSError` if submission failed

<a id="discussion"></a>

## Discussion

This method asynchronously submits the task request and invokes the completion handler with any errors that occur during submission.

Submitting a task request for an unexecuted task that’s already in the queue replaces the previous task request.

There can be a total of 1 refresh task and 10 processing tasks scheduled at any time. Trying to schedule more tasks will result in an error with code [BGTaskScheduler.Error.Code.tooManyPendingTaskRequests](error/code/toomanypendingtaskrequests.md).

Common errors include:

- [BGTaskScheduler.Error.Code.notPermitted](error/code/notpermitted.md): Task identifier not permitted or unsupported resources requested
- [BGTaskScheduler.Error.Code.tooManyPendingTaskRequests](error/code/toomanypendingtaskrequests.md): Too many pending tasks of this type
- [BGTaskScheduler.Error.Code.unavailable](error/code/unavailable.md): Background refresh disabled or app not permitted
- [BGTaskScheduler.Error.Code.immediateRunIneligible](error/code/immediaterunineligible.md): Immediate run not eligible due to system conditions

The completion handler is called on an arbitrary queue.

> **Note**

> The completion handler may be invoked on an arbitrary queue after an arbitrary amount of delay. Do not call this method from the main thread or performance-critical contexts.

This method replaces the deprecated [submit(\_:)](submit%28__%29.md) method.

# submitTaskRequest:completionHandler: (Objective-C)

**Framework:** Background Tasks  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+

Submits a background task request to be scheduled with a completion handler.

## Declaration

```objectivec
- (void) submitTaskRequest:(BGTaskRequest *) taskRequest completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `taskRequest`: The task request object representing the parameters of the background task to be scheduled.
- `completionHandler`: A block that is called when submission completes. The block receives an optional error parameter:

  - `nil` if the task was submitted successfully
  - An `NSError` if submission failed

<a id="discussion"></a>

## Discussion

This method asynchronously submits the task request and invokes the completion handler with any errors that occur during submission.

Submitting a task request for an unexecuted task that’s already in the queue replaces the previous task request.

There can be a total of 1 refresh task and 10 processing tasks scheduled at any time. Trying to schedule more tasks will result in an error with code [BGTaskSchedulerErrorCodeTooManyPendingTaskRequests](error/code/toomanypendingtaskrequests.md).

Common errors include:

- [BGTaskSchedulerErrorCodeNotPermitted](error/code/notpermitted.md): Task identifier not permitted or unsupported resources requested
- [BGTaskSchedulerErrorCodeTooManyPendingTaskRequests](error/code/toomanypendingtaskrequests.md): Too many pending tasks of this type
- [BGTaskSchedulerErrorCodeUnavailable](error/code/unavailable.md): Background refresh disabled or app not permitted
- [BGTaskSchedulerErrorCodeImmediateRunIneligible](error/code/immediaterunineligible.md): Immediate run not eligible due to system conditions

The completion handler is called on an arbitrary queue.

> **Note**

> The completion handler may be invoked on an arbitrary queue after an arbitrary amount of delay. Do not call this method from the main thread or performance-critical contexts.

This method replaces the deprecated [submitTaskRequest:error:](submit%28__%29.md) method.
