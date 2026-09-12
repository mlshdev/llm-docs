> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundtasks/bgcontinuedprocessingtaskrequest](https://developer.apple.com/documentation/backgroundtasks/bgcontinuedprocessingtaskrequest)

# BGContinuedProcessingTaskRequest (Swift)

**Framework:** Background Tasks  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A request for a workload that the system continues processing even if a person backgrounds the app.

## Declaration

```swift
class BGContinuedProcessingTaskRequest
```

## Mentioned In

- [Performing long-running tasks on iOS and iPadOS](performing-long-running-tasks-on-ios-and-ipados.md)

<a id="overview"></a>

## Overview

The app submits this request from the foreground. Submission needs to occur as a result of a person’s action, such as tapping a button. The framework begins processing the task immediately, if possible, and the system allows it to continue running even if the app moves to the background.

For more information on Continuous Background Task requests, see [Performing long-running tasks on iOS and iPadOS](performing-long-running-tasks-on-ios-and-ipados.md).

## Topics

### Creating a task request

- [init(identifier:title:subtitle:)](bgcontinuedprocessingtaskrequest/init%28identifier_title_subtitle_%29.md): Creates an instance on behalf of the currently foregrounded app.

### Identifying resource dependencies

- [requiredResources](bgcontinuedprocessingtaskrequest/requiredresources.md): An option that indicates any special system resources that the task requires.
- [BGContinuedProcessingTaskRequest.Resources](bgcontinuedprocessingtaskrequest/resources.md): Options that specify additional system resources a background task needs.

### Choosing a processing strategy

- [strategy](bgcontinuedprocessingtaskrequest/strategy.md): The submission strategy for the scheduler to abide by.
- [BGContinuedProcessingTaskRequest.SubmissionStrategy](bgcontinuedprocessingtaskrequest/submissionstrategy.md): The ways your app suggests the system handle your task’s submission under varying conditions.

### Titling the task

- [subtitle](bgcontinuedprocessingtaskrequest/subtitle.md): The localized subtitle displayed to a person.
- [title](bgcontinuedprocessingtaskrequest/title.md): The localized task title displayed to a person.

## Relationships

### Inherits From

- [BGTaskRequest](bgtaskrequest.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Task requests

- [BGProcessingTaskRequest](bgprocessingtaskrequest.md): A request to launch your app in the background to execute a processing task that can take minutes to complete.
- [BGAppRefreshTaskRequest](bgapprefreshtaskrequest.md): A request to launch your app in the background to execute a short refresh task.
- [BGTaskRequest](bgtaskrequest.md): An abstract class for representing task requests.
- [BGHealthResearchTaskRequest](bghealthresearchtaskrequest.md): A request to launch your app in the background to execute processing for a health research study in which a user participates.

# BGContinuedProcessingTaskRequest (Objective-C)

**Framework:** Background Tasks  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+

A request for a workload that the system continues processing even if a person backgrounds the app.

## Declaration

```objectivec
@interface BGContinuedProcessingTaskRequest : BGTaskRequest
```

## Mentioned In

- [Performing long-running tasks on iOS and iPadOS](performing-long-running-tasks-on-ios-and-ipados.md)

<a id="overview"></a>

## Overview

The app submits this request from the foreground. Submission needs to occur as a result of a person’s action, such as tapping a button. The framework begins processing the task immediately, if possible, and the system allows it to continue running even if the app moves to the background.

For more information on Continuous Background Task requests, see [Performing long-running tasks on iOS and iPadOS](performing-long-running-tasks-on-ios-and-ipados.md).

## Topics

### Creating a task request

- [initWithIdentifier:title:subtitle:](bgcontinuedprocessingtaskrequest/init%28identifier_title_subtitle_%29.md): Creates an instance on behalf of the currently foregrounded app.

### Identifying resource dependencies

- [requiredResources](bgcontinuedprocessingtaskrequest/requiredresources.md): An option that indicates any special system resources that the task requires.
- [BGContinuedProcessingTaskRequestResources](bgcontinuedprocessingtaskrequest/resources.md): Options that specify additional system resources a background task needs.

### Choosing a processing strategy

- [strategy](bgcontinuedprocessingtaskrequest/strategy.md): The submission strategy for the scheduler to abide by.
- [BGContinuedProcessingTaskRequestSubmissionStrategy](bgcontinuedprocessingtaskrequest/submissionstrategy.md): The ways your app suggests the system handle your task’s submission under varying conditions.

### Titling the task

- [subtitle](bgcontinuedprocessingtaskrequest/subtitle.md): The localized subtitle displayed to a person.
- [title](bgcontinuedprocessingtaskrequest/title.md): The localized task title displayed to a person.

## Relationships

### Inherits From

- [BGTaskRequest](bgtaskrequest.md)

## See Also

### Task requests

- [BGProcessingTaskRequest](bgprocessingtaskrequest.md): A request to launch your app in the background to execute a processing task that can take minutes to complete.
- [BGAppRefreshTaskRequest](bgapprefreshtaskrequest.md): A request to launch your app in the background to execute a short refresh task.
- [BGTaskRequest](bgtaskrequest.md): An abstract class for representing task requests.
- [BGHealthResearchTaskRequest](bghealthresearchtaskrequest.md): A request to launch your app in the background to execute processing for a health research study in which a user participates.
