> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasestringmetaparameter](https://developer.apple.com/documentation/phase/phasestringmetaparameter)

# PHASEStringMetaParameter (Swift)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A metaparameter with a text definition that can change over time.

## Declaration

```swift
class PHASEStringMetaParameter
```

<a id="overview"></a>

## Overview

This class contains text that updates, like a “weather” metaparameter that the app changes from “rainy” to “sunny.”

To create an instance of this class, first create a [PHASEStringMetaParameterDefinition](phasestringmetaparameterdefinition.md), and either:

- Register it with the engine by calling [registerGlobalMetaParameter(metaParameterDefinition:)](phaseassetregistry/registerglobalmetaparameter%28metaparameterdefinition_%29.md), then access the instance of this class in the engine’s [globalMetaParameters](phaseassetregistry/globalmetaparameters.md) dictionary.
- Pass it to the [PHASESwitchNodeDefinition](phaseswitchnodedefinition.md) initializer, [init(switchMetaParameterDefinition:)](phaseswitchnodedefinition/init%28switchmetaparameterdefinition_%29.md), and then access the instance of this class in a sound event’s [metaParameters](phasesoundevent/metaparameters.md) dictionary.

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

### Textual Metaparameters

- [PHASEStringMetaParameterDefinition](phasestringmetaparameterdefinition.md): A specification for a metaparameter defined by text.

# PHASEStringMetaParameter (Objective-C)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A metaparameter with a text definition that can change over time.

## Declaration

```objectivec
@interface PHASEStringMetaParameter : PHASEMetaParameter
```

<a id="overview"></a>

## Overview

This class contains text that updates, like a “weather” metaparameter that the app changes from “rainy” to “sunny.”

To create an instance of this class, first create a [PHASEStringMetaParameterDefinition](phasestringmetaparameterdefinition.md), and either:

- Register it with the engine by calling [registerGlobalMetaParameter:error:](phaseassetregistry/registerglobalmetaparameter%28metaparameterdefinition_%29.md), then access the instance of this class in the engine’s [globalMetaParameters](phaseassetregistry/globalmetaparameters.md) dictionary.
- Pass it to the [PHASESwitchNodeDefinition](phaseswitchnodedefinition.md) initializer, [initWithSwitchMetaParameterDefinition:](phaseswitchnodedefinition/init%28switchmetaparameterdefinition_%29.md), and then access the instance of this class in a sound event’s [metaParameters](phasesoundevent/metaparameters.md) dictionary.

## Relationships

### Inherits From

- [PHASEMetaParameter](phasemetaparameter.md)

## See Also

### Textual Metaparameters

- [PHASEStringMetaParameterDefinition](phasestringmetaparameterdefinition.md): A specification for a metaparameter defined by text.
