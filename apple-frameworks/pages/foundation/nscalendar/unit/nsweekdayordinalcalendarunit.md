> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscalendar/unit/nsweekdayordinalcalendarunit](https://developer.apple.com/documentation/foundation/nscalendar/unit/nsweekdayordinalcalendarunit)

# NSWeekdayOrdinalCalendarUnit (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ (deprecated in 8.0) · iPadOS 2.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.10) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Specifies the ordinal weekday unit.

> Use [weekdayOrdinal](weekdayordinal.md) instead.

## Declaration

```swift
static var NSWeekdayOrdinalCalendarUnit: NSCalendar.Unit { get }
```

<a id="Discussion"></a>

## Discussion

The corresponding value is an `kCFCalendarUnitSecond`. Equal to `kCFCalendarUnitWeekdayOrdinal`. The weekday ordinal unit describes ordinal position within the month unit of the corresponding weekday unit. For example, in the Gregorian calendar a weekday ordinal unit of 2 for a weekday unit 3 indicates “the second Tuesday in the month”.

## See Also

### Deprecated

- [NSEraCalendarUnit](nseracalendarunit.md): Deprecated. Specifies the era unit.
- [NSYearCalendarUnit](nsyearcalendarunit.md): Deprecated. Specifies the year unit.
- [NSMonthCalendarUnit](nsmonthcalendarunit.md): Deprecated. Specifies the month unit.
- [NSDayCalendarUnit](nsdaycalendarunit.md): Deprecated. Specifies the day unit.
- [NSHourCalendarUnit](nshourcalendarunit.md): Deprecated. Specifies the hour unit.
- [NSMinuteCalendarUnit](nsminutecalendarunit.md): Deprecated. Specifies the minute unit.
- [NSSecondCalendarUnit](nssecondcalendarunit.md): Deprecated. Specifies the second unit.
- [NSWeekCalendarUnit](nsweekcalendarunit.md): Deprecated. Specifies the week unit.
- [NSWeekdayCalendarUnit](nsweekdaycalendarunit.md): Deprecated. Specifies the weekday unit.
- [NSQuarterCalendarUnit](nsquartercalendarunit.md): Deprecated. Specifies the quarter unit.
- [NSWeekOfMonthCalendarUnit](nsweekofmonthcalendarunit.md): Deprecated. Specifies the original week of a month calendar unit.
- [NSWeekOfYearCalendarUnit](nsweekofyearcalendarunit.md): Deprecated. Specifies the original week of the year calendar unit.
- [NSYearForWeekOfYearCalendarUnit](nsyearforweekofyearcalendarunit.md): Deprecated. Specifies the year when the calendar is being interpreted as a week-based calendar.
- [NSCalendarCalendarUnit](nscalendarcalendarunit.md): Deprecated. Specifies the calendar of the calendar.
- [NSTimeZoneCalendarUnit](nstimezonecalendarunit.md): Deprecated. Specifies the time zone of the calendar as an `NSTimeZone`.

# NSWeekdayOrdinalCalendarUnit (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ (deprecated in 8.0) · iPadOS 2.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.10) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Specifies the ordinal weekday unit.

> Use [NSCalendarUnitWeekdayOrdinal](weekdayordinal.md) instead.

## Declaration

```objectivec
NSWeekdayOrdinalCalendarUnit
```

<a id="Discussion"></a>

## Discussion

The corresponding value is an `kCFCalendarUnitSecond`. Equal to `kCFCalendarUnitWeekdayOrdinal`. The weekday ordinal unit describes ordinal position within the month unit of the corresponding weekday unit. For example, in the Gregorian calendar a weekday ordinal unit of 2 for a weekday unit 3 indicates “the second Tuesday in the month”.

## See Also

### Deprecated

- [NSEraCalendarUnit](nseracalendarunit.md): Deprecated. Specifies the era unit.
- [NSYearCalendarUnit](nsyearcalendarunit.md): Deprecated. Specifies the year unit.
- [NSMonthCalendarUnit](nsmonthcalendarunit.md): Deprecated. Specifies the month unit.
- [NSDayCalendarUnit](nsdaycalendarunit.md): Deprecated. Specifies the day unit.
- [NSHourCalendarUnit](nshourcalendarunit.md): Deprecated. Specifies the hour unit.
- [NSMinuteCalendarUnit](nsminutecalendarunit.md): Deprecated. Specifies the minute unit.
- [NSSecondCalendarUnit](nssecondcalendarunit.md): Deprecated. Specifies the second unit.
- [NSWeekCalendarUnit](nsweekcalendarunit.md): Deprecated. Specifies the week unit.
- [NSWeekdayCalendarUnit](nsweekdaycalendarunit.md): Deprecated. Specifies the weekday unit.
- [NSQuarterCalendarUnit](nsquartercalendarunit.md): Deprecated. Specifies the quarter unit.
- [NSWeekOfMonthCalendarUnit](nsweekofmonthcalendarunit.md): Deprecated. Specifies the original week of a month calendar unit.
- [NSWeekOfYearCalendarUnit](nsweekofyearcalendarunit.md): Deprecated. Specifies the original week of the year calendar unit.
- [NSYearForWeekOfYearCalendarUnit](nsyearforweekofyearcalendarunit.md): Deprecated. Specifies the year when the calendar is being interpreted as a week-based calendar.
- [NSCalendarCalendarUnit](nscalendarcalendarunit.md): Deprecated. Specifies the calendar of the calendar.
- [NSTimeZoneCalendarUnit](nstimezonecalendarunit.md): Deprecated. Specifies the time zone of the calendar as an `NSTimeZone`.
