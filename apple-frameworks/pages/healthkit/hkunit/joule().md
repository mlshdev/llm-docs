> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkunit/joule()](https://developer.apple.com/documentation/healthkit/hkunit/joule())

# joule() (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Returns a HealthKit unit for measuring energy in joules.

## Declaration

```swift
class func joule() -> Self
```

<a id="return-value"></a>

## Return Value

A HealthKit unit for measuring energy in joules.

## See Also

### Constructing energy units

- [jouleUnit(with:)](jouleunit%28with_%29.md): Returns a HealthKit unit for measuring energy, using joule units with the provided prefix.
- [kilocalorie()](kilocalorie%28%29.md): Returns a HealthKit unit for measuring energy in kilocalories.
- [largeCalorie()](largecalorie%28%29.md): Returns a HealthKit unit for measuring energy in large calories (Cal).
- [smallCalorie()](smallcalorie%28%29.md): Returns a HealthKit unit for measuring energy in small calories (cal).
- [calorie()](calorie%28%29.md): Deprecated. Returns a HealthKit unit for measuring energy in calories.

# jouleUnit (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Returns a HealthKit unit for measuring energy in joules.

## Declaration

```objectivec
+ (instancetype) jouleUnit;
```

<a id="return-value"></a>

## Return Value

A HealthKit unit for measuring energy in joules.

## See Also

### Constructing energy units

- [jouleUnitWithMetricPrefix:](jouleunit%28with_%29.md): Returns a HealthKit unit for measuring energy, using joule units with the provided prefix.
- [kilocalorieUnit](kilocalorie%28%29.md): Returns a HealthKit unit for measuring energy in kilocalories.
- [largeCalorieUnit](largecalorie%28%29.md): Returns a HealthKit unit for measuring energy in large calories (Cal).
- [smallCalorieUnit](smallcalorie%28%29.md): Returns a HealthKit unit for measuring energy in small calories (cal).
- [calorieUnit](calorie%28%29.md): Deprecated. Returns a HealthKit unit for measuring energy in calories.
