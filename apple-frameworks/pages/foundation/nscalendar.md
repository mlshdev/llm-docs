> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscalendar](https://developer.apple.com/documentation/foundation/nscalendar)

# NSCalendar (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A definition of the relationships between calendar units and absolute points in time, providing features for calculation and comparison of dates.

## Declaration

```swift
class NSCalendar
```

<a id="overview"></a>

## Overview

In Swift, this object bridges to [Calendar](calendar.md); use [NSCalendar](nscalendar.md) when you need reference semantics or other Foundation-specific behavior.

[NSCalendar](nscalendar.md) objects encapsulate information about systems of reckoning time in which the beginning, length, and divisions of a year are defined. They provide information about the calendar and support for calendrical computations such as determining the range of a given calendrical unit and adding units to a given absolute time.

[NSCalendar](nscalendar.md) is *toll-free bridged* with its Core Foundation counterpart, [CFCalendar](../corefoundation/cfcalendar.md). See [Toll-Free Bridging](https://developer.apple.com/library/archive/documentation/General/Conceptual/CocoaEncyclopedia/Toll-FreeBridgin/Toll-FreeBridgin.html#//apple_ref/doc/uid/TP40010810-CH2) for more information on toll-free bridging.

> **Important**

>  The Swift overlay to the Foundation framework provides the [Calendar](calendar.md) structure, which bridges to the [NSCalendar](nscalendar.md) class. For more information about value types, see [Working with Foundation Types](https://developer.apple.com/documentation/swift/working-with-foundation-types).

<a id="Locales-and-Calendars"></a>

### Locales and Calendars

Most locales use the most widely used civil calendar, called the *Gregorian calendar* ([gregorian](nscalendar/identifier/gregorian.md)), but there remain exceptions to this trend. For example:

- In Saudi Arabia, some locales use primarily the Islamic Umm al-Qura calendar ([islamicUmmAlQura](nscalendar/identifier/islamicummalqura.md)).
- In Ethiopia, some locales use primarily the Ethiopian calendar ([ethiopicAmeteMihret](nscalendar/identifier/ethiopicametemihret.md) or [ethiopicAmeteAlem](nscalendar/identifier/ethiopicametealem.md)).
- In Iran and Afghanistan, some locales use primarily the Persian calendar ([persian](nscalendar/identifier/persian.md)).
- In Thailand, some locales use primarily the Buddhist calendar ([buddhist](nscalendar/identifier/buddhist.md)).

Other locales use another calendar alongside the Gregorian calendar. For example:

- India also uses the Indian national calendar ([indian](nscalendar/identifier/indian.md)).
- Israel also uses the Hebrew calendar ([hebrew](nscalendar/identifier/hebrew.md)).
- China mainland and other regions also use the Chinese calendar ([chinese](nscalendar/identifier/chinese.md)), primarily to calculate astronomical date and Chinese traditional holidays.
- Japan also uses the Japanese calendar ([japanese](nscalendar/identifier/japanese.md)), primarily to add year names.

Independent of any particular locale, certain calendars are used primarily to calculate dates for religious observances. Among these are the Buddhist ([buddhist](nscalendar/identifier/buddhist.md)), Coptic ([coptic](nscalendar/identifier/coptic.md)), Hebrew ([hebrew](nscalendar/identifier/hebrew.md)), and Islamic ([islamic](nscalendar/identifier/islamic.md)) calendars.

<a id="How-NSCalendar-Models-the-Gregorian-Calendar"></a>

### How NSCalendar Models the Gregorian Calendar

The Gregorian calendar was first introduced in 1582, as a replacement for the Julian Calendar. According to the Julian calendar, a leap day is added to February for any year with a number divisible by 4, which results in an annual disparity of 11 minutes, or 1 day every 128 years. The Gregorian calendar revised the rules for leap day calculation, by skipping the leap day for any year with a number divisible by 100, unless that year number is also divisible by 400, resulting in an annual disparity of only 26 seconds, or 1 day every 3323 years.

To transition from the Julian calendar to the Gregorian calendar, 10 days were dropped from the Gregorian calendar (October 5–14).

After the Gregorian calendar was introduced, many regions continued to use the Julian calendar, with Turkey being the last country or region to adopt the Gregorian calendar, in 1926. As a result of the staggered adoption, the transition period for regions at the time of adoption have different start dates and a different number of skipped days to account for the additional disparity from leap day calculations.

[NSCalendar](nscalendar.md) models the behavior of a *proleptic* Gregorian calendar (*as defined by ISO 8601:2004*), which extends the Gregorian calendar backward in time from the date of its introduction. This behavior should be taken into account when working with dates created before the transition period of the affected locales.

<a id="Calendar-Arithmetic"></a>

### Calendar Arithmetic

To do calendar arithmetic, you use [NSDate](nsdate.md) objects in conjunction with a calendar. For example, to convert between a decomposed date in one calendar and another calendar, you must first convert the decomposed elements into a date using the first calendar, then decompose it using the second. [NSDate](nsdate.md) provides the absolute scale and epoch (reference point) for dates and times, which can then be rendered into a particular calendar, for calendrical computations or user display.

Two [NSCalendar](nscalendar.md) methods that return a date object, [date(from:)](nscalendar/date%28from_%29.md), [date(byAdding:to:options:)](nscalendar/date%28byadding_to_options_%29.md), take as a parameter an [NSDateComponents](nsdatecomponents.md) object that describes the calendrical components required for the computation. You can provide as many components as you need (or choose to). When there is incomplete information to compute an absolute time, default values similar to `0` and `1` are usually chosen by a calendar, but this is a calendar-specific choice. If you provide inconsistent information, calendar-specific disambiguation is performed (which may involve ignoring one or more of the parameters). Related methods ([components(\_:from:)](nscalendar/components%28__from_%29.md) and [components(\_:from:to:options:)](nscalendar/components%28__from_to_options_%29-84y5w.md)) take a bit mask parameter that specifies which components to calculate when returning an [NSDateComponents](nsdatecomponents.md) object. The bit mask is composed of [NSCalendar.Unit](nscalendar/unit.md) constants (see `Constants`).

In a calendar, day, week, weekday, month, and year numbers are generally 1-based, but there may be calendar-specific exceptions. Ordinal numbers, where they occur, are 1-based. Some calendars represented by this API may have to map their basic unit concepts into year/month/week/day/… nomenclature. For example, a calendar composed of 4 quarters in a year instead of 12 months uses the month unit to represent quarters. The particular values of the unit are defined by each calendar, and are not necessarily consistent with values for that unit in another calendar.

## Topics

### Creating and Initializing Calendars

- [init(identifier:)](nscalendar/init%28identifier_%29.md): Creates a new calendar specified by a given identifier.
- [init(calendarIdentifier:)](nscalendar/init%28calendaridentifier_%29.md): Initializes a calendar according to a given identifier.
- [NSCalendar.Identifier](nscalendar/identifier.md): The supported calendar types.

### Getting the User’s Calendar

- [current](nscalendar/current.md): The user’s current calendar.
- [autoupdatingCurrent](nscalendar/autoupdatingcurrent.md): A calendar that tracks changes to user’s preferred calendar.

### Extracting Components

- [date(\_:matchesComponents:)](nscalendar/date%28__matchescomponents_%29.md): Returns whether a given date matches all of the given date components.
- [component(\_:from:)](nscalendar/component%28__from_%29.md): Returns the specified date component from a given date.
- [components(\_:from:)](nscalendar/components%28__from_%29.md): Returns the date components representing a given date.
- [components(\_:from:to:options:)](nscalendar/components%28__from_to_options_%29-84y5w.md): Returns the difference between two supplied dates as date components.
- [components(\_:from:to:options:)](nscalendar/components%28__from_to_options_%29-49lo8.md): Returns the difference between start and end dates given as date components.
- [components(in:from:)](nscalendar/components%28in_from_%29.md): Returns all the date components of a date, as if in a given time zone (instead of the receiving calendar’s time zone).
- [getEra(\_:year:month:day:from:)](nscalendar/getera%28__year_month_day_from_%29.md): Returns by reference the era, year, week of year, and weekday component values for a given date.
- [getEra(\_:yearForWeekOfYear:weekOfYear:weekday:from:)](nscalendar/getera%28__yearforweekofyear_weekofyear_weekday_from_%29.md): Returns by reference the era, year, week of year, and weekday component values for a given date.
- [getHour(\_:minute:second:nanosecond:from:)](nscalendar/gethour%28__minute_second_nanosecond_from_%29.md): Returns by reference the hour, minute, second, and nanosecond component values for a given date.

### Getting Calendar Information

- [calendarIdentifier](nscalendar/calendaridentifier.md): An identifier for the calendar.
- [firstWeekday](nscalendar/firstweekday.md): The index of the first weekday of the receiver.
- [locale](nscalendar/locale.md): The locale of the receiver.
- [timeZone](nscalendar/timezone.md): The time zone for the calendar.
- [maximumRange(of:)](nscalendar/maximumrange%28of_%29.md): Returns the maximum range limits of the values that a given unit can take on.
- [minimumRange(of:)](nscalendar/minimumrange%28of_%29.md): Returns the minimum range limits of the values that a given unit can take on.
- [minimumDaysInFirstWeek](nscalendar/minimumdaysinfirstweek.md): The minimum number of days in the first week of the receiver.
- [ordinality(of:in:for:)](nscalendar/ordinality%28of_in_for_%29.md): Returns, for a given absolute time, the ordinal number of a smaller calendar unit (such as a day) within a specified larger calendar unit (such as a week).
- [range(of:in:for:)](nscalendar/range%28of_in_for_%29.md): Returns the range of absolute time values that a smaller calendar unit (such as a day) can take on in a larger calendar unit (such as a month) that includes a specified absolute time.
- [range(of:start:interval:for:)](nscalendar/range%28of_start_interval_for_%29.md): Returns by reference the starting time and duration of a given calendar unit that contains a given date.
- [range(ofWeekendStart:interval:containing:)](nscalendar/range%28ofweekendstart_interval_containing_%29.md): Returns whether a given date falls within a weekend period, and if so, returns by reference the start date and time interval of the weekend range.
- [NSCalendar.Unit](nscalendar/unit.md): Calendrical units such as year, month, day and hour.

### Scanning Dates

- [startOfDay(for:)](nscalendar/startofday%28for_%29.md): Returns the first moment of a given date as a date instance.
- [enumerateDates(startingAfter:matching:options:using:)](nscalendar/enumeratedates%28startingafter_matching_options_using_%29.md): Computes the dates that match (or most closely match) a given set of components, and calls the block once for each of them, until the enumeration is stopped.
- [nextDate(after:matching:options:)](nscalendar/nextdate%28after_matching_options_%29.md): Returns the next date after a given date matching the given components.
- [nextDate(after:matchingHour:minute:second:options:)](nscalendar/nextdate%28after_matchinghour_minute_second_options_%29.md): Returns the next date after a given date that matches the given hour, minute, and second, component values.
- [nextDate(after:matching:value:options:)](nscalendar/nextdate%28after_matching_value_options_%29.md): Returns the next date after a given date matching the given calendar unit value.
- [NSCalendar.Options](nscalendar/options.md): The options for arithmetic operations involving calendars.
- [NSWrapCalendarComponents](nswrapcalendarcomponents-api.md): A legacy constant used to control overflow in date calculations.

### Calculating Dates

- [date(from:)](nscalendar/date%28from_%29.md): Returns a date representing the absolute time calculated from given components.
- [date(byAdding:to:options:)](nscalendar/date%28byadding_to_options_%29.md): Returns a date representing the absolute time calculated by adding given components to a given date.
- [date(byAdding:value:to:options:)](nscalendar/date%28byadding_value_to_options_%29.md): Returns a date representing the absolute time calculated by adding the value of a given component to a given date.
- [date(bySettingHour:minute:second:of:options:)](nscalendar/date%28bysettinghour_minute_second_of_options_%29.md): Creates a new date calculated with the given time.
- [date(bySettingUnit:value:of:options:)](nscalendar/date%28bysettingunit_value_of_options_%29.md): Returns a new date representing the date calculated by setting a specific component of a given date to a given value, while trying to keep lower components the same.
- [date(era:year:month:day:hour:minute:second:nanosecond:)](nscalendar/date%28era_year_month_day_hour_minute_second_nanosecond_%29.md): Returns a date created with the given components.
- [date(era:yearForWeekOfYear:weekOfYear:weekday:hour:minute:second:nanosecond:)](nscalendar/date%28era_yearforweekofyear_weekofyear_weekday_hour_minute_second_nanosecond_%29.md): Returns a new date created with the given components base on a week-of-year value.
- [nextWeekendStart(\_:interval:options:after:)](nscalendar/nextweekendstart%28__interval_options_after_%29.md): Returns by reference the starting date and time interval range of the next weekend period after a given date.

### Comparing Dates

- [compare(\_:to:toUnitGranularity:)](nscalendar/compare%28__to_tounitgranularity_%29.md): Indicates the ordering of two given dates based on their components down to a given unit granularity.
- [isDate(\_:equalTo:toUnitGranularity:)](nscalendar/isdate%28__equalto_tounitgranularity_%29.md): Indicates whether two dates are equal to a given unit of granularity.
- [isDate(\_:inSameDayAs:)](nscalendar/isdate%28__insamedayas_%29.md): Indicates whether two dates are in the same day.
- [isDateInToday(\_:)](nscalendar/isdateintoday%28__%29.md): Indicates whether the given date is in “today.”
- [isDateInTomorrow(\_:)](nscalendar/isdateintomorrow%28__%29.md): Indicates whether the given date is in “tomorrow.”
- [isDateInWeekend(\_:)](nscalendar/isdateinweekend%28__%29.md): Indicates whether a given date falls within a weekend period, as defined by the calendar and the calendar’s locale.
- [isDateInYesterday(\_:)](nscalendar/isdateinyesterday%28__%29.md): Indicates whether the given date is in “yesterday.”

### Getting AM and PM Symbols

- [amSymbol](nscalendar/amsymbol.md): The symbol used to represent “AM” for this calendar.
- [pmSymbol](nscalendar/pmsymbol.md): The symbol used to represent “PM” for this calendar.

### Getting Weekday Symbols

- [weekdaySymbols](nscalendar/weekdaysymbols.md): A list of weekdays in this calendar.
- [shortWeekdaySymbols](nscalendar/shortweekdaysymbols.md): A list of shorter-named weekdays in this calendar.
- [veryShortWeekdaySymbols](nscalendar/veryshortweekdaysymbols.md): A list of very-shortly-named weekdays in this calendar.
- [standaloneWeekdaySymbols](nscalendar/standaloneweekdaysymbols.md): A list of standalone weekday symbols for this calendar.
- [shortStandaloneWeekdaySymbols](nscalendar/shortstandaloneweekdaysymbols.md): A list of short standalone weekday symbols for this calendar.
- [veryShortStandaloneWeekdaySymbols](nscalendar/veryshortstandaloneweekdaysymbols.md): A list of very short standalone weekday symbols for this calendar.

### Getting Month Symbols

- [monthSymbols](nscalendar/monthsymbols.md): A list of month symbols for this calendar.
- [shortMonthSymbols](nscalendar/shortmonthsymbols.md): A list of short month symbols for this calendar.
- [veryShortMonthSymbols](nscalendar/veryshortmonthsymbols.md): A list of very short month symbols for this calendar.
- [standaloneMonthSymbols](nscalendar/standalonemonthsymbols.md): A list of standalone month symbols for this calendar.
- [shortStandaloneMonthSymbols](nscalendar/shortstandalonemonthsymbols.md): A list of short standalone month symbols for this calendar.
- [veryShortStandaloneMonthSymbols](nscalendar/veryshortstandalonemonthsymbols.md): A list of very short month symbols for this calendar.

### Getting Quarter Symbols

- [quarterSymbols](nscalendar/quartersymbols.md): A list of quarter symbols for this calendar.
- [shortQuarterSymbols](nscalendar/shortquartersymbols.md): A list of short quarter symbols for this calendar.
- [standaloneQuarterSymbols](nscalendar/standalonequartersymbols.md): A list of standalone quarter symbols for this calendar.
- [shortStandaloneQuarterSymbols](nscalendar/shortstandalonequartersymbols.md): A list of short standalone quarter symbols for this calendar.

### Getting Era Symbols

- [eraSymbols](nscalendar/erasymbols.md): A list of era symbols for this calendar.
- [longEraSymbols](nscalendar/longerasymbols.md): A list of long era symbols for this calendar.

### Recognizing Notifications

- [NSCalendarDayChanged](nsnotification/name-swift.struct/nscalendardaychanged.md): A notification that is posted whenever the calendar day of the system changes, as determined by the system calendar, locale, and time zone.

### Initializers

- [init(coder:)](nscalendar/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](nscoding.md)
- [NSCopying](nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](nssecurecoding.md)

# NSCalendar (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A definition of the relationships between calendar units and absolute points in time, providing features for calculation and comparison of dates.

## Declaration

```objectivec
@interface NSCalendar : NSObject
```

<a id="overview"></a>

## Overview

In Swift, this object bridges to [Calendar](calendar.md); use [NSCalendar](nscalendar.md) when you need reference semantics or other Foundation-specific behavior.

[NSCalendar](nscalendar.md) objects encapsulate information about systems of reckoning time in which the beginning, length, and divisions of a year are defined. They provide information about the calendar and support for calendrical computations such as determining the range of a given calendrical unit and adding units to a given absolute time.

[NSCalendar](nscalendar.md) is *toll-free bridged* with its Core Foundation counterpart, [CFCalendarRef](../corefoundation/cfcalendar.md). See [Toll-Free Bridging](https://developer.apple.com/library/archive/documentation/General/Conceptual/CocoaEncyclopedia/Toll-FreeBridgin/Toll-FreeBridgin.html#//apple_ref/doc/uid/TP40010810-CH2) for more information on toll-free bridging.

> **Important**

>  The Swift overlay to the Foundation framework provides the [Calendar](calendar.md) structure, which bridges to the [NSCalendar](nscalendar.md) class. For more information about value types, see [Working with Foundation Types](https://developer.apple.com/documentation/swift/working-with-foundation-types).

<a id="Locales-and-Calendars"></a>

### Locales and Calendars

Most locales use the most widely used civil calendar, called the *Gregorian calendar* ([NSCalendarIdentifierGregorian](nscalendar/identifier/gregorian.md)), but there remain exceptions to this trend. For example:

- In Saudi Arabia, some locales use primarily the Islamic Umm al-Qura calendar ([NSCalendarIdentifierIslamicUmmAlQura](nscalendar/identifier/islamicummalqura.md)).
- In Ethiopia, some locales use primarily the Ethiopian calendar ([NSCalendarIdentifierEthiopicAmeteMihret](nscalendar/identifier/ethiopicametemihret.md) or [NSCalendarIdentifierEthiopicAmeteAlem](nscalendar/identifier/ethiopicametealem.md)).
- In Iran and Afghanistan, some locales use primarily the Persian calendar ([NSCalendarIdentifierPersian](nscalendar/identifier/persian.md)).
- In Thailand, some locales use primarily the Buddhist calendar ([NSCalendarIdentifierBuddhist](nscalendar/identifier/buddhist.md)).

Other locales use another calendar alongside the Gregorian calendar. For example:

- India also uses the Indian national calendar ([NSCalendarIdentifierIndian](nscalendar/identifier/indian.md)).
- Israel also uses the Hebrew calendar ([NSCalendarIdentifierHebrew](nscalendar/identifier/hebrew.md)).
- China mainland and other regions also use the Chinese calendar ([NSCalendarIdentifierChinese](nscalendar/identifier/chinese.md)), primarily to calculate astronomical date and Chinese traditional holidays.
- Japan also uses the Japanese calendar ([NSCalendarIdentifierJapanese](nscalendar/identifier/japanese.md)), primarily to add year names.

Independent of any particular locale, certain calendars are used primarily to calculate dates for religious observances. Among these are the Buddhist ([NSCalendarIdentifierBuddhist](nscalendar/identifier/buddhist.md)), Coptic ([NSCalendarIdentifierCoptic](nscalendar/identifier/coptic.md)), Hebrew ([NSCalendarIdentifierHebrew](nscalendar/identifier/hebrew.md)), and Islamic ([NSCalendarIdentifierIslamic](nscalendar/identifier/islamic.md)) calendars.

<a id="How-NSCalendar-Models-the-Gregorian-Calendar"></a>

### How NSCalendar Models the Gregorian Calendar

The Gregorian calendar was first introduced in 1582, as a replacement for the Julian Calendar. According to the Julian calendar, a leap day is added to February for any year with a number divisible by 4, which results in an annual disparity of 11 minutes, or 1 day every 128 years. The Gregorian calendar revised the rules for leap day calculation, by skipping the leap day for any year with a number divisible by 100, unless that year number is also divisible by 400, resulting in an annual disparity of only 26 seconds, or 1 day every 3323 years.

To transition from the Julian calendar to the Gregorian calendar, 10 days were dropped from the Gregorian calendar (October 5–14).

After the Gregorian calendar was introduced, many regions continued to use the Julian calendar, with Turkey being the last country or region to adopt the Gregorian calendar, in 1926. As a result of the staggered adoption, the transition period for regions at the time of adoption have different start dates and a different number of skipped days to account for the additional disparity from leap day calculations.

[NSCalendar](nscalendar.md) models the behavior of a *proleptic* Gregorian calendar (*as defined by ISO 8601:2004*), which extends the Gregorian calendar backward in time from the date of its introduction. This behavior should be taken into account when working with dates created before the transition period of the affected locales.

<a id="Calendar-Arithmetic"></a>

### Calendar Arithmetic

To do calendar arithmetic, you use [NSDate](nsdate.md) objects in conjunction with a calendar. For example, to convert between a decomposed date in one calendar and another calendar, you must first convert the decomposed elements into a date using the first calendar, then decompose it using the second. [NSDate](nsdate.md) provides the absolute scale and epoch (reference point) for dates and times, which can then be rendered into a particular calendar, for calendrical computations or user display.

Two [NSCalendar](nscalendar.md) methods that return a date object, [dateFromComponents:](nscalendar/date%28from_%29.md), [dateByAddingComponents:toDate:options:](nscalendar/date%28byadding_to_options_%29.md), take as a parameter an [NSDateComponents](nsdatecomponents.md) object that describes the calendrical components required for the computation. You can provide as many components as you need (or choose to). When there is incomplete information to compute an absolute time, default values similar to `0` and `1` are usually chosen by a calendar, but this is a calendar-specific choice. If you provide inconsistent information, calendar-specific disambiguation is performed (which may involve ignoring one or more of the parameters). Related methods ([components:fromDate:](nscalendar/components%28__from_%29.md) and [components:fromDate:toDate:options:](nscalendar/components%28__from_to_options_%29-84y5w.md)) take a bit mask parameter that specifies which components to calculate when returning an [NSDateComponents](nsdatecomponents.md) object. The bit mask is composed of [NSCalendarUnit](nscalendar/unit.md) constants (see `Constants`).

In a calendar, day, week, weekday, month, and year numbers are generally 1-based, but there may be calendar-specific exceptions. Ordinal numbers, where they occur, are 1-based. Some calendars represented by this API may have to map their basic unit concepts into year/month/week/day/… nomenclature. For example, a calendar composed of 4 quarters in a year instead of 12 months uses the month unit to represent quarters. The particular values of the unit are defined by each calendar, and are not necessarily consistent with values for that unit in another calendar.

## Topics

### Creating and Initializing Calendars

- [calendarWithIdentifier:](nscalendar/init%28identifier_%29.md): Creates a new calendar specified by a given identifier.
- [initWithCalendarIdentifier:](nscalendar/init%28calendaridentifier_%29.md): Initializes a calendar according to a given identifier.
- [NSCalendarIdentifier](nscalendar/identifier.md): The supported calendar types.

### Getting the User’s Calendar

- [currentCalendar](nscalendar/current.md): The user’s current calendar.
- [autoupdatingCurrentCalendar](nscalendar/autoupdatingcurrent.md): A calendar that tracks changes to user’s preferred calendar.

### Extracting Components

- [date:matchesComponents:](nscalendar/date%28__matchescomponents_%29.md): Returns whether a given date matches all of the given date components.
- [component:fromDate:](nscalendar/component%28__from_%29.md): Returns the specified date component from a given date.
- [components:fromDate:](nscalendar/components%28__from_%29.md): Returns the date components representing a given date.
- [components:fromDate:toDate:options:](nscalendar/components%28__from_to_options_%29-84y5w.md): Returns the difference between two supplied dates as date components.
- [components:fromDateComponents:toDateComponents:options:](nscalendar/components%28__from_to_options_%29-49lo8.md): Returns the difference between start and end dates given as date components.
- [componentsInTimeZone:fromDate:](nscalendar/components%28in_from_%29.md): Returns all the date components of a date, as if in a given time zone (instead of the receiving calendar’s time zone).
- [getEra:year:month:day:fromDate:](nscalendar/getera%28__year_month_day_from_%29.md): Returns by reference the era, year, week of year, and weekday component values for a given date.
- [getEra:yearForWeekOfYear:weekOfYear:weekday:fromDate:](nscalendar/getera%28__yearforweekofyear_weekofyear_weekday_from_%29.md): Returns by reference the era, year, week of year, and weekday component values for a given date.
- [getHour:minute:second:nanosecond:fromDate:](nscalendar/gethour%28__minute_second_nanosecond_from_%29.md): Returns by reference the hour, minute, second, and nanosecond component values for a given date.

### Getting Calendar Information

- [calendarIdentifier](nscalendar/calendaridentifier.md): An identifier for the calendar.
- [firstWeekday](nscalendar/firstweekday.md): The index of the first weekday of the receiver.
- [locale](nscalendar/locale.md): The locale of the receiver.
- [timeZone](nscalendar/timezone.md): The time zone for the calendar.
- [maximumRangeOfUnit:](nscalendar/maximumrange%28of_%29.md): Returns the maximum range limits of the values that a given unit can take on.
- [minimumRangeOfUnit:](nscalendar/minimumrange%28of_%29.md): Returns the minimum range limits of the values that a given unit can take on.
- [minimumDaysInFirstWeek](nscalendar/minimumdaysinfirstweek.md): The minimum number of days in the first week of the receiver.
- [ordinalityOfUnit:inUnit:forDate:](nscalendar/ordinality%28of_in_for_%29.md): Returns, for a given absolute time, the ordinal number of a smaller calendar unit (such as a day) within a specified larger calendar unit (such as a week).
- [rangeOfUnit:inUnit:forDate:](nscalendar/range%28of_in_for_%29.md): Returns the range of absolute time values that a smaller calendar unit (such as a day) can take on in a larger calendar unit (such as a month) that includes a specified absolute time.
- [rangeOfUnit:startDate:interval:forDate:](nscalendar/range%28of_start_interval_for_%29.md): Returns by reference the starting time and duration of a given calendar unit that contains a given date.
- [rangeOfWeekendStartDate:interval:containingDate:](nscalendar/range%28ofweekendstart_interval_containing_%29.md): Returns whether a given date falls within a weekend period, and if so, returns by reference the start date and time interval of the weekend range.
- [NSCalendarUnit](nscalendar/unit.md): Calendrical units such as year, month, day and hour.

### Scanning Dates

- [startOfDayForDate:](nscalendar/startofday%28for_%29.md): Returns the first moment of a given date as a date instance.
- [enumerateDatesStartingAfterDate:matchingComponents:options:usingBlock:](nscalendar/enumeratedates%28startingafter_matching_options_using_%29.md): Computes the dates that match (or most closely match) a given set of components, and calls the block once for each of them, until the enumeration is stopped.
- [nextDateAfterDate:matchingComponents:options:](nscalendar/nextdate%28after_matching_options_%29.md): Returns the next date after a given date matching the given components.
- [nextDateAfterDate:matchingHour:minute:second:options:](nscalendar/nextdate%28after_matchinghour_minute_second_options_%29.md): Returns the next date after a given date that matches the given hour, minute, and second, component values.
- [nextDateAfterDate:matchingUnit:value:options:](nscalendar/nextdate%28after_matching_value_options_%29.md): Returns the next date after a given date matching the given calendar unit value.
- [NSCalendarOptions](nscalendar/options.md): The options for arithmetic operations involving calendars.
- [NSWrapCalendarComponents](nswrapcalendarcomponents-api.md): A legacy constant used to control overflow in date calculations.

### Calculating Dates

- [dateFromComponents:](nscalendar/date%28from_%29.md): Returns a date representing the absolute time calculated from given components.
- [dateByAddingComponents:toDate:options:](nscalendar/date%28byadding_to_options_%29.md): Returns a date representing the absolute time calculated by adding given components to a given date.
- [dateByAddingUnit:value:toDate:options:](nscalendar/date%28byadding_value_to_options_%29.md): Returns a date representing the absolute time calculated by adding the value of a given component to a given date.
- [dateBySettingHour:minute:second:ofDate:options:](nscalendar/date%28bysettinghour_minute_second_of_options_%29.md): Creates a new date calculated with the given time.
- [dateBySettingUnit:value:ofDate:options:](nscalendar/date%28bysettingunit_value_of_options_%29.md): Returns a new date representing the date calculated by setting a specific component of a given date to a given value, while trying to keep lower components the same.
- [dateWithEra:year:month:day:hour:minute:second:nanosecond:](nscalendar/date%28era_year_month_day_hour_minute_second_nanosecond_%29.md): Returns a date created with the given components.
- [dateWithEra:yearForWeekOfYear:weekOfYear:weekday:hour:minute:second:nanosecond:](nscalendar/date%28era_yearforweekofyear_weekofyear_weekday_hour_minute_second_nanosecond_%29.md): Returns a new date created with the given components base on a week-of-year value.
- [nextWeekendStartDate:interval:options:afterDate:](nscalendar/nextweekendstart%28__interval_options_after_%29.md): Returns by reference the starting date and time interval range of the next weekend period after a given date.

### Comparing Dates

- [compareDate:toDate:toUnitGranularity:](nscalendar/compare%28__to_tounitgranularity_%29.md): Indicates the ordering of two given dates based on their components down to a given unit granularity.
- [isDate:equalToDate:toUnitGranularity:](nscalendar/isdate%28__equalto_tounitgranularity_%29.md): Indicates whether two dates are equal to a given unit of granularity.
- [isDate:inSameDayAsDate:](nscalendar/isdate%28__insamedayas_%29.md): Indicates whether two dates are in the same day.
- [isDateInToday:](nscalendar/isdateintoday%28__%29.md): Indicates whether the given date is in “today.”
- [isDateInTomorrow:](nscalendar/isdateintomorrow%28__%29.md): Indicates whether the given date is in “tomorrow.”
- [isDateInWeekend:](nscalendar/isdateinweekend%28__%29.md): Indicates whether a given date falls within a weekend period, as defined by the calendar and the calendar’s locale.
- [isDateInYesterday:](nscalendar/isdateinyesterday%28__%29.md): Indicates whether the given date is in “yesterday.”

### Getting AM and PM Symbols

- [AMSymbol](nscalendar/amsymbol.md): The symbol used to represent “AM” for this calendar.
- [PMSymbol](nscalendar/pmsymbol.md): The symbol used to represent “PM” for this calendar.

### Getting Weekday Symbols

- [weekdaySymbols](nscalendar/weekdaysymbols.md): A list of weekdays in this calendar.
- [shortWeekdaySymbols](nscalendar/shortweekdaysymbols.md): A list of shorter-named weekdays in this calendar.
- [veryShortWeekdaySymbols](nscalendar/veryshortweekdaysymbols.md): A list of very-shortly-named weekdays in this calendar.
- [standaloneWeekdaySymbols](nscalendar/standaloneweekdaysymbols.md): A list of standalone weekday symbols for this calendar.
- [shortStandaloneWeekdaySymbols](nscalendar/shortstandaloneweekdaysymbols.md): A list of short standalone weekday symbols for this calendar.
- [veryShortStandaloneWeekdaySymbols](nscalendar/veryshortstandaloneweekdaysymbols.md): A list of very short standalone weekday symbols for this calendar.

### Getting Month Symbols

- [monthSymbols](nscalendar/monthsymbols.md): A list of month symbols for this calendar.
- [shortMonthSymbols](nscalendar/shortmonthsymbols.md): A list of short month symbols for this calendar.
- [veryShortMonthSymbols](nscalendar/veryshortmonthsymbols.md): A list of very short month symbols for this calendar.
- [standaloneMonthSymbols](nscalendar/standalonemonthsymbols.md): A list of standalone month symbols for this calendar.
- [shortStandaloneMonthSymbols](nscalendar/shortstandalonemonthsymbols.md): A list of short standalone month symbols for this calendar.
- [veryShortStandaloneMonthSymbols](nscalendar/veryshortstandalonemonthsymbols.md): A list of very short month symbols for this calendar.

### Getting Quarter Symbols

- [quarterSymbols](nscalendar/quartersymbols.md): A list of quarter symbols for this calendar.
- [shortQuarterSymbols](nscalendar/shortquartersymbols.md): A list of short quarter symbols for this calendar.
- [standaloneQuarterSymbols](nscalendar/standalonequartersymbols.md): A list of standalone quarter symbols for this calendar.
- [shortStandaloneQuarterSymbols](nscalendar/shortstandalonequartersymbols.md): A list of short standalone quarter symbols for this calendar.

### Getting Era Symbols

- [eraSymbols](nscalendar/erasymbols.md): A list of era symbols for this calendar.
- [longEraSymbols](nscalendar/longerasymbols.md): A list of long era symbols for this calendar.

### Recognizing Notifications

- [NSCalendarDayChangedNotification](nsnotification/name-swift.struct/nscalendardaychanged.md): A notification that is posted whenever the calendar day of the system changes, as determined by the system calendar, locale, and time zone.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](nscopying.md)
- [NSSecureCoding](nssecurecoding.md)

## See Also

### Calendrical Calculations

- [NSDateComponents](nsdatecomponents.md): An object that specifies a date or time in terms of units (such as year, month, day, hour, and minute) to be evaluated in a calendar system and time zone.
- [NSTimeZone](nstimezone.md): Information about standard time conventions associated with a specific geopolitical region.
