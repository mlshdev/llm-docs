> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlphotometriclight/sphericalharmonicslevel](https://developer.apple.com/documentation/modelio/mdlphotometriclight/sphericalharmonicslevel)

# sphericalHarmonicsLevel (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The number of levels of generated spherical harmonics information.

## Declaration

```swift
var sphericalHarmonicsLevel: Int { get }
```

<a id="Discussion"></a>

## Discussion

Each level of spherical harmonics contains more coefficients, and thus affects the layout of the data containing those coefficients. For details, see the [sphericalHarmonicsCoefficients](sphericalharmonicscoefficients.md) property.

## See Also

### Interpreting the Light Web as Spherical Harmonics

- [generateSphericalHarmonics(fromLight:)](generatesphericalharmonics%28fromlight_%29.md): Generates spherical harmonics information based on the light’s photometry data.
- [sphericalHarmonicsCoefficients](sphericalharmonicscoefficients.md): Data containing spherical harmonics coefficients that describe the light’s intensity in all directions.

# sphericalHarmonicsLevel (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The number of levels of generated spherical harmonics information.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger sphericalHarmonicsLevel;
```

<a id="Discussion"></a>

## Discussion

Each level of spherical harmonics contains more coefficients, and thus affects the layout of the data containing those coefficients. For details, see the [sphericalHarmonicsCoefficients](sphericalharmonicscoefficients.md) property.

## See Also

### Interpreting the Light Web as Spherical Harmonics

- [generateSphericalHarmonicsFromLight:](generatesphericalharmonics%28fromlight_%29.md): Generates spherical harmonics information based on the light’s photometry data.
- [sphericalHarmonicsCoefficients](sphericalharmonicscoefficients.md): Data containing spherical harmonics coefficients that describe the light’s intensity in all directions.
