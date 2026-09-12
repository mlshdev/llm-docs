> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vngenerateopticalflowrequest/outputpixelformat](https://developer.apple.com/documentation/vision/vngenerateopticalflowrequest/outputpixelformat)

# outputPixelFormat (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The output buffer’s pixel format.

## Declaration

```swift
var outputPixelFormat: OSType { get set }
```

## See Also

### Configuring the Request

- [computationAccuracy](computationaccuracy-swift.property.md): The accuracy level for computing optical flow.
- [VNGenerateOpticalFlowRequest.ComputationAccuracy](computationaccuracy-swift.enum.md): The supported optical flow accuracy levels.
- [keepNetworkOutput](keepnetworkoutput.md): A Boolean value that indicates whether to keep the raw pixel buffer coming from the machine learning network.

# outputPixelFormat (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The output buffer’s pixel format.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) OSType outputPixelFormat;
```

## See Also

### Configuring the Request

- [computationAccuracy](computationaccuracy-swift.property.md): The accuracy level for computing optical flow.
- [VNGenerateOpticalFlowRequestComputationAccuracy](computationaccuracy-swift.enum.md): The supported optical flow accuracy levels.
- [keepNetworkOutput](keepnetworkoutput.md): A Boolean value that indicates whether to keep the raw pixel buffer coming from the machine learning network.
