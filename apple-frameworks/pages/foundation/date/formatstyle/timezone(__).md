> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/formatstyle/timezone(_:)](https://developer.apple.com/documentation/foundation/date/formatstyle/timezone(_:))

# timeZone(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Modifies the date format style to use the specified time zone format style.

## Declaration

```swift
func timeZone(_ format: Date.FormatStyle.Symbol.TimeZone = .specificName(.short)) -> Date.FormatStyle
```

## Parameters

- `format`: The time zone format style applied to the date format style.

<a id="return-value"></a>

## Return Value

A date format style modified to include the specified time zone format style.

<a id="Discussion"></a>

## Discussion

Values of [Date.FormatStyle.Symbol.TimeZone](symbol/timezone.md) are [exemplarLocation](symbol/timezone/exemplarlocation.md) and [genericLocation](symbol/timezone/genericlocation.md).

Static methods that return [Date.FormatStyle.Symbol.TimeZone](symbol/timezone.md) objects include [genericName(\_:)](symbol/timezone/genericname%28__%29.md), [identifier(\_:)](symbol/timezone/identifier%28__%29.md),  [iso8601(\_:)](symbol/timezone/iso8601%28__%29.md), [localizedGMT(\_:)](symbol/timezone/localizedgmt%28__%29.md), and [specificName(\_:)](symbol/timezone/specificname%28__%29.md).

## See Also

### Specifying the Time Format

- [hour(\_:)](hour%28__%29.md): Modifies the date format style to use the specified hour format style.
- [minute(\_:)](minute%28__%29.md): Modifies the date format style to use the specified minute format style.
- [second(\_:)](second%28__%29.md): Modifies the date format style to use the specified second format style.
- [secondFraction(\_:)](secondfraction%28__%29.md): Modifies the date format style to use the specified second fraction format style.
- [Date.FormatStyle.TimeStyle](timestyle.md): Type that defines time styles varied in length or components included.
