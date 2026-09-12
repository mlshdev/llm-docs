> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscalendar/current](https://developer.apple.com/documentation/foundation/nscalendar/current)

# current (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The user’s current calendar.

## Declaration

```swift
class var current: Calendar { get }
```

<a id="return-value"></a>

## Return Value

The logical calendar for the current user.

<a id="Discussion"></a>

## Discussion

The returned calendar is formed from the settings for the current user’s chosen system locale overlaid with any custom settings the user has specified in System Preferences. Settings you get from this calendar do not change as System Preferences are changed, so that your operations are consistent  (contrast with [autoupdatingCurrent](autoupdatingcurrent.md)).

## See Also

### Related Documentation

- [Date and Time Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DatesAndTimes/DatesAndTimes.html#//apple_ref/doc/uid/10000039i)
- [Data Formatting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DataFormatting/DataFormatting.html#//apple_ref/doc/uid/10000029i)
- [init(calendarIdentifier:)](init%28calendaridentifier_%29.md): Initializes a calendar according to a given identifier.
- [calendarIdentifier](calendaridentifier.md): An identifier for the calendar.

### Getting the User’s Calendar

- [autoupdatingCurrent](autoupdatingcurrent.md): A calendar that tracks changes to user’s preferred calendar.

# currentCalendar (Objective-C)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The user’s current calendar.

## Declaration

```objectivec
@property (class, copy, readonly) NSCalendar * currentCalendar;
```

<a id="return-value"></a>

## Return Value

The logical calendar for the current user.

<a id="Discussion"></a>

## Discussion

The returned calendar is formed from the settings for the current user’s chosen system locale overlaid with any custom settings the user has specified in System Preferences. Settings you get from this calendar do not change as System Preferences are changed, so that your operations are consistent  (contrast with [autoupdatingCurrentCalendar](autoupdatingcurrent.md)).

## See Also

### Related Documentation

- [Date and Time Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DatesAndTimes/DatesAndTimes.html#//apple_ref/doc/uid/10000039i)
- [Data Formatting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DataFormatting/DataFormatting.html#//apple_ref/doc/uid/10000029i)
- [initWithCalendarIdentifier:](init%28calendaridentifier_%29.md): Initializes a calendar according to a given identifier.
- [calendarIdentifier](calendaridentifier.md): An identifier for the calendar.

### Getting the User’s Calendar

- [autoupdatingCurrentCalendar](autoupdatingcurrent.md): A calendar that tracks changes to user’s preferred calendar.
