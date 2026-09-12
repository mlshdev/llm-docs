> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdllightprobe/sphericalharmonicslevel](https://developer.apple.com/documentation/modelio/mdllightprobe/sphericalharmonicslevel)

# sphericalHarmonicsLevel (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The number of levels of spherical harmonics information in the light probe.

## Declaration

```swift
var sphericalHarmonicsLevel: Int { get }
```

<a id="Discussion"></a>

## Discussion

Each level of spherical harmonics contains more coefficients, and thus affects the layout of the data containing those coefficients. For details, see the [sphericalHarmonicsCoefficients](sphericalharmonicscoefficients.md) property.

## See Also

### Working with Spherical Harmonics

- [generateSphericalHarmonics(fromIrradiance:)](generatesphericalharmonics%28fromirradiance_%29.md): Generates spherical harmonics information based on the light probe’s irradiance texture.
- [sphericalHarmonicsCoefficients](sphericalharmonicscoefficients.md): Data containing the spherical harmonics coefficients for the light.

# sphericalHarmonicsLevel (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The number of levels of spherical harmonics information in the light probe.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger sphericalHarmonicsLevel;
```

<a id="Discussion"></a>

## Discussion

Each level of spherical harmonics contains more coefficients, and thus affects the layout of the data containing those coefficients. For details, see the [sphericalHarmonicsCoefficients](sphericalharmonicscoefficients.md) property.

## See Also

### Working with Spherical Harmonics

- [generateSphericalHarmonicsFromIrradiance:](generatesphericalharmonics%28fromirradiance_%29.md): Generates spherical harmonics information based on the light probe’s irradiance texture.
- [sphericalHarmonicsCoefficients](sphericalharmonicscoefficients.md): Data containing the spherical harmonics coefficients for the light.
