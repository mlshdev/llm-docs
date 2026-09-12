> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srambientlightsample/lux](https://developer.apple.com/documentation/sensorkit/srambientlightsample/lux)

# lux (Swift)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

An object that describes the sample’s luminous flux.

## Declaration

```swift
var lux: Measurement<UnitIlluminance> { get }
```

## See Also

### Measuring light level

- [chromaticity](chromaticity-swift.property.md): A coordinate pair that describes the sample’s light brightness and tint.
- [SRAmbientLightSample.Chromaticity](chromaticity-swift.struct.md): A coordinate pair that describes light brightness and tint.
- [placement](placement.md): The light’s location relative to the sensor.
- [SRAmbientLightSample.SensorPlacement](sensorplacement.md): Directional values that describe light-source location with respect to the sensor.

# lux (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

An object that describes the sample’s luminous flux.

## Declaration

```objectivec
@property (copy, readonly) NSMeasurement<NSUnitIlluminance *> * lux;
```

## See Also

### Measuring light level

- [chromaticity](chromaticity-swift.property.md): A coordinate pair that describes the sample’s light brightness and tint.
- [SRAmbientLightChromaticity](chromaticity-swift.struct.md): A coordinate pair that describes light brightness and tint.
- [placement](placement.md): The light’s location relative to the sensor.
- [SRAmbientLightSensorPlacement](sensorplacement.md): Directional values that describe light-source location with respect to the sensor.
