> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundtasks/bgcontinuedprocessingtaskrequest/submissionstrategy/queue](https://developer.apple.com/documentation/backgroundtasks/bgcontinuedprocessingtaskrequest/submissionstrategy/queue)

# BGContinuedProcessingTaskRequest.SubmissionStrategy.queue (Swift)

**Framework:** Background Tasks  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

An option that queues a continuous background task to begin as soon as possible.

## Declaration

```swift
case queue
```

## Mentioned In

- [Performing long-running tasks on iOS and iPadOS](../../performing-long-running-tasks-on-ios-and-ipados.md)

<a id="discussion"></a>

## Discussion

This option adds the task request to the back of a queue. The system runs the task as soon as possible. The system might be unable to run a submitted task immediately if the system is currently at the maximum level of concurrent tasks.

> **Important**

> The system cancels queued [BGContinuedProcessingTaskRequest](../../bgcontinuedprocessingtaskrequest.md) objects if someone closes your app using the app switcher.

## See Also

### Choosing a strategy

- [BGContinuedProcessingTaskRequest.SubmissionStrategy.fail](fail.md): An option that fails the submission of a continuous background task if the system can’t run it immediately.

# BGContinuedProcessingTaskRequestSubmissionStrategyQueue (Objective-C)

**Framework:** Background Tasks  
**Kind:** Enumeration Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+

An option that queues a continuous background task to begin as soon as possible.

## Declaration

```objectivec
BGContinuedProcessingTaskRequestSubmissionStrategyQueue
```

## Mentioned In

- [Performing long-running tasks on iOS and iPadOS](../../performing-long-running-tasks-on-ios-and-ipados.md)

<a id="discussion"></a>

## Discussion

This option adds the task request to the back of a queue. The system runs the task as soon as possible. The system might be unable to run a submitted task immediately if the system is currently at the maximum level of concurrent tasks.

> **Important**

> The system cancels queued [BGContinuedProcessingTaskRequest](../../bgcontinuedprocessingtaskrequest.md) objects if someone closes your app using the app switcher.

## See Also

### Choosing a strategy

- [BGContinuedProcessingTaskRequestSubmissionStrategyFail](fail.md): An option that fails the submission of a continuous background task if the system can’t run it immediately.
