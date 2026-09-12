> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/image-properties](https://developer.apple.com/documentation/imageio/image-properties)

# Image Properties (Swift)

**Framework:** Image I/O  
**Kind:** API Collection

Properties that apply to the container in general, and not necessarily to an individual image in the container.

<a id="overview"></a>

## Overview

Access these properties using the [CGImageSourceCopyProperties(\_:\_:)](cgimagesourcecopyproperties%28____%29.md) function.

## Topics

### Dictionary

- [kCGImagePropertyFileContentsDictionary](kcgimagepropertyfilecontentsdictionary.md): A dictionary of properties related to the image’s on-disk file.

### Container File Size

- [kCGImagePropertyFileSize](kcgimagepropertyfilesize.md): The size of the image file in bytes, if known.

### Image Information

- [kCGImagePropertyImageCount](kcgimagepropertyimagecount.md): The number of images in the file.
- [kCGImagePropertyIsIndexed](kcgimagepropertyisindexed.md): A Boolean value that indicates whether the image contains indexed pixel samples.
- [kCGImagePropertyImages](kcgimagepropertyimages.md): An array of dictionaries, each of which contains metadata for one of the images in the file.
- [kCGImagePropertyThumbnailImages](kcgimagepropertythumbnailimages.md)
- [kCGImagePropertyPrimaryImage](kcgimagepropertyprimaryimage.md): The index of the primary image in the file.
- [kCGImagePropertyIsFloat](kcgimagepropertyisfloat.md): A Boolean value that indicates whether the image contains floating-point pixel samples.
- [kCGImagePropertyOrientation](kcgimagepropertyorientation.md): The intended display orientation of the image.
- [Individual Image Properties](individual-image-properties.md): Properties that apply to an individual image in an image source.
- [CGImagePropertyOrientation](cgimagepropertyorientation.md): A value describing the intended display orientation for an image.

### Pixel Information

- [kCGImagePropertyPixelFormat](kcgimagepropertypixelformat.md): The format of the image’s individual pixels.
- [kCGImagePropertyPixelWidth](kcgimagepropertypixelwidth.md): The number of pixels along the x-axis of the image.
- [kCGImagePropertyPixelHeight](kcgimagepropertypixelheight.md): The number of pixels along the y-axis of the image.
- [kCGImagePropertyDPIHeight](kcgimagepropertydpiheight.md): The resolution, in dots per inch, in the y dimension.
- [kCGImagePropertyDPIWidth](kcgimagepropertydpiwidth.md): The resolution, in dots per inch, in the x dimension.
- [kCGImagePropertyDepth](kcgimagepropertydepth.md): The number of bits in the color sample of a pixel.

### Color Information

- [kCGImagePropertyHasAlpha](kcgimagepropertyhasalpha.md): A Boolean value that indicates whether the image has an alpha channel.
- [kCGImagePropertyNamedColorSpace](kcgimagepropertynamedcolorspace.md): The name of the image’s color space.
- [kCGImagePropertyProfileName](kcgimagepropertyprofilename.md): The name of the optional International Color Consortium (ICC) profile embedded in the image, if known.
- [kCGImagePropertyColorModel](kcgimagepropertycolormodel.md): The color model of the image, such as RGB, CMYK, grayscale, or Lab.
- [kCGImagePropertyColorModelRGB](kcgimagepropertycolormodelrgb.md): A Red Green Blue (RGB) color model.
- [kCGImagePropertyColorModelCMYK](kcgimagepropertycolormodelcmyk.md): A Cyan Magenta Yellow Black (CMYK) color model.
- [kCGImagePropertyColorModelGray](kcgimagepropertycolormodelgray.md): A grayscale color model.
- [kCGImagePropertyColorModelLab](kcgimagepropertycolormodellab.md): A Lab color model, where color values contain the amount of light and the amounts of four human-perceivable colors.

## See Also

### Common Image Properties

- [EXIF Dictionary Keys](exif-dictionary-keys.md): Metadata keys for Exchangeable Image File Format (EXIF) data.
- [IPTC Dictionary Keys](iptc-dictionary-keys.md): Metadata keys for International Press Telecommunications Council (IPTC) data.
- [GPS Dictionary Keys](gps-dictionary-keys.md): Keys for Global Positioning System (GPS) information.
- [WebP Data](webp-data.md): Metadata keys for WebP metadata.

# Image Properties (Objective-C)

**Framework:** Image I/O  
**Kind:** API Collection

Properties that apply to the container in general, and not necessarily to an individual image in the container.

<a id="overview"></a>

## Overview

Access these properties using the [CGImageSourceCopyProperties](cgimagesourcecopyproperties%28____%29.md) function.

## Topics

### Dictionary

- [kCGImagePropertyFileContentsDictionary](kcgimagepropertyfilecontentsdictionary.md): A dictionary of properties related to the image’s on-disk file.

### Container File Size

- [kCGImagePropertyFileSize](kcgimagepropertyfilesize.md): The size of the image file in bytes, if known.

### Image Information

- [kCGImagePropertyImageCount](kcgimagepropertyimagecount.md): The number of images in the file.
- [kCGImagePropertyIsIndexed](kcgimagepropertyisindexed.md): A Boolean value that indicates whether the image contains indexed pixel samples.
- [kCGImagePropertyImages](kcgimagepropertyimages.md): An array of dictionaries, each of which contains metadata for one of the images in the file.
- [kCGImagePropertyThumbnailImages](kcgimagepropertythumbnailimages.md)
- [kCGImagePropertyPrimaryImage](kcgimagepropertyprimaryimage.md): The index of the primary image in the file.
- [kCGImagePropertyIsFloat](kcgimagepropertyisfloat.md): A Boolean value that indicates whether the image contains floating-point pixel samples.
- [kCGImagePropertyOrientation](kcgimagepropertyorientation.md): The intended display orientation of the image.
- [Individual Image Properties](individual-image-properties.md): Properties that apply to an individual image in an image source.
- [CGImagePropertyOrientation](cgimagepropertyorientation.md): A value describing the intended display orientation for an image.

### Pixel Information

- [kCGImagePropertyPixelFormat](kcgimagepropertypixelformat.md): The format of the image’s individual pixels.
- [kCGImagePropertyPixelWidth](kcgimagepropertypixelwidth.md): The number of pixels along the x-axis of the image.
- [kCGImagePropertyPixelHeight](kcgimagepropertypixelheight.md): The number of pixels along the y-axis of the image.
- [kCGImagePropertyDPIHeight](kcgimagepropertydpiheight.md): The resolution, in dots per inch, in the y dimension.
- [kCGImagePropertyDPIWidth](kcgimagepropertydpiwidth.md): The resolution, in dots per inch, in the x dimension.
- [kCGImagePropertyDepth](kcgimagepropertydepth.md): The number of bits in the color sample of a pixel.

### Color Information

- [kCGImagePropertyHasAlpha](kcgimagepropertyhasalpha.md): A Boolean value that indicates whether the image has an alpha channel.
- [kCGImagePropertyNamedColorSpace](kcgimagepropertynamedcolorspace.md): The name of the image’s color space.
- [kCGImagePropertyProfileName](kcgimagepropertyprofilename.md): The name of the optional International Color Consortium (ICC) profile embedded in the image, if known.
- [kCGImagePropertyColorModel](kcgimagepropertycolormodel.md): The color model of the image, such as RGB, CMYK, grayscale, or Lab.
- [kCGImagePropertyColorModelRGB](kcgimagepropertycolormodelrgb.md): A Red Green Blue (RGB) color model.
- [kCGImagePropertyColorModelCMYK](kcgimagepropertycolormodelcmyk.md): A Cyan Magenta Yellow Black (CMYK) color model.
- [kCGImagePropertyColorModelGray](kcgimagepropertycolormodelgray.md): A grayscale color model.
- [kCGImagePropertyColorModelLab](kcgimagepropertycolormodellab.md): A Lab color model, where color values contain the amount of light and the amounts of four human-perceivable colors.

## See Also

### Common Image Properties

- [EXIF Dictionary Keys](exif-dictionary-keys.md): Metadata keys for Exchangeable Image File Format (EXIF) data.
- [IPTC Dictionary Keys](iptc-dictionary-keys.md): Metadata keys for International Press Telecommunications Council (IPTC) data.
- [GPS Dictionary Keys](gps-dictionary-keys.md): Keys for Global Positioning System (GPS) information.
- [WebP Data](webp-data.md): Metadata keys for WebP metadata.
