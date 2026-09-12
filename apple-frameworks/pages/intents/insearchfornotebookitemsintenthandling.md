> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchfornotebookitemsintenthandling](https://developer.apple.com/documentation/intents/insearchfornotebookitemsintenthandling)

# INSearchForNotebookItemsIntentHandling (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The handler interface for searching for notes, tasks, and reminders.

> INSearchForNotebookItemsIntentHandling is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
protocol INSearchForNotebookItemsIntentHandling : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Use the methods of the [INSearchForNotebookItemsIntentHandling](insearchfornotebookitemsintenthandling.md) protocol to resolve, confirm, and handle requests to search for notes, tasks, and reminders in your app’s content. Adopt this protocol in an object of your Intents extension that’s capable of performing the search and returning the search results to SiriKit.

Siri delivers an [INSearchForNotebookItemsIntent](insearchfornotebookitemsintent.md) object to your handler when the user asks to search for items in your app. The provided intent object contains the search parameters provided by the user. Use the methods of this protocol to resolve the parameters and return the search results.

## Topics

### Resolving the Intent Parameters

- [resolveItemType(for:with:)](insearchfornotebookitemsintenthandling/resolveitemtype%28for_with_%29.md): Deprecated. Resolves the type of items to search.
- [resolveTitle(for:with:)](insearchfornotebookitemsintenthandling/resolvetitle%28for_with_%29.md): Deprecated. Resolves the string to use when searching the title of notes, tasks, or reminders.
- [resolveContent(for:with:)](insearchfornotebookitemsintenthandling/resolvecontent%28for_with_%29.md): Deprecated. Resolves the string to use when searching the content of notes.
- [resolveStatus(for:with:)](insearchfornotebookitemsintenthandling/resolvestatus%28for_with_%29.md): Deprecated. Resolves the status value to use during the search.
- [resolveDateSearchType(for:with:)](insearchfornotebookitemsintenthandling/resolvedatesearchtype%28for_with_%29.md): Deprecated. Resolves how to use a date value during the search.
- [resolveDateTime(for:with:)](insearchfornotebookitemsintenthandling/resolvedatetime%28for_with_%29.md): Deprecated. Resolves the date to use during a date-based search.
- [resolveLocation(for:with:)](insearchfornotebookitemsintenthandling/resolvelocation%28for_with_%29.md): Deprecated. Resolves how to use a location value during the search.
- [resolveLocationSearchType(for:with:)](insearchfornotebookitemsintenthandling/resolvelocationsearchtype%28for_with_%29.md): Deprecated. Resolves the location to use during a location-based search.
- [resolveTaskPriority(for:with:)](insearchfornotebookitemsintenthandling/resolvetaskpriority%28for_with_%29.md): Deprecated. Resolves the priority to use during a priority-based search.
- [resolveTemporalEventTriggerTypes(for:with:)](insearchfornotebookitemsintenthandling/resolvetemporaleventtriggertypes%28for_with_%29.md): Deprecated. Resolves the trigger type to use during a temporal-based search.

### Confirming the Response

- [confirm(intent:completion:)](insearchfornotebookitemsintenthandling/confirm%28intent_completion_%29.md): Deprecated. Confirms whether you can perform the search.

### Handling the Intent

- [handle(intent:completion:)](insearchfornotebookitemsintenthandling/handle%28intent_completion_%29.md): Deprecated. Performs the search and deliver the results to SiriKit.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INNotebookDomainHandling](innotebookdomainhandling.md)

## See Also

### Notebook Search

- [INSearchForNotebookItemsIntent](insearchfornotebookitemsintent.md): Deprecated. A request to search for notes, tasks, and reminders.
- [INSearchForNotebookItemsIntentResponse](insearchfornotebookitemsintentresponse.md): Deprecated. Your app’s response to a request to search for notes, tasks, or reminders.

# INSearchForNotebookItemsIntentHandling (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The handler interface for searching for notes, tasks, and reminders.

