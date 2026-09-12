> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlscatteringfunction/interfaceindexofrefraction](https://developer.apple.com/documentation/modelio/mdlscatteringfunction/interfaceindexofrefraction)

# interfaceIndexOfRefraction (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The index of refraction for a material itself.

## Declaration

```swift
var interfaceIndexOfRefraction: MDLMaterialProperty { get }
```

<a id="Discussion"></a>

## Discussion

This value corresponds to the `n2` parameter in Schlick’s equation for approximating Fresnel reflection effects.

The default value is `1.0`.

## See Also

### Working with Shading Properties

- [baseColor](basecolor.md): The inherent color of the material, to be used as a modulator during shading.
- [emission](emission.md): The color emitted as radiance from a material’s surface.
- [specular](specular.md): The intensity of specular highlights on the material’s surface.
- [materialIndexOfRefraction](materialindexofrefraction.md): The index of refraction for the medium surrounding a material.
- [normal](normal.md): The variation in the surface normal vectors in a material, relative to model coordinate space.
- [ambientOcclusion](ambientocclusion.md): The attenuation of ambient light due to local geometry variations on a surface.
- [ambientOcclusionScale](ambientocclusionscale.md): The scaling factor for ambient occlusion shading.

# interfaceIndexOfRefraction (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The index of refraction for a material itself.

## Declaration

```objectivec
@property (nonatomic, retain, readonly) MDLMaterialProperty * interfaceIndexOfRefraction;
```

<a id="Discussion"></a>

## Discussion

This value corresponds to the `n2` parameter in Schlick’s equation for approximating Fresnel reflection effects.

The default value is `1.0`.

## See Also

### Working with Shading Properties

- [baseColor](basecolor.md): The inherent color of the material, to be used as a modulator during shading.
- [emission](emission.md): The color emitted as radiance from a material’s surface.
- [specular](specular.md): The intensity of specular highlights on the material’s surface.
- [materialIndexOfRefraction](materialindexofrefraction.md): The index of refraction for the medium surrounding a material.
- [normal](normal.md): The variation in the surface normal vectors in a material, relative to model coordinate space.
- [ambientOcclusion](ambientocclusion.md): The attenuation of ambient light due to local geometry variations on a surface.
- [ambientOcclusionScale](ambientocclusionscale.md): The scaling factor for ambient occlusion shading.
