> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotooutput/isfastcaptureprioritizationsupported](https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/isfastcaptureprioritizationsupported)

# isFastCapturePrioritizationSupported (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

A Boolean value that indicates whether the photo output supports fast capture prioritization.

## Declaration

```swift
var isFastCapturePrioritizationSupported: Bool { get set }
```

## See Also

### Managing responsive capture

- [captureReadiness](capturereadiness-swift.property.md): A value that specifies whether the photo output is ready to respond to new capture requests in a timely manner.
- [AVCapturePhotoOutput.CaptureReadiness](capturereadiness-swift.enum.md): Constants that indicate whether the output is ready to receive capture requests.
- [isAutoDeferredPhotoDeliveryEnabled](isautodeferredphotodeliveryenabled.md): A Boolean value that indicates the enabled state of automatic deferred photo delivery.
- [isAutoDeferredPhotoDeliverySupported](isautodeferredphotodeliverysupported.md): A Boolean value that indicates whether the photo output supports deferred photo delivery.
- [isFastCapturePrioritizationEnabled](isfastcaptureprioritizationenabled.md): A Boolean value that indicates whether the output enables fast capture prioritization.
- [isResponsiveCaptureSupported](isresponsivecapturesupported.md): A Boolean value that indicates whether the photo output supports responsive capture.
- [isResponsiveCaptureEnabled](isresponsivecaptureenabled.md): A Boolean value that indicates whether the photo output configuration enables responsive capture.
- [isZeroShutterLagSupported](iszeroshutterlagsupported.md): A Boolean value that indicates whether the photo output supports zero shutter lag.
- [isZeroShutterLagEnabled](iszeroshutterlagenabled.md): A Boolean value that indicates whether the photo output configuration enables zero shutter lag.

# fastCapturePrioritizationSupported (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

A Boolean value that indicates whether the photo output supports fast capture prioritization.

## Declaration

```objectivec
@property (nonatomic, getter=isFastCapturePrioritizationSupported) BOOL fastCapturePrioritizationSupported;
```

## See Also

### Managing responsive capture

- [captureReadiness](capturereadiness-swift.property.md): A value that specifies whether the photo output is ready to respond to new capture requests in a timely manner.
- [AVCapturePhotoOutputCaptureReadiness](capturereadiness-swift.enum.md): Constants that indicate whether the output is ready to receive capture requests.
- [autoDeferredPhotoDeliveryEnabled](isautodeferredphotodeliveryenabled.md): A Boolean value that indicates the enabled state of automatic deferred photo delivery.
- [autoDeferredPhotoDeliverySupported](isautodeferredphotodeliverysupported.md): A Boolean value that indicates whether the photo output supports deferred photo delivery.
- [fastCapturePrioritizationEnabled](isfastcaptureprioritizationenabled.md): A Boolean value that indicates whether the output enables fast capture prioritization.
- [responsiveCaptureSupported](isresponsivecapturesupported.md): A Boolean value that indicates whether the photo output supports responsive capture.
- [responsiveCaptureEnabled](isresponsivecaptureenabled.md): A Boolean value that indicates whether the photo output configuration enables responsive capture.
- [zeroShutterLagSupported](iszeroshutterlagsupported.md): A Boolean value that indicates whether the photo output supports zero shutter lag.
- [zeroShutterLagEnabled](iszeroshutterlagenabled.md): A Boolean value that indicates whether the photo output configuration enables zero shutter lag.
