> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlphotometriclight](https://developer.apple.com/documentation/modelio/mdlphotometriclight)

# MDLPhotometricLight (Swift)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A light source whose shape, direction, and intensity of illumination are determined by a photometric profile.

## Declaration

```swift
class MDLPhotometricLight
```

<a id="overview"></a>

## Overview

You create a photometric light from a file in the IES format, containing physical measurements of a light source. Many manufacturers of real-world light fixtures publish such files describing the lighting characteristics of their products. This photometry data measures the light web surrounding a light source—measurements of the light’s intensity in all directions around the source.The [MDLPhotometricLight](mdlphotometriclight.md) provides two ways to interpret a light web:

- As a cube map texture. Use the [generateCubemap(fromLight:)](mdlphotometriclight/generatecubemap%28fromlight_%29.md) method to generate a texture, then use the [lightCubeMap](mdlphotometriclight/lightcubemap.md) property to access the texture. In this texture, each texel represents the light’s intensity in the direction from the cube’s center to the texel’s position on the cube.
- **As spherical harmonics.** Use the [generateSphericalHarmonics(fromLight:)](mdlphotometriclight/generatesphericalharmonics%28fromlight_%29.md) method to generate a set of spherical harmonic coefficients, and then use the [sphericalHarmonicsLevel](mdlphotometriclight/sphericalharmonicslevel.md) and [sphericalHarmonicsCoefficients](mdlphotometriclight/sphericalharmonicscoefficients.md) properties to access these coefficients. Spherical harmonic coefficients provide a more compact representation of the same information as the cube map texture, so you can use them during shading without the performance cost of a texture lookup.

Both the [MDLPhotometricLight](mdlphotometriclight.md) and [MDLAreaLight](mdlarealight.md) classes can describe lights with interesting shapes—an area light offers a simpler design that can be implemented with better rendering performance, and a photometric light offers design that better models real-world light fixtures at the cost of higher computational complexity.

## Topics

### Creating a Photometric Light

- [init(iesProfile:)](mdlphotometriclight/init%28iesprofile_%29-57hxs.md): Initializes a light from photometry data in the file at the specified URL.

### Interpreting the Light Web as a Cube Texture

- [generateCubemap(fromLight:)](mdlphotometriclight/generatecubemap%28fromlight_%29.md): Generates a cube map texture from the light’s photometry data.
- [lightCubeMap](mdlphotometriclight/lightcubemap.md): A cube map texture describing the light’s intensity in all directions.

### Interpreting the Light Web as Spherical Harmonics

- [generateSphericalHarmonics(fromLight:)](mdlphotometriclight/generatesphericalharmonics%28fromlight_%29.md): Generates spherical harmonics information based on the light’s photometry data.
- [sphericalHarmonicsCoefficients](mdlphotometriclight/sphericalharmonicscoefficients.md): Data containing spherical harmonics coefficients that describe the light’s intensity in all directions.
- [sphericalHarmonicsLevel](mdlphotometriclight/sphericalharmonicslevel.md): The number of levels of generated spherical harmonics information.

### Initializers

- [init(IESProfile:)](mdlphotometriclight/init%28iesprofile_%29-64z2m.md)

### Instance Methods

- [generateTexture(\_:)](mdlphotometriclight/generatetexture%28__%29.md)

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
- [MDLAreaLight](mdlarealight.md): A light source that illuminates a 3D scene from an area with a specific shape.
- [MDLLightProbe](mdllightprobe.md): A light source described in terms of the variations in color and intensity of its illumination in all directions.
- [MDLLightProbeIrradianceDataSource](mdllightprobeirradiancedatasource.md): Adopt this protocol to provide information for use in automatic placement of light probes around a scene.
- [MDLPhysicallyPlausibleLight](mdlphysicallyplausiblelight.md): A light source for use in shading models based on real-world physics.

# MDLPhotometricLight (Objective-C)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A light source whose shape, direction, and intensity of illumination are determined by a photometric profile.

## Declaration

```objectivec
@interface MDLPhotometricLight : MDLPhysicallyPlausibleLight
```

<a id="overview"></a>

## Overview

You create a photometric light from a file in the IES format, containing physical measurements of a light source. Many manufacturers of real-world light fixtures publish such files describing the lighting characteristics of their products. This photometry data measures the light web surrounding a light source—measurements of the light’s intensity in all directions around the source.The [MDLPhotometricLight](mdlphotometriclight.md) provides two ways to interpret a light web:

- As a cube map texture. Use the [generateCubemapFromLight:](mdlphotometriclight/generatecubemap%28fromlight_%29.md) method to generate a texture, then use the [lightCubeMap](mdlphotometriclight/lightcubemap.md) property to access the texture. In this texture, each texel represents the light’s intensity in the direction from the cube’s center to the texel’s position on the cube.
- **As spherical harmonics.** Use the [generateSphericalHarmonicsFromLight:](mdlphotometriclight/generatesphericalharmonics%28fromlight_%29.md) method to generate a set of spherical harmonic coefficients, and then use the [sphericalHarmonicsLevel](mdlphotometriclight/sphericalharmonicslevel.md) and [sphericalHarmonicsCoefficients](mdlphotometriclight/sphericalharmonicscoefficients.md) properties to access these coefficients. Spherical harmonic coefficients provide a more compact representation of the same information as the cube map texture, so you can use them during shading without the performance cost of a texture lookup.

Both the [MDLPhotometricLight](mdlphotometriclight.md) and [MDLAreaLight](mdlarealight.md) classes can describe lights with interesting shapes—an area light offers a simpler design that can be implemented with better rendering performance, and a photometric light offers design that better models real-world light fixtures at the cost of higher computational complexity.

## Topics

### Creating a Photometric Light

- [initWithIESProfile:](mdlphotometriclight/init%28iesprofile_%29-57hxs.md): Initializes a light from photometry data in the file at the specified URL.

### Interpreting the Light Web as a Cube Texture

- [generateCubemapFromLight:](mdlphotometriclight/generatecubemap%28fromlight_%29.md): Generates a cube map texture from the light’s photometry data.
- [lightCubeMap](mdlphotometriclight/lightcubemap.md): A cube map texture describing the light’s intensity in all directions.

### Interpreting the Light Web as Spherical Harmonics

- [generateSphericalHarmonicsFromLight:](mdlphotometriclight/generatesphericalharmonics%28fromlight_%29.md): Generates spherical harmonics information based on the light’s photometry data.
- [sphericalHarmonicsCoefficients](mdlphotometriclight/sphericalharmonicscoefficients.md): Data containing spherical harmonics coefficients that describe the light’s intensity in all directions.
- [sphericalHarmonicsLevel](mdlphotometriclight/sphericalharmonicslevel.md): The number of levels of generated spherical harmonics information.

### Instance Methods

- [generateTexture:](mdlphotometriclight/generatetexture%28__%29.md)

## Relationships

### Inherits From

- [MDLPhysicallyPlausibleLight](mdlphysicallyplausiblelight.md)

## See Also

### Lights

- [MDLLight](mdllight.md): The abstract superclass for objects that describe light sources in a scene.
- [MDLAreaLight](mdlarealight.md): A light source that illuminates a 3D scene from an area with a specific shape.
- [MDLLightProbe](mdllightprobe.md): A light source described in terms of the variations in color and intensity of its illumination in all directions.
- [MDLLightProbeIrradianceDataSource](mdllightprobeirradiancedatasource.md): Adopt this protocol to provide information for use in automatic placement of light probes around a scene.
- [MDLPhysicallyPlausibleLight](mdlphysicallyplausiblelight.md): A light source for use in shading models based on real-world physics.
