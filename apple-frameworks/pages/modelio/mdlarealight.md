> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlarealight](https://developer.apple.com/documentation/modelio/mdlarealight)

# MDLAreaLight (Swift)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A light source that illuminates a 3D scene from an area with a specific shape.

## Declaration

```swift
class MDLAreaLight
```

<a id="overview"></a>

## Overview

Unlike other light sources that illuminate a scene from a single point or direction, an area light has a specific shape. The shape of an area light is a two-dimensional figure in the xy-plane of the light’s local coordinate space, and its illumination is directed in the negative z-axis direction (spreading out from that direction according to the inherited [innerConeAngle](mdlphysicallyplausiblelight/innerconeangle.md) and [outerConeAngle](mdlphysicallyplausiblelight/outerconeangle.md) properties).

Both the [MDLAreaLight](mdlarealight.md) and [MDLPhotometricLight](mdlphotometriclight.md) classes can describe lights with interesting shapes. An area light offers a simpler design that can be implemented with better rendering performance, and a photometric light offers design that better models real-world light fixtures at the cost of higher computational complexity.

## Topics

### Managing a Light’s Shape

- [areaRadius](mdlarealight/arearadius.md): The radius, in units of local coordinate space, of the area from which light emanates.
- [aspect](mdlarealight/aspect.md): The aspect ratio of the light’s shape.
- [superEllipticPower](mdlarealight/superellipticpower.md): A vector that controls the roundness of a superelliptical light in the x- and y-axis directions.

## Relationships

### Inherits From

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

- [MDLLight](mdllight.md): The abstract superclass for objects that describe light sources in a scene.
- [MDLLightProbe](mdllightprobe.md): A light source described in terms of the variations in color and intensity of its illumination in all directions.
- [MDLLightProbeIrradianceDataSource](mdllightprobeirradiancedatasource.md): Adopt this protocol to provide information for use in automatic placement of light probes around a scene.
- [MDLPhotometricLight](mdlphotometriclight.md): A light source whose shape, direction, and intensity of illumination are determined by a photometric profile.
- [MDLPhysicallyPlausibleLight](mdlphysicallyplausiblelight.md): A light source for use in shading models based on real-world physics.

# MDLAreaLight (Objective-C)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A light source that illuminates a 3D scene from an area with a specific shape.

## Declaration

```objectivec
@interface MDLAreaLight : MDLPhysicallyPlausibleLight
```

<a id="overview"></a>

## Overview

Unlike other light sources that illuminate a scene from a single point or direction, an area light has a specific shape. The shape of an area light is a two-dimensional figure in the xy-plane of the light’s local coordinate space, and its illumination is directed in the negative z-axis direction (spreading out from that direction according to the inherited [innerConeAngle](mdlphysicallyplausiblelight/innerconeangle.md) and [outerConeAngle](mdlphysicallyplausiblelight/outerconeangle.md) properties).

Both the [MDLAreaLight](mdlarealight.md) and [MDLPhotometricLight](mdlphotometriclight.md) classes can describe lights with interesting shapes. An area light offers a simpler design that can be implemented with better rendering performance, and a photometric light offers design that better models real-world light fixtures at the cost of higher computational complexity.

## Topics

### Managing a Light’s Shape

- [areaRadius](mdlarealight/arearadius.md): The radius, in units of local coordinate space, of the area from which light emanates.
- [aspect](mdlarealight/aspect.md): The aspect ratio of the light’s shape.
- [superEllipticPower](mdlarealight/superellipticpower.md): A vector that controls the roundness of a superelliptical light in the x- and y-axis directions.

## Relationships

### Inherits From

- [MDLPhysicallyPlausibleLight](mdlphysicallyplausiblelight.md)

## See Also

### Lights

- [MDLLight](mdllight.md): The abstract superclass for objects that describe light sources in a scene.
- [MDLLightProbe](mdllightprobe.md): A light source described in terms of the variations in color and intensity of its illumination in all directions.
- [MDLLightProbeIrradianceDataSource](mdllightprobeirradiancedatasource.md): Adopt this protocol to provide information for use in automatic placement of light probes around a scene.
- [MDLPhotometricLight](mdlphotometriclight.md): A light source whose shape, direction, and intensity of illumination are determined by a photometric profile.
- [MDLPhysicallyPlausibleLight](mdlphysicallyplausiblelight.md): A light source for use in shading models based on real-world physics.
