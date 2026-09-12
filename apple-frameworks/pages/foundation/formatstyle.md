> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/formatstyle](https://developer.apple.com/documentation/foundation/formatstyle)

# FormatStyle

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A type that converts a given data type into a representation in another type, such as a string.

## Declaration

```swift
protocol FormatStyle<FormatInput, FormatOutput> : Decodable, Encodable, Hashable
```

<a id="overview"></a>

## Overview

Types conforming to the [FormatStyle](formatstyle.md) protocol take their input type and produce formatted instances of their output type. The formatting process accounts for locale-specific conventions, like grouping and separators for numbers, and presentation of units for measurements. The format styles Foundation provides produce their output as [String](https://developer.apple.com/documentation/swift/string) or [AttributedString](attributedstring.md) instances. You can also create custom styles that format their output as any type, like XML or JSON [Data](data.md) or an image.

There are two basic approaches to using a [FormatStyle](formatstyle.md):

- Create an instance of a type that conforms to [FormatStyle](formatstyle.md) and apply it to one or more instances of the input type, by calling the style’s [format(\_:)](formatstyle/format%28__%29.md) method. Use this when you want to customize a style once and apply it repeatedly to many instances.
- Pass an instance of a type that conforms to [FormatStyle](formatstyle.md) to the data type’s `formatted(_:)` method, which takes the style as a parameter. Use this for one-off formatting scenarios, or when you want to apply different format styles to the same data value. For the simplest cases, most types that support formatting also have a no-argument `formatted()` method that applies a locale-appropriate default format style.

Foundation provides format styles for integers ([IntegerFormatStyle](integerformatstyle.md)), floating-point numbers ([FloatingPointFormatStyle](floatingpointformatstyle.md)), decimals ([Decimal.FormatStyle](decimal/formatstyle.md)), measurements ([Measurement.FormatStyle](measurement/formatstyle.md)), arrays ([ListFormatStyle](listformatstyle.md)), and more. The “Conforming types” section below shows all the format styles available from Foundation and any system frameworks that implement the [FormatStyle](formatstyle.md) protocol. The numeric format styles also provide supporting format styles to format currency and percent values, like [IntegerFormatStyle.Currency](integerformatstyle/currency.md) and [Decimal.FormatStyle.Percent](decimal/formatstyle/percent.md).

<a id="Modifying-a-format-style"></a>

### Modifying a format style

Format styles include modifier methods that return a new format style with an adjusted behavior. The following example creates an [IntegerFormatStyle](integerformatstyle.md), then applies modifiers to round values down to the nearest 1,000 and applies formatting appropriate to the `fr_FR` locale:

```swift
let style = IntegerFormatStyle<Int>()
    .rounded(rule: .down, increment: 1000)
    .locale(Locale(identifier: "fr_FR"))
let rounded = 123456789.formatted(style) // "123 456 000"
```

Foundation caches identical instances of a customized format style, so you don’t need to pass format style instances around unrelated parts of your app’s source code.

<a id="Accessing-static-instances"></a>

### Accessing static instances

Types that conform to [FormatStyle](formatstyle.md) typically extend the base protocol with type properties or type methods to provide convenience instances. These are available for use in a data type’s `formatted(_:)` method when the format style’s input type matches the data type. For example, the various numeric format styles define `number` properties with generic constraints to match the different numeric types ([Double](https://developer.apple.com/documentation/swift/double), [Int](https://developer.apple.com/documentation/swift/int), [Float16](https://developer.apple.com/documentation/swift/float16), and so on).

To see how this works, consider this example of a default formatter for an [Int](https://developer.apple.com/documentation/swift/int) value. Because `123456789` is a [BinaryInteger](https://developer.apple.com/documentation/swift/binaryinteger), its [formatted(\_:)](https://developer.apple.com/documentation/swift/binaryinteger/formatted%28_:%29-4qd73) method accepts an [IntegerFormatStyle](integerformatstyle.md) parameter. The following example shows the style’s default behavior in the `en_US` locale.

```swift
let formatted = 123456789.formatted(IntegerFormatStyle()) // "123,456,789"
```

[IntegerFormatStyle](integerformatstyle.md) extends [FormatStyle](formatstyle.md) with multiple type properties called `number`, each of which is an [IntegerFormatStyle](integerformatstyle.md) instance; these properties differ by which [BinaryInteger](https://developer.apple.com/documentation/swift/binaryinteger)-conforming type they take as input. Since one of these statically-defined properties ([number](formatstyle/number-7fxvo.md)) takes [Int](https://developer.apple.com/documentation/swift/int) as its input, you can use this type property instead of instantiating a new format style instance. Using dot notation to access this property on the inferred [FormatStyle](formatstyle.md) makes the call point much easier to read, as seen here:

```swift
let formatted = 123456789.formatted( .number) // "123,456,789"
```

Furthermore, since you can customize these statically-accessed format style instances, you can rewrite the example from the previous section without instantiating a new [IntegerFormatStyle](integerformatstyle.md), like this:

```swift
let rounded = 123456789.formatted( .number
    .rounded(rule: .down, increment: 1000)
    .locale(Locale(identifier: "fr_FR"))) // "123 456 000"
```

<a id="Parsing-with-a-format-style"></a>

### Parsing with a format style

To perform the opposite conversion — from formatted output type to input data type — some format styles provide a corresponding [ParseStrategy](parsestrategy.md) type. These format styles typically expose an instance of this type as a variable, called `parseStrategy`.

You can use a [ParseStrategy](parsestrategy.md) one of two ways:

- Initialize the data type by calling an initializer of that type that takes a formatted instance and a parse strategy as parameters. For example, you can create a [Decimal](decimal.md) from a formatted string with the initializer [init(\_:format:lenient:)](decimal/init%28__format_lenient_%29-6fk71.md).
- Create a parse strategy and call its [parse(\_:)](parsestrategy/parse%28__%29.md) method on one or more formatted instances.

## Topics

### Performing formatting

- [format(\_:)](formatstyle/format%28__%29.md): Formats a value, using this style.

### Setting style Locale

- [locale(\_:)](formatstyle/locale%28__%29.md): Modifies the format style to use the specified locale.

### Applying numeric styles for integers

- [number](formatstyle/number-7fxvo.md): Conforms when `Self` is `IntegerFormatStyle<Int>`. A style for formatting the Swift default integer type.
- [number](formatstyle/number-4ttgp.md): Conforms when `Self` is `IntegerFormatStyle<UInt>`. A style for formatting the Swift unsigned integer type.
- [number](formatstyle/number-5hzgj.md): Conforms when `Self` is `IntegerFormatStyle<Int8>`. A style for formatting 8-bit signed integers.
- [number](formatstyle/number-1o8fx.md): Conforms when `Self` is `IntegerFormatStyle<Int16>`. A style for formatting 16-bit signed integers.
- [number](formatstyle/number-4cj49.md): Conforms when `Self` is `IntegerFormatStyle<Int32>`. A style for formatting 32-bit signed integers.
- [number](formatstyle/number-3925i.md): Conforms when `Self` is `IntegerFormatStyle<Int64>`. A style for formatting 64-bit signed integers.
- [number](formatstyle/number-8fms6.md): Conforms when `Self` is `IntegerFormatStyle<UInt8>`. A style for formatting 8-bit unsigned integers.
- [number](formatstyle/number-fak0.md): Conforms when `Self` is `IntegerFormatStyle<UInt16>`. A style for formatting 16-bit unsigned integers.
- [number](formatstyle/number-13mra.md): Conforms when `Self` is `IntegerFormatStyle<UInt32>`. A style for formatting 32-bit unsigned integers.
- [number](formatstyle/number-iyry.md): Conforms when `Self` is `IntegerFormatStyle<UInt64>`. A style for formatting 64-bit unsigned integers.
- [IntegerFormatStyle](integerformatstyle.md): Conforms when `Value` conforms to `BinaryInteger`. A structure that converts between integer values and their textual representations.

### Applying numeric styles for floating-point values

- [number](formatstyle/number-432x3.md): Conforms when `Self` is `FloatingPointFormatStyle<Float>`. A style for formatting the Swift standard single-precision floating-point type.
- [number](formatstyle/number-8c8rj.md): Conforms when `Self` is `FloatingPointFormatStyle<Double>`. A style for formatting the Swift standard double-precision floating-point type.
- [number](formatstyle/number-3qe2o.md): Conforms when `Self` is `FloatingPointFormatStyle<Float16>`. A style for formatting 16-bit floating-point values.
- [FloatingPointFormatStyle](floatingpointformatstyle.md): Conforms when `Value` conforms to `BinaryFloatingPoint`. A structure that converts between floating-point values and their textual representations.

### Applying numeric styles for decimals

- [number](formatstyle/number-3luf2.md): Conforms when `Self` is `Decimal.FormatStyle`. A style for formatting decimal values.
- [Decimal.FormatStyle](decimal/formatstyle.md): A structure that converts between decimal values and their textual representations.

### Applying percentage styles for integers

- [percent](formatstyle/percent-cl9k.md): Conforms when `Self` is `IntegerFormatStyle<Int>.Percent`. A style for formatting signed integer types in Swift as a percent representation.
- [percent](formatstyle/percent-9pj79.md): Conforms when `Self` is `IntegerFormatStyle<UInt>.Percent`. A style for formatting signed integer types in Swift as a percent representation.
- [percent](formatstyle/percent-7r4rl.md): Conforms when `Self` is `IntegerFormatStyle<Int8>.Percent`. A style for formatting 8-bit signed integers as a percent representation.
- [percent](formatstyle/percent-3qjzh.md): Conforms when `Self` is `IntegerFormatStyle<Int16>.Percent`. A style for formatting 16-bit signed integers as a percent representation.
- [percent](formatstyle/percent-1f0q.md): Conforms when `Self` is `IntegerFormatStyle<Int32>.Percent`. A style for formatting 32-bit signed integers as a percent representation.
- [percent](formatstyle/percent-934se.md): Conforms when `Self` is `IntegerFormatStyle<Int64>.Percent`. A style for formatting 64-bit signed integers as a percent representation.
- [percent](formatstyle/percent-8izzv.md): Conforms when `Self` is `IntegerFormatStyle<UInt8>.Percent`. A style for formatting 8-bit unsigned integers as a percent representation.
- [percent](formatstyle/percent-4kdme.md): Conforms when `Self` is `IntegerFormatStyle<UInt16>.Percent`. A style for formatting 16-bit unsigned integers as a percent representation.
- [percent](formatstyle/percent-2f11j.md): Conforms when `Self` is `IntegerFormatStyle<UInt32>.Percent`. A style for formatting 32-bit unsigned integers as a percent representation.
- [percent](formatstyle/percent-8bxla.md): Conforms when `Self` is `IntegerFormatStyle<UInt64>.Percent`. A style for formatting 64-bit unsigned integers as a percent representation.
- [IntegerFormatStyle.Percent](integerformatstyle/percent.md): Conforms when `Value` conforms to `BinaryInteger`. A format style that converts between integer percentage values and their textual representations.

### Applying percentage styles for floating-point values

- [percent](formatstyle/percent-2gva1.md): Conforms when `Self` is `FloatingPointFormatStyle<Float>.Percent`. A style for formatting the Swift standard single-precision floating-point type as a percent representation.
- [percent](formatstyle/percent-6cwuv.md): Conforms when `Self` is `FloatingPointFormatStyle<Double>.Percent`. A style for formatting the Swift standard single-precision floating-point type as a percent representation.
- [percent](formatstyle/percent-grss.md): Conforms when `Self` is `FloatingPointFormatStyle<Float16>.Percent`. A style for formatting 16-bit floating-point values as a percent representation.
- [FloatingPointFormatStyle.Percent](floatingpointformatstyle/percent.md): Conforms when `Value` conforms to `BinaryFloatingPoint`. A format style that converts between floating-point percentage values and their textual representations.

### Applying percentage styles for decimals

- [percent](formatstyle/percent-4knsm.md): Conforms when `Self` is `Decimal.FormatStyle.Percent`. A style for formatting decimal values as a percent represntation.
- [Decimal.FormatStyle.Percent](decimal/formatstyle/percent.md): A format style that converts between decimal percentage values and their textual representations.

### Applying date and time styles

- [dateTime](formatstyle/datetime.md): Conforms when `Self` is `Date.FormatStyle`. A style for formatting a date and time.
- [Date.FormatStyle](date/formatstyle.md): A structure that creates a locale-appropriate string representation of a date instance and converts strings of dates and times into date instances.
- [Date.ISO8601FormatStyle](date/iso8601formatstyle.md): A type that converts between dates and their ISO-8601 string representations.
- [verbatim(\_:locale:timeZone:calendar:)](formatstyle/verbatim%28__locale_timezone_calendar_%29.md): Conforms when `Self` is `Date.VerbatimFormatStyle`. Returns a style for formatting a date with an explicitly-specified style.
- [Date.VerbatimFormatStyle](date/verbatimformatstyle.md): A style that formats a date with an explicitly-specified style.
- [interval](formatstyle/interval.md): Conforms when `Self` is `Date.IntervalFormatStyle`. A style for formatting a date interval.
- [Date.IntervalFormatStyle](date/intervalformatstyle.md): A format style that creates string representations of date intervals.
- [relative(presentation:unitsStyle:)](formatstyle/relative%28presentation_unitsstyle_%29.md): Conforms when `Self` is `Date.RelativeFormatStyle`. Returns a style for formatting a date as relative to the current date.
- [Date.RelativeFormatStyle](date/relativeformatstyle.md): A format style that forms locale-aware string representations of a relative date or time.
- [components(style:fields:)](formatstyle/components%28style_fields_%29.md): Conforms when `Self` is `Date.ComponentsFormatStyle`. Returns a style for formatting a date interval in terms of specific date components.
- [Date.ComponentsFormatStyle](date/componentsformatstyle.md): A style for formatting a date interval in terms of specific date components.

### Applying duration styles

- [timeDuration](formatstyle/timeduration.md): Conforms when `Self` is `Date.ComponentsFormatStyle`. A style for formatting a duration expressed as a range of dates.
- [Date.ComponentsFormatStyle](date/componentsformatstyle.md): A style for formatting a date interval in terms of specific date components.
- [time(pattern:)](formatstyle/time%28pattern_%29.md): Conforms when `Self` is `Duration.TimeFormatStyle`. Returns a style for formatting a duration using a provided pattern.
- [units(allowed:width:maximumUnitCount:zeroValueUnits:valueLength:fractionalPart:)](formatstyle/units%28allowed_width_maximumunitcount_zerovalueunits_valuelength_fractionalpart_%29.md): Conforms when `Self` is `Duration.UnitsFormatStyle`. Returns a style for formatting a duration that uses the specified units.
- [units(allowed:width:maximumUnitCount:zeroValueUnits:valueLengthLimits:fractionalPart:)](formatstyle/units%28allowed_width_maximumunitcount_zerovalueunits_valuelengthlimits_fractionalpart_%29.md): Conforms when `Self` is `Duration.UnitsFormatStyle`. Returns a style for formatting a duration range that uses the specified units, with padding/truncating behavior defined as a range.

### Applying currency styles

- [currency(code:)](formatstyle/currency%28code_%29-is0v.md): Returns a format style to use integer currency notation.
- [currency(code:)](formatstyle/currency%28code_%29-1yg68.md): Returns a format style to use floating-point currency notation.
- [currency(code:)](formatstyle/currency%28code_%29-6fhr2.md): Conforms when `Self` is `Decimal.FormatStyle.Currency`. Returns a format style to use decimal currency notation.

### Applying measurement styles

- [measurement(width:usage:numberFormatStyle:)](formatstyle/measurement%28width_usage_numberformatstyle_%29.md): Returns a format style to format measurement units.
- [measurement(width:usage:hidesScaleName:numberFormatStyle:)](formatstyle/measurement%28width_usage_hidesscalename_numberformatstyle_%29.md): Returns a format style to format temperature units.

### Applying person name styles

- [name(style:)](formatstyle/name%28style_%29.md): Conforms when `Self` is `PersonNameComponents.FormatStyle`. Returns a format style to use the given name style for formatting a name from its components.

### Applying list styles

- [list(memberStyle:type:width:)](formatstyle/list%28memberstyle_type_width_%29.md): Returns a format style to format a list of items.
- [list(type:width:)](formatstyle/list%28type_width_%29.md): Returns a format style to format a list of strings.

### Applying byte-count styles

- [byteCount(style:allowedUnits:spellsOutZero:includesActualByteCount:)](formatstyle/bytecount%28style_allowedunits_spellsoutzero_includesactualbytecount_%29-59ep0.md): Conforms when `Self` is `ByteCountFormatStyle`. Returns a format style to format a data storage value.
- [ByteCountFormatStyle](bytecountformatstyle.md): A format style that provides string representations of byte counts.
- [byteCount(style:allowedUnits:spellsOutZero:includesActualByteCount:)](formatstyle/bytecount%28style_allowedunits_spellsoutzero_includesactualbytecount_%29-ev0u.md): Conforms when `Self` is `Measurement<UnitInformationStorage>.FormatStyle.ByteCount`. Returns a format style to format a data storage value represented with Foundation’s measurement type.
- [Measurement.FormatStyle.ByteCount](measurement/formatstyle/bytecount.md): Conforms when `UnitType` is `UnitInformationStorage`. A format style that provides string representations of byte counts, expressed as measurements of information storage.

### Applying URL styles

- [url](formatstyle/url.md): Conforms when `Self` is `URL.FormatStyle`. A style for formatting a URL.
- [URL.FormatStyle](url/formatstyle.md): A structure that converts between URL instances and their textual representations.

### Declaring input and output types

- [FormatInput](formatstyle/formatinput.md): The type this format style accepts as input.
- [FormatOutput](formatstyle/formatoutput.md): The type this format style produces as output.

### Type Properties

- [http](formatstyle/http-5jh9g.md): Conforms when `Self` is `Date.HTTPFormatStyle`.
- [http](formatstyle/http-9pwm2.md): Conforms when `Self` is `DateComponents.HTTPFormatStyle`.
- [iso8601](formatstyle/iso8601-4smgu.md): Conforms when `Self` is `DateComponents.ISO8601FormatStyle`.
- [iso8601](formatstyle/iso8601-773rn.md): Conforms when `Self` is `Date.ISO8601FormatStyle`.

### Type Methods

- [offset(to:allowedFields:maxFieldCount:sign:)](formatstyle/offset%28to_allowedfields_maxfieldcount_sign_%29.md): Conforms when `Self` is `SystemFormatStyle.DateOffset`.
- [reference(to:allowedFields:maxFieldCount:thresholdField:)](formatstyle/reference%28to_allowedfields_maxfieldcount_thresholdfield_%29.md): Conforms when `Self` is `SystemFormatStyle.DateReference`.
- [stopwatch(startingAt:showsHours:maxFieldCount:maxPrecision:)](formatstyle/stopwatch%28startingat_showshours_maxfieldcount_maxprecision_%29.md): Conforms when `Self` is `SystemFormatStyle.Stopwatch`.
- [timer(countingDownIn:showsHours:maxFieldCount:maxPrecision:)](formatstyle/timer%28countingdownin_showshours_maxfieldcount_maxprecision_%29.md): Conforms when `Self` is `SystemFormatStyle.Timer`.
- [timer(countingUpIn:showsHours:maxFieldCount:maxPrecision:)](formatstyle/timer%28countingupin_showshours_maxfieldcount_maxprecision_%29.md): Conforms when `Self` is `SystemFormatStyle.Timer`.

## Relationships

### Inherits From

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

### Inherited By

- [DiscreteFormatStyle](discreteformatstyle.md)
- [ParseableFormatStyle](parseableformatstyle.md)

### Conforming Types

- [ByteCountFormatStyle](bytecountformatstyle.md)
- [ByteCountFormatStyle.Attributed](bytecountformatstyle/attributed-swift.struct.md)
- [Date.AnchoredRelativeFormatStyle](date/anchoredrelativeformatstyle.md)
- [Date.AttributedStyle](date/attributedstyle.md)
- [Date.ComponentsFormatStyle](date/componentsformatstyle.md)
- [Date.FormatStyle](date/formatstyle.md)
- [Date.FormatStyle.Attributed](date/formatstyle/attributed-swift.struct.md)
- [Date.HTTPFormatStyle](date/httpformatstyle.md)
- [Date.ISO8601FormatStyle](date/iso8601formatstyle.md)
- [Date.IntervalFormatStyle](date/intervalformatstyle.md)
- [Date.RelativeFormatStyle](date/relativeformatstyle.md)
- [Date.VerbatimFormatStyle](date/verbatimformatstyle.md)
- [Date.VerbatimFormatStyle.Attributed](date/verbatimformatstyle/attributed-swift.struct.md)
- [DateComponents.HTTPFormatStyle](datecomponents/httpformatstyle.md)
- [DateComponents.ISO8601FormatStyle](datecomponents/iso8601formatstyle.md)
- [Decimal.FormatStyle](decimal/formatstyle.md)
- [Decimal.FormatStyle.Attributed](decimal/formatstyle/attributed-swift.struct.md)
- [Decimal.FormatStyle.Currency](decimal/formatstyle/currency.md)
- [Decimal.FormatStyle.Percent](decimal/formatstyle/percent.md)
- [FloatingPointFormatStyle](floatingpointformatstyle.md)
- [FloatingPointFormatStyle.Attributed](floatingpointformatstyle/attributed-swift.struct.md)
- [FloatingPointFormatStyle.Currency](floatingpointformatstyle/currency.md)
- [FloatingPointFormatStyle.Percent](floatingpointformatstyle/percent.md)
- [IntegerFormatStyle](integerformatstyle.md)
- [IntegerFormatStyle.Attributed](integerformatstyle/attributed-swift.struct.md)
- [IntegerFormatStyle.Currency](integerformatstyle/currency.md)
- [IntegerFormatStyle.Percent](integerformatstyle/percent.md)
- [ListFormatStyle](listformatstyle.md)
- [Measurement.AttributedStyle](measurement/attributedstyle.md)
- [Measurement.AttributedStyle.ByteCount](measurement/attributedstyle/bytecount.md)
- [Measurement.FormatStyle](measurement/formatstyle.md)
- [Measurement.FormatStyle.ByteCount](measurement/formatstyle/bytecount.md)
- [PersonNameComponents.AttributedStyle](personnamecomponents/attributedstyle.md)
- [PersonNameComponents.FormatStyle](personnamecomponents/formatstyle.md)
- [StringStyle](stringstyle.md)
- [URL.FormatStyle](url/formatstyle.md)

## See Also

### Data formatting in Swift

- [Language Introspector](language-introspector.md): Converts data into human-readable text using formatters and locales.
- [IntegerFormatStyle](integerformatstyle.md): Conforms when `Value` conforms to `BinaryInteger`. A structure that converts between integer values and their textual representations.
- [FloatingPointFormatStyle](floatingpointformatstyle.md): Conforms when `Value` conforms to `BinaryFloatingPoint`. A structure that converts between floating-point values and their textual representations.
- [Decimal.FormatStyle](decimal/formatstyle.md): A structure that converts between decimal values and their textual representations.
- [ListFormatStyle](listformatstyle.md): A type that formats lists of items with a separator and conjunction appropriate for a given locale.
- [StringStyle](stringstyle.md)
- [URL.FormatStyle](url/formatstyle.md): A structure that converts between URL instances and their textual representations.
- [FormatStyleCapitalizationContext](formatstylecapitalizationcontext.md): The capitalization formatting context used when formatting dates and times.
- [Format Style Configurations](format-style-configurations.md): Behaviors for traits like numeric precision, rounding, and scale, used for formatting and parsing numeric values.
