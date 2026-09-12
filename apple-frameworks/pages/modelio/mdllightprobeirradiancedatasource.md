> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdllightprobeirradiancedatasource](https://developer.apple.com/documentation/modelio/mdllightprobeirradiancedatasource)

# MDLLightProbeIrradianceDataSource (Swift)

**Framework:** Model I/O  
**Kind:** Protocol  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Adopt this protocol to provide information for use in automatic placement of light probes around a scene.

## Declaration

```swift
protocol MDLLightProbeIrradianceDataSource : NSObjectProtocol
```

<a id="overview"></a>

## Overview

The [MDLAsset](mdlasset.md) [placeLightProbes(withDensity:heuristic:using:)](mdlasset/placelightprobes%28withdensity_heuristic_using_%29.md) method automatically creates [MDLLightProbe](mdllightprobe.md) objects, setting their positions and lighting parameters to provide optimal light probe coverage within a scene you define. When you use that method, you must provide an object implementing this protocol, which Model I/O queries in order to evaluate your scene.

## Topics

### Providing Light Probe Information

- [boundingBox](mdllightprobeirradiancedatasource/boundingbox.md): The bounding region of the scene to which light probes are being added.
- [sphericalHarmonicsLevel](mdllightprobeirradiancedatasource/sphericalharmonicslevel.md): The number of levels of spherical harmonics information provided by the data source.
- [sphericalHarmonicsCoefficients(atPosition:)](mdllightprobeirradiancedatasource/sphericalharmonicscoefficients%28atposition_%29.md): Asks the data source to provide spherical harmonics coefficients that describe lighting conditions in all directions from the specified point in a scene.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Lights

- [MDLLight](mdllight.md): The abstract superclass for objects that describe light sources in a scene.
- [MDLAreaLight](mdlarealight.md): A light source that illuminates a 3D scene from an area with a specific shape.
- [MDLLightProbe](mdllightprobe.md): A light source described in terms of the variations in color and intensity of its illumination in all directions.
- [MDLPhotometricLight](mdlphotometriclight.md): A light source whose shape, direction, and intensity of illumination are determined by a photometric profile.
- [MDLPhysicallyPlausibleLight](mdlphysicallyplausiblelight.md): A light source for use in shading models based on real-world physics.

# MDLLightProbeIrradianceDataSource (Objective-C)

**Framework:** Model I/O  
**Kind:** Protocol  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Adopt this protocol to provide information for use in automatic placement of light probes around a scene.

## Declaration

```objectivec
@protocol MDLLightProbeIrradianceDataSource <NSObject>
```

<a id="overview"></a>

## Overview

The [MDLAsset](mdlasset.md) [placeLightProbesWithDensity:heuristic:usingIrradianceDataSource:](mdlasset/placelightprobes%28withdensity_heuristic_using_%29.md) method automatically creates [MDLLightProbe](mdllightprobe.md) objects, setting their positions and lighting parameters to provide optimal light probe coverage within a scene you define. When you use that method, you must provide an object implementing this protocol, which Model I/O queries in order to evaluate your scene.

## Topics

### Providing Light Probe Information

- [boundingBox](mdllightprobeirradiancedatasource/boundingbox.md): The bounding region of the scene to which light probes are being added.
- [sphericalHarmonicsLevel](mdllightprobeirradiancedatasource/sphericalharmonicslevel.md): The number of levels of spherical harmonics information provided by the data source.
- [sphericalHarmonicsCoefficientsAtPosition:](mdllightprobeirradiancedatasource/sphericalharmonicscoefficients%28atposition_%29.md): Asks the data source to provide spherical harmonics coefficients that describe lighting conditions in all directions from the specified point in a scene.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Lights

- [MDLLight](mdllight.md): The abstract superclass for objects that describe light sources in a scene.
- [MDLAreaLight](mdlarealight.md): A light source that illuminates a 3D scene from an area with a specific shape.
- [MDLLightProbe](mdllightprobe.md): A light source described in terms of the variations in color and intensity of its illumination in all directions.
- [MDLPhotometricLight](mdlphotometriclight.md): A light source whose shape, direction, and intensity of illumination are determined by a photometric profile.
- [MDLPhysicallyPlausibleLight](mdlphysicallyplausiblelight.md): A light source for use in shading models based on real-world physics.
