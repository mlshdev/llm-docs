> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/isflashavailable](https://developer.apple.com/documentation/avfoundation/avcapturedevice/isflashavailable)

# isFlashAvailable (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

A Boolean value that indicates whether the flash is currently available for use.

## Declaration

```swift
var isFlashAvailable: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The flash may become unavailable if, for example, the device overheats and needs to cool off.

This property is key-value observable.

## See Also

### Configuring flash settings

- [hasFlash](hasflash.md): A Boolean value that indicates whether the capture device has a flash.
- [isFlashActive](isflashactive.md): Deprecated. A Boolean value that indicates whether the flash is currently active.
- [flashMode](flashmode-swift.property.md): Deprecated. The device’s current flash mode.
- [isFlashModeSupported(\_:)](isflashmodesupported%28__%29.md): Deprecated. Returns a Boolean value that indicates whether the device supports the given flash mode.
- [AVCaptureDevice.FlashMode](flashmode-swift.enum.md): Constants that specify the flash modes of a capture device.

# flashAvailable (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

A Boolean value that indicates whether the flash is currently available for use.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isFlashAvailable) BOOL flashAvailable;
```

<a id="Discussion"></a>

## Discussion

The flash may become unavailable if, for example, the device overheats and needs to cool off.

This property is key-value observable.

## See Also

### Configuring flash settings

- [hasFlash](hasflash.md): A Boolean value that indicates whether the capture device has a flash.
- [flashActive](isflashactive.md): Deprecated. A Boolean value that indicates whether the flash is currently active.
- [flashMode](flashmode-swift.property.md): Deprecated. The device’s current flash mode.
- [isFlashModeSupported:](isflashmodesupported%28__%29.md): Deprecated. Returns a Boolean value that indicates whether the device supports the given flash mode.
- [AVCaptureFlashMode](flashmode-swift.enum.md): Constants that specify the flash modes of a capture device.
