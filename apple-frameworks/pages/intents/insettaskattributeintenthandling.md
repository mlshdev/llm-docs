> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insettaskattributeintenthandling](https://developer.apple.com/documentation/intents/insettaskattributeintenthandling)

# INSetTaskAttributeIntentHandling (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The handler interface for updating the attributes of an existing task.

> INSetTaskAttributeIntentHandling is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
protocol INSetTaskAttributeIntentHandling : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Use the methods of the [INSetTaskAttributeIntentHandling](insettaskattributeintenthandling.md) protocol to resolve, confirm, and handle requests to modify the attributes of a task. SiriKit supports changing the task’s completion status and changing the location- or time-based triggers that you use to generate reminders. Adopt this protocol in an object of your Intents extension that is capable of handling the request directly or forwarding the request to your app or task management service.

Siri delivers an [INSetTaskAttributeIntent](insettaskattributeintent.md) object to your handler when the user asks to modify an existing task. The provided intent object contains descriptions of the tasks and the new values to apply. If a value is not provided for a given attribute, do not modify that attribute. Use the methods of this protocol to resolve the parameters and update the task.

## Topics

### Resolving the Intent Parameters

- [resolveTargetTask(for:with:)](insettaskattributeintenthandling/resolvetargettask%28for_with_%29.md): Deprecated. Resolves which task the user wants to modify.
- [resolveStatus(for:with:)](insettaskattributeintenthandling/resolvestatus%28for_with_%29.md): Deprecated. Resolves the intended status of the task.
- [resolveSpatialEventTrigger(for:with:)](insettaskattributeintenthandling/resolvespatialeventtrigger%28for_with_%29.md): Deprecated. Resolves the location-based trigger to apply to the task.
- [resolveTemporalEventTrigger(for:with:)](insettaskattributeintenthandling/resolvetemporaleventtrigger%28for_with_%29-9bfly.md): Deprecated. Resolves the time-based trigger to apply to the task.
- [resolvePriority(for:with:)](insettaskattributeintenthandling/resolvepriority%28for_with_%29.md): Deprecated. Resolves the intended priority of the task.
- [resolveTaskTitle(for:with:)](insettaskattributeintenthandling/resolvetasktitle%28for_with_%29.md): Deprecated. Resolves the intended title of the task.
- [resolveTemporalEventTrigger(for:with:)](insettaskattributeintenthandling/resolvetemporaleventtrigger%28for_with_%29-1wr3f.md): Deprecated. Resolves the time-based trigger to apply to the task.

### Confirming the Response

- [confirm(intent:completion:)](insettaskattributeintenthandling/confirm%28intent_completion_%29.md): Deprecated. Confirms whether you can modify the task’s attributes.

### Handling the Intent

- [handle(intent:completion:)](insettaskattributeintenthandling/handle%28intent_completion_%29.md): Deprecated. Handles the modification of the attributes of a task.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INNotebookDomainHandling](innotebookdomainhandling.md)

## See Also

### Task Attributes

- [INSetTaskAttributeIntent](insettaskattributeintent.md): Deprecated. A request to modify the attributes of a task.
- [INSetTaskAttributeIntentResponse](insettaskattributeintentresponse.md): Deprecated. Your response to a request to modify the attributes of an existing task.

# INSetTaskAttributeIntentHandling (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The handler interface for updating the attributes of an existing task.

> INSetTaskAttributeIntentHandling is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
@protocol INSetTaskAttributeIntentHandling <NSObject>
```

<a id="overview"></a>

## Overview

Use the methods of the [INSetTaskAttributeIntentHandling](insettaskattributeintenthandling.md) protocol to resolve, confirm, and handle requests to modify the attributes of a task. SiriKit supports changing the task’s completion status and changing the location- or time-based triggers that you use to generate reminders. Adopt this protocol in an object of your Intents extension that is capable of handling the request directly or forwarding the request to your app or task management service.

Siri delivers an [INSetTaskAttributeIntent](insettaskattributeintent.md) object to your handler when the user asks to modify an existing task. The provided intent object contains descriptions of the tasks and the new values to apply. If a value is not provided for a given attribute, do not modify that attribute. Use the methods of this protocol to resolve the parameters and update the task.

## Topics

### Resolving the Intent Parameters

- [resolveTargetTaskForSetTaskAttribute:withCompletion:](insettaskattributeintenthandling/resolvetargettask%28for_with_%29.md): Deprecated. Resolves which task the user wants to modify.
- [resolveStatusForSetTaskAttribute:withCompletion:](insettaskattributeintenthandling/resolvestatus%28for_with_%29.md): Deprecated. Resolves the intended status of the task.
- [resolveSpatialEventTriggerForSetTaskAttribute:withCompletion:](insettaskattributeintenthandling/resolvespatialeventtrigger%28for_with_%29.md): Deprecated. Resolves the location-based trigger to apply to the task.
- [resolveTemporalEventTriggerForSetTaskAttribute:completion:](insettaskattributeintenthandling/resolvetemporaleventtrigger%28for_with_%29-9bfly.md): Deprecated. Resolves the time-based trigger to apply to the task.
- [resolvePriorityForSetTaskAttribute:withCompletion:](insettaskattributeintenthandling/resolvepriority%28for_with_%29.md): Deprecated. Resolves the intended priority of the task.
- [resolveTaskTitleForSetTaskAttribute:withCompletion:](insettaskattributeintenthandling/resolvetasktitle%28for_with_%29.md): Deprecated. Resolves the intended title of the task.
- [resolveTemporalEventTriggerForSetTaskAttribute:withCompletion:](insettaskattributeintenthandling/resolvetemporaleventtrigger%28for_with_%29-1wr3f.md): Deprecated. Resolves the time-based trigger to apply to the task.

### Confirming the Response

- [confirmSetTaskAttribute:completion:](insettaskattributeintenthandling/confirm%28intent_completion_%29.md): Deprecated. Confirms whether you can modify the task’s attributes.

### Handling the Intent

- [handleSetTaskAttribute:completion:](insettaskattributeintenthandling/handle%28intent_completion_%29.md): Deprecated. Handles the modification of the attributes of a task.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INNotebookDomainHandling](innotebookdomainhandling.md)

## See Also

### Task Attributes

- [INSetTaskAttributeIntent](insettaskattributeintent.md): Deprecated. A request to modify the attributes of a task.
- [INSetTaskAttributeIntentResponse](insettaskattributeintentresponse.md): Deprecated. Your response to a request to modify the attributes of an existing task.
