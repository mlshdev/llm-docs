> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekcalendar/isimmutable](https://developer.apple.com/documentation/eventkit/ekcalendar/isimmutable)

# isImmutable (Swift)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether the calendar’s properties can be edited or deleted.

## Declaration

```swift
var isImmutable: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the calendar is immutable; otherwise it is not. Events and reminders can still be added to an immutable calendar.

## See Also

### Accessing Calendar Properties

- [EKCalendarType](../ekcalendartype.md): Possible calendar types.
- [EKCalendarEventAvailabilityMask](../ekcalendareventavailabilitymask.md): A bitmask indicating the event availability settings that the calendar can support.
- [allowsContentModifications](allowscontentmodifications.md): A Boolean value that indicates whether you can add, edit, and delete items in the calendar.
- [cgColor](cgcolor.md): The calendar’s color.
- [color](color.md): The calendar’s color.
- [title](title.md): The calendar’s title.
- [type](type.md): The calendar’s type.
- [allowedEntityTypes](allowedentitytypes.md): The entity types this calendar can contain.
- [source](source.md): The source object representing the account to which this calendar belongs.
- [isSubscribed](issubscribed.md): A Boolean value indicating whether the calendar is a subscribed calendar.
- [supportedEventAvailabilities](supportedeventavailabilities.md): The event availability settings supported by this calendar, as indicated by a bitmask.
- [calendarIdentifier](calendaridentifier.md): A unique identifier for the calendar.
- [DATETIME_COMPONENTS_DO_NOT_USE()](../datetime_components_do_not_use%28%29.md): Deprecated. A deprecated function.
- [DATE_COMPONENTS_DO_NOT_USE()](../date_components_do_not_use%28%29.md): Deprecated. A deprecated function.

# immutable (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether the calendar’s properties can be edited or deleted.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isImmutable) BOOL immutable;
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the calendar is immutable; otherwise it is not. Events and reminders can still be added to an immutable calendar.

## See Also

### Accessing Calendar Properties

- [EKCalendarType](../ekcalendartype.md): Possible calendar types.
- [EKCalendarEventAvailabilityMask](../ekcalendareventavailabilitymask.md): A bitmask indicating the event availability settings that the calendar can support.
- [allowsContentModifications](allowscontentmodifications.md): A Boolean value that indicates whether you can add, edit, and delete items in the calendar.
- [CGColor](cgcolor.md): The calendar’s color.
- [color](color.md): The calendar’s color.
- [title](title.md): The calendar’s title.
- [type](type.md): The calendar’s type.
- [allowedEntityTypes](allowedentitytypes.md): The entity types this calendar can contain.
- [source](source.md): The source object representing the account to which this calendar belongs.
- [subscribed](issubscribed.md): A Boolean value indicating whether the calendar is a subscribed calendar.
- [supportedEventAvailabilities](supportedeventavailabilities.md): The event availability settings supported by this calendar, as indicated by a bitmask.
- [calendarIdentifier](calendaridentifier.md): A unique identifier for the calendar.
- [DATETIME_COMPONENTS_DO_NOT_USE](../datetime_components_do_not_use%28%29.md): Deprecated. A deprecated function.
- [DATE_COMPONENTS_DO_NOT_USE](../date_components_do_not_use%28%29.md): Deprecated. A deprecated function.
