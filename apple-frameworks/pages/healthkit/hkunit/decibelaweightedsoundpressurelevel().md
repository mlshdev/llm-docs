> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkunit/decibelaweightedsoundpressurelevel()](https://developer.apple.com/documentation/healthkit/hkunit/decibelaweightedsoundpressurelevel())

# decibelAWeightedSoundPressureLevel() (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a HealthKit unit for measuring the difference between the local pressure and the ambient atmospheric pressure caused by sound.

## Declaration

```swift
class func decibelAWeightedSoundPressureLevel() -> Self
```

## See Also

### Related Documentation

- [decibelHearingLevel()](decibelhearinglevel%28%29.md): Returns a HealthKit unit for measuring the intensity of a sound.

### Constructing pressure units

- [pascal()](pascal%28%29.md): Returns a HealthKit unit for measuring pressure in pascals.
- [pascalUnit(with:)](pascalunit%28with_%29.md): Returns a HealthKit unit for measuring pressure, using pascal units with the provided prefix.
- [millimeterOfMercury()](millimeterofmercury%28%29.md): Returns a HealthKit unit for measuring pressure in millimeters of mercury.
- [inchesOfMercury()](inchesofmercury%28%29.md): Returns a HealthKit unit for measuring pressure in inches of mercury.
- [centimeterOfWater()](centimeterofwater%28%29.md): Returns a HealthKit unit for measuring pressure in centimeters of water.
- [atmosphere()](atmosphere%28%29.md): Returns a HealthKit unit for measuring pressure in atmospheres.

# decibelAWeightedSoundPressureLevelUnit (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a HealthKit unit for measuring the difference between the local pressure and the ambient atmospheric pressure caused by sound.

## Declaration

```objectivec
+ (instancetype) decibelAWeightedSoundPressureLevelUnit;
```

## See Also

### Related Documentation

- [decibelHearingLevelUnit](decibelhearinglevel%28%29.md): Returns a HealthKit unit for measuring the intensity of a sound.

### Constructing pressure units

- [pascalUnit](pascal%28%29.md): Returns a HealthKit unit for measuring pressure in pascals.
- [pascalUnitWithMetricPrefix:](pascalunit%28with_%29.md): Returns a HealthKit unit for measuring pressure, using pascal units with the provided prefix.
- [millimeterOfMercuryUnit](millimeterofmercury%28%29.md): Returns a HealthKit unit for measuring pressure in millimeters of mercury.
- [inchesOfMercuryUnit](inchesofmercury%28%29.md): Returns a HealthKit unit for measuring pressure in inches of mercury.
- [centimeterOfWaterUnit](centimeterofwater%28%29.md): Returns a HealthKit unit for measuring pressure in centimeters of water.
- [atmosphereUnit](atmosphere%28%29.md): Returns a HealthKit unit for measuring pressure in atmospheres.
