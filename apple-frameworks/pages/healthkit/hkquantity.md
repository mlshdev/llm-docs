> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquantity](https://developer.apple.com/documentation/healthkit/hkquantity)

# HKQuantity (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

An object that stores a value for a given unit.

## Declaration

```swift
class HKQuantity
```

## Mentioned In

- [Defining and converting units and quantities](defining-and-converting-units-and-quantities.md)
- [Saving data to HealthKit](saving-data-to-healthkit.md)

<a id="overview"></a>

## Overview

HealthKit uses quantity objects to store numerical data. When you create a quantity, you provide both the quantity’s value and unit.

Quantities are immutable objects: Their values are set when the object is first created and cannot change.

<a id="Converting-Units"></a>

### Converting Units

You can request the value from a quantity object in any compatible units. For example,  if you create a length quantity in feet, you can then request the length in meters. The quantity object automatically converts its value to the requested units.

<a id="Using-Quantities"></a>

### Using Quantities

As with many HealthKit classes, don’t subclass the [HKQuantity](hkquantity.md) class. To help promote sharing data between apps, [HKQuantity](hkquantity.md) objects use only the units defined by the [HKUnit](hkunit.md) class.

## Topics

### Creating Quantities

- [init(unit:doubleValue:)](hkquantity/init%28unit_doublevalue_%29.md): Instantiates and returns a new quantity object.

### Working With Units

- [is(compatibleWith:)](hkquantity/is%28compatiblewith_%29.md): Returns a boolean value indicating whether the quantity is compatible with the provided unit.
- [doubleValue(for:)](hkquantity/doublevalue%28for_%29.md): Returns the quantity’s value in the provided unit.

### Comparing Quantities

- [compare(\_:)](hkquantity/compare%28__%29.md): Compares two values after converting them to the same units.

### Initializers

- [init(coder:)](hkquantity/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Units and quantities

- [Defining and converting units and quantities](defining-and-converting-units-and-quantities.md): Create and convert units and quantities.
- [HKUnit](hkunit.md): A class for managing the units of measure within HealthKit.
- [HKMetricPrefix](hkmetricprefix.md): Prefixes that can be added to SI units to change the order of magnitude.

# HKQuantity (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

An object that stores a value for a given unit.

## Declaration

```objectivec
@interface HKQuantity : NSObject
```

## Mentioned In

- [Defining and converting units and quantities](defining-and-converting-units-and-quantities.md)
- [Saving data to HealthKit](saving-data-to-healthkit.md)

<a id="overview"></a>

## Overview

HealthKit uses quantity objects to store numerical data. When you create a quantity, you provide both the quantity’s value and unit.

Quantities are immutable objects: Their values are set when the object is first created and cannot change.

<a id="Converting-Units"></a>

### Converting Units

You can request the value from a quantity object in any compatible units. For example,  if you create a length quantity in feet, you can then request the length in meters. The quantity object automatically converts its value to the requested units.

<a id="Using-Quantities"></a>

### Using Quantities

As with many HealthKit classes, don’t subclass the [HKQuantity](hkquantity.md) class. To help promote sharing data between apps, [HKQuantity](hkquantity.md) objects use only the units defined by the [HKUnit](hkunit.md) class.

## Topics

### Creating Quantities

- [quantityWithUnit:doubleValue:](hkquantity/init%28unit_doublevalue_%29.md): Instantiates and returns a new quantity object.

### Working With Units

- [isCompatibleWithUnit:](hkquantity/is%28compatiblewith_%29.md): Returns a boolean value indicating whether the quantity is compatible with the provided unit.
- [doubleValueForUnit:](hkquantity/doublevalue%28for_%29.md): Returns the quantity’s value in the provided unit.

### Comparing Quantities

- [compare:](hkquantity/compare%28__%29.md): Compares two values after converting them to the same units.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Units and quantities

- [Defining and converting units and quantities](defining-and-converting-units-and-quantities.md): Create and convert units and quantities.
- [HKUnit](hkunit.md): A class for managing the units of measure within HealthKit.
- [HKMetricPrefix](hkmetricprefix.md): Prefixes that can be added to SI units to change the order of magnitude.
