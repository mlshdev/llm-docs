> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotooutput/isshuttersoundsuppressionsupported](https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/isshuttersoundsuppressionsupported)

# isShutterSoundSuppressionSupported (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

A Boolean value that indicates whether the photo output supports suppressing the system shutter sound.

## Declaration

```swift
var isShutterSoundSuppressionSupported: Bool { get }
```

<a id="Discussion"></a>

## Discussion

In iOS, the value is [true](https://developer.apple.com/documentation/swift/true), except in jurisdictions where you can’t disable the shutter sound. On all other platforms, the value is always [false](https://developer.apple.com/documentation/swift/false).

If the output supports this feature, you can supress the shutter sound when capturing a photo using the [isShutterSoundSuppressionEnabled](../avcapturephotosettings/isshuttersoundsuppressionenabled.md) property of [AVCapturePhotoSettings](../avcapturephotosettings.md).

# shutterSoundSuppressionSupported (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

A Boolean value that indicates whether the photo output supports suppressing the system shutter sound.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isShutterSoundSuppressionSupported) BOOL shutterSoundSuppressionSupported;
```

<a id="Discussion"></a>

## Discussion

In iOS, the value is [true](https://developer.apple.com/documentation/swift/true), except in jurisdictions where you can’t disable the shutter sound. On all other platforms, the value is always [false](https://developer.apple.com/documentation/swift/false).

If the output supports this feature, you can supress the shutter sound when capturing a photo using the [shutterSoundSuppressionEnabled](../avcapturephotosettings/isshuttersoundsuppressionenabled.md) property of [AVCapturePhotoSettings](../avcapturephotosettings.md).
