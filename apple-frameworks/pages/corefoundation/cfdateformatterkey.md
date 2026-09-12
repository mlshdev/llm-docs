> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfdateformatterkey](https://developer.apple.com/documentation/corefoundation/cfdateformatterkey)

# CFDateFormatterKey (Swift)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
struct CFDateFormatterKey
```

## Topics

### Type Properties

- [amSymbol](cfdateformatterkey/amsymbol.md): Specifies the AM symbol property, a CFString object.
- [calendar](cfdateformatterkey/calendar.md): Specifies the calendar property, a CFCalendar object.
- [calendarName](cfdateformatterkey/calendarname.md): Specifies the calendar name, a CFString object.
- [defaultDate](cfdateformatterkey/defaultdate.md): Specifies the default date property, a CFDate object.
- [defaultFormat](cfdateformatterkey/defaultformat.md): The original format string for the formatter (given the date & time style and locale specified at creation).
- [doesRelativeDateFormattingKey](cfdateformatterkey/doesrelativedateformattingkey.md): Specifies the relative date formatting property, a CFBoolean object.
- [eraSymbols](cfdateformatterkey/erasymbols.md): Specifies the era symbols property, a CFArray of CFString objects.
- [gregorianStartDate](cfdateformatterkey/gregorianstartdate.md): Specifies the Gregorian start date property, a CFDate object.
- [isLenient](cfdateformatterkey/islenient.md): Specifies the lenient property, a CFBoolean object where a true value indicates that the parsing of strings into date or absolute time values will be fuzzy.
- [longEraSymbols](cfdateformatterkey/longerasymbols.md): Specifies the long era symbols property, a CFArray of CFString objects.
- [monthSymbols](cfdateformatterkey/monthsymbols.md): Specifies the month symbols property, a CFArray of CFString objects.
- [pmSymbol](cfdateformatterkey/pmsymbol.md): Specifies the PM symbol property, a CFString object.
- [quarterSymbols](cfdateformatterkey/quartersymbols.md): Specifies the quarter symbols property, a CFArray of CFString objects.
- [shortMonthSymbols](cfdateformatterkey/shortmonthsymbols.md): Specifies the short month symbols property, a CFArray of CFString objects.
- [shortQuarterSymbols](cfdateformatterkey/shortquartersymbols.md): Specifies the short quarter symbols property, a CFArray of CFString objects.
- [shortStandaloneMonthSymbols](cfdateformatterkey/shortstandalonemonthsymbols.md): Specifies the short standalone month symbols property, a CFArray of CFString objects.
- [shortStandaloneQuarterSymbols](cfdateformatterkey/shortstandalonequartersymbols.md): Specifies the short standalone quarter symbols property, a CFArray of CFString objects.
- [shortStandaloneWeekdaySymbols](cfdateformatterkey/shortstandaloneweekdaysymbols.md): Specifies the short standalone weekday symbols property, a CFArray of CFString objects.
- [shortWeekdaySymbols](cfdateformatterkey/shortweekdaysymbols.md): Specifies the short weekday symbols property, a CFArray of CFString objects.
- [standaloneMonthSymbols](cfdateformatterkey/standalonemonthsymbols.md): Specifies the standalone month symbols property, a CFArray of CFString objects.
- [standaloneQuarterSymbols](cfdateformatterkey/standalonequartersymbols.md): Specifies the standalone quarter symbols property, a CFArray of CFString objects.
- [standaloneWeekdaySymbols](cfdateformatterkey/standaloneweekdaysymbols.md): Specifies the standalone weekday symbols property, a CFArray of CFString objects.
- [timeZone](cfdateformatterkey/timezone.md): Specifies the time zone property, a CFTimeZone object.
- [twoDigitStartDate](cfdateformatterkey/twodigitstartdate.md): Specifies the property representing the date from which two-digit years start, a CFDate object.
- [veryShortMonthSymbols](cfdateformatterkey/veryshortmonthsymbols.md): Specifies the very short month symbols property, a CFArray of CFString objects.
- [veryShortStandaloneMonthSymbols](cfdateformatterkey/veryshortstandalonemonthsymbols.md): Specifies the very short standalone month symbols property, a CFArray of CFString objects.
- [veryShortStandaloneWeekdaySymbols](cfdateformatterkey/veryshortstandaloneweekdaysymbols.md): Specifies the very short standalone weekday symbols property, a CFArray of CFString objects.
- [veryShortWeekdaySymbols](cfdateformatterkey/veryshortweekdaysymbols.md): Specifies the very short weekday symbols property, a CFArray of CFString objects.
- [weekdaySymbols](cfdateformatterkey/weekdaysymbols.md): Specifies the weekday symbols property, a CFArray of CFString objects.

### Initializers

- [init(rawValue:)](cfdateformatterkey/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Data Types

- [CFAllocatorTypeID](cfallocatortypeid.md)
- [CFCalendarIdentifier](cfcalendaridentifier.md)
- [CFErrorDomain](cferrordomain.md)
- [CFLocaleIdentifier](cflocaleidentifier.md)
- [CFLocaleKey](cflocalekey.md)
- [CFNotificationName](cfnotificationname.md)
- [CFNumberFormatterKey](cfnumberformatterkey.md)
- [CFRunLoopMode](cfrunloopmode.md)
- [CFStreamPropertyKey](cfstreampropertykey.md)
- [CFTypeRef](cftyperef.md): An untyped “generic” reference to any Core Foundation object.

# CFDateFormatterKey (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
typedef CFStringRef CFDateFormatterKey;
```

## Topics

### Type Properties

- [kCFDateFormatterAMSymbol](cfdateformatterkey/amsymbol.md): Specifies the AM symbol property, a CFString object.
- [kCFDateFormatterCalendar](cfdateformatterkey/calendar.md): Specifies the calendar property, a CFCalendar object.
- [kCFDateFormatterCalendarName](cfdateformatterkey/calendarname.md): Specifies the calendar name, a CFString object.
- [kCFDateFormatterDefaultDate](cfdateformatterkey/defaultdate.md): Specifies the default date property, a CFDate object.
- [kCFDateFormatterDefaultFormat](cfdateformatterkey/defaultformat.md): The original format string for the formatter (given the date & time style and locale specified at creation).
- [kCFDateFormatterDoesRelativeDateFormattingKey](cfdateformatterkey/doesrelativedateformattingkey.md): Specifies the relative date formatting property, a CFBoolean object.
- [kCFDateFormatterEraSymbols](cfdateformatterkey/erasymbols.md): Specifies the era symbols property, a CFArray of CFString objects.
- [kCFDateFormatterGregorianStartDate](cfdateformatterkey/gregorianstartdate.md): Specifies the Gregorian start date property, a CFDate object.
- [kCFDateFormatterIsLenient](cfdateformatterkey/islenient.md): Specifies the lenient property, a CFBoolean object where a true value indicates that the parsing of strings into date or absolute time values will be fuzzy.
- [kCFDateFormatterLongEraSymbols](cfdateformatterkey/longerasymbols.md): Specifies the long era symbols property, a CFArray of CFString objects.
- [kCFDateFormatterMonthSymbols](cfdateformatterkey/monthsymbols.md): Specifies the month symbols property, a CFArray of CFString objects.
- [kCFDateFormatterPMSymbol](cfdateformatterkey/pmsymbol.md): Specifies the PM symbol property, a CFString object.
- [kCFDateFormatterQuarterSymbols](cfdateformatterkey/quartersymbols.md): Specifies the quarter symbols property, a CFArray of CFString objects.
- [kCFDateFormatterShortMonthSymbols](cfdateformatterkey/shortmonthsymbols.md): Specifies the short month symbols property, a CFArray of CFString objects.
- [kCFDateFormatterShortQuarterSymbols](cfdateformatterkey/shortquartersymbols.md): Specifies the short quarter symbols property, a CFArray of CFString objects.
- [kCFDateFormatterShortStandaloneMonthSymbols](cfdateformatterkey/shortstandalonemonthsymbols.md): Specifies the short standalone month symbols property, a CFArray of CFString objects.
- [kCFDateFormatterShortStandaloneQuarterSymbols](cfdateformatterkey/shortstandalonequartersymbols.md): Specifies the short standalone quarter symbols property, a CFArray of CFString objects.
- [kCFDateFormatterShortStandaloneWeekdaySymbols](cfdateformatterkey/shortstandaloneweekdaysymbols.md): Specifies the short standalone weekday symbols property, a CFArray of CFString objects.
- [kCFDateFormatterShortWeekdaySymbols](cfdateformatterkey/shortweekdaysymbols.md): Specifies the short weekday symbols property, a CFArray of CFString objects.
- [kCFDateFormatterStandaloneMonthSymbols](cfdateformatterkey/standalonemonthsymbols.md): Specifies the standalone month symbols property, a CFArray of CFString objects.
- [kCFDateFormatterStandaloneQuarterSymbols](cfdateformatterkey/standalonequartersymbols.md): Specifies the standalone quarter symbols property, a CFArray of CFString objects.
- [kCFDateFormatterStandaloneWeekdaySymbols](cfdateformatterkey/standaloneweekdaysymbols.md): Specifies the standalone weekday symbols property, a CFArray of CFString objects.
- [kCFDateFormatterTimeZone](cfdateformatterkey/timezone.md): Specifies the time zone property, a CFTimeZone object.
- [kCFDateFormatterTwoDigitStartDate](cfdateformatterkey/twodigitstartdate.md): Specifies the property representing the date from which two-digit years start, a CFDate object.
- [kCFDateFormatterVeryShortMonthSymbols](cfdateformatterkey/veryshortmonthsymbols.md): Specifies the very short month symbols property, a CFArray of CFString objects.
- [kCFDateFormatterVeryShortStandaloneMonthSymbols](cfdateformatterkey/veryshortstandalonemonthsymbols.md): Specifies the very short standalone month symbols property, a CFArray of CFString objects.
- [kCFDateFormatterVeryShortStandaloneWeekdaySymbols](cfdateformatterkey/veryshortstandaloneweekdaysymbols.md): Specifies the very short standalone weekday symbols property, a CFArray of CFString objects.
- [kCFDateFormatterVeryShortWeekdaySymbols](cfdateformatterkey/veryshortweekdaysymbols.md): Specifies the very short weekday symbols property, a CFArray of CFString objects.
- [kCFDateFormatterWeekdaySymbols](cfdateformatterkey/weekdaysymbols.md): Specifies the weekday symbols property, a CFArray of CFString objects.

## See Also

### Data Types

- [CFAllocatorTypeID](cfallocatortypeid.md)
- [CFCalendarIdentifier](cfcalendaridentifier.md)
- [CFErrorDomain](cferrordomain.md)
- [CFLocaleIdentifier](cflocaleidentifier.md)
- [CFLocaleKey](cflocalekey.md)
- [CFNotificationName](cfnotificationname.md)
- [CFNumberFormatterKey](cfnumberformatterkey.md)
- [CFRunLoopMode](cfrunloopmode.md)
- [CFStreamPropertyKey](cfstreampropertykey.md)
- [CFTypeRef](cftyperef.md): An untyped “generic” reference to any Core Foundation object.
- [CGFloat](cgfloat-c.typealias.md): The basic type for all floating-point values.
- [HRESULT](hresult.md)
- [LPVOID](lpvoid.md)
- [REFIID](refiid.md)
- [ULONG](ulong.md)
