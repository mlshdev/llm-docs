> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundtasks/bgcontinuedprocessingtaskrequest/strategy](https://developer.apple.com/documentation/backgroundtasks/bgcontinuedprocessingtaskrequest/strategy)

# strategy (Swift)

**Framework:** Background Tasks  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The submission strategy for the scheduler to abide by.

## Declaration

```swift
var strategy: BGContinuedProcessingTaskRequest.SubmissionStrategy { get set }
```

## Mentioned In

- [Performing long-running tasks on iOS and iPadOS](../performing-long-running-tasks-on-ios-and-ipados.md)

<a id="Discussion"></a>

## Discussion

The default value is [BGContinuedProcessingTaskRequest.SubmissionStrategy.queue](submissionstrategy/queue.md).

## See Also

### Choosing a processing strategy

- [BGContinuedProcessingTaskRequest.SubmissionStrategy](submissionstrategy.md): The ways your app suggests the system handle your task’s submission under varying conditions.

# strategy (Objective-C)

**Framework:** Background Tasks  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

The submission strategy for the scheduler to abide by.

## Declaration

```objectivec
@property (nonatomic) BGContinuedProcessingTaskRequestSubmissionStrategy strategy;
```

## Mentioned In

- [Performing long-running tasks on iOS and iPadOS](../performing-long-running-tasks-on-ios-and-ipados.md)

<a id="Discussion"></a>

## Discussion

The default value is [BGContinuedProcessingTaskRequestSubmissionStrategyQueue](submissionstrategy/queue.md).

## See Also

### Choosing a processing strategy

- [BGContinuedProcessingTaskRequestSubmissionStrategy](submissionstrategy.md): The ways your app suggests the system handle your task’s submission under varying conditions.
