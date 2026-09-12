> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotooutput/isautodeferredphotodeliveryenabled](https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/isautodeferredphotodeliveryenabled)

# isAutoDeferredPhotoDeliveryEnabled (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

A Boolean value that indicates the enabled state of automatic deferred photo delivery.

## Declaration

```swift
var isAutoDeferredPhotoDeliveryEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Changing this value requires a lengthy reconfiguration of the capture pipeline, so you should set this property before calling [startRunning()](../avcapturesession/startrunning%28%29.md) on the capture session.

Setting this property to [true](https://developer.apple.com/documentation/swift/true) throws an invalid argument exception the value of [isAutoDeferredPhotoDeliverySupported](isautodeferredphotodeliverysupported.md) is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing responsive capture

- [captureReadiness](capturereadiness-swift.property.md): A value that specifies whether the photo output is ready to respond to new capture requests in a timely manner.
- [AVCapturePhotoOutput.CaptureReadiness](capturereadiness-swift.enum.md): Constants that indicate whether the output is ready to receive capture requests.
- [isAutoDeferredPhotoDeliverySupported](isautodeferredphotodeliverysupported.md): A Boolean value that indicates whether the photo output supports deferred photo delivery.
- [isFastCapturePrioritizationSupported](isfastcaptureprioritizationsupported.md): A Boolean value that indicates whether the photo output supports fast capture prioritization.
- [isFastCapturePrioritizationEnabled](isfastcaptureprioritizationenabled.md): A Boolean value that indicates whether the output enables fast capture prioritization.
- [isResponsiveCaptureSupported](isresponsivecapturesupported.md): A Boolean value that indicates whether the photo output supports responsive capture.
- [isResponsiveCaptureEnabled](isresponsivecaptureenabled.md): A Boolean value that indicates whether the photo output configuration enables responsive capture.
- [isZeroShutterLagSupported](iszeroshutterlagsupported.md): A Boolean value that indicates whether the photo output supports zero shutter lag.
- [isZeroShutterLagEnabled](iszeroshutterlagenabled.md): A Boolean value that indicates whether the photo output configuration enables zero shutter lag.

# autoDeferredPhotoDeliveryEnabled (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+

A Boolean value that indicates the enabled state of automatic deferred photo delivery.

## Declaration

```objectivec
@property (nonatomic, getter=isAutoDeferredPhotoDeliveryEnabled) BOOL autoDeferredPhotoDeliveryEnabled;
```

<a id="Discussion"></a>

## Discussion

Changing this value requires a lengthy reconfiguration of the capture pipeline, so you should set this property before calling [startRunning](../avcapturesession/startrunning%28%29.md) on the capture session.

Setting this property to [true](https://developer.apple.com/documentation/swift/true) throws an invalid argument exception the value of [autoDeferredPhotoDeliverySupported](isautodeferredphotodeliverysupported.md) is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing responsive capture

- [captureReadiness](capturereadiness-swift.property.md): A value that specifies whether the photo output is ready to respond to new capture requests in a timely manner.
- [AVCapturePhotoOutputCaptureReadiness](capturereadiness-swift.enum.md): Constants that indicate whether the output is ready to receive capture requests.
- [autoDeferredPhotoDeliverySupported](isautodeferredphotodeliverysupported.md): A Boolean value that indicates whether the photo output supports deferred photo delivery.
- [fastCapturePrioritizationSupported](isfastcaptureprioritizationsupported.md): A Boolean value that indicates whether the photo output supports fast capture prioritization.
- [fastCapturePrioritizationEnabled](isfastcaptureprioritizationenabled.md): A Boolean value that indicates whether the output enables fast capture prioritization.
- [responsiveCaptureSupported](isresponsivecapturesupported.md): A Boolean value that indicates whether the photo output supports responsive capture.
- [responsiveCaptureEnabled](isresponsivecaptureenabled.md): A Boolean value that indicates whether the photo output configuration enables responsive capture.
- [zeroShutterLagSupported](iszeroshutterlagsupported.md): A Boolean value that indicates whether the photo output supports zero shutter lag.
- [zeroShutterLagEnabled](iszeroshutterlagenabled.md): A Boolean value that indicates whether the photo output configuration enables zero shutter lag.
