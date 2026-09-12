> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avportraiteffectsmatte/replacingportraiteffectsmatte(with:)](https://developer.apple.com/documentation/avfoundation/avportraiteffectsmatte/replacingportraiteffectsmatte(with:))

# replacingPortraitEffectsMatte(with:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Returns a portrait effects matte by wrapping the replacement pixel buffer.

## Declaration

```swift
func replacingPortraitEffectsMatte(with pixelBuffer: CVPixelBuffer) throws -> Self
```

## Parameters

- `pixelBuffer`: A pixel buffer containing a portrait effects matte image, represented as [kCVPixelFormatType_OneComponent8](../../corevideo/kcvpixelformattype_onecomponent8.md) with [kCVImageBufferColorPrimaries_ITU_R_709_2](../../corevideo/kcvimagebuffercolorprimaries_itu_r_709_2.md) color primaries and a [kCVImageBufferTransferFunction_Linear](../../corevideo/kcvimagebuffertransferfunction_linear.md) transfer function.

## See Also

### Creating a Portrait Effects matte

- [Configuring camera capture to collect a Portrait Effects matte](../configuring-camera-capture-to-collect-a-portrait-effects-matte.md): Prepare your app to capture a portrait effects matte when taking photos.
- [init(fromDictionaryRepresentation:)](init%28fromdictionaryrepresentation_%29.md): Initializes a portrait effects matte instance from auxiliary image information in an image file.
- [applyingExifOrientation(\_:)](applyingexiforientation%28__%29.md): Returns a derivative portrait effects matte after applying the specified Exif orientation.

# portraitEffectsMatteByReplacingPortraitEffectsMatteWithPixelBuffer:error: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Returns a portrait effects matte by wrapping the replacement pixel buffer.

## Declaration

```objectivec
- (instancetype) portraitEffectsMatteByReplacingPortraitEffectsMatteWithPixelBuffer:(CVPixelBufferRef) pixelBuffer error:(NSError **) outError;
```

## Parameters

- `pixelBuffer`: A pixel buffer containing a portrait effects matte image, represented as [kCVPixelFormatType_OneComponent8](../../corevideo/kcvpixelformattype_onecomponent8.md) with [kCVImageBufferColorPrimaries_ITU_R_709_2](../../corevideo/kcvimagebuffercolorprimaries_itu_r_709_2.md) color primaries and a [kCVImageBufferTransferFunction_Linear](../../corevideo/kcvimagebuffertransferfunction_linear.md) transfer function.
- `outError`: If the portrait effects matte couldn’t be created, an error that points to an [NSError](../../foundation/nserror.md) describing the problem.

## See Also

### Creating a Portrait Effects matte

- [Configuring camera capture to collect a Portrait Effects matte](../configuring-camera-capture-to-collect-a-portrait-effects-matte.md): Prepare your app to capture a portrait effects matte when taking photos.
- [portraitEffectsMatteFromDictionaryRepresentation:error:](init%28fromdictionaryrepresentation_%29.md): Initializes a portrait effects matte instance from auxiliary image information in an image file.
- [portraitEffectsMatteByApplyingExifOrientation:](applyingexiforientation%28__%29.md): Returns a derivative portrait effects matte after applying the specified Exif orientation.
