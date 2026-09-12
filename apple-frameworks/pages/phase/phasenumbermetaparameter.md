> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasenumbermetaparameter](https://developer.apple.com/documentation/phase/phasenumbermetaparameter)

# PHASENumberMetaParameter (Swift)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A metaparameter defined by a number that can change over time.

## Declaration

```swift
class PHASENumberMetaParameter
```

<a id="overview"></a>

## Overview

This class contains a number that updates, like a “player speed” metaparameter that the app changes gradually from `0.0` to `1.0`.

To create an instance of this class, first create a [PHASENumberMetaParameterDefinition](phasenumbermetaparameterdefinition.md), and either:

- Register it with the engine by calling [registerGlobalMetaParameter(metaParameterDefinition:)](phaseassetregistry/registerglobalmetaparameter%28metaparameterdefinition_%29.md), then access the instance of this class in the engine’s [globalMetaParameters](phaseassetregistry/globalmetaparameters.md) dictionary.
- Pass it to the [PHASEBlendNodeDefinition](phaseblendnodedefinition.md) initializer, [init(blendMetaParameterDefinition:identifier:)](phaseblendnodedefinition/init%28blendmetaparameterdefinition_identifier_%29.md), and then access the instance of this class in a sound event’s [metaParameters](phasesoundevent/metaparameters.md) dictionary.
- Use it as the input value for a [PHASEMappedMetaParameterDefinition](phasemappedmetaparameterdefinition.md) by passing it into the [init(inputMetaParameterDefinition:envelope:)](phasemappedmetaparameterdefinition/init%28inputmetaparameterdefinition_envelope_%29.md) initializer. Then, access the instance of this class using the mapped parameter’s [inputMetaParameterDefinition](phasemappedmetaparameterdefinition/inputmetaparameterdefinition.md) property.

## Topics

### Inspecting Extremes

- [minimum](phasenumbermetaparameter/minimum.md): The lowest possible number for the value.
- [maximum](phasenumbermetaparameter/maximum.md): The highest possible number for the value.

### Interpolating the Value

- [fade(value:duration:)](phasenumbermetaparameter/fade%28value_duration_%29.md): Sets the value gradually over the given amount of time.

## Relationships

### Inherits From

- [PHASEMetaParameter](phasemetaparameter.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Linear Metaparameters

- [PHASENumberMetaParameterDefinition](phasenumbermetaparameterdefinition.md): A specification for a metaparameter defined by a number.

# PHASENumberMetaParameter (Objective-C)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A metaparameter defined by a number that can change over time.

## Declaration

```objectivec
@interface PHASENumberMetaParameter : PHASEMetaParameter
```

<a id="overview"></a>

## Overview

This class contains a number that updates, like a “player speed” metaparameter that the app changes gradually from `0.0` to `1.0`.

To create an instance of this class, first create a [PHASENumberMetaParameterDefinition](phasenumbermetaparameterdefinition.md), and either:

- Register it with the engine by calling [registerGlobalMetaParameter:error:](phaseassetregistry/registerglobalmetaparameter%28metaparameterdefinition_%29.md), then access the instance of this class in the engine’s [globalMetaParameters](phaseassetregistry/globalmetaparameters.md) dictionary.
- Pass it to the [PHASEBlendNodeDefinition](phaseblendnodedefinition.md) initializer, [initWithBlendMetaParameterDefinition:identifier:](phaseblendnodedefinition/init%28blendmetaparameterdefinition_identifier_%29.md), and then access the instance of this class in a sound event’s [metaParameters](phasesoundevent/metaparameters.md) dictionary.
- Use it as the input value for a [PHASEMappedMetaParameterDefinition](phasemappedmetaparameterdefinition.md) by passing it into the [initWithInputMetaParameterDefinition:envelope:](phasemappedmetaparameterdefinition/init%28inputmetaparameterdefinition_envelope_%29.md) initializer. Then, access the instance of this class using the mapped parameter’s [inputMetaParameterDefinition](phasemappedmetaparameterdefinition/inputmetaparameterdefinition.md) property.

## Topics

### Inspecting Extremes

- [minimum](phasenumbermetaparameter/minimum.md): The lowest possible number for the value.
- [maximum](phasenumbermetaparameter/maximum.md): The highest possible number for the value.

### Interpolating the Value

- [fadeToValue:duration:](phasenumbermetaparameter/fade%28value_duration_%29.md): Sets the value gradually over the given amount of time.

## Relationships

### Inherits From

- [PHASEMetaParameter](phasemetaparameter.md)

## See Also

### Linear Metaparameters

- [PHASENumberMetaParameterDefinition](phasenumbermetaparameterdefinition.md): A specification for a metaparameter defined by a number.
