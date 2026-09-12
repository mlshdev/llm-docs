> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekcalendareventavailabilitymask](https://developer.apple.com/documentation/eventkit/ekcalendareventavailabilitymask)

# EKCalendarEventAvailabilityMask (Swift)

**Framework:** EventKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

A bitmask indicating the event availability settings that the calendar can support.

## Declaration

```swift
struct EKCalendarEventAvailabilityMask
```

## Topics

### Initializers

- [init(rawValue:)](ekcalendareventavailabilitymask/init%28rawvalue_%29.md): Creates a calendar event availability mask with the specified raw value.

### Type Properties

- [busy](ekcalendareventavailabilitymask/busy.md): The calendar supports the busy event availability setting.
- [free](ekcalendareventavailabilitymask/free.md): The calendar supports the free event availability setting.
- [tentative](ekcalendareventavailabilitymask/tentative.md): The calendar supports the tentative event availability setting.
- [unavailable](ekcalendareventavailabilitymask/unavailable.md): The calendar supports the unavailable event availability setting.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Accessing Calendar Properties

- [EKCalendarType](ekcalendartype.md): Possible calendar types.
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

# EKCalendarEventAvailabilityMask (Objective-C)

**Framework:** EventKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

A bitmask indicating the event availability settings that the calendar can support.

## Declaration

```objectivec
enum EKCalendarEventAvailabilityMask : NSUInteger;
```

## Topics

### Type Properties

- [EKCalendarEventAvailabilityBusy](ekcalendareventavailabilitymask/busy.md): The calendar supports the busy event availability setting.
- [EKCalendarEventAvailabilityFree](ekcalendareventavailabilitymask/free.md): The calendar supports the free event availability setting.
- [EKCalendarEventAvailabilityTentative](ekcalendareventavailabilitymask/tentative.md): The calendar supports the tentative event availability setting.
- [EKCalendarEventAvailabilityUnavailable](ekcalendareventavailabilitymask/unavailable.md): The calendar supports the unavailable event availability setting.
- [EKCalendarEventAvailabilityNone](ekcalendareventavailabilitymask/ekcalendareventavailabilitynone.md): The calendar does not support event availability settings.

## See Also

### Accessing Calendar Properties

- [EKCalendarType](ekcalendartype.md): Possible calendar types.
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
