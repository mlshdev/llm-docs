> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/unitconverter](https://developer.apple.com/documentation/foundation/unitconverter)

# UnitConverter (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

An abstract class that provides a description of how to convert a unit to and from the base unit of its dimension.

## Declaration

```swift
class UnitConverter
```

<a id="overview"></a>

## Overview

For units that can be converted by a scale factor or linear equation, use the concrete subclass [UnitConverterLinear](unitconverterlinear.md).

<a id="Subclassing-Notes"></a>

### Subclassing Notes

[UnitConverter](unitconverter.md) is an abstract class that is intended for subclassing. You can implement your own subclass of [UnitConverter](unitconverter.md) to convert between units according to any desired mapping function. For example, units may be converted using a logarithmic, exponential, or quantile scale.

<a id="Methods-to-Override"></a>

#### Methods to Override

All subclasses must fully implement the following methods:

- [baseUnitValue(fromValue:)](unitconverter/baseunitvalue%28fromvalue_%29.md)
- [value(fromBaseUnitValue:)](unitconverter/value%28frombaseunitvalue_%29.md)

<a id="Alternatives-to-Subclassing"></a>

#### Alternatives to Subclassing

As stated above, most physical units can be converted using a linear equation with [UnitConverterLinear](unitconverterlinear.md). You should only create a custom subclass of [UnitConverter](unitconverter.md) for units that cannot be converted in this way.

## Topics

### Converting Between Units

- [baseUnitValue(fromValue:)](unitconverter/baseunitvalue%28fromvalue_%29.md): For a given unit, returns the specified value of that unit in terms of the base unit of its dimension.
- [value(fromBaseUnitValue:)](unitconverter/value%28frombaseunitvalue_%29.md): For a given unit, returns the specified value of the base unit in terms of that unit.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UnitConverterLinear](unitconverterlinear.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Conversion

- [UnitConverterLinear](unitconverterlinear.md): A description of how to convert between units using a linear equation.

# NSUnitConverter (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

An abstract class that provides a description of how to convert a unit to and from the base unit of its dimension.

## Declaration

```objectivec
@interface NSUnitConverter : NSObject
```

<a id="overview"></a>

## Overview

For units that can be converted by a scale factor or linear equation, use the concrete subclass [NSUnitConverterLinear](unitconverterlinear.md).

<a id="Subclassing-Notes"></a>

### Subclassing Notes

[NSUnitConverter](unitconverter.md) is an abstract class that is intended for subclassing. You can implement your own subclass of [NSUnitConverter](unitconverter.md) to convert between units according to any desired mapping function. For example, units may be converted using a logarithmic, exponential, or quantile scale.

<a id="Methods-to-Override"></a>

#### Methods to Override

All subclasses must fully implement the following methods:

- [baseUnitValueFromValue:](unitconverter/baseunitvalue%28fromvalue_%29.md)
- [valueFromBaseUnitValue:](unitconverter/value%28frombaseunitvalue_%29.md)

<a id="Alternatives-to-Subclassing"></a>

#### Alternatives to Subclassing

As stated above, most physical units can be converted using a linear equation with [NSUnitConverterLinear](unitconverterlinear.md). You should only create a custom subclass of [NSUnitConverter](unitconverter.md) for units that cannot be converted in this way.

## Topics

### Converting Between Units

- [baseUnitValueFromValue:](unitconverter/baseunitvalue%28fromvalue_%29.md): For a given unit, returns the specified value of that unit in terms of the base unit of its dimension.
- [valueFromBaseUnitValue:](unitconverter/value%28frombaseunitvalue_%29.md): For a given unit, returns the specified value of the base unit in terms of that unit.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NSUnitConverterLinear](unitconverterlinear.md)

## See Also

### Conversion

- [NSUnitConverterLinear](unitconverterlinear.md): A description of how to convert between units using a linear equation.
