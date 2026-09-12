> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasemappedmetaparameterdefinition/envelope](https://developer.apple.com/documentation/phase/phasemappedmetaparameterdefinition/envelope)

# envelope (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A collection of line segments that curve and connect to form a graph.

## Declaration

```swift
var envelope: PHASEEnvelope { get }
```

<a id="Discussion"></a>

## Discussion

The line segments collectively plot an output value for the [inputMetaParameterDefinition](inputmetaparameterdefinition.md) property.

To plot the input, call [evaluate(x:)](../phaseenvelope/evaluate%28x_%29.md), passing in the input metaparameter’s [value](../phasemetaparameter/value.md).

To gradually change the input over time, call [fade(value:duration:)](../phasenumbermetaparameter/fade%28value_duration_%29.md).

# envelope (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A collection of line segments that curve and connect to form a graph.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) PHASEEnvelope * envelope;
```

<a id="Discussion"></a>

## Discussion

The line segments collectively plot an output value for the [inputMetaParameterDefinition](inputmetaparameterdefinition.md) property.

To plot the input, call [evaluateForValue:](../phaseenvelope/evaluate%28x_%29.md), passing in the input metaparameter’s [value](../phasemetaparameter/value.md).

To gradually change the input over time, call [fadeToValue:duration:](../phasenumbermetaparameter/fade%28value_duration_%29.md).
