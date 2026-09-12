> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundtasks/bgtask](https://developer.apple.com/documentation/backgroundtasks/bgtask)

# BGTask (Swift)

**Framework:** Background Tasks  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

An abstract class for the framework’s tasks.

## Declaration

```swift
class BGTask
```

## Mentioned In

- [Performing long-running tasks on iOS and iPadOS](performing-long-running-tasks-on-ios-and-ipados.md)

<a id="overview"></a>

## Overview

With the exception of [BGContinuedProcessingTask](bgcontinuedprocessingtask.md), which your app executes in the foreground, the system executes [BGTask](bgtask.md) subclasses on behalf of your app, while your app is in the background.

## Topics

### Reading Task Information

- [identifier](bgtask/identifier.md): The string identifier of the task.

### Configuring a Task

- [expirationHandler](bgtask/expirationhandler.md): A handler called shortly before the task’s background time expires.
- [setTaskCompleted(success:)](bgtask/settaskcompleted%28success_%29.md): Informs the background task scheduler that the task is complete.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [BGAppRefreshTask](bgapprefreshtask.md)
- [BGContinuedProcessingTask](bgcontinuedprocessingtask.md)
- [BGProcessingTask](bgprocessingtask.md)

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
- [BGTaskScheduler](bgtaskscheduler.md): A class for scheduling tasks that add background support to your app’s most critical work.

# BGTask (Objective-C)

**Framework:** Background Tasks  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

An abstract class for the framework’s tasks.

## Declaration

```objectivec
@interface BGTask : NSObject
```

## Mentioned In

- [Performing long-running tasks on iOS and iPadOS](performing-long-running-tasks-on-ios-and-ipados.md)

<a id="overview"></a>

## Overview

With the exception of [BGContinuedProcessingTask](bgcontinuedprocessingtask.md), which your app executes in the foreground, the system executes [BGTask](bgtask.md) subclasses on behalf of your app, while your app is in the background.

## Topics

### Reading Task Information

- [identifier](bgtask/identifier.md): The string identifier of the task.

### Configuring a Task

- [expirationHandler](bgtask/expirationhandler.md): A handler called shortly before the task’s background time expires.
- [setTaskCompletedWithSuccess:](bgtask/settaskcompleted%28success_%29.md): Informs the background task scheduler that the task is complete.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [BGAppRefreshTask](bgapprefreshtask.md)
- [BGContinuedProcessingTask](bgcontinuedprocessingtask.md)
- [BGProcessingTask](bgprocessingtask.md)

## See Also

### Essentials

- [BGTaskScheduler](bgtaskscheduler.md): A class for scheduling tasks that add background support to your app’s most critical work.
