> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscalendar/unit/weekdayordinal](https://developer.apple.com/documentation/foundation/nscalendar/unit/weekdayordinal)

# weekdayOrdinal (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Identifier for the ordinal weekday unit.

## Declaration

```swift
static var weekdayOrdinal: NSCalendar.Unit { get }
```

<a id="Discussion"></a>

## Discussion

The corresponding value is an `NSInteger`. Equal to `kCFCalendarUnitWeekdayOrdinal`. The weekday ordinal unit describes ordinal position within the month unit of the corresponding weekday unit. For example, in the Gregorian calendar a weekday ordinal unit of `2` for a weekday unit `3` indicates “the second Tuesday in the month”.

## See Also

### Specifying Weeks and Days

- [weekOfYear](weekofyear.md): Identifier for the week of the year calendar unit.
- [weekOfMonth](weekofmonth.md): Identifier for the week of the month calendar unit.
- [weekday](weekday.md): Identifier for the weekday unit.
- [day](day.md): Identifier for the day unit.
- [dayOfYear](dayofyear.md): Identifier for the nanosecond unit.
- [isRepeatedDay](isrepeatedday.md): Identifier for the time zone of a date components object.

# NSCalendarUnitWeekdayOrdinal (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Identifier for the ordinal weekday unit.

## Declaration

```objectivec
NSCalendarUnitWeekdayOrdinal
```

<a id="Discussion"></a>

## Discussion

The corresponding value is an `NSInteger`. Equal to `kCFCalendarUnitWeekdayOrdinal`. The weekday ordinal unit describes ordinal position within the month unit of the corresponding weekday unit. For example, in the Gregorian calendar a weekday ordinal unit of `2` for a weekday unit `3` indicates “the second Tuesday in the month”.

## See Also

### Specifying Weeks and Days

- [NSCalendarUnitWeekOfYear](weekofyear.md): Identifier for the week of the year calendar unit.
- [NSCalendarUnitWeekOfMonth](weekofmonth.md): Identifier for the week of the month calendar unit.
- [NSCalendarUnitWeekday](weekday.md): Identifier for the weekday unit.
- [NSCalendarUnitDay](day.md): Identifier for the day unit.
- [NSCalendarUnitDayOfYear](dayofyear.md): Identifier for the nanosecond unit.
- [NSCalendarUnitIsRepeatedDay](isrepeatedday.md): Identifier for the time zone of a date components object.
