> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/calendar/pmsymbol

# pmSymbol

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The symbol used to represent “PM”, localized to the Calendar’s `locale`.

## Declaration

```swift
var pmSymbol: String { get }
```

<a id="Discussion"></a>

## Discussion

For example, for English in the Gregorian calendar, returns `"PM"`.

> **Note**

>  By default, Calendars have no locale set. If you wish to receive a localized answer, be sure to set the `locale` property first - most likely to `Locale.autoupdatingCurrent`.

## See Also

### Getting AM and PM symbols

- [amSymbol](amsymbol.md): The symbol used to represent “AM”, localized to the Calendar’s `locale`.
