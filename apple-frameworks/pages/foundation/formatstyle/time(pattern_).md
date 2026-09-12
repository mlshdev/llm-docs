> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/formatstyle/time(pattern:)](https://developer.apple.com/documentation/foundation/formatstyle/time(pattern:))

# time(pattern:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a style for formatting a duration using a provided pattern.

## Declaration

```swift
static func time(pattern: Duration.TimeFormatStyle.Pattern) -> Self
```

## Parameters

- `pattern`: A [Duration.TimeFormatStyle.Pattern](https://developer.apple.com/documentation/swift/duration/timeformatstyle/pattern-swift.struct) that specifies the units to include in the displayed string and the behavior of the units.

<a id="return-value"></a>

## Return Value

A duration time format style customized with the specified pattern.

<a id="Discussion"></a>

## Discussion

Use the dot-notation form of this type method when the call point allows the use of [Duration.TimeFormatStyle](https://developer.apple.com/documentation/swift/duration/timeformatstyle). You typically do this when calling the [formatted(\_:)](https://developer.apple.com/documentation/swift/duration/formatted%28_:%29) method of [Duration](https://developer.apple.com/documentation/swift/duration).

The following example creates a duration to represent 1 hour, 10 minutes, 32 seconds, and 400 milliseconds. It then uses [time(pattern:)](time%28pattern_%29.md) to customize a [Duration.TimeFormatStyle](https://developer.apple.com/documentation/swift/duration/timeformatstyle) to show hours, minutes, and seconds, padding the hours part to two digits and limiting the fractional seconds to two digits. When used with the [formatted(\_:)](https://developer.apple.com/documentation/swift/duration/formatted%28_:%29) method, the resulting string is `01:10:32.40`.

```swift
let duration = Duration.seconds(70 * 60 + 32) + Duration.milliseconds(400)
let format = duration.formatted(
    .time(pattern: .hourMinuteSecond(padHourToLength: 2,
                                     fractionalSecondsLength: 2)))
// format == "01:10:32.40"
```

## See Also

### Applying duration styles

- [timeDuration](timeduration.md): Conforms when `Self` is `Date.ComponentsFormatStyle`. A style for formatting a duration expressed as a range of dates.
- [Date.ComponentsFormatStyle](../date/componentsformatstyle.md): A style for formatting a date interval in terms of specific date components.
- [units(allowed:width:maximumUnitCount:zeroValueUnits:valueLength:fractionalPart:)](units%28allowed_width_maximumunitcount_zerovalueunits_valuelength_fractionalpart_%29.md): Conforms when `Self` is `Duration.UnitsFormatStyle`. Returns a style for formatting a duration that uses the specified units.
- [units(allowed:width:maximumUnitCount:zeroValueUnits:valueLengthLimits:fractionalPart:)](units%28allowed_width_maximumunitcount_zerovalueunits_valuelengthlimits_fractionalpart_%29.md): Conforms when `Self` is `Duration.UnitsFormatStyle`. Returns a style for formatting a duration range that uses the specified units, with padding/truncating behavior defined as a range.
