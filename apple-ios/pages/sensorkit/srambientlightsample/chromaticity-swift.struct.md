> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srambientlightsample/chromaticity-swift.struct](https://developer.apple.com/documentation/sensorkit/srambientlightsample/chromaticity-swift.struct)

# SRAmbientLightSample.Chromaticity (Swift)

**Framework:** SensorKit  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A coordinate pair that describes light brightness and tint.

## Declaration

```swift
struct Chromaticity
```

<a id="overview"></a>

## Overview

The [SRAmbientLightSample](../srambientlightsample.md) class provides read-only access to an instance of this structure through its [chromaticity](chromaticity-swift.property.md) property.

## Topics

### Creating a Chromaticity

- [init()](chromaticity-swift.struct/init%28%29.md): Creates a chromaticity instance.
- [init(x:y:)](chromaticity-swift.struct/init%28x_y_%29.md): Creates a chromaticity instance from the argument coordinate pair.

### Setting chromaticity

- [x](chromaticity-swift.struct/x.md): The chromaticity x-value.
- [y](chromaticity-swift.struct/y.md): The chromaticity y-value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Measuring light level

- [chromaticity](chromaticity-swift.property.md): A coordinate pair that describes the sample’s light brightness and tint.
- [lux](lux.md): An object that describes the sample’s luminous flux.
- [placement](placement.md): The light’s location relative to the sensor.
- [SRAmbientLightSample.SensorPlacement](sensorplacement.md): Directional values that describe light-source location with respect to the sensor.

# SRAmbientLightChromaticity (Objective-C)

**Framework:** SensorKit  
**Kind:** Structure

A coordinate pair that describes light brightness and tint.

## Declaration

```objectivec
typedef struct { ... } SRAmbientLightChromaticity;
```

<a id="overview"></a>

## Overview

The [SRAmbientLightSample](../srambientlightsample.md) class provides read-only access to an instance of this structure through its [chromaticity](chromaticity-swift.property.md) property.

## Topics

### Setting chromaticity

- [x](chromaticity-swift.struct/x.md): The chromaticity x-value.
- [y](chromaticity-swift.struct/y.md): The chromaticity y-value.

## See Also

### Measuring light level

- [chromaticity](chromaticity-swift.property.md): A coordinate pair that describes the sample’s light brightness and tint.
- [lux](lux.md): An object that describes the sample’s luminous flux.
- [placement](placement.md): The light’s location relative to the sensor.
- [SRAmbientLightSensorPlacement](sensorplacement.md): Directional values that describe light-source location with respect to the sensor.
