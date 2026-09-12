> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseblendnodedefinition/init(blendmetaparameterdefinition:identifier:)](https://developer.apple.com/documentation/phase/phaseblendnodedefinition/init(blendmetaparameterdefinition:identifier:))

# init(blendMetaParameterDefinition:identifier:) (Swift)

**Framework:** PHASE  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a named blend node with a maxiumum blend range value.

## Declaration

```swift
convenience init(blendMetaParameterDefinition: PHASENumberMetaParameterDefinition, identifier: String)
```

## Parameters

- `blendMetaParameterDefinition`: A maximum value for the blend range. The sound event’s blend meta parameter across a range from `0` to this value produces an active cross-fade along the child nodes.
- `identifier`: A unique name for the blend node.

## See Also

### Creating a Blend Node

- [init(blendMetaParameterDefinition:)](init%28blendmetaparameterdefinition_%29.md): Creates a blend node with a maxiumum blend range value.
- [init(spatialMixerDefinition:)](init%28spatialmixerdefinition_%29.md): Creates a blend node for spatial audio output.
- [init(spatialMixerDefinition:identifier:)](init%28spatialmixerdefinition_identifier_%29.md): Creates a named blend node for spatial audio output.

# initWithBlendMetaParameterDefinition:identifier: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a named blend node with a maxiumum blend range value.

## Declaration

```objectivec
- (instancetype) initWithBlendMetaParameterDefinition:(PHASENumberMetaParameterDefinition *) blendMetaParameterDefinition identifier:(NSString *) identifier;
```

## Parameters

- `blendMetaParameterDefinition`: A maximum value for the blend range. The sound event’s blend meta parameter across a range from `0` to this value produces an active cross-fade along the child nodes.
- `identifier`: A unique name for the blend node.

## See Also

### Creating a Blend Node

- [initWithBlendMetaParameterDefinition:](init%28blendmetaparameterdefinition_%29.md): Creates a blend node with a maxiumum blend range value.
- [initDistanceBlendWithSpatialMixerDefinition:](init%28spatialmixerdefinition_%29.md): Creates a blend node for spatial audio output.
- [initDistanceBlendWithSpatialMixerDefinition:identifier:](init%28spatialmixerdefinition_identifier_%29.md): Creates a named blend node for spatial audio output.
