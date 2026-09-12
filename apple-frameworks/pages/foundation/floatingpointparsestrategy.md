> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/floatingpointparsestrategy](https://developer.apple.com/documentation/foundation/floatingpointparsestrategy)

# FloatingPointParseStrategy

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A parse strategy for creating floating-point values from formatted strings.

## Declaration

```swift
struct FloatingPointParseStrategy<Format> where Format : FormatStyle, Format.FormatInput : BinaryFloatingPoint
```

<a id="overview"></a>

## Overview

Create an explicit [FloatingPointParseStrategy](floatingpointparsestrategy.md) to parse multiple strings according to the same parse strategy. In the following example, `usCurrencyStrategy` is a [FloatingPointParseStrategy](floatingpointparsestrategy.md) that uses US dollars and the `en_US` locale’s conventions for number formatting. The example then uses this strategy to parse an array of strings, some of which represent valid US currency values.

```swift
let usCurrencyStrategy: FloatingPointParseStrategy =
FloatingPointFormatStyle<Double>.Currency(code: "USD",
                                          locale: Locale(identifier: "en_US"))
    .parseStrategy
let currencyValues = ["$100.11", "$1,000.22", "$10,000.33", "€100.44"]
let parsedValues = currencyValues.map { try? usCurrencyStrategy.parse($0) } // [Optional(100.11), Optional(1000.22), Optional(10000.33), nil]
```

You don’t need to instantiate a parse strategy variable to parse a single string. Instead, use the [BinaryFloatingPoint](https://developer.apple.com/documentation/swift/binaryfloatingpoint) initializers that take a source [String](https://developer.apple.com/documentation/swift/string) and a `format` parameter to parse the string according to the provided [FormatStyle](formatstyle.md). The following example parses a string that represents a currency value in US dollars.

```swift
let formattedUSDollars = "$1,234.56"
let parsedUSDollars = try? Double(formattedUSDollars, format: .currency(code: "USD")
    .locale(Locale(identifier: "en_US"))) // 1234.56
```

## Topics

### Creating a floating-point parse strategy

- [init(format:lenient:)](floatingpointparsestrategy/init%28format_lenient_%29-5nxey.md): Conforms when `Format` conforms to `FormatStyle` and `Format.FormatInput` conforms to `BinaryFloatingPoint`. Creates a parse strategy instance using the specified floating-point format style.
- [init(format:lenient:)](floatingpointparsestrategy/init%28format_lenient_%29-9g6wm.md): Conforms when `Format` conforms to `FormatStyle` and `Format.FormatInput` conforms to `BinaryFloatingPoint`. Creates a parse strategy instance using the specified floating-point currency format style.
- [init(format:lenient:)](floatingpointparsestrategy/init%28format_lenient_%29-1nldg.md): Conforms when `Format` conforms to `FormatStyle` and `Format.FormatInput` conforms to `BinaryFloatingPoint`. Creates a parse strategy instance using the specified floating-point percentage format style.

### Parsing strings

- [parse(\_:)](floatingpointparsestrategy/parse%28__%29.md): Conforms when `Format` conforms to `FormatStyle` and `Format.FormatInput` conforms to `BinaryFloatingPoint`. Parses a floating-point string in accordance with this strategy and returns the parsed value.

### Accessing strategy properties

- [formatStyle](floatingpointparsestrategy/formatstyle.md): The format style this strategy uses when parsing strings.
- [lenient](floatingpointparsestrategy/lenient.md): A Boolean value that indicates whether parsing allows any discrepencies in the expected format.

### Default Implementations

- [ParseStrategy Implementations](floatingpointparsestrategy/parsestrategy-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [ParseStrategy](parsestrategy.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Data parsing in Swift

- [ParseableFormatStyle](parseableformatstyle.md): A type that can convert a given input data type into a representation in an output type.
- [ParseStrategy](parsestrategy.md): Conforms when `Format` conforms to `FormatStyle` and `Format.FormatInput` conforms to `BinaryFloatingPoint`. A type that parses an input representation, such as a formatted string, into a provided data type.
- [IntegerParseStrategy](integerparsestrategy.md): A parse strategy for creating integer values from formatted strings.
- [Decimal.ParseStrategy](decimal/parsestrategy.md): A parse strategy for creating decimal values from formatted strings.
