> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srambientlightsample/sensorplacement](https://developer.apple.com/documentation/sensorkit/srambientlightsample/sensorplacement)

# SRAmbientLightSample.SensorPlacement (Swift)

**Framework:** SensorKit  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Directional values that describe light-source location with respect to the sensor.

## Declaration

```swift
enum SensorPlacement
```

## Topics

### Placement configurations

- [SRAmbientLightSample.SensorPlacement.frontBottom](sensorplacement/frontbottom.md): Indicates that the light source is toward the bottom of the sensor.
- [SRAmbientLightSample.SensorPlacement.frontBottomLeft](sensorplacement/frontbottomleft.md): Indicates that the light source is toward the bottom-left of the sensor.
- [SRAmbientLightSample.SensorPlacement.frontBottomRight](sensorplacement/frontbottomright.md): Indicates that the light source is toward the bottom-right of the sensor.
- [SRAmbientLightSample.SensorPlacement.frontLeft](sensorplacement/frontleft.md): Indicates that the light source is toward the left of the sensor.
- [SRAmbientLightSample.SensorPlacement.frontRight](sensorplacement/frontright.md): Indicates that the light source is toward the right of the sensor.
- [SRAmbientLightSample.SensorPlacement.frontTop](sensorplacement/fronttop.md): Indicates that the light source is toward the top of the sensor.
- [SRAmbientLightSample.SensorPlacement.frontTopLeft](sensorplacement/fronttopleft.md): Indicates that the light source is toward the top-left of the sensor.
- [SRAmbientLightSample.SensorPlacement.frontTopRight](sensorplacement/fronttopright.md): Indicates that the light source is toward the top-right of the sensor.
- [SRAmbientLightSample.SensorPlacement.unknown](sensorplacement/unknown.md): Indicates that the sensor can’t determine the light source’s location.

### Initializers

- [init(rawValue:)](sensorplacement/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Measuring light level

- [chromaticity](chromaticity-swift.property.md): A coordinate pair that describes the sample’s light brightness and tint.
- [SRAmbientLightSample.Chromaticity](chromaticity-swift.struct.md): A coordinate pair that describes light brightness and tint.
- [lux](lux.md): An object that describes the sample’s luminous flux.
- [placement](placement.md): The light’s location relative to the sensor.

# SRAmbientLightSensorPlacement (Objective-C)

**Framework:** SensorKit  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Directional values that describe light-source location with respect to the sensor.

## Declaration

```objectivec
enum SRAmbientLightSensorPlacement : NSInteger;
```

## Topics

### Placement configurations

- [SRAmbientLightSensorPlacementFrontBottom](sensorplacement/frontbottom.md): Indicates that the light source is toward the bottom of the sensor.
- [SRAmbientLightSensorPlacementFrontBottomLeft](sensorplacement/frontbottomleft.md): Indicates that the light source is toward the bottom-left of the sensor.
- [SRAmbientLightSensorPlacementFrontBottomRight](sensorplacement/frontbottomright.md): Indicates that the light source is toward the bottom-right of the sensor.
- [SRAmbientLightSensorPlacementFrontLeft](sensorplacement/frontleft.md): Indicates that the light source is toward the left of the sensor.
- [SRAmbientLightSensorPlacementFrontRight](sensorplacement/frontright.md): Indicates that the light source is toward the right of the sensor.
- [SRAmbientLightSensorPlacementFrontTop](sensorplacement/fronttop.md): Indicates that the light source is toward the top of the sensor.
- [SRAmbientLightSensorPlacementFrontTopLeft](sensorplacement/fronttopleft.md): Indicates that the light source is toward the top-left of the sensor.
- [SRAmbientLightSensorPlacementFrontTopRight](sensorplacement/fronttopright.md): Indicates that the light source is toward the top-right of the sensor.
- [SRAmbientLightSensorPlacementUnknown](sensorplacement/unknown.md): Indicates that the sensor can’t determine the light source’s location.

## See Also

### Measuring light level

- [chromaticity](chromaticity-swift.property.md): A coordinate pair that describes the sample’s light brightness and tint.
- [SRAmbientLightChromaticity](chromaticity-swift.struct.md): A coordinate pair that describes light brightness and tint.
- [lux](lux.md): An object that describes the sample’s luminous flux.
- [placement](placement.md): The light’s location relative to the sensor.
