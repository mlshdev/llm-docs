> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphconvolution2dopdescriptor/weightslayout](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphconvolution2dopdescriptor/weightslayout)

# weightsLayout (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The named layout of data in the weights tensor.

## Declaration

```swift
var weightsLayout: MPSGraphTensorNamedDataLayout { get set }
```

<a id="discussion"></a>

## Discussion

It defines the order of named dimensions (Output channels, Input channels, Kernel height, Kernel width). The convolution operation uses this to interpret data in the weights tensor. For example, if `weightsLayout` is `MPSGraphTensorNamedDataLayoutOIHW`, frameork interprets data in weights tensor as `outputChannels x inputChannels x kernelHeight x kernelWidth` with `kernelWidth` as fastest moving dimension.

# weightsLayout (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The named layout of data in the weights tensor.

## Declaration

```objectivec
@property (nonatomic, readwrite) MPSGraphTensorNamedDataLayout weightsLayout;
```

<a id="discussion"></a>

## Discussion

It defines the order of named dimensions (Output channels, Input channels, Kernel height, Kernel width). The convolution operation uses this to interpret data in the weights tensor. For example, if `weightsLayout` is `MPSGraphTensorNamedDataLayoutOIHW`, frameork interprets data in weights tensor as `outputChannels x inputChannels x kernelHeight x kernelWidth` with `kernelWidth` as fastest moving dimension.
