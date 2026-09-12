> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/integerformatstyle](https://developer.apple.com/documentation/foundation/integerformatstyle)

# IntegerFormatStyle

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A structure that converts between integer values and their textual representations.

## Declaration

```swift
struct IntegerFormatStyle<Value> where Value : BinaryInteger
```

<a id="overview"></a>

## Overview

Instances of [IntegerFormatStyle](integerformatstyle.md) create localized, human-readable text from [BinaryInteger](https://developer.apple.com/documentation/swift/binaryinteger) numbers and parse string representations of numbers into instances of [BinaryInteger](https://developer.apple.com/documentation/swift/binaryinteger) types. All of the Swift standard library’s integer types, such as [Int](https://developer.apple.com/documentation/swift/int) and [UInt32](https://developer.apple.com/documentation/swift/uint32), conform to [BinaryInteger](https://developer.apple.com/documentation/swift/binaryinteger), and therefore work with this format style.

[IntegerFormatStyle](integerformatstyle.md) includes two nested types, [IntegerFormatStyle.Percent](integerformatstyle/percent.md) and [IntegerFormatStyle.Currency](integerformatstyle/currency.md), for working with percentages and currencies. Each format style includes a configuration that determines how it represents numeric values, for things like grouping, displaying signs, and variant presentations like scientific notation. [IntegerFormatStyle](integerformatstyle.md) and [IntegerFormatStyle.Percent](integerformatstyle/percent.md) include a [NumberFormatStyleConfiguration](numberformatstyleconfiguration.md), and [IntegerFormatStyle.Currency](integerformatstyle/currency.md) includes a [CurrencyFormatStyleConfiguration](currencyformatstyleconfiguration.md). You can customize numeric formatting for a style by adjusting its backing configuration. The system automatically caches unique configurations of a format style to enhance performance.

> **Note**

>  Foundation provides another format style type, [FloatingPointFormatStyle](floatingpointformatstyle.md), for working with numbers that conform to [BinaryFloatingPoint](https://developer.apple.com/documentation/swift/binaryfloatingpoint). For Foundation’s [Decimal](decimal.md) type, use [Decimal.FormatStyle](decimal/formatstyle.md).

<a id="Formatting-integers"></a>

### Formatting integers

Use the [formatted()](https://developer.apple.com/documentation/swift/binaryinteger/formatted%28%29) method to create a string representation of an integer using the default [IntegerFormatStyle](integerformatstyle.md) configuration.

```swift
let formattedDefault = 123456.formatted()
// formattedDefault is "123,456" in en_US locale.
// Other locales may use different separator and grouping behavior.
```

You can specify a format style by providing an argument to the [formatted(\_:)](https://developer.apple.com/documentation/swift/binaryinteger/formatted%28_:%29-73k3e) method. The following example shows the number `12345` represented in each of the available styles, in the `en_US` locale:

```swift
let number = 123456

let formattedNumber = number.formatted(.number)
// formattedNumber is "123,456".

let formattedPercent = number.formatted(.percent)
// formattedPercent is "123,456%".

let formattedCurrency = number.formatted(.currency(code: "USD"))
// formattedCurrency is "$123,456.00".
```

Each style provides methods for updating its numeric configuration, including the number of significant digits, grouping length, and more. You can specify a numeric configuration by calling as many of these methods as you need in any order you choose. The following example shows the same number with default and custom configurations:

```swift
let exampleNumber = 123456

let defaultFormatting = exampleNumber.formatted(.number)
// defaultFormatting is "125 000" for the "fr_FR" locale
// defaultFormatting is "125000" for the "jp_JP" locale
// defaultFormatting is "125,000" for the "en_US" locale

let customFormatting = exampleNumber.formatted(
    .number
    .grouping(.never)
    .sign(strategy: .always()))
// customFormatting is "+123456"
```

<a id="Creating-an-integer-format-style-instance"></a>

### Creating an integer format style instance

The previous examples use static factory methods like [number](formatstyle/number-7fxvo.md) to create format styles within the call to the [formatted(\_:)](https://developer.apple.com/documentation/swift/binaryinteger/formatted%28_:%29-73k3e) method. You can also create an [IntegerFormatStyle](integerformatstyle.md) instance and use it to repeatedly format different values with the [format(\_:)](integerformatstyle/format%28__%29.md) method:

```swift
let percentFormatStyle = IntegerFormatStyle<Int>.Percent()

percentFormatStyle.format(50) // "50%"
percentFormatStyle.format(85) // "85%"
percentFormatStyle.format(100) // "100%"
```

<a id="Parsing-integers"></a>

### Parsing integers

You can use [IntegerFormatStyle](integerformatstyle.md) to parse strings into integer values. You can define the format style within the type’s initializer or pass in a format style you create prior to calling the method, as shown here:

```swift
let price = try? Int("$123,456",
                     format: .currency(code: "USD")) // 123456

let priceFormatStyle = IntegerFormatStyle<Int>.Currency(code: "USD")
let salePrice = try? Int("$120,000",
                          format: priceFormatStyle) // 120000
```

<a id="Matching-regular-expressions"></a>

### Matching regular expressions

Along with parsing numeric values in strings, you can use the Swift regular expression domain-specific language to match and capture numeric substrings. The following example defines a currency format style to match and capture a currency value using US dollars and `en_US` numeric conventions. The rest of the regular expression ignores any characters prior to a `": "` sequence that precedes the currency substring.

```swift
import RegexBuilder

let source = "Payment due: $123,456"
let matcher = Regex {
    OneOrMore(.any)
    ": "
    Capture {
        One(.localizedIntegerCurrency(code: Locale.Currency("USD"),
                                      locale: Locale(identifier: "en_US")))
    }
}
let match = source.firstMatch(of: matcher)
let localizedInteger = match?.1 // 123456
```

## Topics

### Creating an integer format style

- [init(locale:)](integerformatstyle/init%28locale_%29.md): Creates an integer format style that uses the given locale.

### Formatting integer values

- [format(\_:)](integerformatstyle/format%28__%29.md): Conforms when `Value` conforms to `BinaryInteger`. Formats an integer, using this style.

### Customizing style behavior

- [decimalSeparator(strategy:)](integerformatstyle/decimalseparator%28strategy_%29.md): Modifies the format style to use the specified decimal separator display strategy.
- [grouping(\_:)](integerformatstyle/grouping%28__%29.md): Modifies the format style to use the specified grouping.
- [notation(\_:)](integerformatstyle/notation%28__%29.md): Modifies the format style to use the specified notation.
- [precision(\_:)](integerformatstyle/precision%28__%29.md): Modifies the format style to use the specified precision.
- [rounded(rule:increment:)](integerformatstyle/rounded%28rule_increment_%29.md): Modifies the format style to use the specified rounding rule and increment.
- [scale(\_:)](integerformatstyle/scale%28__%29.md): Modifies the format style to use the specified scale.
- [sign(strategy:)](integerformatstyle/sign%28strategy_%29.md): Modifies the format style to use the specified sign display strategy for displaying or omitting sign symbols.
- [IntegerFormatStyle.Configuration](integerformatstyle/configuration.md): The type the format style uses for configuration settings.
- [NumberFormatStyleConfiguration](numberformatstyleconfiguration.md): Configuration settings for formatting numbers of different types.

### Acessing style locale

- [locale](integerformatstyle/locale.md): The locale of the format style.

### Applying currency styles

- [IntegerFormatStyle.Currency](integerformatstyle/currency.md): Conforms when `Value` conforms to `BinaryInteger`. A format style that converts between integer currency values and their textual representations.

### Applying measurement styles

- [Measurement.FormatStyle](measurement/formatstyle.md): Conforms when `UnitType` inherits `Dimension`. A type that provides localized representations of measurements.

### Applying list styles

- [ListFormatStyle](listformatstyle.md): A type that formats lists of items with a separator and conjunction appropriate for a given locale.

### Creating attributed strings

- [attributed](integerformatstyle/attributed-swift.property.md): An attributed format style based on the integer format style.
- [IntegerFormatStyle.Attributed](integerformatstyle/attributed-swift.struct.md): Conforms when `Value` conforms to `BinaryInteger`. A format style that converts integers into attributed strings.

### Parsing integers

- [IntegerParseStrategy](integerparsestrategy.md): A parse strategy for creating integer values from formatted strings.

### Supporting types

- [IntegerFormatStyle.Currency](integerformatstyle/currency.md): Conforms when `Value` conforms to `BinaryInteger`. A format style that converts between integer currency values and their textual representations.
- [IntegerFormatStyle.Percent](integerformatstyle/percent.md): Conforms when `Value` conforms to `BinaryInteger`. A format style that converts between integer percentage values and their textual representations.

### Default Implementations

- [CustomConsumingRegexComponent Implementations](integerformatstyle/customconsumingregexcomponent-implementations.md)
- [FormatStyle Implementations](integerformatstyle/formatstyle-implementations.md)
- [ParseableFormatStyle Implementations](integerformatstyle/parseableformatstyle-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomConsumingRegexComponent](https://developer.apple.com/documentation/swift/customconsumingregexcomponent)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [FormatStyle](formatstyle.md)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [ParseableFormatStyle](parseableformatstyle.md)
- [RegexComponent](https://developer.apple.com/documentation/swift/regexcomponent)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Data formatting in Swift

- [Language Introspector](language-introspector.md): Converts data into human-readable text using formatters and locales.
- [FormatStyle](formatstyle.md): Conforms when `Value` conforms to `BinaryInteger`. A type that converts a given data type into a representation in another type, such as a string.
- [FloatingPointFormatStyle](floatingpointformatstyle.md): A structure that converts between floating-point values and their textual representations.
- [Decimal.FormatStyle](decimal/formatstyle.md): A structure that converts between decimal values and their textual representations.
- [ListFormatStyle](listformatstyle.md): A type that formats lists of items with a separator and conjunction appropriate for a given locale.
- [StringStyle](stringstyle.md)
- [URL.FormatStyle](url/formatstyle.md): A structure that converts between URL instances and their textual representations.
- [FormatStyleCapitalizationContext](formatstylecapitalizationcontext.md): The capitalization formatting context used when formatting dates and times.
- [Format Style Configurations](format-style-configurations.md): Behaviors for traits like numeric precision, rounding, and scale, used for formatting and parsing numeric values.
