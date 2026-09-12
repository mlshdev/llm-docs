> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmeasurement](https://developer.apple.com/documentation/foundation/nsmeasurement)

# NSMeasurement (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A numeric quantity labeled with a unit of measure, with support for unit conversion and unit-aware calculations.

## Declaration

```swift
class NSMeasurement
```

<a id="overview"></a>

## Overview

Use this object in Swift when you need reference semantics or other Foundation-specific behavior.

An [NSMeasurement](nsmeasurement.md) object represents a quantity and unit of measure. The [NSMeasurement](nsmeasurement.md) class provides a programmatic interface to converting measurements into different units, as well as calculating the sum or difference between two measurements.

[NSMeasurement](nsmeasurement.md) objects are initialized with an [Unit](unit.md) object and `double` value. [NSMeasurement](nsmeasurement.md) objects are immutable, and cannot be changed after being created.

You can use the [MeasurementFormatter](measurementformatter.md) class to create localized string representations of [NSMeasurement](nsmeasurement.md) objects.

> **Important**

>  The Swift overlay to the Foundation framework provides the [Measurement](measurement.md) structure, which bridges to the [NSMeasurement](nsmeasurement.md) class. For more information about value types, see [Working with Foundation Types](https://developer.apple.com/documentation/swift/working-with-foundation-types).

## Topics

### Creating Measurements

- [init(doubleValue:unit:)](nsmeasurement/init%28doublevalue_unit_%29.md): Initializes a new measurement with a specified double-precision floating-point value and unit.

### Accessing Unit and Value

- [unit](nsmeasurement/unit.md): The unit of measure.
- [doubleValue](nsmeasurement/doublevalue.md): The measurement value, represented as a double-precision floating-point number.

### Converting to Other Units

- [canBeConverted(to:)](nsmeasurement/canbeconverted%28to_%29.md): Indicates whether the measurement can be converted to the given unit.
- [converting(to:)](nsmeasurement/converting%28to_%29.md): Returns a measurement created by converting the receiver to the specified unit.

### Operating on Measurements

- [adding(\_:)](nsmeasurement/adding%28__%29.md): Returns a new measurement by adding the receiver to the specified measurement.
- [subtracting(\_:)](nsmeasurement/subtracting%28__%29.md): Returns a new measurement by subtracting the specified measurement from the receiver.

### Initializers

- [init(coder:)](nsmeasurement/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](nscoding.md)
- [NSCopying](nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](nssecurecoding.md)

## See Also

### Essentials

- [Measurement](measurement.md): A numeric quantity labeled with a unit of measure, with support for unit conversion and unit-aware calculations.
- [Unit](unit.md): An abstract class representing a unit of measure.
- [Dimension](dimension.md): An abstract class representing a dimensional unit of measure.

# NSMeasurement (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A numeric quantity labeled with a unit of measure, with support for unit conversion and unit-aware calculations.

## Declaration

```objectivec
@interface NSMeasurement : NSObject
```

<a id="overview"></a>

## Overview

Use this object in Swift when you need reference semantics or other Foundation-specific behavior.

An [NSMeasurement](nsmeasurement.md) object represents a quantity and unit of measure. The [NSMeasurement](nsmeasurement.md) class provides a programmatic interface to converting measurements into different units, as well as calculating the sum or difference between two measurements.

[NSMeasurement](nsmeasurement.md) objects are initialized with an [NSUnit](unit.md) object and `double` value. [NSMeasurement](nsmeasurement.md) objects are immutable, and cannot be changed after being created.

You can use the [NSMeasurementFormatter](measurementformatter.md) class to create localized string representations of [NSMeasurement](nsmeasurement.md) objects.

> **Important**

>  The Swift overlay to the Foundation framework provides the [Measurement](measurement.md) structure, which bridges to the [NSMeasurement](nsmeasurement.md) class. For more information about value types, see [Working with Foundation Types](https://developer.apple.com/documentation/swift/working-with-foundation-types).

## Topics

### Creating Measurements

- [initWithDoubleValue:unit:](nsmeasurement/init%28doublevalue_unit_%29.md): Initializes a new measurement with a specified double-precision floating-point value and unit.

### Accessing Unit and Value

- [unit](nsmeasurement/unit.md): The unit of measure.
- [doubleValue](nsmeasurement/doublevalue.md): The measurement value, represented as a double-precision floating-point number.

### Converting to Other Units

- [canBeConvertedToUnit:](nsmeasurement/canbeconverted%28to_%29.md): Indicates whether the measurement can be converted to the given unit.
- [measurementByConvertingToUnit:](nsmeasurement/converting%28to_%29.md): Returns a measurement created by converting the receiver to the specified unit.

### Operating on Measurements

- [measurementByAddingMeasurement:](nsmeasurement/adding%28__%29.md): Returns a new measurement by adding the receiver to the specified measurement.
- [measurementBySubtractingMeasurement:](nsmeasurement/subtracting%28__%29.md): Returns a new measurement by subtracting the specified measurement from the receiver.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](nscopying.md)
- [NSSecureCoding](nssecurecoding.md)

## See Also

### Essentials

- [NSUnit](unit.md): An abstract class representing a unit of measure.
- [NSDimension](dimension.md): An abstract class representing a dimensional unit of measure.
