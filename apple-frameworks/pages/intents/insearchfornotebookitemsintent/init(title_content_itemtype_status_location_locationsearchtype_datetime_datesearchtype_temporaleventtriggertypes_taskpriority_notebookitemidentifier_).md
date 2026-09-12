> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchfornotebookitemsintent/init(title:content:itemtype:status:location:locationsearchtype:datetime:datesearchtype:temporaleventtriggertypes:taskpriority:notebookitemidentifier:)](https://developer.apple.com/documentation/intents/insearchfornotebookitemsintent/init(title:content:itemtype:status:location:locationsearchtype:datetime:datesearchtype:temporaleventtriggertypes:taskpriority:notebookitemidentifier:))

# init(title:content:itemType:status:location:locationSearchType:dateTime:dateSearchType:temporalEventTriggerTypes:taskPriority:notebookItemIdentifier:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

## Declaration

```swift
init(title: INSpeakableString?, content: String?, itemType: INNotebookItemType, status: INTaskStatus, location: CLPlacemark?, locationSearchType: INLocationSearchType, dateTime: INDateComponentsRange?, dateSearchType: INDateSearchType, temporalEventTriggerTypes: INTemporalEventTriggerTypeOptions = [], taskPriority: INTaskPriority, notebookItemIdentifier: String?)
```

## See Also

### Initializing the Intent Object

- [init(title:content:itemType:status:location:locationSearchType:dateTime:dateSearchType:notebookItemIdentifier:)](init%28title_content_itemtype_status_location_locationsearchtype_datetime_datesearchtype_notebookitemidentifier_%29.md): Deprecated. Initializes the intent object with the specified search parameters.
- [init(title:content:itemType:status:location:locationSearchType:dateTime:dateSearchType:)](init%28title_content_itemtype_status_location_locationsearchtype_datetime_datesearchtype_%29.md): Deprecated. Initializes the intent object with the specified search parameters.

# initWithTitle:content:itemType:status:location:locationSearchType:dateTime:dateSearchType:temporalEventTriggerTypes:taskPriority:notebookItemIdentifier: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

## Declaration

```objectivec
- (instancetype) initWithTitle:(INSpeakableString *) title content:(NSString *) content itemType:(INNotebookItemType) itemType status:(INTaskStatus) status location:(CLPlacemark *) location locationSearchType:(INLocationSearchType) locationSearchType dateTime:(INDateComponentsRange *) dateTime dateSearchType:(INDateSearchType) dateSearchType temporalEventTriggerTypes:(INTemporalEventTriggerTypeOptions) temporalEventTriggerTypes taskPriority:(INTaskPriority) taskPriority notebookItemIdentifier:(NSString *) notebookItemIdentifier;
```

## See Also

### Initializing the Intent Object

- [initWithTitle:content:itemType:status:location:locationSearchType:dateTime:dateSearchType:notebookItemIdentifier:](init%28title_content_itemtype_status_location_locationsearchtype_datetime_datesearchtype_notebookitemidentifier_%29.md): Deprecated. Initializes the intent object with the specified search parameters.
- [initWithTitle:content:itemType:status:location:locationSearchType:dateTime:dateSearchType:](init%28title_content_itemtype_status_location_locationsearchtype_datetime_datesearchtype_%29.md): Deprecated. Initializes the intent object with the specified search parameters.
