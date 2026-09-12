> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/increatetasklistintenthandling](https://developer.apple.com/documentation/intents/increatetasklistintenthandling)

# INCreateTaskListIntentHandling (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

The handler interface for creating task lists.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
protocol INCreateTaskListIntentHandling : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Use the methods of the [INCreateTaskListIntentHandling](increatetasklistintenthandling.md) protocol to resolve, confirm, and handle requests to create task lists. Adopt this protocol in an object of your Intents extension that’s capable of forwarding the task list information to your app or task management service.

Siri delivers an [INCreateTaskListIntent](increatetasklistintent.md) object to your handler when the user asks to create a task list using your app. The provided intent object contains the details for the task list, including any initial tasks. Use the methods of this protocol to resolve the parameters and create the task list.

## Topics

### Resolving the Intent Parameters

- [resolveTitle(for:with:)](increatetasklistintenthandling/resolvetitle%28for_with_%29.md): Deprecated. Resolves the title of the task list.
- [resolveTaskTitles(for:with:)](increatetasklistintenthandling/resolvetasktitles%28for_with_%29.md): Deprecated. Resolves the tasks in a task list.
- [resolveGroupName(for:with:)](increatetasklistintenthandling/resolvegroupname%28for_with_%29.md): Deprecated. Resolves the intended group for the task list.

### Confirming the Response

- [confirm(intent:completion:)](increatetasklistintenthandling/confirm%28intent_completion_%29.md): Deprecated. Confirms whether you can create the task list.

### Handling the Intent

- [handle(intent:completion:)](increatetasklistintenthandling/handle%28intent_completion_%29.md): Deprecated. Handles the creation of a task list.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INNotebookDomainHandling](innotebookdomainhandling.md)

## See Also

### Task List Creation

- [INCreateTaskListIntent](increatetasklistintent.md): Deprecated. A request to create a new task list.
- [INCreateTaskListIntentResponse](increatetasklistintentresponse.md): Deprecated. Your app’s response to a request to create a task list.

# INCreateTaskListIntentHandling (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

The handler interface for creating task lists.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@protocol INCreateTaskListIntentHandling <NSObject>
```

<a id="overview"></a>

## Overview

Use the methods of the [INCreateTaskListIntentHandling](increatetasklistintenthandling.md) protocol to resolve, confirm, and handle requests to create task lists. Adopt this protocol in an object of your Intents extension that’s capable of forwarding the task list information to your app or task management service.

Siri delivers an [INCreateTaskListIntent](increatetasklistintent.md) object to your handler when the user asks to create a task list using your app. The provided intent object contains the details for the task list, including any initial tasks. Use the methods of this protocol to resolve the parameters and create the task list.

## Topics

### Resolving the Intent Parameters

- [resolveTitleForCreateTaskList:withCompletion:](increatetasklistintenthandling/resolvetitle%28for_with_%29.md): Deprecated. Resolves the title of the task list.
- [resolveTaskTitlesForCreateTaskList:withCompletion:](increatetasklistintenthandling/resolvetasktitles%28for_with_%29.md): Deprecated. Resolves the tasks in a task list.
- [resolveGroupNameForCreateTaskList:withCompletion:](increatetasklistintenthandling/resolvegroupname%28for_with_%29.md): Deprecated. Resolves the intended group for the task list.

### Confirming the Response

- [confirmCreateTaskList:completion:](increatetasklistintenthandling/confirm%28intent_completion_%29.md): Deprecated. Confirms whether you can create the task list.

### Handling the Intent

- [handleCreateTaskList:completion:](increatetasklistintenthandling/handle%28intent_completion_%29.md): Deprecated. Handles the creation of a task list.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INNotebookDomainHandling](innotebookdomainhandling.md)

## See Also

### Task List Creation

- [INCreateTaskListIntent](increatetasklistintent.md): Deprecated. A request to create a new task list.
- [INCreateTaskListIntentResponse](increatetasklistintentresponse.md): Deprecated. Your app’s response to a request to create a task list.
