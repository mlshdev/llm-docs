> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/measurement/attributedstyle](https://developer.apple.com/documentation/foundation/measurement/attributedstyle)

# Measurement.AttributedStyle

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A type that provides localized representations of measurements with an attributed string.

## Declaration

```swift
@dynamicMemberLookup struct AttributedStyle
```

<a id="overview"></a>

## Overview

Use either the [formatted()](formatted%28%29.md) or the [formatted(\_:)](formatted%28__%29.md) instance method of [Measurement](../measurement.md) to create an attributed string representation of a measurement.

The [formatted()](formatted%28%29.md) method generates a string using the default measurement format style.

## Topics

### Formatting a Measurement

- [format(\_:)](attributedstyle/format%28__%29.md): Creates a string representation of a measurement.

### Modififying a Measurement Attributed Style

- [locale(\_:)](attributedstyle/locale%28__%29.md): Modifies the measurement format style to use the specified locale.

### Comparing Measurement Attributed Styles

- [==(\_:\_:)](==%28____%29.md): Conforms when `UnitType` inherits `Unit`. Compare two measurements of the same `Dimension`.

### Structures

- [Measurement.AttributedStyle.ByteCount](attributedstyle/bytecount.md): Conforms when `UnitType` is `UnitInformationStorage`. A format style that converts byte counts into attributed strings.

### Subscripts

- [subscript(dynamicMember:)](attributedstyle/subscript%28dynamicmember_%29-83rva.md): Conforms when `UnitType` inherits `Dimension`.
- [subscript(dynamicMember:)](attributedstyle/subscript%28dynamicmember_%29-c2b1.md): Conforms when `UnitType` inherits `Dimension`.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [FormatStyle](../formatstyle.md)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Formatting a Measurement

- [formatted()](formatted%28%29.md): Conforms when `UnitType` inherits `Dimension`. Generates a locale-aware string representation of a measurement using the default measurement format style.
- [formatted(\_:)](formatted%28__%29.md): Conforms when `UnitType` inherits `Dimension`. Generates a locale-aware string representation of a measurement using the provided measurement format style.
- [Measurement.FormatStyle](formatstyle.md): Conforms when `UnitType` inherits `Dimension`. A type that provides localized representations of measurements.
