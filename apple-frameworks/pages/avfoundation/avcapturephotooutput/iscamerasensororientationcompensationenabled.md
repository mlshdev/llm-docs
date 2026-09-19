> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/iscamerasensororientationcompensationenabled

# isCameraSensorOrientationCompensationEnabled (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

## Declaration

```swift
var isCameraSensorOrientationCompensationEnabled: Bool { get set }
```

<a id="discussion"></a>

## Discussion

A BOOL value indicating that still image buffers will be rotated to match the sensor orientation of earlier generation hardware.

Default is YES when cameraSensorOrientationCompensationSupported is YES. Set to NO if your app does not require sensor orientation compensation.

## See Also

### Configuring orientation compensation

- [isCameraSensorOrientationCompensationSupported](iscamerasensororientationcompensationsupported.md)

# cameraSensorOrientationCompensationEnabled (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

## Declaration

```objectivec
@property (nonatomic, getter=isCameraSensorOrientationCompensationEnabled) BOOL cameraSensorOrientationCompensationEnabled;
```

<a id="discussion"></a>

## Discussion

A BOOL value indicating that still image buffers will be rotated to match the sensor orientation of earlier generation hardware.

Default is YES when cameraSensorOrientationCompensationSupported is YES. Set to NO if your app does not require sensor orientation compensation.

## See Also

### Configuring orientation compensation

- [cameraSensorOrientationCompensationSupported](iscamerasensororientationcompensationsupported.md)
