> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbitmapimagerep/propertykey/exifdata](https://developer.apple.com/documentation/appkit/nsbitmapimagerep/propertykey/exifdata)

# exifData (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Identifies an `NSDictionary` object containing the EXIF data for the image.

## Declaration

```swift
static let exifData: NSBitmapImageRep.PropertyKey
```

<a id="Discussion"></a>

## Discussion

This property is used only when reading or writing JPEG files. The dictionary contains the EXIF keys and values. The standard dictionary keys (that is, those that are not specific to camera vendors) are identical to those for [kCGImagePropertyExifDictionary](https://developer.apple.com/documentation/imageio/kcgimagepropertyexifdictionary) declared in the `CGImageSource` API. See [kCGImagePropertyExifDictionary](https://developer.apple.com/documentation/imageio/kcgimagepropertyexifdictionary) Keys for details.

## See Also

### Bitmap Properties

- [colorSyncProfileData](colorsyncprofiledata.md): Identifies an `NSData` object containing the ColorSync profile data.
- [compressionFactor](compressionfactor.md): Identifies an `NSNumber` object containing the compression factor of the image.
- [compressionMethod](compressionmethod.md): Identifies an `NSNumber` object identifying the compression method of the image.
- [currentFrame](currentframe.md): Identifies an `NSNumber` object containing the current frame for an animated GIF file.
- [currentFrameDuration](currentframeduration.md): Identifies an `NSNumber` object containing the duration (in seconds) of the current frame for an animated GIF image.
- [ditherTransparency](dithertransparency.md): Identifies an `NSNumber` object containing a Boolean that indicates whether the image is dithered.
- [fallbackBackgroundColor](fallbackbackgroundcolor.md): Specifies the background color to use when writing to an image format (such as JPEG) that doesn’t support alpha.
- [frameCount](framecount.md): Identifies an `NSNumber` object containing the number of frames in an animated GIF file.
- [gamma](gamma.md): Identifies an `NSNumber` object containing the gamma value for the image.
- [interlaced](interlaced.md): Identifies an `NSNumber` object containing a Boolean value that indicates whether the image is interlaced.
- [loopCount](loopcount.md): Identifies an `NSNumber` object containing the number of loops to make when animating a GIF image.
- [progressive](progressive.md): Identifies an `NSNumber` object containing a Boolean that indicates whether the image uses progressive encoding.
- [rgbColorTable](rgbcolortable.md): Identifies an `NSData` object containing the RGB color table.

# NSImageEXIFData (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

Identifies an `NSDictionary` object containing the EXIF data for the image.

## Declaration

```objectivec
extern NSBitmapImageRepPropertyKey NSImageEXIFData;
```

<a id="Discussion"></a>

## Discussion

This property is used only when reading or writing JPEG files. The dictionary contains the EXIF keys and values. The standard dictionary keys (that is, those that are not specific to camera vendors) are identical to those for [kCGImagePropertyExifDictionary](https://developer.apple.com/documentation/imageio/kcgimagepropertyexifdictionary) declared in the `CGImageSource` API. See [kCGImagePropertyExifDictionary](https://developer.apple.com/documentation/imageio/kcgimagepropertyexifdictionary) Keys for details.

## See Also

### Bitmap Properties

- [NSImageColorSyncProfileData](colorsyncprofiledata.md): Identifies an `NSData` object containing the ColorSync profile data.
- [NSImageCompressionFactor](compressionfactor.md): Identifies an `NSNumber` object containing the compression factor of the image.
- [NSImageCompressionMethod](compressionmethod.md): Identifies an `NSNumber` object identifying the compression method of the image.
- [NSImageCurrentFrame](currentframe.md): Identifies an `NSNumber` object containing the current frame for an animated GIF file.
- [NSImageCurrentFrameDuration](currentframeduration.md): Identifies an `NSNumber` object containing the duration (in seconds) of the current frame for an animated GIF image.
- [NSImageDitherTransparency](dithertransparency.md): Identifies an `NSNumber` object containing a Boolean that indicates whether the image is dithered.
- [NSImageFallbackBackgroundColor](fallbackbackgroundcolor.md): Specifies the background color to use when writing to an image format (such as JPEG) that doesn’t support alpha.
- [NSImageFrameCount](framecount.md): Identifies an `NSNumber` object containing the number of frames in an animated GIF file.
- [NSImageGamma](gamma.md): Identifies an `NSNumber` object containing the gamma value for the image.
- [NSImageInterlaced](interlaced.md): Identifies an `NSNumber` object containing a Boolean value that indicates whether the image is interlaced.
- [NSImageLoopCount](loopcount.md): Identifies an `NSNumber` object containing the number of loops to make when animating a GIF image.
- [NSImageProgressive](progressive.md): Identifies an `NSNumber` object containing a Boolean that indicates whether the image uses progressive encoding.
- [NSImageRGBColorTable](rgbcolortable.md): Identifies an `NSData` object containing the RGB color table.
