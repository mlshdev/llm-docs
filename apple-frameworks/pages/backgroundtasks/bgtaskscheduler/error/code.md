> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundtasks/bgtaskscheduler/error/code](https://developer.apple.com/documentation/backgroundtasks/bgtaskscheduler/error/code)

# BGTaskScheduler.Error.Code (Swift)

**Framework:** Background Tasks  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

An enumeration of the task scheduling errors.

## Declaration

```swift
enum Code
```

## Topics

### Identifying an error

- [BGTaskScheduler.Error.Code.notPermitted](code/notpermitted.md): A task scheduling error that indicates the app isn’t permitted to launch the task.
- [BGTaskScheduler.Error.Code.tooManyPendingTaskRequests](code/toomanypendingtaskrequests.md): A task scheduling error that indicates there are too many pending tasks of the type requested.
- [BGTaskScheduler.Error.Code.unavailable](code/unavailable.md): A task scheduling error that indicates the app or extension can’t schedule background work.
- [BGTaskScheduler.Error.Code.immediateRunIneligible](code/immediaterunineligible.md): A task scheduling error that indicates a task request didn’t run immediately due to system conditions.

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Handling errors

- [BGTaskScheduler.Error](../error.md): The Errors for the `BGTaskSchedulerError` domain.
- [errorDomain](../errordomain.md): The background tasks error domain as a string.

# BGTaskSchedulerErrorCode (Objective-C)

**Framework:** Background Tasks  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

An enumeration of the task scheduling errors.

## Declaration

```objectivec
enum BGTaskSchedulerErrorCode : NSInteger;
```

## Topics

### Identifying an error

- [BGTaskSchedulerErrorCodeNotPermitted](code/notpermitted.md): A task scheduling error that indicates the app isn’t permitted to launch the task.
- [BGTaskSchedulerErrorCodeTooManyPendingTaskRequests](code/toomanypendingtaskrequests.md): A task scheduling error that indicates there are too many pending tasks of the type requested.
- [BGTaskSchedulerErrorCodeUnavailable](code/unavailable.md): A task scheduling error that indicates the app or extension can’t schedule background work.
- [BGTaskSchedulerErrorCodeImmediateRunIneligible](code/immediaterunineligible.md): A task scheduling error that indicates a task request didn’t run immediately due to system conditions.

## See Also

### Handling errors

- [BGTaskSchedulerErrorDomain](../errordomain.md): The background tasks error domain as a string.
