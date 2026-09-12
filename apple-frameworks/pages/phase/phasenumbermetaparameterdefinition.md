> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasenumbermetaparameterdefinition](https://developer.apple.com/documentation/phase/phasenumbermetaparameterdefinition)

# PHASENumberMetaParameterDefinition (Swift)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A specification for a metaparameter defined by a number.

## Declaration

```swift
class PHASENumberMetaParameterDefinition
```

<a id="overview"></a>

## Overview

Use this class to spawn discrete instances of [PHASENumberMetaParameter](phasenumbermetaparameter.md), for example, a “player speed” metaparameter that the app changes gradually from `0.0` to `1.0`.

To use a number metaparameter, create an instance of this class and:

- Register it with the engine by calling [registerGlobalMetaParameter(metaParameterDefinition:)](phaseassetregistry/registerglobalmetaparameter%28metaparameterdefinition_%29.md), then access the instance of this class in the engine’s [globalMetaParameters](phaseassetregistry/globalmetaparameters.md) dictionary.
- Pass it to the [PHASEBlendNodeDefinition](phaseblendnodedefinition.md) initializer, [init(blendMetaParameterDefinition:identifier:)](phaseblendnodedefinition/init%28blendmetaparameterdefinition_identifier_%29.md), and then access the instance of this class in a sound event’s [metaParameters](phasesoundevent/metaparameters.md) dictionary.
- Pass it into the [PHASEMappedMetaParameterDefinition](phasemappedmetaparameterdefinition.md) initializer, [init(inputMetaParameterDefinition:envelope:)](phasemappedmetaparameterdefinition/init%28inputmetaparameterdefinition_envelope_%29.md). Then, access the instance of this class using the mapped parameter’s [inputMetaParameterDefinition](phasemappedmetaparameterdefinition/inputmetaparameterdefinition.md) property.

## Topics

### Creating a Metaparameter Definition

- [init(value:)](phasenumbermetaparameterdefinition/init%28value_%29.md): Creates a specification for a metaparameter with the given numeric value.
- [init(value:identifier:)](phasenumbermetaparameterdefinition/init%28value_identifier_%29.md): Creates a specification for a named metaparameter with the given numeric value.
- [init(value:minimum:maximum:)](phasenumbermetaparameterdefinition/init%28value_minimum_maximum_%29.md): Creates a specification for a metaparameter with the given numeric value and range.
- [init(value:minimum:maximum:identifier:)](phasenumbermetaparameterdefinition/init%28value_minimum_maximum_identifier_%29.md): Creates a specification for a named metaparameter with the given numeric value and range.

### Reistricting the Value

- [minimum](phasenumbermetaparameterdefinition/minimum.md): The lowest possible number for the value.
- [maximum](phasenumbermetaparameterdefinition/maximum.md): The highest possible number for the value.

## Relationships

### Inherits From

- [PHASEMetaParameterDefinition](phasemetaparameterdefinition.md)

### Inherited By

- [PHASEMappedMetaParameterDefinition](phasemappedmetaparameterdefinition.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Linear Metaparameters

- [PHASENumberMetaParameter](phasenumbermetaparameter.md): A metaparameter defined by a number that can change over time.

# PHASENumberMetaParameterDefinition (Objective-C)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A specification for a metaparameter defined by a number.

## Declaration

```objectivec
@interface PHASENumberMetaParameterDefinition : PHASEMetaParameterDefinition
```

<a id="overview"></a>

## Overview

Use this class to spawn discrete instances of [PHASENumberMetaParameter](phasenumbermetaparameter.md), for example, a “player speed” metaparameter that the app changes gradually from `0.0` to `1.0`.

To use a number metaparameter, create an instance of this class and:

- Register it with the engine by calling [registerGlobalMetaParameter:error:](phaseassetregistry/registerglobalmetaparameter%28metaparameterdefinition_%29.md), then access the instance of this class in the engine’s [globalMetaParameters](phaseassetregistry/globalmetaparameters.md) dictionary.
- Pass it to the [PHASEBlendNodeDefinition](phaseblendnodedefinition.md) initializer, [initWithBlendMetaParameterDefinition:identifier:](phaseblendnodedefinition/init%28blendmetaparameterdefinition_identifier_%29.md), and then access the instance of this class in a sound event’s [metaParameters](phasesoundevent/metaparameters.md) dictionary.
- Pass it into the [PHASEMappedMetaParameterDefinition](phasemappedmetaparameterdefinition.md) initializer, [initWithInputMetaParameterDefinition:envelope:](phasemappedmetaparameterdefinition/init%28inputmetaparameterdefinition_envelope_%29.md). Then, access the instance of this class using the mapped parameter’s [inputMetaParameterDefinition](phasemappedmetaparameterdefinition/inputmetaparameterdefinition.md) property.

## Topics

### Creating a Metaparameter Definition

- [initWithValue:](phasenumbermetaparameterdefinition/init%28value_%29.md): Creates a specification for a metaparameter with the given numeric value.
- [initWithValue:identifier:](phasenumbermetaparameterdefinition/init%28value_identifier_%29.md): Creates a specification for a named metaparameter with the given numeric value.
- [initWithValue:minimum:maximum:](phasenumbermetaparameterdefinition/init%28value_minimum_maximum_%29.md): Creates a specification for a metaparameter with the given numeric value and range.
- [initWithValue:minimum:maximum:identifier:](phasenumbermetaparameterdefinition/init%28value_minimum_maximum_identifier_%29.md): Creates a specification for a named metaparameter with the given numeric value and range.

### Reistricting the Value

- [minimum](phasenumbermetaparameterdefinition/minimum.md): The lowest possible number for the value.
- [maximum](phasenumbermetaparameterdefinition/maximum.md): The highest possible number for the value.

## Relationships

### Inherits From

- [PHASEMetaParameterDefinition](phasemetaparameterdefinition.md)

### Inherited By

- [PHASEMappedMetaParameterDefinition](phasemappedmetaparameterdefinition.md)

## See Also

### Linear Metaparameters

- [PHASENumberMetaParameter](phasenumbermetaparameter.md): A metaparameter defined by a number that can change over time.
