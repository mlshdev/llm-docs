> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/intervalformatstyle/timezone(_:)](https://developer.apple.com/documentation/foundation/date/intervalformatstyle/timezone(_:))

# timeZone(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Modifies the date interval format style to use the specified time zone format.

## Declaration

```swift
func timeZone(_ format: Date.IntervalFormatStyle.Symbol.TimeZone = .genericName(.short)) -> Date.IntervalFormatStyle
```

## Parameters

- `format`: The time zone format style for formatting a date interval.

<a id="return-value"></a>

## Return Value

A date interval format style with the provided time zone format.

## See Also

### Specifying Date Interval Format Styles

- [locale(\_:)](locale%28__%29.md): Modifies the date interval format style to use the specified locale.
- [calendar](calendar.md): The calendar for formatting the date interval.
- [locale](locale.md): The locale for formatting the date and time interval components.
- [timeZone](timezone.md): The time zone for formatting the date interval components.
