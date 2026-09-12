> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/intervalformatstyle/locale](https://developer.apple.com/documentation/foundation/date/intervalformatstyle/locale)

# locale

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The locale for formatting the date and time interval components.

## Declaration

```swift
var locale: Locale
```

<a id="Discussion"></a>

## Discussion

The default value is [autoupdatingCurrent](../../nslocale/autoupdatingcurrent.md). If you set this property to `nil`, the formatter resets to use `autoupdatingCurrent.`

## See Also

### Specifying Date Interval Format Styles

- [timeZone(\_:)](timezone%28__%29.md): Modifies the date interval format style to use the specified time zone format.
- [locale(\_:)](locale%28__%29.md): Modifies the date interval format style to use the specified locale.
- [calendar](calendar.md): The calendar for formatting the date interval.
- [timeZone](timezone.md): The time zone for formatting the date interval components.
