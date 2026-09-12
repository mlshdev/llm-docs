> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insnoozetasksintentresponse](https://developer.apple.com/documentation/intents/insnoozetasksintentresponse)

# INSnoozeTasksIntentResponse (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Your response to a delete tasks request.

> INSnoozeTasksIntentResponse is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
class INSnoozeTasksIntentResponse
```

<a id="overview"></a>

## Overview

Use an [INSnoozeTasksIntentResponse](insnoozetasksintentresponse.md) object to return information about your attempt to delete an existing task. Siri communicates your response information to the user at appropriate times.

You create an [INSnoozeTasksIntentResponse](insnoozetasksintentresponse.md) object in the [confirm(intent:completion:)](insnoozetasksintenthandling/confirm%28intent_completion_%29.md) and [handle(intent:completion:)](insnoozetasksintenthandling/handle%28intent_completion_%29.md) methods of your handler object. For more information about implementing your handler object, see [INSnoozeTasksIntentHandling](insnoozetasksintenthandling.md).

## Topics

### Initializing the Response Object

- [init(code:userActivity:)](insnoozetasksintentresponse/init%28code_useractivity_%29.md): Deprecated. Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](insnoozetasksintentresponse/code.md): Deprecated. The code that indicates whether you successfully handled the intent.
- [INSnoozeTasksIntentResponseCode](insnoozetasksintentresponsecode.md): Deprecated. Constants that indicate the response state.

### Accessing the Response Details

- [snoozedTasks](insnoozetasksintentresponse/snoozedtasks.md): Deprecated. An array of tasks to snooze.

## Relationships

### Inherits From

- [INIntentResponse](inintentresponse.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Task Deferral

- [INSnoozeTasksIntentHandling](insnoozetasksintenthandling.md): Deprecated. The handler interface that snoozes tasks in a task list.
- [INSnoozeTasksIntent](insnoozetasksintent.md): Deprecated. A request to snooze one or more tasks.

# INSnoozeTasksIntentResponse (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Your response to a delete tasks request.

> INSnoozeTasksIntentResponse is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
@interface INSnoozeTasksIntentResponse : INIntentResponse
```

<a id="overview"></a>

## Overview

Use an [INSnoozeTasksIntentResponse](insnoozetasksintentresponse.md) object to return information about your attempt to delete an existing task. Siri communicates your response information to the user at appropriate times.

You create an [INSnoozeTasksIntentResponse](insnoozetasksintentresponse.md) object in the [confirmSnoozeTasks:completion:](insnoozetasksintenthandling/confirm%28intent_completion_%29.md) and [handleSnoozeTasks:completion:](insnoozetasksintenthandling/handle%28intent_completion_%29.md) methods of your handler object. For more information about implementing your handler object, see [INSnoozeTasksIntentHandling](insnoozetasksintenthandling.md).

## Topics

### Initializing the Response Object

- [initWithCode:userActivity:](insnoozetasksintentresponse/init%28code_useractivity_%29.md): Deprecated. Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](insnoozetasksintentresponse/code.md): Deprecated. The code that indicates whether you successfully handled the intent.
- [INSnoozeTasksIntentResponseCode](insnoozetasksintentresponsecode.md): Deprecated. Constants that indicate the response state.

### Accessing the Response Details

- [snoozedTasks](insnoozetasksintentresponse/snoozedtasks.md): Deprecated. An array of tasks to snooze.

## Relationships

### Inherits From

- [INIntentResponse](inintentresponse.md)

## See Also

### Task Deferral

- [INSnoozeTasksIntentHandling](insnoozetasksintenthandling.md): Deprecated. The handler interface that snoozes tasks in a task list.
- [INSnoozeTasksIntent](insnoozetasksintent.md): Deprecated. A request to snooze one or more tasks.
