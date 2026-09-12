> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vntrackopticalflowrequest/computationaccuracy-swift.property](https://developer.apple.com/documentation/vision/vntrackopticalflowrequest/computationaccuracy-swift.property)

# computationAccuracy (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The level of accuracy to compute the optical flow.

## Declaration

```swift
var computationAccuracy: VNTrackOpticalFlowRequest.ComputationAccuracy { get set }
```

<a id="Discussion"></a>

## Discussion

The computational time trends with accuracy level. The default value is [VNTrackOpticalFlowRequest.ComputationAccuracy.medium](computationaccuracy-swift.enum/medium.md).

## See Also

### Configuring the Request

- [VNTrackOpticalFlowRequest.ComputationAccuracy](computationaccuracy-swift.enum.md): Computational accuracy options.
- [keepNetworkOutput](keepnetworkoutput.md): A Boolean value that indicates the raw pixel buffer continues to emit from the network.
- [outputPixelFormat](outputpixelformat.md): The pixel format type of the output value.

# computationAccuracy (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The level of accuracy to compute the optical flow.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) VNTrackOpticalFlowRequestComputationAccuracy computationAccuracy;
```

<a id="Discussion"></a>

## Discussion

The computational time trends with accuracy level. The default value is [VNTrackOpticalFlowRequestComputationAccuracyMedium](computationaccuracy-swift.enum/medium.md).

## See Also

### Configuring the Request

- [VNTrackOpticalFlowRequestComputationAccuracy](computationaccuracy-swift.enum.md): Computational accuracy options.
- [keepNetworkOutput](keepnetworkoutput.md): A Boolean value that indicates the raw pixel buffer continues to emit from the network.
- [outputPixelFormat](outputpixelformat.md): The pixel format type of the output value.
