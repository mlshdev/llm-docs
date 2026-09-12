> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlphysicallyplausiblescatteringfunction/anisotropicrotation](https://developer.apple.com/documentation/modelio/mdlphysicallyplausiblescatteringfunction/anisotropicrotation)

# anisotropicRotation (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The angle at which anisotropic effects are rotated relative to the local tangent basis.

## Declaration

```swift
var anisotropicRotation: MDLMaterialProperty { get }
```

<a id="Discussion"></a>

## Discussion

The default value is zero, indicating no rotation. Values `0.0` to `1.0` in this property correspond to rotations of `0.0` to `2 * M_PI` radians.

## See Also

### Working with Shading Properties

- [subsurface](subsurface.md): The degree to which light scatters under the surface of the material.
- [metallic](metallic.md): The degree to which the material appears as a dielectric surface (lower values) or as a metal (higher values).
- [specularAmount](specularamount.md): The tendency of the material to generate specular highlights.
- [specularTint](speculartint.md): The balance of color for specular highlights, between the light color (lower values) and the material’s base color (at higher values).
- [roughness](roughness.md): The degree to which a material appears smooth, affecting both diffuse and specular response.
- [anisotropic](anisotropic.md): The degree to which specular highlights elongate in the direction of the local tangent basis.
- [sheen](sheen.md): The intensity of highlights that appear only at glancing angles on a material’s surface.
- [sheenTint](sheentint.md): The balance of color for highlights that appear only at glancing angles, between the light color (lower values) and the material’s base color (at higher values).
- [clearcoat](clearcoat.md): The intensity of a second specular highlight, similar to the gloss that results from a clear coat on an automotive finish.
- [clearcoatGloss](clearcoatgloss.md): The sharpness of a second specular highlight, similar to the gloss that results from a clear coat on an automotive finish.

# anisotropicRotation (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The angle at which anisotropic effects are rotated relative to the local tangent basis.

## Declaration

```objectivec
@property (nonatomic, retain, readonly) MDLMaterialProperty * anisotropicRotation;
```

<a id="Discussion"></a>

## Discussion

The default value is zero, indicating no rotation. Values `0.0` to `1.0` in this property correspond to rotations of `0.0` to `2 * M_PI` radians.

## See Also

### Working with Shading Properties

- [subsurface](subsurface.md): The degree to which light scatters under the surface of the material.
- [metallic](metallic.md): The degree to which the material appears as a dielectric surface (lower values) or as a metal (higher values).
- [specularAmount](specularamount.md): The tendency of the material to generate specular highlights.
- [specularTint](speculartint.md): The balance of color for specular highlights, between the light color (lower values) and the material’s base color (at higher values).
- [roughness](roughness.md): The degree to which a material appears smooth, affecting both diffuse and specular response.
- [anisotropic](anisotropic.md): The degree to which specular highlights elongate in the direction of the local tangent basis.
- [sheen](sheen.md): The intensity of highlights that appear only at glancing angles on a material’s surface.
- [sheenTint](sheentint.md): The balance of color for highlights that appear only at glancing angles, between the light color (lower values) and the material’s base color (at higher values).
- [clearcoat](clearcoat.md): The intensity of a second specular highlight, similar to the gloss that results from a clear coat on an automotive finish.
- [clearcoatGloss](clearcoatgloss.md): The sharpness of a second specular highlight, similar to the gloss that results from a clear coat on an automotive finish.
