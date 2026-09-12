> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphconvolution2dopdescriptor/datalayout](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphconvolution2dopdescriptor/datalayout)

# dataLayout (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The named layout of data in the source tensor.

## Declaration

```swift
var dataLayout: MPSGraphTensorNamedDataLayout { get set }
```

<a id="discussion"></a>

## Discussion

It defines the order of named dimensions (Batch, Channel, Height, Width). The convolution operation uses this to interpret data in the source tensor. For example, if `dataLayout` is `MPSGraphTensorNamedDataLayoutNCHW`, frameork interprets data in source tensor as `batch x channels x height x width` with `width` as fastest moving dimension.

# dataLayout (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The named layout of data in the source tensor.

## Declaration

```objectivec
@property (nonatomic, readwrite) MPSGraphTensorNamedDataLayout dataLayout;
```

<a id="discussion"></a>

## Discussion

It defines the order of named dimensions (Batch, Channel, Height, Width). The convolution operation uses this to interpret data in the source tensor. For example, if `dataLayout` is `MPSGraphTensorNamedDataLayoutNCHW`, frameork interprets data in source tensor as `batch x channels x height x width` with `width` as fastest moving dimension.
