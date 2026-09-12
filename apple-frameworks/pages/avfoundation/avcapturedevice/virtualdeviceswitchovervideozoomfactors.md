> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/virtualdeviceswitchovervideozoomfactors](https://developer.apple.com/documentation/avfoundation/avcapturedevice/virtualdeviceswitchovervideozoomfactors)

# virtualDeviceSwitchOverVideoZoomFactors (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

An array of video zoom factors at or above which a virtual device, such as the dual camera, may switch to its next constituent device.

## Declaration

```swift
var virtualDeviceSwitchOverVideoZoomFactors: [NSNumber] { get }
```

<a id="Discussion"></a>

## Discussion

This property contains zoom factors at which the field of view of one constituent device matches the full field of view of the next constituent device. The number of switched-over video zoom factors is always one fewer than the count of the [constituentDevices](constituentdevices.md) property. These factors progress in the same order as the devices listed in that property.

The value of this property is an empty array for nonvirtual devices.

## See Also

### Inspecting zoom factors

- [minAvailableVideoZoomFactor](minavailablevideozoomfactor.md): The minimum zoom factor allowed in the current capture configuration.
- [maxAvailableVideoZoomFactor](maxavailablevideozoomfactor.md): The maximum zoom factor allowed in the current capture configuration.
- [dualCameraSwitchOverVideoZoomFactor](dualcameraswitchovervideozoomfactor.md): Deprecated. The video zoom factor at which a dual camera device can automatically switch between cameras.
- [displayVideoZoomFactorMultiplier](displayvideozoomfactormultiplier.md): A video zoom factor multiplier to use when displaying zoom information in a user interface.

# virtualDeviceSwitchOverVideoZoomFactors (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

An array of video zoom factors at or above which a virtual device, such as the dual camera, may switch to its next constituent device.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSNumber *> * virtualDeviceSwitchOverVideoZoomFactors;
```

<a id="Discussion"></a>

## Discussion

This property contains zoom factors at which the field of view of one constituent device matches the full field of view of the next constituent device. The number of switched-over video zoom factors is always one fewer than the count of the [constituentDevices](constituentdevices.md) property. These factors progress in the same order as the devices listed in that property.

The value of this property is an empty array for nonvirtual devices.

## See Also

### Inspecting zoom factors

- [minAvailableVideoZoomFactor](minavailablevideozoomfactor.md): The minimum zoom factor allowed in the current capture configuration.
- [maxAvailableVideoZoomFactor](maxavailablevideozoomfactor.md): The maximum zoom factor allowed in the current capture configuration.
- [dualCameraSwitchOverVideoZoomFactor](dualcameraswitchovervideozoomfactor.md): Deprecated. The video zoom factor at which a dual camera device can automatically switch between cameras.
- [displayVideoZoomFactorMultiplier](displayvideozoomfactormultiplier.md): A video zoom factor multiplier to use when displaying zoom information in a user interface.