> INSearchForNotebookItemsIntentHandling is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
@protocol INSearchForNotebookItemsIntentHandling <NSObject>
```

<a id="overview"></a>

## Overview

Use the methods of the [INSearchForNotebookItemsIntentHandling](insearchfornotebookitemsintenthandling.md) protocol to resolve, confirm, and handle requests to search for notes, tasks, and reminders in your app’s content. Adopt this protocol in an object of your Intents extension that’s capable of performing the search and returning the search results to SiriKit.

Siri delivers an [INSearchForNotebookItemsIntent](insearchfornotebookitemsintent.md) object to your handler when the user asks to search for items in your app. The provided intent object contains the search parameters provided by the user. Use the methods of this protocol to resolve the parameters and return the search results.

## Topics

### Resolving the Intent Parameters

- [resolveItemTypeForSearchForNotebookItems:withCompletion:](insearchfornotebookitemsintenthandling/resolveitemtype%28for_with_%29.md): Deprecated. Resolves the type of items to search.
- [resolveTitleForSearchForNotebookItems:withCompletion:](insearchfornotebookitemsintenthandling/resolvetitle%28for_with_%29.md): Deprecated. Resolves the string to use when searching the title of notes, tasks, or reminders.
- [resolveContentForSearchForNotebookItems:withCompletion:](insearchfornotebookitemsintenthandling/resolvecontent%28for_with_%29.md): Deprecated. Resolves the string to use when searching the content of notes.
- [resolveStatusForSearchForNotebookItems:withCompletion:](insearchfornotebookitemsintenthandling/resolvestatus%28for_with_%29.md): Deprecated. Resolves the status value to use during the search.
- [resolveDateSearchTypeForSearchForNotebookItems:withCompletion:](insearchfornotebookitemsintenthandling/resolvedatesearchtype%28for_with_%29.md): Deprecated. Resolves how to use a date value during the search.
- [resolveDateTimeForSearchForNotebookItems:withCompletion:](insearchfornotebookitemsintenthandling/resolvedatetime%28for_with_%29.md): Deprecated. Resolves the date to use during a date-based search.
- [resolveLocationForSearchForNotebookItems:withCompletion:](insearchfornotebookitemsintenthandling/resolvelocation%28for_with_%29.md): Deprecated. Resolves how to use a location value during the search.
- [resolveLocationSearchTypeForSearchForNotebookItems:withCompletion:](insearchfornotebookitemsintenthandling/resolvelocationsearchtype%28for_with_%29.md): Deprecated. Resolves the location to use during a location-based search.
- [resolveTaskPriorityForSearchForNotebookItems:withCompletion:](insearchfornotebookitemsintenthandling/resolvetaskpriority%28for_with_%29.md): Deprecated. Resolves the priority to use during a priority-based search.
- [resolveTemporalEventTriggerTypesForSearchForNotebookItems:withCompletion:](insearchfornotebookitemsintenthandling/resolvetemporaleventtriggertypes%28for_with_%29.md): Deprecated. Resolves the trigger type to use during a temporal-based search.

### Confirming the Response

- [confirmSearchForNotebookItems:completion:](insearchfornotebookitemsintenthandling/confirm%28intent_completion_%29.md): Deprecated. Confirms whether you can perform the search.

### Handling the Intent

- [handleSearchForNotebookItems:completion:](insearchfornotebookitemsintenthandling/handle%28intent_completion_%29.md): Deprecated. Performs the search and deliver the results to SiriKit.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INNotebookDomainHandling](innotebookdomainhandling.md)

## See Also

### Notebook Search

- [INSearchForNotebookItemsIntent](insearchfornotebookitemsintent.md): Deprecated. A request to search for notes, tasks, and reminders.
- [INSearchForNotebookItemsIntentResponse](insearchfornotebookitemsintentresponse.md): Deprecated. Your app’s response to a request to search for notes, tasks, or reminders.
