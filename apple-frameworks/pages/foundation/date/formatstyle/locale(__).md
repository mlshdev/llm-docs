> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/formatstyle/locale(_:)](https://developer.apple.com/documentation/foundation/date/formatstyle/locale(_:))

# locale(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Modifies the date format style to use the specified locale.

## Declaration

```swift
func locale(_ locale: Locale) -> Date.FormatStyle
```

## Parameters

- `locale`: The locale to use when formatting a date.

<a id="return-value"></a>

## Return Value

A date format style with the provided locale.

## See Also

### Modifying a Date Format Style

- [timeZone](timezone.md): The time zone to use when formatting the date and time components.
- [calendar](calendar.md): The calendar to use when formatting the date.
- [capitalizationContext](capitalizationcontext.md): The capitalization context to use when formatting the date.
- [locale](locale.md): The locale to use when formatting the date and time components.
