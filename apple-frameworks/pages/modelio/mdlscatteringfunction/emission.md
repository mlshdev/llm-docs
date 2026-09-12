> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlscatteringfunction/emission](https://developer.apple.com/documentation/modelio/mdlscatteringfunction/emission)

# emission (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The color emitted as radiance from a material’s surface.

## Declaration

```swift
var emission: MDLMaterialProperty { get }
```

<a id="Discussion"></a>

## Discussion

A renderer (or other software component processing the material) might not treat the emission channel of a material as a light source illuminating the scene. Instead, an emission channel prevents affected areas of a surface from being darkened by other aspects of lighting and shading.

The default emission color is light gray (80% white).

## See Also

### Working with Shading Properties

- [baseColor](basecolor.md): The inherent color of the material, to be used as a modulator during shading.
- [specular](specular.md): The intensity of specular highlights on the material’s surface.
- [materialIndexOfRefraction](materialindexofrefraction.md): The index of refraction for the medium surrounding a material.
- [interfaceIndexOfRefraction](interfaceindexofrefraction.md): The index of refraction for a material itself.
- [normal](normal.md): The variation in the surface normal vectors in a material, relative to model coordinate space.
- [ambientOcclusion](ambientocclusion.md): The attenuation of ambient light due to local geometry variations on a surface.
- [ambientOcclusionScale](ambientocclusionscale.md): The scaling factor for ambient occlusion shading.

# emission (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The color emitted as radiance from a material’s surface.

## Declaration

```objectivec
@property (nonatomic, retain, readonly) MDLMaterialProperty * emission;
```

<a id="Discussion"></a>

## Discussion

A renderer (or other software component processing the material) might not treat the emission channel of a material as a light source illuminating the scene. Instead, an emission channel prevents affected areas of a surface from being darkened by other aspects of lighting and shading.

The default emission color is light gray (80% white).

## See Also

### Working with Shading Properties

- [baseColor](basecolor.md): The inherent color of the material, to be used as a modulator during shading.
- [specular](specular.md): The intensity of specular highlights on the material’s surface.
- [materialIndexOfRefraction](materialindexofrefraction.md): The index of refraction for the medium surrounding a material.
- [interfaceIndexOfRefraction](interfaceindexofrefraction.md): The index of refraction for a material itself.
- [normal](normal.md): The variation in the surface normal vectors in a material, relative to model coordinate space.
- [ambientOcclusion](ambientocclusion.md): The attenuation of ambient light due to local geometry variations on a surface.
- [ambientOcclusionScale](ambientocclusionscale.md): The scaling factor for ambient occlusion shading.
