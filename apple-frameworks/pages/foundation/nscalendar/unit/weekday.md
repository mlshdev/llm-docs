> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscalendar/unit/weekday](https://developer.apple.com/documentation/foundation/nscalendar/unit/weekday)

# weekday (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Identifier for the weekday unit.

## Declaration

```swift
static var weekday: NSCalendar.Unit { get }
```

<a id="Discussion"></a>

## Discussion

The corresponding value is an `NSInteger`. Equal to `kCFCalendarUnitWeekday`. The weekday units are the numbers `1` through `N` (where for the Gregorian calendar `N`=`7` and `1` is Sunday).

## See Also

### Specifying Weeks and Days

- [weekOfYear](weekofyear.md): Identifier for the week of the year calendar unit.
- [weekOfMonth](weekofmonth.md): Identifier for the week of the month calendar unit.
- [weekdayOrdinal](weekdayordinal.md): Identifier for the ordinal weekday unit.
- [day](day.md): Identifier for the day unit.
- [dayOfYear](dayofyear.md): Identifier for the nanosecond unit.
- [isRepeatedDay](isrepeatedday.md): Identifier for the time zone of a date components object.

# NSCalendarUnitWeekday (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Identifier for the weekday unit.

## Declaration

```objectivec
NSCalendarUnitWeekday
```

<a id="Discussion"></a>

## Discussion

The corresponding value is an `NSInteger`. Equal to `kCFCalendarUnitWeekday`. The weekday units are the numbers `1` through `N` (where for the Gregorian calendar `N`=`7` and `1` is Sunday).

## See Also

### Specifying Weeks and Days

- [NSCalendarUnitWeekOfYear](weekofyear.md): Identifier for the week of the year calendar unit.
- [NSCalendarUnitWeekOfMonth](weekofmonth.md): Identifier for the week of the month calendar unit.
- [NSCalendarUnitWeekdayOrdinal](weekdayordinal.md): Identifier for the ordinal weekday unit.
- [NSCalendarUnitDay](day.md): Identifier for the day unit.
- [NSCalendarUnitDayOfYear](dayofyear.md): Identifier for the nanosecond unit.
- [NSCalendarUnitIsRepeatedDay](isrepeatedday.md): Identifier for the time zone of a date components object.
