> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/parseableformatstyle](https://developer.apple.com/documentation/foundation/parseableformatstyle)

# ParseableFormatStyle

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A type that can convert a given input data type into a representation in an output type.

## Declaration

```swift
protocol ParseableFormatStyle : FormatStyle
```

## Topics

### Declaring Parse Strategy

- [parseStrategy](parseableformatstyle/parsestrategy.md): A `ParseStrategy` that can be used to parse this `FormatStyle`’s output
- [Strategy](parseableformatstyle/strategy.md)

### Type Properties

- [http](parseableformatstyle/http-6qda5.md): Conforms when `Self` is `Date.HTTPFormatStyle`.
- [http](parseableformatstyle/http-yfpc.md): Conforms when `Self` is `DateComponents.HTTPFormatStyle`.
- [iso8601](parseableformatstyle/iso8601-41vzo.md): Conforms when `Self` is `Date.ISO8601FormatStyle`.
- [iso8601](parseableformatstyle/iso8601-55wjm.md): Conforms when `Self` is `DateComponents.ISO8601FormatStyle`.

### Type Methods

- [currency(code:)](parseableformatstyle/currency%28code_%29.md): Conforms when `Self` is `Decimal.FormatStyle.Currency`.

### Default Implementations

- [FormatStyle Implementations](parseableformatstyle/formatstyle-implementations.md)

## Relationships

### Inherits From

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [FormatStyle](formatstyle.md)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

### Conforming Types

- [Date.FormatStyle](date/formatstyle.md)
- [Date.HTTPFormatStyle](date/httpformatstyle.md)
- [Date.ISO8601FormatStyle](date/iso8601formatstyle.md)
- [Date.VerbatimFormatStyle](date/verbatimformatstyle.md)
- [DateComponents.HTTPFormatStyle](datecomponents/httpformatstyle.md)
- [DateComponents.ISO8601FormatStyle](datecomponents/iso8601formatstyle.md)
- [Decimal.FormatStyle](decimal/formatstyle.md)
- [Decimal.FormatStyle.Currency](decimal/formatstyle/currency.md)
- [Decimal.FormatStyle.Percent](decimal/formatstyle/percent.md)
- [FloatingPointFormatStyle](floatingpointformatstyle.md)
- [FloatingPointFormatStyle.Currency](floatingpointformatstyle/currency.md)
- [FloatingPointFormatStyle.Percent](floatingpointformatstyle/percent.md)
- [IntegerFormatStyle](integerformatstyle.md)
- [IntegerFormatStyle.Currency](integerformatstyle/currency.md)
- [IntegerFormatStyle.Percent](integerformatstyle/percent.md)
- [PersonNameComponents.FormatStyle](personnamecomponents/formatstyle.md)
- [URL.FormatStyle](url/formatstyle.md)

## See Also

### Data parsing in Swift

- [ParseStrategy](parsestrategy.md): A type that parses an input representation, such as a formatted string, into a provided data type.
- [IntegerParseStrategy](integerparsestrategy.md): A parse strategy for creating integer values from formatted strings.
- [FloatingPointParseStrategy](floatingpointparsestrategy.md): A parse strategy for creating floating-point values from formatted strings.
- [Decimal.ParseStrategy](decimal/parsestrategy.md): A parse strategy for creating decimal values from formatted strings.
