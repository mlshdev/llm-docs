> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vntrackopticalflowrequest/keepnetworkoutput](https://developer.apple.com/documentation/vision/vntrackopticalflowrequest/keepnetworkoutput)

# keepNetworkOutput (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A Boolean value that indicates the raw pixel buffer continues to emit from the network.

## Declaration

```swift
var keepNetworkOutput: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false); otherwise, the request ignores [outputPixelFormat](outputpixelformat.md).

## See Also

### Configuring the Request

- [computationAccuracy](computationaccuracy-swift.property.md): The level of accuracy to compute the optical flow.
- [VNTrackOpticalFlowRequest.ComputationAccuracy](computationaccuracy-swift.enum.md): Computational accuracy options.
- [outputPixelFormat](outputpixelformat.md): The pixel format type of the output value.

# keepNetworkOutput (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A Boolean value that indicates the raw pixel buffer continues to emit from the network.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) BOOL keepNetworkOutput;
```

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false); otherwise, the request ignores [outputPixelFormat](outputpixelformat.md).

## See Also

### Configuring the Request

- [computationAccuracy](computationaccuracy-swift.property.md): The level of accuracy to compute the optical flow.
- [VNTrackOpticalFlowRequestComputationAccuracy](computationaccuracy-swift.enum.md): Computational accuracy options.
- [outputPixelFormat](outputpixelformat.md): The pixel format type of the output value.
