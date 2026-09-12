> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/hasflash](https://developer.apple.com/documentation/avfoundation/avcapturedevice/hasflash)

# hasFlash (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

A Boolean value that indicates whether the capture device has a flash.

## Declaration

```swift
var hasFlash: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property is key-value observable.

## See Also

### Configuring flash settings

- [isFlashAvailable](isflashavailable.md): A Boolean value that indicates whether the flash is currently available for use.
- [isFlashActive](isflashactive.md): Deprecated. A Boolean value that indicates whether the flash is currently active.
- [flashMode](flashmode-swift.property.md): Deprecated. The device’s current flash mode.
- [isFlashModeSupported(\_:)](isflashmodesupported%28__%29.md): Deprecated. Returns a Boolean value that indicates whether the device supports the given flash mode.
- [AVCaptureDevice.FlashMode](flashmode-swift.enum.md): Constants that specify the flash modes of a capture device.

# hasFlash (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

A Boolean value that indicates whether the capture device has a flash.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL hasFlash;
```

<a id="Discussion"></a>

## Discussion

This property is key-value observable.

## See Also

### Configuring flash settings

- [flashAvailable](isflashavailable.md): A Boolean value that indicates whether the flash is currently available for use.
- [flashActive](isflashactive.md): Deprecated. A Boolean value that indicates whether the flash is currently active.
- [flashMode](flashmode-swift.property.md): Deprecated. The device’s current flash mode.
- [isFlashModeSupported:](isflashmodesupported%28__%29.md): Deprecated. Returns a Boolean value that indicates whether the device supports the given flash mode.
- [AVCaptureFlashMode](flashmode-swift.enum.md): Constants that specify the flash modes of a capture device.
