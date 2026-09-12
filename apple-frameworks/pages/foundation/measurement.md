> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/measurement](https://developer.apple.com/documentation/foundation/measurement)

# Measurement

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A numeric quantity labeled with a unit of measure, with support for unit conversion and unit-aware calculations.

## Declaration

```swift
struct Measurement<UnitType> where UnitType : Unit
```

<a id="overview"></a>

## Overview

A [Measurement](measurement.md) object represents a quantity and unit of measure. The [Measurement](measurement.md) type provides a programmatic interface to converting measurements into different units, as well as calculating the sum or difference between two measurements.

[Measurement](measurement.md) objects are initialized with a [Unit](unit.md) object and double value. [Measurement](measurement.md) objects are immutable, and cannot be changed after being created.

Measurements support a large set of operators, including `+`, `-`, `*`, `/`, and a full set of comparison operators.

## Topics

### Creating a Measurement

- [init(value:unit:)](measurement/init%28value_unit_%29.md): Create a `Measurement` given a specified value and unit.

### Accessing the Value and Units

- [unit](measurement/unit.md): The unit component of the measurement.
- [value](measurement/value.md): The value component of the measurement.

### Converting to Other Units

- [convert(to:)](measurement/convert%28to_%29.md): Conforms when `UnitType` inherits `Dimension`. Converts the measurement to the specified unit.
- [converted(to:)](measurement/converted%28to_%29.md): Conforms when `UnitType` inherits `Dimension`. Returns a new measurement created by converting to the specified unit.

### Operating on a Measurement

- [\*(\_:\_:)](measurement/_%28____%29-1d26c.md): Conforms when `UnitType` inherits `Unit`. Multiply a scalar value by a measurement.
- [\*(\_:\_:)](measurement/_%28____%29-5tv8a.md): Conforms when `UnitType` inherits `Unit`. Multiply a measurement by a scalar value.
- [+(\_:\_:)](measurement/+%28____%29-9lejn.md): Conforms when `UnitType` inherits `Unit`. Add two measurements.
- [+(\_:\_:)](measurement/+%28____%29-4fsbl.md): Conforms when `UnitType` inherits `Dimension`. Adds two measurements of the same dimension.
- [-(\_:\_:)](measurement/-%28____%29-2nnoy.md): Conforms when `UnitType` inherits `Unit`. Subtract two measurements of the same Unit.
- [-(\_:\_:)](measurement/-%28____%29-1a47h.md): Conforms when `UnitType` inherits `Dimension`. Subtract two measurements of the same Dimension.
- [/(\_:\_:)](measurement/_%28____%29-98s40.md): Conforms when `UnitType` inherits `Unit`. Divide a scalar value by a measurement.
- [/(\_:\_:)](measurement/_%28____%29-71kwk.md): Conforms when `UnitType` inherits `Unit`. Divide a measurement by a scalar value.

### Formatting a Measurement

- [formatted()](measurement/formatted%28%29.md): Conforms when `UnitType` inherits `Dimension`. Generates a locale-aware string representation of a measurement using the default measurement format style.
- [formatted(\_:)](measurement/formatted%28__%29.md): Conforms when `UnitType` inherits `Dimension`. Generates a locale-aware string representation of a measurement using the provided measurement format style.
- [Measurement.FormatStyle](measurement/formatstyle.md): Conforms when `UnitType` inherits `Dimension`. A type that provides localized representations of measurements.
- [Measurement.AttributedStyle](measurement/attributedstyle.md): Conforms when `UnitType` inherits `Dimension`. A type that provides localized representations of measurements with an attributed string.

### Comparing Measurements

- [\<(\_:\_:)](measurement/_%28____%29-7pou4.md): Conforms when `UnitType` inherits `Unit`. Compare two measurements of the same `Unit`.

### Using Reference Types

- [NSMeasurement](nsmeasurement.md): A numeric quantity labeled with a unit of measure, with support for unit conversion and unit-aware calculations.

### Type Aliases

- [Measurement.Specification](measurement/specification.md): Conforms when `UnitType` inherits `Unit`.
- [Measurement.UnwrappedType](measurement/unwrappedtype.md): Conforms when `UnitType` inherits `Unit`.
- [Measurement.ValueType](measurement/valuetype.md): Conforms when `UnitType` inherits `Unit`.

### Type Properties

- [defaultResolverSpecification](measurement/defaultresolverspecification.md): Conforms when `UnitType` inherits `Unit`.

### Default Implementations

- [Comparable Implementations](measurement/comparable-implementations.md)
- [Equatable Implementations](measurement/equatable-implementations.md)

## Relationships

### Conforms To

- [Comparable](https://developer.apple.com/documentation/swift/comparable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomReflectable](https://developer.apple.com/documentation/swift/customreflectable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [ElectricityInsightMeasure](https://developer.apple.com/documentation/energykit/electricityinsightmeasure)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [IntentValueConvertible](../appintents/intentvalueconvertible.md)
- [IntentValueExpressing](../appintents/intentvalueexpressing.md)
- [ReferenceConvertible](referenceconvertible.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Essentials

- [NSMeasurement](nsmeasurement.md): A numeric quantity labeled with a unit of measure, with support for unit conversion and unit-aware calculations.
- [Unit](unit.md): An abstract class representing a unit of measure.
- [Dimension](dimension.md): An abstract class representing a dimensional unit of measure.
