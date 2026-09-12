> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkunit/largecalorie()](https://developer.apple.com/documentation/healthkit/hkunit/largecalorie())

# largeCalorie() (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 4.0+

Returns a HealthKit unit for measuring energy in large calories (Cal).

## Declaration

```swift
class func largeCalorie() -> Self
```

<a id="Discussion"></a>

## Discussion

The large calorie is the same as a kilocalorie (1 Cal = 4184.0 J).

## See Also

### Constructing energy units

- [joule()](joule%28%29.md): Returns a HealthKit unit for measuring energy in joules.
- [jouleUnit(with:)](jouleunit%28with_%29.md): Returns a HealthKit unit for measuring energy, using joule units with the provided prefix.
- [kilocalorie()](kilocalorie%28%29.md): Returns a HealthKit unit for measuring energy in kilocalories.
- [smallCalorie()](smallcalorie%28%29.md): Returns a HealthKit unit for measuring energy in small calories (cal).
- [calorie()](calorie%28%29.md): Deprecated. Returns a HealthKit unit for measuring energy in calories.

# largeCalorieUnit (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 4.0+

Returns a HealthKit unit for measuring energy in large calories (Cal).

## Declaration

```objectivec
+ (instancetype) largeCalorieUnit;
```

<a id="Discussion"></a>

## Discussion

The large calorie is the same as a kilocalorie (1 Cal = 4184.0 J).

## See Also

### Constructing energy units

- [jouleUnit](joule%28%29.md): Returns a HealthKit unit for measuring energy in joules.
- [jouleUnitWithMetricPrefix:](jouleunit%28with_%29.md): Returns a HealthKit unit for measuring energy, using joule units with the provided prefix.
- [kilocalorieUnit](kilocalorie%28%29.md): Returns a HealthKit unit for measuring energy in kilocalories.
- [smallCalorieUnit](smallcalorie%28%29.md): Returns a HealthKit unit for measuring energy in small calories (cal).
- [calorieUnit](calorie%28%29.md): Deprecated. Returns a HealthKit unit for measuring energy in calories.
