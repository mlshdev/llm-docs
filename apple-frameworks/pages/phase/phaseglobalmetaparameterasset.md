> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseglobalmetaparameterasset](https://developer.apple.com/documentation/phase/phaseglobalmetaparameterasset)

# PHASEGlobalMetaParameterAsset (Swift)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A reference to a registered metaparameter that the app can share with multiple sound events or sources.

## Declaration

```swift
class PHASEGlobalMetaParameterAsset
```

<a id="overview"></a>

## Overview

The engine’s [registerGlobalMetaParameter(metaParameterDefinition:)](phaseassetregistry/registerglobalmetaparameter%28metaparameterdefinition_%29.md) function returns an instance of this class for a parameter you register. Then, you access the actual metaparameter by using this class’s [identifier](phaseasset/identifier.md) as the key for metaparameter dictionary, for example, a sound event’s [metaParameters](phasesoundevent/metaparameters.md) or the asset registry’s [globalMetaParameters](phaseassetregistry/globalmetaparameters.md).

As an opaque derived object, this class adds no properties to the subclass.

## Relationships

### Inherits From

- [PHASEAsset](phaseasset.md)

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
- [PHASEMetaParameterDefinition](phasemetaparameterdefinition.md): A specification for a named parameter with a constant value.

# PHASEGlobalMetaParameterAsset (Objective-C)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A reference to a registered metaparameter that the app can share with multiple sound events or sources.

## Declaration

```objectivec
@interface PHASEGlobalMetaParameterAsset : PHASEAsset
```

<a id="overview"></a>

## Overview

The engine’s [registerGlobalMetaParameter:error:](phaseassetregistry/registerglobalmetaparameter%28metaparameterdefinition_%29.md) function returns an instance of this class for a parameter you register. Then, you access the actual metaparameter by using this class’s [identifier](phaseasset/identifier.md) as the key for metaparameter dictionary, for example, a sound event’s [metaParameters](phasesoundevent/metaparameters.md) or the asset registry’s [globalMetaParameters](phaseassetregistry/globalmetaparameters.md).

As an opaque derived object, this class adds no properties to the subclass.

## Relationships

### Inherits From

- [PHASEAsset](phaseasset.md)

## See Also

### Base Metaparameters

- [PHASEMetaParameter](phasemetaparameter.md): A named parameter with a value that the app can change over time.
- [PHASEMetaParameterDefinition](phasemetaparameterdefinition.md): A specification for a named parameter with a constant value.
