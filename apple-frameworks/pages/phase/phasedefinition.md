> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasedefinition](https://developer.apple.com/documentation/phase/phasedefinition)

# PHASEDefinition (Swift)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A base class that adds a name to framework definitions.

## Declaration

```swift
class PHASEDefinition
```

<a id="overview"></a>

## Overview

Various PHASE classes derive from this class, for example, [PHASEMixerDefinition](phasemixerdefinition.md), [PHASEMetaParameterDefinition](phasemetaparameterdefinition.md), and [PHASESoundEventNodeDefinition](phasesoundeventnodedefinition.md).

This class represents a template from which PHASE creates concrete [PHASEAsset](phaseasset.md) subclasses at runtime. For example, when you register a global metaparameter definition using [registerGlobalMetaParameter(metaParameterDefinition:)](phaseassetregistry/registerglobalmetaparameter%28metaparameterdefinition_%29.md), PHASE returns a [PHASEAsset](phaseasset.md) subclass, [PHASEGlobalMetaParameterAsset](phaseglobalmetaparameterasset.md), that identifies a usable metaparameter by name. To access the usable metaparameter, pass the [PHASEGlobalMetaParameterAsset](phaseglobalmetaparameterasset.md) [identifier](phaseasset/identifier.md) into the [globalMetaParameters](phaseassetregistry/globalmetaparameters.md) dictionary.

## Topics

### Identifying a Definition

- [identifier](phasedefinition/identifier.md): A unique name for the definition.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [PHASEMetaParameterDefinition](phasemetaparameterdefinition.md)
- [PHASEMixerDefinition](phasemixerdefinition.md)
- [PHASESoundEventNodeDefinition](phasesoundeventnodedefinition.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Audio Layering and Effects

- [PHASEChannelMixerDefinition](phasechannelmixerdefinition.md): An audio-layering object that routes sound directly to the device’s output.
- [PHASEAmbientMixerDefinition](phaseambientmixerdefinition.md): An audio-layering object that outputs sound in a particular direction in 3D space.
- [PHASEMixerDefinition](phasemixerdefinition.md): An object to initialize a mixer with a given configuration.
- [PHASEMixer](phasemixer.md): An object that combines multiple audio signals into a single signal.
- [Spatial Mixing](spatial-mixing.md): Define environmental characteristics that determine how sound plays in your app’s 3D soundscape.

# PHASEDefinition (Objective-C)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A base class that adds a name to framework definitions.

## Declaration

```objectivec
@interface PHASEDefinition : NSObject
```

<a id="overview"></a>

## Overview

Various PHASE classes derive from this class, for example, [PHASEMixerDefinition](phasemixerdefinition.md), [PHASEMetaParameterDefinition](phasemetaparameterdefinition.md), and [PHASESoundEventNodeDefinition](phasesoundeventnodedefinition.md).

This class represents a template from which PHASE creates concrete [PHASEAsset](phaseasset.md) subclasses at runtime. For example, when you register a global metaparameter definition using [registerGlobalMetaParameter:error:](phaseassetregistry/registerglobalmetaparameter%28metaparameterdefinition_%29.md), PHASE returns a [PHASEAsset](phaseasset.md) subclass, [PHASEGlobalMetaParameterAsset](phaseglobalmetaparameterasset.md), that identifies a usable metaparameter by name. To access the usable metaparameter, pass the [PHASEGlobalMetaParameterAsset](phaseglobalmetaparameterasset.md) [identifier](phaseasset/identifier.md) into the [globalMetaParameters](phaseassetregistry/globalmetaparameters.md) dictionary.

## Topics

### Identifying a Definition

- [identifier](phasedefinition/identifier.md): A unique name for the definition.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [PHASEMetaParameterDefinition](phasemetaparameterdefinition.md)
- [PHASEMixerDefinition](phasemixerdefinition.md)
- [PHASESoundEventNodeDefinition](phasesoundeventnodedefinition.md)

## See Also

### Audio Layering and Effects

- [PHASEChannelMixerDefinition](phasechannelmixerdefinition.md): An audio-layering object that routes sound directly to the device’s output.
- [PHASEAmbientMixerDefinition](phaseambientmixerdefinition.md): An audio-layering object that outputs sound in a particular direction in 3D space.
- [PHASEMixerDefinition](phasemixerdefinition.md): An object to initialize a mixer with a given configuration.
- [PHASEMixer](phasemixer.md): An object that combines multiple audio signals into a single signal.
- [Spatial Mixing](spatial-mixing.md): Define environmental characteristics that determine how sound plays in your app’s 3D soundscape.
