> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/formatstyle/second(_:)](https://developer.apple.com/documentation/foundation/date/formatstyle/second(_:))

# second(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Modifies the date format style to use the specified second format style.

## Declaration

```swift
func second(_ format: Date.FormatStyle.Symbol.Second = .defaultDigits) -> Date.FormatStyle
```

## Parameters

- `format`: The second format style applied to the date format style.

<a id="return-value"></a>

## Return Value

A date format style modified to include the specified second style.

<a id="Discussion"></a>

## Discussion

Values of [Date.FormatStyle.Symbol.Second](symbol/second.md) are [defaultDigits](symbol/second/defaultdigits.md) and [twoDigits](symbol/second/twodigits.md).

This example shows a variety of [Date.FormatStyle.Symbol.Second](symbol/second.md) format styles applied to a date:

```swift
let meetingDate = Date() // Feb 9, 2021 at 3:05 PM
meetingDate.formatted(Date.FormatStyle().second(.defaultDigits)) // 5
meetingDate.formatted(Date.FormatStyle().second(.twoDigits)) // 05
meetingDate.formatted(Date.FormatStyle().second()) // 5
```

If you don’t provide a format, the [defaultDigits](symbol/second/defaultdigits.md) static variable is the default format.

For more information about formatting dates, see [Date.FormatStyle](../formatstyle.md).

## See Also

### Specifying the Time Format

- [hour(\_:)](hour%28__%29.md): Modifies the date format style to use the specified hour format style.
- [minute(\_:)](minute%28__%29.md): Modifies the date format style to use the specified minute format style.
- [secondFraction(\_:)](secondfraction%28__%29.md): Modifies the date format style to use the specified second fraction format style.
- [timeZone(\_:)](timezone%28__%29.md): Modifies the date format style to use the specified time zone format style.
- [Date.FormatStyle.TimeStyle](timestyle.md): Type that defines time styles varied in length or components included.
