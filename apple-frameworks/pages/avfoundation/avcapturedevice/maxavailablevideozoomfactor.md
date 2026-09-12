> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/maxavailablevideozoomfactor](https://developer.apple.com/documentation/avfoundation/avcapturedevice/maxavailablevideozoomfactor)

# maxAvailableVideoZoomFactor (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The maximum zoom factor allowed in the current capture configuration.

## Declaration

```swift
var maxAvailableVideoZoomFactor: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

On single-camera devices, this value is always equal to the device format’s [videoMaxZoomFactor](format/videomaxzoomfactor.md) value. On a dual-camera device, the allowed range of video zoom factors can change if the device is delivering depth data to one or more capture outputs.

Setting the [videoZoomFactor](videozoomfactor.md) property to (or calling the [ramp(toVideoZoomFactor:withRate:)](ramp%28tovideozoomfactor_withrate_%29.md) method with) a value greater than the device format’s [videoMaxZoomFactor](format/videomaxzoomfactor.md) value always raises an exception. Setting the video zoom factor to a value between the maximum available zoom factor and the device format’s maximum clamps the zoom setting to the maximum available value.

This property is key-value observable.

## See Also

### Inspecting zoom factors

- [minAvailableVideoZoomFactor](minavailablevideozoomfactor.md): The minimum zoom factor allowed in the current capture configuration.
- [virtualDeviceSwitchOverVideoZoomFactors](virtualdeviceswitchovervideozoomfactors.md): An array of video zoom factors at or above which a virtual device, such as the dual camera, may switch to its next constituent device.
- [dualCameraSwitchOverVideoZoomFactor](dualcameraswitchovervideozoomfactor.md): Deprecated. The video zoom factor at which a dual camera device can automatically switch between cameras.
- [displayVideoZoomFactorMultiplier](displayvideozoomfactormultiplier.md): A video zoom factor multiplier to use when displaying zoom information in a user interface.

# maxAvailableVideoZoomFactor (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The maximum zoom factor allowed in the current capture configuration.

## Declaration

```objectivec
@property (nonatomic, readonly) CGFloat maxAvailableVideoZoomFactor;
```

<a id="Discussion"></a>

## Discussion

On single-camera devices, this value is always equal to the device format’s [videoMaxZoomFactor](format/videomaxzoomfactor.md) value. On a dual-camera device, the allowed range of video zoom factors can change if the device is delivering depth data to one or more capture outputs.

Setting the [videoZoomFactor](videozoomfactor.md) property to (or calling the [rampToVideoZoomFactor:withRate:](ramp%28tovideozoomfactor_withrate_%29.md) method with) a value greater than the device format’s [videoMaxZoomFactor](format/videomaxzoomfactor.md) value always raises an exception. Setting the video zoom factor to a value between the maximum available zoom factor and the device format’s maximum clamps the zoom setting to the maximum available value.

This property is key-value observable.

## See Also

### Inspecting zoom factors

- [minAvailableVideoZoomFactor](minavailablevideozoomfactor.md): The minimum zoom factor allowed in the current capture configuration.
- [virtualDeviceSwitchOverVideoZoomFactors](virtualdeviceswitchovervideozoomfactors.md): An array of video zoom factors at or above which a virtual device, such as the dual camera, may switch to its next constituent device.
- [dualCameraSwitchOverVideoZoomFactor](dualcameraswitchovervideozoomfactor.md): Deprecated. The video zoom factor at which a dual camera device can automatically switch between cameras.
- [displayVideoZoomFactorMultiplier](displayvideozoomfactormultiplier.md): A video zoom factor multiplier to use when displaying zoom information in a user interface.
