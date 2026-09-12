> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/dimension/baseunit()](https://developer.apple.com/documentation/foundation/dimension/baseunit())

# baseUnit() (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Returns the base unit.

## Declaration

```swift
class func baseUnit() -> Self
```

<a id="return-value"></a>

## Return Value

An `NSDimension` subclass object from which all other units provided by the subclass are defined.

<a id="Discussion"></a>

## Discussion

The default implementation returns `nil` to indicate that the `NSDimension` class should not be used directly.

When implementing a subclass, you should return a unit converter that returns the inputted value for both the `baseUnitValueFromValue:` and `valueFromBaseUnitValue:` methods. You can create a unit converter for a base unit using the [UnitConverterLinear](../unitconverterlinear.md) [init(coefficient:)](../unitconverterlinear/init%28coefficient_%29.md) initializer, passing `1` as the coefficient.

# baseUnit (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Returns the base unit.

## Declaration

```objectivec
+ (instancetype) baseUnit;
```

<a id="return-value"></a>

## Return Value

An `NSDimension` subclass object from which all other units provided by the subclass are defined.

<a id="Discussion"></a>

## Discussion

The default implementation returns `nil` to indicate that the `NSDimension` class should not be used directly.

When implementing a subclass, you should return a unit converter that returns the inputted value for both the `baseUnitValueFromValue:` and `valueFromBaseUnitValue:` methods. You can create a unit converter for a base unit using the [NSUnitConverterLinear](../unitconverterlinear.md) [initWithCoefficient:](../unitconverterlinear/init%28coefficient_%29.md) initializer, passing `1` as the coefficient.
