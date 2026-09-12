> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscalendar/autoupdatingcurrent](https://developer.apple.com/documentation/foundation/nscalendar/autoupdatingcurrent)

# autoupdatingCurrent (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A calendar that tracks changes to user’s preferred calendar.

## Declaration

```swift
class var autoupdatingCurrent: Calendar { get }
```

<a id="return-value"></a>

## Return Value

The current logical calendar for the current user.

<a id="Discussion"></a>

## Discussion

Settings you get from this calendar do change as the user’s settings change (contrast with [current](current.md)).

Note that if you cache values based on the calendar or related information those caches will of course not be automatically updated by the updating of the calendar object.

## See Also

### Related Documentation

- [init(calendarIdentifier:)](init%28calendaridentifier_%29.md): Initializes a calendar according to a given identifier.
- [calendarIdentifier](calendaridentifier.md): An identifier for the calendar.

### Getting the User’s Calendar

- [current](current.md): The user’s current calendar.

# autoupdatingCurrentCalendar (Objective-C)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A calendar that tracks changes to user’s preferred calendar.

## Declaration

```objectivec
@property (class, strong, readonly) NSCalendar * autoupdatingCurrentCalendar;
```

<a id="return-value"></a>

## Return Value

The current logical calendar for the current user.

<a id="Discussion"></a>

## Discussion

Settings you get from this calendar do change as the user’s settings change (contrast with [currentCalendar](current.md)).

Note that if you cache values based on the calendar or related information those caches will of course not be automatically updated by the updating of the calendar object.

## See Also

### Related Documentation

- [initWithCalendarIdentifier:](init%28calendaridentifier_%29.md): Initializes a calendar according to a given identifier.
- [calendarIdentifier](calendaridentifier.md): An identifier for the calendar.

### Getting the User’s Calendar

- [currentCalendar](current.md): The user’s current calendar.
