> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/time-utilities](https://developer.apple.com/documentation/corefoundation/time-utilities)

# Time Utilities (Swift)

**Framework:** Core Foundation  
**Kind:** API Collection

<a id="Overview"></a>

## Overview

Core Foundation measures time in units of seconds. The base data type is the [CFTimeInterval](cftimeinterval.md), which measures the difference in seconds between two times. Fixed times, or dates, are defined by the [CFAbsoluteTime](cfabsolutetime.md) data type, which measures the time interval between a particular date and the absolute reference date of Jan 1 2001 00:00:00 GMT.

The [CFGregorianDate](cfgregoriandate.md) structure represents absolute times in terms of the Gregorian calendar. Functions such as [CFAbsoluteTimeGetGregorianDate(\_:\_:)](cfabsolutetimegetgregoriandate%28____%29.md) use a [CFTimeZone](cftimezone.md) object to obtain the local time in a particular time zone.

The [CFDate](cfdate.md) opaque type wraps an absolute time into a [CFTypeRef](cftyperef.md)-base object, allowing you to put time objects into collections and property lists and to be handled by other object-oriented parts of Core Foundation.

## Topics

### Core Foundation Time Utilities Miscellaneous Functions

- [CFAbsoluteTimeAddGregorianUnits(\_:\_:\_:)](cfabsolutetimeaddgregorianunits%28______%29.md): Deprecated. Adds a time interval, expressed as Gregorian units, to a given absolute time.
- [CFAbsoluteTimeGetCurrent()](cfabsolutetimegetcurrent%28%29.md): Returns the current system absolute time.
- [CFAbsoluteTimeGetDayOfWeek(\_:\_:)](cfabsolutetimegetdayofweek%28____%29.md): Deprecated. Returns an integer representing the day of the week indicated by the specified absolute time.
- [CFAbsoluteTimeGetDayOfYear(\_:\_:)](cfabsolutetimegetdayofyear%28____%29.md): Deprecated. Returns an integer representing the day of the year indicated by the specified absolute time.
- [CFAbsoluteTimeGetDifferenceAsGregorianUnits(\_:\_:\_:\_:)](cfabsolutetimegetdifferenceasgregorianunits%28________%29.md): Deprecated. Computes the time difference between two specified absolute times and returns the result as an interval in Gregorian units.
- [CFAbsoluteTimeGetGregorianDate(\_:\_:)](cfabsolutetimegetgregoriandate%28____%29.md): Deprecated. Converts an absolute time value into a Gregorian date.
- [CFAbsoluteTimeGetWeekOfYear(\_:\_:)](cfabsolutetimegetweekofyear%28____%29.md): Deprecated. Returns an integer representing the week of the year indicated by the specified absolute time.
- [CFGregorianDateGetAbsoluteTime(\_:\_:)](cfgregoriandategetabsolutetime%28____%29.md): Deprecated. Converts a Gregorian date value into an absolute time value.
- [CFGregorianDateIsValid(\_:\_:)](cfgregoriandateisvalid%28____%29.md): Deprecated. Checks the specified fields of a CFGregorianDate structure for valid values.

### Data Types

- [CFAbsoluteTime](cfabsolutetime.md): Type used to represent a specific point in time relative to the absolute reference date of 1 Jan 2001 00:00:00 GMT.
- [CFGregorianDate](cfgregoriandate.md): Deprecated. Structure used to represent a point in time using the Gregorian calendar.
- [CFGregorianUnits](cfgregorianunits.md): Deprecated. Structure used to represent a time interval in Gregorian units.
- [CFTimeInterval](cftimeinterval.md): Type used to represent elapsed time in seconds.

### Constants

- [CFGregorianUnitFlags](cfgregorianunitflags.md): These option flags are used as a mask to indicate a specific set of fields in the CFGregorianDate or CFGregorianUnits structures.
- [Predefined Time Interval Values](predefined-time-interval-values.md): Time intervals between the absolute reference date and certain other dates.

## See Also

### Related Documentation

- [Date and Time Programming Guide for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFDatesAndTimes/CFDatesAndTimes.html#//apple_ref/doc/uid/10000125i)

### Utilities

- [Base Utilities](base-utilities.md)
- [Byte-Order Utilities](byte-order-utilities.md)
- [Core Foundation URL Access Utilities](core-foundation-url-access-utilities.md)
- [Preferences Utilities](preferences-utilities.md)
- [Socket Name Server Utilities](socket-name-server-utilities.md)

# Time Utilities (Objective-C)

**Framework:** Core Foundation  
**Kind:** API Collection

<a id="Overview"></a>

## Overview

Core Foundation measures time in units of seconds. The base data type is the [CFTimeInterval](cftimeinterval.md), which measures the difference in seconds between two times. Fixed times, or dates, are defined by the [CFAbsoluteTime](cfabsolutetime.md) data type, which measures the time interval between a particular date and the absolute reference date of Jan 1 2001 00:00:00 GMT.

The [CFGregorianDate](cfgregoriandate.md) structure represents absolute times in terms of the Gregorian calendar. Functions such as [CFAbsoluteTimeGetGregorianDate](cfabsolutetimegetgregoriandate%28____%29.md) use a [CFTimeZoneRef](cftimezone.md) object to obtain the local time in a particular time zone.

The [CFDateRef](cfdate.md) opaque type wraps an absolute time into a [CFTypeRef](cftyperef.md)-base object, allowing you to put time objects into collections and property lists and to be handled by other object-oriented parts of Core Foundation.

## Topics

### Core Foundation Time Utilities Miscellaneous Functions

- [CFAbsoluteTimeAddGregorianUnits](cfabsolutetimeaddgregorianunits%28______%29.md): Deprecated. Adds a time interval, expressed as Gregorian units, to a given absolute time.
- [CFAbsoluteTimeGetCurrent](cfabsolutetimegetcurrent%28%29.md): Returns the current system absolute time.
- [CFAbsoluteTimeGetDayOfWeek](cfabsolutetimegetdayofweek%28____%29.md): Deprecated. Returns an integer representing the day of the week indicated by the specified absolute time.
- [CFAbsoluteTimeGetDayOfYear](cfabsolutetimegetdayofyear%28____%29.md): Deprecated. Returns an integer representing the day of the year indicated by the specified absolute time.
- [CFAbsoluteTimeGetDifferenceAsGregorianUnits](cfabsolutetimegetdifferenceasgregorianunits%28________%29.md): Deprecated. Computes the time difference between two specified absolute times and returns the result as an interval in Gregorian units.
- [CFAbsoluteTimeGetGregorianDate](cfabsolutetimegetgregoriandate%28____%29.md): Deprecated. Converts an absolute time value into a Gregorian date.
- [CFAbsoluteTimeGetWeekOfYear](cfabsolutetimegetweekofyear%28____%29.md): Deprecated. Returns an integer representing the week of the year indicated by the specified absolute time.
- [CFGregorianDateGetAbsoluteTime](cfgregoriandategetabsolutetime%28____%29.md): Deprecated. Converts a Gregorian date value into an absolute time value.
- [CFGregorianDateIsValid](cfgregoriandateisvalid%28____%29.md): Deprecated. Checks the specified fields of a CFGregorianDate structure for valid values.

### Data Types

- [CFAbsoluteTime](cfabsolutetime.md): Type used to represent a specific point in time relative to the absolute reference date of 1 Jan 2001 00:00:00 GMT.
- [CFGregorianDate](cfgregoriandate.md): Deprecated. Structure used to represent a point in time using the Gregorian calendar.
- [CFGregorianUnits](cfgregorianunits.md): Deprecated. Structure used to represent a time interval in Gregorian units.
- [CFTimeInterval](cftimeinterval.md): Type used to represent elapsed time in seconds.

### Constants

- [CFGregorianUnitFlags](cfgregorianunitflags.md): These option flags are used as a mask to indicate a specific set of fields in the CFGregorianDate or CFGregorianUnits structures.
- [Predefined Time Interval Values](predefined-time-interval-values.md): Time intervals between the absolute reference date and certain other dates.

## See Also

### Related Documentation

- [Date and Time Programming Guide for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFDatesAndTimes/CFDatesAndTimes.html#//apple_ref/doc/uid/10000125i)

### Utilities

- [Base Utilities](base-utilities.md)
- [Byte-Order Utilities](byte-order-utilities.md)
- [Core Foundation URL Access Utilities](core-foundation-url-access-utilities.md)
- [Preferences Utilities](preferences-utilities.md)
- [Socket Name Server Utilities](socket-name-server-utilities.md)
