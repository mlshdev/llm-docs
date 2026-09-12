> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekcalendartype](https://developer.apple.com/documentation/eventkit/ekcalendartype)

# EKCalendarType (Swift)

**Framework:** EventKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Possible calendar types.

## Declaration

```swift
enum EKCalendarType
```

## Topics

### Constants

- [EKCalendarType.local](ekcalendartype/local.md): A local calendar.
- [EKCalendarType.calDAV](ekcalendartype/caldav.md): A CalDAV or iCloud calendar.
- [EKCalendarType.exchange](ekcalendartype/exchange.md): An Exchange calendar.
- [EKCalendarType.subscription](ekcalendartype/subscription.md): A locally subscribed calendar.
- [EKCalendarType.birthday](ekcalendartype/birthday.md): A birthday calendar.

### Initializers

- [init(rawValue:)](ekcalendartype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing Calendar Properties

- [EKCalendarEventAvailabilityMask](ekcalendareventavailabilitymask.md): A bitmask indicating the event availability settings that the calendar can support.
- [allowsContentModifications](ekcalendar/allowscontentmodifications.md): A Boolean value that indicates whether you can add, edit, and delete items in the calendar.
- [cgColor](ekcalendar/cgcolor.md): The calendar’s color.
- [color](ekcalendar/color.md): The calendar’s color.
- [isImmutable](ekcalendar/isimmutable.md): A Boolean value indicating whether the calendar’s properties can be edited or deleted.
- [title](ekcalendar/title.md): The calendar’s title.
- [type](ekcalendar/type.md): The calendar’s type.
- [allowedEntityTypes](ekcalendar/allowedentitytypes.md): The entity types this calendar can contain.
- [source](ekcalendar/source.md): The source object representing the account to which this calendar belongs.
- [isSubscribed](ekcalendar/issubscribed.md): A Boolean value indicating whether the calendar is a subscribed calendar.
- [supportedEventAvailabilities](ekcalendar/supportedeventavailabilities.md): The event availability settings supported by this calendar, as indicated by a bitmask.
- [calendarIdentifier](ekcalendar/calendaridentifier.md): A unique identifier for the calendar.
- [DATETIME_COMPONENTS_DO_NOT_USE()](datetime_components_do_not_use%28%29.md): Deprecated. A deprecated function.
- [DATE_COMPONENTS_DO_NOT_USE()](date_components_do_not_use%28%29.md): Deprecated. A deprecated function.

# EKCalendarType (Objective-C)

**Framework:** EventKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Possible calendar types.

## Declaration

```objectivec
enum EKCalendarType : NSInteger;
```

## Topics

### Constants

- [EKCalendarTypeLocal](ekcalendartype/local.md): A local calendar.
- [EKCalendarTypeCalDAV](ekcalendartype/caldav.md): A CalDAV or iCloud calendar.
- [EKCalendarTypeExchange](ekcalendartype/exchange.md): An Exchange calendar.
- [EKCalendarTypeSubscription](ekcalendartype/subscription.md): A locally subscribed calendar.
- [EKCalendarTypeBirthday](ekcalendartype/birthday.md): A birthday calendar.

## See Also

### Accessing Calendar Properties

- [EKCalendarEventAvailabilityMask](ekcalendareventavailabilitymask.md): A bitmask indicating the event availability settings that the calendar can support.
- [allowsContentModifications](ekcalendar/allowscontentmodifications.md): A Boolean value that indicates whether you can add, edit, and delete items in the calendar.
- [CGColor](ekcalendar/cgcolor.md): The calendar’s color.
- [color](ekcalendar/color.md): The calendar’s color.
- [immutable](ekcalendar/isimmutable.md): A Boolean value indicating whether the calendar’s properties can be edited or deleted.
- [title](ekcalendar/title.md): The calendar’s title.
- [type](ekcalendar/type.md): The calendar’s type.
- [allowedEntityTypes](ekcalendar/allowedentitytypes.md): The entity types this calendar can contain.
- [source](ekcalendar/source.md): The source object representing the account to which this calendar belongs.
- [subscribed](ekcalendar/issubscribed.md): A Boolean value indicating whether the calendar is a subscribed calendar.
- [supportedEventAvailabilities](ekcalendar/supportedeventavailabilities.md): The event availability settings supported by this calendar, as indicated by a bitmask.
- [calendarIdentifier](ekcalendar/calendaridentifier.md): A unique identifier for the calendar.
- [DATETIME_COMPONENTS_DO_NOT_USE](datetime_components_do_not_use%28%29.md): Deprecated. A deprecated function.
- [DATE_COMPONENTS_DO_NOT_USE](date_components_do_not_use%28%29.md): Deprecated. A deprecated function.
