> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphlstmdescriptor/cellgateactivation](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphlstmdescriptor/cellgateactivation)

# cellGateActivation (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+

A parameter that defines the activation function used with the cell gate of the LSTM operation.

## Declaration

```swift
var cellGateActivation: MPSGraphRNNActivation { get set }
```

<a id="discussion"></a>

## Discussion

Default value: `MPSGraphRNNActivationTanh`.

# cellGateActivation (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+

A parameter that defines the activation function used with the cell gate of the LSTM operation.

## Declaration

```objectivec
@property (nonatomic, readwrite) MPSGraphRNNActivation cellGateActivation;
```

<a id="discussion"></a>

## Discussion

Default value: `MPSGraphRNNActivationTanh`.
