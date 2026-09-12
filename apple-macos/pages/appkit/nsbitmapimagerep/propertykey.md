> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbitmapimagerep/propertykey](https://developer.apple.com/documentation/appkit/nsbitmapimagerep/propertykey)

# NSBitmapImageRep.PropertyKey (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

Constants that identify bitmap image representation properties.

## Declaration

```swift
struct PropertyKey
```

<a id="Discussion"></a>

## Discussion

Use these constants with [representationOfImageReps(in:using:properties:)](representationofimagereps%28in_using_properties_%29.md), [representation(using:properties:)](representation%28using_properties_%29.md), [setPixel(\_:atX:y:)](setpixel%28__atx_y_%29.md), and [value(forProperty:)](value%28forproperty_%29.md).

When using the [value(forProperty:)](value%28forproperty_%29.md) method to retrieve the the value for any of these keys, be sure to check that the returned value is non-`nil` before you attempt to use it. A bitmap image representation may return `nil` for any values that have not yet been set.

## Topics

### Bitmap Properties

- [colorSyncProfileData](propertykey/colorsyncprofiledata.md): Identifies an `NSData` object containing the ColorSync profile data.
- [compressionFactor](propertykey/compressionfactor.md): Identifies an `NSNumber` object containing the compression factor of the image.
- [compressionMethod](propertykey/compressionmethod.md): Identifies an `NSNumber` object identifying the compression method of the image.
- [currentFrame](propertykey/currentframe.md): Identifies an `NSNumber` object containing the current frame for an animated GIF file.
- [currentFrameDuration](propertykey/currentframeduration.md): Identifies an `NSNumber` object containing the duration (in seconds) of the current frame for an animated GIF image.
- [ditherTransparency](propertykey/dithertransparency.md): Identifies an `NSNumber` object containing a Boolean that indicates whether the image is dithered.
- [exifData](propertykey/exifdata.md): Identifies an `NSDictionary` object containing the EXIF data for the image.
- [fallbackBackgroundColor](propertykey/fallbackbackgroundcolor.md): Specifies the background color to use when writing to an image format (such as JPEG) that doesn’t support alpha.
- [frameCount](propertykey/framecount.md): Identifies an `NSNumber` object containing the number of frames in an animated GIF file.
- [gamma](propertykey/gamma.md): Identifies an `NSNumber` object containing the gamma value for the image.
- [interlaced](propertykey/interlaced.md): Identifies an `NSNumber` object containing a Boolean value that indicates whether the image is interlaced.
- [loopCount](propertykey/loopcount.md): Identifies an `NSNumber` object containing the number of loops to make when animating a GIF image.
- [progressive](propertykey/progressive.md): Identifies an `NSNumber` object containing a Boolean that indicates whether the image uses progressive encoding.
- [rgbColorTable](propertykey/rgbcolortable.md): Identifies an `NSData` object containing the RGB color table.

### Initializers

- [init(\_:)](propertykey/init%28__%29.md)
- [init(rawValue:)](propertykey/init%28rawvalue_%29.md)

### Type Properties

- [imageIPTCData](propertykey/imageiptcdata.md)
- [imageIPTCData](propertykey/imageiptcdata.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing Compression Types

- [getTIFFCompressionTypes(\_:count:)](gettiffcompressiontypes%28__count_%29.md): Returns by indirection an array of all available compression types that can be used when writing a TIFF image.
- [localizedName(forTIFFCompressionType:)](localizedname%28fortiffcompressiontype_%29.md): Returns an autoreleased string containing the localized name for the specified compression type.
- [canBeCompressed(using:)](canbecompressed%28using_%29.md): Tests whether the bitmap image representation can be compressed by the specified compression scheme.
- [setCompression(\_:factor:)](setcompression%28__factor_%29.md): Sets the bitmap image representation’s compression type and compression factor.
- [getCompression(\_:factor:)](getcompression%28__factor_%29.md): Returns by indirection the bitmap image representation’s compression type and compression factor.
- [setProperty(\_:withValue:)](setproperty%28__withvalue_%29.md): Sets the specified property of the bitmap image representation to the specified value.
- [value(forProperty:)](value%28forproperty_%29.md): Returns the value for the specified property.
- [NSBitmapImageRep.TIFFCompression](tiffcompression.md): Constants that represent the supported TIFF data-compression schemes.

# NSBitmapImageRepPropertyKey (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

Constants that identify bitmap image representation properties.

## Declaration

```objectivec
typedef NSString * NSBitmapImageRepPropertyKey;
```

<a id="Discussion"></a>

## Discussion

Use these constants with [representationOfImageRepsInArray:usingType:properties:](representationofimagereps%28in_using_properties_%29.md), [representationUsingType:properties:](representation%28using_properties_%29.md), [setPixel:atX:y:](setpixel%28__atx_y_%29.md), and [valueForProperty:](value%28forproperty_%29.md).

When using the [valueForProperty:](value%28forproperty_%29.md) method to retrieve the the value for any of these keys, be sure to check that the returned value is non-`nil` before you attempt to use it. A bitmap image representation may return `nil` for any values that have not yet been set.

## Topics

### Bitmap Properties

- [NSImageColorSyncProfileData](propertykey/colorsyncprofiledata.md): Identifies an `NSData` object containing the ColorSync profile data.
- [NSImageCompressionFactor](propertykey/compressionfactor.md): Identifies an `NSNumber` object containing the compression factor of the image.
- [NSImageCompressionMethod](propertykey/compressionmethod.md): Identifies an `NSNumber` object identifying the compression method of the image.
- [NSImageCurrentFrame](propertykey/currentframe.md): Identifies an `NSNumber` object containing the current frame for an animated GIF file.
- [NSImageCurrentFrameDuration](propertykey/currentframeduration.md): Identifies an `NSNumber` object containing the duration (in seconds) of the current frame for an animated GIF image.
- [NSImageDitherTransparency](propertykey/dithertransparency.md): Identifies an `NSNumber` object containing a Boolean that indicates whether the image is dithered.
- [NSImageEXIFData](propertykey/exifdata.md): Identifies an `NSDictionary` object containing the EXIF data for the image.
- [NSImageFallbackBackgroundColor](propertykey/fallbackbackgroundcolor.md): Specifies the background color to use when writing to an image format (such as JPEG) that doesn’t support alpha.
- [NSImageFrameCount](propertykey/framecount.md): Identifies an `NSNumber` object containing the number of frames in an animated GIF file.
- [NSImageGamma](propertykey/gamma.md): Identifies an `NSNumber` object containing the gamma value for the image.
- [NSImageInterlaced](propertykey/interlaced.md): Identifies an `NSNumber` object containing a Boolean value that indicates whether the image is interlaced.
- [NSImageLoopCount](propertykey/loopcount.md): Identifies an `NSNumber` object containing the number of loops to make when animating a GIF image.
- [NSImageProgressive](propertykey/progressive.md): Identifies an `NSNumber` object containing a Boolean that indicates whether the image uses progressive encoding.
- [NSImageRGBColorTable](propertykey/rgbcolortable.md): Identifies an `NSData` object containing the RGB color table.

### Type Properties

- [NSImageIPTCData](propertykey/imageiptcdata.md)
- [NSImageIPTCData](propertykey/imageiptcdata.md)

## See Also

### Managing Compression Types

- [getTIFFCompressionTypes:count:](gettiffcompressiontypes%28__count_%29.md): Returns by indirection an array of all available compression types that can be used when writing a TIFF image.
- [localizedNameForTIFFCompressionType:](localizedname%28fortiffcompressiontype_%29.md): Returns an autoreleased string containing the localized name for the specified compression type.
- [canBeCompressedUsing:](canbecompressed%28using_%29.md): Tests whether the bitmap image representation can be compressed by the specified compression scheme.
- [setCompression:factor:](setcompression%28__factor_%29.md): Sets the bitmap image representation’s compression type and compression factor.
- [getCompression:factor:](getcompression%28__factor_%29.md): Returns by indirection the bitmap image representation’s compression type and compression factor.
- [setProperty:withValue:](setproperty%28__withvalue_%29.md): Sets the specified property of the bitmap image representation to the specified value.
- [valueForProperty:](value%28forproperty_%29.md): Returns the value for the specified property.
- [NSTIFFCompression](tiffcompression.md): Constants that represent the supported TIFF data-compression schemes.
