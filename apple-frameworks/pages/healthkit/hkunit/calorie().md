> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkunit/calorie()](https://developer.apple.com/documentation/healthkit/hkunit/calorie())

# calorie() (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 11.0) · iPadOS 8.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 4.0)

Returns a HealthKit unit for measuring energy in calories.

> To avoid confusion, use [largeCalorie()](largecalorie%28%29.md) or [smallCalorie()](smallcalorie%28%29.md) instead.

## Declaration

```swift
class func calorie() -> Self
```

<a id="return-value"></a>

## Return Value

A HealthKit unit for measuring energy in calories.

## See Also

### Constructing energy units

- [joule()](joule%28%29.md): Returns a HealthKit unit for measuring energy in joules.
- [jouleUnit(with:)](jouleunit%28with_%29.md): Returns a HealthKit unit for measuring energy, using joule units with the provided prefix.
- [kilocalorie()](kilocalorie%28%29.md): Returns a HealthKit unit for measuring energy in kilocalories.
- [largeCalorie()](largecalorie%28%29.md): Returns a HealthKit unit for measuring energy in large calories (Cal).
- [smallCalorie()](smallcalorie%28%29.md): Returns a HealthKit unit for measuring energy in small calories (cal).

# calorieUnit (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 11.0) · iPadOS 8.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 4.0)

Returns a HealthKit unit for measuring energy in calories.

> To avoid confusion, use [largeCalorieUnit](largecalorie%28%29.md) or [smallCalorieUnit](smallcalorie%28%29.md) instead.

## Declaration

```objectivec
+ (instancetype) calorieUnit;
```

<a id="return-value"></a>

## Return Value

A HealthKit unit for measuring energy in calories.

## See Also

### Constructing energy units

- [jouleUnit](joule%28%29.md): Returns a HealthKit unit for measuring energy in joules.
- [jouleUnitWithMetricPrefix:](jouleunit%28with_%29.md): Returns a HealthKit unit for measuring energy, using joule units with the provided prefix.
- [kilocalorieUnit](kilocalorie%28%29.md): Returns a HealthKit unit for measuring energy in kilocalories.
- [largeCalorieUnit](largecalorie%28%29.md): Returns a HealthKit unit for measuring energy in large calories (Cal).
- [smallCalorieUnit](smallcalorie%28%29.md): Returns a HealthKit unit for measuring energy in small calories (cal).
