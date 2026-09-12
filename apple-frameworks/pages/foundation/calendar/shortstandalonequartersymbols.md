> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/calendar/shortstandalonequartersymbols](https://developer.apple.com/documentation/foundation/calendar/shortstandalonequartersymbols)

# shortStandaloneQuarterSymbols

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A list of shorter-named standalone quarters in this calendar, localized to the Calendar’s `locale`.

## Declaration

```swift
var shortStandaloneQuarterSymbols: [String] { get }
```

<a id="Discussion"></a>

## Discussion

For example, for English in the Gregorian calendar, returns `["Q1", "Q2", "Q3", "Q4"]`.

> **Note**

>  Stand-alone properties are for use in places like calendar headers. Non-stand-alone properties are for use in context (for example, “Saturday, November 12th”).

> **Note**

>  By default, Calendars have no locale set. If you wish to receive a localized answer, be sure to set the `locale` property first - most likely to `Locale.autoupdatingCurrent`.

## See Also

### Getting Quarter Symbols

- [quarterSymbols](quartersymbols.md): A list of quarter names in this calendar, localized to the Calendar’s `locale`.
- [shortQuarterSymbols](shortquartersymbols.md): A list of shorter-named quarters in this calendar, localized to the Calendar’s `locale`.
- [standaloneQuarterSymbols](standalonequartersymbols.md): A list of standalone quarter names in this calendar, localized to the Calendar’s `locale`.
