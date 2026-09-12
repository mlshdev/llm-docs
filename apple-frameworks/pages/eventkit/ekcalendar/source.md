> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekcalendar/source](https://developer.apple.com/documentation/eventkit/ekcalendar/source)

# source (Swift)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

The source object representing the account to which this calendar belongs.

## Declaration

```swift
var source: EKSource! { get set }
```

<a id="Discussion"></a>

## Discussion

This property can only be set for newly created calendar objects. This property is read-only after the first time it is set; setting a value to this property after the first time it is set will result in an error. Therefore, moving a calendar from one source to another is not supported.

## See Also

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
- [isSubscribed](issubscribed.md): A Boolean value indicating whether the calendar is a subscribed calendar.
- [supportedEventAvailabilities](supportedeventavailabilities.md): The event availability settings supported by this calendar, as indicated by a bitmask.
- [calendarIdentifier](calendaridentifier.md): A unique identifier for the calendar.
- [DATETIME_COMPONENTS_DO_NOT_USE()](../datetime_components_do_not_use%28%29.md): Deprecated. A deprecated function.
- [DATE_COMPONENTS_DO_NOT_USE()](../date_components_do_not_use%28%29.md): Deprecated. A deprecated function.

# source (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

The source object representing the account to which this calendar belongs.

## Declaration

```objectivec
@property (nonatomic, strong, null_unspecified) EKSource * source;
```

<a id="Discussion"></a>

## Discussion

This property can only be set for newly created calendar objects. This property is read-only after the first time it is set; setting a value to this property after the first time it is set will result in an error. Therefore, moving a calendar from one source to another is not supported.

## See Also

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
- [subscribed](issubscribed.md): A Boolean value indicating whether the calendar is a subscribed calendar.
- [supportedEventAvailabilities](supportedeventavailabilities.md): The event availability settings supported by this calendar, as indicated by a bitmask.
- [calendarIdentifier](calendaridentifier.md): A unique identifier for the calendar.
- [DATETIME_COMPONENTS_DO_NOT_USE](../datetime_components_do_not_use%28%29.md): Deprecated. A deprecated function.
- [DATE_COMPONENTS_DO_NOT_USE](../date_components_do_not_use%28%29.md): Deprecated. A deprecated function.
