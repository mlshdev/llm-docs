> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlasset/placelightprobes(withdensity:heuristic:using:)](https://developer.apple.com/documentation/modelio/mdlasset/placelightprobes(withdensity:heuristic:using:))

# placeLightProbes(withDensity:heuristic:using:) (Swift)

**Framework:** Model I/O  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Automatically creates and places light probes for use in illuminating a scene.

## Declaration

```swift
class func placeLightProbes(withDensity value: Float, heuristic type: MDLProbePlacement, using dataSource: any MDLLightProbeIrradianceDataSource) -> [MDLLightProbe]
```

## Parameters

- `value`: A value that determines the coarseness or fineness with which to evaluate the scene. Lower values evaluate fewer positions, resulting in fewer light probes and lower fidelity. Higher values evaluate more positions, resulting in higher fidelity at increased computational cost.
- `type`: An option that determine how Model I/O uses the data source to position light probes.
- `dataSource`: A custom object that provides information about the scene to be evaluated.

<a id="return-value"></a>

## Return Value

An array of light probe objects for use in the scene.

<a id="Discussion"></a>

## Discussion

When you call this method, you must pass a custom object implementing the [MDLLightProbeIrradianceDataSource](../mdllightprobeirradiancedatasource.md) protocol. Model I/O queries this object to determine how to place light probes.

When you use the [MDLProbePlacement.uniformGrid](../mdlprobeplacement/uniformgrid.md) heuristic,  Model I/O simply divides the [boundingBox](../mdllightprobeirradiancedatasource/boundingbox.md) region your data source provides into `value` units in each dimension, and creates an array of light probe objects to fill each position in the resulting grid.

When you use the [MDLProbePlacement.irradianceDistribution](../mdlprobeplacement/irradiancedistribution.md) heuristic, Model I/O uses the same grid to sample information about the lighting conditions in your scene (by calling the [sphericalHarmonicsLevel](../mdllightprobeirradiancedatasource/sphericalharmonicslevel.md) and [sphericalHarmonicsCoefficients(atPosition:)](../mdllightprobeirradiancedatasource/sphericalharmonicscoefficients%28atposition_%29.md) methods of your data source), then creates and positions light probes to optimally account for differences in lighting conditions across the scene.

## See Also

### Working with Lights

- [MDLProbePlacement](../mdlprobeplacement.md): Options affecting automatic placement of light probes in a scene, used with the [placeLightProbes(withDensity:heuristic:using:)](placelightprobes%28withdensity_heuristic_using_%29.md) method.

# placeLightProbesWithDensity:heuristic:usingIrradianceDataSource: (Objective-C)

**Framework:** Model I/O  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Automatically creates and places light probes for use in illuminating a scene.

## Declaration

```objectivec
+ (NSArray<MDLLightProbe *> *) placeLightProbesWithDensity:(float) value heuristic:(MDLProbePlacement) type usingIrradianceDataSource:(id<MDLLightProbeIrradianceDataSource>) dataSource;
```

## Parameters

- `value`: A value that determines the coarseness or fineness with which to evaluate the scene. Lower values evaluate fewer positions, resulting in fewer light probes and lower fidelity. Higher values evaluate more positions, resulting in higher fidelity at increased computational cost.
- `type`: An option that determine how Model I/O uses the data source to position light probes.
- `dataSource`: A custom object that provides information about the scene to be evaluated.

<a id="return-value"></a>

## Return Value

An array of light probe objects for use in the scene.

<a id="Discussion"></a>

## Discussion

When you call this method, you must pass a custom object implementing the [MDLLightProbeIrradianceDataSource](../mdllightprobeirradiancedatasource.md) protocol. Model I/O queries this object to determine how to place light probes.

When you use the [MDLProbePlacementUniformGrid](../mdlprobeplacement/uniformgrid.md) heuristic,  Model I/O simply divides the [boundingBox](../mdllightprobeirradiancedatasource/boundingbox.md) region your data source provides into `value` units in each dimension, and creates an array of light probe objects to fill each position in the resulting grid.

When you use the [MDLProbePlacementIrradianceDistribution](../mdlprobeplacement/irradiancedistribution.md) heuristic, Model I/O uses the same grid to sample information about the lighting conditions in your scene (by calling the [sphericalHarmonicsLevel](../mdllightprobeirradiancedatasource/sphericalharmonicslevel.md) and [sphericalHarmonicsCoefficientsAtPosition:](../mdllightprobeirradiancedatasource/sphericalharmonicscoefficients%28atposition_%29.md) methods of your data source), then creates and positions light probes to optimally account for differences in lighting conditions across the scene.

## See Also

### Working with Lights

- [MDLProbePlacement](../mdlprobeplacement.md): Options affecting automatic placement of light probes in a scene, used with the [placeLightProbesWithDensity:heuristic:usingIrradianceDataSource:](placelightprobes%28withdensity_heuristic_using_%29.md) method.
