> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/integerformatstyle/currency](https://developer.apple.com/documentation/foundation/integerformatstyle/currency)

# IntegerFormatStyle.Currency

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A format style that converts between integer currency values and their textual representations.

## Declaration

```swift
struct Currency
```

## Topics

### Creating an integer currency format style

- [init(code:locale:)](currency/init%28code_locale_%29.md): Creates an integer currency format style that uses the given currency code and locale.

### Customizing style behavior

- [decimalSeparator(strategy:)](currency/decimalseparator%28strategy_%29.md): Modifies the format style to use the specified decimal separator display strategy.
- [grouping(\_:)](currency/grouping%28__%29.md): Modifies the format style to use the specified grouping.
- [locale(\_:)](currency/locale%28__%29.md): Conforms when `Value` conforms to `BinaryInteger`. Modifies the format style to use the specified locale.
- [precision(\_:)](currency/precision%28__%29.md): Modifies the format style to use the specified precision.
- [presentation(\_:)](currency/presentation%28__%29.md): Modifies the format style to use the specified presentation.
- [rounded(rule:increment:)](currency/rounded%28rule_increment_%29.md): Modifies the format style to use the specified rounding rule and increment.
- [scale(\_:)](currency/scale%28__%29.md): Modifies the format style to use the specified scale.
- [sign(strategy:)](currency/sign%28strategy_%29.md): Modifies the format style to use the specified sign display strategy.
- [IntegerFormatStyle.Currency.Configuration](currency/configuration.md): The type the format style uses for configuration settings.
- [CurrencyFormatStyleConfiguration](../currencyformatstyleconfiguration.md): Configuration settings for formatting currency values.

### Formatting integer currency values

- [format(\_:)](currency/format%28__%29.md): Conforms when `Value` conforms to `BinaryInteger`. Formats an integer, using this style.

### Creating attributed strings

- [attributed](currency/attributed.md): An attributed format style based on the integer currency format style.
- [IntegerFormatStyle.Attributed](attributed-swift.struct.md): Conforms when `Value` conforms to `BinaryInteger`. A format style that converts integers into attributed strings.

### Accessing style properties

- [currencyCode](currency/currencycode.md): The currency code this format style uses.
- [locale](currency/locale.md): The locale of the format style.

### Applying measurement styles

- [Measurement.FormatStyle](../measurement/formatstyle.md): Conforms when `UnitType` inherits `Dimension`. A type that provides localized representations of measurements.

### Parsing integer currency values

- [parseStrategy](currency/parsestrategy.md): Conforms when `Value` conforms to `BinaryInteger`. The parse strategy that this format style uses.

### Locating currency values in regular expressions

- [consuming(\_:startingAt:in:)](currency/consuming%28__startingat_in_%29.md): Conforms when `Value` conforms to `BinaryInteger`. Process the input string within the specified bounds, beginning at the given index, and return the end position (upper bound) of the match and the produced output.

### Instance Methods

- [notation(\_:)](currency/notation%28__%29.md): Modifies the format style to use the specified notation.

### Default Implementations

- [CustomConsumingRegexComponent Implementations](currency/customconsumingregexcomponent-implementations.md)
- [FormatStyle Implementations](currency/formatstyle-implementations.md)
- [ParseableFormatStyle Implementations](currency/parseableformatstyle-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomConsumingRegexComponent](https://developer.apple.com/documentation/swift/customconsumingregexcomponent)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [FormatStyle](../formatstyle.md)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [ParseableFormatStyle](../parseableformatstyle.md)
- [RegexComponent](https://developer.apple.com/documentation/swift/regexcomponent)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
