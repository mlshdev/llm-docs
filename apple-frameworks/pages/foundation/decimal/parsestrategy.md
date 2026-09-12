> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/decimal/parsestrategy](https://developer.apple.com/documentation/foundation/decimal/parsestrategy)

# Decimal.ParseStrategy

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A parse strategy for creating decimal values from formatted strings.

## Declaration

```swift
struct ParseStrategy<Format> where Format : FormatStyle, Format.FormatInput == Decimal
```

<a id="overview"></a>

## Overview

Create an explicit [Decimal.ParseStrategy](parsestrategy.md) to parse mulitple strings according to the same parse strategy. In the following example, `usCurrencyStrategy` is a [Decimal.ParseStrategy](parsestrategy.md) that uses US dollars and the `en_US` locale’s conventions for number formatting. The example then uses this strategy to parse an array of strings, some of which represent valid US currency values.

```swift
let usCurrencyStrategy: Decimal.ParseStrategy =
Decimal.FormatStyle.Currency(code: "USD",
                             locale: Locale(identifier: "en_US"))
.parseStrategy
let currencyValues = ["$100.11", "$1,000.22", "$10,000.33", "€100.44"]
let parsedValues = currencyValues.map { try? usCurrencyStrategy.parse($0) } // [Optional(100.11), Optional(1000.22), Optional(10000.33), nil]
```

You don’t need to instantiate a parse strategy variable to parse a single string. Instead, use the [init(\_:format:lenient:)](init%28__format_lenient_%29-3u6o6.md) initializer, which takes a source [String](https://developer.apple.com/documentation/swift/string) and a `format` parameter to parse the string according to the provided [Decimal.FormatStyle](formatstyle.md). The following example parses a string that represents a currency value in US dollars.

```swift
let formattedUSDollars = "$1,234.56"
let parsedUSDollars = try? Decimal(formattedUSDollars, format: .currency(code: "USD")
    .locale(Locale(identifier: "en_US"))) // 1234.56
```

Decimal also has an [init(\_:strategy:)](init%28__strategy_%29.md) initializer, if it’s more convenient to pass a [Decimal.ParseStrategy](parsestrategy.md) instance rather than implicitly derive a strategy from a [Decimal.FormatStyle](formatstyle.md).

## Topics

### Creating a decimal parse strategy

- [init(format:lenient:)](parsestrategy/init%28format_lenient_%29-46ix2.md): Conforms when `Format` is `Decimal.FormatStyle`. Creates a parse strategy instance using the specified decimal format style.
- [init(format:lenient:)](parsestrategy/init%28format_lenient_%29-22h06.md): Conforms when `Format` is `Decimal.FormatStyle.Currency`. Creates a parse strategy instance using the specified decimal currency format style.
- [init(format:lenient:)](parsestrategy/init%28format_lenient_%29-36ja3.md): Conforms when `Format` is `Decimal.FormatStyle.Percent`. Creates a parse strategy instance using the specified decimal percentage format style.

### Parsing strings

- [parse(\_:)](parsestrategy/parse%28__%29.md): Conforms when `Format` conforms to `FormatStyle` and `Format.FormatInput` is `Decimal`. Parses a decimal string in accordance with this strategy and returns the parsed value.

### Accessing strategy properties

- [formatStyle](parsestrategy/formatstyle.md): The format style this strategy uses when parsing strings.
- [lenient](parsestrategy/lenient.md): A Boolean value that indicates whether parsing allows any discrepencies in the expected format.

### Default Implementations

- [ParseStrategy Implementations](parsestrategy/parsestrategy-implementations.md)

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [ParseStrategy](../parsestrategy.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Data parsing in Swift

- [ParseableFormatStyle](../parseableformatstyle.md): A type that can convert a given input data type into a representation in an output type.
- [ParseStrategy](../parsestrategy.md): A type that parses an input representation, such as a formatted string, into a provided data type.
- [IntegerParseStrategy](../integerparsestrategy.md): A parse strategy for creating integer values from formatted strings.
- [FloatingPointParseStrategy](../floatingpointparsestrategy.md): A parse strategy for creating floating-point values from formatted strings.
