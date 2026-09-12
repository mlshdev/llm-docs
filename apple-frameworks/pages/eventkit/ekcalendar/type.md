> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekcalendar/type](https://developer.apple.com/documentation/eventkit/ekcalendar/type)

# type (Swift)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

The calendar’s type.

## Declaration

```swift
var type: EKCalendarType { get }
```

<a id="Discussion"></a>

## Discussion

CalDAV-subscribed calendars are of type [EKCalendarType.calDAV](../ekcalendartype/caldav.md) with [isSubscribed](issubscribed.md) set to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Accessing Calendar Properties

- [EKCalendarType](../ekcalendartype.md): Possible calendar types.
- [EKCalendarEventAvailabilityMask](../ekcalendareventavailabilitymask.md): A bitmask indicating the event availability settings that the calendar can support.
- [allowsContentModifications](allowscontentmodifications.md): A Boolean value that indicates whether you can add, edit, and delete items in the calendar.
- [cgColor](cgcolor.md): The calendar’s color.
- [color](color.md): The calendar’s color.
- [isImmutable](isimmutable.md): A Boolean value indicating whether the calendar’s properties can be edited or deleted.
- [title](title.md): The calendar’s title.
- [allowedEntityTypes](allowedentitytypes.md): The entity types this calendar can contain.
- [source](source.md): The source object representing the account to which this calendar belongs.
- [isSubscribed](issubscribed.md): A Boolean value indicating whether the calendar is a subscribed calendar.
- [supportedEventAvailabilities](supportedeventavailabilities.md): The event availability settings supported by this calendar, as indicated by a bitmask.
- [calendarIdentifier](calendaridentifier.md): A unique identifier for the calendar.
- [DATETIME_COMPONENTS_DO_NOT_USE()](../datetime_components_do_not_use%28%29.md): Deprecated. A deprecated function.
- [DATE_COMPONENTS_DO_NOT_USE()](../date_components_do_not_use%28%29.md): Deprecated. A deprecated function.

# type (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

The calendar’s type.

## Declaration

```objectivec
@property (nonatomic, readonly) EKCalendarType type;
```

<a id="Discussion"></a>

## Discussion

CalDAV-subscribed calendars are of type [EKCalendarTypeCalDAV](../ekcalendartype/caldav.md) with [subscribed](issubscribed.md) set to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Accessing Calendar Properties

- [EKCalendarType](../ekcalendartype.md): Possible calendar types.
- [EKCalendarEventAvailabilityMask](../ekcalendareventavailabilitymask.md): A bitmask indicating the event availability settings that the calendar can support.
- [allowsContentModifications](allowscontentmodifications.md): A Boolean value that indicates whether you can add, edit, and delete items in the calendar.
- [CGColor](cgcolor.md): The calendar’s color.
- [color](color.md): The calendar’s color.
- [immutable](isimmutable.md): A Boolean value indicating whether the calendar’s properties can be edited or deleted.
- [title](title.md): The calendar’s title.
- [allowedEntityTypes](allowedentitytypes.md): The entity types this calendar can contain.
- [source](source.md): The source object representing the account to which this calendar belongs.
- [subscribed](issubscribed.md): A Boolean value indicating whether the calendar is a subscribed calendar.
- [supportedEventAvailabilities](supportedeventavailabilities.md): The event availability settings supported by this calendar, as indicated by a bitmask.
- [calendarIdentifier](calendaridentifier.md): A unique identifier for the calendar.
- [DATETIME_COMPONENTS_DO_NOT_USE](../datetime_components_do_not_use%28%29.md): Deprecated. A deprecated function.
- [DATE_COMPONENTS_DO_NOT_USE](../date_components_do_not_use%28%29.md): Deprecated. A deprecated function.
