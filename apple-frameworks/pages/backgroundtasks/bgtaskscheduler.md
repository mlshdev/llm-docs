> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundtasks/bgtaskscheduler](https://developer.apple.com/documentation/backgroundtasks/bgtaskscheduler)

# BGTaskScheduler (Swift)

**Framework:** Background Tasks  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

A class for scheduling tasks that add background support to your app’s most critical work.

## Declaration

```swift
class BGTaskScheduler
```

## Mentioned In

- [Performing long-running tasks on iOS and iPadOS](performing-long-running-tasks-on-ios-and-ipados.md)

<a id="overview"></a>

## Overview

Background tasks give your app a way to run code even when the app is suspended:

- To register, schedule, and run tasks in the background, see [Using background tasks to update your app](../uikit/using-background-tasks-to-update-your-app.md).
- To submit work in the foreground that can finish even if the app moves to the background, see [Performing long-running tasks on iOS and iPadOS](performing-long-running-tasks-on-ios-and-ipados.md).

## Topics

### Getting the shared task scheduler

- [shared](bgtaskscheduler/shared.md): The shared background task scheduler instance.

### Checking task requirements

- [supportedResources](bgtaskscheduler/supportedresources.md): Additional system resources that a continuous background task can request.

### Scheduling a task

- [register(forTaskWithIdentifier:using:launchHandler:)](bgtaskscheduler/register%28fortaskwithidentifier_using_launchhandler_%29.md): Register a launch handler for the task with the associated identifier that’s executed on the specified queue.
- [submit(\_:)](bgtaskscheduler/submit%28__%29.md): Deprecated. Submit a previously registered background task for execution.

### Canceling a task

- [cancel(taskRequestWithIdentifier:)](bgtaskscheduler/cancel%28taskrequestwithidentifier_%29.md): Cancel a previously scheduled task request.
- [cancelAllTaskRequests()](bgtaskscheduler/cancelalltaskrequests%28%29.md): Cancel all scheduled task requests.

### Getting all scheduled tasks

- [getPendingTaskRequests(completionHandler:)](bgtaskscheduler/getpendingtaskrequests%28completionhandler_%29.md): Request a list of unexecuted scheduled task requests.

### Handling errors

- [BGTaskScheduler.Error](bgtaskscheduler/error.md): The Errors for the `BGTaskSchedulerError` domain.
- [BGTaskScheduler.Error.Code](bgtaskscheduler/error/code.md): An enumeration of the task scheduling errors.
- [errorDomain](bgtaskscheduler/errordomain.md): The background tasks error domain as a string.

### Instance Methods

- [submitTaskRequest(\_:completionHandler:)](bgtaskscheduler/submittaskrequest%28__completionhandler_%29.md): Submits a background task request to be scheduled with a completion handler.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Essentials

- [Background Tasks updates](https://developer.apple.com/documentation/updates/backgroundtasks): Learn about important changes in Background Tasks.
- [BGTask](bgtask.md): An abstract class for the framework’s tasks.

# BGTaskScheduler (Objective-C)

**Framework:** Background Tasks  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

A class for scheduling tasks that add background support to your app’s most critical work.

## Declaration

```objectivec
@interface BGTaskScheduler : NSObject
```

## Mentioned In

- [Performing long-running tasks on iOS and iPadOS](performing-long-running-tasks-on-ios-and-ipados.md)

<a id="overview"></a>

## Overview

Background tasks give your app a way to run code even when the app is suspended:

- To register, schedule, and run tasks in the background, see [Using background tasks to update your app](../uikit/using-background-tasks-to-update-your-app.md).
- To submit work in the foreground that can finish even if the app moves to the background, see [Performing long-running tasks on iOS and iPadOS](performing-long-running-tasks-on-ios-and-ipados.md).

## Topics

### Getting the shared task scheduler

- [sharedScheduler](bgtaskscheduler/shared.md): The shared background task scheduler instance.

### Checking task requirements

- [supportedResources](bgtaskscheduler/supportedresources.md): Additional system resources that a continuous background task can request.

### Scheduling a task

- [registerForTaskWithIdentifier:usingQueue:launchHandler:](bgtaskscheduler/register%28fortaskwithidentifier_using_launchhandler_%29.md): Register a launch handler for the task with the associated identifier that’s executed on the specified queue.
- [submitTaskRequest:error:](bgtaskscheduler/submit%28__%29.md): Deprecated. Submit a previously registered background task for execution.

### Canceling a task

- [cancelTaskRequestWithIdentifier:](bgtaskscheduler/cancel%28taskrequestwithidentifier_%29.md): Cancel a previously scheduled task request.
- [cancelAllTaskRequests](bgtaskscheduler/cancelalltaskrequests%28%29.md): Cancel all scheduled task requests.

### Getting all scheduled tasks

- [getPendingTaskRequestsWithCompletionHandler:](bgtaskscheduler/getpendingtaskrequests%28completionhandler_%29.md): Request a list of unexecuted scheduled task requests.

### Handling errors

- [BGTaskSchedulerErrorCode](bgtaskscheduler/error/code.md): An enumeration of the task scheduling errors.
- [BGTaskSchedulerErrorDomain](bgtaskscheduler/errordomain.md): The background tasks error domain as a string.

### Instance Methods

- [submitTaskRequest:completionHandler:](bgtaskscheduler/submittaskrequest%28__completionhandler_%29.md): Submits a background task request to be scheduled with a completion handler.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Essentials

- [BGTask](bgtask.md): An abstract class for the framework’s tasks.
