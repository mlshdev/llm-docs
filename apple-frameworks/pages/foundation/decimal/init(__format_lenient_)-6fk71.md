> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/decimal/init(_:format:lenient:)-6fk71](https://developer.apple.com/documentation/foundation/decimal/init(_:format:lenient:)-6fk71)

# init(\_:format:lenient:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates and initializes a decimal by parsing a string according to the provided format style.

## Declaration

```swift
init(_ value: String, format: Decimal.FormatStyle, lenient: Bool = true) throws
```

## Parameters

- `value`: A string that contains a formatted decimal value.
- `format`: A format style that describes formatting conventions used by the string. The initializer uses this format’s [Decimal.ParseStrategy](parsestrategy.md) to parse the string.
- `lenient`: A Boolean value that indicates whether the parse strategy should permit some discrepancies when parsing. Defaults to `true`.

<a id="Discussion"></a>

## Discussion

This initializer throws an error if the format style fails to parse the string into a decimal value.

## See Also

### Creating a decimal by parsing a string

- [init(\_:format:lenient:)](init%28__format_lenient_%29-8t5o2.md): Creates and initializes a decimal by parsing a string according to the provided currency format style.
- [init(\_:format:lenient:)](init%28__format_lenient_%29-3u6o6.md): Creates and initializes a percentage decimal by parsing a string according to the provided format style.
- [init(string:locale:)](init%28string_locale_%29.md): Creates and initializes a decimal by parsing a string according to the provided locale’s conventions.
- [init(\_:strategy:)](init%28__strategy_%29.md): Creates and initializes a decimal by parsing an arbitrary type according to the provided parse strategy.
- [Decimal.ParseStrategy](parsestrategy.md): A parse strategy for creating decimal values from formatted strings.
