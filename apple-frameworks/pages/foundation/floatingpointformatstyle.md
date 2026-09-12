> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/floatingpointformatstyle](https://developer.apple.com/documentation/foundation/floatingpointformatstyle)

# FloatingPointFormatStyle

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A structure that converts between floating-point values and their textual representations.

## Declaration

```swift
struct FloatingPointFormatStyle<Value> where Value : BinaryFloatingPoint
```

<a id="overview"></a>

## Overview

Instances of [FloatingPointFormatStyle](floatingpointformatstyle.md) create localized, human-readable text from [BinaryFloatingPoint](https://developer.apple.com/documentation/swift/binaryfloatingpoint) numbers and parse string representations of numbers into instances of [BinaryFloatingPoint](https://developer.apple.com/documentation/swift/binaryfloatingpoint) types. All of the Swift standard library’s floating-point types, such as [Double](https://developer.apple.com/documentation/swift/double), [Float](https://developer.apple.com/documentation/swift/float), and [Float80](https://developer.apple.com/documentation/swift/float80), conform to [BinaryFloatingPoint](https://developer.apple.com/documentation/swift/binaryfloatingpoint), and therefore work with this format style.

[FloatingPointFormatStyle](floatingpointformatstyle.md) includes two nested types, [FloatingPointFormatStyle.Percent](floatingpointformatstyle/percent.md) and [FloatingPointFormatStyle.Currency](floatingpointformatstyle/currency.md), for working with percentages and currencies, respectively. Each format style includes a configuration that determines how it represents numeric values, for things like grouping, displaying signs, and variant presentations like scientific notation. [FloatingPointFormatStyle](floatingpointformatstyle.md) and [FloatingPointFormatStyle.Percent](floatingpointformatstyle/percent.md) include a [NumberFormatStyleConfiguration](numberformatstyleconfiguration.md), and [FloatingPointFormatStyle.Currency](floatingpointformatstyle/currency.md) includes a [CurrencyFormatStyleConfiguration](currencyformatstyleconfiguration.md). You can customize numeric formatting for a style by adjusting its backing configuration. The system automatically caches unique configurations of a format style to enhance performance.

> **Note**

>  Foundation provides another format style type, [IntegerFormatStyle](integerformatstyle.md), for working with numbers that conform to [BinaryInteger](https://developer.apple.com/documentation/swift/binaryinteger). For Foundation’s [Decimal](decimal.md) type, use [Decimal.FormatStyle](decimal/formatstyle.md).

<a id="Formatting-floating-point-values"></a>

### Formatting floating-point values

Use the [formatted()](https://developer.apple.com/documentation/swift/binaryfloatingpoint/formatted%28%29) method to create a string representation of a floating-point value using the default [FloatingPointFormatStyle](floatingpointformatstyle.md) configuration.

```swift
let formattedDefault = 12345.67.formatted()
// formattedDefault is "12,345.67" in the en_US locale.
// Other locales may use different separator and grouping behavior.
```

You can specify a format style by providing an argument to the [formatted(\_:)](https://developer.apple.com/documentation/swift/binaryfloatingpoint/formatted%28_:%29-4ksqj) method. The following example shows the number `0.1` represented in each of the available styles, in the `en_US` locale:

```swift
let number = 0.1

let formattedNumber = number.formatted(.number)
// formattedNumber is "0.1".

let formattedPercent = number.formatted(.percent)
// formattedPercent is "10%".

let formattedCurrency = number.formatted(.currency(code: "USD"))
// formattedCurrency is "$0.10".
```

Each style provides methods for updating its numeric configuration, including the number of significant digits, grouping length, and more. You can specify a numeric configuration by calling as many of these methods as you need in any order you choose. The following example shows the same number with default and custom configurations:

```swift
let exampleNumber = 123456.78

let defaultFormatting = exampleNumber.formatted(.number)
// defaultFormatting is "123 456,78" for the "fr_FR" locale.
// defaultFormatting is "123,456.78" for the "en_US" locale.

let customFormatting = exampleNumber.formatted(
    .number
        .grouping(.never)
        .sign(strategy: .always()))
// customFormatting is "+123456.78"
```

<a id="Creating-a-floating-point-format-style-instance"></a>

### Creating a floating-point format style instance

The previous examples use static factory methods like [number](formatstyle/number-8c8rj.md) to create format styles within the call to the [formatted(\_:)](https://developer.apple.com/documentation/swift/binaryfloatingpoint/formatted%28_:%29-4ksqj) method. You can also create a [FloatingPointFormatStyle](floatingpointformatstyle.md) instance and use it to repeatedly format different values, with the [format(\_:)](floatingpointformatstyle/format%28__%29.md) method:

```swift
let percentFormatStyle = FloatingPointFormatStyle<Double>.Percent()

percentFormatStyle.format(0.5) // "50%"
percentFormatStyle.format(0.855) // "85.5%"
percentFormatStyle.format(1.0) // "100%"

```

<a id="Parsing-floating-point-values"></a>

### Parsing floating-point values

You can use [FloatingPointFormatStyle](floatingpointformatstyle.md) to parse strings into floating-point values. You can define the format style within the type’s initializer or pass in a format style created outside the function, as shown here:

```swift
let price = try? Double("$3,500.63",
                         format: .currency(code: "USD")) // 3500.63

let priceFormatStyle = FloatingPointFormatStyle<Double>.Currency(code: "USD")
let salePrice = try? Double("$731.67",
                             format: priceFormatStyle) // 731.67
```

<a id="Matching-regular-expressions"></a>

### Matching regular expressions

Along with parsing numeric values in strings, you can use theSwift regular expression domain-specific language to match and capture numeric substrings. The following example defines a percentage format style to match a percentage value using `en_US` numeric conventions. The rest of the regular expression ignores any characters prior to a `": "` sequence that precedes the percentage substring.

```swift
import RegexBuilder
let source = "Percentage complete: 55.1%"
let matcher = Regex {
    OneOrMore(.any)
    ": "
    Capture {
        One(.localizedDoublePercentage(locale: Locale(identifier: "en_US")))
    }
}
let match = source.firstMatch(of: matcher)
let localizedPercentage = match?.1
print("\(localizedPercentage!)") // 0.551
```

## Topics

### Creating a floating-point format style

- [init(locale:)](floatingpointformatstyle/init%28locale_%29.md): Creates a floating-point format style that uses the given locale.

### Formatting floating-point values

- [format(\_:)](floatingpointformatstyle/format%28__%29.md): Conforms when `Value` conforms to `BinaryFloatingPoint`. Formats a floating-point value, using this style.

### Customizing style behavior

- [decimalSeparator(strategy:)](floatingpointformatstyle/decimalseparator%28strategy_%29.md): Modifies the format style to use the specified decimal separator display strategy.
- [grouping(\_:)](floatingpointformatstyle/grouping%28__%29.md): Modifies the format style to use the specified grouping.
- [locale(\_:)](floatingpointformatstyle/locale%28__%29.md): Conforms when `Value` conforms to `BinaryFloatingPoint`. Modifies the format style to use the specified locale.
- [notation(\_:)](floatingpointformatstyle/notation%28__%29.md): Modifies the format style to use the specified notation.
- [precision(\_:)](floatingpointformatstyle/precision%28__%29.md): Modifies the format style to use the specified precision.
- [rounded(rule:increment:)](floatingpointformatstyle/rounded%28rule_increment_%29.md): Modifies the format style to use the specified rounding rule and increment.
- [scale(\_:)](floatingpointformatstyle/scale%28__%29.md): Modifies the format style to use the specified scale.
- [sign(strategy:)](floatingpointformatstyle/sign%28strategy_%29.md): Modifies the format style to use the specified sign display strategy for displaying or omitting sign symbols.
- [FloatingPointFormatStyle.Configuration](floatingpointformatstyle/configuration.md): The type the format style uses for configuration settings.
- [NumberFormatStyleConfiguration](numberformatstyleconfiguration.md): Configuration settings for formatting numbers of different types.

### Accessing style locale

- [locale](floatingpointformatstyle/locale.md): The locale of the format style.

### Applying currency styles

- [FloatingPointFormatStyle.Currency](floatingpointformatstyle/currency.md): Conforms when `Value` conforms to `BinaryFloatingPoint`. A format style that converts between floating-point currency values and their textual representations.

### Applying measurement styles

- [Measurement.FormatStyle](measurement/formatstyle.md): Conforms when `UnitType` inherits `Dimension`. A type that provides localized representations of measurements.

### Applying list styles

- [ListFormatStyle](listformatstyle.md): A type that formats lists of items with a separator and conjunction appropriate for a given locale.

### Creating attributed strings

- [attributed](floatingpointformatstyle/attributed-swift.property.md): An attributed format style based on the floating-point format style.
- [FloatingPointFormatStyle.Attributed](floatingpointformatstyle/attributed-swift.struct.md): Conforms when `Value` conforms to `BinaryFloatingPoint`. A format style that converts integers into attributed strings.

### Parsing floating-point numbers

- [parseStrategy](floatingpointformatstyle/parsestrategy.md): Conforms when `Value` conforms to `BinaryFloatingPoint`. The parse strategy that this format style uses.
- [FloatingPointParseStrategy](floatingpointparsestrategy.md): A parse strategy for creating floating-point values from formatted strings.

### Locating floating-point numbers with regular expressions

- [consuming(\_:startingAt:in:)](floatingpointformatstyle/consuming%28__startingat_in_%29.md): Conforms when `Value` conforms to `BinaryFloatingPoint`. Process the input string within the specified bounds, beginning at the given index, and return the end position (upper bound) of the match and the produced output.

### Supporting types

- [FloatingPointFormatStyle.Currency](floatingpointformatstyle/currency.md): Conforms when `Value` conforms to `BinaryFloatingPoint`. A format style that converts between floating-point currency values and their textual representations.
- [FloatingPointFormatStyle.Percent](floatingpointformatstyle/percent.md): Conforms when `Value` conforms to `BinaryFloatingPoint`. A format style that converts between floating-point percentage values and their textual representations.

### Default Implementations

- [CustomConsumingRegexComponent Implementations](floatingpointformatstyle/customconsumingregexcomponent-implementations.md)
- [FormatStyle Implementations](floatingpointformatstyle/formatstyle-implementations.md)
- [ParseableFormatStyle Implementations](floatingpointformatstyle/parseableformatstyle-implementations.md)

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
- [FormatStyle](formatstyle.md): Conforms when `Value` conforms to `BinaryFloatingPoint`. A type that converts a given data type into a representation in another type, such as a string.
- [IntegerFormatStyle](integerformatstyle.md): A structure that converts between integer values and their textual representations.
- [Decimal.FormatStyle](decimal/formatstyle.md): A structure that converts between decimal values and their textual representations.
- [ListFormatStyle](listformatstyle.md): A type that formats lists of items with a separator and conjunction appropriate for a given locale.
- [StringStyle](stringstyle.md)
- [URL.FormatStyle](url/formatstyle.md): A structure that converts between URL instances and their textual representations.
- [FormatStyleCapitalizationContext](formatstylecapitalizationcontext.md): The capitalization formatting context used when formatting dates and times.
- [Format Style Configurations](format-style-configurations.md): Behaviors for traits like numeric precision, rounding, and scale, used for formatting and parsing numeric values.
