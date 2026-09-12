> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/dualcameraswitchovervideozoomfactor](https://developer.apple.com/documentation/avfoundation/avcapturedevice/dualcameraswitchovervideozoomfactor)

# dualCameraSwitchOverVideoZoomFactor (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 13.0) · iPadOS 11.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The video zoom factor at which a dual camera device can automatically switch between cameras.

> Use [virtualDeviceSwitchOverVideoZoomFactors](virtualdeviceswitchovervideozoomfactors.md) instead.

## Declaration

```swift
var dualCameraSwitchOverVideoZoomFactor: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

A dual camera device (see [builtInDualCamera](devicetype-swift.struct/builtindualcamera.md)) contains both wide-angle and telephoto cameras.

This property’s value is the zoom factor at which the zoomed field of view from the wide-angle camera matches the full field of view from the telephoto camera. When the [videoZoomFactor](videozoomfactor.md) setting meets or exceeds this value, the device can automatically chooses which camera provides output imagery (or automatically combine imagery from both to create final output) based on scene conditions. For zoom factors below this value, the device always uses imagery from the wide-angle camera.

On a single-camera device, this value is always `1.0`.

## See Also

### Inspecting zoom factors

- [minAvailableVideoZoomFactor](minavailablevideozoomfactor.md): The minimum zoom factor allowed in the current capture configuration.
- [maxAvailableVideoZoomFactor](maxavailablevideozoomfactor.md): The maximum zoom factor allowed in the current capture configuration.
- [virtualDeviceSwitchOverVideoZoomFactors](virtualdeviceswitchovervideozoomfactors.md): An array of video zoom factors at or above which a virtual device, such as the dual camera, may switch to its next constituent device.
- [displayVideoZoomFactorMultiplier](displayvideozoomfactormultiplier.md): A video zoom factor multiplier to use when displaying zoom information in a user interface.

# dualCameraSwitchOverVideoZoomFactor (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 13.0) · iPadOS 11.0+ (deprecated in 13.0) · Mac Catalyst 14.0+ (deprecated in 13.1)

The video zoom factor at which a dual camera device can automatically switch between cameras.

> Use [virtualDeviceSwitchOverVideoZoomFactors](virtualdeviceswitchovervideozoomfactors.md) instead.

## Declaration

```objectivec
@property (atomic, readonly) CGFloat dualCameraSwitchOverVideoZoomFactor;
```

<a id="Discussion"></a>

## Discussion

A dual camera device (see [AVCaptureDeviceTypeBuiltInDualCamera](devicetype-swift.struct/builtindualcamera.md)) contains both wide-angle and telephoto cameras.

This property’s value is the zoom factor at which the zoomed field of view from the wide-angle camera matches the full field of view from the telephoto camera. When the [videoZoomFactor](videozoomfactor.md) setting meets or exceeds this value, the device can automatically chooses which camera provides output imagery (or automatically combine imagery from both to create final output) based on scene conditions. For zoom factors below this value, the device always uses imagery from the wide-angle camera.

On a single-camera device, this value is always `1.0`.

## See Also

### Inspecting zoom factors

- [minAvailableVideoZoomFactor](minavailablevideozoomfactor.md): The minimum zoom factor allowed in the current capture configuration.
- [maxAvailableVideoZoomFactor](maxavailablevideozoomfactor.md): The maximum zoom factor allowed in the current capture configuration.
- [virtualDeviceSwitchOverVideoZoomFactors](virtualdeviceswitchovervideozoomfactors.md): An array of video zoom factors at or above which a virtual device, such as the dual camera, may switch to its next constituent device.
- [displayVideoZoomFactorMultiplier](displayvideozoomfactormultiplier.md): A video zoom factor multiplier to use when displaying zoom information in a user interface.
