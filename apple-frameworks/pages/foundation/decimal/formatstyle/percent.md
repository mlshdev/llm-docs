> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/decimal/formatstyle/percent](https://developer.apple.com/documentation/foundation/decimal/formatstyle/percent)

# Decimal.FormatStyle.Percent

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A format style that converts between decimal percentage values and their textual representations.

## Declaration

```swift
struct Percent
```

## Topics

### Creating a decimal percent format style

- [init(locale:)](percent/init%28locale_%29.md): Creates a decimal percent format style that uses the given locale.

### Customizing style behavior

- [decimalSeparator(strategy:)](percent/decimalseparator%28strategy_%29.md): Modifies the format style to use the specified decimal separator display strategy.
- [grouping(\_:)](percent/grouping%28__%29.md): Modifies the format style to use the specified grouping.
- [locale(\_:)](percent/locale%28__%29.md): Modifies the format style to use the specified locale.
- [notation(\_:)](percent/notation%28__%29.md): Modifies the format style to use the specified notation.
- [precision(\_:)](percent/precision%28__%29.md): Modifies the format style to use the specified precision.
- [rounded(rule:increment:)](percent/rounded%28rule_increment_%29.md): Modifies the format style to use the specified rounding rule and increment.
- [scale(\_:)](percent/scale%28__%29.md): Modifies the format style to use the specified scale.
- [sign(strategy:)](percent/sign%28strategy_%29.md): Modifies the format style to use the specified sign display strategy.
- [Decimal.FormatStyle.Percent.Configuration](percent/configuration.md): The type the format style uses for configuration settings.
- [NumberFormatStyleConfiguration](../../numberformatstyleconfiguration.md): Configuration settings for formatting numbers of different types.

### Formatting decimal percent values

- [format(\_:)](percent/format%28__%29.md): Formats an decimal, using this style.

### Creating attributed strings

- [attributed](percent/attributed.md): An attributed format style based on the decimal percent format style.
- [Decimal.FormatStyle.Attributed](attributed-swift.struct.md): A format style that converts integers into attributed strings.

### Accessing style properties

- [locale](percent/locale.md): The locale of the format style.

### Parsing decimal percent values

- [parseStrategy](percent/parsestrategy.md): The parse strategy that this format style uses.

### Locating decimal values in regular expressions

- [consuming(\_:startingAt:in:)](percent/consuming%28__startingat_in_%29.md): Process the input string within the specified bounds, beginning at the given index, and return the end position (upper bound) of the match and the produced output.

### Default Implementations

- [CustomConsumingRegexComponent Implementations](percent/customconsumingregexcomponent-implementations.md)
- [ParseableFormatStyle Implementations](percent/parseableformatstyle-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomConsumingRegexComponent](https://developer.apple.com/documentation/swift/customconsumingregexcomponent)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [FormatStyle](../../formatstyle.md)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [ParseableFormatStyle](../../parseableformatstyle.md)
- [RegexComponent](https://developer.apple.com/documentation/swift/regexcomponent)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting types

- [Decimal.FormatStyle.Currency](currency.md): A format style that converts between decimal currency values and their textual representations.
