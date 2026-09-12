> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchfornotebookitemsintentresponse](https://developer.apple.com/documentation/intents/insearchfornotebookitemsintentresponse)

# INSearchForNotebookItemsIntentResponse (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Your app’s response to a request to search for notes, tasks, or reminders.

> INSearchForNotebookItemsIntentResponse is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
class INSearchForNotebookItemsIntentResponse
```

<a id="overview"></a>

## Overview

Use an [INSearchForNotebookItemsIntentResponse](insearchfornotebookitemsintentresponse.md) object to return the search results requested by the user. Siri communicates the information from your response to the user at appropriate times.

You create an [INSearchForNotebookItemsIntentResponse](insearchfornotebookitemsintentresponse.md) object in the [confirm(intent:completion:)](insearchfornotebookitemsintenthandling/confirm%28intent_completion_%29.md) and [handle(intent:completion:)](insearchfornotebookitemsintenthandling/handle%28intent_completion_%29.md) methods of your handler object. For more information about implementing your handler object, see [INSearchForNotebookItemsIntentHandling](insearchfornotebookitemsintenthandling.md).

## Topics

### Initializing the Response Object

- [init(code:userActivity:)](insearchfornotebookitemsintentresponse/init%28code_useractivity_%29.md): Deprecated. Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](insearchfornotebookitemsintentresponse/code.md): Deprecated. The code indicating whether your app successfully handled the intent.
- [INSearchForNotebookItemsIntentResponseCode](insearchfornotebookitemsintentresponsecode.md): Deprecated. Constants indicating the state of the response.

### Specifying the Search Results

- [notes](insearchfornotebookitemsintentresponse/notes.md): Deprecated. The notes found by the search.
- [taskLists](insearchfornotebookitemsintentresponse/tasklists.md): Deprecated. The task lists found by the search.
- [tasks](insearchfornotebookitemsintentresponse/tasks.md): Deprecated. The individual tasks found by the search.
- [sortType](insearchfornotebookitemsintentresponse/sorttype.md): Deprecated. An indicator of how you sorted the search results.
- [INSortType](insorttype.md): Deprecated. Constants indicating how the intent sorted the search results.

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

### Notebook Search

- [INSearchForNotebookItemsIntentHandling](insearchfornotebookitemsintenthandling.md): Deprecated. The handler interface for searching for notes, tasks, and reminders.
- [INSearchForNotebookItemsIntent](insearchfornotebookitemsintent.md): Deprecated. A request to search for notes, tasks, and reminders.

# INSearchForNotebookItemsIntentResponse (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Your app’s response to a request to search for notes, tasks, or reminders.

> INSearchForNotebookItemsIntentResponse is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
@interface INSearchForNotebookItemsIntentResponse : INIntentResponse
```

<a id="overview"></a>

## Overview

Use an [INSearchForNotebookItemsIntentResponse](insearchfornotebookitemsintentresponse.md) object to return the search results requested by the user. Siri communicates the information from your response to the user at appropriate times.

You create an [INSearchForNotebookItemsIntentResponse](insearchfornotebookitemsintentresponse.md) object in the [confirmSearchForNotebookItems:completion:](insearchfornotebookitemsintenthandling/confirm%28intent_completion_%29.md) and [handleSearchForNotebookItems:completion:](insearchfornotebookitemsintenthandling/handle%28intent_completion_%29.md) methods of your handler object. For more information about implementing your handler object, see [INSearchForNotebookItemsIntentHandling](insearchfornotebookitemsintenthandling.md).

## Topics

### Initializing the Response Object

- [initWithCode:userActivity:](insearchfornotebookitemsintentresponse/init%28code_useractivity_%29.md): Deprecated. Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](insearchfornotebookitemsintentresponse/code.md): Deprecated. The code indicating whether your app successfully handled the intent.
- [INSearchForNotebookItemsIntentResponseCode](insearchfornotebookitemsintentresponsecode.md): Deprecated. Constants indicating the state of the response.

### Specifying the Search Results

- [notes](insearchfornotebookitemsintentresponse/notes.md): Deprecated. The notes found by the search.
- [taskLists](insearchfornotebookitemsintentresponse/tasklists.md): Deprecated. The task lists found by the search.
- [tasks](insearchfornotebookitemsintentresponse/tasks.md): Deprecated. The individual tasks found by the search.
- [sortType](insearchfornotebookitemsintentresponse/sorttype.md): Deprecated. An indicator of how you sorted the search results.
- [INSortType](insorttype.md): Deprecated. Constants indicating how the intent sorted the search results.

## Relationships

### Inherits From

- [INIntentResponse](inintentresponse.md)

## See Also

### Notebook Search

- [INSearchForNotebookItemsIntentHandling](insearchfornotebookitemsintenthandling.md): Deprecated. The handler interface for searching for notes, tasks, and reminders.
- [INSearchForNotebookItemsIntent](insearchfornotebookitemsintent.md): Deprecated. A request to search for notes, tasks, and reminders.
