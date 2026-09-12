> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkunit/millimeterofmercury()](https://developer.apple.com/documentation/healthkit/hkunit/millimeterofmercury())

# millimeterOfMercury() (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Returns a HealthKit unit for measuring pressure in millimeters of mercury.

## Declaration

```swift
class func millimeterOfMercury() -> Self
```

<a id="return-value"></a>

## Return Value

A HealthKit unit for measuring pressure in millimeters of mercury.

<a id="Discussion"></a>

## Discussion

One millimeter of mercury is the pressure needed to raise a column of mercury by 1 millimeter. Even through it is not an SI unit, the millimeter of mercury unit is used in many scientific fields. In HealthKit, it is commonly used to measure blood pressure.

## See Also

### Constructing pressure units

- [pascal()](pascal%28%29.md): Returns a HealthKit unit for measuring pressure in pascals.
- [pascalUnit(with:)](pascalunit%28with_%29.md): Returns a HealthKit unit for measuring pressure, using pascal units with the provided prefix.
- [inchesOfMercury()](inchesofmercury%28%29.md): Returns a HealthKit unit for measuring pressure in inches of mercury.
- [centimeterOfWater()](centimeterofwater%28%29.md): Returns a HealthKit unit for measuring pressure in centimeters of water.
- [atmosphere()](atmosphere%28%29.md): Returns a HealthKit unit for measuring pressure in atmospheres.
- [decibelAWeightedSoundPressureLevel()](decibelaweightedsoundpressurelevel%28%29.md): Returns a HealthKit unit for measuring the difference between the local pressure and the ambient atmospheric pressure caused by sound.

# millimeterOfMercuryUnit (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Returns a HealthKit unit for measuring pressure in millimeters of mercury.

## Declaration

```objectivec
+ (instancetype) millimeterOfMercuryUnit;
```

<a id="return-value"></a>

## Return Value

A HealthKit unit for measuring pressure in millimeters of mercury.

<a id="Discussion"></a>

## Discussion

One millimeter of mercury is the pressure needed to raise a column of mercury by 1 millimeter. Even through it is not an SI unit, the millimeter of mercury unit is used in many scientific fields. In HealthKit, it is commonly used to measure blood pressure.

## See Also

### Constructing pressure units

- [pascalUnit](pascal%28%29.md): Returns a HealthKit unit for measuring pressure in pascals.
- [pascalUnitWithMetricPrefix:](pascalunit%28with_%29.md): Returns a HealthKit unit for measuring pressure, using pascal units with the provided prefix.
- [inchesOfMercuryUnit](inchesofmercury%28%29.md): Returns a HealthKit unit for measuring pressure in inches of mercury.
- [centimeterOfWaterUnit](centimeterofwater%28%29.md): Returns a HealthKit unit for measuring pressure in centimeters of water.
- [atmosphereUnit](atmosphere%28%29.md): Returns a HealthKit unit for measuring pressure in atmospheres.
- [decibelAWeightedSoundPressureLevelUnit](decibelaweightedsoundpressurelevel%28%29.md): Returns a HealthKit unit for measuring the difference between the local pressure and the ambient atmospheric pressure caused by sound.
