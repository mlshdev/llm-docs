> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotooutput/iscamerasensororientationcompensationsupported](https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/iscamerasensororientationcompensationsupported)

# isCameraSensorOrientationCompensationSupported (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

## Declaration

```swift
var isCameraSensorOrientationCompensationSupported: Bool { get }
```

<a id="discussion"></a>

## Discussion

A read-only BOOL value indicating whether still image buffers may be rotated to match the sensor orientation of earlier generation hardware.

Value is YES for camera configurations which support compensation for the sensor orientation, which is applied to HEIC, JPEG, and uncompressed processed photos only; compensation is never applied to Bayer RAW or Apple ProRaw captures.

## See Also

### Configuring orientation compensation

- [isCameraSensorOrientationCompensationEnabled](iscamerasensororientationcompensationenabled.md)

# cameraSensorOrientationCompensationSupported (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isCameraSensorOrientationCompensationSupported) BOOL cameraSensorOrientationCompensationSupported;
```

<a id="discussion"></a>

## Discussion

A read-only BOOL value indicating whether still image buffers may be rotated to match the sensor orientation of earlier generation hardware.

Value is YES for camera configurations which support compensation for the sensor orientation, which is applied to HEIC, JPEG, and uncompressed processed photos only; compensation is never applied to Bayer RAW or Apple ProRaw captures.

## See Also

### Configuring orientation compensation

- [cameraSensorOrientationCompensationEnabled](iscamerasensororientationcompensationenabled.md)
