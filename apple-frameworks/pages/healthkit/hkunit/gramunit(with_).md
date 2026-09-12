> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkunit/gramunit(with:)](https://developer.apple.com/documentation/healthkit/hkunit/gramunit(with:))

# gramUnit(with:) (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Returns a HealthKit unit for measuring mass, using gram units with the provided prefix.

## Declaration

```swift
class func gramUnit(with prefix: HKMetricPrefix) -> Self
```

## Parameters

- `prefix`: A valid metric prefix value. For the complete list of prefix values, see [HKMetricPrefix](../hkmetricprefix.md).

<a id="return-value"></a>

## Return Value

A HealthKit unit for measuring mass based on grams and the given prefix.

<a id="Discussion"></a>

## Discussion

This method is used to create prefixed versions of grams, typically kilogram units, as shown below.

**Swift**

```swift
let kg = HKUnit.gramUnitWithMetricPrefix(.Kilo)
let kg = HKUnit.gramUnitWithMetricPrefix(.Kilo)
```

**Objective-C**

```objc
HKUnit *kg = [HKUnit gramUnitWithMetricPrefix:HKMetricPrefixKilo];
```

## See Also

### Constructing mass units

- [gram()](gram%28%29.md): Returns a HealthKit unit for measuring mass in grams.
- [ounce()](ounce%28%29.md): Returns a HealthKit unit for measuring mass in ounces.
- [pound()](pound%28%29.md): Returns a HealthKit unit for measuring mass in pounds.
- [stone()](stone%28%29.md): Returns a HealthKit unit for measuring mass in stones.
- [moleUnit(withMolarMass:)](moleunit%28withmolarmass_%29.md): Returns a HealthKit unit for measuring mass in moles for a given molar mass.
- [moleUnit(with:molarMass:)](moleunit%28with_molarmass_%29.md): Returns a HealthKit unit for measuring mass in moles, with the given prefix and molar mass.
- [HKUnitMolarMassBloodGlucose](../hkunitmolarmassbloodglucose.md): The molecular mass of blood glucose, typically used to create mole units for blood glucose.

# gramUnitWithMetricPrefix: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Returns a HealthKit unit for measuring mass, using gram units with the provided prefix.

## Declaration

```objectivec
+ (instancetype) gramUnitWithMetricPrefix:(HKMetricPrefix) prefix;
```

## Parameters

- `prefix`: A valid metric prefix value. For the complete list of prefix values, see [HKMetricPrefix](../hkmetricprefix.md).

<a id="return-value"></a>

## Return Value

A HealthKit unit for measuring mass based on grams and the given prefix.

<a id="Discussion"></a>

## Discussion

This method is used to create prefixed versions of grams, typically kilogram units, as shown below.

**Swift**

```swift
let kg = HKUnit.gramUnitWithMetricPrefix(.Kilo)
let kg = HKUnit.gramUnitWithMetricPrefix(.Kilo)
```

**Objective-C**

```objc
HKUnit *kg = [HKUnit gramUnitWithMetricPrefix:HKMetricPrefixKilo];
```

## See Also

### Constructing mass units

- [gramUnit](gram%28%29.md): Returns a HealthKit unit for measuring mass in grams.
- [ounceUnit](ounce%28%29.md): Returns a HealthKit unit for measuring mass in ounces.
- [poundUnit](pound%28%29.md): Returns a HealthKit unit for measuring mass in pounds.
- [stoneUnit](stone%28%29.md): Returns a HealthKit unit for measuring mass in stones.
- [moleUnitWithMolarMass:](moleunit%28withmolarmass_%29.md): Returns a HealthKit unit for measuring mass in moles for a given molar mass.
- [moleUnitWithMetricPrefix:molarMass:](moleunit%28with_molarmass_%29.md): Returns a HealthKit unit for measuring mass in moles, with the given prefix and molar mass.
- [HKUnitMolarMassBloodGlucose](../hkunitmolarmassbloodglucose.md): The molecular mass of blood glucose, typically used to create mole units for blood glucose.
