> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/parsestrategy](https://developer.apple.com/documentation/foundation/parsestrategy)

# ParseStrategy

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A type that parses an input representation, such as a formatted string, into a provided data type.

## Declaration

```swift
protocol ParseStrategy : Decodable, Encodable, Hashable
```

<a id="overview"></a>

## Overview

A [ParseStrategy](parsestrategy.md) allows you to convert a formatted representation into a data type, using one of two approaches:

- Initialize the data type by calling an initializer of that type that takes a formatted instance and a parse strategy as parameters. For example, you can create a [Decimal](decimal.md) from a formatted string with the initializer [init(\_:format:lenient:)](decimal/init%28__format_lenient_%29-6fk71.md).
- Create a parse strategy and call its [parse(\_:)](parsestrategy/parse%28__%29.md) method on one or more formatted instances.

[ParseStrategy](parsestrategy.md) is closely related to [FormatStyle](formatstyle.md), which provides the opposite conversion: from data type to formatted representation. To use a parse strategy, you create a [FormatStyle](formatstyle.md) to define the representation you expect, then access the style’s `parseStrategy` property to get a strategy instance.

The following example creates a [Decimal.FormatStyle.Currency](decimal/formatstyle/currency.md) format style that uses US dollars and US English number-formatting conventions. It then creates a [Decimal](decimal.md) instance by providing a formatted string to parse and the format style’s [parseStrategy](decimal/formatstyle/currency/parsestrategy.md).

```swift
let style = Decimal.FormatStyle.Currency(code: "USD",
                                         locale: Locale(identifier: "en_US"))
let parsed = try? Decimal("$12,345.67",
                           strategy: style.parseStrategy) // 12345.67
```

## Topics

### Performing parsing

- [parse(\_:)](parsestrategy/parse%28__%29.md): Parses a value, using this strategy.

### Commonly-used parsers

Use the static accessors in this section to get parse strategies for common input types like dates and URLs.

- [fixed(format:timeZone:locale:)](parsestrategy/fixed%28format_timezone_locale_%29.md): A fixed-format date parse strategy.
- [url](parsestrategy/url.md): Conforms when `Self` is `URL.ParseStrategy`. A parse strategy for URLs.
- [name](parsestrategy/name.md): Conforms when `Self` is `PersonNameComponents.ParseStrategy`. A parse strategy for person name components.

### Commonly-used format styles

- [dateTime](parsestrategy/datetime.md): Conforms when `Self` is `Date.FormatStyle`. A default format style for formatting dates.

### Supporting types

- [ParseInput](parsestrategy/parseinput.md): The input type parsed by this strategy.
- [ParseOutput](parsestrategy/parseoutput.md): The output type returned by this strategy.

### Type Properties

- [http](parsestrategy/http-5mpzc.md): Conforms when `Self` is `Date.HTTPFormatStyle`.
- [http](parsestrategy/http-6hyig.md): Conforms when `Self` is `DateComponents.HTTPFormatStyle`.
- [iso8601](parsestrategy/iso8601-69scf.md): Conforms when `Self` is `DateComponents.ISO8601FormatStyle`.
- [iso8601](parsestrategy/iso8601-8z0au.md): Conforms when `Self` is `Date.ISO8601FormatStyle`. A style for formatting a date in accordance with the ISO-8601 standard.

## Relationships

### Inherits From

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

### Conforming Types

- [Date.FormatStyle](date/formatstyle.md)
- [Date.HTTPFormatStyle](date/httpformatstyle.md)
- [Date.ISO8601FormatStyle](date/iso8601formatstyle.md)
- [Date.ParseStrategy](date/parsestrategy.md)
- [DateComponents.HTTPFormatStyle](datecomponents/httpformatstyle.md)
- [DateComponents.ISO8601FormatStyle](datecomponents/iso8601formatstyle.md)
- [Decimal.ParseStrategy](decimal/parsestrategy.md)
- [FloatingPointParseStrategy](floatingpointparsestrategy.md)
- [IntegerParseStrategy](integerparsestrategy.md)
- [PersonNameComponents.ParseStrategy](personnamecomponents/parsestrategy.md)
- [URL.ParseStrategy](url/parsestrategy.md)

## See Also

### Data parsing in Swift

- [ParseableFormatStyle](parseableformatstyle.md): A type that can convert a given input data type into a representation in an output type.
- [IntegerParseStrategy](integerparsestrategy.md): Conforms when `Format` conforms to `FormatStyle` and `Format.FormatInput` conforms to `BinaryInteger`. A parse strategy for creating integer values from formatted strings.
- [FloatingPointParseStrategy](floatingpointparsestrategy.md): Conforms when `Format` conforms to `FormatStyle` and `Format.FormatInput` conforms to `BinaryFloatingPoint`. A parse strategy for creating floating-point values from formatted strings.
- [Decimal.ParseStrategy](decimal/parsestrategy.md): A parse strategy for creating decimal values from formatted strings.
