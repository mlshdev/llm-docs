> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/relativeformatstyle/locale](https://developer.apple.com/documentation/foundation/date/relativeformatstyle/locale)

# locale

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The locale to use when formatting the relative date.

## Declaration

```swift
var locale: Locale
```

<a id="Discussion"></a>

## Discussion

The default value is [autoupdatingCurrent](../../nslocale/autoupdatingcurrent.md). If you set this property to `nil`, the format style resets to using [autoupdatingCurrent](../../nslocale/autoupdatingcurrent.md).

## See Also

### Modifying a Relative Date Format Style

- [presentation](presentation-swift.property.md): Specifies the style to use when describing a relative date, such as “1 day ago” or “yesterday”.
- [unitsStyle](unitsstyle-swift.property.md): The style to use when formatting the quantity or the name of the unit, such as “1 day ago” or “one day ago”.
- [calendar](calendar.md): The calendar to use when formatting relative dates.
- [capitalizationContext](capitalizationcontext.md): The capitalization context to use when formatting the relative dates.
- [locale(\_:)](locale%28__%29.md): Modifies the relative date format style to use the specified locale.
