> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscalendar/unit](https://developer.apple.com/documentation/foundation/nscalendar/unit)

# NSCalendar.Unit (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Calendrical units such as year, month, day and hour.

## Declaration

```swift
struct Unit
```

<a id="overview"></a>

## Overview

Calendar units may be used as a bit mask to specify a combination of units. Values in this enumeration are equal to the corresponding constants in `CFCalendarUnit`.

## Topics

### Initializers

- [init(rawValue:)](unit/init%28rawvalue_%29.md): Creates a new calendar unit from the raw value.

### Specifying Years and Months

- [era](unit/era.md): Identifier for the era unit.
- [year](unit/year.md): Identifier for the year unit.
- [yearForWeekOfYear](unit/yearforweekofyear.md): Identifier for the week-counting year unit.
- [quarter](unit/quarter.md): Identifier for the quarter of the calendar.
- [month](unit/month.md): Identifier for the month unit.
- [isLeapMonth](unit/isleapmonth.md): Identifier for the time zone of a date components object.

### Specifying Weeks and Days

- [weekOfYear](unit/weekofyear.md): Identifier for the week of the year calendar unit.
- [weekOfMonth](unit/weekofmonth.md): Identifier for the week of the month calendar unit.
- [weekday](unit/weekday.md): Identifier for the weekday unit.
- [weekdayOrdinal](unit/weekdayordinal.md): Identifier for the ordinal weekday unit.
- [day](unit/day.md): Identifier for the day unit.
- [dayOfYear](unit/dayofyear.md): Identifier for the nanosecond unit.
- [isRepeatedDay](unit/isrepeatedday.md): Identifier for the time zone of a date components object.

### Specifying Hours, Minutes, and Seconds

- [hour](unit/hour.md): Identifier for the hour unit.
- [minute](unit/minute.md): Identifier for the minute unit.
- [second](unit/second.md): Identifier for the second unit.
- [nanosecond](unit/nanosecond.md): Identifier for the nanosecond unit.

### Specifying Calendars and Time Zones

- [calendar](unit/calendar.md): Identifier for the calendar of a date components object.
- [timeZone](unit/timezone.md): Identifier for the time zone of a date components object.

### Deprecated

- [NSEraCalendarUnit](unit/nseracalendarunit.md): Deprecated. Specifies the era unit.
- [NSYearCalendarUnit](unit/nsyearcalendarunit.md): Deprecated. Specifies the year unit.
- [NSMonthCalendarUnit](unit/nsmonthcalendarunit.md): Deprecated. Specifies the month unit.
- [NSDayCalendarUnit](unit/nsdaycalendarunit.md): Deprecated. Specifies the day unit.
- [NSHourCalendarUnit](unit/nshourcalendarunit.md): Deprecated. Specifies the hour unit.
- [NSMinuteCalendarUnit](unit/nsminutecalendarunit.md): Deprecated. Specifies the minute unit.
- [NSSecondCalendarUnit](unit/nssecondcalendarunit.md): Deprecated. Specifies the second unit.
- [NSWeekCalendarUnit](unit/nsweekcalendarunit.md): Deprecated. Specifies the week unit.
- [NSWeekdayCalendarUnit](unit/nsweekdaycalendarunit.md): Deprecated. Specifies the weekday unit.
- [NSWeekdayOrdinalCalendarUnit](unit/nsweekdayordinalcalendarunit.md): Deprecated. Specifies the ordinal weekday unit.
- [NSQuarterCalendarUnit](unit/nsquartercalendarunit.md): Deprecated. Specifies the quarter unit.
- [NSWeekOfMonthCalendarUnit](unit/nsweekofmonthcalendarunit.md): Deprecated. Specifies the original week of a month calendar unit.
- [NSWeekOfYearCalendarUnit](unit/nsweekofyearcalendarunit.md): Deprecated. Specifies the original week of the year calendar unit.
- [NSYearForWeekOfYearCalendarUnit](unit/nsyearforweekofyearcalendarunit.md): Deprecated. Specifies the year when the calendar is being interpreted as a week-based calendar.
- [NSCalendarCalendarUnit](unit/nscalendarcalendarunit.md): Deprecated. Specifies the calendar of the calendar.
- [NSTimeZoneCalendarUnit](unit/nstimezonecalendarunit.md): Deprecated. Specifies the time zone of the calendar as an `NSTimeZone`.
- [NSEraCalendarUnit](unit/nseracalendarunit.md): Deprecated. Specifies the era unit.
- [NSYearCalendarUnit](unit/nsyearcalendarunit.md): Deprecated. Specifies the year unit.
- [NSMonthCalendarUnit](unit/nsmonthcalendarunit.md): Deprecated. Specifies the month unit.
- [NSDayCalendarUnit](unit/nsdaycalendarunit.md): Deprecated. Specifies the day unit.
- [NSHourCalendarUnit](unit/nshourcalendarunit.md): Deprecated. Specifies the hour unit.
- [NSMinuteCalendarUnit](unit/nsminutecalendarunit.md): Deprecated. Specifies the minute unit.
- [NSSecondCalendarUnit](unit/nssecondcalendarunit.md): Deprecated. Specifies the second unit.
- [NSWeekCalendarUnit](unit/nsweekcalendarunit.md): Deprecated. Specifies the week unit.
- [NSWeekdayCalendarUnit](unit/nsweekdaycalendarunit.md): Deprecated. Specifies the weekday unit.
- [NSWeekdayOrdinalCalendarUnit](unit/nsweekdayordinalcalendarunit.md): Deprecated. Specifies the ordinal weekday unit.
- [NSQuarterCalendarUnit](unit/nsquartercalendarunit.md): Deprecated. Specifies the quarter unit.
- [NSWeekOfMonthCalendarUnit](unit/nsweekofmonthcalendarunit.md): Deprecated. Specifies the original week of a month calendar unit.
- [NSWeekOfYearCalendarUnit](unit/nsweekofyearcalendarunit.md): Deprecated. Specifies the original week of the year calendar unit.
- [NSYearForWeekOfYearCalendarUnit](unit/nsyearforweekofyearcalendarunit.md): Deprecated. Specifies the year when the calendar is being interpreted as a week-based calendar.
- [NSCalendarCalendarUnit](unit/nscalendarcalendarunit.md): Deprecated. Specifies the calendar of the calendar.
- [NSTimeZoneCalendarUnit](unit/nstimezonecalendarunit.md): Deprecated. Specifies the time zone of the calendar as an `NSTimeZone`.

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

### Getting Calendar Information

- [calendarIdentifier](calendaridentifier.md): An identifier for the calendar.
- [firstWeekday](firstweekday.md): The index of the first weekday of the receiver.
- [locale](locale.md): The locale of the receiver.
- [timeZone](timezone.md): The time zone for the calendar.
- [maximumRange(of:)](maximumrange%28of_%29.md): Returns the maximum range limits of the values that a given unit can take on.
- [minimumRange(of:)](minimumrange%28of_%29.md): Returns the minimum range limits of the values that a given unit can take on.
- [minimumDaysInFirstWeek](minimumdaysinfirstweek.md): The minimum number of days in the first week of the receiver.
- [ordinality(of:in:for:)](ordinality%28of_in_for_%29.md): Returns, for a given absolute time, the ordinal number of a smaller calendar unit (such as a day) within a specified larger calendar unit (such as a week).
- [range(of:in:for:)](range%28of_in_for_%29.md): Returns the range of absolute time values that a smaller calendar unit (such as a day) can take on in a larger calendar unit (such as a month) that includes a specified absolute time.
- [range(of:start:interval:for:)](range%28of_start_interval_for_%29.md): Returns by reference the starting time and duration of a given calendar unit that contains a given date.
- [range(ofWeekendStart:interval:containing:)](range%28ofweekendstart_interval_containing_%29.md): Returns whether a given date falls within a weekend period, and if so, returns by reference the start date and time interval of the weekend range.

# NSCalendarUnit (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Calendrical units such as year, month, day and hour.

## Declaration

```objectivec
enum NSCalendarUnit : NSUInteger;
```

<a id="overview"></a>

## Overview

Calendar units may be used as a bit mask to specify a combination of units. Values in this enumeration are equal to the corresponding constants in `CFCalendarUnit`.

## Topics

### Specifying Years and Months

- [NSCalendarUnitEra](unit/era.md): Identifier for the era unit.
- [NSCalendarUnitYear](unit/year.md): Identifier for the year unit.
- [NSCalendarUnitYearForWeekOfYear](unit/yearforweekofyear.md): Identifier for the week-counting year unit.
- [NSCalendarUnitQuarter](unit/quarter.md): Identifier for the quarter of the calendar.
- [NSCalendarUnitMonth](unit/month.md): Identifier for the month unit.
- [NSCalendarUnitIsLeapMonth](unit/isleapmonth.md): Identifier for the time zone of a date components object.

### Specifying Weeks and Days

- [NSCalendarUnitWeekOfYear](unit/weekofyear.md): Identifier for the week of the year calendar unit.
- [NSCalendarUnitWeekOfMonth](unit/weekofmonth.md): Identifier for the week of the month calendar unit.
- [NSCalendarUnitWeekday](unit/weekday.md): Identifier for the weekday unit.
- [NSCalendarUnitWeekdayOrdinal](unit/weekdayordinal.md): Identifier for the ordinal weekday unit.
- [NSCalendarUnitDay](unit/day.md): Identifier for the day unit.
- [NSCalendarUnitDayOfYear](unit/dayofyear.md): Identifier for the nanosecond unit.
- [NSCalendarUnitIsRepeatedDay](unit/isrepeatedday.md): Identifier for the time zone of a date components object.

### Specifying Hours, Minutes, and Seconds

- [NSCalendarUnitHour](unit/hour.md): Identifier for the hour unit.
- [NSCalendarUnitMinute](unit/minute.md): Identifier for the minute unit.
- [NSCalendarUnitSecond](unit/second.md): Identifier for the second unit.
- [NSCalendarUnitNanosecond](unit/nanosecond.md): Identifier for the nanosecond unit.

### Specifying Calendars and Time Zones

- [NSCalendarUnitCalendar](unit/calendar.md): Identifier for the calendar of a date components object.
- [NSCalendarUnitTimeZone](unit/timezone.md): Identifier for the time zone of a date components object.

### Deprecated

- [NSEraCalendarUnit](unit/nseracalendarunit.md): Deprecated. Specifies the era unit.
- [NSYearCalendarUnit](unit/nsyearcalendarunit.md): Deprecated. Specifies the year unit.
- [NSMonthCalendarUnit](unit/nsmonthcalendarunit.md): Deprecated. Specifies the month unit.
- [NSDayCalendarUnit](unit/nsdaycalendarunit.md): Deprecated. Specifies the day unit.
- [NSHourCalendarUnit](unit/nshourcalendarunit.md): Deprecated. Specifies the hour unit.
- [NSMinuteCalendarUnit](unit/nsminutecalendarunit.md): Deprecated. Specifies the minute unit.
- [NSSecondCalendarUnit](unit/nssecondcalendarunit.md): Deprecated. Specifies the second unit.
- [NSWeekCalendarUnit](unit/nsweekcalendarunit.md): Deprecated. Specifies the week unit.
- [NSWeekdayCalendarUnit](unit/nsweekdaycalendarunit.md): Deprecated. Specifies the weekday unit.
- [NSWeekdayOrdinalCalendarUnit](unit/nsweekdayordinalcalendarunit.md): Deprecated. Specifies the ordinal weekday unit.
- [NSQuarterCalendarUnit](unit/nsquartercalendarunit.md): Deprecated. Specifies the quarter unit.
- [NSWeekOfMonthCalendarUnit](unit/nsweekofmonthcalendarunit.md): Deprecated. Specifies the original week of a month calendar unit.
- [NSWeekOfYearCalendarUnit](unit/nsweekofyearcalendarunit.md): Deprecated. Specifies the original week of the year calendar unit.
- [NSYearForWeekOfYearCalendarUnit](unit/nsyearforweekofyearcalendarunit.md): Deprecated. Specifies the year when the calendar is being interpreted as a week-based calendar.
- [NSCalendarCalendarUnit](unit/nscalendarcalendarunit.md): Deprecated. Specifies the calendar of the calendar.
- [NSTimeZoneCalendarUnit](unit/nstimezonecalendarunit.md): Deprecated. Specifies the time zone of the calendar as an `NSTimeZone`.
- [NSEraCalendarUnit](unit/nseracalendarunit.md): Deprecated. Specifies the era unit.
- [NSYearCalendarUnit](unit/nsyearcalendarunit.md): Deprecated. Specifies the year unit.
- [NSMonthCalendarUnit](unit/nsmonthcalendarunit.md): Deprecated. Specifies the month unit.
- [NSDayCalendarUnit](unit/nsdaycalendarunit.md): Deprecated. Specifies the day unit.
- [NSHourCalendarUnit](unit/nshourcalendarunit.md): Deprecated. Specifies the hour unit.
- [NSMinuteCalendarUnit](unit/nsminutecalendarunit.md): Deprecated. Specifies the minute unit.
- [NSSecondCalendarUnit](unit/nssecondcalendarunit.md): Deprecated. Specifies the second unit.
- [NSWeekCalendarUnit](unit/nsweekcalendarunit.md): Deprecated. Specifies the week unit.
- [NSWeekdayCalendarUnit](unit/nsweekdaycalendarunit.md): Deprecated. Specifies the weekday unit.
- [NSWeekdayOrdinalCalendarUnit](unit/nsweekdayordinalcalendarunit.md): Deprecated. Specifies the ordinal weekday unit.
- [NSQuarterCalendarUnit](unit/nsquartercalendarunit.md): Deprecated. Specifies the quarter unit.
- [NSWeekOfMonthCalendarUnit](unit/nsweekofmonthcalendarunit.md): Deprecated. Specifies the original week of a month calendar unit.
- [NSWeekOfYearCalendarUnit](unit/nsweekofyearcalendarunit.md): Deprecated. Specifies the original week of the year calendar unit.
- [NSYearForWeekOfYearCalendarUnit](unit/nsyearforweekofyearcalendarunit.md): Deprecated. Specifies the year when the calendar is being interpreted as a week-based calendar.
- [NSCalendarCalendarUnit](unit/nscalendarcalendarunit.md): Deprecated. Specifies the calendar of the calendar.
- [NSTimeZoneCalendarUnit](unit/nstimezonecalendarunit.md): Deprecated. Specifies the time zone of the calendar as an `NSTimeZone`.

## See Also

### Getting Calendar Information

- [calendarIdentifier](calendaridentifier.md): An identifier for the calendar.
- [firstWeekday](firstweekday.md): The index of the first weekday of the receiver.
- [locale](locale.md): The locale of the receiver.
- [timeZone](timezone.md): The time zone for the calendar.
- [maximumRangeOfUnit:](maximumrange%28of_%29.md): Returns the maximum range limits of the values that a given unit can take on.
- [minimumRangeOfUnit:](minimumrange%28of_%29.md): Returns the minimum range limits of the values that a given unit can take on.
- [minimumDaysInFirstWeek](minimumdaysinfirstweek.md): The minimum number of days in the first week of the receiver.
- [ordinalityOfUnit:inUnit:forDate:](ordinality%28of_in_for_%29.md): Returns, for a given absolute time, the ordinal number of a smaller calendar unit (such as a day) within a specified larger calendar unit (such as a week).
- [rangeOfUnit:inUnit:forDate:](range%28of_in_for_%29.md): Returns the range of absolute time values that a smaller calendar unit (such as a day) can take on in a larger calendar unit (such as a month) that includes a specified absolute time.
- [rangeOfUnit:startDate:interval:forDate:](range%28of_start_interval_for_%29.md): Returns by reference the starting time and duration of a given calendar unit that contains a given date.
- [rangeOfWeekendStartDate:interval:containingDate:](range%28ofweekendstart_interval_containing_%29.md): Returns whether a given date falls within a weekend period, and if so, returns by reference the start date and time interval of the weekend range.
