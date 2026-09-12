> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inaddtasksintentresponse](https://developer.apple.com/documentation/intents/inaddtasksintentresponse)

# INAddTasksIntentResponse (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Your response to a request to add tasks to a task list.

> INAddTasksIntentResponse is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
class INAddTasksIntentResponse
```

<a id="overview"></a>

## Overview

Use an [INAddTasksIntentResponse](inaddtasksintentresponse.md) object to return information about the task list that you created. Siri communicates the information from your response to the user at appropriate times.

You create an [INAddTasksIntentResponse](inaddtasksintentresponse.md) object in the [confirm(intent:completion:)](inaddtasksintenthandling/confirm%28intent_completion_%29.md) and [handle(intent:completion:)](inaddtasksintenthandling/handle%28intent_completion_%29.md) methods of your handler object. For more information about implementing your handler object, see [INAddTasksIntentHandling](inaddtasksintenthandling.md).

## Topics

### Initializing the Response Object

- [init(code:userActivity:)](inaddtasksintentresponse/init%28code_useractivity_%29.md): Deprecated. Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](inaddtasksintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.
- [INAddTasksIntentResponseCode](inaddtasksintentresponsecode.md): Deprecated. Constants indicating the state of the response.

### Providing the Task Information

- [addedTasks](inaddtasksintentresponse/addedtasks.md): Deprecated. The tasks that you added to the task list.
- [modifiedTaskList](inaddtasksintentresponse/modifiedtasklist.md): Deprecated. The task list that you modified.

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

### Task Addition

- [INAddTasksIntentHandling](inaddtasksintenthandling.md): Deprecated. The handler interface for adding tasks to a task list.
- [INAddTasksIntent](inaddtasksintent.md): Deprecated. A request to add tasks to an existing task list.

# INAddTasksIntentResponse (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Your response to a request to add tasks to a task list.

> INAddTasksIntentResponse is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
@interface INAddTasksIntentResponse : INIntentResponse
```

<a id="overview"></a>

## Overview

Use an [INAddTasksIntentResponse](inaddtasksintentresponse.md) object to return information about the task list that you created. Siri communicates the information from your response to the user at appropriate times.

You create an [INAddTasksIntentResponse](inaddtasksintentresponse.md) object in the [confirmAddTasks:completion:](inaddtasksintenthandling/confirm%28intent_completion_%29.md) and [handleAddTasks:completion:](inaddtasksintenthandling/handle%28intent_completion_%29.md) methods of your handler object. For more information about implementing your handler object, see [INAddTasksIntentHandling](inaddtasksintenthandling.md).

## Topics

### Initializing the Response Object

- [initWithCode:userActivity:](inaddtasksintentresponse/init%28code_useractivity_%29.md): Deprecated. Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](inaddtasksintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.
- [INAddTasksIntentResponseCode](inaddtasksintentresponsecode.md): Deprecated. Constants indicating the state of the response.

### Providing the Task Information

- [addedTasks](inaddtasksintentresponse/addedtasks.md): Deprecated. The tasks that you added to the task list.
- [modifiedTaskList](inaddtasksintentresponse/modifiedtasklist.md): Deprecated. The task list that you modified.

## Relationships

### Inherits From

- [INIntentResponse](inintentresponse.md)

## See Also

### Task Addition

- [INAddTasksIntentHandling](inaddtasksintenthandling.md): Deprecated. The handler interface for adding tasks to a task list.
- [INAddTasksIntent](inaddtasksintent.md): Deprecated. A request to add tasks to an existing task list.
