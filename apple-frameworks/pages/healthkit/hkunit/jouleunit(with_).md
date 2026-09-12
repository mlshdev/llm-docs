> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkunit/jouleunit(with:)](https://developer.apple.com/documentation/healthkit/hkunit/jouleunit(with:))

# jouleUnit(with:) (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Returns a HealthKit unit for measuring energy, using joule units with the provided prefix.

## Declaration

```swift
class func jouleUnit(with prefix: HKMetricPrefix) -> Self
```

## Parameters

- `prefix`: A valid metric prefix value. For the complete list of prefix values, see [HKMetricPrefix](../hkmetricprefix.md).

<a id="return-value"></a>

## Return Value

A HealthKit unit for measuring energy based on joules and the provided prefix.

<a id="Discussion"></a>

## Discussion

This method is used to create prefixed versions of joules. HealthKit commonly uses kilojoules to measure food energy in many regions. Kilojoules can be created as shown below.

**Swift**

```swift
let kj = HKUnit.jouleUnitWithMetricPrefix(.Kilo)
```

**Objective-C**

```objc
HKUnit *kj = [HKUnit jouleUnitWithMetricPrefix:HKMetricPrefixKilo];
```

## See Also

### Constructing energy units

- [joule()](joule%28%29.md): Returns a HealthKit unit for measuring energy in joules.
- [kilocalorie()](kilocalorie%28%29.md): Returns a HealthKit unit for measuring energy in kilocalories.
- [largeCalorie()](largecalorie%28%29.md): Returns a HealthKit unit for measuring energy in large calories (Cal).
- [smallCalorie()](smallcalorie%28%29.md): Returns a HealthKit unit for measuring energy in small calories (cal).
- [calorie()](calorie%28%29.md): Deprecated. Returns a HealthKit unit for measuring energy in calories.

# jouleUnitWithMetricPrefix: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Returns a HealthKit unit for measuring energy, using joule units with the provided prefix.

## Declaration

```objectivec
+ (instancetype) jouleUnitWithMetricPrefix:(HKMetricPrefix) prefix;
```

## Parameters

- `prefix`: A valid metric prefix value. For the complete list of prefix values, see [HKMetricPrefix](../hkmetricprefix.md).

<a id="return-value"></a>

## Return Value

A HealthKit unit for measuring energy based on joules and the provided prefix.

<a id="Discussion"></a>

## Discussion

This method is used to create prefixed versions of joules. HealthKit commonly uses kilojoules to measure food energy in many regions. Kilojoules can be created as shown below.

**Swift**

```swift
let kj = HKUnit.jouleUnitWithMetricPrefix(.Kilo)
```

**Objective-C**

```objc
HKUnit *kj = [HKUnit jouleUnitWithMetricPrefix:HKMetricPrefixKilo];
```

## See Also

### Constructing energy units

- [jouleUnit](joule%28%29.md): Returns a HealthKit unit for measuring energy in joules.
- [kilocalorieUnit](kilocalorie%28%29.md): Returns a HealthKit unit for measuring energy in kilocalories.
- [largeCalorieUnit](largecalorie%28%29.md): Returns a HealthKit unit for measuring energy in large calories (Cal).
- [smallCalorieUnit](smallcalorie%28%29.md): Returns a HealthKit unit for measuring energy in small calories (cal).
- [calorieUnit](calorie%28%29.md): Deprecated. Returns a HealthKit unit for measuring energy in calories.
