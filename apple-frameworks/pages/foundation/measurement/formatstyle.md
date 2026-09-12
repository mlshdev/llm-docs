> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/measurement/formatstyle](https://developer.apple.com/documentation/foundation/measurement/formatstyle)

# Measurement.FormatStyle

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A type that provides localized representations of measurements.

## Declaration

```swift
struct FormatStyle
```

<a id="overview"></a>

## Overview

A measurement format style creates human-readable text from a [Measurement](../measurement.md). You can customize the formatting behavior of the format style using the [width](formatstyle/width.md), `numberFormat`, [usage](formatstyle/usage.md), and [locale](formatstyle/locale.md) properties. The system automatically caches unique configurations of [Measurement.FormatStyle](formatstyle.md) to enhance performance.

Use either the [formatted()](formatted%28%29.md) or the [formatted(\_:)](formatted%28__%29.md) instance method of [Measurement](../measurement.md) to create a string representation of a measurement.

The [formatted()](formatted%28%29.md) method generates a string using the default measurement format style.

```swift
let temperature = Measurement<UnitTemperature>(value: 38, unit: .celsius)
temperature.formatted()
// For locale: en_US: 100°F
// For locale: fr_FR: 38°C
```

The default format style in the previous example abbreviates the measurement unit. To customize any of the properties of the formatted measurement, you provide a measurement format style to the [formatted(\_:)](formatted%28__%29.md) method. For example, to create a string with the full name of the unit, the code might resemble the following:

```swift
temperature.formatted(.measurement(width: .wide))
// For locale: en_US: 100 degrees Fahrenheit
// For locale: fr_FR: 38 degrés Celsius
```

The previous example uses a static factory method to create a measurement format style within the call to the [formatted(\_:)](formatted%28__%29.md) method. You can also create a measurement format style and pass it to the method, such as in the following example:

```swift
let distance = Measurement<UnitLength>(value: 36, unit: .miles)
let distanceStyle = Measurement<UnitLength>.FormatStyle(width: .wide, usage: .road)
distanceStyle.format(distance)
// for locale: en_US: 36 miles
// for locale: fr_FR: 58 kilomètres

```

After you create an instance of a format style, you can use it to format measurements of the same unit type.

## Topics

### Creating a measurement format style

- [init(width:locale:usage:numberFormatStyle:)](formatstyle/init%28width_locale_usage_numberformatstyle_%29.md): Creates an instance using the provided width, locale, usage type, and number format.
- [init(width:locale:usage:hidesScaleName:numberFormatStyle:)](formatstyle/init%28width_locale_usage_hidesscalename_numberformatstyle_%29.md): Conforms when `UnitType` is `UnitTemperature`. Creates an instance using the provided width, locale, usage type, number format, and the option to hide the unit name.

### Modifying a measurement format style

- [width](formatstyle/width.md): The width of the measurement unit.
- [Measurement.FormatStyle.UnitWidth](formatstyle/unitwidth.md): Specifies the width of the unit, determining the textual representation.
- [numberFormatStyle](formatstyle/numberformatstyle.md): The formatting of the measurement value.
- [usage](formatstyle/usage.md): The intended purpose of the formatted measurement.
- [hidesScaleName](formatstyle/hidesscalename.md): Conforms when `UnitType` is `UnitTemperature`. The visibility of the unit name of a temperature.
- [locale](formatstyle/locale.md): The locale of the format style.
- [locale(\_:)](formatstyle/locale%28__%29.md): Modifies the measurement format style to use the specified locale.

### Inspecting a measurement format style

- [attributed](formatstyle/attributed.md): The attributed style for the measurement format style.

### Formatting a measurement

- [format(\_:)](formatstyle/format%28__%29.md): Creates a string representation of a measurement.

### Applying byte count styles

Use this format style when the measurement’s unit type is information storage.

- [Measurement.FormatStyle.ByteCount](formatstyle/bytecount.md): Conforms when `UnitType` is `UnitInformationStorage`. A format style that provides string representations of byte counts, expressed as measurements of information storage.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [FormatStyle](../formatstyle.md)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
