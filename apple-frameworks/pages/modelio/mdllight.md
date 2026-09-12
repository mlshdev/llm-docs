> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdllight](https://developer.apple.com/documentation/modelio/mdllight)

# MDLLight (Swift)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The abstract superclass for objects that describe light sources in a scene.

## Declaration

```swift
class MDLLight
```

<a id="overview"></a>

## Overview

When you load lights from an asset file using the [MDLAsset](mdlasset.md) class or create lights when building an asset for export, you use one or more of the concrete subclasses [MDLPhysicallyPlausibleLight](mdlphysicallyplausiblelight.md), [MDLAreaLight](mdlarealight.md), [MDLPhotometricLight](mdlphotometriclight.md), or [MDLLightProbe](mdllightprobe.md).

## Topics

### Working with Lights

- [irradiance(atPoint:)](mdllight/irradiance%28atpoint_%29.md): Returns the radiance of the light as received at a specific point in the same scene.
- [irradiance(atPoint:colorSpace:)](mdllight/irradiance%28atpoint_colorspace_%29.md): Returns the radiance of the light as received at a specific point in the same scene, expressed using the specified color space.
- [lightType](mdllight/lighttype.md): The type of the light.
- [colorSpace](mdllight/colorspace.md): The name of the Core Graphics color space to be used for interpreting the light’s color information.

### Constants

- [MDLLightType](mdllighttype.md): Options for the shape and style of illumination provided by a light, used by the [lightType](mdllight/lighttype.md) property.

## Relationships

### Inherits From

- [MDLObject](mdlobject.md)

### Inherited By

- [MDLLightProbe](mdllightprobe.md)
- [MDLPhysicallyPlausibleLight](mdlphysicallyplausiblelight.md)

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

- [MDLAreaLight](mdlarealight.md): A light source that illuminates a 3D scene from an area with a specific shape.
- [MDLLightProbe](mdllightprobe.md): A light source described in terms of the variations in color and intensity of its illumination in all directions.
- [MDLLightProbeIrradianceDataSource](mdllightprobeirradiancedatasource.md): Adopt this protocol to provide information for use in automatic placement of light probes around a scene.
- [MDLPhotometricLight](mdlphotometriclight.md): A light source whose shape, direction, and intensity of illumination are determined by a photometric profile.
- [MDLPhysicallyPlausibleLight](mdlphysicallyplausiblelight.md): A light source for use in shading models based on real-world physics.

# MDLLight (Objective-C)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The abstract superclass for objects that describe light sources in a scene.

## Declaration

```objectivec
@interface MDLLight : MDLObject
```

<a id="overview"></a>

## Overview

When you load lights from an asset file using the [MDLAsset](mdlasset.md) class or create lights when building an asset for export, you use one or more of the concrete subclasses [MDLPhysicallyPlausibleLight](mdlphysicallyplausiblelight.md), [MDLAreaLight](mdlarealight.md), [MDLPhotometricLight](mdlphotometriclight.md), or [MDLLightProbe](mdllightprobe.md).

## Topics

### Working with Lights

- [irradianceAtPoint:](mdllight/irradiance%28atpoint_%29.md): Returns the radiance of the light as received at a specific point in the same scene.
- [irradianceAtPoint:colorSpace:](mdllight/irradiance%28atpoint_colorspace_%29.md): Returns the radiance of the light as received at a specific point in the same scene, expressed using the specified color space.
- [lightType](mdllight/lighttype.md): The type of the light.
- [colorSpace](mdllight/colorspace.md): The name of the Core Graphics color space to be used for interpreting the light’s color information.

### Constants

- [MDLLightType](mdllighttype.md): Options for the shape and style of illumination provided by a light, used by the [lightType](mdllight/lighttype.md) property.

### Type Methods

- [lightWithSCNLight:](mdllight/lightwithscnlight_.md)

## Relationships

### Inherits From

- [MDLObject](mdlobject.md)

### Inherited By

- [MDLLightProbe](mdllightprobe.md)
- [MDLPhysicallyPlausibleLight](mdlphysicallyplausiblelight.md)

## See Also

### Lights

- [MDLAreaLight](mdlarealight.md): A light source that illuminates a 3D scene from an area with a specific shape.
- [MDLLightProbe](mdllightprobe.md): A light source described in terms of the variations in color and intensity of its illumination in all directions.
- [MDLLightProbeIrradianceDataSource](mdllightprobeirradiancedatasource.md): Adopt this protocol to provide information for use in automatic placement of light probes around a scene.
- [MDLPhotometricLight](mdlphotometriclight.md): A light source whose shape, direction, and intensity of illumination are determined by a photometric profile.
- [MDLPhysicallyPlausibleLight](mdlphysicallyplausiblelight.md): A light source for use in shading models based on real-world physics.
