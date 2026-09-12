> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/datecomponents](https://developer.apple.com/documentation/foundation/datecomponents)

# DateComponents

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A date or time specified in terms of units (such as year, month, day, hour, and minute) to be evaluated in a calendar system and time zone.

## Declaration

```swift
struct DateComponents
```

<a id="overview"></a>

## Overview

`DateComponents` encapsulates the components of a date in an extendable, structured manner.

It is used to specify a date by providing the temporal components that make up a date and time in a particular calendar: hour, minutes, seconds, day, month, year, and so on. It can also be used to specify a duration of time, for example, 5 hours and 16 minutes. A `DateComponents` is not required to define all the component fields.

When a new instance of `DateComponents` is created, the date components are set to `nil`.

## Topics

### Initializing Date Components

- [init(calendar:timeZone:era:year:month:day:hour:minute:second:nanosecond:weekday:weekdayOrdinal:quarter:weekOfMonth:weekOfYear:yearForWeekOfYear:)](datecomponents/init%28calendar_timezone_era_year_month_day_hour_minute_second_nanosecond_weekday_weekdayordinal_quarter_weekofmonth_weekofyear_yearforweekofyear_%29.md): Initializes a date components value, optionally specifying values for its fields.
- [calendar](datecomponents/calendar.md): The calendar used to interpret the other values in this structure.
- [timeZone](datecomponents/timezone.md): A time zone.

### Validating a Date

- [isValidDate](datecomponents/isvaliddate.md): Indicates whether the current combination of properties represents a date which exists in the current calendar.
- [isValidDate(in:)](datecomponents/isvaliddate%28in_%29.md): Indicates whether the current combination of properties represents a date which exists in the specified calendar.
- [date](datecomponents/date.md): The date calculated from the current components using the stored calendar.

### Accessing Months and Years

- [era](datecomponents/era.md): An era or count of eras.
- [year](datecomponents/year.md): A year or count of years.
- [yearForWeekOfYear](datecomponents/yearforweekofyear.md): The year corresponding to a week-counting week.
- [quarter](datecomponents/quarter.md): A quarter or count of quarters.
- [month](datecomponents/month.md): A month or count of months.
- [isLeapMonth](datecomponents/isleapmonth.md): Set to true if these components represent a leap month.

### Accessing Weeks and Days

- [weekOfMonth](datecomponents/weekofmonth.md): A week of the month or a count of weeks of the month.
- [weekOfYear](datecomponents/weekofyear.md): A week of the year or count of the weeks of the year.
- [weekday](datecomponents/weekday.md): A weekday or count of weekdays.
- [weekdayOrdinal](datecomponents/weekdayordinal.md): A weekday ordinal or count of weekday ordinals.
- [day](datecomponents/day.md): A day or count of days.

### Accessing Hours and Seconds

- [hour](datecomponents/hour.md): An hour or count of hours.
- [minute](datecomponents/minute.md): A minute or count of minutes.
- [second](datecomponents/second.md): A second or count of seconds.
- [nanosecond](datecomponents/nanosecond.md): A nanosecond or count of nanoseconds.

### Accessing Calendar Components

- [value(for:)](datecomponents/value%28for_%29.md): Returns the value of one of the properties, using an enumeration value instead of a property name.
- [setValue(\_:for:)](datecomponents/setvalue%28__for_%29.md): Set the value of one of the properties, using an enumeration value instead of a property name.
- [Calendar.Component](calendar/component.md): An enumeration for the various components of a calendar date.

### Using Reference Types

- [NSDateComponents](nsdatecomponents.md): An object that specifies a date or time in terms of units (such as year, month, day, hour, and minute) to be evaluated in a calendar system and time zone.

### Structures

- [DateComponents.HTTPFormatStyle](datecomponents/httpformatstyle.md): Converts `DateComponents` into RFC 9110-compatible “HTTP date” `String`, and parses in the reverse direction. This parser does not do validation on the individual values of the components. An optional date can be created from the result using `Calendar(identifier: .gregorian).date(from: ...)`. When formatting, missing or invalid fields are filled with default values: `Sun`, `01`, `Jan`, `2000`, `00:00:00`, `GMT`. Note that missing fields may result in an invalid date or time. Other values in the `DateComponents` are ignored.
- [DateComponents.ISO8601FormatStyle](datecomponents/iso8601formatstyle.md): Options for generating and parsing string representations of dates following the ISO 8601 standard.

### Initializers

- [init(\_:strategy:)](datecomponents/init%28__strategy_%29-62hv8.md): Creates a new `DateComponents` by parsing the given string representation.
- [init(\_:strategy:)](datecomponents/init%28__strategy_%29-84m93.md): Creates a new `DateComponents` by parsing the given representation.
- [init(subscriptionPeriod:)](datecomponents/init%28subscriptionperiod_%29.md)

### Instance Properties

- [dayOfYear](datecomponents/dayofyear.md): A day of the year. For example, in the Gregorian calendar, can go from 1 to 365 or 1 to 366 in leap years.
- [isRepeatedDay](datecomponents/isrepeatedday.md): Set to true if these components represent a repeated day.

### Instance Methods

- [formatted(\_:)](datecomponents/formatted%28__%29.md): Converts `self` to its textual representation.

### Type Aliases

- [DateComponents.Specification](datecomponents/specification.md)
- [DateComponents.UnwrappedType](datecomponents/unwrappedtype.md)
- [DateComponents.ValueType](datecomponents/valuetype.md)

### Type Properties

- [defaultResolverSpecification](datecomponents/defaultresolverspecification.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomReflectable](https://developer.apple.com/documentation/swift/customreflectable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [IntentValueConvertible](../appintents/intentvalueconvertible.md)
- [IntentValueExpressing](../appintents/intentvalueexpressing.md)
- [ReferenceConvertible](referenceconvertible.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Calendrical Calculations

- [Calendar](calendar.md): A definition of the relationships between calendar units and absolute points in time, providing features for calculation and comparison of dates.
- [TimeZone](timezone.md): Information about standard time conventions associated with a specific geopolitical region.
