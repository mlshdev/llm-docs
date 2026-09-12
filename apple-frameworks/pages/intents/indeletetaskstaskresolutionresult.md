> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/indeletetaskstaskresolutionresult](https://developer.apple.com/documentation/intents/indeletetaskstaskresolutionresult)

# INDeleteTasksTaskResolutionResult (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ (deprecated in 15.0) · iPadOS 13.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+ (deprecated in 8.0)

A resolution result for deleting tasks.

> INDeleteTasksTaskResolutionResult is deprecated. There is no replacement.

## Declaration

```swift
class INDeleteTasksTaskResolutionResult
```

<a id="overview"></a>

## Overview

You return an [INDeleteTasksTaskResolutionResult](indeletetaskstaskresolutionresult.md) object when resolving parameters containing an [INDeleteTasksTaskUnsupportedReason](indeletetaskstaskunsupportedreason.md) value. Use the creation method that best reflects your ability to resolve the parameter successfully.

For additional resolution operators, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result

- [init(taskResolutionResult:)](indeletetaskstaskresolutionresult/init%28taskresolutionresult_%29.md): Deprecated. Creates an object whose resolution involves successfully deleting a task.
- [unsupported(forReason:)](indeletetaskstaskresolutionresult/unsupported%28forreason_%29.md): Deprecated. Creates an object whose resolution requires the user to confirm the task before continuing.
- [INDeleteTasksTaskUnsupportedReason](indeletetaskstaskunsupportedreason.md): Deprecated. Constants that indicate the reason the app can’t support the delete task request.

## Relationships

### Inherits From

- [INTaskResolutionResult](intaskresolutionresult.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Task Deletion

- [INDeleteTasksIntentHandling](indeletetasksintenthandling.md): Deprecated. An interface that handles requests to delete tasks from a task list.
- [INDeleteTasksIntent](indeletetasksintent.md): Deprecated. A request to delete one or more tasks.
- [INDeleteTasksIntentResponse](indeletetasksintentresponse.md): Deprecated. Your response to a request to delete tasks.
- [INDeleteTasksTaskListResolutionResult](indeletetaskstasklistresolutionresult.md): Deprecated. A resolution result for deleting task lists.

# INDeleteTasksTaskResolutionResult (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ (deprecated in 15.0) · iPadOS 13.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+ (deprecated in 8.0)

A resolution result for deleting tasks.

> INDeleteTasksTaskResolutionResult is deprecated. There is no replacement.

## Declaration

```objectivec
@interface INDeleteTasksTaskResolutionResult : INTaskResolutionResult
```

<a id="overview"></a>

## Overview

You return an [INDeleteTasksTaskResolutionResult](indeletetaskstaskresolutionresult.md) object when resolving parameters containing an [INDeleteTasksTaskUnsupportedReason](indeletetaskstaskunsupportedreason.md) value. Use the creation method that best reflects your ability to resolve the parameter successfully.

For additional resolution operators, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result

- [initWithTaskResolutionResult:](indeletetaskstaskresolutionresult/init%28taskresolutionresult_%29.md): Deprecated. Creates an object whose resolution involves successfully deleting a task.
- [unsupportedForReason:](indeletetaskstaskresolutionresult/unsupported%28forreason_%29.md): Deprecated. Creates an object whose resolution requires the user to confirm the task before continuing.
- [INDeleteTasksTaskUnsupportedReason](indeletetaskstaskunsupportedreason.md): Deprecated. Constants that indicate the reason the app can’t support the delete task request.

## Relationships

### Inherits From

- [INTaskResolutionResult](intaskresolutionresult.md)

## See Also

### Task Deletion

- [INDeleteTasksIntentHandling](indeletetasksintenthandling.md): Deprecated. An interface that handles requests to delete tasks from a task list.
- [INDeleteTasksIntent](indeletetasksintent.md): Deprecated. A request to delete one or more tasks.
- [INDeleteTasksIntentResponse](indeletetasksintentresponse.md): Deprecated. Your response to a request to delete tasks.
- [INDeleteTasksTaskListResolutionResult](indeletetaskstasklistresolutionresult.md): Deprecated. A resolution result for deleting task lists.
