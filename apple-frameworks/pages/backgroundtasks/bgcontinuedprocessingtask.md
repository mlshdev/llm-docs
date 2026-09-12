> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundtasks/bgcontinuedprocessingtask](https://developer.apple.com/documentation/backgroundtasks/bgcontinuedprocessingtask)

# BGContinuedProcessingTask (Swift)

**Framework:** Background Tasks  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A task that starts in the foreground and can continue running in the background as needed.

## Declaration

```swift
class BGContinuedProcessingTask
```

## Mentioned In

- [Performing long-running tasks on iOS and iPadOS](performing-long-running-tasks-on-ios-and-ipados.md)

<a id="overview"></a>

## Overview

This task works with [BGContinuedProcessingTaskRequest](bgcontinuedprocessingtaskrequest.md).

The system displays the progress of this task in a Live Activity and a person can cancel it through the interface if they wish.

The system can terminate a continuous background task abruptly depending on run-time conditions, for example, under resource constraints. Your implementation needs to report progress using the [ProgressReporting](../foundation/progressreporting.md) protocol that this task conforms to. The system prioritizes the termination of tasks that reflect minimal or no progress, when resources become constrained.

For more information on Continuous Background Task requests, see [Performing long-running tasks on iOS and iPadOS](performing-long-running-tasks-on-ios-and-ipados.md).

## Topics

### Titling the task

- [title](bgcontinuedprocessingtask/title.md): The localized title displayed to a person.
- [subtitle](bgcontinuedprocessingtask/subtitle.md): The localized subtitle displayed to a person.
- [updateTitle(\_:subtitle:)](bgcontinuedprocessingtask/updatetitle%28__subtitle_%29.md): Update the task title and subtitle that the system displays to a person.

## Relationships

### Inherits From

- [BGTask](bgtask.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [ProgressReporting](../foundation/progressreporting.md)

## See Also

### Foreground tasks with background support

- [Performing long-running tasks on iOS and iPadOS](performing-long-running-tasks-on-ios-and-ipados.md): Use a continuous background task to do work that can complete as needed.
- [Background GPU Access](../bundleresources/entitlements/com.apple.developer.background-tasks.continued-processing.gpu.md): The entitlement the system requires for a continuous background task to use the GPU.

# BGContinuedProcessingTask (Objective-C)

**Framework:** Background Tasks  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+

A task that starts in the foreground and can continue running in the background as needed.

## Declaration

```objectivec
@interface BGContinuedProcessingTask : BGTask
```

## Mentioned In

- [Performing long-running tasks on iOS and iPadOS](performing-long-running-tasks-on-ios-and-ipados.md)

<a id="overview"></a>

## Overview

This task works with [BGContinuedProcessingTaskRequest](bgcontinuedprocessingtaskrequest.md).

The system displays the progress of this task in a Live Activity and a person can cancel it through the interface if they wish.

The system can terminate a continuous background task abruptly depending on run-time conditions, for example, under resource constraints. Your implementation needs to report progress using the [NSProgressReporting](../foundation/progressreporting.md) protocol that this task conforms to. The system prioritizes the termination of tasks that reflect minimal or no progress, when resources become constrained.

For more information on Continuous Background Task requests, see [Performing long-running tasks on iOS and iPadOS](performing-long-running-tasks-on-ios-and-ipados.md).

## Topics

### Titling the task

- [title](bgcontinuedprocessingtask/title.md): The localized title displayed to a person.
- [subtitle](bgcontinuedprocessingtask/subtitle.md): The localized subtitle displayed to a person.
- [updateTitle:subtitle:](bgcontinuedprocessingtask/updatetitle%28__subtitle_%29.md): Update the task title and subtitle that the system displays to a person.

## Relationships

### Inherits From

- [BGTask](bgtask.md)

### Conforms To

- [NSProgressReporting](../foundation/progressreporting.md)

## See Also

### Foreground tasks with background support

- [Performing long-running tasks on iOS and iPadOS](performing-long-running-tasks-on-ios-and-ipados.md): Use a continuous background task to do work that can complete as needed.
- [Background GPU Access](../bundleresources/entitlements/com.apple.developer.background-tasks.continued-processing.gpu.md): The entitlement the system requires for a continuous background task to use the GPU.
