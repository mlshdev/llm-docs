> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/phase/phaseblendnodedefinition/spatialmixerdefinitionfordistance

# spatialMixerDefinitionForDistance (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

An object that combines spatial audio layers.

## Declaration

```swift
var spatialMixerDefinitionForDistance: PHASESpatialMixerDefinition? { get }
```

<a id="Discussion"></a>

## Discussion

The framework sets this property to the [init(spatialMixerDefinition:)](init%28spatialmixerdefinition_%29.md) argument.

## See Also

### Accessing Blend Properties

- [blendParameterDefinition](blendparameterdefinition.md): The meta parameter definition that caps the blend range.

# spatialMixerDefinitionForDistance (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

An object that combines spatial audio layers.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) PHASESpatialMixerDefinition * spatialMixerDefinitionForDistance;
```

<a id="Discussion"></a>

## Discussion

The framework sets this property to the [initDistanceBlendWithSpatialMixerDefinition:](init%28spatialmixerdefinition_%29.md) argument.

## See Also

### Accessing Blend Properties

- [blendParameterDefinition](blendparameterdefinition.md): The meta parameter definition that caps the blend range.
