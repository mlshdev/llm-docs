> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundtasks/bgcontinuedprocessingtaskrequest/submissionstrategy/fail](https://developer.apple.com/documentation/backgroundtasks/bgcontinuedprocessingtaskrequest/submissionstrategy/fail)

# BGContinuedProcessingTaskRequest.SubmissionStrategy.fail (Swift)

**Framework:** Background Tasks  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

An option that fails the submission of a continuous background task if the system can’t run it immediately.

## Declaration

```swift
case fail
```

## Mentioned In

- [Performing long-running tasks on iOS and iPadOS](../../performing-long-running-tasks-on-ios-and-ipados.md)

<a id="discussion"></a>

## Discussion

Task processing might not start right away if the system is currently resource constrainted.

## See Also

### Choosing a strategy

- [BGContinuedProcessingTaskRequest.SubmissionStrategy.queue](queue.md): An option that queues a continuous background task to begin as soon as possible.

# BGContinuedProcessingTaskRequestSubmissionStrategyFail (Objective-C)

**Framework:** Background Tasks  
**Kind:** Enumeration Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+

An option that fails the submission of a continuous background task if the system can’t run it immediately.

## Declaration

```objectivec
BGContinuedProcessingTaskRequestSubmissionStrategyFail
```

## Mentioned In

- [Performing long-running tasks on iOS and iPadOS](../../performing-long-running-tasks-on-ios-and-ipados.md)

<a id="discussion"></a>

## Discussion

Task processing might not start right away if the system is currently resource constrainted.

## See Also

### Choosing a strategy

- [BGContinuedProcessingTaskRequestSubmissionStrategyQueue](queue.md): An option that queues a continuous background task to begin as soon as possible.
