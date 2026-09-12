> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphconvolution3dopdescriptor/weightslayout](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphconvolution3dopdescriptor/weightslayout)

# weightsLayout (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 16.3+ · iPadOS 16.3+ · Mac Catalyst 16.3+ · macOS 13.2+ · tvOS 16.3+ · visionOS 1.0+

The named layout of data in the weights tensor.

## Declaration

```swift
var weightsLayout: MPSGraphTensorNamedDataLayout { get set }
```

<a id="discussion"></a>

## Discussion

It defines the order of named dimensions (Output channels, Input channels, Kernel depth, Kernel height, Kernel width). The convolution operation uses this to interpret data in the weights tensor. For example, if `weightsLayout` is `MPSGraphTensorNamedDataLayoutOIDHW`, frameork interprets data in weights tensor as `outputChannels x inputChannels x kernelDepth x kernelHeight x kernelWidth` with `kernelWidth` as fastest moving dimension.

# weightsLayout (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 16.3+ · iPadOS 16.3+ · Mac Catalyst 16.3+ · macOS 13.2+ · tvOS 16.3+ · visionOS 1.0+

The named layout of data in the weights tensor.

## Declaration

```objectivec
@property (nonatomic, readwrite) MPSGraphTensorNamedDataLayout weightsLayout;
```

<a id="discussion"></a>

## Discussion

It defines the order of named dimensions (Output channels, Input channels, Kernel depth, Kernel height, Kernel width). The convolution operation uses this to interpret data in the weights tensor. For example, if `weightsLayout` is `MPSGraphTensorNamedDataLayoutOIDHW`, frameork interprets data in weights tensor as `outputChannels x inputChannels x kernelDepth x kernelHeight x kernelWidth` with `kernelWidth` as fastest moving dimension.
