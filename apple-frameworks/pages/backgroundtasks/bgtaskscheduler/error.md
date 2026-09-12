> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundtasks/bgtaskscheduler/error](https://developer.apple.com/documentation/backgroundtasks/bgtaskscheduler/error)

# BGTaskScheduler.Error

**Framework:** Background Tasks  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The Errors for the `BGTaskSchedulerError` domain.

## Declaration

```swift
struct Error
```

## Topics

### Getting the error codes

- [BGTaskScheduler.Error.Code](error/code.md): An enumeration of the task scheduling errors.
- [notPermitted](error/notpermitted.md): A task scheduling error that indicates the app isn’t permitted to launch the task.
- [tooManyPendingTaskRequests](error/toomanypendingtaskrequests.md): A task scheduling error that indicates there are too many pending tasks of the type requested.
- [unavailable](error/unavailable.md): A task scheduling error that indicates the app or extension can’t schedule background work.

### Getting the error domain

- [errorDomain](error/errordomain.md): The background tasks error domain as a string.

### Type Properties

- [immediateRunIneligible](error/immediaterunineligible.md)

## Relationships

### Conforms To

- [CustomNSError](../../foundation/customnserror.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Handling errors

- [BGTaskScheduler.Error.Code](error/code.md): An enumeration of the task scheduling errors.
- [errorDomain](errordomain.md): The background tasks error domain as a string.
