> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nswrapcalendarcomponents-api](https://developer.apple.com/documentation/foundation/nswrapcalendarcomponents-api)

# NSWrapCalendarComponents (Swift)

**Framework:** Foundation  
**Kind:** API Collection

A legacy constant used to control overflow in date calculations.

<a id="overview"></a>

## Overview

> **Deprecated**

>  Use [wrapComponents](nscalendar/options/wrapcomponents.md) instead.

## Topics

### Constants

- [NSWrapCalendarComponents](nswrapcalendarcomponents.md): Deprecated. Specifies that the components specified for an `NSDateComponents` object should be incremented and wrap around to zero/one on overflow, but should not cause higher units to be incremented.

## See Also

### Scanning Dates

- [startOfDay(for:)](nscalendar/startofday%28for_%29.md): Returns the first moment of a given date as a date instance.
- [enumerateDates(startingAfter:matching:options:using:)](nscalendar/enumeratedates%28startingafter_matching_options_using_%29.md): Computes the dates that match (or most closely match) a given set of components, and calls the block once for each of them, until the enumeration is stopped.
- [nextDate(after:matching:options:)](nscalendar/nextdate%28after_matching_options_%29.md): Returns the next date after a given date matching the given components.
- [nextDate(after:matchingHour:minute:second:options:)](nscalendar/nextdate%28after_matchinghour_minute_second_options_%29.md): Returns the next date after a given date that matches the given hour, minute, and second, component values.
- [nextDate(after:matching:value:options:)](nscalendar/nextdate%28after_matching_value_options_%29.md): Returns the next date after a given date matching the given calendar unit value.
- [NSCalendar.Options](nscalendar/options.md): The options for arithmetic operations involving calendars.

# NSWrapCalendarComponents (Objective-C)

**Framework:** Foundation  
**Kind:** API Collection

A legacy constant used to control overflow in date calculations.

<a id="overview"></a>

## Overview

> **Deprecated**

>  Use [NSCalendarWrapComponents](nscalendar/options/wrapcomponents.md) instead.

## Topics

### Constants

- [NSWrapCalendarComponents](nswrapcalendarcomponents.md): Deprecated. Specifies that the components specified for an `NSDateComponents` object should be incremented and wrap around to zero/one on overflow, but should not cause higher units to be incremented.

## See Also

### Scanning Dates

- [startOfDayForDate:](nscalendar/startofday%28for_%29.md): Returns the first moment of a given date as a date instance.
- [enumerateDatesStartingAfterDate:matchingComponents:options:usingBlock:](nscalendar/enumeratedates%28startingafter_matching_options_using_%29.md): Computes the dates that match (or most closely match) a given set of components, and calls the block once for each of them, until the enumeration is stopped.
- [nextDateAfterDate:matchingComponents:options:](nscalendar/nextdate%28after_matching_options_%29.md): Returns the next date after a given date matching the given components.
- [nextDateAfterDate:matchingHour:minute:second:options:](nscalendar/nextdate%28after_matchinghour_minute_second_options_%29.md): Returns the next date after a given date that matches the given hour, minute, and second, component values.
- [nextDateAfterDate:matchingUnit:value:options:](nscalendar/nextdate%28after_matching_value_options_%29.md): Returns the next date after a given date matching the given calendar unit value.
- [NSCalendarOptions](nscalendar/options.md): The options for arithmetic operations involving calendars.
