> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vngenerateopticalflowrequest/computationaccuracy-swift.property](https://developer.apple.com/documentation/vision/vngenerateopticalflowrequest/computationaccuracy-swift.property)

# computationAccuracy (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The accuracy level for computing optical flow.

## Declaration

```swift
var computationAccuracy: VNGenerateOpticalFlowRequest.ComputationAccuracy { get set }
```

## See Also

### Configuring the Request

- [VNGenerateOpticalFlowRequest.ComputationAccuracy](computationaccuracy-swift.enum.md): The supported optical flow accuracy levels.
- [outputPixelFormat](outputpixelformat.md): The output buffer’s pixel format.
- [keepNetworkOutput](keepnetworkoutput.md): A Boolean value that indicates whether to keep the raw pixel buffer coming from the machine learning network.

# computationAccuracy (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The accuracy level for computing optical flow.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) VNGenerateOpticalFlowRequestComputationAccuracy computationAccuracy;
```

## See Also

### Configuring the Request

- [VNGenerateOpticalFlowRequestComputationAccuracy](computationaccuracy-swift.enum.md): The supported optical flow accuracy levels.
- [outputPixelFormat](outputpixelformat.md): The output buffer’s pixel format.
- [keepNetworkOutput](keepnetworkoutput.md): A Boolean value that indicates whether to keep the raw pixel buffer coming from the machine learning network.
