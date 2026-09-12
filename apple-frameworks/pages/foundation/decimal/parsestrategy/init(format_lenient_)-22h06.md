> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/decimal/parsestrategy/init(format:lenient:)-22h06](https://developer.apple.com/documentation/foundation/decimal/parsestrategy/init(format:lenient:)-22h06)

# init(format:lenient:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a parse strategy instance using the specified decimal currency format style.

## Declaration

```swift
init(format: Format, lenient: Bool = true)
```

## Parameters

- `format`: A configured [Decimal.FormatStyle](../formatstyle.md) that describes the currency string format to parse.
- `lenient`: A Boolean value that indicates whether the parse strategy should permit some discrepencies when parsing. Defaults to `true`.

## See Also

### Creating a decimal parse strategy

- [init(format:lenient:)](init%28format_lenient_%29-46ix2.md): Conforms when `Format` is `Decimal.FormatStyle`. Creates a parse strategy instance using the specified decimal format style.
- [init(format:lenient:)](init%28format_lenient_%29-36ja3.md): Conforms when `Format` is `Decimal.FormatStyle.Percent`. Creates a parse strategy instance using the specified decimal percentage format style.
