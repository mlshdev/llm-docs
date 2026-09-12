> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasemetaparameter](https://developer.apple.com/documentation/phase/phasemetaparameter)

# PHASEMetaParameter (Swift)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A named parameter with a value that the app can change over time.

## Declaration

```swift
class PHASEMetaParameter
```

<a id="overview"></a>

## Overview

Instances of this class provide an app with dynamic control of a sound’s properties. A metaparameter takes a single value as input and may operate on one or more audio characteristics.

To change the value of a metaparameter at runtime:

- Assign a string to a textual metaparameter’s [value](phasemetaparameter/value.md).
- Adjust the value of a number or mapped metaparameter gradually over a duration by calling [fade(value:duration:)](phasenumbermetaparameter/fade%28value_duration_%29.md).

## Topics

### Accessing the Value

- [value](phasemetaparameter/value.md): A value for the metaparameter.

### Identifying the Parameter

- [identifier](phasemetaparameter/identifier.md): A unique name for the metaparameter.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [PHASENumberMetaParameter](phasenumbermetaparameter.md)
- [PHASEStringMetaParameter](phasestringmetaparameter.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Base Metaparameters

- [PHASEMetaParameterDefinition](phasemetaparameterdefinition.md): A specification for a named parameter with a constant value.
- [PHASEGlobalMetaParameterAsset](phaseglobalmetaparameterasset.md): A reference to a registered metaparameter that the app can share with multiple sound events or sources.

# PHASEMetaParameter (Objective-C)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A named parameter with a value that the app can change over time.

## Declaration

```objectivec
@interface PHASEMetaParameter : NSObject
```

<a id="overview"></a>

## Overview

Instances of this class provide an app with dynamic control of a sound’s properties. A metaparameter takes a single value as input and may operate on one or more audio characteristics.

To change the value of a metaparameter at runtime:

- Assign a string to a textual metaparameter’s [value](phasemetaparameter/value.md).
- Adjust the value of a number or mapped metaparameter gradually over a duration by calling [fadeToValue:duration:](phasenumbermetaparameter/fade%28value_duration_%29.md).

## Topics

### Accessing the Value

- [value](phasemetaparameter/value.md): A value for the metaparameter.

### Identifying the Parameter

- [identifier](phasemetaparameter/identifier.md): A unique name for the metaparameter.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [PHASENumberMetaParameter](phasenumbermetaparameter.md)
- [PHASEStringMetaParameter](phasestringmetaparameter.md)

## See Also

### Base Metaparameters

- [PHASEMetaParameterDefinition](phasemetaparameterdefinition.md): A specification for a named parameter with a constant value.
- [PHASEGlobalMetaParameterAsset](phaseglobalmetaparameterasset.md): A reference to a registered metaparameter that the app can share with multiple sound events or sources.
