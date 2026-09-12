> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchfornotebookitemsintenthandling/resolvelocation(for:with:)](https://developer.apple.com/documentation/intents/insearchfornotebookitemsintenthandling/resolvelocation(for:with:))

# resolveLocation(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Resolves how to use a location value during the search.

> INSearchForNotebookItemsIntentHandling is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
optional func resolveLocation(for intent: INSearchForNotebookItemsIntent, with completion: @escaping @Sendable (INPlacemarkResolutionResult) -> Void)
```

```swift
optional func resolveLocation(for intent: INSearchForNotebookItemsIntent) async -> INPlacemarkResolutionResult
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object with the search type that you support.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve how to use a location value during the search. Use this method to verify that you can perform a location-based search for the type specified by the [locationSearchType](../insearchfornotebookitemsintent/locationsearchtype.md) property of the intent. If the type is [INLocationSearchType.unknown](../inlocationsearchtype/unknown.md) or you do not consider locations when performing the search, you can return a resolution indicating that the location type is not required. Return a successful resolution if you support searching using the specified type or return a different result if you do not support the specific type requested by the user.

## See Also

### Resolving the Intent Parameters

- [resolveItemType(for:with:)](resolveitemtype%28for_with_%29.md): Deprecated. Resolves the type of items to search.
- [resolveTitle(for:with:)](resolvetitle%28for_with_%29.md): Deprecated. Resolves the string to use when searching the title of notes, tasks, or reminders.
- [resolveContent(for:with:)](resolvecontent%28for_with_%29.md): Deprecated. Resolves the string to use when searching the content of notes.
- [resolveStatus(for:with:)](resolvestatus%28for_with_%29.md): Deprecated. Resolves the status value to use during the search.
- [resolveDateSearchType(for:with:)](resolvedatesearchtype%28for_with_%29.md): Deprecated. Resolves how to use a date value during the search.
- [resolveDateTime(for:with:)](resolvedatetime%28for_with_%29.md): Deprecated. Resolves the date to use during a date-based search.
- [resolveLocationSearchType(for:with:)](resolvelocationsearchtype%28for_with_%29.md): Deprecated. Resolves the location to use during a location-based search.
- [resolveTaskPriority(for:with:)](resolvetaskpriority%28for_with_%29.md): Deprecated. Resolves the priority to use during a priority-based search.
- [resolveTemporalEventTriggerTypes(for:with:)](resolvetemporaleventtriggertypes%28for_with_%29.md): Deprecated. Resolves the trigger type to use during a temporal-based search.

# resolveLocationForSearchForNotebookItems:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Resolves how to use a location value during the search.

> INSearchForNotebookItemsIntentHandling is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
- (void) resolveLocationForSearchForNotebookItems:(INSearchForNotebookItemsIntent *) intent withCompletion:(void (^)(INPlacemarkResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object with the search type that you support.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve how to use a location value during the search. Use this method to verify that you can perform a location-based search for the type specified by the [locationSearchType](../insearchfornotebookitemsintent/locationsearchtype.md) property of the intent. If the type is [INLocationSearchTypeUnknown](../inlocationsearchtype/unknown.md) or you do not consider locations when performing the search, you can return a resolution indicating that the location type is not required. Return a successful resolution if you support searching using the specified type or return a different result if you do not support the specific type requested by the user.

## See Also

### Resolving the Intent Parameters

- [resolveItemTypeForSearchForNotebookItems:withCompletion:](resolveitemtype%28for_with_%29.md): Deprecated. Resolves the type of items to search.
- [resolveTitleForSearchForNotebookItems:withCompletion:](resolvetitle%28for_with_%29.md): Deprecated. Resolves the string to use when searching the title of notes, tasks, or reminders.
- [resolveContentForSearchForNotebookItems:withCompletion:](resolvecontent%28for_with_%29.md): Deprecated. Resolves the string to use when searching the content of notes.
- [resolveStatusForSearchForNotebookItems:withCompletion:](resolvestatus%28for_with_%29.md): Deprecated. Resolves the status value to use during the search.
- [resolveDateSearchTypeForSearchForNotebookItems:withCompletion:](resolvedatesearchtype%28for_with_%29.md): Deprecated. Resolves how to use a date value during the search.
- [resolveDateTimeForSearchForNotebookItems:withCompletion:](resolvedatetime%28for_with_%29.md): Deprecated. Resolves the date to use during a date-based search.
- [resolveLocationSearchTypeForSearchForNotebookItems:withCompletion:](resolvelocationsearchtype%28for_with_%29.md): Deprecated. Resolves the location to use during a location-based search.
- [resolveTaskPriorityForSearchForNotebookItems:withCompletion:](resolvetaskpriority%28for_with_%29.md): Deprecated. Resolves the priority to use during a priority-based search.
- [resolveTemporalEventTriggerTypesForSearchForNotebookItems:withCompletion:](resolvetemporaleventtriggertypes%28for_with_%29.md): Deprecated. Resolves the trigger type to use during a temporal-based search.
