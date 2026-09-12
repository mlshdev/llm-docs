> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/png-image-properties](https://developer.apple.com/documentation/imageio/png-image-properties)

# PNG Image Properties (Swift)

**Framework:** Image I/O  
**Kind:** API Collection

Metadata keys for the Portable Network Graphics (PNG) format.

## Topics

### Dictionary

- [kCGImagePropertyPNGDictionary](kcgimagepropertypngdictionary.md): A dictionary of key-value pairs for an image that uses Portable Network Graphics (PNG) format.

### Properties

- [kCGImagePropertyPNGSource](kcgimagepropertypngsource.md)

### Image Properties

- [kCGImagePropertyAPNGCanvasPixelHeight](kcgimagepropertyapngcanvaspixelheight.md): The height of the main image, in pixels.
- [kCGImagePropertyAPNGCanvasPixelWidth](kcgimagepropertyapngcanvaspixelwidth.md): The width of the main image, in pixels.
- [kCGImagePropertyPNGXPixelsPerMeter](kcgimagepropertypngxpixelspermeter.md): The number of x pixels per meter.
- [kCGImagePropertyPNGYPixelsPerMeter](kcgimagepropertypngypixelspermeter.md): The number of y pixels per meter.
- [kCGImagePropertyPNGGamma](kcgimagepropertypnggamma.md): The gamma value.
- [kCGImagePropertyPNGInterlaceType](kcgimagepropertypnginterlacetype.md): The interlace type.
- [kCGImagePropertyPNGsRGBIntent](kcgimagepropertypngsrgbintent.md): The sRGB intent.
- [kCGImagePropertyPNGChromaticities](kcgimagepropertypngchromaticities.md): The chromaticities.

### Sequence Timing

- [kCGImagePropertyAPNGFrameInfoArray](kcgimagepropertyapngframeinfoarray.md): An array of dictionaries that contain timing information for the image sequence.
- [kCGImagePropertyAPNGDelayTime](kcgimagepropertyapngdelaytime.md): The number of seconds to wait before displaying the next image in an animated sequence.
- [kCGImagePropertyAPNGUnclampedDelayTime](kcgimagepropertyapngunclampeddelaytime.md): The number of seconds to wait before displaying the next image in an animated sequence.
- [kCGImagePropertyAPNGLoopCount](kcgimagepropertyapngloopcount.md): The number of times that an animated PNG should play through its frames before stopping.

### Descriptive Information

- [kCGImagePropertyPNGTitle](kcgimagepropertypngtitle.md): A string that holds the image’s title.
- [kCGImagePropertyPNGDescription](kcgimagepropertypngdescription.md): A string that describes the image.
- [kCGImagePropertyPNGComment](kcgimagepropertypngcomment.md): A string that contains image comments.
- [kCGImagePropertyPNGDisclaimer](kcgimagepropertypngdisclaimer.md): A disclaimer string.
- [kCGImagePropertyPNGWarning](kcgimagepropertypngwarning.md): A warning string.
- [kCGImagePropertyPNGAuthor](kcgimagepropertypngauthor.md): A string that identifies the author of the image.
- [kCGImagePropertyPNGCopyright](kcgimagepropertypngcopyright.md): A string that identifies the copyright of the image.
- [kCGImagePropertyPNGCreationTime](kcgimagepropertypngcreationtime.md): A string that identifies the date and time the image was created.
- [kCGImagePropertyPNGModificationTime](kcgimagepropertypngmodificationtime.md): A string that identifies the last date and time the image was modified.
- [kCGImagePropertyPNGSoftware](kcgimagepropertypngsoftware.md): A string that identifies the software used to create the image.

### Pre-Compression Filters

- [kCGImagePropertyPNGCompressionFilter](kcgimagepropertypngcompressionfilter.md): The PNG filter to apply prior to compression.
- [IMAGEIO_PNG_NO_FILTERS](imageio_png_no_filters.md): No PNG filters.
- [IMAGEIO_PNG_FILTER_NONE](imageio_png_filter_none.md): A filter in which each byte is unchanged.
- [IMAGEIO_PNG_FILTER_SUB](imageio_png_filter_sub.md): A filter in which each byte is replaced with the difference between it and the corresponding byte to its left.
- [IMAGEIO_PNG_FILTER_UP](imageio_png_filter_up.md): A filter in which each byte is replaced with the difference between it and the byte above it.
- [IMAGEIO_PNG_FILTER_AVG](imageio_png_filter_avg.md): A filter in which each byte is replaced with the difference between it and the average of the bytes above it and to its left.
- [IMAGEIO_PNG_FILTER_PAETH](imageio_png_filter_paeth.md): A filter in which each byte is replaced with the difference between it and the Paeth predictor of the bytes to its left, above, and upper left.

## See Also

### Format-Specific Properties

- [CIFF Image Properties](ciff-image-properties.md): Metadata keys for the Camera Image File Format (CIFF) image format.
- [DNG Image Properties](dng-image-properties.md): Metadata keys for the Digital Negative (DNG) archival format.
- [GIF Image Properties](gif-image-properties.md): Metadata keys for the Graphics Interchange Format (GIF).
- [HEIC Image Properties](heic-image-properties.md): Metadata keys for the High Efficiency Image Container (HEIC) format.
- [JFIF Image Properties](jfif-image-properties.md): Metadata keys for the JPEG File Interchange Format (JFIF).
- [TGA Image Properties](tga-image-properties.md): Metadata keys for the Truevision Graphics Adapter (TGA) format.
- [TIFF Image Properties](tiff-image-properties.md): Metadata keys for the Tagged Image File Format (TIFF).
- [8BIM Image Properties](8bim-image-properties.md): Metadata keys for the Adobe Photoshop image format.

# PNG Image Properties (Objective-C)

**Framework:** Image I/O  
**Kind:** API Collection

Metadata keys for the Portable Network Graphics (PNG) format.

## Topics

### Dictionary

- [kCGImagePropertyPNGDictionary](kcgimagepropertypngdictionary.md): A dictionary of key-value pairs for an image that uses Portable Network Graphics (PNG) format.

### Properties

- [kCGImagePropertyPNGSource](kcgimagepropertypngsource.md)

### Image Properties

- [kCGImagePropertyAPNGCanvasPixelHeight](kcgimagepropertyapngcanvaspixelheight.md): The height of the main image, in pixels.
- [kCGImagePropertyAPNGCanvasPixelWidth](kcgimagepropertyapngcanvaspixelwidth.md): The width of the main image, in pixels.
- [kCGImagePropertyPNGXPixelsPerMeter](kcgimagepropertypngxpixelspermeter.md): The number of x pixels per meter.
- [kCGImagePropertyPNGYPixelsPerMeter](kcgimagepropertypngypixelspermeter.md): The number of y pixels per meter.
- [kCGImagePropertyPNGGamma](kcgimagepropertypnggamma.md): The gamma value.
- [kCGImagePropertyPNGInterlaceType](kcgimagepropertypnginterlacetype.md): The interlace type.
- [kCGImagePropertyPNGsRGBIntent](kcgimagepropertypngsrgbintent.md): The sRGB intent.
- [kCGImagePropertyPNGChromaticities](kcgimagepropertypngchromaticities.md): The chromaticities.

### Sequence Timing

- [kCGImagePropertyAPNGFrameInfoArray](kcgimagepropertyapngframeinfoarray.md): An array of dictionaries that contain timing information for the image sequence.
- [kCGImagePropertyAPNGDelayTime](kcgimagepropertyapngdelaytime.md): The number of seconds to wait before displaying the next image in an animated sequence.
- [kCGImagePropertyAPNGUnclampedDelayTime](kcgimagepropertyapngunclampeddelaytime.md): The number of seconds to wait before displaying the next image in an animated sequence.
- [kCGImagePropertyAPNGLoopCount](kcgimagepropertyapngloopcount.md): The number of times that an animated PNG should play through its frames before stopping.

### Descriptive Information

- [kCGImagePropertyPNGTitle](kcgimagepropertypngtitle.md): A string that holds the image’s title.
- [kCGImagePropertyPNGDescription](kcgimagepropertypngdescription.md): A string that describes the image.
- [kCGImagePropertyPNGComment](kcgimagepropertypngcomment.md): A string that contains image comments.
- [kCGImagePropertyPNGDisclaimer](kcgimagepropertypngdisclaimer.md): A disclaimer string.
- [kCGImagePropertyPNGWarning](kcgimagepropertypngwarning.md): A warning string.
- [kCGImagePropertyPNGAuthor](kcgimagepropertypngauthor.md): A string that identifies the author of the image.
- [kCGImagePropertyPNGCopyright](kcgimagepropertypngcopyright.md): A string that identifies the copyright of the image.
- [kCGImagePropertyPNGCreationTime](kcgimagepropertypngcreationtime.md): A string that identifies the date and time the image was created.
- [kCGImagePropertyPNGModificationTime](kcgimagepropertypngmodificationtime.md): A string that identifies the last date and time the image was modified.
- [kCGImagePropertyPNGSoftware](kcgimagepropertypngsoftware.md): A string that identifies the software used to create the image.

### Pre-Compression Filters

- [kCGImagePropertyPNGCompressionFilter](kcgimagepropertypngcompressionfilter.md): The PNG filter to apply prior to compression.
- [IMAGEIO_PNG_NO_FILTERS](imageio_png_no_filters.md): No PNG filters.
- [IMAGEIO_PNG_FILTER_NONE](imageio_png_filter_none.md): A filter in which each byte is unchanged.
- [IMAGEIO_PNG_FILTER_SUB](imageio_png_filter_sub.md): A filter in which each byte is replaced with the difference between it and the corresponding byte to its left.
- [IMAGEIO_PNG_FILTER_UP](imageio_png_filter_up.md): A filter in which each byte is replaced with the difference between it and the byte above it.
- [IMAGEIO_PNG_FILTER_AVG](imageio_png_filter_avg.md): A filter in which each byte is replaced with the difference between it and the average of the bytes above it and to its left.
- [IMAGEIO_PNG_FILTER_PAETH](imageio_png_filter_paeth.md): A filter in which each byte is replaced with the difference between it and the Paeth predictor of the bytes to its left, above, and upper left.
- [IMAGEIO_PNG_ALL_FILTERS](imageio_png_all_filters.md): All PNG filters.

## See Also

### Format-Specific Properties

- [CIFF Image Properties](ciff-image-properties.md): Metadata keys for the Camera Image File Format (CIFF) image format.
- [DNG Image Properties](dng-image-properties.md): Metadata keys for the Digital Negative (DNG) archival format.
- [GIF Image Properties](gif-image-properties.md): Metadata keys for the Graphics Interchange Format (GIF).
- [HEIC Image Properties](heic-image-properties.md): Metadata keys for the High Efficiency Image Container (HEIC) format.
- [JFIF Image Properties](jfif-image-properties.md): Metadata keys for the JPEG File Interchange Format (JFIF).
- [TGA Image Properties](tga-image-properties.md): Metadata keys for the Truevision Graphics Adapter (TGA) format.
- [TIFF Image Properties](tiff-image-properties.md): Metadata keys for the Tagged Image File Format (TIFF).
- [8BIM Image Properties](8bim-image-properties.md): Metadata keys for the Adobe Photoshop image format.
