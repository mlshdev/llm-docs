> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphgrudescriptor/resetgateactivation

# resetGateActivation (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A parameter that defines the activation function to use with the reset-gate of the GRU operation.

## Declaration

```swift
var resetGateActivation: MPSGraphRNNActivation { get set }
```

<a id="discussion"></a>

## Discussion

Default value: `MPSGraphRNNActivationSigmoid`.

# resetGateActivation (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A parameter that defines the activation function to use with the reset-gate of the GRU operation.

## Declaration

```objectivec
@property (nonatomic, readwrite) MPSGraphRNNActivation resetGateActivation;
```

<a id="discussion"></a>

## Discussion

Default value: `MPSGraphRNNActivationSigmoid`.
