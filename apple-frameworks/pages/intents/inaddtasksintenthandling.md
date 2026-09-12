> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inaddtasksintenthandling](https://developer.apple.com/documentation/intents/inaddtasksintenthandling)

# INAddTasksIntentHandling (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The handler interface for adding tasks to a task list.

> INAddTasksIntentHandling is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
protocol INAddTasksIntentHandling : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Use the methods of the [INAddTasksIntentHandling](inaddtasksintenthandling.md) protocol to resolve, confirm, and handle requests to add tasks to a task list. Adopt this protocol in an object of your Intents extension that’s capable of handling the request directly or forwarding the request to your app or task management service.

Siri delivers an [INAddTasksIntent](inaddtasksintent.md) object to your handler when the user asks to add tasks to a task list in your app. The provided intent object contains descriptions of the tasks and any triggers to associate with each task. Use the methods of this protocol to resolve the parameters and add the tasks.

## Topics

### Resolving the Intent Parameters

- [resolveTargetTaskList(for:with:)](inaddtasksintenthandling/resolvetargettasklist%28for_with_%29-2er0u.md): Deprecated. Resolves the task list to receive the new tasks.
- [resolveTaskTitles(for:with:)](inaddtasksintenthandling/resolvetasktitles%28for_with_%29.md): Deprecated. Resolves the titles for the tasks.
- [resolveSpatialEventTrigger(for:with:)](inaddtasksintenthandling/resolvespatialeventtrigger%28for_with_%29.md): Deprecated. Resolves the location-based trigger associated with the new tasks.
- [resolveTemporalEventTrigger(for:with:)](inaddtasksintenthandling/resolvetemporaleventtrigger%28for_with_%29-7yrz3.md): Deprecated. Resolves the time-based trigger associated with the new tasks.
- [resolvePriority(for:with:)](inaddtasksintenthandling/resolvepriority%28for_with_%29.md): Deprecated. Resolves the priority associated with the new tasks.
- [resolveTargetTaskList(for:with:)](inaddtasksintenthandling/resolvetargettasklist%28for_with_%29-2uevx.md): Deprecated. Called when it is time for you to resolve the task list to receive the new tasks.
- [resolveTemporalEventTrigger(for:with:)](inaddtasksintenthandling/resolvetemporaleventtrigger%28for_with_%29-2h9ff.md): Deprecated. Resolves the time-based trigger associated with the new tasks.

### Confirming the Response

- [confirm(intent:completion:)](inaddtasksintenthandling/confirm%28intent_completion_%29.md): Deprecated. Confirms whether you can add the tasks to the task list.

### Handling the Intent

- [handle(intent:completion:)](inaddtasksintenthandling/handle%28intent_completion_%29.md): Deprecated. Handles the creation of a task list.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INNotebookDomainHandling](innotebookdomainhandling.md)

## See Also

### Task Addition

- [INAddTasksIntent](inaddtasksintent.md): Deprecated. A request to add tasks to an existing task list.
- [INAddTasksIntentResponse](inaddtasksintentresponse.md): Deprecated. Your response to a request to add tasks to a task list.

# INAddTasksIntentHandling (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The handler interface for adding tasks to a task list.

> INAddTasksIntentHandling is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
@protocol INAddTasksIntentHandling <NSObject>
```

<a id="overview"></a>

## Overview

Use the methods of the [INAddTasksIntentHandling](inaddtasksintenthandling.md) protocol to resolve, confirm, and handle requests to add tasks to a task list. Adopt this protocol in an object of your Intents extension that’s capable of handling the request directly or forwarding the request to your app or task management service.

Siri delivers an [INAddTasksIntent](inaddtasksintent.md) object to your handler when the user asks to add tasks to a task list in your app. The provided intent object contains descriptions of the tasks and any triggers to associate with each task. Use the methods of this protocol to resolve the parameters and add the tasks.

## Topics

### Resolving the Intent Parameters

- [resolveTargetTaskListForAddTasks:completion:](inaddtasksintenthandling/resolvetargettasklist%28for_with_%29-2er0u.md): Deprecated. Resolves the task list to receive the new tasks.
- [resolveTaskTitlesForAddTasks:withCompletion:](inaddtasksintenthandling/resolvetasktitles%28for_with_%29.md): Deprecated. Resolves the titles for the tasks.
- [resolveSpatialEventTriggerForAddTasks:withCompletion:](inaddtasksintenthandling/resolvespatialeventtrigger%28for_with_%29.md): Deprecated. Resolves the location-based trigger associated with the new tasks.
- [resolveTemporalEventTriggerForAddTasks:completion:](inaddtasksintenthandling/resolvetemporaleventtrigger%28for_with_%29-7yrz3.md): Deprecated. Resolves the time-based trigger associated with the new tasks.
- [resolvePriorityForAddTasks:withCompletion:](inaddtasksintenthandling/resolvepriority%28for_with_%29.md): Deprecated. Resolves the priority associated with the new tasks.
- [resolveTargetTaskListForAddTasks:withCompletion:](inaddtasksintenthandling/resolvetargettasklist%28for_with_%29-2uevx.md): Deprecated. Called when it is time for you to resolve the task list to receive the new tasks.
- [resolveTemporalEventTriggerForAddTasks:withCompletion:](inaddtasksintenthandling/resolvetemporaleventtrigger%28for_with_%29-2h9ff.md): Deprecated. Resolves the time-based trigger associated with the new tasks.

### Confirming the Response

- [confirmAddTasks:completion:](inaddtasksintenthandling/confirm%28intent_completion_%29.md): Deprecated. Confirms whether you can add the tasks to the task list.

### Handling the Intent

- [handleAddTasks:completion:](inaddtasksintenthandling/handle%28intent_completion_%29.md): Deprecated. Handles the creation of a task list.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INNotebookDomainHandling](innotebookdomainhandling.md)

## See Also

### Task Addition

- [INAddTasksIntent](inaddtasksintent.md): Deprecated. A request to add tasks to an existing task list.
- [INAddTasksIntentResponse](inaddtasksintentresponse.md): Deprecated. Your response to a request to add tasks to a task list.
