> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundtasks/bgtaskscheduler/errordomain](https://developer.apple.com/documentation/backgroundtasks/bgtaskscheduler/errordomain)

# errorDomain (Swift)

**Framework:** Background Tasks  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The background tasks error domain as a string.

## Declaration

```swift
class let errorDomain: String
```

## See Also

### Handling errors

- [BGTaskScheduler.Error](error.md): The Errors for the `BGTaskSchedulerError` domain.
- [BGTaskScheduler.Error.Code](error/code.md): An enumeration of the task scheduling errors.

# BGTaskSchedulerErrorDomain (Objective-C)

**Framework:** Background Tasks  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The background tasks error domain as a string.

## Declaration

```objectivec
extern NSErrorDomain const BGTaskSchedulerErrorDomain;
```

## See Also

### Handling errors

- [BGTaskSchedulerErrorCode](error/code.md): An enumeration of the task scheduling errors.
