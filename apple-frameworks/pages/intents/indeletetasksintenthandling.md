> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/indeletetasksintenthandling](https://developer.apple.com/documentation/intents/indeletetasksintenthandling)

# INDeleteTasksIntentHandling (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 13.0+ (deprecated in 15.0) · iPadOS 13.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+ (deprecated in 8.0)

An interface that handles requests to delete tasks from a task list.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
protocol INDeleteTasksIntentHandling : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Use the methods of the [INDeleteTasksIntentHandling](indeletetasksintenthandling.md) protocol to resolve, confirm, and handle requests to delete tasks from a task list. Adopt this protocol in an object of your Intents extension capable of handling the request directly or forwarding the request to your app or task management service.

Siri delivers an [INDeleteTasksIntent](indeletetasksintent.md) object to your handler when the user asks to delete tasks from a task list in your app. The provided intent object contains descriptions of the tasks and any triggers to associate with each task. Use the methods of this protocol to resolve the parameters and delete the tasks.

## Topics

### Resolving Details of the Intent

- [resolveTaskList(for:with:)](indeletetasksintenthandling/resolvetasklist%28for_with_%29.md): Deprecated. Resolves the task list from which to delete tasks.
- [resolveTasks(for:with:)](indeletetasksintenthandling/resolvetasks%28for_with_%29.md): Deprecated. Resolves the tasks to delete.

### Confirming the Response

- [confirm(intent:completion:)](indeletetasksintenthandling/confirm%28intent_completion_%29.md): Deprecated. Validates whether you can delete the task.

### Handling the Intent

- [handle(intent:completion:)](indeletetasksintenthandling/handle%28intent_completion_%29.md): Deprecated. Handles deleting a task.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Task Deletion

- [INDeleteTasksIntent](indeletetasksintent.md): Deprecated. A request to delete one or more tasks.
- [INDeleteTasksIntentResponse](indeletetasksintentresponse.md): Deprecated. Your response to a request to delete tasks.
- [INDeleteTasksTaskListResolutionResult](indeletetaskstasklistresolutionresult.md): Deprecated. A resolution result for deleting task lists.
- [INDeleteTasksTaskResolutionResult](indeletetaskstaskresolutionresult.md): Deprecated. A resolution result for deleting tasks.

# INDeleteTasksIntentHandling (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 13.0+ (deprecated in 15.0) · iPadOS 13.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+ (deprecated in 8.0)

An interface that handles requests to delete tasks from a task list.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@protocol INDeleteTasksIntentHandling <NSObject>
```

<a id="overview"></a>

## Overview

Use the methods of the [INDeleteTasksIntentHandling](indeletetasksintenthandling.md) protocol to resolve, confirm, and handle requests to delete tasks from a task list. Adopt this protocol in an object of your Intents extension capable of handling the request directly or forwarding the request to your app or task management service.

Siri delivers an [INDeleteTasksIntent](indeletetasksintent.md) object to your handler when the user asks to delete tasks from a task list in your app. The provided intent object contains descriptions of the tasks and any triggers to associate with each task. Use the methods of this protocol to resolve the parameters and delete the tasks.

## Topics

### Resolving Details of the Intent

- [resolveTaskListForDeleteTasks:withCompletion:](indeletetasksintenthandling/resolvetasklist%28for_with_%29.md): Deprecated. Resolves the task list from which to delete tasks.
- [resolveTasksForDeleteTasks:withCompletion:](indeletetasksintenthandling/resolvetasks%28for_with_%29.md): Deprecated. Resolves the tasks to delete.

### Confirming the Response

- [confirmDeleteTasks:completion:](indeletetasksintenthandling/confirm%28intent_completion_%29.md): Deprecated. Validates whether you can delete the task.

### Handling the Intent

- [handleDeleteTasks:completion:](indeletetasksintenthandling/handle%28intent_completion_%29.md): Deprecated. Handles deleting a task.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Task Deletion

- [INDeleteTasksIntent](indeletetasksintent.md): Deprecated. A request to delete one or more tasks.
- [INDeleteTasksIntentResponse](indeletetasksintentresponse.md): Deprecated. Your response to a request to delete tasks.
- [INDeleteTasksTaskListResolutionResult](indeletetaskstasklistresolutionresult.md): Deprecated. A resolution result for deleting task lists.
- [INDeleteTasksTaskResolutionResult](indeletetaskstaskresolutionresult.md): Deprecated. A resolution result for deleting tasks.
