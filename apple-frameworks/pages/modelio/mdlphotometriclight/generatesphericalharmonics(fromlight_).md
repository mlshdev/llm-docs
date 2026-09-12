> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlphotometriclight/generatesphericalharmonics(fromlight:)](https://developer.apple.com/documentation/modelio/mdlphotometriclight/generatesphericalharmonics(fromlight:))

# generateSphericalHarmonics(fromLight:) (Swift)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Generates spherical harmonics information based on the light’s photometry data.

## Declaration

```swift
func generateSphericalHarmonics(fromLight sphericalHarmonicsLevel: Int)
```

## Parameters

- `sphericalHarmonicsLevel`: The number of levels for which to generate spherical harmonics. Each level of spherical harmonics contains more coefficients, affecting both the layout of the resulting data and the detail of any lighting effects based on it.

<a id="Discussion"></a>

## Discussion

Spherical harmonic coefficients describe the distribution of light around a light source with less high-frequency detail than a cube map texture, but they can be used more efficiently in real-time rendering. After calling this method, use the [sphericalHarmonicsCoefficients](sphericalharmonicscoefficients.md) property to access the generated coefficients.

## See Also

### Interpreting the Light Web as Spherical Harmonics

- [sphericalHarmonicsCoefficients](sphericalharmonicscoefficients.md): Data containing spherical harmonics coefficients that describe the light’s intensity in all directions.
- [sphericalHarmonicsLevel](sphericalharmonicslevel.md): The number of levels of generated spherical harmonics information.

# generateSphericalHarmonicsFromLight: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Generates spherical harmonics information based on the light’s photometry data.

## Declaration

```objectivec
- (void) generateSphericalHarmonicsFromLight:(NSUInteger) sphericalHarmonicsLevel;
```

## Parameters

- `sphericalHarmonicsLevel`: The number of levels for which to generate spherical harmonics. Each level of spherical harmonics contains more coefficients, affecting both the layout of the resulting data and the detail of any lighting effects based on it.

<a id="Discussion"></a>

## Discussion

Spherical harmonic coefficients describe the distribution of light around a light source with less high-frequency detail than a cube map texture, but they can be used more efficiently in real-time rendering. After calling this method, use the [sphericalHarmonicsCoefficients](sphericalharmonicscoefficients.md) property to access the generated coefficients.

## See Also

### Interpreting the Light Web as Spherical Harmonics

- [sphericalHarmonicsCoefficients](sphericalharmonicscoefficients.md): Data containing spherical harmonics coefficients that describe the light’s intensity in all directions.
- [sphericalHarmonicsLevel](sphericalharmonicslevel.md): The number of levels of generated spherical harmonics information.
