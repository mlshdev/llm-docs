> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquantitytypeidentifier/height](https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/height)

# height (Swift)

**Framework:** HealthKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

A quantity sample type that measures the user’s height.

## Declaration

```swift
static let height: HKQuantityTypeIdentifier
```

## Mentioned In

- [Saving data to HealthKit](../saving-data-to-healthkit.md)

<a id="Discussion"></a>

## Discussion

These samples use length units (described in [HKUnit](../hkunit.md)) and measure discrete values (described in [HKQuantityAggregationStyle](../hkquantityaggregationstyle.md)).

## See Also

### Related Documentation

- [HKQuantityTypeIdentifier](../hkquantitytypeidentifier.md): The identifiers that create quantity type objects.
- [HKQuantitySample](../hkquantitysample.md): A sample that represents a quantity, including the value and the units.
- [HKQuantity](../hkquantity.md): An object that stores a value for a given unit.

### Body measurements

- [bodyMass](bodymass.md): A quantity sample type that measures the user’s weight.
- [bodyMassIndex](bodymassindex.md): A quantity sample type that measures the user’s body mass index.
- [leanBodyMass](leanbodymass.md): A quantity sample type that measures the user’s lean body mass.
- [bodyFatPercentage](bodyfatpercentage.md): A quantity sample type that measures the user’s body fat percentage.
- [waistCircumference](waistcircumference.md): A quantity sample type that measures the user’s waist circumference.

# HKQuantityTypeIdentifierHeight (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

A quantity sample type that measures the user’s height.

## Declaration

```objectivec
extern HKQuantityTypeIdentifier const HKQuantityTypeIdentifierHeight;
```

## Mentioned In

- [Saving data to HealthKit](../saving-data-to-healthkit.md)

<a id="Discussion"></a>

## Discussion

These samples use length units (described in [HKUnit](../hkunit.md)) and measure discrete values (described in [HKQuantityAggregationStyle](../hkquantityaggregationstyle.md)).

## See Also

### Related Documentation

- [HKQuantityTypeIdentifier](../hkquantitytypeidentifier.md): The identifiers that create quantity type objects.
- [HKQuantitySample](../hkquantitysample.md): A sample that represents a quantity, including the value and the units.
- [HKQuantity](../hkquantity.md): An object that stores a value for a given unit.

### Body measurements

- [HKQuantityTypeIdentifierBodyMass](bodymass.md): A quantity sample type that measures the user’s weight.
- [HKQuantityTypeIdentifierBodyMassIndex](bodymassindex.md): A quantity sample type that measures the user’s body mass index.
- [HKQuantityTypeIdentifierLeanBodyMass](leanbodymass.md): A quantity sample type that measures the user’s lean body mass.
- [HKQuantityTypeIdentifierBodyFatPercentage](bodyfatpercentage.md): A quantity sample type that measures the user’s body fat percentage.
- [HKQuantityTypeIdentifierWaistCircumference](waistcircumference.md): A quantity sample type that measures the user’s waist circumference.
