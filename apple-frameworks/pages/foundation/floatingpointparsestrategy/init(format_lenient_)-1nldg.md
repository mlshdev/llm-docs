> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/floatingpointparsestrategy/init(format:lenient:)-1nldg](https://developer.apple.com/documentation/foundation/floatingpointparsestrategy/init(format:lenient:)-1nldg)

# init(format:lenient:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a parse strategy instance using the specified floating-point percentage format style.

## Declaration

```swift
init<Value>(format: Format, lenient: Bool = true) where Format == FloatingPointFormatStyle<Value>.Percent, Value : BinaryFloatingPoint
```

## Parameters

- `format`: A configured [FloatingPointFormatStyle.Percent](../floatingpointformatstyle/percent.md) that describes the percent string format to parse.
- `lenient`: A Boolean value that indicates whether the parse strategy should permit some discrepencies when parsing. Defaults to `true`.

## See Also

### Creating a floating-point parse strategy

- [init(format:lenient:)](init%28format_lenient_%29-5nxey.md): Conforms when `Format` conforms to `FormatStyle` and `Format.FormatInput` conforms to `BinaryFloatingPoint`. Creates a parse strategy instance using the specified floating-point format style.
- [init(format:lenient:)](init%28format_lenient_%29-9g6wm.md): Conforms when `Format` conforms to `FormatStyle` and `Format.FormatInput` conforms to `BinaryFloatingPoint`. Creates a parse strategy instance using the specified floating-point currency format style.
