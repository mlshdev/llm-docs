> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbitmapimagerep/propertykey/gamma](https://developer.apple.com/documentation/appkit/nsbitmapimagerep/propertykey/gamma)

# gamma (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Identifies an `NSNumber` object containing the gamma value for the image.

## Declaration

```swift
static let gamma: NSBitmapImageRep.PropertyKey
```

<a id="Discussion"></a>

## Discussion

Used only for PNG files. The gamma values is a floating-point number between 0.0 and 1.0, with 0.0 being black and 1.0 being the maximum color. It’s set when reading in and used when writing out.

## See Also

### Bitmap Properties

- [colorSyncProfileData](colorsyncprofiledata.md): Identifies an `NSData` object containing the ColorSync profile data.
- [compressionFactor](compressionfactor.md): Identifies an `NSNumber` object containing the compression factor of the image.
- [compressionMethod](compressionmethod.md): Identifies an `NSNumber` object identifying the compression method of the image.
- [currentFrame](currentframe.md): Identifies an `NSNumber` object containing the current frame for an animated GIF file.
- [currentFrameDuration](currentframeduration.md): Identifies an `NSNumber` object containing the duration (in seconds) of the current frame for an animated GIF image.
- [ditherTransparency](dithertransparency.md): Identifies an `NSNumber` object containing a Boolean that indicates whether the image is dithered.
- [exifData](exifdata.md): Identifies an `NSDictionary` object containing the EXIF data for the image.
- [fallbackBackgroundColor](fallbackbackgroundcolor.md): Specifies the background color to use when writing to an image format (such as JPEG) that doesn’t support alpha.
- [frameCount](framecount.md): Identifies an `NSNumber` object containing the number of frames in an animated GIF file.
- [interlaced](interlaced.md): Identifies an `NSNumber` object containing a Boolean value that indicates whether the image is interlaced.
- [loopCount](loopcount.md): Identifies an `NSNumber` object containing the number of loops to make when animating a GIF image.
- [progressive](progressive.md): Identifies an `NSNumber` object containing a Boolean that indicates whether the image uses progressive encoding.
- [rgbColorTable](rgbcolortable.md): Identifies an `NSData` object containing the RGB color table.

# NSImageGamma (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

Identifies an `NSNumber` object containing the gamma value for the image.

## Declaration

```objectivec
extern NSBitmapImageRepPropertyKey NSImageGamma;
```

<a id="Discussion"></a>

## Discussion

Used only for PNG files. The gamma values is a floating-point number between 0.0 and 1.0, with 0.0 being black and 1.0 being the maximum color. It’s set when reading in and used when writing out.

## See Also

### Bitmap Properties

- [NSImageColorSyncProfileData](colorsyncprofiledata.md): Identifies an `NSData` object containing the ColorSync profile data.
- [NSImageCompressionFactor](compressionfactor.md): Identifies an `NSNumber` object containing the compression factor of the image.
- [NSImageCompressionMethod](compressionmethod.md): Identifies an `NSNumber` object identifying the compression method of the image.
- [NSImageCurrentFrame](currentframe.md): Identifies an `NSNumber` object containing the current frame for an animated GIF file.
- [NSImageCurrentFrameDuration](currentframeduration.md): Identifies an `NSNumber` object containing the duration (in seconds) of the current frame for an animated GIF image.
- [NSImageDitherTransparency](dithertransparency.md): Identifies an `NSNumber` object containing a Boolean that indicates whether the image is dithered.
- [NSImageEXIFData](exifdata.md): Identifies an `NSDictionary` object containing the EXIF data for the image.
- [NSImageFallbackBackgroundColor](fallbackbackgroundcolor.md): Specifies the background color to use when writing to an image format (such as JPEG) that doesn’t support alpha.
- [NSImageFrameCount](framecount.md): Identifies an `NSNumber` object containing the number of frames in an animated GIF file.
- [NSImageInterlaced](interlaced.md): Identifies an `NSNumber` object containing a Boolean value that indicates whether the image is interlaced.
- [NSImageLoopCount](loopcount.md): Identifies an `NSNumber` object containing the number of loops to make when animating a GIF image.
- [NSImageProgressive](progressive.md): Identifies an `NSNumber` object containing a Boolean that indicates whether the image uses progressive encoding.
- [NSImageRGBColorTable](rgbcolortable.md): Identifies an `NSData` object containing the RGB color table.
