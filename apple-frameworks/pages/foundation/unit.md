> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/unit](https://developer.apple.com/documentation/foundation/unit)

# Unit (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

An abstract class representing a unit of measure.

## Declaration

```swift
class Unit
```

<a id="overview"></a>

## Overview

Each instance of an [Unit](unit.md) subclass consists of a [symbol](unit/symbol.md), which can be used to create string representations of [NSMeasurement](nsmeasurement.md) objects with the [MeasurementFormatter](measurementformatter.md) class.

The [Dimension](dimension.md) subclass is an abstract class that represents a dimensional unit, which can be converted into different units of the same type. The Foundation framework provides several concrete [Dimension](dimension.md) subclasses to represent the most common physical quantities, including mass, length, duration, and speed.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

[Unit](unit.md) is intended for subclassing. For dimensional units, you should use one of the Apple provided [Dimension](dimension.md) subclasses listed in Table 1 of [Dimension](dimension.md), or create a custom subclass of [Dimension](dimension.md). You can create a direct subclass of [Unit](unit.md) to represent a custom dimensionless unit, such as a count, score, or ratio.

## Topics

### Accessing Properties

- [symbol](unit/symbol.md): The symbolic representation of the unit.

### Creating Units

- [init(symbol:)](unit/init%28symbol_%29.md): Initializes a new unit with the specified symbol.

### Initializers

- [init(coder:)](unit/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [Dimension](dimension.md)
- [UnitEnergy.EnergyKit](unitenergy/energykit.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](nscoding.md)
- [NSCopying](nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Essentials

- [Measurement](measurement.md): A numeric quantity labeled with a unit of measure, with support for unit conversion and unit-aware calculations.
- [NSMeasurement](nsmeasurement.md): A numeric quantity labeled with a unit of measure, with support for unit conversion and unit-aware calculations.
- [Dimension](dimension.md): An abstract class representing a dimensional unit of measure.

# NSUnit (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

An abstract class representing a unit of measure.

## Declaration

```objectivec
@interface NSUnit : NSObject
```

<a id="overview"></a>

## Overview

Each instance of an [NSUnit](unit.md) subclass consists of a [symbol](unit/symbol.md), which can be used to create string representations of [NSMeasurement](nsmeasurement.md) objects with the [NSMeasurementFormatter](measurementformatter.md) class.

The [NSDimension](dimension.md) subclass is an abstract class that represents a dimensional unit, which can be converted into different units of the same type. The Foundation framework provides several concrete [NSDimension](dimension.md) subclasses to represent the most common physical quantities, including mass, length, duration, and speed.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

[NSUnit](unit.md) is intended for subclassing. For dimensional units, you should use one of the Apple provided [NSDimension](dimension.md) subclasses listed in Table 1 of [NSDimension](dimension.md), or create a custom subclass of [NSDimension](dimension.md). You can create a direct subclass of [NSUnit](unit.md) to represent a custom dimensionless unit, such as a count, score, or ratio.

## Topics

### Accessing Properties

- [symbol](unit/symbol.md): The symbolic representation of the unit.

### Creating Units

- [initWithSymbol:](unit/init%28symbol_%29.md): Initializes a new unit with the specified symbol.

### Type Methods

- [new](nsunit/new.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NSDimension](dimension.md)

### Conforms To

- [NSCopying](nscopying.md)
- [NSSecureCoding](nssecurecoding.md)

## See Also

### Essentials

- [NSMeasurement](nsmeasurement.md): A numeric quantity labeled with a unit of measure, with support for unit conversion and unit-aware calculations.
- [NSDimension](dimension.md): An abstract class representing a dimensional unit of measure.
