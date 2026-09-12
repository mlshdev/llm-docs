> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotooutput/isresponsivecaptureenabled](https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/isresponsivecaptureenabled)

# isResponsiveCaptureEnabled (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

A Boolean value that indicates whether the photo output configuration enables responsive capture.

## Declaration

```swift
var isResponsiveCaptureEnabled: Bool { get set }
```

## See Also

### Managing responsive capture

- [captureReadiness](capturereadiness-swift.property.md): A value that specifies whether the photo output is ready to respond to new capture requests in a timely manner.
- [AVCapturePhotoOutput.CaptureReadiness](capturereadiness-swift.enum.md): Constants that indicate whether the output is ready to receive capture requests.
- [isAutoDeferredPhotoDeliveryEnabled](isautodeferredphotodeliveryenabled.md): A Boolean value that indicates the enabled state of automatic deferred photo delivery.
- [isAutoDeferredPhotoDeliverySupported](isautodeferredphotodeliverysupported.md): A Boolean value that indicates whether the photo output supports deferred photo delivery.
- [isFastCapturePrioritizationSupported](isfastcaptureprioritizationsupported.md): A Boolean value that indicates whether the photo output supports fast capture prioritization.
- [isFastCapturePrioritizationEnabled](isfastcaptureprioritizationenabled.md): A Boolean value that indicates whether the output enables fast capture prioritization.
- [isResponsiveCaptureSupported](isresponsivecapturesupported.md): A Boolean value that indicates whether the photo output supports responsive capture.
- [isZeroShutterLagSupported](iszeroshutterlagsupported.md): A Boolean value that indicates whether the photo output supports zero shutter lag.
- [isZeroShutterLagEnabled](iszeroshutterlagenabled.md): A Boolean value that indicates whether the photo output configuration enables zero shutter lag.

# responsiveCaptureEnabled (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

A Boolean value that indicates whether the photo output configuration enables responsive capture.

## Declaration

```objectivec
@property (nonatomic, getter=isResponsiveCaptureEnabled) BOOL responsiveCaptureEnabled;
```

## See Also

### Managing responsive capture

- [captureReadiness](capturereadiness-swift.property.md): A value that specifies whether the photo output is ready to respond to new capture requests in a timely manner.
- [AVCapturePhotoOutputCaptureReadiness](capturereadiness-swift.enum.md): Constants that indicate whether the output is ready to receive capture requests.
- [autoDeferredPhotoDeliveryEnabled](isautodeferredphotodeliveryenabled.md): A Boolean value that indicates the enabled state of automatic deferred photo delivery.
- [autoDeferredPhotoDeliverySupported](isautodeferredphotodeliverysupported.md): A Boolean value that indicates whether the photo output supports deferred photo delivery.
- [fastCapturePrioritizationSupported](isfastcaptureprioritizationsupported.md): A Boolean value that indicates whether the photo output supports fast capture prioritization.
- [fastCapturePrioritizationEnabled](isfastcaptureprioritizationenabled.md): A Boolean value that indicates whether the output enables fast capture prioritization.
- [responsiveCaptureSupported](isresponsivecapturesupported.md): A Boolean value that indicates whether the photo output supports responsive capture.
- [zeroShutterLagSupported](iszeroshutterlagsupported.md): A Boolean value that indicates whether the photo output supports zero shutter lag.
- [zeroShutterLagEnabled](iszeroshutterlagenabled.md): A Boolean value that indicates whether the photo output configuration enables zero shutter lag.
