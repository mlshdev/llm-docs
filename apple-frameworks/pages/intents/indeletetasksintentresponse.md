> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/indeletetasksintentresponse](https://developer.apple.com/documentation/intents/indeletetasksintentresponse)

# INDeleteTasksIntentResponse (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ (deprecated in 15.0) · iPadOS 13.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+ (deprecated in 8.0)

Your response to a request to delete tasks.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
class INDeleteTasksIntentResponse
```

<a id="overview"></a>

## Overview

Use an [INDeleteTasksIntentResponse](indeletetasksintentresponse.md) object to return information about your attempt to delete an existing task. Siri communicates the information from your response to the user at appropriate times.

You create an [INDeleteTasksIntentResponse](indeletetasksintentresponse.md) object in the [confirm(intent:completion:)](indeletetasksintenthandling/confirm%28intent_completion_%29.md) and [handle(intent:completion:)](indeletetasksintenthandling/handle%28intent_completion_%29.md) methods of your handler object. For more information about implementing your handler object, see [INDeleteTasksIntentHandling](indeletetasksintenthandling.md).

## Topics

### Initializing the Response Object

- [init(code:userActivity:)](indeletetasksintentresponse/init%28code_useractivity_%29.md): Deprecated. Initializes the response object with the specified code and user activity object.

### Accessing the Deleted Tasks

- [deletedTasks](indeletetasksintentresponse/deletedtasks.md): Deprecated. An array of tasks to delete.

### Getting the Response Code

- [code](indeletetasksintentresponse/code.md): Deprecated. The code that indicates whether you successfully handled the intent.
- [INDeleteTasksIntentResponseCode](indeletetasksintentresponsecode.md): Deprecated. Constants that indicate the response state.

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

### Task Deletion

- [INDeleteTasksIntentHandling](indeletetasksintenthandling.md): Deprecated. An interface that handles requests to delete tasks from a task list.
- [INDeleteTasksIntent](indeletetasksintent.md): Deprecated. A request to delete one or more tasks.
- [INDeleteTasksTaskListResolutionResult](indeletetaskstasklistresolutionresult.md): Deprecated. A resolution result for deleting task lists.
- [INDeleteTasksTaskResolutionResult](indeletetaskstaskresolutionresult.md): Deprecated. A resolution result for deleting tasks.

# INDeleteTasksIntentResponse (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ (deprecated in 15.0) · iPadOS 13.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+ (deprecated in 8.0)

Your response to a request to delete tasks.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@interface INDeleteTasksIntentResponse : INIntentResponse
```

<a id="overview"></a>

## Overview

Use an [INDeleteTasksIntentResponse](indeletetasksintentresponse.md) object to return information about your attempt to delete an existing task. Siri communicates the information from your response to the user at appropriate times.

You create an [INDeleteTasksIntentResponse](indeletetasksintentresponse.md) object in the [confirmDeleteTasks:completion:](indeletetasksintenthandling/confirm%28intent_completion_%29.md) and [handleDeleteTasks:completion:](indeletetasksintenthandling/handle%28intent_completion_%29.md) methods of your handler object. For more information about implementing your handler object, see [INDeleteTasksIntentHandling](indeletetasksintenthandling.md).

## Topics

### Initializing the Response Object

- [initWithCode:userActivity:](indeletetasksintentresponse/init%28code_useractivity_%29.md): Deprecated. Initializes the response object with the specified code and user activity object.

### Accessing the Deleted Tasks

- [deletedTasks](indeletetasksintentresponse/deletedtasks.md): Deprecated. An array of tasks to delete.

### Getting the Response Code

- [code](indeletetasksintentresponse/code.md): Deprecated. The code that indicates whether you successfully handled the intent.
- [INDeleteTasksIntentResponseCode](indeletetasksintentresponsecode.md): Deprecated. Constants that indicate the response state.

## Relationships

### Inherits From

- [INIntentResponse](inintentresponse.md)

## See Also

### Task Deletion

- [INDeleteTasksIntentHandling](indeletetasksintenthandling.md): Deprecated. An interface that handles requests to delete tasks from a task list.
- [INDeleteTasksIntent](indeletetasksintent.md): Deprecated. A request to delete one or more tasks.
- [INDeleteTasksTaskListResolutionResult](indeletetaskstasklistresolutionresult.md): Deprecated. A resolution result for deleting task lists.
- [INDeleteTasksTaskResolutionResult](indeletetaskstaskresolutionresult.md): Deprecated. A resolution result for deleting tasks.
