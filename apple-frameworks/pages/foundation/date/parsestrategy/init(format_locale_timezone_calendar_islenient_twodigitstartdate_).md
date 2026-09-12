> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/parsestrategy/init(format:locale:timezone:calendar:islenient:twodigitstartdate:)](https://developer.apple.com/documentation/foundation/date/parsestrategy/init(format:locale:timezone:calendar:islenient:twodigitstartdate:))

# init(format:locale:timeZone:calendar:isLenient:twoDigitStartDate:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a new `ParseStrategy` with the given configurations.

## Declaration

```swift
init(format: Date.FormatString, locale: Locale? = nil, timeZone: TimeZone, calendar: Calendar = Calendar(identifier: .gregorian), isLenient: Bool = true, twoDigitStartDate: Date = Date(timeIntervalSince1970: 0))
```

## Parameters

- `format`: A fixed format representing the pattern of the date string.
- `locale`: The locale of the fixed format.
- `timeZone`: The time zone to use for creating the date.
- `isLenient`: Whether to use heuristics when parsing the representation.
- `twoDigitStartDate`: The earliest date that can be denoted by a two-digit year specifier.
