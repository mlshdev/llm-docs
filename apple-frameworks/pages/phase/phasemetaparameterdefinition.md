> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasemetaparameterdefinition](https://developer.apple.com/documentation/phase/phasemetaparameterdefinition)

# PHASEMetaParameterDefinition (Swift)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A specification for a named parameter with a constant value.

## Declaration

```swift
class PHASEMetaParameterDefinition
```

<a id="overview"></a>

## Overview

Instances of this class provide an app with dynamic control of various properies of live audio playback. This is a base class for the [PHASENumberMetaParameterDefinition](phasenumbermetaparameterdefinition.md) and [PHASEStringMetaParameterDefinition](phasestringmetaparameterdefinition.md) subclasses.

You create a single instance of one of the subclasses for a specific property you want to adjust. By passing the definition subclass to the framework, you spawn one or more [PHASEMetaParameterDefinition](phasemetaparameterdefinition.md) objects for discrete use across your app. For example, when you initialize a [PHASEBlendNodeDefinition](phaseblendnodedefinition.md) with a number metaparameter definition, PHASE registers a [PHASENumberMetaParameter](phasenumbermetaparameter.md) in the corresponding sound event’s [metaParameters](phasesoundevent/metaparameters.md) dictionary.

Put metaparameter definitions that you wish to share across different sounds in the asset registery’s [globalMetaParameters](phaseassetregistry/globalmetaparameters.md) dictionary. To add global metaparameter definitions to the dictionary, call  [registerGlobalMetaParameter(metaParameterDefinition:)](phaseassetregistry/registerglobalmetaparameter%28metaparameterdefinition_%29.md). Then pass the definition into several sound event node defintions, such as [PHASESamplerNodeDefinition](phasesamplernodedefinition.md).

## Topics

### Setting a Metaparameter

- [value](phasemetaparameterdefinition/value.md): A constant value for the parameter definition.

## Relationships

### Inherits From

- [PHASEDefinition](phasedefinition.md)

### Inherited By

- [PHASENumberMetaParameterDefinition](phasenumbermetaparameterdefinition.md)
- [PHASEStringMetaParameterDefinition](phasestringmetaparameterdefinition.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Base Metaparameters

- [PHASEMetaParameter](phasemetaparameter.md): A named parameter with a value that the app can change over time.
- [PHASEGlobalMetaParameterAsset](phaseglobalmetaparameterasset.md): A reference to a registered metaparameter that the app can share with multiple sound events or sources.

# PHASEMetaParameterDefinition (Objective-C)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A specification for a named parameter with a constant value.

## Declaration

```objectivec
@interface PHASEMetaParameterDefinition : PHASEDefinition
```

<a id="overview"></a>

## Overview

Instances of this class provide an app with dynamic control of various properies of live audio playback. This is a base class for the [PHASENumberMetaParameterDefinition](phasenumbermetaparameterdefinition.md) and [PHASEStringMetaParameterDefinition](phasestringmetaparameterdefinition.md) subclasses.

You create a single instance of one of the subclasses for a specific property you want to adjust. By passing the definition subclass to the framework, you spawn one or more [PHASEMetaParameterDefinition](phasemetaparameterdefinition.md) objects for discrete use across your app. For example, when you initialize a [PHASEBlendNodeDefinition](phaseblendnodedefinition.md) with a number metaparameter definition, PHASE registers a [PHASENumberMetaParameter](phasenumbermetaparameter.md) in the corresponding sound event’s [metaParameters](phasesoundevent/metaparameters.md) dictionary.

Put metaparameter definitions that you wish to share across different sounds in the asset registery’s [globalMetaParameters](phaseassetregistry/globalmetaparameters.md) dictionary. To add global metaparameter definitions to the dictionary, call  [registerGlobalMetaParameter:error:](phaseassetregistry/registerglobalmetaparameter%28metaparameterdefinition_%29.md). Then pass the definition into several sound event node defintions, such as [PHASESamplerNodeDefinition](phasesamplernodedefinition.md).

## Topics

### Setting a Metaparameter

- [value](phasemetaparameterdefinition/value.md): A constant value for the parameter definition.

## Relationships

### Inherits From

- [PHASEDefinition](phasedefinition.md)

### Inherited By

- [PHASENumberMetaParameterDefinition](phasenumbermetaparameterdefinition.md)
- [PHASEStringMetaParameterDefinition](phasestringmetaparameterdefinition.md)

## See Also

### Base Metaparameters

- [PHASEMetaParameter](phasemetaparameter.md): A named parameter with a value that the app can change over time.
- [PHASEGlobalMetaParameterAsset](phaseglobalmetaparameterasset.md): A reference to a registered metaparameter that the app can share with multiple sound events or sources.
