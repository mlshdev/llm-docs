> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlphysicallyplausiblelight](https://developer.apple.com/documentation/modelio/mdlphysicallyplausiblelight)

# MDLPhysicallyPlausibleLight (Swift)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A light source for use in shading models based on real-world physics.

## Declaration

```swift
class MDLPhysicallyPlausibleLight
```

## Topics

### Managing Light Color and Intensity

- [color](mdlphysicallyplausiblelight/color.md): The color of the light source.
- [lumens](mdlphysicallyplausiblelight/lumens.md): The total visible intensity of the light source, in lumens.
- [setColorByTemperature(\_:)](mdlphysicallyplausiblelight/setcolorbytemperature%28__%29.md): Sets the light’s color based on a black-body temperature.

### Managing Light Geometry

- [innerConeAngle](mdlphysicallyplausiblelight/innerconeangle.md): The radial angle, in degrees, of the area fully illuminated by the light.
- [outerConeAngle](mdlphysicallyplausiblelight/outerconeangle.md): The radial angle, in degrees, at which the illumination from a spotlight becomes zero.

### Managing Attenuation

- [attenuationStartDistance](mdlphysicallyplausiblelight/attenuationstartdistance.md): The distance from the light source, in units of local coordinate space, at which its illumination begins to diminish.
- [attenuationEndDistance](mdlphysicallyplausiblelight/attenuationenddistance.md): The distance from the light source, in units of local coordinate space, at which its illumination becomes zero.

## Relationships

### Inherits From

- [MDLLight](mdllight.md)

### Inherited By

- [MDLAreaLight](mdlarealight.md)
- [MDLPhotometricLight](mdlphotometriclight.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [MDLNamed](mdlnamed.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Lights

- [MDLLight](mdllight.md): The abstract superclass for objects that describe light sources in a scene.
- [MDLAreaLight](mdlarealight.md): A light source that illuminates a 3D scene from an area with a specific shape.
- [MDLLightProbe](mdllightprobe.md): A light source described in terms of the variations in color and intensity of its illumination in all directions.
- [MDLLightProbeIrradianceDataSource](mdllightprobeirradiancedatasource.md): Adopt this protocol to provide information for use in automatic placement of light probes around a scene.
- [MDLPhotometricLight](mdlphotometriclight.md): A light source whose shape, direction, and intensity of illumination are determined by a photometric profile.

# MDLPhysicallyPlausibleLight (Objective-C)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A light source for use in shading models based on real-world physics.

## Declaration

```objectivec
@interface MDLPhysicallyPlausibleLight : MDLLight
```

## Topics

### Managing Light Color and Intensity

- [color](mdlphysicallyplausiblelight/color.md): The color of the light source.
- [lumens](mdlphysicallyplausiblelight/lumens.md): The total visible intensity of the light source, in lumens.
- [setColorByTemperature:](mdlphysicallyplausiblelight/setcolorbytemperature%28__%29.md): Sets the light’s color based on a black-body temperature.

### Managing Light Geometry

- [innerConeAngle](mdlphysicallyplausiblelight/innerconeangle.md): The radial angle, in degrees, of the area fully illuminated by the light.
- [outerConeAngle](mdlphysicallyplausiblelight/outerconeangle.md): The radial angle, in degrees, at which the illumination from a spotlight becomes zero.

### Managing Attenuation

- [attenuationStartDistance](mdlphysicallyplausiblelight/attenuationstartdistance.md): The distance from the light source, in units of local coordinate space, at which its illumination begins to diminish.
- [attenuationEndDistance](mdlphysicallyplausiblelight/attenuationenddistance.md): The distance from the light source, in units of local coordinate space, at which its illumination becomes zero.

## Relationships

### Inherits From

- [MDLLight](mdllight.md)

### Inherited By

- [MDLAreaLight](mdlarealight.md)
- [MDLPhotometricLight](mdlphotometriclight.md)

## See Also

### Lights

- [MDLLight](mdllight.md): The abstract superclass for objects that describe light sources in a scene.
- [MDLAreaLight](mdlarealight.md): A light source that illuminates a 3D scene from an area with a specific shape.
- [MDLLightProbe](mdllightprobe.md): A light source described in terms of the variations in color and intensity of its illumination in all directions.
- [MDLLightProbeIrradianceDataSource](mdllightprobeirradiancedatasource.md): Adopt this protocol to provide information for use in automatic placement of light probes around a scene.
- [MDLPhotometricLight](mdlphotometriclight.md): A light source whose shape, direction, and intensity of illumination are determined by a photometric profile.
