> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlprobeplacement](https://developer.apple.com/documentation/modelio/mdlprobeplacement)

# MDLProbePlacement (Swift)

**Framework:** Model I/O  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Options affecting automatic placement of light probes in a scene, used with the [placeLightProbes(withDensity:heuristic:using:)](mdlasset/placelightprobes%28withdensity_heuristic_using_%29.md) method.

## Declaration

```swift
enum MDLProbePlacement
```

## Topics

### Constants

- [MDLProbePlacement.irradianceDistribution](mdlprobeplacement/irradiancedistribution.md): An option to examine the lighting conditions at various positions in the scene being evaluated, then place light probes only at the locations where each contributes optimally to scene lighting.
- [MDLProbePlacement.uniformGrid](mdlprobeplacement/uniformgrid.md): An option to place light probes at each unit coordinate in a three-dimensional grid that evenly divides the region being evaluated.

### Initializers

- [init(rawValue:)](mdlprobeplacement/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Working with Lights

- [placeLightProbes(withDensity:heuristic:using:)](mdlasset/placelightprobes%28withdensity_heuristic_using_%29.md): Automatically creates and places light probes for use in illuminating a scene.

# MDLProbePlacement (Objective-C)

**Framework:** Model I/O  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Options affecting automatic placement of light probes in a scene, used with the [placeLightProbesWithDensity:heuristic:usingIrradianceDataSource:](mdlasset/placelightprobes%28withdensity_heuristic_using_%29.md) method.

## Declaration

```objectivec
enum MDLProbePlacement : NSInteger;
```

## Topics

### Constants

- [MDLProbePlacementIrradianceDistribution](mdlprobeplacement/irradiancedistribution.md): An option to examine the lighting conditions at various positions in the scene being evaluated, then place light probes only at the locations where each contributes optimally to scene lighting.
- [MDLProbePlacementUniformGrid](mdlprobeplacement/uniformgrid.md): An option to place light probes at each unit coordinate in a three-dimensional grid that evenly divides the region being evaluated.

## See Also

### Working with Lights

- [placeLightProbesWithDensity:heuristic:usingIrradianceDataSource:](mdlasset/placelightprobes%28withdensity_heuristic_using_%29.md): Automatically creates and places light probes for use in illuminating a scene.
