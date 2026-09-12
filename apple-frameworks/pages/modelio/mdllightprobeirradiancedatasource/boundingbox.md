> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdllightprobeirradiancedatasource/boundingbox](https://developer.apple.com/documentation/modelio/mdllightprobeirradiancedatasource/boundingbox)

# boundingBox (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The bounding region of the scene to which light probes are being added.

## Declaration

```swift
var boundingBox: MDLAxisAlignedBoundingBox { get set }
```

<a id="Discussion"></a>

## Discussion

When you call the [MDLAsset](../mdlasset.md) [placeLightProbes(withDensity:heuristic:using:)](../mdlasset/placelightprobes%28withdensity_heuristic_using_%29.md) method to automatically distribute light probes in a scene, Model I/O reads this property to ask your code which regions should be evaluated for light probe placement.

## See Also

### Providing Light Probe Information

- [sphericalHarmonicsLevel](sphericalharmonicslevel.md): The number of levels of spherical harmonics information provided by the data source.
- [sphericalHarmonicsCoefficients(atPosition:)](sphericalharmonicscoefficients%28atposition_%29.md): Asks the data source to provide spherical harmonics coefficients that describe lighting conditions in all directions from the specified point in a scene.

# boundingBox (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The bounding region of the scene to which light probes are being added.

## Declaration

```objectivec
@property MDLAxisAlignedBoundingBox boundingBox;
```

<a id="Discussion"></a>

## Discussion

When you call the [MDLAsset](../mdlasset.md) [placeLightProbesWithDensity:heuristic:usingIrradianceDataSource:](../mdlasset/placelightprobes%28withdensity_heuristic_using_%29.md) method to automatically distribute light probes in a scene, Model I/O reads this property to ask your code which regions should be evaluated for light probe placement.

## See Also

### Providing Light Probe Information

- [sphericalHarmonicsLevel](sphericalharmonicslevel.md): The number of levels of spherical harmonics information provided by the data source.
- [sphericalHarmonicsCoefficientsAtPosition:](sphericalharmonicscoefficients%28atposition_%29.md): Asks the data source to provide spherical harmonics coefficients that describe lighting conditions in all directions from the specified point in a scene.
