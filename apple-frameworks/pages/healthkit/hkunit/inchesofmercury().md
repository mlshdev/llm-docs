> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkunit/inchesofmercury()](https://developer.apple.com/documentation/healthkit/hkunit/inchesofmercury())

# inchesOfMercury() (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

Returns a HealthKit unit for measuring pressure in inches of mercury.

## Declaration

```swift
class func inchesOfMercury() -> Self
```

<a id="return-value"></a>

## Return Value

A HealthKit unit for measuring pressure in inches of mercury.

## See Also

### Constructing pressure units

- [pascal()](pascal%28%29.md): Returns a HealthKit unit for measuring pressure in pascals.
- [pascalUnit(with:)](pascalunit%28with_%29.md): Returns a HealthKit unit for measuring pressure, using pascal units with the provided prefix.
- [millimeterOfMercury()](millimeterofmercury%28%29.md): Returns a HealthKit unit for measuring pressure in millimeters of mercury.
- [centimeterOfWater()](centimeterofwater%28%29.md): Returns a HealthKit unit for measuring pressure in centimeters of water.
- [atmosphere()](atmosphere%28%29.md): Returns a HealthKit unit for measuring pressure in atmospheres.
- [decibelAWeightedSoundPressureLevel()](decibelaweightedsoundpressurelevel%28%29.md): Returns a HealthKit unit for measuring the difference between the local pressure and the ambient atmospheric pressure caused by sound.

# inchesOfMercuryUnit (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

Returns a HealthKit unit for measuring pressure in inches of mercury.

## Declaration

```objectivec
+ (instancetype) inchesOfMercuryUnit;
```

<a id="return-value"></a>

## Return Value

A HealthKit unit for measuring pressure in inches of mercury.

## See Also

### Constructing pressure units

- [pascalUnit](pascal%28%29.md): Returns a HealthKit unit for measuring pressure in pascals.
- [pascalUnitWithMetricPrefix:](pascalunit%28with_%29.md): Returns a HealthKit unit for measuring pressure, using pascal units with the provided prefix.
- [millimeterOfMercuryUnit](millimeterofmercury%28%29.md): Returns a HealthKit unit for measuring pressure in millimeters of mercury.
- [centimeterOfWaterUnit](centimeterofwater%28%29.md): Returns a HealthKit unit for measuring pressure in centimeters of water.
- [atmosphereUnit](atmosphere%28%29.md): Returns a HealthKit unit for measuring pressure in atmospheres.
- [decibelAWeightedSoundPressureLevelUnit](decibelaweightedsoundpressurelevel%28%29.md): Returns a HealthKit unit for measuring the difference between the local pressure and the ambient atmospheric pressure caused by sound.
