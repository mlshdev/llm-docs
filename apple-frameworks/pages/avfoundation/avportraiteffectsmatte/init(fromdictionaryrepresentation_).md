> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avportraiteffectsmatte/init(fromdictionaryrepresentation:)](https://developer.apple.com/documentation/avfoundation/avportraiteffectsmatte/init(fromdictionaryrepresentation:))

# init(fromDictionaryRepresentation:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Initializes a portrait effects matte instance from auxiliary image information in an image file.

## Declaration

```swift
convenience init(fromDictionaryRepresentation imageSourceAuxDataInfoDictionary: [AnyHashable : Any]) throws
```

## Parameters

- `imageSourceAuxDataInfoDictionary`: A dictionary of information related to primitive portrait effects matte; obtained from [CGImageSourceCopyAuxiliaryDataInfoAtIndex(\_:\_:\_:)](../../imageio/cgimagesourcecopyauxiliarydatainfoatindex%28______%29.md).

## Mentioned In

- [Extracting Portrait Effects matte image data from a photo](../extracting-portrait-effects-matte-image-data-from-a-photo.md)

<a id="Discussion"></a>

## Discussion

When using the [Image I/O](../../imageio.md) API to read from a HEIF or JPEG file containing a portrait effects matte, you can create an [AVPortraitEffectsMatte](../avportraiteffectsmatte.md) object from the result of [CGImageSourceCopyAuxiliaryDataInfoAtIndex(\_:\_:\_:)](../../imageio/cgimagesourcecopyauxiliarydatainfoatindex%28______%29.md). This function returns a [CFDictionary](../../corefoundation/cfdictionary.md) of primitive map information.

## See Also

### Creating a Portrait Effects matte

- [Configuring camera capture to collect a Portrait Effects matte](../configuring-camera-capture-to-collect-a-portrait-effects-matte.md): Prepare your app to capture a portrait effects matte when taking photos.
- [applyingExifOrientation(\_:)](applyingexiforientation%28__%29.md): Returns a derivative portrait effects matte after applying the specified Exif orientation.
- [replacingPortraitEffectsMatte(with:)](replacingportraiteffectsmatte%28with_%29.md): Returns a portrait effects matte by wrapping the replacement pixel buffer.

# portraitEffectsMatteFromDictionaryRepresentation:error: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Initializes a portrait effects matte instance from auxiliary image information in an image file.

## Declaration

```objectivec
+ (instancetype) portraitEffectsMatteFromDictionaryRepresentation:(NSDictionary *) imageSourceAuxDataInfoDictionary error:(NSError **) outError;
```

## Parameters

- `imageSourceAuxDataInfoDictionary`: A dictionary of information related to primitive portrait effects matte; obtained from [CGImageSourceCopyAuxiliaryDataInfoAtIndex](../../imageio/cgimagesourcecopyauxiliarydatainfoatindex%28______%29.md).
- `outError`: A pointer that the system populates with an [NSError](../../foundation/nserror.md) object if a failure occurs.

## Mentioned In

- [Extracting Portrait Effects matte image data from a photo](../extracting-portrait-effects-matte-image-data-from-a-photo.md)

<a id="Discussion"></a>

## Discussion

When using the [Image I/O](../../imageio.md) API to read from a HEIF or JPEG file containing a portrait effects matte, you can create an [AVPortraitEffectsMatte](../avportraiteffectsmatte.md) object from the result of [CGImageSourceCopyAuxiliaryDataInfoAtIndex](../../imageio/cgimagesourcecopyauxiliarydatainfoatindex%28______%29.md). This function returns a [CFDictionaryRef](../../corefoundation/cfdictionary.md) of primitive map information.

## See Also

### Creating a Portrait Effects matte

- [Configuring camera capture to collect a Portrait Effects matte](../configuring-camera-capture-to-collect-a-portrait-effects-matte.md): Prepare your app to capture a portrait effects matte when taking photos.
- [portraitEffectsMatteByApplyingExifOrientation:](applyingexiforientation%28__%29.md): Returns a derivative portrait effects matte after applying the specified Exif orientation.
- [portraitEffectsMatteByReplacingPortraitEffectsMatteWithPixelBuffer:error:](replacingportraiteffectsmatte%28with_%29.md): Returns a portrait effects matte by wrapping the replacement pixel buffer.
