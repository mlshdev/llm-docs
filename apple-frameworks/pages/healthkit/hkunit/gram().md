> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkunit/gram()](https://developer.apple.com/documentation/healthkit/hkunit/gram())

# gram() (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Returns a HealthKit unit for measuring mass in grams.

## Declaration

```swift
class func gram() -> Self
```

<a id="return-value"></a>

## Return Value

A HealthKit unit for measuring mass in grams.

## See Also

### Constructing mass units

- [gramUnit(with:)](gramunit%28with_%29.md): Returns a HealthKit unit for measuring mass, using gram units with the provided prefix.
- [ounce()](ounce%28%29.md): Returns a HealthKit unit for measuring mass in ounces.
- [pound()](pound%28%29.md): Returns a HealthKit unit for measuring mass in pounds.
- [stone()](stone%28%29.md): Returns a HealthKit unit for measuring mass in stones.
- [moleUnit(withMolarMass:)](moleunit%28withmolarmass_%29.md): Returns a HealthKit unit for measuring mass in moles for a given molar mass.
- [moleUnit(with:molarMass:)](moleunit%28with_molarmass_%29.md): Returns a HealthKit unit for measuring mass in moles, with the given prefix and molar mass.
- [HKUnitMolarMassBloodGlucose](../hkunitmolarmassbloodglucose.md): The molecular mass of blood glucose, typically used to create mole units for blood glucose.

# gramUnit (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Returns a HealthKit unit for measuring mass in grams.

## Declaration

```objectivec
+ (instancetype) gramUnit;
```

<a id="return-value"></a>

## Return Value

A HealthKit unit for measuring mass in grams.

## See Also

### Constructing mass units

- [gramUnitWithMetricPrefix:](gramunit%28with_%29.md): Returns a HealthKit unit for measuring mass, using gram units with the provided prefix.
- [ounceUnit](ounce%28%29.md): Returns a HealthKit unit for measuring mass in ounces.
- [poundUnit](pound%28%29.md): Returns a HealthKit unit for measuring mass in pounds.
- [stoneUnit](stone%28%29.md): Returns a HealthKit unit for measuring mass in stones.
- [moleUnitWithMolarMass:](moleunit%28withmolarmass_%29.md): Returns a HealthKit unit for measuring mass in moles for a given molar mass.
- [moleUnitWithMetricPrefix:molarMass:](moleunit%28with_molarmass_%29.md): Returns a HealthKit unit for measuring mass in moles, with the given prefix and molar mass.
- [HKUnitMolarMassBloodGlucose](../hkunitmolarmassbloodglucose.md): The molecular mass of blood glucose, typically used to create mole units for blood glucose.
