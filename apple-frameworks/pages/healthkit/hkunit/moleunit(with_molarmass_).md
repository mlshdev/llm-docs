> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkunit/moleunit(with:molarmass:)](https://developer.apple.com/documentation/healthkit/hkunit/moleunit(with:molarmass:))

# moleUnit(with:molarMass:) (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Returns a HealthKit unit for measuring mass in moles, with the given prefix and molar mass.

## Declaration

```swift
class func moleUnit(with prefix: HKMetricPrefix, molarMass gramsPerMole: Double) -> Self
```

## Parameters

- `prefix`: A valid metric prefix value. For the complete list of prefix values, see [HKMetricPrefix](../hkmetricprefix.md).
- `gramsPerMole`: The molar mass, in grams per mole, of the item to be weighed.

<a id="return-value"></a>

## Return Value

A HealthKit unit for measuring mass in moles.

<a id="Discussion"></a>

## Discussion

This method allows the creation of units to measure mass in moles with a given metric prefix and molecular mass. For example, to measure blood glucose in millimoles, you need to use both the correct prefix (milli-) and the [HKUnitMolarMassBloodGlucose](../hkunitmolarmassbloodglucose.md) constant.).

**Swift**

```swift
let millimolesOfBloodGlucose =
    HKUnit.moleUnitWithMetricPrefix(HKMetricPrefix.Milli,
                                    molarMass: HKUnitMolarMassBloodGlucose)
```

**Objective-C**

```objc
HKUnit *millimolesOfBloodGlucose =
[HKUnit moleUnitWithMetricPrefix:HKMetricPrefixMilli molarMass:HKUnitMolarMassBloodGlucose];
```

## See Also

### Constructing mass units

- [gram()](gram%28%29.md): Returns a HealthKit unit for measuring mass in grams.
- [gramUnit(with:)](gramunit%28with_%29.md): Returns a HealthKit unit for measuring mass, using gram units with the provided prefix.
- [ounce()](ounce%28%29.md): Returns a HealthKit unit for measuring mass in ounces.
- [pound()](pound%28%29.md): Returns a HealthKit unit for measuring mass in pounds.
- [stone()](stone%28%29.md): Returns a HealthKit unit for measuring mass in stones.
- [moleUnit(withMolarMass:)](moleunit%28withmolarmass_%29.md): Returns a HealthKit unit for measuring mass in moles for a given molar mass.
- [HKUnitMolarMassBloodGlucose](../hkunitmolarmassbloodglucose.md): The molecular mass of blood glucose, typically used to create mole units for blood glucose.

# moleUnitWithMetricPrefix:molarMass: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Returns a HealthKit unit for measuring mass in moles, with the given prefix and molar mass.

## Declaration

```objectivec
+ (instancetype) moleUnitWithMetricPrefix:(HKMetricPrefix) prefix molarMass:(double) gramsPerMole;
```

## Parameters

- `prefix`: A valid metric prefix value. For the complete list of prefix values, see [HKMetricPrefix](../hkmetricprefix.md).
- `gramsPerMole`: The molar mass, in grams per mole, of the item to be weighed.

<a id="return-value"></a>

## Return Value

A HealthKit unit for measuring mass in moles.

<a id="Discussion"></a>

## Discussion

This method allows the creation of units to measure mass in moles with a given metric prefix and molecular mass. For example, to measure blood glucose in millimoles, you need to use both the correct prefix (milli-) and the [HKUnitMolarMassBloodGlucose](../hkunitmolarmassbloodglucose.md) constant.).

**Swift**

```swift
let millimolesOfBloodGlucose =
    HKUnit.moleUnitWithMetricPrefix(HKMetricPrefix.Milli,
                                    molarMass: HKUnitMolarMassBloodGlucose)
```

**Objective-C**

```objc
HKUnit *millimolesOfBloodGlucose =
[HKUnit moleUnitWithMetricPrefix:HKMetricPrefixMilli molarMass:HKUnitMolarMassBloodGlucose];
```

## See Also

### Constructing mass units

- [gramUnit](gram%28%29.md): Returns a HealthKit unit for measuring mass in grams.
- [gramUnitWithMetricPrefix:](gramunit%28with_%29.md): Returns a HealthKit unit for measuring mass, using gram units with the provided prefix.
- [ounceUnit](ounce%28%29.md): Returns a HealthKit unit for measuring mass in ounces.
- [poundUnit](pound%28%29.md): Returns a HealthKit unit for measuring mass in pounds.
- [stoneUnit](stone%28%29.md): Returns a HealthKit unit for measuring mass in stones.
- [moleUnitWithMolarMass:](moleunit%28withmolarmass_%29.md): Returns a HealthKit unit for measuring mass in moles for a given molar mass.
- [HKUnitMolarMassBloodGlucose](../hkunitmolarmassbloodglucose.md): The molecular mass of blood glucose, typically used to create mole units for blood glucose.
