> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkunit/moleunit(withmolarmass:)](https://developer.apple.com/documentation/healthkit/hkunit/moleunit(withmolarmass:))

# moleUnit(withMolarMass:) (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Returns a HealthKit unit for measuring mass in moles for a given molar mass.

## Declaration

```swift
class func moleUnit(withMolarMass gramsPerMole: Double) -> Self
```

## Parameters

- `gramsPerMole`: The molar mass (in g/mol) of the item to be weighed.

<a id="return-value"></a>

## Return Value

A HealthKit unit for measuring the mass of an item in moles.

<a id="Discussion"></a>

## Discussion

To create a unit for measuring an item in moles, you need to know that item’s molar mass. For example, you can use the [HKUnitMolarMassBloodGlucose](../hkunitmolarmassbloodglucose.md) constant to create the mole unit for blood glucose, as shown below.

**Swift**

```swift
let molesOfBloodGlucose = HKUnit.moleUnitWithMolarMass(HKUnitMolarMassBloodGlucose)
```

**Objective-C**

```objc
HKUnit *molesOfBloodGlucose =
[HKUnit moleUnitWithMolarMass:HKUnitMolarMassBloodGlucose];
```

## See Also

### Constructing mass units

- [gram()](gram%28%29.md): Returns a HealthKit unit for measuring mass in grams.
- [gramUnit(with:)](gramunit%28with_%29.md): Returns a HealthKit unit for measuring mass, using gram units with the provided prefix.
- [ounce()](ounce%28%29.md): Returns a HealthKit unit for measuring mass in ounces.
- [pound()](pound%28%29.md): Returns a HealthKit unit for measuring mass in pounds.
- [stone()](stone%28%29.md): Returns a HealthKit unit for measuring mass in stones.
- [moleUnit(with:molarMass:)](moleunit%28with_molarmass_%29.md): Returns a HealthKit unit for measuring mass in moles, with the given prefix and molar mass.
- [HKUnitMolarMassBloodGlucose](../hkunitmolarmassbloodglucose.md): The molecular mass of blood glucose, typically used to create mole units for blood glucose.

# moleUnitWithMolarMass: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Returns a HealthKit unit for measuring mass in moles for a given molar mass.

## Declaration

```objectivec
+ (instancetype) moleUnitWithMolarMass:(double) gramsPerMole;
```

## Parameters

- `gramsPerMole`: The molar mass (in g/mol) of the item to be weighed.

<a id="return-value"></a>

## Return Value

A HealthKit unit for measuring the mass of an item in moles.

<a id="Discussion"></a>

## Discussion

To create a unit for measuring an item in moles, you need to know that item’s molar mass. For example, you can use the [HKUnitMolarMassBloodGlucose](../hkunitmolarmassbloodglucose.md) constant to create the mole unit for blood glucose, as shown below.

**Swift**

```swift
let molesOfBloodGlucose = HKUnit.moleUnitWithMolarMass(HKUnitMolarMassBloodGlucose)
```

**Objective-C**

```objc
HKUnit *molesOfBloodGlucose =
[HKUnit moleUnitWithMolarMass:HKUnitMolarMassBloodGlucose];
```

## See Also

### Constructing mass units

- [gramUnit](gram%28%29.md): Returns a HealthKit unit for measuring mass in grams.
- [gramUnitWithMetricPrefix:](gramunit%28with_%29.md): Returns a HealthKit unit for measuring mass, using gram units with the provided prefix.
- [ounceUnit](ounce%28%29.md): Returns a HealthKit unit for measuring mass in ounces.
- [poundUnit](pound%28%29.md): Returns a HealthKit unit for measuring mass in pounds.
- [stoneUnit](stone%28%29.md): Returns a HealthKit unit for measuring mass in stones.
- [moleUnitWithMetricPrefix:molarMass:](moleunit%28with_molarmass_%29.md): Returns a HealthKit unit for measuring mass in moles, with the given prefix and molar mass.
- [HKUnitMolarMassBloodGlucose](../hkunitmolarmassbloodglucose.md): The molecular mass of blood glucose, typically used to create mole units for blood glucose.
