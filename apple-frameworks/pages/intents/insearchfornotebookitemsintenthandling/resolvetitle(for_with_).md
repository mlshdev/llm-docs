> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchfornotebookitemsintenthandling/resolvetitle(for:with:)](https://developer.apple.com/documentation/intents/insearchfornotebookitemsintenthandling/resolvetitle(for:with:))

# resolveTitle(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Resolves the string to use when searching the title of notes, tasks, or reminders.

> INSearchForNotebookItemsIntentHandling is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
optional func resolveTitle(for intent: INSearchForNotebookItemsIntent, with completion: @escaping @Sendable (INSpeakableStringResolutionResult) -> Void)
```

```swift
optional func resolveTitle(for intent: INSearchForNotebookItemsIntent) async -> INSpeakableStringResolutionResult
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object with the text you intend to use for your search.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the string used when searching the title of notes, tasks, or reminders. Use this method to verify any search terms before you perform the actual search. In most cases, you should return a successful resolution for the provided string. If there is no string and you do not require a string to perform the search, return a resolution indicating you don’t need the string. If you change the search term for any reason, return a resolution asking for confirmation of the change.

## See Also

### Resolving the Intent Parameters

- [resolveItemType(for:with:)](resolveitemtype%28for_with_%29.md): Deprecated. Resolves the type of items to search.
- [resolveContent(for:with:)](resolvecontent%28for_with_%29.md): Deprecated. Resolves the string to use when searching the content of notes.
- [resolveStatus(for:with:)](resolvestatus%28for_with_%29.md): Deprecated. Resolves the status value to use during the search.
- [resolveDateSearchType(for:with:)](resolvedatesearchtype%28for_with_%29.md): Deprecated. Resolves how to use a date value during the search.
- [resolveDateTime(for:with:)](resolvedatetime%28for_with_%29.md): Deprecated. Resolves the date to use during a date-based search.
- [resolveLocation(for:with:)](resolvelocation%28for_with_%29.md): Deprecated. Resolves how to use a location value during the search.
- [resolveLocationSearchType(for:with:)](resolvelocationsearchtype%28for_with_%29.md): Deprecated. Resolves the location to use during a location-based search.
- [resolveTaskPriority(for:with:)](resolvetaskpriority%28for_with_%29.md): Deprecated. Resolves the priority to use during a priority-based search.
- [resolveTemporalEventTriggerTypes(for:with:)](resolvetemporaleventtriggertypes%28for_with_%29.md): Deprecated. Resolves the trigger type to use during a temporal-based search.

# resolveTitleForSearchForNotebookItems:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Resolves the string to use when searching the title of notes, tasks, or reminders.

> INSearchForNotebookItemsIntentHandling is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
- (void) resolveTitleForSearchForNotebookItems:(INSearchForNotebookItemsIntent *) intent withCompletion:(void (^)(INSpeakableStringResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object with the text you intend to use for your search.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the string used when searching the title of notes, tasks, or reminders. Use this method to verify any search terms before you perform the actual search. In most cases, you should return a successful resolution for the provided string. If there is no string and you do not require a string to perform the search, return a resolution indicating you don’t need the string. If you change the search term for any reason, return a resolution asking for confirmation of the change.

## See Also

### Resolving the Intent Parameters

- [resolveItemTypeForSearchForNotebookItems:withCompletion:](resolveitemtype%28for_with_%29.md): Deprecated. Resolves the type of items to search.
- [resolveContentForSearchForNotebookItems:withCompletion:](resolvecontent%28for_with_%29.md): Deprecated. Resolves the string to use when searching the content of notes.
- [resolveStatusForSearchForNotebookItems:withCompletion:](resolvestatus%28for_with_%29.md): Deprecated. Resolves the status value to use during the search.
- [resolveDateSearchTypeForSearchForNotebookItems:withCompletion:](resolvedatesearchtype%28for_with_%29.md): Deprecated. Resolves how to use a date value during the search.
- [resolveDateTimeForSearchForNotebookItems:withCompletion:](resolvedatetime%28for_with_%29.md): Deprecated. Resolves the date to use during a date-based search.
- [resolveLocationForSearchForNotebookItems:withCompletion:](resolvelocation%28for_with_%29.md): Deprecated. Resolves how to use a location value during the search.
- [resolveLocationSearchTypeForSearchForNotebookItems:withCompletion:](resolvelocationsearchtype%28for_with_%29.md): Deprecated. Resolves the location to use during a location-based search.
- [resolveTaskPriorityForSearchForNotebookItems:withCompletion:](resolvetaskpriority%28for_with_%29.md): Deprecated. Resolves the priority to use during a priority-based search.
- [resolveTemporalEventTriggerTypesForSearchForNotebookItems:withCompletion:](resolvetemporaleventtriggertypes%28for_with_%29.md): Deprecated. Resolves the trigger type to use during a temporal-based search.
