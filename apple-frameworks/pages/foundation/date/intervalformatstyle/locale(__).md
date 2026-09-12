> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/intervalformatstyle/locale(_:)](https://developer.apple.com/documentation/foundation/date/intervalformatstyle/locale(_:))

# locale(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Modifies the date interval format style to use the specified locale.

## Declaration

```swift
func locale(_ locale: Locale) -> Date.IntervalFormatStyle
```

## Parameters

- `locale`: The locale for formatting a date interval.

<a id="return-value"></a>

## Return Value

A date inteverval format style with the provided locale.

## See Also

### Specifying Date Interval Format Styles

- [timeZone(\_:)](timezone%28__%29.md): Modifies the date interval format style to use the specified time zone format.
- [calendar](calendar.md): The calendar for formatting the date interval.
- [locale](locale.md): The locale for formatting the date and time interval components.
- [timeZone](timezone.md): The time zone for formatting the date interval components.
