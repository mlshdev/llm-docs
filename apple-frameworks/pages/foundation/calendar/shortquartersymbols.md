> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/calendar/shortquartersymbols

# shortQuarterSymbols

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A list of shorter-named quarters in this calendar, localized to the Calendar’s `locale`.

## Declaration

```swift
var shortQuarterSymbols: [String] { get }
```

<a id="Discussion"></a>

## Discussion

For example, for English in the Gregorian calendar, returns `["Q1", "Q2", "Q3", "Q4"]`.

> **Note**

>  By default, Calendars have no locale set. If you wish to receive a localized answer, be sure to set the `locale` property first - most likely to `Locale.autoupdatingCurrent`.

## See Also

### Getting Quarter Symbols

- [quarterSymbols](quartersymbols.md): A list of quarter names in this calendar, localized to the Calendar’s `locale`.
- [standaloneQuarterSymbols](standalonequartersymbols.md): A list of standalone quarter names in this calendar, localized to the Calendar’s `locale`.
- [shortStandaloneQuarterSymbols](shortstandalonequartersymbols.md): A list of shorter-named standalone quarters in this calendar, localized to the Calendar’s `locale`.
