> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphgrudescriptor/outputgateactivation](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphgrudescriptor/outputgateactivation)

# outputGateActivation (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A parameter that defines the activation function to use with the output-gate of the GRU operation.

## Declaration

```swift
var outputGateActivation: MPSGraphRNNActivation { get set }
```

<a id="discussion"></a>

## Discussion

Default value: `MPSGraphRNNActivationTanh`.

# outputGateActivation (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A parameter that defines the activation function to use with the output-gate of the GRU operation.

## Declaration

```objectivec
@property (nonatomic, readwrite) MPSGraphRNNActivation outputGateActivation;
```

<a id="discussion"></a>

## Discussion

Default value: `MPSGraphRNNActivationTanh`.
