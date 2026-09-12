> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotooutputreadinesscoordinator/capturereadiness](https://developer.apple.com/documentation/avfoundation/avcapturephotooutputreadinesscoordinator/capturereadiness)

# captureReadiness (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

A value that indicates whether the coordinator’s photo output is ready to respond to new capture requests in a timely manner.

## Declaration

```swift
var captureReadiness: AVCapturePhotoOutput.CaptureReadiness { get }
```

<a id="Discussion"></a>

## Discussion

The value incorporates the photo output’s [captureReadiness](../avcapturephotooutput/capturereadiness-swift.property.md) property value and any requests registered by calling the [startTrackingCaptureRequest(using:)](starttrackingcapturerequest%28using_%29.md) method. The system updates this value before calling the [readinessCoordinator(\_:captureReadinessDidChange:)](../avcapturephotooutputreadinesscoordinatordelegate/readinesscoordinator%28__capturereadinessdidchange_%29.md) method.

This property is key-value observable.

# captureReadiness (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

A value that indicates whether the coordinator’s photo output is ready to respond to new capture requests in a timely manner.

## Declaration

```objectivec
@property (nonatomic, readonly) AVCapturePhotoOutputCaptureReadiness captureReadiness;
```

<a id="Discussion"></a>

## Discussion

The value incorporates the photo output’s [captureReadiness](../avcapturephotooutput/capturereadiness-swift.property.md) property value and any requests registered by calling the [startTrackingCaptureRequestUsingPhotoSettings:](starttrackingcapturerequest%28using_%29.md) method. The system updates this value before calling the [readinessCoordinator:captureReadinessDidChange:](../avcapturephotooutputreadinesscoordinatordelegate/readinesscoordinator%28__capturereadinessdidchange_%29.md) method.

This property is key-value observable.
