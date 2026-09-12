> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekcalendar/calendaridentifier](https://developer.apple.com/documentation/eventkit/ekcalendar/calendaridentifier)

# calendarIdentifier (Swift)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

A unique identifier for the calendar.

## Declaration

```swift
var calendarIdentifier: String { get }
```

<a id="Discussion"></a>

## Discussion

This property is set when the calendar is created and can be used as a local identifier. Use [calendar(withIdentifier:)](../ekeventstore/calendar%28withidentifier_%29.md) to get a calendar with the specified identifier.

A full sync with the calendar will lose this identifier. You should have a plan for dealing with a calendar whose identifier is no longer fetch-able by caching its other properties.

## See Also

### Related Documentation

- [calendarItemIdentifier](../ekcalendaritem/calendaritemidentifier.md): The calendar item’s unique identifier.

### Accessing Calendar Properties

- [EKCalendarType](../ekcalendartype.md): Possible calendar types.
- [EKCalendarEventAvailabilityMask](../ekcalendareventavailabilitymask.md): A bitmask indicating the event availability settings that the calendar can support.
- [allowsContentModifications](allowscontentmodifications.md): A Boolean value that indicates whether you can add, edit, and delete items in the calendar.
- [cgColor](cgcolor.md): The calendar’s color.
- [color](color.md): The calendar’s color.
- [isImmutable](isimmutable.md): A Boolean value indicating whether the calendar’s properties can be edited or deleted.
- [title](title.md): The calendar’s title.
- [type](type.md): The calendar’s type.
- [allowedEntityTypes](allowedentitytypes.md): The entity types this calendar can contain.
- [source](source.md): The source object representing the account to which this calendar belongs.
- [isSubscribed](issubscribed.md): A Boolean value indicating whether the calendar is a subscribed calendar.
- [supportedEventAvailabilities](supportedeventavailabilities.md): The event availability settings supported by this calendar, as indicated by a bitmask.
- [DATETIME_COMPONENTS_DO_NOT_USE()](../datetime_components_do_not_use%28%29.md): Deprecated. A deprecated function.
- [DATE_COMPONENTS_DO_NOT_USE()](../date_components_do_not_use%28%29.md): Deprecated. A deprecated function.

# calendarIdentifier (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

A unique identifier for the calendar.

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * calendarIdentifier;
```

<a id="Discussion"></a>

## Discussion

This property is set when the calendar is created and can be used as a local identifier. Use [calendarWithIdentifier:](../ekeventstore/calendar%28withidentifier_%29.md) to get a calendar with the specified identifier.

A full sync with the calendar will lose this identifier. You should have a plan for dealing with a calendar whose identifier is no longer fetch-able by caching its other properties.

## See Also

### Related Documentation

- [calendarItemIdentifier](../ekcalendaritem/calendaritemidentifier.md): The calendar item’s unique identifier.

### Accessing Calendar Properties

- [EKCalendarType](../ekcalendartype.md): Possible calendar types.
- [EKCalendarEventAvailabilityMask](../ekcalendareventavailabilitymask.md): A bitmask indicating the event availability settings that the calendar can support.
- [allowsContentModifications](allowscontentmodifications.md): A Boolean value that indicates whether you can add, edit, and delete items in the calendar.
- [CGColor](cgcolor.md): The calendar’s color.
- [color](color.md): The calendar’s color.
- [immutable](isimmutable.md): A Boolean value indicating whether the calendar’s properties can be edited or deleted.
- [title](title.md): The calendar’s title.
- [type](type.md): The calendar’s type.
- [allowedEntityTypes](allowedentitytypes.md): The entity types this calendar can contain.
- [source](source.md): The source object representing the account to which this calendar belongs.
- [subscribed](issubscribed.md): A Boolean value indicating whether the calendar is a subscribed calendar.
- [supportedEventAvailabilities](supportedeventavailabilities.md): The event availability settings supported by this calendar, as indicated by a bitmask.
- [DATETIME_COMPONENTS_DO_NOT_USE](../datetime_components_do_not_use%28%29.md): Deprecated. A deprecated function.
- [DATE_COMPONENTS_DO_NOT_USE](../date_components_do_not_use%28%29.md): Deprecated. A deprecated function.
