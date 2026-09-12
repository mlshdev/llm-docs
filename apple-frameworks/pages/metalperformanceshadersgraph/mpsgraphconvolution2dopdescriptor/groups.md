> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphconvolution2dopdescriptor/groups](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphconvolution2dopdescriptor/groups)

# groups (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The number of partitions of the input and output channels.

## Declaration

```swift
var groups: Int { get set }
```

<a id="discussion"></a>

## Discussion

The convolution operation divides input and output channels in `groups` partitions. input channels in a group or partition are only connected to output channels in corresponding group. Number of weights the convolution needs is `outputFeatureChannels x inputFeatureChannels/groups x kernelWidth x kernelHeight`

# groups (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The number of partitions of the input and output channels.

## Declaration

```objectivec
@property (nonatomic, readwrite) NSUInteger groups;
```

<a id="discussion"></a>

## Discussion

The convolution operation divides input and output channels in `groups` partitions. input channels in a group or partition are only connected to output channels in corresponding group. Number of weights the convolution needs is `outputFeatureChannels x inputFeatureChannels/groups x kernelWidth x kernelHeight`
