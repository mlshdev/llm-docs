> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotosettings/isshuttersoundsuppressionenabled](https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/isshuttersoundsuppressionenabled)

# isShutterSoundSuppressionEnabled (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

A Boolean value that indicates whether to suppress the built-in shutter sound when capturing a photo.

## Declaration

```swift
var isShutterSoundSuppressionEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false). Set the value to [true](https://developer.apple.com/documentation/swift/true) to suppress the photo output’s built-in shutter sound for this request. The photo output throws an invalid argument exception when calling [capturePhoto(with:delegate:)](../avcapturephotooutput/capturephoto%28with_delegate_%29.md) if its [isShutterSoundSuppressionSupported](../avcapturephotooutput/isshuttersoundsuppressionsupported.md) property returns [false](https://developer.apple.com/documentation/swift/false).

# shutterSoundSuppressionEnabled (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

A Boolean value that indicates whether to suppress the built-in shutter sound when capturing a photo.

## Declaration

```objectivec
@property (nonatomic, getter=isShutterSoundSuppressionEnabled) BOOL shutterSoundSuppressionEnabled;
```

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false). Set the value to [true](https://developer.apple.com/documentation/swift/true) to suppress the photo output’s built-in shutter sound for this request. The photo output throws an invalid argument exception when calling [capturePhotoWithSettings:delegate:](../avcapturephotooutput/capturephoto%28with_delegate_%29.md) if its [shutterSoundSuppressionSupported](../avcapturephotooutput/isshuttersoundsuppressionsupported.md) property returns [false](https://developer.apple.com/documentation/swift/false).
