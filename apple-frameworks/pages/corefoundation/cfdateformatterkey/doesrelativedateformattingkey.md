> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfdateformatterkey/doesrelativedateformattingkey](https://developer.apple.com/documentation/corefoundation/cfdateformatterkey/doesrelativedateformattingkey)

# doesRelativeDateFormattingKey (Swift)

**Framework:** Core Foundation  
**Kind:** Type Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Specifies the relative date formatting property, a CFBoolean object.

## Declaration

```swift
static let doesRelativeDateFormattingKey: CFDateFormatterKey!
```

<a id="Discussion"></a>

## Discussion

This is used to specify whether the receiver uses phrases such as “today” and “tomorrow” for the date component.

## See Also

### Constants

- [isLenient](islenient.md): Specifies the lenient property, a CFBoolean object where a true value indicates that the parsing of strings into date or absolute time values will be fuzzy.
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

# kCFDateFormatterDoesRelativeDateFormattingKey (Objective-C)

**Framework:** Core Foundation  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Specifies the relative date formatting property, a CFBoolean object.

## Declaration

```objectivec
extern CFDateFormatterKey const kCFDateFormatterDoesRelativeDateFormattingKey;
```

<a id="Discussion"></a>

## Discussion

This is used to specify whether the receiver uses phrases such as “today” and “tomorrow” for the date component.

## See Also

### Constants

- [kCFDateFormatterIsLenient](islenient.md): Specifies the lenient property, a CFBoolean object where a true value indicates that the parsing of strings into date or absolute time values will be fuzzy.
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
