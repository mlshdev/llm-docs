> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundtasks/bgcontinuedprocessingtaskrequest/submissionstrategy](https://developer.apple.com/documentation/backgroundtasks/bgcontinuedprocessingtaskrequest/submissionstrategy)

# BGContinuedProcessingTaskRequest.SubmissionStrategy (Swift)

**Framework:** Background Tasks  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The ways your app suggests the system handle your task’s submission under varying conditions.

## Declaration

```swift
enum SubmissionStrategy
```

<a id="overview"></a>

## Overview

The Continuous Background Task request ([BGContinuedProcessingTaskRequest](../bgcontinuedprocessingtaskrequest.md)) property [strategy](strategy.md) is of this type.

For more information on submission strategies, see [Performing long-running tasks on iOS and iPadOS](../performing-long-running-tasks-on-ios-and-ipados.md).

## Topics

### Choosing a strategy

- [BGContinuedProcessingTaskRequest.SubmissionStrategy.fail](submissionstrategy/fail.md): An option that fails the submission of a continuous background task if the system can’t run it immediately.
- [BGContinuedProcessingTaskRequest.SubmissionStrategy.queue](submissionstrategy/queue.md): An option that queues a continuous background task to begin as soon as possible.

### Creating a strategy

- [init(rawValue:)](submissionstrategy/init%28rawvalue_%29.md): Creates a submission strategy.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Choosing a processing strategy

- [strategy](strategy.md): The submission strategy for the scheduler to abide by.

# BGContinuedProcessingTaskRequestSubmissionStrategy (Objective-C)

**Framework:** Background Tasks  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+

The ways your app suggests the system handle your task’s submission under varying conditions.

## Declaration

```objectivec
enum BGContinuedProcessingTaskRequestSubmissionStrategy : NSInteger;
```

<a id="overview"></a>

## Overview

The Continuous Background Task request ([BGContinuedProcessingTaskRequest](../bgcontinuedprocessingtaskrequest.md)) property [strategy](strategy.md) is of this type.

For more information on submission strategies, see [Performing long-running tasks on iOS and iPadOS](../performing-long-running-tasks-on-ios-and-ipados.md).

## Topics

### Choosing a strategy

- [BGContinuedProcessingTaskRequestSubmissionStrategyFail](submissionstrategy/fail.md): An option that fails the submission of a continuous background task if the system can’t run it immediately.
- [BGContinuedProcessingTaskRequestSubmissionStrategyQueue](submissionstrategy/queue.md): An option that queues a continuous background task to begin as soon as possible.

## See Also

### Choosing a processing strategy

- [strategy](strategy.md): The submission strategy for the scheduler to abide by.
