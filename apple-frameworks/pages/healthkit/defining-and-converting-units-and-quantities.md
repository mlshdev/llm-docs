> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/defining-and-converting-units-and-quantities](https://developer.apple.com/documentation/healthkit/defining-and-converting-units-and-quantities)

# Defining and converting units and quantities (Swift)

**Framework:** HealthKit  
**Kind:** Article

Create and convert units and quantities.

<a id="overview"></a>

## Overview

The [HKUnit](hkunit.md) class provides the representation for a single unit. It supports a wide range of metric and imperial units, as well as both simple and complex units. A simple unit represents a single measurement, such as meters, pounds, or seconds. A complex unit combines one or more simple units using mathematical operations, such as meters per second (m/s) or pounds per square foot (lb/ft2).

In addition to convenience methods for creating all the simple units supported by HealthKit, [HKUnit](hkunit.md) provides the mathematical operations needed to build complex units. You can also create complex units directly using properly formatted unit strings.

For more information on units, see [HKUnit](hkunit.md).

The [HKQuantity](hkquantity.md) class stores a value for a given unit. You can then request the value in any compatible units, letting your app easily translate values between units.

For more information on quantities, see [HKQuantity](hkquantity.md).

You can use [MeasurementFormatter](../foundation/measurementformatter.md) to localize quantities such as length, mass, and energy. For other quantities, you need to perform the conversions and localize the data yourself.

## See Also

### Units and quantities

- [HKQuantity](hkquantity.md): An object that stores a value for a given unit.
- [HKUnit](hkunit.md): A class for managing the units of measure within HealthKit.
- [HKMetricPrefix](hkmetricprefix.md): Prefixes that can be added to SI units to change the order of magnitude.

# Defining and converting units and quantities (Objective-C)

**Framework:** HealthKit  
**Kind:** Article

Create and convert units and quantities.

<a id="overview"></a>

## Overview

The [HKUnit](hkunit.md) class provides the representation for a single unit. It supports a wide range of metric and imperial units, as well as both simple and complex units. A simple unit represents a single measurement, such as meters, pounds, or seconds. A complex unit combines one or more simple units using mathematical operations, such as meters per second (m/s) or pounds per square foot (lb/ft2).

In addition to convenience methods for creating all the simple units supported by HealthKit, [HKUnit](hkunit.md) provides the mathematical operations needed to build complex units. You can also create complex units directly using properly formatted unit strings.

For more information on units, see [HKUnit](hkunit.md).

The [HKQuantity](hkquantity.md) class stores a value for a given unit. You can then request the value in any compatible units, letting your app easily translate values between units.

For more information on quantities, see [HKQuantity](hkquantity.md).

You can use [NSMeasurementFormatter](../foundation/measurementformatter.md) to localize quantities such as length, mass, and energy. For other quantities, you need to perform the conversions and localize the data yourself.

## See Also

### Units and quantities

- [HKQuantity](hkquantity.md): An object that stores a value for a given unit.
- [HKUnit](hkunit.md): A class for managing the units of measure within HealthKit.
- [HKMetricPrefix](hkmetricprefix.md): Prefixes that can be added to SI units to change the order of magnitude.
