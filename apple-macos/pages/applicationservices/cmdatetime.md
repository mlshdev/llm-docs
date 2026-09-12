> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/cmdatetime](https://developer.apple.com/documentation/applicationservices/cmdatetime)

# CMDateTime

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Structure  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Contains data that specifies a date and time in year, month, day of the month, hours, minutes, and seconds

## Declaration

```objectivec
typedef struct CMDateTime {
    ...
} CMDateTime;
```

<a id="overview"></a>

## Overview

The ColorSync Manager defines the `CMDateTime` data structure to specify a date and time in year, month, day of the month, hours, minutes, and seconds. Other ColorSync structures use the `CMDateTime` structure to specify information such as the creation date or calibration date for a color space profile.

The `CMDateTime` structure is similar to the Macintosh Toolbox structure `DateTimeRec`, and like it, is intended to hold date and time values only for a Gregorian calendar.

The `CMDateTime` structure is platform independent. However, when used with Macintosh Toolbox routines such as `SecondsToDate` and `DateToSeconds`, which use seconds to designate years, the range of years that can be represented is limited.

## Topics

### Instance Properties

- [dayOfTheMonth](cmdatetime/1560620-dayofthemonth.md): Deprecated. The day of the month, ranging from 1 to 31.
- [hours](cmdatetime/1560584-hours.md): Deprecated. The hour of the day, ranging from 0 to 23, where 0 represents midnight and 23 represents 11:00 P.M.
- [minutes](cmdatetime/1560534-minutes.md): Deprecated. The minutes of the hour, ranging from 0 to 59.
- [month](cmdatetime/1560099-month.md): Deprecated. The month of the year, where 1 represents January, and 12 represents December.
- [seconds](cmdatetime/1560220-seconds.md): Deprecated. The seconds of the minute, ranging from 0 to 59.
- [year](cmdatetime/1560351-year.md): Deprecated. The year. Note that to indicate the year 1984, this field would store the integer 1984, not just 84.
