> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotooutput/capturereadiness-swift.enum](https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/capturereadiness-swift.enum)

# AVCapturePhotoOutput.CaptureReadiness (Swift)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Constants that indicate whether the output is ready to receive capture requests.

## Declaration

```swift
enum CaptureReadiness
```

## Topics

### Readiness states

- [AVCapturePhotoOutput.CaptureReadiness.sessionNotRunning](capturereadiness-swift.enum/sessionnotrunning.md): Indicates that the session isn’t running and the output isn’t ready to receive requests.
- [AVCapturePhotoOutput.CaptureReadiness.notReadyMomentarily](capturereadiness-swift.enum/notreadymomentarily.md): Indicates that the output isn’t ready to receive requests, but may be ready shortly.
- [AVCapturePhotoOutput.CaptureReadiness.notReadyWaitingForCapture](capturereadiness-swift.enum/notreadywaitingforcapture.md): Indicates that the output isn’t ready to receive requests for a longer duration because it’s busy capturing.
- [AVCapturePhotoOutput.CaptureReadiness.notReadyWaitingForProcessing](capturereadiness-swift.enum/notreadywaitingforprocessing.md): Indicates that the output isn’t ready to receive requests for a longer duration because it’s busy processing.
- [AVCapturePhotoOutput.CaptureReadiness.ready](capturereadiness-swift.enum/ready.md): Indicates that the output is ready to receive new requests.

### Initializers

- [init(rawValue:)](capturereadiness-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing responsive capture

- [captureReadiness](capturereadiness-swift.property.md): A value that specifies whether the photo output is ready to respond to new capture requests in a timely manner.
- [isAutoDeferredPhotoDeliveryEnabled](isautodeferredphotodeliveryenabled.md): A Boolean value that indicates the enabled state of automatic deferred photo delivery.
- [isAutoDeferredPhotoDeliverySupported](isautodeferredphotodeliverysupported.md): A Boolean value that indicates whether the photo output supports deferred photo delivery.
- [isFastCapturePrioritizationSupported](isfastcaptureprioritizationsupported.md): A Boolean value that indicates whether the photo output supports fast capture prioritization.
- [isFastCapturePrioritizationEnabled](isfastcaptureprioritizationenabled.md): A Boolean value that indicates whether the output enables fast capture prioritization.
- [isResponsiveCaptureSupported](isresponsivecapturesupported.md): A Boolean value that indicates whether the photo output supports responsive capture.
- [isResponsiveCaptureEnabled](isresponsivecaptureenabled.md): A Boolean value that indicates whether the photo output configuration enables responsive capture.
- [isZeroShutterLagSupported](iszeroshutterlagsupported.md): A Boolean value that indicates whether the photo output supports zero shutter lag.
- [isZeroShutterLagEnabled](iszeroshutterlagenabled.md): A Boolean value that indicates whether the photo output configuration enables zero shutter lag.

# AVCapturePhotoOutputCaptureReadiness (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Constants that indicate whether the output is ready to receive capture requests.

## Declaration

```objectivec
enum AVCapturePhotoOutputCaptureReadiness : NSInteger;
```

## Topics

### Readiness states

- [AVCapturePhotoOutputCaptureReadinessSessionNotRunning](capturereadiness-swift.enum/sessionnotrunning.md): Indicates that the session isn’t running and the output isn’t ready to receive requests.
- [AVCapturePhotoOutputCaptureReadinessNotReadyMomentarily](capturereadiness-swift.enum/notreadymomentarily.md): Indicates that the output isn’t ready to receive requests, but may be ready shortly.
- [AVCapturePhotoOutputCaptureReadinessNotReadyWaitingForCapture](capturereadiness-swift.enum/notreadywaitingforcapture.md): Indicates that the output isn’t ready to receive requests for a longer duration because it’s busy capturing.
- [AVCapturePhotoOutputCaptureReadinessNotReadyWaitingForProcessing](capturereadiness-swift.enum/notreadywaitingforprocessing.md): Indicates that the output isn’t ready to receive requests for a longer duration because it’s busy processing.
- [AVCapturePhotoOutputCaptureReadinessReady](capturereadiness-swift.enum/ready.md): Indicates that the output is ready to receive new requests.

## See Also

### Managing responsive capture

- [captureReadiness](capturereadiness-swift.property.md): A value that specifies whether the photo output is ready to respond to new capture requests in a timely manner.
- [autoDeferredPhotoDeliveryEnabled](isautodeferredphotodeliveryenabled.md): A Boolean value that indicates the enabled state of automatic deferred photo delivery.
- [autoDeferredPhotoDeliverySupported](isautodeferredphotodeliverysupported.md): A Boolean value that indicates whether the photo output supports deferred photo delivery.
- [fastCapturePrioritizationSupported](isfastcaptureprioritizationsupported.md): A Boolean value that indicates whether the photo output supports fast capture prioritization.
- [fastCapturePrioritizationEnabled](isfastcaptureprioritizationenabled.md): A Boolean value that indicates whether the output enables fast capture prioritization.
- [responsiveCaptureSupported](isresponsivecapturesupported.md): A Boolean value that indicates whether the photo output supports responsive capture.
- [responsiveCaptureEnabled](isresponsivecaptureenabled.md): A Boolean value that indicates whether the photo output configuration enables responsive capture.
- [zeroShutterLagSupported](iszeroshutterlagsupported.md): A Boolean value that indicates whether the photo output supports zero shutter lag.
- [zeroShutterLagEnabled](iszeroshutterlagenabled.md): A Boolean value that indicates whether the photo output configuration enables zero shutter lag.
