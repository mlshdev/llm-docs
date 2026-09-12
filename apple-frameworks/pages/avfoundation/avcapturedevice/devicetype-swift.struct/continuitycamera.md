> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/devicetype-swift.struct/continuitycamera](https://developer.apple.com/documentation/avfoundation/avcapturedevice/devicetype-swift.struct/continuitycamera)

# continuityCamera (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

A Continuity Camera device type.

## Declaration

```swift
static let continuityCamera: AVCaptureDevice.DeviceType
```

<a id="Discussion"></a>

## Discussion

You discover devices of this type using an [AVCaptureDevice.DiscoverySession](../discoverysession.md) of by calling the device’s [default(\_:for:position:)](../default%28__for_position_%29.md) method.

## See Also

### Cameras

- [builtInWideAngleCamera](builtinwideanglecamera.md): A built-in wide-angle camera device type.
- [builtInUltraWideCamera](builtinultrawidecamera.md): A built-in camera device type with a shorter focal length than a wide-angle camera.
- [builtInTelephotoCamera](builtintelephotocamera.md): A built-in camera device type with a longer focal length than a wide-angle camera.
- [builtInDualCamera](builtindualcamera.md): A built-in camera device type that consists of a wide-angle and telephoto camera.
- [builtInDualWideCamera](builtindualwidecamera.md): A built-in camera device type that consists of two cameras of fixed focal length, one ultrawide angle and one wide angle.
- [builtInTripleCamera](builtintriplecamera.md): A built-in camera device type that consists of three cameras of fixed focal length, one ultrawide angle, one wide angle, and one telephoto.
- [builtInDuoCamera](builtinduocamera.md): Deprecated. A built-in dual camera device type.

# AVCaptureDeviceTypeContinuityCamera (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

A Continuity Camera device type.

## Declaration

```objectivec
extern AVCaptureDeviceType const AVCaptureDeviceTypeContinuityCamera;
```

<a id="Discussion"></a>

## Discussion

You discover devices of this type using an [AVCaptureDeviceDiscoverySession](../discoverysession.md) of by calling the device’s [defaultDeviceWithDeviceType:mediaType:position:](../default%28__for_position_%29.md) method.

## See Also

### Cameras

- [AVCaptureDeviceTypeBuiltInWideAngleCamera](builtinwideanglecamera.md): A built-in wide-angle camera device type.
- [AVCaptureDeviceTypeBuiltInUltraWideCamera](builtinultrawidecamera.md): A built-in camera device type with a shorter focal length than a wide-angle camera.
- [AVCaptureDeviceTypeBuiltInTelephotoCamera](builtintelephotocamera.md): A built-in camera device type with a longer focal length than a wide-angle camera.
- [AVCaptureDeviceTypeBuiltInDualCamera](builtindualcamera.md): A built-in camera device type that consists of a wide-angle and telephoto camera.
- [AVCaptureDeviceTypeBuiltInDualWideCamera](builtindualwidecamera.md): A built-in camera device type that consists of two cameras of fixed focal length, one ultrawide angle and one wide angle.
- [AVCaptureDeviceTypeBuiltInTripleCamera](builtintriplecamera.md): A built-in camera device type that consists of three cameras of fixed focal length, one ultrawide angle, one wide angle, and one telephoto.
- [AVCaptureDeviceTypeBuiltInDuoCamera](builtinduocamera.md): Deprecated. A built-in dual camera device type.
