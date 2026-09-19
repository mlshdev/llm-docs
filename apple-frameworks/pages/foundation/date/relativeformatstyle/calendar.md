> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/date/relativeformatstyle/calendar

# calendar

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The calendar to use when formatting relative dates.

## Declaration

```swift
var calendar: Calendar
```

<a id="Discussion"></a>

## Discussion

Defaults to [autoupdatingCurrent](../../nscalendar/autoupdatingcurrent.md). If you set this property to `nil`, the format style resets to using [autoupdatingCurrent](../../nscalendar/autoupdatingcurrent.md).

## See Also

### Modifying a Relative Date Format Style

- [presentation](presentation-swift.property.md): Specifies the style to use when describing a relative date, such as “1 day ago” or “yesterday”.
- [unitsStyle](unitsstyle-swift.property.md): The style to use when formatting the quantity or the name of the unit, such as “1 day ago” or “one day ago”.
- [capitalizationContext](capitalizationcontext.md): The capitalization context to use when formatting the relative dates.
- [locale](locale.md): The locale to use when formatting the relative date.
- [locale(\_:)](locale%28__%29.md): Modifies the relative date format style to use the specified locale.
