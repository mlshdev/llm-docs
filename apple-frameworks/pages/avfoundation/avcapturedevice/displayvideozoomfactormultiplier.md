> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/displayvideozoomfactormultiplier](https://developer.apple.com/documentation/avfoundation/avcapturedevice/displayvideozoomfactormultiplier)

# displayVideoZoomFactorMultiplier (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 14.0+ · macOS 14.0+ · tvOS 17.0+

A video zoom factor multiplier to use when displaying zoom information in a user interface.

## Declaration

```swift
var displayVideoZoomFactorMultiplier: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

Some system user interfaces, like the macOS Video Effects Menu, display a video zoom factor value in a way most appropriate for visual presentation, which might differ from the [videoZoomFactor](videozoomfactor.md) property value.

Your app can key-value observe this property to update the display video zoom factor values in its user interface to stay consistent with Apple’s system UIs.

## See Also

### Inspecting zoom factors

- [minAvailableVideoZoomFactor](minavailablevideozoomfactor.md): The minimum zoom factor allowed in the current capture configuration.
- [maxAvailableVideoZoomFactor](maxavailablevideozoomfactor.md): The maximum zoom factor allowed in the current capture configuration.
- [virtualDeviceSwitchOverVideoZoomFactors](virtualdeviceswitchovervideozoomfactors.md): An array of video zoom factors at or above which a virtual device, such as the dual camera, may switch to its next constituent device.
- [dualCameraSwitchOverVideoZoomFactor](dualcameraswitchovervideozoomfactor.md): Deprecated. The video zoom factor at which a dual camera device can automatically switch between cameras.

# displayVideoZoomFactorMultiplier (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 14.0+ · macOS 14.0+ · tvOS 17.0+

A video zoom factor multiplier to use when displaying zoom information in a user interface.

## Declaration

```objectivec
@property (nonatomic, readonly) CGFloat displayVideoZoomFactorMultiplier;
```

<a id="Discussion"></a>

## Discussion

Some system user interfaces, like the macOS Video Effects Menu, display a video zoom factor value in a way most appropriate for visual presentation, which might differ from the [videoZoomFactor](videozoomfactor.md) property value.

Your app can key-value observe this property to update the display video zoom factor values in its user interface to stay consistent with Apple’s system UIs.

## See Also

### Inspecting zoom factors

- [minAvailableVideoZoomFactor](minavailablevideozoomfactor.md): The minimum zoom factor allowed in the current capture configuration.
- [maxAvailableVideoZoomFactor](maxavailablevideozoomfactor.md): The maximum zoom factor allowed in the current capture configuration.
- [virtualDeviceSwitchOverVideoZoomFactors](virtualdeviceswitchovervideozoomfactors.md): An array of video zoom factors at or above which a virtual device, such as the dual camera, may switch to its next constituent device.
- [dualCameraSwitchOverVideoZoomFactor](dualcameraswitchovervideozoomfactor.md): Deprecated. The video zoom factor at which a dual camera device can automatically switch between cameras.
