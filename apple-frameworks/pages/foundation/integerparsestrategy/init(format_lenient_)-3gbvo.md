> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/integerparsestrategy/init(format:lenient:)-3gbvo](https://developer.apple.com/documentation/foundation/integerparsestrategy/init(format:lenient:)-3gbvo)

# init(format:lenient:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a parse strategy instance using the specified integer percentage format style.

## Declaration

```swift
init<Value>(format: Format, lenient: Bool = true) where Format == IntegerFormatStyle<Value>.Percent, Value : BinaryInteger
```

## Parameters

- `format`: A configured [IntegerFormatStyle.Percent](../integerformatstyle/percent.md) that describes the percent string format to parse.
- `lenient`: A Boolean value that indicates whether the parse strategy should permit some discrepencies when parsing. Defaults to `true`.

## See Also

### Creating an integer parse strategy

- [init(format:lenient:)](init%28format_lenient_%29-124xn.md): Conforms when `Format` conforms to `FormatStyle` and `Format.FormatInput` conforms to `BinaryInteger`. Creates a parse strategy instance using the specified integer format style.
- [init(format:lenient:)](init%28format_lenient_%29-7tox3.md): Conforms when `Format` conforms to `FormatStyle` and `Format.FormatInput` conforms to `BinaryInteger`. Creates a parse strategy instance using the specified integer currency format style.
