> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscalendar/unit/nsquartercalendarunit](https://developer.apple.com/documentation/foundation/nscalendar/unit/nsquartercalendarunit)

# NSQuarterCalendarUnit (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 4.0+ (deprecated in 8.0) · iPadOS 4.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.6+ (deprecated in 10.10) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Specifies the quarter unit.

> Use [quarter](quarter.md) instead.

## Declaration

```swift
static var NSQuarterCalendarUnit: NSCalendar.Unit { get }
```

<a id="discussion"></a>

## Discussion

In macOS 10.6 and earlier this was defined as equal to [quarter](../../../corefoundation/cfcalendarunit/quarter.md). In macOS 10.7 and later it is defined as `(1 << 20)`.

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
- [NSWeekdayOrdinalCalendarUnit](nsweekdayordinalcalendarunit.md): Deprecated. Specifies the ordinal weekday unit.
- [NSWeekOfMonthCalendarUnit](nsweekofmonthcalendarunit.md): Deprecated. Specifies the original week of a month calendar unit.
- [NSWeekOfYearCalendarUnit](nsweekofyearcalendarunit.md): Deprecated. Specifies the original week of the year calendar unit.
- [NSYearForWeekOfYearCalendarUnit](nsyearforweekofyearcalendarunit.md): Deprecated. Specifies the year when the calendar is being interpreted as a week-based calendar.
- [NSCalendarCalendarUnit](nscalendarcalendarunit.md): Deprecated. Specifies the calendar of the calendar.
- [NSTimeZoneCalendarUnit](nstimezonecalendarunit.md): Deprecated. Specifies the time zone of the calendar as an `NSTimeZone`.

# NSQuarterCalendarUnit (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 4.0+ (deprecated in 8.0) · iPadOS 4.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.6+ (deprecated in 10.10) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Specifies the quarter unit.

> Use [NSCalendarUnitQuarter](quarter.md) instead.

## Declaration

```objectivec
NSQuarterCalendarUnit
```

<a id="discussion"></a>

## Discussion

In macOS 10.6 and earlier this was defined as equal to [kCFCalendarUnitQuarter](../../../corefoundation/cfcalendarunit/quarter.md). In macOS 10.7 and later it is defined as `(1 << 20)`.

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
- [NSWeekdayOrdinalCalendarUnit](nsweekdayordinalcalendarunit.md): Deprecated. Specifies the ordinal weekday unit.
- [NSWeekOfMonthCalendarUnit](nsweekofmonthcalendarunit.md): Deprecated. Specifies the original week of a month calendar unit.
- [NSWeekOfYearCalendarUnit](nsweekofyearcalendarunit.md): Deprecated. Specifies the original week of the year calendar unit.
- [NSYearForWeekOfYearCalendarUnit](nsyearforweekofyearcalendarunit.md): Deprecated. Specifies the year when the calendar is being interpreted as a week-based calendar.
- [NSCalendarCalendarUnit](nscalendarcalendarunit.md): Deprecated. Specifies the calendar of the calendar.
- [NSTimeZoneCalendarUnit](nstimezonecalendarunit.md): Deprecated. Specifies the time zone of the calendar as an `NSTimeZone`.
