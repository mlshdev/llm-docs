> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfdateformatterkey/islenient](https://developer.apple.com/documentation/corefoundation/cfdateformatterkey/islenient)

# isLenient (Swift)

**Framework:** Core Foundation  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Specifies the lenient property, a CFBoolean object where a true value indicates that the parsing of strings into date or absolute time values will be fuzzy.

## Declaration

```swift
static let isLenient: CFDateFormatterKey!
```

<a id="Discussion"></a>

## Discussion

The formatter will use heuristics to guess at the date which is intended by the string. As with any guessing, it may get the result date wrong (that is, a date other than that which was intended).

## See Also

### Constants

- [timeZone](timezone.md): Specifies the time zone property, a CFTimeZone object.
- [calendarName](calendarname.md): Specifies the calendar name, a CFString object.
- [defaultFormat](defaultformat.md): The original format string for the formatter (given the date & time style and locale specified at creation).
- [twoDigitStartDate](twodigitstartdate.md): Specifies the property representing the date from which two-digit years start, a CFDate object.
- [defaultDate](defaultdate.md): Specifies the default date property, a CFDate object.
- [calendar](calendar.md): Specifies the calendar property, a CFCalendar object.
- [eraSymbols](erasymbols.md): Specifies the era symbols property, a CFArray of CFString objects.
- [monthSymbols](monthsymbols.md): Specifies the month symbols property, a CFArray of CFString objects.
- [shortMonthSymbols](shortmonthsymbols.md): Specifies the short month symbols property, a CFArray of CFString objects.
- [weekdaySymbols](weekdaysymbols.md): Specifies the weekday symbols property, a CFArray of CFString objects.
- [shortWeekdaySymbols](shortweekdaysymbols.md): Specifies the short weekday symbols property, a CFArray of CFString objects.
- [amSymbol](amsymbol.md): Specifies the AM symbol property, a CFString object.
- [pmSymbol](pmsymbol.md): Specifies the PM symbol property, a CFString object.
- [longEraSymbols](longerasymbols.md): Specifies the long era symbols property, a CFArray of CFString objects.
- [veryShortMonthSymbols](veryshortmonthsymbols.md): Specifies the very short month symbols property, a CFArray of CFString objects.

# kCFDateFormatterIsLenient (Objective-C)

**Framework:** Core Foundation  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Specifies the lenient property, a CFBoolean object where a true value indicates that the parsing of strings into date or absolute time values will be fuzzy.

## Declaration

```objectivec
extern CFDateFormatterKey const kCFDateFormatterIsLenient;
```

<a id="Discussion"></a>

## Discussion

The formatter will use heuristics to guess at the date which is intended by the string. As with any guessing, it may get the result date wrong (that is, a date other than that which was intended).

## See Also

### Constants

- [kCFDateFormatterTimeZone](timezone.md): Specifies the time zone property, a CFTimeZone object.
- [kCFDateFormatterCalendarName](calendarname.md): Specifies the calendar name, a CFString object.
- [kCFDateFormatterDefaultFormat](defaultformat.md): The original format string for the formatter (given the date & time style and locale specified at creation).
- [kCFDateFormatterTwoDigitStartDate](twodigitstartdate.md): Specifies the property representing the date from which two-digit years start, a CFDate object.
- [kCFDateFormatterDefaultDate](defaultdate.md): Specifies the default date property, a CFDate object.
- [kCFDateFormatterCalendar](calendar.md): Specifies the calendar property, a CFCalendar object.
- [kCFDateFormatterEraSymbols](erasymbols.md): Specifies the era symbols property, a CFArray of CFString objects.
- [kCFDateFormatterMonthSymbols](monthsymbols.md): Specifies the month symbols property, a CFArray of CFString objects.
- [kCFDateFormatterShortMonthSymbols](shortmonthsymbols.md): Specifies the short month symbols property, a CFArray of CFString objects.
- [kCFDateFormatterWeekdaySymbols](weekdaysymbols.md): Specifies the weekday symbols property, a CFArray of CFString objects.
- [kCFDateFormatterShortWeekdaySymbols](shortweekdaysymbols.md): Specifies the short weekday symbols property, a CFArray of CFString objects.
- [kCFDateFormatterAMSymbol](amsymbol.md): Specifies the AM symbol property, a CFString object.
- [kCFDateFormatterPMSymbol](pmsymbol.md): Specifies the PM symbol property, a CFString object.
- [kCFDateFormatterLongEraSymbols](longerasymbols.md): Specifies the long era symbols property, a CFArray of CFString objects.
- [kCFDateFormatterVeryShortMonthSymbols](veryshortmonthsymbols.md): Specifies the very short month symbols property, a CFArray of CFString objects.
