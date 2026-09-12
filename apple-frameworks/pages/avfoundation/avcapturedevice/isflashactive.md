> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/isflashactive](https://developer.apple.com/documentation/avfoundation/avcapturedevice/isflashactive)

# isFlashActive (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 10.0) · iPadOS 5.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A Boolean value that indicates whether the flash is currently active.

> Use [isFlashScene](../avcapturephotooutput/isflashscene.md) on [AVCapturePhotoOutput](../avcapturephotooutput.md) instead.

## Declaration

```swift
var isFlashActive: Bool { get }
```

<a id="Discussion"></a>

## Discussion

When the flash is active, it flashes when capturing a photo.

This property is key-value observable.

## See Also

### Configuring flash settings

- [hasFlash](hasflash.md): A Boolean value that indicates whether the capture device has a flash.
- [isFlashAvailable](isflashavailable.md): A Boolean value that indicates whether the flash is currently available for use.
- [flashMode](flashmode-swift.property.md): Deprecated. The device’s current flash mode.
- [isFlashModeSupported(\_:)](isflashmodesupported%28__%29.md): Deprecated. Returns a Boolean value that indicates whether the device supports the given flash mode.
- [AVCaptureDevice.FlashMode](flashmode-swift.enum.md): Constants that specify the flash modes of a capture device.

# flashActive (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 10.0) · iPadOS 5.0+ (deprecated in 10.0) · Mac Catalyst 14.0+ (deprecated in 13.1)

A Boolean value that indicates whether the flash is currently active.

> Use [isFlashScene](../avcapturephotooutput/isflashscene.md) on [AVCapturePhotoOutput](../avcapturephotooutput.md) instead.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isFlashActive) BOOL flashActive;
```

<a id="Discussion"></a>

## Discussion

When the flash is active, it flashes when capturing a photo.

This property is key-value observable.

## See Also

### Configuring flash settings

- [hasFlash](hasflash.md): A Boolean value that indicates whether the capture device has a flash.
- [flashAvailable](isflashavailable.md): A Boolean value that indicates whether the flash is currently available for use.
- [flashMode](flashmode-swift.property.md): Deprecated. The device’s current flash mode.
- [isFlashModeSupported:](isflashmodesupported%28__%29.md): Deprecated. Returns a Boolean value that indicates whether the device supports the given flash mode.
- [AVCaptureFlashMode](flashmode-swift.enum.md): Constants that specify the flash modes of a capture device.
