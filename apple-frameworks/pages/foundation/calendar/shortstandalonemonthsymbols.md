> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/calendar/shortstandalonemonthsymbols](https://developer.apple.com/documentation/foundation/calendar/shortstandalonemonthsymbols)

# shortStandaloneMonthSymbols

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A list of shorter-named standalone months in this calendar, localized to the Calendar’s `locale`.

## Declaration

```swift
var shortStandaloneMonthSymbols: [String] { get }
```

<a id="Discussion"></a>

## Discussion

For example, for English in the Gregorian calendar, returns `["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]`.

> **Note**

>  Stand-alone properties are for use in places like calendar headers. Non-stand-alone properties are for use in context (for example, “Saturday, November 12th”).

> **Note**

>  By default, Calendars have no locale set. If you wish to receive a localized answer, be sure to set the `locale` property first - most likely to `Locale.autoupdatingCurrent`.

## See Also

### Getting Month Symbols

- [monthSymbols](monthsymbols.md): A list of months in this calendar, localized to the Calendar’s `locale`.
- [shortMonthSymbols](shortmonthsymbols.md): A list of shorter-named months in this calendar, localized to the Calendar’s `locale`.
- [veryShortMonthSymbols](veryshortmonthsymbols.md): A list of very-shortly-named months in this calendar, localized to the Calendar’s `locale`.
- [standaloneMonthSymbols](standalonemonthsymbols.md): A list of standalone months in this calendar, localized to the Calendar’s `locale`.
- [veryShortStandaloneMonthSymbols](veryshortstandalonemonthsymbols.md): A list of very-shortly-named standalone months in this calendar, localized to the Calendar’s `locale`.
