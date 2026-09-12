> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchfornotebookitemsintenthandling/resolvetemporaleventtriggertypes(for:with:)](https://developer.apple.com/documentation/intents/insearchfornotebookitemsintenthandling/resolvetemporaleventtriggertypes(for:with:))

# resolveTemporalEventTriggerTypes(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Resolves the trigger type to use during a temporal-based search.

## Declaration

```swift
optional func resolveTemporalEventTriggerTypes(for intent: INSearchForNotebookItemsIntent, with completion: @escaping @Sendable (INTemporalEventTriggerTypeOptionsResolutionResult) -> Void)
```

```swift
optional func resolveTemporalEventTriggerTypes(for intent: INSearchForNotebookItemsIntent) async -> INTemporalEventTriggerTypeOptionsResolutionResult
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object with the location information that you intend to use during the search.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the temporal event used during a temporal-based search. Use this method to verify that you can perform a temporal-based search using the specified information. Consider the value of the [temporalEventTriggerTypes](../insearchfornotebookitemsintent/temporaleventtriggertypes.md) property of the intent when determining your response. If the search type is unknown, return a value of not required to indicate that you do not intend to use the temporal event information during the search. If the search type is a different value, return a successful resolution if the [temporalEventTriggerTypes](../insearchfornotebookitemsintent/temporaleventtriggertypes.md) property of the intent contains enough information to perform the search. Return a different result if it does not.

## See Also

### Resolving the Intent Parameters

- [resolveItemType(for:with:)](resolveitemtype%28for_with_%29.md): Deprecated. Resolves the type of items to search.
- [resolveTitle(for:with:)](resolvetitle%28for_with_%29.md): Deprecated. Resolves the string to use when searching the title of notes, tasks, or reminders.
- [resolveContent(for:with:)](resolvecontent%28for_with_%29.md): Deprecated. Resolves the string to use when searching the content of notes.
- [resolveStatus(for:with:)](resolvestatus%28for_with_%29.md): Deprecated. Resolves the status value to use during the search.
- [resolveDateSearchType(for:with:)](resolvedatesearchtype%28for_with_%29.md): Deprecated. Resolves how to use a date value during the search.
- [resolveDateTime(for:with:)](resolvedatetime%28for_with_%29.md): Deprecated. Resolves the date to use during a date-based search.
- [resolveLocation(for:with:)](resolvelocation%28for_with_%29.md): Deprecated. Resolves how to use a location value during the search.
- [resolveLocationSearchType(for:with:)](resolvelocationsearchtype%28for_with_%29.md): Deprecated. Resolves the location to use during a location-based search.
- [resolveTaskPriority(for:with:)](resolvetaskpriority%28for_with_%29.md): Deprecated. Resolves the priority to use during a priority-based search.

# resolveTemporalEventTriggerTypesForSearchForNotebookItems:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Resolves the trigger type to use during a temporal-based search.

## Declaration

```objectivec
- (void) resolveTemporalEventTriggerTypesForSearchForNotebookItems:(INSearchForNotebookItemsIntent *) intent withCompletion:(void (^)(INTemporalEventTriggerTypeOptionsResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object with the location information that you intend to use during the search.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the temporal event used during a temporal-based search. Use this method to verify that you can perform a temporal-based search using the specified information. Consider the value of the [temporalEventTriggerTypes](../insearchfornotebookitemsintent/temporaleventtriggertypes.md) property of the intent when determining your response. If the search type is unknown, return a value of not required to indicate that you do not intend to use the temporal event information during the search. If the search type is a different value, return a successful resolution if the [temporalEventTriggerTypes](../insearchfornotebookitemsintent/temporaleventtriggertypes.md) property of the intent contains enough information to perform the search. Return a different result if it does not.

## See Also

### Resolving the Intent Parameters

- [resolveItemTypeForSearchForNotebookItems:withCompletion:](resolveitemtype%28for_with_%29.md): Deprecated. Resolves the type of items to search.
- [resolveTitleForSearchForNotebookItems:withCompletion:](resolvetitle%28for_with_%29.md): Deprecated. Resolves the string to use when searching the title of notes, tasks, or reminders.
- [resolveContentForSearchForNotebookItems:withCompletion:](resolvecontent%28for_with_%29.md): Deprecated. Resolves the string to use when searching the content of notes.
- [resolveStatusForSearchForNotebookItems:withCompletion:](resolvestatus%28for_with_%29.md): Deprecated. Resolves the status value to use during the search.
- [resolveDateSearchTypeForSearchForNotebookItems:withCompletion:](resolvedatesearchtype%28for_with_%29.md): Deprecated. Resolves how to use a date value during the search.
- [resolveDateTimeForSearchForNotebookItems:withCompletion:](resolvedatetime%28for_with_%29.md): Deprecated. Resolves the date to use during a date-based search.
- [resolveLocationForSearchForNotebookItems:withCompletion:](resolvelocation%28for_with_%29.md): Deprecated. Resolves how to use a location value during the search.
- [resolveLocationSearchTypeForSearchForNotebookItems:withCompletion:](resolvelocationsearchtype%28for_with_%29.md): Deprecated. Resolves the location to use during a location-based search.
- [resolveTaskPriorityForSearchForNotebookItems:withCompletion:](resolvetaskpriority%28for_with_%29.md): Deprecated. Resolves the priority to use during a priority-based search.
