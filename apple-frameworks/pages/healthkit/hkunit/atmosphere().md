> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/healthkit/hkunit/atmosphere()

# atmosphere() (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Returns a HealthKit unit for measuring pressure in atmospheres.

## Declaration

```swift
class func atmosphere() -> Self
```

<a id="return-value"></a>

## Return Value

A HealthKit unit for measuring pressure in atmospheres.

<a id="Discussion"></a>

## Discussion

One atmosphere is the average atmospheric pressure at sea level.

## See Also

### Constructing pressure units

- [pascal()](pascal%28%29.md): Returns a HealthKit unit for measuring pressure in pascals.
- [pascalUnit(with:)](pascalunit%28with_%29.md): Returns a HealthKit unit for measuring pressure, using pascal units with the provided prefix.
- [millimeterOfMercury()](millimeterofmercury%28%29.md): Returns a HealthKit unit for measuring pressure in millimeters of mercury.
- [inchesOfMercury()](inchesofmercury%28%29.md): Returns a HealthKit unit for measuring pressure in inches of mercury.
- [centimeterOfWater()](centimeterofwater%28%29.md): Returns a HealthKit unit for measuring pressure in centimeters of water.
- [decibelAWeightedSoundPressureLevel()](decibelaweightedsoundpressurelevel%28%29.md): Returns a HealthKit unit for measuring the difference between the local pressure and the ambient atmospheric pressure caused by sound.

# atmosphereUnit (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Returns a HealthKit unit for measuring pressure in atmospheres.

## Declaration

```objectivec
+ (instancetype) atmosphereUnit;
```

<a id="return-value"></a>

## Return Value

A HealthKit unit for measuring pressure in atmospheres.

<a id="Discussion"></a>

## Discussion

One atmosphere is the average atmospheric pressure at sea level.

## See Also

### Constructing pressure units

- [pascalUnit](pascal%28%29.md): Returns a HealthKit unit for measuring pressure in pascals.
- [pascalUnitWithMetricPrefix:](pascalunit%28with_%29.md): Returns a HealthKit unit for measuring pressure, using pascal units with the provided prefix.
- [millimeterOfMercuryUnit](millimeterofmercury%28%29.md): Returns a HealthKit unit for measuring pressure in millimeters of mercury.
- [inchesOfMercuryUnit](inchesofmercury%28%29.md): Returns a HealthKit unit for measuring pressure in inches of mercury.
- [centimeterOfWaterUnit](centimeterofwater%28%29.md): Returns a HealthKit unit for measuring pressure in centimeters of water.
- [decibelAWeightedSoundPressureLevelUnit](decibelaweightedsoundpressurelevel%28%29.md): Returns a HealthKit unit for measuring the difference between the local pressure and the ambient atmospheric pressure caused by sound.
