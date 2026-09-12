> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseblendnodedefinition/init(spatialmixerdefinition:)](https://developer.apple.com/documentation/phase/phaseblendnodedefinition/init(spatialmixerdefinition:))

# init(spatialMixerDefinition:) (Swift)

**Framework:** PHASE  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a blend node for spatial audio output.

## Declaration

```swift
init(spatialMixerDefinition: PHASESpatialMixerDefinition)
```

## Parameters

- `spatialMixerDefinition`: An object that combines spatial audio layers.

## See Also

### Creating a Blend Node

- [init(blendMetaParameterDefinition:)](init%28blendmetaparameterdefinition_%29.md): Creates a blend node with a maxiumum blend range value.
- [init(blendMetaParameterDefinition:identifier:)](init%28blendmetaparameterdefinition_identifier_%29.md): Creates a named blend node with a maxiumum blend range value.
- [init(spatialMixerDefinition:identifier:)](init%28spatialmixerdefinition_identifier_%29.md): Creates a named blend node for spatial audio output.

# initDistanceBlendWithSpatialMixerDefinition: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a blend node for spatial audio output.

## Declaration

```objectivec
- (instancetype) initDistanceBlendWithSpatialMixerDefinition:(PHASESpatialMixerDefinition *) spatialMixerDefinition;
```

## Parameters

- `spatialMixerDefinition`: An object that combines spatial audio layers.

## See Also

### Creating a Blend Node

- [initWithBlendMetaParameterDefinition:](init%28blendmetaparameterdefinition_%29.md): Creates a blend node with a maxiumum blend range value.
- [initWithBlendMetaParameterDefinition:identifier:](init%28blendmetaparameterdefinition_identifier_%29.md): Creates a named blend node with a maxiumum blend range value.
- [initDistanceBlendWithSpatialMixerDefinition:identifier:](init%28spatialmixerdefinition_identifier_%29.md): Creates a named blend node for spatial audio output.
