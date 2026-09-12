> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insnoozetasksintenthandling](https://developer.apple.com/documentation/intents/insnoozetasksintenthandling)

# INSnoozeTasksIntentHandling (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

The handler interface that snoozes tasks in a task list.

> INSnoozeTasksIntentHandling is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
protocol INSnoozeTasksIntentHandling : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Use the methods of the [INSnoozeTasksIntentHandling](insnoozetasksintenthandling.md) protocol to resolve, confirm, and handle requests to snooze tasks in a task list. Adopt this protocol in an object of your Intents extension capable of handling the request directly or forwarding the request to your app or task management service.

Siri delivers an [INSnoozeTasksIntent](insnoozetasksintent.md) object to your handler when the user asks to snooze tasks in a task list in your app. The provided intent object contains descriptions of the tasks and any triggers to associate with each task. Use the methods of this protocol to resolve the parameters and snooze the tasks.

## Topics

### Resolving Details of the Intent

- [resolveNextTriggerTime(for:with:)](insnoozetasksintenthandling/resolvenexttriggertime%28for_with_%29.md): Deprecated. Resolves the trigger of when to snooze tasks.
- [resolveTasks(for:with:)](insnoozetasksintenthandling/resolvetasks%28for_with_%29.md): Deprecated. Resolves the tasks to snooze.

### Confirming the Response

- [confirm(intent:completion:)](insnoozetasksintenthandling/confirm%28intent_completion_%29.md): Deprecated. Confirms whether you can snooze the task.

### Handling the Intent

- [handle(intent:completion:)](insnoozetasksintenthandling/handle%28intent_completion_%29.md): Deprecated. Handles snoozing a task.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Task Deferral

- [INSnoozeTasksIntent](insnoozetasksintent.md): Deprecated. A request to snooze one or more tasks.
- [INSnoozeTasksIntentResponse](insnoozetasksintentresponse.md): Deprecated. Your response to a delete tasks request.

# INSnoozeTasksIntentHandling (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

The handler interface that snoozes tasks in a task list.

> INSnoozeTasksIntentHandling is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
@protocol INSnoozeTasksIntentHandling <NSObject>
```

<a id="overview"></a>

## Overview

Use the methods of the [INSnoozeTasksIntentHandling](insnoozetasksintenthandling.md) protocol to resolve, confirm, and handle requests to snooze tasks in a task list. Adopt this protocol in an object of your Intents extension capable of handling the request directly or forwarding the request to your app or task management service.

Siri delivers an [INSnoozeTasksIntent](insnoozetasksintent.md) object to your handler when the user asks to snooze tasks in a task list in your app. The provided intent object contains descriptions of the tasks and any triggers to associate with each task. Use the methods of this protocol to resolve the parameters and snooze the tasks.

## Topics

### Resolving Details of the Intent

- [resolveNextTriggerTimeForSnoozeTasks:withCompletion:](insnoozetasksintenthandling/resolvenexttriggertime%28for_with_%29.md): Deprecated. Resolves the trigger of when to snooze tasks.
- [resolveTasksForSnoozeTasks:withCompletion:](insnoozetasksintenthandling/resolvetasks%28for_with_%29.md): Deprecated. Resolves the tasks to snooze.

### Confirming the Response

- [confirmSnoozeTasks:completion:](insnoozetasksintenthandling/confirm%28intent_completion_%29.md): Deprecated. Confirms whether you can snooze the task.

### Handling the Intent

- [handleSnoozeTasks:completion:](insnoozetasksintenthandling/handle%28intent_completion_%29.md): Deprecated. Handles snoozing a task.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Task Deferral

- [INSnoozeTasksIntent](insnoozetasksintent.md): Deprecated. A request to snooze one or more tasks.
- [INSnoozeTasksIntentResponse](insnoozetasksintentresponse.md): Deprecated. Your response to a delete tasks request.
