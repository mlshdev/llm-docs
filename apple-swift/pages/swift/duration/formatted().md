> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/duration/formatted()](https://developer.apple.com/documentation/swift/duration/formatted())

# formatted()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Formats the string using a localized hour-minute-second time pattern.

## Declaration

```swift
func formatted() -> String
```

<a id="return-value"></a>

## Return Value

A localized formatted string that describes the duration, such as `1:30:56` for a duration of 1 hour, 30 minutes, and 56 seconds in the U.S. English locale. In the Finnish locale, this returns `1.30.56`.

<a id="discussion"></a>

## Discussion

The following example shows the effect of applying the default formatting to a duration of two seconds:

```swift
let duration = Duration.seconds(2)
let formattedDuration = duration.formatted() // "0:00:02"
```

This method uses a default [Duration.TimeFormatStyle](timeformatstyle.md). To modify the formatting, customize a [Duration.TimeFormatStyle](timeformatstyle.md) or [Duration.UnitsFormatStyle](unitsformatstyle.md), then call [formatted(\_:)](formatted%28__%29.md) on the duration, passing in the style. You can also call `format(_:)` on the style, passing in a duration.

## See Also

### Formatting a duration

- [formatted(\_:)](formatted%28__%29.md): Formats the duration, using the provided format style.
- [Duration.TimeFormatStyle](timeformatstyle.md): A format style that shows durations in a compact, localized format with separators.
- [Duration.UnitsFormatStyle](unitsformatstyle.md): A format style that shows durations with localized labeled components
