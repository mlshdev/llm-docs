> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkunit/smallcalorie()](https://developer.apple.com/documentation/healthkit/hkunit/smallcalorie())

# smallCalorie() (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 4.0+

Returns a HealthKit unit for measuring energy in small calories (cal).

## Declaration

```swift
class func smallCalorie() -> Self
```

<a id="Discussion"></a>

## Discussion

This unit represents the gram calorie, or the amount of energy needed to raise 1 gram of water by 1 degree Celsius (1 cal = 4.1840 J).

This unit is occasionally used in chemistry and other sciences, but it should not be confused with the kilocalorie, or large calorie, which is  used for measuring food energy in many regions.

## See Also

### Constructing energy units

- [joule()](joule%28%29.md): Returns a HealthKit unit for measuring energy in joules.
- [jouleUnit(with:)](jouleunit%28with_%29.md): Returns a HealthKit unit for measuring energy, using joule units with the provided prefix.
- [kilocalorie()](kilocalorie%28%29.md): Returns a HealthKit unit for measuring energy in kilocalories.
- [largeCalorie()](largecalorie%28%29.md): Returns a HealthKit unit for measuring energy in large calories (Cal).
- [calorie()](calorie%28%29.md): Deprecated. Returns a HealthKit unit for measuring energy in calories.

# smallCalorieUnit (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 4.0+

Returns a HealthKit unit for measuring energy in small calories (cal).

## Declaration

```objectivec
+ (instancetype) smallCalorieUnit;
```

<a id="Discussion"></a>

## Discussion

This unit represents the gram calorie, or the amount of energy needed to raise 1 gram of water by 1 degree Celsius (1 cal = 4.1840 J).

This unit is occasionally used in chemistry and other sciences, but it should not be confused with the kilocalorie, or large calorie, which is  used for measuring food energy in many regions.

## See Also

### Constructing energy units

- [jouleUnit](joule%28%29.md): Returns a HealthKit unit for measuring energy in joules.
- [jouleUnitWithMetricPrefix:](jouleunit%28with_%29.md): Returns a HealthKit unit for measuring energy, using joule units with the provided prefix.
- [kilocalorieUnit](kilocalorie%28%29.md): Returns a HealthKit unit for measuring energy in kilocalories.
- [largeCalorieUnit](largecalorie%28%29.md): Returns a HealthKit unit for measuring energy in large calories (Cal).
- [calorieUnit](calorie%28%29.md): Deprecated. Returns a HealthKit unit for measuring energy in calories.
