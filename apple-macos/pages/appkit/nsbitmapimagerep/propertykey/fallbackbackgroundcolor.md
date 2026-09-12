> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbitmapimagerep/propertykey/fallbackbackgroundcolor](https://developer.apple.com/documentation/appkit/nsbitmapimagerep/propertykey/fallbackbackgroundcolor)

# fallbackBackgroundColor (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.5+

Specifies the background color to use when writing to an image format (such as JPEG) that doesn’t support alpha.

## Declaration

```swift
static let fallbackBackgroundColor: NSBitmapImageRep.PropertyKey
```

<a id="discussion"></a>

## Discussion

The color’s alpha value is ignored. The default background color, when this property is not specified, is white. The value of the property should be an [NSColor](../../nscolor.md) object. This constant corresponds to the [kCGImageDestinationBackgroundColor](https://developer.apple.com/documentation/imageio/kcgimagedestinationbackgroundcolor) constant in Quartz.

## See Also

### Bitmap Properties

- [colorSyncProfileData](colorsyncprofiledata.md): Identifies an `NSData` object containing the ColorSync profile data.
- [compressionFactor](compressionfactor.md): Identifies an `NSNumber` object containing the compression factor of the image.
- [compressionMethod](compressionmethod.md): Identifies an `NSNumber` object identifying the compression method of the image.
- [currentFrame](currentframe.md): Identifies an `NSNumber` object containing the current frame for an animated GIF file.
- [currentFrameDuration](currentframeduration.md): Identifies an `NSNumber` object containing the duration (in seconds) of the current frame for an animated GIF image.
- [ditherTransparency](dithertransparency.md): Identifies an `NSNumber` object containing a Boolean that indicates whether the image is dithered.
- [exifData](exifdata.md): Identifies an `NSDictionary` object containing the EXIF data for the image.
- [frameCount](framecount.md): Identifies an `NSNumber` object containing the number of frames in an animated GIF file.
- [gamma](gamma.md): Identifies an `NSNumber` object containing the gamma value for the image.
- [interlaced](interlaced.md): Identifies an `NSNumber` object containing a Boolean value that indicates whether the image is interlaced.
- [loopCount](loopcount.md): Identifies an `NSNumber` object containing the number of loops to make when animating a GIF image.
- [progressive](progressive.md): Identifies an `NSNumber` object containing a Boolean that indicates whether the image uses progressive encoding.
- [rgbColorTable](rgbcolortable.md): Identifies an `NSData` object containing the RGB color table.

# NSImageFallbackBackgroundColor (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

Specifies the background color to use when writing to an image format (such as JPEG) that doesn’t support alpha.

## Declaration

```objectivec
extern NSBitmapImageRepPropertyKey NSImageFallbackBackgroundColor;
```

<a id="discussion"></a>

## Discussion

The color’s alpha value is ignored. The default background color, when this property is not specified, is white. The value of the property should be an [NSColor](../../nscolor.md) object. This constant corresponds to the [kCGImageDestinationBackgroundColor](https://developer.apple.com/documentation/imageio/kcgimagedestinationbackgroundcolor) constant in Quartz.

## See Also

### Bitmap Properties

- [NSImageColorSyncProfileData](colorsyncprofiledata.md): Identifies an `NSData` object containing the ColorSync profile data.
- [NSImageCompressionFactor](compressionfactor.md): Identifies an `NSNumber` object containing the compression factor of the image.
- [NSImageCompressionMethod](compressionmethod.md): Identifies an `NSNumber` object identifying the compression method of the image.
- [NSImageCurrentFrame](currentframe.md): Identifies an `NSNumber` object containing the current frame for an animated GIF file.
- [NSImageCurrentFrameDuration](currentframeduration.md): Identifies an `NSNumber` object containing the duration (in seconds) of the current frame for an animated GIF image.
- [NSImageDitherTransparency](dithertransparency.md): Identifies an `NSNumber` object containing a Boolean that indicates whether the image is dithered.
- [NSImageEXIFData](exifdata.md): Identifies an `NSDictionary` object containing the EXIF data for the image.
- [NSImageFrameCount](framecount.md): Identifies an `NSNumber` object containing the number of frames in an animated GIF file.
- [NSImageGamma](gamma.md): Identifies an `NSNumber` object containing the gamma value for the image.
- [NSImageInterlaced](interlaced.md): Identifies an `NSNumber` object containing a Boolean value that indicates whether the image is interlaced.
- [NSImageLoopCount](loopcount.md): Identifies an `NSNumber` object containing the number of loops to make when animating a GIF image.
- [NSImageProgressive](progressive.md): Identifies an `NSNumber` object containing a Boolean that indicates whether the image uses progressive encoding.
- [NSImageRGBColorTable](rgbcolortable.md): Identifies an `NSData` object containing the RGB color table.
