> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/devicetype-swift.struct/builtindualcamera](https://developer.apple.com/documentation/avfoundation/avcapturedevice/devicetype-swift.struct/builtindualcamera)

# builtInDualCamera (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 10.2+ · iPadOS 10.2+ · Mac Catalyst 14.0+ · tvOS 17.0+

A built-in camera device type that consists of a wide-angle and telephoto camera.

## Declaration

```swift
static let builtInDualCamera: AVCaptureDevice.DeviceType
```

## Mentioned In

- [Capturing photos with depth](../../capturing-photos-with-depth.md)

<a id="Discussion"></a>

## Discussion

This device type supports the following features:

- Automatic switching from one camera to the other when the zoom factor, light level, and focus position allow.
- Higher-quality zoom for still captures by fusing images from both cameras.
- Depth data delivery by measuring the disparity of matched features between the wide and telephoto cameras.
- Delivery of photos from constituent devices (wide and telephoto cameras) from a single photo capture request.

It doesn’t support the features below:

- Setting a [AVCaptureDevice.ExposureMode.custom](../exposuremode-swift.enum/custom.md) exposure mode or manual exposure bracketing.
- Locking focus with a lens position to a value other than [currentLensPosition](../currentlensposition.md).
- Locking automatic white balance with device white balance gains other than [currentWhiteBalanceGains](../currentwhitebalancegains.md).

Even when locked, exposure duration, ISO, aperture, white balance gains, or lens position may change when the device switches from one camera to the other. The overall exposure, white balance, and focus position however should be consistent.

You can only retrieve devices of this type using an [AVCaptureDevice.DiscoverySession](../discoverysession.md) or by calling [default(\_:for:position:)](../default%28__for_position_%29.md).

## See Also

### Cameras

- [builtInWideAngleCamera](builtinwideanglecamera.md): A built-in wide-angle camera device type.
- [builtInUltraWideCamera](builtinultrawidecamera.md): A built-in camera device type with a shorter focal length than a wide-angle camera.
- [builtInTelephotoCamera](builtintelephotocamera.md): A built-in camera device type with a longer focal length than a wide-angle camera.
- [builtInDualWideCamera](builtindualwidecamera.md): A built-in camera device type that consists of two cameras of fixed focal length, one ultrawide angle and one wide angle.
- [builtInTripleCamera](builtintriplecamera.md): A built-in camera device type that consists of three cameras of fixed focal length, one ultrawide angle, one wide angle, and one telephoto.
- [continuityCamera](continuitycamera.md): A Continuity Camera device type.
- [builtInDuoCamera](builtinduocamera.md): Deprecated. A built-in dual camera device type.

# AVCaptureDeviceTypeBuiltInDualCamera (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 10.2+ · iPadOS 10.2+ · Mac Catalyst 14.0+ · tvOS 17.0+

A built-in camera device type that consists of a wide-angle and telephoto camera.

## Declaration

```objectivec
extern AVCaptureDeviceType const AVCaptureDeviceTypeBuiltInDualCamera;
```

## Mentioned In

- [Capturing photos with depth](../../capturing-photos-with-depth.md)

<a id="Discussion"></a>

## Discussion

This device type supports the following features:

- Automatic switching from one camera to the other when the zoom factor, light level, and focus position allow.
- Higher-quality zoom for still captures by fusing images from both cameras.
- Depth data delivery by measuring the disparity of matched features between the wide and telephoto cameras.
- Delivery of photos from constituent devices (wide and telephoto cameras) from a single photo capture request.

It doesn’t support the features below:

- Setting a [AVCaptureExposureModeCustom](../exposuremode-swift.enum/custom.md) exposure mode or manual exposure bracketing.
- Locking focus with a lens position to a value other than [AVCaptureLensPositionCurrent](../currentlensposition.md).
- Locking automatic white balance with device white balance gains other than [AVCaptureWhiteBalanceGainsCurrent](../currentwhitebalancegains.md).

Even when locked, exposure duration, ISO, aperture, white balance gains, or lens position may change when the device switches from one camera to the other. The overall exposure, white balance, and focus position however should be consistent.

You can only retrieve devices of this type using an [AVCaptureDeviceDiscoverySession](../discoverysession.md) or by calling [defaultDeviceWithDeviceType:mediaType:position:](../default%28__for_position_%29.md).

## See Also

### Cameras

- [AVCaptureDeviceTypeBuiltInWideAngleCamera](builtinwideanglecamera.md): A built-in wide-angle camera device type.
- [AVCaptureDeviceTypeBuiltInUltraWideCamera](builtinultrawidecamera.md): A built-in camera device type with a shorter focal length than a wide-angle camera.
- [AVCaptureDeviceTypeBuiltInTelephotoCamera](builtintelephotocamera.md): A built-in camera device type with a longer focal length than a wide-angle camera.
- [AVCaptureDeviceTypeBuiltInDualWideCamera](builtindualwidecamera.md): A built-in camera device type that consists of two cameras of fixed focal length, one ultrawide angle and one wide angle.
- [AVCaptureDeviceTypeBuiltInTripleCamera](builtintriplecamera.md): A built-in camera device type that consists of three cameras of fixed focal length, one ultrawide angle, one wide angle, and one telephoto.
- [AVCaptureDeviceTypeContinuityCamera](continuitycamera.md): A Continuity Camera device type.
- [AVCaptureDeviceTypeBuiltInDuoCamera](builtinduocamera.md): Deprecated. A built-in dual camera device type.
