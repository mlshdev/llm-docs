> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphsinglegaternndescriptor/activation](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphsinglegaternndescriptor/activation)

# activation (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+

A parameter that defines the activation function to use with the RNN operation.

## Declaration

```swift
var activation: MPSGraphRNNActivation { get set }
```

<a id="discussion"></a>

## Discussion

Default value: `MPSGraphRNNActivationRelu`.

# activation (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+

A parameter that defines the activation function to use with the RNN operation.

## Declaration

```objectivec
@property (nonatomic, readwrite) MPSGraphRNNActivation activation;
```

<a id="discussion"></a>

## Discussion

Default value: `MPSGraphRNNActivationRelu`.
