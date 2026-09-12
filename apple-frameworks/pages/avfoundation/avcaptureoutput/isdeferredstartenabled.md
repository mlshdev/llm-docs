> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureoutput/isdeferredstartenabled](https://developer.apple.com/documentation/avfoundation/avcaptureoutput/isdeferredstartenabled)

# isDeferredStartEnabled (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

A Boolean value that indicates whether to defer starting this capture output.

## Declaration

```swift
var isDeferredStartEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When this value is `true`, the session doesn’t prepare the output’s resources until some time after [startRunning()](../avcapturesession/startrunning%28%29.md) returns. You can start the visual parts of your user interface prior to other parts, such as photo or movie capture, metadata output, and so on, to improve startup performance. Set this value to `false` for outputs that your app needs for startup, and `true` for the ones that it doesn’t need to start immediately. For example, an [AVCaptureVideoDataOutput](../avcapturevideodataoutput.md) that you intend to use for displaying preview should set this value to `false`, so that the frames are available as soon as possible.

For apps that are linked on or after iOS 26, this property value is `true` for [AVCapturePhotoOutput](../avcapturephotooutput.md) and [AVCaptureFileOutput](../avcapturefileoutput.md) subclasses if supported, and `false` otherwise. When set to `true` for [AVCapturePhotoOutput](../avcapturephotooutput.md), if you want to support multiple capture requests before running deferred start, set [isResponsiveCaptureEnabled](../avcapturephotooutput/isresponsivecaptureenabled.md) to `true` on that output.

If [isDeferredStartSupported](isdeferredstartsupported.md) is `false`, setting this property value to `true` results in the system throwing an invalid argument exception.

> **Note**

> Set this value before committing the configuration.

## See Also

### Managing deferred start

- [isDeferredStartSupported](isdeferredstartsupported.md): A `BOOL` value that indicates whether the output supports deferred start.

# deferredStartEnabled (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

A Boolean value that indicates whether to defer starting this capture output.

## Declaration

```objectivec
@property (nonatomic, getter=isDeferredStartEnabled) BOOL deferredStartEnabled;
```

<a id="Discussion"></a>

## Discussion

When this value is `true`, the session doesn’t prepare the output’s resources until some time after [startRunning](../avcapturesession/startrunning%28%29.md) returns. You can start the visual parts of your user interface prior to other parts, such as photo or movie capture, metadata output, and so on, to improve startup performance. Set this value to `false` for outputs that your app needs for startup, and `true` for the ones that it doesn’t need to start immediately. For example, an [AVCaptureVideoDataOutput](../avcapturevideodataoutput.md) that you intend to use for displaying preview should set this value to `false`, so that the frames are available as soon as possible.

For apps that are linked on or after iOS 26, this property value is `true` for [AVCapturePhotoOutput](../avcapturephotooutput.md) and [AVCaptureFileOutput](../avcapturefileoutput.md) subclasses if supported, and `false` otherwise. When set to `true` for [AVCapturePhotoOutput](../avcapturephotooutput.md), if you want to support multiple capture requests before running deferred start, set [responsiveCaptureEnabled](../avcapturephotooutput/isresponsivecaptureenabled.md) to `true` on that output.

If [deferredStartSupported](isdeferredstartsupported.md) is `false`, setting this property value to `true` results in the system throwing an invalid argument exception.

> **Note**

> Set this value before committing the configuration.

## See Also

### Managing deferred start

- [deferredStartSupported](isdeferredstartsupported.md): A `BOOL` value that indicates whether the output supports deferred start.
