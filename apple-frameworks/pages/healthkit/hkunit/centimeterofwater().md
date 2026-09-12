> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkunit/centimeterofwater()](https://developer.apple.com/documentation/healthkit/hkunit/centimeterofwater())

# centimeterOfWater() (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Returns a HealthKit unit for measuring pressure in centimeters of water.

## Declaration

```swift
class func centimeterOfWater() -> Self
```

<a id="return-value"></a>

## Return Value

A HealthKit unit for measuring pressure in centimeters of water.

<a id="Discussion"></a>

## Discussion

One centimeter of water is the pressure needed to raise a column of water by 1 centimeter.

## See Also

### Constructing pressure units

- [pascal()](pascal%28%29.md): Returns a HealthKit unit for measuring pressure in pascals.
- [pascalUnit(with:)](pascalunit%28with_%29.md): Returns a HealthKit unit for measuring pressure, using pascal units with the provided prefix.
- [millimeterOfMercury()](millimeterofmercury%28%29.md): Returns a HealthKit unit for measuring pressure in millimeters of mercury.
- [inchesOfMercury()](inchesofmercury%28%29.md): Returns a HealthKit unit for measuring pressure in inches of mercury.
- [atmosphere()](atmosphere%28%29.md): Returns a HealthKit unit for measuring pressure in atmospheres.
- [decibelAWeightedSoundPressureLevel()](decibelaweightedsoundpressurelevel%28%29.md): Returns a HealthKit unit for measuring the difference between the local pressure and the ambient atmospheric pressure caused by sound.

# centimeterOfWaterUnit (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Returns a HealthKit unit for measuring pressure in centimeters of water.

## Declaration

```objectivec
+ (instancetype) centimeterOfWaterUnit;
```

<a id="return-value"></a>

## Return Value

A HealthKit unit for measuring pressure in centimeters of water.

<a id="Discussion"></a>

## Discussion

One centimeter of water is the pressure needed to raise a column of water by 1 centimeter.

## See Also

### Constructing pressure units

- [pascalUnit](pascal%28%29.md): Returns a HealthKit unit for measuring pressure in pascals.
- [pascalUnitWithMetricPrefix:](pascalunit%28with_%29.md): Returns a HealthKit unit for measuring pressure, using pascal units with the provided prefix.
- [millimeterOfMercuryUnit](millimeterofmercury%28%29.md): Returns a HealthKit unit for measuring pressure in millimeters of mercury.
- [inchesOfMercuryUnit](inchesofmercury%28%29.md): Returns a HealthKit unit for measuring pressure in inches of mercury.
- [atmosphereUnit](atmosphere%28%29.md): Returns a HealthKit unit for measuring pressure in atmospheres.
- [decibelAWeightedSoundPressureLevelUnit](decibelaweightedsoundpressurelevel%28%29.md): Returns a HealthKit unit for measuring the difference between the local pressure and the ambient atmospheric pressure caused by sound.
