> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkunit/ounce()](https://developer.apple.com/documentation/healthkit/hkunit/ounce())

# ounce() (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Returns a HealthKit unit for measuring mass in ounces.

## Declaration

```swift
class func ounce() -> Self
```

<a id="return-value"></a>

## Return Value

A HealthKit unit for measuring mass in ounces.

## See Also

### Constructing mass units

- [gram()](gram%28%29.md): Returns a HealthKit unit for measuring mass in grams.
- [gramUnit(with:)](gramunit%28with_%29.md): Returns a HealthKit unit for measuring mass, using gram units with the provided prefix.
- [pound()](pound%28%29.md): Returns a HealthKit unit for measuring mass in pounds.
- [stone()](stone%28%29.md): Returns a HealthKit unit for measuring mass in stones.
- [moleUnit(withMolarMass:)](moleunit%28withmolarmass_%29.md): Returns a HealthKit unit for measuring mass in moles for a given molar mass.
- [moleUnit(with:molarMass:)](moleunit%28with_molarmass_%29.md): Returns a HealthKit unit for measuring mass in moles, with the given prefix and molar mass.
- [HKUnitMolarMassBloodGlucose](../hkunitmolarmassbloodglucose.md): The molecular mass of blood glucose, typically used to create mole units for blood glucose.

# ounceUnit (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Returns a HealthKit unit for measuring mass in ounces.

## Declaration

```objectivec
+ (instancetype) ounceUnit;
```

<a id="return-value"></a>

## Return Value

A HealthKit unit for measuring mass in ounces.

## See Also

### Constructing mass units

- [gramUnit](gram%28%29.md): Returns a HealthKit unit for measuring mass in grams.
- [gramUnitWithMetricPrefix:](gramunit%28with_%29.md): Returns a HealthKit unit for measuring mass, using gram units with the provided prefix.
- [poundUnit](pound%28%29.md): Returns a HealthKit unit for measuring mass in pounds.
- [stoneUnit](stone%28%29.md): Returns a HealthKit unit for measuring mass in stones.
- [moleUnitWithMolarMass:](moleunit%28withmolarmass_%29.md): Returns a HealthKit unit for measuring mass in moles for a given molar mass.
- [moleUnitWithMetricPrefix:molarMass:](moleunit%28with_molarmass_%29.md): Returns a HealthKit unit for measuring mass in moles, with the given prefix and molar mass.
- [HKUnitMolarMassBloodGlucose](../hkunitmolarmassbloodglucose.md): The molecular mass of blood glucose, typically used to create mole units for blood glucose.
