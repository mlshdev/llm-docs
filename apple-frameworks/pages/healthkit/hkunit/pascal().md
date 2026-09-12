> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkunit/pascal()](https://developer.apple.com/documentation/healthkit/hkunit/pascal())

# pascal() (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Returns a HealthKit unit for measuring pressure in pascals.

## Declaration

```swift
class func pascal() -> Self
```

<a id="return-value"></a>

## Return Value

A HealthKit unit for measuring pressure in pascals.

## See Also

### Constructing pressure units

- [pascalUnit(with:)](pascalunit%28with_%29.md): Returns a HealthKit unit for measuring pressure, using pascal units with the provided prefix.
- [millimeterOfMercury()](millimeterofmercury%28%29.md): Returns a HealthKit unit for measuring pressure in millimeters of mercury.
- [inchesOfMercury()](inchesofmercury%28%29.md): Returns a HealthKit unit for measuring pressure in inches of mercury.
- [centimeterOfWater()](centimeterofwater%28%29.md): Returns a HealthKit unit for measuring pressure in centimeters of water.
- [atmosphere()](atmosphere%28%29.md): Returns a HealthKit unit for measuring pressure in atmospheres.
- [decibelAWeightedSoundPressureLevel()](decibelaweightedsoundpressurelevel%28%29.md): Returns a HealthKit unit for measuring the difference between the local pressure and the ambient atmospheric pressure caused by sound.

# pascalUnit (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Returns a HealthKit unit for measuring pressure in pascals.

## Declaration

```objectivec
+ (instancetype) pascalUnit;
```

<a id="return-value"></a>

## Return Value

A HealthKit unit for measuring pressure in pascals.

## See Also

### Constructing pressure units

- [pascalUnitWithMetricPrefix:](pascalunit%28with_%29.md): Returns a HealthKit unit for measuring pressure, using pascal units with the provided prefix.
- [millimeterOfMercuryUnit](millimeterofmercury%28%29.md): Returns a HealthKit unit for measuring pressure in millimeters of mercury.
- [inchesOfMercuryUnit](inchesofmercury%28%29.md): Returns a HealthKit unit for measuring pressure in inches of mercury.
- [centimeterOfWaterUnit](centimeterofwater%28%29.md): Returns a HealthKit unit for measuring pressure in centimeters of water.
- [atmosphereUnit](atmosphere%28%29.md): Returns a HealthKit unit for measuring pressure in atmospheres.
- [decibelAWeightedSoundPressureLevelUnit](decibelaweightedsoundpressurelevel%28%29.md): Returns a HealthKit unit for measuring the difference between the local pressure and the ambient atmospheric pressure caused by sound.
