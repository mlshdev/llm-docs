> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasemappedmetaparameterdefinition/inputmetaparameterdefinition](https://developer.apple.com/documentation/phase/phasemappedmetaparameterdefinition/inputmetaparameterdefinition)

# inputMetaParameterDefinition (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A linear input value to plot on a curve.

## Declaration

```swift
var inputMetaParameterDefinition: PHASENumberMetaParameterDefinition { get }
```

<a id="Discussion"></a>

## Discussion

This property defines the input value to plot on a graph defined by [envelope](envelope.md).

To retrieve the output value, an app passes the metaparameter’s [value](../phasemetaparameter/value.md) to the [evaluate(x:)](../phaseenvelope/evaluate%28x_%29.md) function.

# inputMetaParameterDefinition (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A linear input value to plot on a curve.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) PHASENumberMetaParameterDefinition * inputMetaParameterDefinition;
```

<a id="Discussion"></a>

## Discussion

This property defines the input value to plot on a graph defined by [envelope](envelope.md).

To retrieve the output value, an app passes the metaparameter’s [value](../phasemetaparameter/value.md) to the [evaluateForValue:](../phaseenvelope/evaluate%28x_%29.md) function.
