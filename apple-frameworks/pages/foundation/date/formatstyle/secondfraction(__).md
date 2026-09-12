> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/formatstyle/secondfraction(_:)](https://developer.apple.com/documentation/foundation/date/formatstyle/secondfraction(_:))

# secondFraction(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Modifies the date format style to use the specified second fraction format style.

## Declaration

```swift
func secondFraction(_ format: Date.FormatStyle.Symbol.SecondFraction) -> Date.FormatStyle
```

## Parameters

- `format`: The second fraction format style applied to the date format style.

<a id="return-value"></a>

## Return Value

A date format style modified to include the specified second fraction style.

<a id="Discussion"></a>

## Discussion

Static methods that return [Date.FormatStyle.Symbol.SecondFraction](symbol/secondfraction.md) objects include [fractional(\_:)](symbol/secondfraction/fractional%28__%29.md) and [milliseconds(\_:)](symbol/secondfraction/milliseconds%28__%29.md).

This example shows a variety of [Date.FormatStyle.Symbol.SecondFraction](symbol/secondfraction.md) format styles applied to a date:

```swift
let meetingDate = Date() // Feb 9, 2021 at 3:05:41.827 PM
meetingDate.formatted(Date.FormatStyle().secondFraction(.fractional(3))) // 827
meetingDate.formatted(Date.FormatStyle().secondFraction(.fractional(1))) // 8
meetingDate.formatted(Date.FormatStyle().secondFraction(.milliseconds(4))) // 11122827
```

For more information about formatting dates, see [Date.FormatStyle](../formatstyle.md).

## See Also

### Specifying the Time Format

- [hour(\_:)](hour%28__%29.md): Modifies the date format style to use the specified hour format style.
- [minute(\_:)](minute%28__%29.md): Modifies the date format style to use the specified minute format style.
- [second(\_:)](second%28__%29.md): Modifies the date format style to use the specified second format style.
- [timeZone(\_:)](timezone%28__%29.md): Modifies the date format style to use the specified time zone format style.
- [Date.FormatStyle.TimeStyle](timestyle.md): Type that defines time styles varied in length or components included.
