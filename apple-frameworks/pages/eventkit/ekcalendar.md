> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekcalendar](https://developer.apple.com/documentation/eventkit/ekcalendar)

# EKCalendar (Swift)

**Framework:** EventKit  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

A class that represents a calendar in EventKit.

## Declaration

```swift
class EKCalendar
```

## Mentioned In

- [Retrieving events and reminders](retrieving-events-and-reminders.md)

<a id="overview"></a>

## Overview

Use the properties in this class to get attributes about a calendar, such as its title and type. Use the [init(for:eventStore:)](ekcalendar/init%28for_eventstore_%29.md) method to create a calendar object.

## Topics

### Creating Calendars

- [init(for:eventStore:)](ekcalendar/init%28for_eventstore_%29.md): Creates a new calendar that can contain the given entity type.
- [init(eventStore:)](ekcalendar/init%28eventstore_%29.md): Deprecated. Creates and returns a calendar belonging to a specified event store.

### Accessing Calendar Properties

- [EKCalendarType](ekcalendartype.md): Possible calendar types.
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

### Initializers

- [init(forEntityType:eventStore:)](ekcalendar/init%28forentitytype_eventstore_%29.md)

## Relationships

### Inherits From

- [EKObject](ekobject.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Calendars

- [EKParticipant](ekparticipant.md): A class that represents person, group, or room invited to a calendar event.

# EKCalendar (Objective-C)

**Framework:** EventKit  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

A class that represents a calendar in EventKit.

## Declaration

```objectivec
@interface EKCalendar : EKObject
```

## Mentioned In

- [Retrieving events and reminders](retrieving-events-and-reminders.md)

<a id="overview"></a>

## Overview

Use the properties in this class to get attributes about a calendar, such as its title and type. Use the [calendarForEntityType:eventStore:](ekcalendar/init%28for_eventstore_%29.md) method to create a calendar object.

## Topics

### Creating Calendars

- [calendarForEntityType:eventStore:](ekcalendar/init%28for_eventstore_%29.md): Creates a new calendar that can contain the given entity type.
- [calendarWithEventStore:](ekcalendar/init%28eventstore_%29.md): Deprecated. Creates and returns a calendar belonging to a specified event store.

### Accessing Calendar Properties

- [EKCalendarType](ekcalendartype.md): Possible calendar types.
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

## Relationships

### Inherits From

- [EKObject](ekobject.md)

## See Also

### Calendars

- [EKParticipant](ekparticipant.md): A class that represents person, group, or room invited to a calendar event.
