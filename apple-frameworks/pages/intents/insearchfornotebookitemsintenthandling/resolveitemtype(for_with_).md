> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchfornotebookitemsintenthandling/resolveitemtype(for:with:)](https://developer.apple.com/documentation/intents/insearchfornotebookitemsintenthandling/resolveitemtype(for:with:))

# resolveItemType(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Resolves the type of items to search.

> INSearchForNotebookItemsIntentHandling is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
optional func resolveItemType(for intent: INSearchForNotebookItemsIntent, with completion: @escaping @Sendable (INNotebookItemTypeResolutionResult) -> Void)
```

```swift
optional func resolveItemType(for intent: INSearchForNotebookItemsIntent) async -> INNotebookItemTypeResolutionResult
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object with the item type that you intend to include in your search results.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the type of items to search for. Use this method to verify that you can search for items of the specified type. If you support searching for the items, return a successful resolution with that item type. For types you do not support, you can return a successful resolution with a type that you do support. Alternatively, if you do not want to search an unsupported type, return a not required resolution from this method and use your confirmation method to indicate that a failure occurred.

## See Also

### Resolving the Intent Parameters

- [resolveTitle(for:with:)](resolvetitle%28for_with_%29.md): Deprecated. Resolves the string to use when searching the title of notes, tasks, or reminders.
- [resolveContent(for:with:)](resolvecontent%28for_with_%29.md): Deprecated. Resolves the string to use when searching the content of notes.
- [resolveStatus(for:with:)](resolvestatus%28for_with_%29.md): Deprecated. Resolves the status value to use during the search.
- [resolveDateSearchType(for:with:)](resolvedatesearchtype%28for_with_%29.md): Deprecated. Resolves how to use a date value during the search.
- [resolveDateTime(for:with:)](resolvedatetime%28for_with_%29.md): Deprecated. Resolves the date to use during a date-based search.
- [resolveLocation(for:with:)](resolvelocation%28for_with_%29.md): Deprecated. Resolves how to use a location value during the search.
- [resolveLocationSearchType(for:with:)](resolvelocationsearchtype%28for_with_%29.md): Deprecated. Resolves the location to use during a location-based search.
- [resolveTaskPriority(for:with:)](resolvetaskpriority%28for_with_%29.md): Deprecated. Resolves the priority to use during a priority-based search.
- [resolveTemporalEventTriggerTypes(for:with:)](resolvetemporaleventtriggertypes%28for_with_%29.md): Deprecated. Resolves the trigger type to use during a temporal-based search.

# resolveItemTypeForSearchForNotebookItems:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Resolves the type of items to search.

> INSearchForNotebookItemsIntentHandling is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
- (void) resolveItemTypeForSearchForNotebookItems:(INSearchForNotebookItemsIntent *) intent withCompletion:(void (^)(INNotebookItemTypeResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object with the item type that you intend to include in your search results.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the type of items to search for. Use this method to verify that you can search for items of the specified type. If you support searching for the items, return a successful resolution with that item type. For types you do not support, you can return a successful resolution with a type that you do support. Alternatively, if you do not want to search an unsupported type, return a not required resolution from this method and use your confirmation method to indicate that a failure occurred.

## See Also

### Resolving the Intent Parameters

- [resolveTitleForSearchForNotebookItems:withCompletion:](resolvetitle%28for_with_%29.md): Deprecated. Resolves the string to use when searching the title of notes, tasks, or reminders.
- [resolveContentForSearchForNotebookItems:withCompletion:](resolvecontent%28for_with_%29.md): Deprecated. Resolves the string to use when searching the content of notes.
- [resolveStatusForSearchForNotebookItems:withCompletion:](resolvestatus%28for_with_%29.md): Deprecated. Resolves the status value to use during the search.
- [resolveDateSearchTypeForSearchForNotebookItems:withCompletion:](resolvedatesearchtype%28for_with_%29.md): Deprecated. Resolves how to use a date value during the search.
- [resolveDateTimeForSearchForNotebookItems:withCompletion:](resolvedatetime%28for_with_%29.md): Deprecated. Resolves the date to use during a date-based search.
- [resolveLocationForSearchForNotebookItems:withCompletion:](resolvelocation%28for_with_%29.md): Deprecated. Resolves how to use a location value during the search.
- [resolveLocationSearchTypeForSearchForNotebookItems:withCompletion:](resolvelocationsearchtype%28for_with_%29.md): Deprecated. Resolves the location to use during a location-based search.
- [resolveTaskPriorityForSearchForNotebookItems:withCompletion:](resolvetaskpriority%28for_with_%29.md): Deprecated. Resolves the priority to use during a priority-based search.
- [resolveTemporalEventTriggerTypesForSearchForNotebookItems:withCompletion:](resolvetemporaleventtriggertypes%28for_with_%29.md): Deprecated. Resolves the trigger type to use during a temporal-based search.
