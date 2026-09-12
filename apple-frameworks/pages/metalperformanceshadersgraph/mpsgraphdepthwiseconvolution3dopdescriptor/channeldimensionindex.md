> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphdepthwiseconvolution3dopdescriptor/channeldimensionindex](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphdepthwiseconvolution3dopdescriptor/channeldimensionindex)

# channelDimensionIndex (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The axis that contains the channels in the input and the weights, within the 4D tile of the last dimensions.

## Declaration

```swift
var channelDimensionIndex: Int { get set }
```

<a id="discussion"></a>

## Discussion

For example the value of `-1` corresponds to `NDHWC`, `NHWC` layouts. This allows the placement of the channel index anywhere within the last 4 dimensions of the tensor. In case your weights are in a different layout you can bring them to the same layout as inputs using transposes or permutations. Default value: `-4`, corresponds to `NCDHW` and `CDHW` layouts.

# channelDimensionIndex (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The axis that contains the channels in the input and the weights, within the 4D tile of the last dimensions.

## Declaration

```objectivec
@property (nonatomic, readwrite) NSInteger channelDimensionIndex;
```

<a id="discussion"></a>

## Discussion

For example the value of `-1` corresponds to `NDHWC`, `NHWC` layouts. This allows the placement of the channel index anywhere within the last 4 dimensions of the tensor. In case your weights are in a different layout you can bring them to the same layout as inputs using transposes or permutations. Default value: `-4`, corresponds to `NCDHW` and `CDHW` layouts.
