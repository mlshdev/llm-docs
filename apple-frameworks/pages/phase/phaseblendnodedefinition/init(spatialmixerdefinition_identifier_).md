> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseblendnodedefinition/init(spatialmixerdefinition:identifier:)](https://developer.apple.com/documentation/phase/phaseblendnodedefinition/init(spatialmixerdefinition:identifier:))

# init(spatialMixerDefinition:identifier:) (Swift)

**Framework:** PHASE  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a named blend node for spatial audio output.

## Declaration

```swift
convenience init(spatialMixerDefinition: PHASESpatialMixerDefinition, identifier: String)
```

## Parameters

- `spatialMixerDefinition`: An object that combines spatial audio layers.
- `identifier`: A unique name for the node.

## See Also

### Creating a Blend Node

- [init(blendMetaParameterDefinition:)](init%28blendmetaparameterdefinition_%29.md): Creates a blend node with a maxiumum blend range value.
- [init(blendMetaParameterDefinition:identifier:)](init%28blendmetaparameterdefinition_identifier_%29.md): Creates a named blend node with a maxiumum blend range value.
- [init(spatialMixerDefinition:)](init%28spatialmixerdefinition_%29.md): Creates a blend node for spatial audio output.

# initDistanceBlendWithSpatialMixerDefinition:identifier: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a named blend node for spatial audio output.

## Declaration

```objectivec
- (instancetype) initDistanceBlendWithSpatialMixerDefinition:(PHASESpatialMixerDefinition *) spatialMixerDefinition identifier:(NSString *) identifier;
```

## Parameters

- `spatialMixerDefinition`: An object that combines spatial audio layers.
- `identifier`: A unique name for the node.

## See Also

### Creating a Blend Node

- [initWithBlendMetaParameterDefinition:](init%28blendmetaparameterdefinition_%29.md): Creates a blend node with a maxiumum blend range value.
- [initWithBlendMetaParameterDefinition:identifier:](init%28blendmetaparameterdefinition_identifier_%29.md): Creates a named blend node with a maxiumum blend range value.
- [initDistanceBlendWithSpatialMixerDefinition:](init%28spatialmixerdefinition_%29.md): Creates a blend node for spatial audio output.
