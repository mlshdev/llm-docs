> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/phase/phaseblendnodedefinition/blendparameterdefinition

# blendParameterDefinition (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

The meta parameter definition that caps the blend range.

## Declaration

```swift
var blendParameterDefinition: PHASENumberMetaParameterDefinition? { get }
```

<a id="Discussion"></a>

## Discussion

The framework sets the value of this property to the [init(blendMetaParameterDefinition:)](init%28blendmetaparameterdefinition_%29.md) argument.

## See Also

### Accessing Blend Properties

- [spatialMixerDefinitionForDistance](spatialmixerdefinitionfordistance.md): An object that combines spatial audio layers.

# blendParameterDefinition (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

The meta parameter definition that caps the blend range.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) PHASENumberMetaParameterDefinition * blendParameterDefinition;
```

<a id="Discussion"></a>

## Discussion

The framework sets the value of this property to the [initWithBlendMetaParameterDefinition:](init%28blendmetaparameterdefinition_%29.md) argument.

## See Also

### Accessing Blend Properties

- [spatialMixerDefinitionForDistance](spatialmixerdefinitionfordistance.md): An object that combines spatial audio layers.
