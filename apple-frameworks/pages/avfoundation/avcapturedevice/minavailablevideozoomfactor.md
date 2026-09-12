> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/minavailablevideozoomfactor](https://developer.apple.com/documentation/avfoundation/avcapturedevice/minavailablevideozoomfactor)

# minAvailableVideoZoomFactor (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The minimum zoom factor allowed in the current capture configuration.

## Declaration

```swift
var minAvailableVideoZoomFactor: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

On single-camera devices, this value is always `1.0`. On a dual-camera device, the allowed range of video zoom factors can change if the device is delivering depth data to one or more capture outputs.

Setting the [videoZoomFactor](videozoomfactor.md) property to (or calling the [ramp(toVideoZoomFactor:withRate:)](ramp%28tovideozoomfactor_withrate_%29.md) method with) a value less than `1.0` always raises an exception. Setting the video zoom factor to a value between `1.0` and the minimum available zoom factor clamps the zoom setting to the minimum.

This property is key-value observable.

## See Also

### Inspecting zoom factors

- [maxAvailableVideoZoomFactor](maxavailablevideozoomfactor.md): The maximum zoom factor allowed in the current capture configuration.
- [virtualDeviceSwitchOverVideoZoomFactors](virtualdeviceswitchovervideozoomfactors.md): An array of video zoom factors at or above which a virtual device, such as the dual camera, may switch to its next constituent device.
- [dualCameraSwitchOverVideoZoomFactor](dualcameraswitchovervideozoomfactor.md): Deprecated. The video zoom factor at which a dual camera device can automatically switch between cameras.
- [displayVideoZoomFactorMultiplier](displayvideozoomfactormultiplier.md): A video zoom factor multiplier to use when displaying zoom information in a user interface.

# minAvailableVideoZoomFactor (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The minimum zoom factor allowed in the current capture configuration.

## Declaration

```objectivec
@property (nonatomic, readonly) CGFloat minAvailableVideoZoomFactor;
```

<a id="Discussion"></a>

## Discussion

On single-camera devices, this value is always `1.0`. On a dual-camera device, the allowed range of video zoom factors can change if the device is delivering depth data to one or more capture outputs.

Setting the [videoZoomFactor](videozoomfactor.md) property to (or calling the [rampToVideoZoomFactor:withRate:](ramp%28tovideozoomfactor_withrate_%29.md) method with) a value less than `1.0` always raises an exception. Setting the video zoom factor to a value between `1.0` and the minimum available zoom factor clamps the zoom setting to the minimum.

This property is key-value observable.

## See Also

### Inspecting zoom factors

- [maxAvailableVideoZoomFactor](maxavailablevideozoomfactor.md): The maximum zoom factor allowed in the current capture configuration.
- [virtualDeviceSwitchOverVideoZoomFactors](virtualdeviceswitchovervideozoomfactors.md): An array of video zoom factors at or above which a virtual device, such as the dual camera, may switch to its next constituent device.
- [dualCameraSwitchOverVideoZoomFactor](dualcameraswitchovervideozoomfactor.md): Deprecated. The video zoom factor at which a dual camera device can automatically switch between cameras.
- [displayVideoZoomFactorMultiplier](displayvideozoomfactormultiplier.md): A video zoom factor multiplier to use when displaying zoom information in a user interface.
