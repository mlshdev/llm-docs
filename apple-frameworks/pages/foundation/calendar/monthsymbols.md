> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/calendar/monthsymbols

# monthSymbols

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A list of months in this calendar, localized to the Calendar’s `locale`.

## Declaration

```swift
var monthSymbols: [String] { get }
```

<a id="Discussion"></a>

## Discussion

For example, for English in the Gregorian calendar, returns `["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]`.

> **Note**

>  By default, Calendars have no locale set. If you wish to receive a localized answer, be sure to set the `locale` property first - most likely to `Locale.autoupdatingCurrent`.

## See Also

### Getting Month Symbols

- [shortMonthSymbols](shortmonthsymbols.md): A list of shorter-named months in this calendar, localized to the Calendar’s `locale`.
- [veryShortMonthSymbols](veryshortmonthsymbols.md): A list of very-shortly-named months in this calendar, localized to the Calendar’s `locale`.
- [standaloneMonthSymbols](standalonemonthsymbols.md): A list of standalone months in this calendar, localized to the Calendar’s `locale`.
- [shortStandaloneMonthSymbols](shortstandalonemonthsymbols.md): A list of shorter-named standalone months in this calendar, localized to the Calendar’s `locale`.
- [veryShortStandaloneMonthSymbols](veryshortstandalonemonthsymbols.md): A list of very-shortly-named standalone months in this calendar, localized to the Calendar’s `locale`.
