> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlprobeplacement/irradiancedistribution](https://developer.apple.com/documentation/modelio/mdlprobeplacement/irradiancedistribution)

# MDLProbePlacement.irradianceDistribution (Swift)

**Framework:** Model I/O  
**Kind:** Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An option to examine the lighting conditions at various positions in the scene being evaluated, then place light probes only at the locations where each contributes optimally to scene lighting.

## Declaration

```swift
case irradianceDistribution
```

<a id="Discussion"></a>

## Discussion

If you use this heuristic, your data source must implement the [sphericalHarmonicsCoefficients(atPosition:)](../mdllightprobeirradiancedatasource/sphericalharmonicscoefficients%28atposition_%29.md) method.

## See Also

### Constants

- [MDLProbePlacement.uniformGrid](uniformgrid.md): An option to place light probes at each unit coordinate in a three-dimensional grid that evenly divides the region being evaluated.

# MDLProbePlacementIrradianceDistribution (Objective-C)

**Framework:** Model I/O  
**Kind:** Enumeration Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An option to examine the lighting conditions at various positions in the scene being evaluated, then place light probes only at the locations where each contributes optimally to scene lighting.

## Declaration

```objectivec
MDLProbePlacementIrradianceDistribution
```

<a id="Discussion"></a>

## Discussion

If you use this heuristic, your data source must implement the [sphericalHarmonicsCoefficientsAtPosition:](../mdllightprobeirradiancedatasource/sphericalharmonicscoefficients%28atposition_%29.md) method.

## See Also

### Constants

- [MDLProbePlacementUniformGrid](uniformgrid.md): An option to place light probes at each unit coordinate in a three-dimensional grid that evenly divides the region being evaluated.
