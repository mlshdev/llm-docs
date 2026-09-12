> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/relativeformatstyle/locale(_:)](https://developer.apple.com/documentation/foundation/date/relativeformatstyle/locale(_:))

# locale(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Modifies the relative date format style to use the specified locale.

## Declaration

```swift
func locale(_ locale: Locale) -> Date.RelativeFormatStyle
```

## Parameters

- `locale`: The locale to use when formatting relative dates.

<a id="return-value"></a>

## Return Value

A relative date format style with the provided locale.

## See Also

### Modifying a Relative Date Format Style

- [presentation](presentation-swift.property.md): Specifies the style to use when describing a relative date, such as “1 day ago” or “yesterday”.
- [unitsStyle](unitsstyle-swift.property.md): The style to use when formatting the quantity or the name of the unit, such as “1 day ago” or “one day ago”.
- [calendar](calendar.md): The calendar to use when formatting relative dates.
- [capitalizationContext](capitalizationcontext.md): The capitalization context to use when formatting the relative dates.
- [locale](locale.md): The locale to use when formatting the relative date.
