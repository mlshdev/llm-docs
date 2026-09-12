> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avportraiteffectsmatte/applyingexiforientation(_:)](https://developer.apple.com/documentation/avfoundation/avportraiteffectsmatte/applyingexiforientation(_:))

# applyingExifOrientation(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Returns a derivative portrait effects matte after applying the specified Exif orientation.

## Declaration

```swift
func applyingExifOrientation(_ exifOrientation: CGImagePropertyOrientation) -> Self
```

## Parameters

- `exifOrientation`: One of the standard Exif orientation tags expressing how the portrait effects matte should be rotated or mirrored.

## See Also

### Creating a Portrait Effects matte

- [Configuring camera capture to collect a Portrait Effects matte](../configuring-camera-capture-to-collect-a-portrait-effects-matte.md): Prepare your app to capture a portrait effects matte when taking photos.
- [init(fromDictionaryRepresentation:)](init%28fromdictionaryrepresentation_%29.md): Initializes a portrait effects matte instance from auxiliary image information in an image file.
- [replacingPortraitEffectsMatte(with:)](replacingportraiteffectsmatte%28with_%29.md): Returns a portrait effects matte by wrapping the replacement pixel buffer.

# portraitEffectsMatteByApplyingExifOrientation: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Returns a derivative portrait effects matte after applying the specified Exif orientation.

## Declaration

```objectivec
- (instancetype) portraitEffectsMatteByApplyingExifOrientation:(CGImagePropertyOrientation) exifOrientation;
```

## Parameters

- `exifOrientation`: One of the standard Exif orientation tags expressing how the portrait effects matte should be rotated or mirrored.

## See Also

### Creating a Portrait Effects matte

- [Configuring camera capture to collect a Portrait Effects matte](../configuring-camera-capture-to-collect-a-portrait-effects-matte.md): Prepare your app to capture a portrait effects matte when taking photos.
- [portraitEffectsMatteFromDictionaryRepresentation:error:](init%28fromdictionaryrepresentation_%29.md): Initializes a portrait effects matte instance from auxiliary image information in an image file.
- [portraitEffectsMatteByReplacingPortraitEffectsMatteWithPixelBuffer:error:](replacingportraiteffectsmatte%28with_%29.md): Returns a portrait effects matte by wrapping the replacement pixel buffer.
