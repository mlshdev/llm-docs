> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/isautovideoframerateenabled](https://developer.apple.com/documentation/avfoundation/avcapturedevice/isautovideoframerateenabled)

# isAutoVideoFrameRateEnabled (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

A Boolean value that indicates whether the capture device performs automatic video frame rate adjustments.

## Declaration

```swift
var isAutoVideoFrameRateEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

You can enable this property on a device when its active format’s [isAutoVideoFrameRateSupported](format/isautovideoframeratesupported.md) property is [true](https://developer.apple.com/documentation/swift/true). When enabled, a capture device automatically adjusts the active frame rate based on light level. Under low light conditions, it decreases the frame rate to properly expose the scene. For formats with a maximum frame rate of 30 fps, the frame rate switches between 30-24. For formats with a maximum frame rate of 60 fps, the frame rate switches between 60-30-24.

> **Important**

>  After enabling automatic frame rate adjustments, attempting to set a device’s [activeVideoMinFrameDuration](activevideominframeduration.md) or [activeVideoMaxFrameDuration](activevideomaxframeduration.md) throws an exception.

Changing the device’s active format resets this property to its default value of [false](https://developer.apple.com/documentation/swift/false).

# autoVideoFrameRateEnabled (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

A Boolean value that indicates whether the capture device performs automatic video frame rate adjustments.

## Declaration

```objectivec
@property (nonatomic, getter=isAutoVideoFrameRateEnabled) BOOL autoVideoFrameRateEnabled;
```

<a id="Discussion"></a>

## Discussion

You can enable this property on a device when its active format’s [autoVideoFrameRateSupported](format/isautovideoframeratesupported.md) property is [true](https://developer.apple.com/documentation/swift/true). When enabled, a capture device automatically adjusts the active frame rate based on light level. Under low light conditions, it decreases the frame rate to properly expose the scene. For formats with a maximum frame rate of 30 fps, the frame rate switches between 30-24. For formats with a maximum frame rate of 60 fps, the frame rate switches between 60-30-24.

> **Important**

>  After enabling automatic frame rate adjustments, attempting to set a device’s [activeVideoMinFrameDuration](activevideominframeduration.md) or [activeVideoMaxFrameDuration](activevideomaxframeduration.md) throws an exception.

Changing the device’s active format resets this property to its default value of [false](https://developer.apple.com/documentation/swift/false).
