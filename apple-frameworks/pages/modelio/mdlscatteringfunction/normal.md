> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlscatteringfunction/normal](https://developer.apple.com/documentation/modelio/mdlscatteringfunction/normal)

# normal (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The variation in the surface normal vectors in a material, relative to model coordinate space.

## Declaration

```swift
var normal: MDLMaterialProperty { get }
```

<a id="Discussion"></a>

## Discussion

The default normal value is zero (no variation in surface normal vectors). Typically, you assign a texture to this material property to create the appearance of detailed surface contours.

## See Also

### Working with Shading Properties

- [baseColor](basecolor.md): The inherent color of the material, to be used as a modulator during shading.
- [emission](emission.md): The color emitted as radiance from a material’s surface.
- [specular](specular.md): The intensity of specular highlights on the material’s surface.
- [materialIndexOfRefraction](materialindexofrefraction.md): The index of refraction for the medium surrounding a material.
- [interfaceIndexOfRefraction](interfaceindexofrefraction.md): The index of refraction for a material itself.
- [ambientOcclusion](ambientocclusion.md): The attenuation of ambient light due to local geometry variations on a surface.
- [ambientOcclusionScale](ambientocclusionscale.md): The scaling factor for ambient occlusion shading.

# normal (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The variation in the surface normal vectors in a material, relative to model coordinate space.

## Declaration

```objectivec
@property (nonatomic, retain, readonly) MDLMaterialProperty * normal;
```

<a id="Discussion"></a>

## Discussion

The default normal value is zero (no variation in surface normal vectors). Typically, you assign a texture to this material property to create the appearance of detailed surface contours.

## See Also

### Working with Shading Properties

- [baseColor](basecolor.md): The inherent color of the material, to be used as a modulator during shading.
- [emission](emission.md): The color emitted as radiance from a material’s surface.
- [specular](specular.md): The intensity of specular highlights on the material’s surface.
- [materialIndexOfRefraction](materialindexofrefraction.md): The index of refraction for the medium surrounding a material.
- [interfaceIndexOfRefraction](interfaceindexofrefraction.md): The index of refraction for a material itself.
- [ambientOcclusion](ambientocclusion.md): The attenuation of ambient light due to local geometry variations on a surface.
- [ambientOcclusionScale](ambientocclusionscale.md): The scaling factor for ambient occlusion shading.
