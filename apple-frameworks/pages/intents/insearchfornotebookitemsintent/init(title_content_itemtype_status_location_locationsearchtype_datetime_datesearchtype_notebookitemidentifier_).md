> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchfornotebookitemsintent/init(title:content:itemtype:status:location:locationsearchtype:datetime:datesearchtype:notebookitemidentifier:)](https://developer.apple.com/documentation/intents/insearchfornotebookitemsintent/init(title:content:itemtype:status:location:locationsearchtype:datetime:datesearchtype:notebookitemidentifier:))

# init(title:content:itemType:status:location:locationSearchType:dateTime:dateSearchType:notebookItemIdentifier:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 11.2+ (deprecated in 13.0) · iPadOS 11.2+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.2+ (deprecated in 6.0)

Initializes the intent object with the specified search parameters.

> Use the designated initializer instead

## Declaration

```swift
convenience init(title: INSpeakableString?, content: String?, itemType: INNotebookItemType, status: INTaskStatus, location: CLPlacemark?, locationSearchType: INLocationSearchType, dateTime: INDateComponentsRange?, dateSearchType: INDateSearchType, notebookItemIdentifier: String?)
```

## Parameters

- `title`: The text to search for in the title of the note, task, or task list.
- `content`: The text to search for in the content of a note.
- `itemType`: The type of items to search. Use this parameter to restrict your search to items of the specified type.
- `status`: The completion status of the task. Use this parameter to restrict your search to tasks whose status matches the specified value.
- `location`: The location value to use during your search. When the `locationSearchType` parameter is [INLocationSearchType.byLocationTrigger](../inlocationsearchtype/bylocationtrigger.md), use this parameter to restrict your search to reminders that are triggered near the specified location.
- `locationSearchType`: The type of location search to perform. Use this parameter to specify when a search for location-based reminders should occur.
- `dateTime`: The time value to use during your search. Use the value of the `dateSearchType` parameter to determine how to apply the value of this parameter.
- `dateSearchType`: The type of date-based search to perform. Use this parameter to specify when to search for notes with the specified creation or modification date or when to search for reminders based on the date on which they are delivered.
- `notebookItemIdentifier`: The unique string that your app uses to identify the notebook item.

<a id="return-value"></a>

## Return Value

An initialized intent object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Normally, you do not create instances of this class yourself. Instead, SiriKit creates instances when the user asks to search for notes, task lists, tasks, or reminders. However, you can use this method during testing to create intent objects in order to validate your intent handling code paths. When doing so, specify only the search parameters that you want to include and provide `nil` or unknown values for other parameters.

## See Also

### Initializing the Intent Object

- [init(title:content:itemType:status:location:locationSearchType:dateTime:dateSearchType:temporalEventTriggerTypes:taskPriority:notebookItemIdentifier:)](init%28title_content_itemtype_status_location_locationsearchtype_datetime_datesearchtype_temporaleventtriggertypes_taskpriority_notebookitemidentifier_%29.md): Deprecated.
- [init(title:content:itemType:status:location:locationSearchType:dateTime:dateSearchType:)](init%28title_content_itemtype_status_location_locationsearchtype_datetime_datesearchtype_%29.md): Deprecated. Initializes the intent object with the specified search parameters.

# initWithTitle:content:itemType:status:location:locationSearchType:dateTime:dateSearchType:notebookItemIdentifier: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.2+ (deprecated in 13.0) · iPadOS 11.2+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 11.2+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.2+ (deprecated in 6.0)

Initializes the intent object with the specified search parameters.

> Use the designated initializer instead

## Declaration

```objectivec
- (instancetype) initWithTitle:(INSpeakableString *) title content:(NSString *) content itemType:(INNotebookItemType) itemType status:(INTaskStatus) status location:(CLPlacemark *) location locationSearchType:(INLocationSearchType) locationSearchType dateTime:(INDateComponentsRange *) dateTime dateSearchType:(INDateSearchType) dateSearchType notebookItemIdentifier:(NSString *) notebookItemIdentifier;
```

## Parameters

- `title`: The text to search for in the title of the note, task, or task list.
- `content`: The text to search for in the content of a note.
- `itemType`: The type of items to search. Use this parameter to restrict your search to items of the specified type.
- `status`: The completion status of the task. Use this parameter to restrict your search to tasks whose status matches the specified value.
- `location`: The location value to use during your search. When the `locationSearchType` parameter is [INLocationSearchTypeByLocationTrigger](../inlocationsearchtype/bylocationtrigger.md), use this parameter to restrict your search to reminders that are triggered near the specified location.
- `locationSearchType`: The type of location search to perform. Use this parameter to specify when a search for location-based reminders should occur.
- `dateTime`: The time value to use during your search. Use the value of the `dateSearchType` parameter to determine how to apply the value of this parameter.
- `dateSearchType`: The type of date-based search to perform. Use this parameter to specify when to search for notes with the specified creation or modification date or when to search for reminders based on the date on which they are delivered.
- `notebookItemIdentifier`: The unique string that your app uses to identify the notebook item.

<a id="return-value"></a>

## Return Value

An initialized intent object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Normally, you do not create instances of this class yourself. Instead, SiriKit creates instances when the user asks to search for notes, task lists, tasks, or reminders. However, you can use this method during testing to create intent objects in order to validate your intent handling code paths. When doing so, specify only the search parameters that you want to include and provide `nil` or unknown values for other parameters.

## See Also

### Initializing the Intent Object

- [initWithTitle:content:itemType:status:location:locationSearchType:dateTime:dateSearchType:temporalEventTriggerTypes:taskPriority:notebookItemIdentifier:](init%28title_content_itemtype_status_location_locationsearchtype_datetime_datesearchtype_temporaleventtriggertypes_taskpriority_notebookitemidentifier_%29.md): Deprecated.
- [initWithTitle:content:itemType:status:location:locationSearchType:dateTime:dateSearchType:](init%28title_content_itemtype_status_location_locationsearchtype_datetime_datesearchtype_%29.md): Deprecated. Initializes the intent object with the specified search parameters.
