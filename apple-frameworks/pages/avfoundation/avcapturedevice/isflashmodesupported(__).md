> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/isflashmodesupported(_:)](https://developer.apple.com/documentation/avfoundation/avcapturedevice/isflashmodesupported(_:))

# isFlashModeSupported(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 10.0) · iPadOS 4.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.7+

Returns a Boolean value that indicates whether the device supports the given flash mode.

> Use [supportedFlashModes](../avcapturephotooutput/supportedflashmodes-1n6nm.md) on [AVCapturePhotoOutput](../avcapturephotooutput.md) instead.

## Declaration

```swift
func isFlashModeSupported(_ flashMode: AVCaptureDevice.FlashMode) -> Bool
```

## Parameters

- `flashMode`: A flash mode to test if the device supports.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the device supports the flash mode; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring flash settings

- [hasFlash](hasflash.md): A Boolean value that indicates whether the capture device has a flash.
- [isFlashAvailable](isflashavailable.md): A Boolean value that indicates whether the flash is currently available for use.
- [isFlashActive](isflashactive.md): Deprecated. A Boolean value that indicates whether the flash is currently active.
- [flashMode](flashmode-swift.property.md): Deprecated. The device’s current flash mode.
- [AVCaptureDevice.FlashMode](flashmode-swift.enum.md): Constants that specify the flash modes of a capture device.

# isFlashModeSupported: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 10.0) · iPadOS 4.0+ (deprecated in 10.0) · Mac Catalyst 14.0+ (deprecated in 13.1) · macOS 10.7+

Returns a Boolean value that indicates whether the device supports the given flash mode.

> Use [supportedFlashModes](../avcapturephotooutput/supportedflashmodes-1n6nm.md) on [AVCapturePhotoOutput](../avcapturephotooutput.md) instead.

## Declaration

```objectivec
- (BOOL) isFlashModeSupported:(AVCaptureFlashMode) flashMode;
```

## Parameters

- `flashMode`: A flash mode to test if the device supports.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the device supports the flash mode; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring flash settings

- [hasFlash](hasflash.md): A Boolean value that indicates whether the capture device has a flash.
- [flashAvailable](isflashavailable.md): A Boolean value that indicates whether the flash is currently available for use.
- [flashActive](isflashactive.md): Deprecated. A Boolean value that indicates whether the flash is currently active.
- [flashMode](flashmode-swift.property.md): Deprecated. The device’s current flash mode.
- [AVCaptureFlashMode](flashmode-swift.enum.md): Constants that specify the flash modes of a capture device.
