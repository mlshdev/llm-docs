> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbitmapimagerep/propertykey/compressionfactor](https://developer.apple.com/documentation/appkit/nsbitmapimagerep/propertykey/compressionfactor)

# compressionFactor (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Identifies an `NSNumber` object containing the compression factor of the image.

## Declaration

```swift
static let compressionFactor: NSBitmapImageRep.PropertyKey
```

<a id="Discussion"></a>

## Discussion

Used only for JPEG files. JPEG compression in TIFF files is not supported, and the factor is ignored. The value is a float between 0.0 and 1.0, with 1.0 resulting in no compression and 0.0 resulting in the maximum compression possible. It’s set when reading in and used when writing out the image.

## See Also

### Bitmap Properties

- [colorSyncProfileData](colorsyncprofiledata.md): Identifies an `NSData` object containing the ColorSync profile data.
- [compressionMethod](compressionmethod.md): Identifies an `NSNumber` object identifying the compression method of the image.
- [currentFrame](currentframe.md): Identifies an `NSNumber` object containing the current frame for an animated GIF file.
- [currentFrameDuration](currentframeduration.md): Identifies an `NSNumber` object containing the duration (in seconds) of the current frame for an animated GIF image.
- [ditherTransparency](dithertransparency.md): Identifies an `NSNumber` object containing a Boolean that indicates whether the image is dithered.
- [exifData](exifdata.md): Identifies an `NSDictionary` object containing the EXIF data for the image.
- [fallbackBackgroundColor](fallbackbackgroundcolor.md): Specifies the background color to use when writing to an image format (such as JPEG) that doesn’t support alpha.
- [frameCount](framecount.md): Identifies an `NSNumber` object containing the number of frames in an animated GIF file.
- [gamma](gamma.md): Identifies an `NSNumber` object containing the gamma value for the image.
- [interlaced](interlaced.md): Identifies an `NSNumber` object containing a Boolean value that indicates whether the image is interlaced.
- [loopCount](loopcount.md): Identifies an `NSNumber` object containing the number of loops to make when animating a GIF image.
- [progressive](progressive.md): Identifies an `NSNumber` object containing a Boolean that indicates whether the image uses progressive encoding.
- [rgbColorTable](rgbcolortable.md): Identifies an `NSData` object containing the RGB color table.

# NSImageCompressionFactor (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

Identifies an `NSNumber` object containing the compression factor of the image.

## Declaration

```objectivec
extern NSBitmapImageRepPropertyKey NSImageCompressionFactor;
```

<a id="Discussion"></a>

## Discussion

Used only for JPEG files. JPEG compression in TIFF files is not supported, and the factor is ignored. The value is a float between 0.0 and 1.0, with 1.0 resulting in no compression and 0.0 resulting in the maximum compression possible. It’s set when reading in and used when writing out the image.

## See Also

### Bitmap Properties

- [NSImageColorSyncProfileData](colorsyncprofiledata.md): Identifies an `NSData` object containing the ColorSync profile data.
- [NSImageCompressionMethod](compressionmethod.md): Identifies an `NSNumber` object identifying the compression method of the image.
- [NSImageCurrentFrame](currentframe.md): Identifies an `NSNumber` object containing the current frame for an animated GIF file.
- [NSImageCurrentFrameDuration](currentframeduration.md): Identifies an `NSNumber` object containing the duration (in seconds) of the current frame for an animated GIF image.
- [NSImageDitherTransparency](dithertransparency.md): Identifies an `NSNumber` object containing a Boolean that indicates whether the image is dithered.
- [NSImageEXIFData](exifdata.md): Identifies an `NSDictionary` object containing the EXIF data for the image.
- [NSImageFallbackBackgroundColor](fallbackbackgroundcolor.md): Specifies the background color to use when writing to an image format (such as JPEG) that doesn’t support alpha.
- [NSImageFrameCount](framecount.md): Identifies an `NSNumber` object containing the number of frames in an animated GIF file.
- [NSImageGamma](gamma.md): Identifies an `NSNumber` object containing the gamma value for the image.
- [NSImageInterlaced](interlaced.md): Identifies an `NSNumber` object containing a Boolean value that indicates whether the image is interlaced.
- [NSImageLoopCount](loopcount.md): Identifies an `NSNumber` object containing the number of loops to make when animating a GIF image.
- [NSImageProgressive](progressive.md): Identifies an `NSNumber` object containing a Boolean that indicates whether the image uses progressive encoding.
- [NSImageRGBColorTable](rgbcolortable.md): Identifies an `NSData` object containing the RGB color table.
