> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/operation/queuepriority-swift.enum](https://developer.apple.com/documentation/foundation/operation/queuepriority-swift.enum)

# Operation.QueuePriority (Swift)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

These constants let you prioritize the order in which operations execute.

## Declaration

```swift
enum QueuePriority
```

<a id="overview"></a>

## Overview

You can use these constants to specify the relative ordering of operations that are waiting to be started in an operation queue. You should always use these constants (and not the defined value) for determining priority.

## Topics

### Constants

- [Operation.QueuePriority.veryLow](queuepriority-swift.enum/verylow.md): Operations receive very low priority for execution.
- [Operation.QueuePriority.low](queuepriority-swift.enum/low.md): Operations receive low priority for execution.
- [Operation.QueuePriority.normal](queuepriority-swift.enum/normal.md): Operations receive the normal priority for execution.
- [Operation.QueuePriority.high](queuepriority-swift.enum/high.md): Operations receive high priority for execution.
- [Operation.QueuePriority.veryHigh](queuepriority-swift.enum/veryhigh.md): Operations receive very high priority for execution.

### Initializers

- [init(rawValue:)](queuepriority-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [QualityOfService](../qualityofservice.md): Constants that indicate the nature and importance of work to the system.

# NSOperationQueuePriority (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

These constants let you prioritize the order in which operations execute.

## Declaration

```objectivec
enum NSOperationQueuePriority : NSInteger;
```

<a id="overview"></a>

## Overview

You can use these constants to specify the relative ordering of operations that are waiting to be started in an operation queue. You should always use these constants (and not the defined value) for determining priority.

## Topics

### Constants

- [NSOperationQueuePriorityVeryLow](queuepriority-swift.enum/verylow.md): Operations receive very low priority for execution.
- [NSOperationQueuePriorityLow](queuepriority-swift.enum/low.md): Operations receive low priority for execution.
- [NSOperationQueuePriorityNormal](queuepriority-swift.enum/normal.md): Operations receive the normal priority for execution.
- [NSOperationQueuePriorityHigh](queuepriority-swift.enum/high.md): Operations receive high priority for execution.
- [NSOperationQueuePriorityVeryHigh](queuepriority-swift.enum/veryhigh.md): Operations receive very high priority for execution.

## See Also

### Constants

- [NSQualityOfService](../qualityofservice.md): Constants that indicate the nature and importance of work to the system.
