> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/devicetype-swift.struct/builtindualwidecamera](https://developer.apple.com/documentation/avfoundation/avcapturedevice/devicetype-swift.struct/builtindualwidecamera)

# builtInDualWideCamera (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A built-in camera device type that consists of two cameras of fixed focal length, one ultrawide angle and one wide angle.

## Declaration

```swift
static let builtInDualWideCamera: AVCaptureDevice.DeviceType
```

<a id="Discussion"></a>

## Discussion

The built-in dual camera supports the following features:

- Automatic switching from one camera to another when zoom factor, light level, and focus position allow.
- Generating depth data by measuring the disparities between the images captured by the ultrawide and wide-angle cameras.
- Delivery of photos from constituent ultrawide and wide-angle devices through a single photo capture request.

The built-in dual camera doesn’t support the following features:

- [AVCaptureDevice.ExposureMode.custom](../exposuremode-swift.enum/custom.md) and manual exposure bracketing.
- Locking focus with a lens position other than [currentLensPosition](../currentlensposition.md).
- Locking automatic white balance with device white balance gains other than [currentWhiteBalanceGains](../currentwhitebalancegains.md).

Even when locked, exposure duration, ISO, aperture, white balance gains, or lens position may change when the device switches from one camera to another. However, the overall exposure, white balance, and focus position should be consistent.

> **Note**

>  You can only discover this device type using an [AVCaptureDevice.DiscoverySession](../discoverysession.md) or the [AVCaptureDevice](../../avcapturedevice.md) [default(\_:for:position:)](../default%28__for_position_%29.md) method.

## See Also

### Cameras

- [builtInWideAngleCamera](builtinwideanglecamera.md): A built-in wide-angle camera device type.
- [builtInUltraWideCamera](builtinultrawidecamera.md): A built-in camera device type with a shorter focal length than a wide-angle camera.
- [builtInTelephotoCamera](builtintelephotocamera.md): A built-in camera device type with a longer focal length than a wide-angle camera.
- [builtInDualCamera](builtindualcamera.md): A built-in camera device type that consists of a wide-angle and telephoto camera.
- [builtInTripleCamera](builtintriplecamera.md): A built-in camera device type that consists of three cameras of fixed focal length, one ultrawide angle, one wide angle, and one telephoto.
- [continuityCamera](continuitycamera.md): A Continuity Camera device type.
- [builtInDuoCamera](builtinduocamera.md): Deprecated. A built-in dual camera device type.

# AVCaptureDeviceTypeBuiltInDualWideCamera (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A built-in camera device type that consists of two cameras of fixed focal length, one ultrawide angle and one wide angle.

## Declaration

```objectivec
extern AVCaptureDeviceType const AVCaptureDeviceTypeBuiltInDualWideCamera;
```

<a id="Discussion"></a>

## Discussion

The built-in dual camera supports the following features:

- Automatic switching from one camera to another when zoom factor, light level, and focus position allow.
- Generating depth data by measuring the disparities between the images captured by the ultrawide and wide-angle cameras.
- Delivery of photos from constituent ultrawide and wide-angle devices through a single photo capture request.

The built-in dual camera doesn’t support the following features:

- [AVCaptureExposureModeCustom](../exposuremode-swift.enum/custom.md) and manual exposure bracketing.
- Locking focus with a lens position other than [AVCaptureLensPositionCurrent](../currentlensposition.md).
- Locking automatic white balance with device white balance gains other than [AVCaptureWhiteBalanceGainsCurrent](../currentwhitebalancegains.md).

Even when locked, exposure duration, ISO, aperture, white balance gains, or lens position may change when the device switches from one camera to another. However, the overall exposure, white balance, and focus position should be consistent.

> **Note**

>  You can only discover this device type using an [AVCaptureDeviceDiscoverySession](../discoverysession.md) or the [AVCaptureDevice](../../avcapturedevice.md) [defaultDeviceWithDeviceType:mediaType:position:](../default%28__for_position_%29.md) method.

## See Also

### Cameras

- [AVCaptureDeviceTypeBuiltInWideAngleCamera](builtinwideanglecamera.md): A built-in wide-angle camera device type.
- [AVCaptureDeviceTypeBuiltInUltraWideCamera](builtinultrawidecamera.md): A built-in camera device type with a shorter focal length than a wide-angle camera.
- [AVCaptureDeviceTypeBuiltInTelephotoCamera](builtintelephotocamera.md): A built-in camera device type with a longer focal length than a wide-angle camera.
- [AVCaptureDeviceTypeBuiltInDualCamera](builtindualcamera.md): A built-in camera device type that consists of a wide-angle and telephoto camera.
- [AVCaptureDeviceTypeBuiltInTripleCamera](builtintriplecamera.md): A built-in camera device type that consists of three cameras of fixed focal length, one ultrawide angle, one wide angle, and one telephoto.
- [AVCaptureDeviceTypeContinuityCamera](continuitycamera.md): A Continuity Camera device type.
- [AVCaptureDeviceTypeBuiltInDuoCamera](builtinduocamera.md): Deprecated. A built-in dual camera device type.
