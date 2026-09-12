> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotooutput/isstillimagestabilizationsupported](https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/isstillimagestabilizationsupported)

# isStillImageStabilizationSupported (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 13.0) · iPadOS 10.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A Boolean value indicating whether the capture output currently supports automatic stabilization for still image capture.

## Declaration

```swift
var isStillImageStabilizationSupported: Bool { get }
```

<a id="Discussion"></a>

## Discussion

To capture a photo with image stabilization, set the [isAutoStillImageStabilizationEnabled](../avcapturephotosettings/isautostillimagestabilizationenabled.md) property of your photo settings object. Automatic stabilization always includes digital image stabilization, and may also include optical lens stabilization, based on the current device. If a device does not support still image stabilization, set the [isAutoStillImageStabilizationEnabled](../avcapturephotosettings/isautostillimagestabilizationenabled.md) property has no effect (that is, the resolved [isStillImageStabilizationEnabled](../avcaptureresolvedphotosettings/isstillimagestabilizationenabled.md) setting will always be [false](https://developer.apple.com/documentation/swift/false)).

> **Note**

>  This property’s value can change if the [sessionPreset](../avcapturesession/sessionpreset.md) property of the current capture session or the [activeFormat](../avcapturedevice/activeformat.md) property of the underlying capture device changes.

This property supports key-value observing.

# stillImageStabilizationSupported (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 13.0) · iPadOS 10.0+ (deprecated in 13.0) · Mac Catalyst 14.0+ (deprecated in 13.1)

A Boolean value indicating whether the capture output currently supports automatic stabilization for still image capture.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isStillImageStabilizationSupported) BOOL stillImageStabilizationSupported;
```

<a id="Discussion"></a>

## Discussion

To capture a photo with image stabilization, set the [autoStillImageStabilizationEnabled](../avcapturephotosettings/isautostillimagestabilizationenabled.md) property of your photo settings object. Automatic stabilization always includes digital image stabilization, and may also include optical lens stabilization, based on the current device. If a device does not support still image stabilization, set the [autoStillImageStabilizationEnabled](../avcapturephotosettings/isautostillimagestabilizationenabled.md) property has no effect (that is, the resolved [stillImageStabilizationEnabled](../avcaptureresolvedphotosettings/isstillimagestabilizationenabled.md) setting will always be [false](https://developer.apple.com/documentation/swift/false)).

> **Note**

>  This property’s value can change if the [sessionPreset](../avcapturesession/sessionpreset.md) property of the current capture session or the [activeFormat](../avcapturedevice/activeformat.md) property of the underlying capture device changes.

This property supports key-value observing.
