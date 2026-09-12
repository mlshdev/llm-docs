> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdllightprobeirradiancedatasource/sphericalharmonicslevel](https://developer.apple.com/documentation/modelio/mdllightprobeirradiancedatasource/sphericalharmonicslevel)

# sphericalHarmonicsLevel (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The number of levels of spherical harmonics information provided by the data source.

## Declaration

```swift
optional var sphericalHarmonicsLevel: Int { get set }
```

<a id="Discussion"></a>

## Discussion

Each level of spherical harmonics contains more coefficients, and thus affects the layout of the data containing those coefficients. For details, see the [sphericalHarmonicsCoefficients(atPosition:)](sphericalharmonicscoefficients%28atposition_%29.md) method.

## See Also

### Providing Light Probe Information

- [boundingBox](boundingbox.md): The bounding region of the scene to which light probes are being added.
- [sphericalHarmonicsCoefficients(atPosition:)](sphericalharmonicscoefficients%28atposition_%29.md): Asks the data source to provide spherical harmonics coefficients that describe lighting conditions in all directions from the specified point in a scene.

# sphericalHarmonicsLevel (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The number of levels of spherical harmonics information provided by the data source.

## Declaration

```objectivec
@property NSUInteger sphericalHarmonicsLevel;
```

<a id="Discussion"></a>

## Discussion

Each level of spherical harmonics contains more coefficients, and thus affects the layout of the data containing those coefficients. For details, see the [sphericalHarmonicsCoefficientsAtPosition:](sphericalharmonicscoefficients%28atposition_%29.md) method.

## See Also

### Providing Light Probe Information

- [boundingBox](boundingbox.md): The bounding region of the scene to which light probes are being added.
- [sphericalHarmonicsCoefficientsAtPosition:](sphericalharmonicscoefficients%28atposition_%29.md): Asks the data source to provide spherical harmonics coefficients that describe lighting conditions in all directions from the specified point in a scene.
