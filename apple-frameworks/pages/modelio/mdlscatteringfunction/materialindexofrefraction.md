> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlscatteringfunction/materialindexofrefraction](https://developer.apple.com/documentation/modelio/mdlscatteringfunction/materialindexofrefraction)

# materialIndexOfRefraction (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The index of refraction for the medium surrounding a material.

## Declaration

```swift
var materialIndexOfRefraction: MDLMaterialProperty { get }
```

<a id="Discussion"></a>

## Discussion

This value corresponds to the `n1` parameter in Schlick’s equation for approximating Fresnel reflection effects. Typically, one assumes a the medium surrounding a material is air or empty space, so the default value of `1.0` suffices for most uses of this semantic.

## See Also

### Working with Shading Properties

- [baseColor](basecolor.md): The inherent color of the material, to be used as a modulator during shading.
- [emission](emission.md): The color emitted as radiance from a material’s surface.
- [specular](specular.md): The intensity of specular highlights on the material’s surface.
- [interfaceIndexOfRefraction](interfaceindexofrefraction.md): The index of refraction for a material itself.
- [normal](normal.md): The variation in the surface normal vectors in a material, relative to model coordinate space.
- [ambientOcclusion](ambientocclusion.md): The attenuation of ambient light due to local geometry variations on a surface.
- [ambientOcclusionScale](ambientocclusionscale.md): The scaling factor for ambient occlusion shading.

# materialIndexOfRefraction (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The index of refraction for the medium surrounding a material.

## Declaration

```objectivec
@property (nonatomic, retain, readonly) MDLMaterialProperty * materialIndexOfRefraction;
```

<a id="Discussion"></a>

## Discussion

This value corresponds to the `n1` parameter in Schlick’s equation for approximating Fresnel reflection effects. Typically, one assumes a the medium surrounding a material is air or empty space, so the default value of `1.0` suffices for most uses of this semantic.

## See Also

### Working with Shading Properties

- [baseColor](basecolor.md): The inherent color of the material, to be used as a modulator during shading.
- [emission](emission.md): The color emitted as radiance from a material’s surface.
- [specular](specular.md): The intensity of specular highlights on the material’s surface.
- [interfaceIndexOfRefraction](interfaceindexofrefraction.md): The index of refraction for a material itself.
- [normal](normal.md): The variation in the surface normal vectors in a material, relative to model coordinate space.
- [ambientOcclusion](ambientocclusion.md): The attenuation of ambient light due to local geometry variations on a surface.
- [ambientOcclusionScale](ambientocclusionscale.md): The scaling factor for ambient occlusion shading.
