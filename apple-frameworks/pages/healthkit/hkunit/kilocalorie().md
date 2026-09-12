> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkunit/kilocalorie()](https://developer.apple.com/documentation/healthkit/hkunit/kilocalorie())

# kilocalorie() (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Returns a HealthKit unit for measuring energy in kilocalories.

## Declaration

```swift
class func kilocalorie() -> Self
```

<a id="return-value"></a>

## Return Value

A HealthKit unit for measuring energy in kilocalories.

<a id="Discussion"></a>

## Discussion

The kilocalorie is used to measure food energy in many regions.

## See Also

### Constructing energy units

- [joule()](joule%28%29.md): Returns a HealthKit unit for measuring energy in joules.
- [jouleUnit(with:)](jouleunit%28with_%29.md): Returns a HealthKit unit for measuring energy, using joule units with the provided prefix.
- [largeCalorie()](largecalorie%28%29.md): Returns a HealthKit unit for measuring energy in large calories (Cal).
- [smallCalorie()](smallcalorie%28%29.md): Returns a HealthKit unit for measuring energy in small calories (cal).
- [calorie()](calorie%28%29.md): Deprecated. Returns a HealthKit unit for measuring energy in calories.

# kilocalorieUnit (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Returns a HealthKit unit for measuring energy in kilocalories.

## Declaration

```objectivec
+ (instancetype) kilocalorieUnit;
```

<a id="return-value"></a>

## Return Value

A HealthKit unit for measuring energy in kilocalories.

<a id="Discussion"></a>

## Discussion

The kilocalorie is used to measure food energy in many regions.

## See Also

### Constructing energy units

- [jouleUnit](joule%28%29.md): Returns a HealthKit unit for measuring energy in joules.
- [jouleUnitWithMetricPrefix:](jouleunit%28with_%29.md): Returns a HealthKit unit for measuring energy, using joule units with the provided prefix.
- [largeCalorieUnit](largecalorie%28%29.md): Returns a HealthKit unit for measuring energy in large calories (Cal).
- [smallCalorieUnit](smallcalorie%28%29.md): Returns a HealthKit unit for measuring energy in small calories (cal).
- [calorieUnit](calorie%28%29.md): Deprecated. Returns a HealthKit unit for measuring energy in calories.
