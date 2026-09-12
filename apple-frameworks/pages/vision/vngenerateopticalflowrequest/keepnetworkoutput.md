> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vngenerateopticalflowrequest/keepnetworkoutput](https://developer.apple.com/documentation/vision/vngenerateopticalflowrequest/keepnetworkoutput)

# keepNetworkOutput (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A Boolean value that indicates whether to keep the raw pixel buffer coming from the machine learning network.

## Declaration

```swift
var keepNetworkOutput: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default is [false](https://developer.apple.com/documentation/swift/false). When you set this to [true](https://developer.apple.com/documentation/swift/true), the system ignores [outputPixelFormat](outputpixelformat.md). Setting this for revision 1 has no effect because it’s not machine learning-based.

## See Also

### Configuring the Request

- [computationAccuracy](computationaccuracy-swift.property.md): The accuracy level for computing optical flow.
- [VNGenerateOpticalFlowRequest.ComputationAccuracy](computationaccuracy-swift.enum.md): The supported optical flow accuracy levels.
- [outputPixelFormat](outputpixelformat.md): The output buffer’s pixel format.

# keepNetworkOutput (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A Boolean value that indicates whether to keep the raw pixel buffer coming from the machine learning network.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) BOOL keepNetworkOutput;
```

<a id="Discussion"></a>

## Discussion

The default is [false](https://developer.apple.com/documentation/swift/false). When you set this to [true](https://developer.apple.com/documentation/swift/true), the system ignores [outputPixelFormat](outputpixelformat.md). Setting this for revision 1 has no effect because it’s not machine learning-based.

## See Also

### Configuring the Request

- [computationAccuracy](computationaccuracy-swift.property.md): The accuracy level for computing optical flow.
- [VNGenerateOpticalFlowRequestComputationAccuracy](computationaccuracy-swift.enum.md): The supported optical flow accuracy levels.
- [outputPixelFormat](outputpixelformat.md): The output buffer’s pixel format.
