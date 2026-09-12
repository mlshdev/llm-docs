> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasemappedmetaparameterdefinition](https://developer.apple.com/documentation/phase/phasemappedmetaparameterdefinition)

# PHASEMappedMetaParameterDefinition (Swift)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A metaparameter that graphs an input value on a set of mathematical curves.

## Declaration

```swift
class PHASEMappedMetaParameterDefinition
```

<a id="overview"></a>

## Overview

This class takes a metaparameter as input and plots its value on a curve defined by the [envelope](phasemappedmetaparameterdefinition/envelope.md) property.

Whereas the envelope’s function in [PHASEBlendNodeDefinition](phaseblendnodedefinition.md) and [PHASEEnvelopeDistanceModelParameters](phaseenvelopedistancemodelparameters.md) takes time because the relevant audio starts as its input parameter, in the case of the envelope property for this class, the app has full control over the input metaparameter’s value.

## Topics

### Creating a Mapped Metaparameter

- [init(inputMetaParameterDefinition:envelope:)](phasemappedmetaparameterdefinition/init%28inputmetaparameterdefinition_envelope_%29.md): Creates a specification for a metaparameter that the app plots on a graph defined by the given set of curves.
- [init(inputMetaParameterDefinition:envelope:identifier:)](phasemappedmetaparameterdefinition/init%28inputmetaparameterdefinition_envelope_identifier_%29.md): Creates a specification for a named metaparameter that the app plots on a graph defined by the given set of curves.

### Inspecting the Input Parameter

- [inputMetaParameterDefinition](phasemappedmetaparameterdefinition/inputmetaparameterdefinition.md): A linear input value to plot on a curve.

### Inspecting the Envelope

- [envelope](phasemappedmetaparameterdefinition/envelope.md): A collection of line segments that curve and connect to form a graph.

## Relationships

### Inherits From

- [PHASENumberMetaParameterDefinition](phasenumbermetaparameterdefinition.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# PHASEMappedMetaParameterDefinition (Objective-C)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A metaparameter that graphs an input value on a set of mathematical curves.

## Declaration

```objectivec
@interface PHASEMappedMetaParameterDefinition : PHASENumberMetaParameterDefinition
```

<a id="overview"></a>

## Overview

This class takes a metaparameter as input and plots its value on a curve defined by the [envelope](phasemappedmetaparameterdefinition/envelope.md) property.

Whereas the envelope’s function in [PHASEBlendNodeDefinition](phaseblendnodedefinition.md) and [PHASEEnvelopeDistanceModelParameters](phaseenvelopedistancemodelparameters.md) takes time because the relevant audio starts as its input parameter, in the case of the envelope property for this class, the app has full control over the input metaparameter’s value.

## Topics

### Creating a Mapped Metaparameter

- [initWithInputMetaParameterDefinition:envelope:](phasemappedmetaparameterdefinition/init%28inputmetaparameterdefinition_envelope_%29.md): Creates a specification for a metaparameter that the app plots on a graph defined by the given set of curves.
- [initWithInputMetaParameterDefinition:envelope:identifier:](phasemappedmetaparameterdefinition/init%28inputmetaparameterdefinition_envelope_identifier_%29.md): Creates a specification for a named metaparameter that the app plots on a graph defined by the given set of curves.

### Inspecting the Input Parameter

- [inputMetaParameterDefinition](phasemappedmetaparameterdefinition/inputmetaparameterdefinition.md): A linear input value to plot on a curve.

### Inspecting the Envelope

- [envelope](phasemappedmetaparameterdefinition/envelope.md): A collection of line segments that curve and connect to form a graph.

## Relationships

### Inherits From

- [PHASENumberMetaParameterDefinition](phasenumbermetaparameterdefinition.md)
