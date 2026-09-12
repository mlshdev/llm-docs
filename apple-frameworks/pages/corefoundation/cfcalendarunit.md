> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfcalendarunit](https://developer.apple.com/documentation/corefoundation/cfcalendarunit)

# CFCalendarUnit (Swift)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

CFCalendarUnit constants are used to specify calendrical units, such as day or month, in various calendar calculations.

## Declaration

```swift
struct CFCalendarUnit
```

## Topics

### Constants

- [era](cfcalendarunit/era.md): Specifies the era unit.
- [year](cfcalendarunit/year.md): Specifies the year unit.
- [month](cfcalendarunit/month.md): Specifies the month unit.
- [day](cfcalendarunit/day.md): Specifies the day unit.
- [hour](cfcalendarunit/hour.md): Specifies the hour unit.
- [minute](cfcalendarunit/minute.md): Specifies the minute unit.
- [second](cfcalendarunit/second.md): Specifies the second unit.
- [week](cfcalendarunit/week.md): Deprecated. Specifies the week unit.
- [weekday](cfcalendarunit/weekday.md): Specifies the weekday unit.
- [weekdayOrdinal](cfcalendarunit/weekdayordinal.md): Specifies the ordinal weekday unit.
- [quarter](cfcalendarunit/quarter.md): Specifies the quarter-year unit.
- [weekOfMonth](cfcalendarunit/weekofmonth.md): Specifies the original week of a month calendar unit.
- [weekOfYear](cfcalendarunit/weekofyear.md): Specifies the original week of the year calendar unit.
- [yearForWeekOfYear](cfcalendarunit/yearforweekofyear.md): Specifies the relative year for a week within a year calendar unit.

### Initializers

- [init(rawValue:)](cfcalendarunit/init%28rawvalue_%29.md)

### Type Properties

- [dayOfYear](cfcalendarunit/dayofyear.md)

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

### Constants

- [Component Wrapping Options](1533520-component-wrapping-options.md): The wrapping option specifies overflow behavior for calendar components in calendrical calculations

# CFCalendarUnit (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

CFCalendarUnit constants are used to specify calendrical units, such as day or month, in various calendar calculations.

## Declaration

```objectivec
enum CFCalendarUnit : CFOptionFlags;
```

## Topics

### Constants

- [kCFCalendarUnitEra](cfcalendarunit/era.md): Specifies the era unit.
- [kCFCalendarUnitYear](cfcalendarunit/year.md): Specifies the year unit.
- [kCFCalendarUnitMonth](cfcalendarunit/month.md): Specifies the month unit.
- [kCFCalendarUnitDay](cfcalendarunit/day.md): Specifies the day unit.
- [kCFCalendarUnitHour](cfcalendarunit/hour.md): Specifies the hour unit.
- [kCFCalendarUnitMinute](cfcalendarunit/minute.md): Specifies the minute unit.
- [kCFCalendarUnitSecond](cfcalendarunit/second.md): Specifies the second unit.
- [kCFCalendarUnitWeek](cfcalendarunit/week.md): Deprecated. Specifies the week unit.
- [kCFCalendarUnitWeekday](cfcalendarunit/weekday.md): Specifies the weekday unit.
- [kCFCalendarUnitWeekdayOrdinal](cfcalendarunit/weekdayordinal.md): Specifies the ordinal weekday unit.
- [kCFCalendarUnitQuarter](cfcalendarunit/quarter.md): Specifies the quarter-year unit.
- [kCFCalendarUnitWeekOfMonth](cfcalendarunit/weekofmonth.md): Specifies the original week of a month calendar unit.
- [kCFCalendarUnitWeekOfYear](cfcalendarunit/weekofyear.md): Specifies the original week of the year calendar unit.
- [kCFCalendarUnitYearForWeekOfYear](cfcalendarunit/yearforweekofyear.md): Specifies the relative year for a week within a year calendar unit.

### Enumeration Cases

- [kCFCalendarUnitDayOfYear](cfcalendarunit/dayofyear.md)

## See Also

### Constants

- [Component Wrapping Options](1533520-component-wrapping-options.md): The wrapping option specifies overflow behavior for calendar components in calendrical calculations
