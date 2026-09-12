> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/indeletetaskstasklistresolutionresult](https://developer.apple.com/documentation/intents/indeletetaskstasklistresolutionresult)

# INDeleteTasksTaskListResolutionResult (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ (deprecated in 15.0) · iPadOS 13.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+ (deprecated in 8.0)

A resolution result for deleting task lists.

> INDeleteTasksTaskListResolutionResult is deprecated. There is no replacement.

## Declaration

```swift
class INDeleteTasksTaskListResolutionResult
```

<a id="overview"></a>

## Overview

You return an [INDeleteTasksTaskListResolutionResult](indeletetaskstasklistresolutionresult.md) object when resolving parameters containing an [INDeleteTasksTaskListUnsupportedReason](indeletetaskstasklistunsupportedreason.md) value. Use the creation method that best reflects your ability to successfully resolve the parameter.

For additional resolution operators, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result

- [init(taskListResolutionResult:)](indeletetaskstasklistresolutionresult/init%28tasklistresolutionresult_%29.md): Deprecated. Creates an object whose resolution involves successfully deleting a task from a task list.
- [unsupported(forReason:)](indeletetaskstasklistresolutionresult/unsupported%28forreason_%29.md): Deprecated. Creates an object whose resolution requires the user to confirm the task list before continuing.
- [INDeleteTasksTaskListUnsupportedReason](indeletetaskstasklistunsupportedreason.md): Deprecated. Constants that indicate the reason an app can’t support the delete task request.

## Relationships

### Inherits From

- [INTaskListResolutionResult](intasklistresolutionresult.md)

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
- [INDeleteTasksTaskResolutionResult](indeletetaskstaskresolutionresult.md): Deprecated. A resolution result for deleting tasks.

# INDeleteTasksTaskListResolutionResult (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ (deprecated in 15.0) · iPadOS 13.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+ (deprecated in 8.0)

A resolution result for deleting task lists.

> INDeleteTasksTaskListResolutionResult is deprecated. There is no replacement.

## Declaration

```objectivec
@interface INDeleteTasksTaskListResolutionResult : INTaskListResolutionResult
```

<a id="overview"></a>

## Overview

You return an [INDeleteTasksTaskListResolutionResult](indeletetaskstasklistresolutionresult.md) object when resolving parameters containing an [INDeleteTasksTaskListUnsupportedReason](indeletetaskstasklistunsupportedreason.md) value. Use the creation method that best reflects your ability to successfully resolve the parameter.

For additional resolution operators, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result

- [initWithTaskListResolutionResult:](indeletetaskstasklistresolutionresult/init%28tasklistresolutionresult_%29.md): Deprecated. Creates an object whose resolution involves successfully deleting a task from a task list.
- [unsupportedForReason:](indeletetaskstasklistresolutionresult/unsupported%28forreason_%29.md): Deprecated. Creates an object whose resolution requires the user to confirm the task list before continuing.
- [INDeleteTasksTaskListUnsupportedReason](indeletetaskstasklistunsupportedreason.md): Deprecated. Constants that indicate the reason an app can’t support the delete task request.

## Relationships

### Inherits From

- [INTaskListResolutionResult](intasklistresolutionresult.md)

## See Also

### Task Deletion

- [INDeleteTasksIntentHandling](indeletetasksintenthandling.md): Deprecated. An interface that handles requests to delete tasks from a task list.
- [INDeleteTasksIntent](indeletetasksintent.md): Deprecated. A request to delete one or more tasks.
- [INDeleteTasksIntentResponse](indeletetasksintentresponse.md): Deprecated. Your response to a request to delete tasks.
- [INDeleteTasksTaskResolutionResult](indeletetaskstaskresolutionresult.md): Deprecated. A resolution result for deleting tasks.
