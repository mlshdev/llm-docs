> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasestringmetaparameterdefinition](https://developer.apple.com/documentation/phase/phasestringmetaparameterdefinition)

# PHASEStringMetaParameterDefinition (Swift)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A specification for a metaparameter defined by text.

## Declaration

```swift
class PHASEStringMetaParameterDefinition
```

<a id="overview"></a>

## Overview

Use this class to spawn discrete instances of [PHASENumberMetaParameter](phasenumbermetaparameter.md), for example, a “player speed” metaparameter that the app changes gradually from `0.0` to `1.0`.

To use a number metaparameter, create an instance of this class and:

- Register it with the engine by calling [registerGlobalMetaParameter(metaParameterDefinition:)](phaseassetregistry/registerglobalmetaparameter%28metaparameterdefinition_%29.md), then access the instance of this class in the engine’s [globalMetaParameters](phaseassetregistry/globalmetaparameters.md) dictionary.
- Pass it to the [PHASEBlendNodeDefinition](phaseblendnodedefinition.md) initializer, [init(blendMetaParameterDefinition:identifier:)](phaseblendnodedefinition/init%28blendmetaparameterdefinition_identifier_%29.md), and then access the instance of this class in a sound event’s [metaParameters](phasesoundevent/metaparameters.md) dictionary.

## Topics

### Creating a Parameter Definition

- [init(value:)](phasestringmetaparameterdefinition/init%28value_%29.md): Creates a specification for a textual metaparameter with the given value.
- [init(value:identifier:)](phasestringmetaparameterdefinition/init%28value_identifier_%29.md): Creates a specification for a named textual metaparameter with the given value.

## Relationships

### Inherits From

- [PHASEMetaParameterDefinition](phasemetaparameterdefinition.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Textual Metaparameters

- [PHASEStringMetaParameter](phasestringmetaparameter.md): A metaparameter with a text definition that can change over time.

# PHASEStringMetaParameterDefinition (Objective-C)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A specification for a metaparameter defined by text.

## Declaration

```objectivec
@interface PHASEStringMetaParameterDefinition : PHASEMetaParameterDefinition
```

<a id="overview"></a>

## Overview

Use this class to spawn discrete instances of [PHASENumberMetaParameter](phasenumbermetaparameter.md), for example, a “player speed” metaparameter that the app changes gradually from `0.0` to `1.0`.

To use a number metaparameter, create an instance of this class and:

- Register it with the engine by calling [registerGlobalMetaParameter:error:](phaseassetregistry/registerglobalmetaparameter%28metaparameterdefinition_%29.md), then access the instance of this class in the engine’s [globalMetaParameters](phaseassetregistry/globalmetaparameters.md) dictionary.
- Pass it to the [PHASEBlendNodeDefinition](phaseblendnodedefinition.md) initializer, [initWithBlendMetaParameterDefinition:identifier:](phaseblendnodedefinition/init%28blendmetaparameterdefinition_identifier_%29.md), and then access the instance of this class in a sound event’s [metaParameters](phasesoundevent/metaparameters.md) dictionary.

## Topics

### Creating a Parameter Definition

- [initWithValue:](phasestringmetaparameterdefinition/init%28value_%29.md): Creates a specification for a textual metaparameter with the given value.
- [initWithValue:identifier:](phasestringmetaparameterdefinition/init%28value_identifier_%29.md): Creates a specification for a named textual metaparameter with the given value.

## Relationships

### Inherits From

- [PHASEMetaParameterDefinition](phasemetaparameterdefinition.md)

## See Also

### Textual Metaparameters

- [PHASEStringMetaParameter](phasestringmetaparameter.md): A metaparameter with a text definition that can change over time.
