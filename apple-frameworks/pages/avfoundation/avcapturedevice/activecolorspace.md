> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/activecolorspace](https://developer.apple.com/documentation/avfoundation/avcapturedevice/activecolorspace)

# activeColorSpace (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

The currently active color space for capture.

## Declaration

```swift
var activeColorSpace: AVCaptureColorSpace { get set }
```

<a id="Discussion"></a>

## Discussion

All devices and formats support capture in the sRGB color space. Some devices and formats can also capture in the P3 color space, which includes a much wider gamut of colors than the sRGB color space. By default, a capture session automatically enables wide-gamut capture for supported devices and capture workflows—for details, see the [automaticallyConfiguresCaptureDeviceForWideColor](../avcapturesession/automaticallyconfigurescapturedeviceforwidecolor.md) of your capture session. To instead set the color space manually, disable that [AVCaptureSession](../avcapturesession.md) property before setting the active color space.

For best results, choose a color space before calling [startRunning()](../avcapturesession/startrunning%28%29.md) on your capture session. Changing this property while a capture session is running requires a disruptive reconfiguration of the capture render pipeline—movie captures in progress ends immediately, unfulfilled photo requests abort, and video preview temporarily freeze.

Before changing this property, you must call the [lockForConfiguration()](lockforconfiguration%28%29.md) method to obtain exclusive access to the capture device. Attempting to change this property without locking the device raises an exception ([genericException](../../foundation/nsexceptionname/genericexception.md)).

## See Also

### Configuring color space settings

- [AVCaptureColorSpace](../avcapturecolorspace.md): An enumeration of color spaces a device can support.

# activeColorSpace (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

The currently active color space for capture.

## Declaration

```objectivec
@property (nonatomic) AVCaptureColorSpace activeColorSpace;
```

<a id="Discussion"></a>

## Discussion

All devices and formats support capture in the sRGB color space. Some devices and formats can also capture in the P3 color space, which includes a much wider gamut of colors than the sRGB color space. By default, a capture session automatically enables wide-gamut capture for supported devices and capture workflows—for details, see the [automaticallyConfiguresCaptureDeviceForWideColor](../avcapturesession/automaticallyconfigurescapturedeviceforwidecolor.md) of your capture session. To instead set the color space manually, disable that [AVCaptureSession](../avcapturesession.md) property before setting the active color space.

For best results, choose a color space before calling [startRunning](../avcapturesession/startrunning%28%29.md) on your capture session. Changing this property while a capture session is running requires a disruptive reconfiguration of the capture render pipeline—movie captures in progress ends immediately, unfulfilled photo requests abort, and video preview temporarily freeze.

Before changing this property, you must call the [lockForConfiguration:](lockforconfiguration%28%29.md) method to obtain exclusive access to the capture device. Attempting to change this property without locking the device raises an exception ([NSGenericException](../../foundation/nsexceptionname/genericexception.md)).

## See Also

### Configuring color space settings

- [AVCaptureColorSpace](../avcapturecolorspace.md): An enumeration of color spaces a device can support.
