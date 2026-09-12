> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vntrackopticalflowrequest/outputpixelformat](https://developer.apple.com/documentation/vision/vntrackopticalflowrequest/outputpixelformat)

# outputPixelFormat (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The pixel format type of the output value.

## Declaration

```swift
var outputPixelFormat: OSType { get set }
```

<a id="Discussion"></a>

## Discussion

The valid values are [kCVPixelFormatType_TwoComponent32Float](../../corevideo/kcvpixelformattype_twocomponent32float.md) and [kCVPixelFormatType_TwoComponent16Half](../../corevideo/kcvpixelformattype_twocomponent16half.md). The default value is [kCVPixelFormatType_TwoComponent32Float](../../corevideo/kcvpixelformattype_twocomponent32float.md).

## See Also

### Configuring the Request

- [computationAccuracy](computationaccuracy-swift.property.md): The level of accuracy to compute the optical flow.
- [VNTrackOpticalFlowRequest.ComputationAccuracy](computationaccuracy-swift.enum.md): Computational accuracy options.
- [keepNetworkOutput](keepnetworkoutput.md): A Boolean value that indicates the raw pixel buffer continues to emit from the network.

# outputPixelFormat (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The pixel format type of the output value.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) OSType outputPixelFormat;
```

<a id="Discussion"></a>

## Discussion

The valid values are [kCVPixelFormatType_TwoComponent32Float](../../corevideo/kcvpixelformattype_twocomponent32float.md) and [kCVPixelFormatType_TwoComponent16Half](../../corevideo/kcvpixelformattype_twocomponent16half.md). The default value is [kCVPixelFormatType_TwoComponent32Float](../../corevideo/kcvpixelformattype_twocomponent32float.md).

## See Also

### Configuring the Request

- [computationAccuracy](computationaccuracy-swift.property.md): The level of accuracy to compute the optical flow.
- [VNTrackOpticalFlowRequestComputationAccuracy](computationaccuracy-swift.enum.md): Computational accuracy options.
- [keepNetworkOutput](keepnetworkoutput.md): A Boolean value that indicates the raw pixel buffer continues to emit from the network.
