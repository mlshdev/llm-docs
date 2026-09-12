> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbitmapimagerep](https://developer.apple.com/documentation/appkit/nsbitmapimagerep)

# NSBitmapImageRep (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An object that renders an image from bitmap data.

## Declaration

```swift
class NSBitmapImageRep
```

<a id="overview"></a>

## Overview

Supported bitmap data formats include GIF, JPEG, TIFF, PNG, and various permutations of raw bitmap data.

<a id="Alpha-Premultiplication-and-Bitmap-Formats"></a>

### Alpha Premultiplication and Bitmap Formats

When creating a bitmap using a premultiplied format, if a coverage (alpha) plane exists, the bitmap’s color components are premultiplied with it. In this case, if you modify the contents of the bitmap, you are therefore responsible for premultiplying the data. Note that premultiplying generally has negligible effect on output quality. For floating-point image data, premultiplying color components is a lossless operation, but for fixed-point image data, premultiplication can introduce small rounding errors. In either case, more rounding errors may appear when compositing many premultiplied images; however, such errors are generally not readily visible.

For this reason, you should not use an [NSBitmapImageRep](nsbitmapimagerep.md) object if you want to manipulate image data. To work with data that is not premultiplied, use the Core Graphics framework instead. (Specifically, create images using the [init(width:height:bitsPerComponent:bitsPerPixel:bytesPerRow:space:bitmapInfo:provider:decode:shouldInterpolate:intent:)](https://developer.apple.com/documentation/coregraphics/cgimage/init%28width:height:bitspercomponent:bitsperpixel:bytesperrow:space:bitmapinfo:provider:decode:shouldinterpolate:intent:%29) function and [CGImageAlphaInfo.last](https://developer.apple.com/documentation/coregraphics/cgimagealphainfo/last) parameter.) Alternatively, include the [NSAlphaNonpremultipliedBitmapFormat](nsalphanonpremultipliedbitmapformat.md) flag when creating the bitmap.

> **Note**

>  Use the `bitmapFormat` parameter to the [init(bitmapDataPlanes:pixelsWide:pixelsHigh:bitsPerSample:samplesPerPixel:hasAlpha:isPlanar:colorSpaceName:bitmapFormat:bytesPerRow:bitsPerPixel:)](nsbitmapimagerep/init%28bitmapdataplanes_pixelswide_pixelshigh_bitspersample_samplesperpixel_hasalpha_isplanar_colorspacename_bitmapformat_bytesperrow_bitsperpixel_%29.md) method to specify the format for creating a bitmap. When creating or retrieving a bitmap with other methods, the bitmap format depends on the original source of the image data. Check the [bitmapFormat](nsbitmapimagerep/bitmapformat.md) property before working with image data.

## Topics

### Creating Bitmap Representations of Images

- [imageReps(with:)](nsbitmapimagerep/imagereps%28with_%29.md): Creates and returns an array of bitmap image representation objects that correspond to the images in the specified data.
- [colorize(byMappingGray:to:blackMapping:whiteMapping:)](nsbitmapimagerep/colorize%28bymappinggray_to_blackmapping_whitemapping_%29.md): Colorizes a grayscale image.
- [init(bitmapDataPlanes:pixelsWide:pixelsHigh:bitsPerSample:samplesPerPixel:hasAlpha:isPlanar:colorSpaceName:bitmapFormat:bytesPerRow:bitsPerPixel:)](nsbitmapimagerep/init%28bitmapdataplanes_pixelswide_pixelshigh_bitspersample_samplesperpixel_hasalpha_isplanar_colorspacename_bitmapformat_bytesperrow_bitsperpixel_%29.md): Initializes a newly allocated bitmap image representation so it can render the specified image.
- [init(bitmapDataPlanes:pixelsWide:pixelsHigh:bitsPerSample:samplesPerPixel:hasAlpha:isPlanar:colorSpaceName:bytesPerRow:bitsPerPixel:)](nsbitmapimagerep/init%28bitmapdataplanes_pixelswide_pixelshigh_bitspersample_samplesperpixel_hasalpha_isplanar_colorspacename_bytesperrow_bitsperpixel_%29.md): Initializes a newly allocated bitmap image representation so it can render the specified image.
- [init(cgImage:)](nsbitmapimagerep/init%28cgimage_%29-7o5tz.md): Returns a bitmap image representation from a Core Graphics image object.
- [init(ciImage:)](nsbitmapimagerep/init%28ciimage_%29-7bi19.md): Returns a bitmap image representation from a Core Image object.
- [init(data:)](nsbitmapimagerep/init%28data_%29.md): Initializes a newly allocated bitmap image representation from the specified data.
- [init(forIncrementalLoad:)](nsbitmapimagerep/init%28forincrementalload_%29.md): Initializes a newly allocated bitmap image representation for incremental loading.
- [init(focusedViewRect:)](nsbitmapimagerep/init%28focusedviewrect_%29.md): Deprecated. Initializes a newly allocated bitmap image representation with bitmap data from a rendered image.

### Getting Information About Images

- [bitmapFormat](nsbitmapimagerep/bitmapformat.md): The format of the bitmap image representation.
- [NSBitmapImageRep.Format](nsbitmapimagerep/format.md): Constants that represent bitmap component formats.
- [bitsPerPixel](nsbitmapimagerep/bitsperpixel.md): The number of bits allocated for each pixel in each plane of data.
- [bytesPerPlane](nsbitmapimagerep/bytesperplane.md): The number of bytes in each plane or channel of data.
- [bytesPerRow](nsbitmapimagerep/bytesperrow.md): The minimum number of bytes required to specify a scan line in each data plane.
- [isPlanar](nsbitmapimagerep/isplanar.md): A Boolean value that indicates whether the image data is in a planar configuration.
- [numberOfPlanes](nsbitmapimagerep/numberofplanes.md): The number of separate planes into which the image data is organized.
- [samplesPerPixel](nsbitmapimagerep/samplesperpixel.md): The number of components for each pixel.

### Getting the Bitmap Data

- [bitmapData](nsbitmapimagerep/bitmapdata.md): A pointer to the bitmap data.
- [getBitmapDataPlanes(\_:)](nsbitmapimagerep/getbitmapdataplanes%28__%29.md): Returns by indirection bitmap data of the bitmap image representation separated into planes.

### Producing Other Representations of Images

- [tiffRepresentationOfImageReps(in:)](nsbitmapimagerep/tiffrepresentationofimagereps%28in_%29.md): Returns a TIFF representation of the specified images.
- [tiffRepresentationOfImageReps(in:using:factor:)](nsbitmapimagerep/tiffrepresentationofimagereps%28in_using_factor_%29.md): Returns a TIFF representation of the specified images using the specified compression scheme and factor.
- [tiffRepresentation](nsbitmapimagerep/tiffrepresentation.md): A TIFF representation of the bitmap image data.
- [tiffRepresentation(using:factor:)](nsbitmapimagerep/tiffrepresentation%28using_factor_%29.md): Returns a TIFF representation of the image using the specified compression.
- [representationOfImageReps(in:using:properties:)](nsbitmapimagerep/representationofimagereps%28in_using_properties_%29.md): Formats the specified bitmap images using the specified storage type and properties and returns them in a data object.
- [representation(using:properties:)](nsbitmapimagerep/representation%28using_properties_%29.md): Formats the bitmap representation’s image data using the specified storage type and properties and returns it in a data object.
- [NSDrawBitmap(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](nsdrawbitmap%28______________________%29.md): Draws a bitmap image.

### Managing Compression Types

- [getTIFFCompressionTypes(\_:count:)](nsbitmapimagerep/gettiffcompressiontypes%28__count_%29.md): Returns by indirection an array of all available compression types that can be used when writing a TIFF image.
- [localizedName(forTIFFCompressionType:)](nsbitmapimagerep/localizedname%28fortiffcompressiontype_%29.md): Returns an autoreleased string containing the localized name for the specified compression type.
- [canBeCompressed(using:)](nsbitmapimagerep/canbecompressed%28using_%29.md): Tests whether the bitmap image representation can be compressed by the specified compression scheme.
- [setCompression(\_:factor:)](nsbitmapimagerep/setcompression%28__factor_%29.md): Sets the bitmap image representation’s compression type and compression factor.
- [getCompression(\_:factor:)](nsbitmapimagerep/getcompression%28__factor_%29.md): Returns by indirection the bitmap image representation’s compression type and compression factor.
- [setProperty(\_:withValue:)](nsbitmapimagerep/setproperty%28__withvalue_%29.md): Sets the specified property of the bitmap image representation to the specified value.
- [value(forProperty:)](nsbitmapimagerep/value%28forproperty_%29.md): Returns the value for the specified property.
- [NSBitmapImageRep.TIFFCompression](nsbitmapimagerep/tiffcompression.md): Constants that represent the supported TIFF data-compression schemes.
- [NSBitmapImageRep.PropertyKey](nsbitmapimagerep/propertykey.md): Constants that identify bitmap image representation properties.

### Loading Images Incrementally

- [incrementalLoad(from:complete:)](nsbitmapimagerep/incrementalload%28from_complete_%29.md): Loads the current image data into an incrementally-loaded image representation and returns the current status of the image.
- [NSBitmapImageRep.LoadStatus](nsbitmapimagerep/loadstatus.md): Constants that identify the loading status of the image.

### Managing Pixel Values

- [setColor(\_:atX:y:)](nsbitmapimagerep/setcolor%28__atx_y_%29.md): Changes the color of the pixel at the specified coordinates.
- [colorAt(x:y:)](nsbitmapimagerep/colorat%28x_y_%29.md): Returns the color of the pixel at the specified coordinates.
- [setPixel(\_:atX:y:)](nsbitmapimagerep/setpixel%28__atx_y_%29.md): Sets the bitmap image representation’s pixel at the specified coordinates to the specified raw pixel values.
- [getPixel(\_:atX:y:)](nsbitmapimagerep/getpixel%28__atx_y_%29.md): Returns by indirection the pixel data for the specified location in the bitmap image representation.

### Getting Core Graphics Images

- [cgImage](nsbitmapimagerep/cgimage.md): A Core Graphics image object based on the bitmap image representation’s data.

### Managing Color Spaces

- [converting(to:renderingIntent:)](nsbitmapimagerep/converting%28to_renderingintent_%29.md): Converts the bitmap image representation to the specified color space.
- [retagging(with:)](nsbitmapimagerep/retagging%28with_%29.md): Changes the color space tag of the bitmap image representation.
- [colorSpace](nsbitmapimagerep/colorspace.md): The color space of the bitmap.

### Constants

- [NSBitmapImageRep.FileType](nsbitmapimagerep/filetype.md): Constants that specify bitmap file types.

### Initializers

- [init(CGImage:)](nsbitmapimagerep/init%28cgimage_%29-4e6yc.md)
- [init(CIImage:)](nsbitmapimagerep/init%28ciimage_%29-4ouvw.md)

## Relationships

### Inherits From

- [NSImageRep](nsimagerep.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Bitmap Formats

- [NSCIImageRep](nsciimagerep.md): An object that can render an image from a Core Image object.
- [NSPICTImageRep](nspictimagerep.md): An object that renders an image from a PICT format data stream of version 1, version 2, and extended version 2.

# NSBitmapImageRep (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An object that renders an image from bitmap data.

## Declaration

```objectivec
@interface NSBitmapImageRep : NSImageRep
```

<a id="overview"></a>

## Overview

Supported bitmap data formats include GIF, JPEG, TIFF, PNG, and various permutations of raw bitmap data.

<a id="Alpha-Premultiplication-and-Bitmap-Formats"></a>

### Alpha Premultiplication and Bitmap Formats

When creating a bitmap using a premultiplied format, if a coverage (alpha) plane exists, the bitmap’s color components are premultiplied with it. In this case, if you modify the contents of the bitmap, you are therefore responsible for premultiplying the data. Note that premultiplying generally has negligible effect on output quality. For floating-point image data, premultiplying color components is a lossless operation, but for fixed-point image data, premultiplication can introduce small rounding errors. In either case, more rounding errors may appear when compositing many premultiplied images; however, such errors are generally not readily visible.

For this reason, you should not use an [NSBitmapImageRep](nsbitmapimagerep.md) object if you want to manipulate image data. To work with data that is not premultiplied, use the Core Graphics framework instead. (Specifically, create images using the [CGImageCreate](https://developer.apple.com/documentation/coregraphics/cgimage/init%28width:height:bitspercomponent:bitsperpixel:bytesperrow:space:bitmapinfo:provider:decode:shouldinterpolate:intent:%29) function and [kCGImageAlphaLast](https://developer.apple.com/documentation/coregraphics/cgimagealphainfo/last) parameter.) Alternatively, include the [NSAlphaNonpremultipliedBitmapFormat](nsalphanonpremultipliedbitmapformat.md) flag when creating the bitmap.

> **Note**

>  Use the `bitmapFormat` parameter to the [initWithBitmapDataPlanes:pixelsWide:pixelsHigh:bitsPerSample:samplesPerPixel:hasAlpha:isPlanar:colorSpaceName:bitmapFormat:bytesPerRow:bitsPerPixel:](nsbitmapimagerep/init%28bitmapdataplanes_pixelswide_pixelshigh_bitspersample_samplesperpixel_hasalpha_isplanar_colorspacename_bitmapformat_bytesperrow_bitsperpixel_%29.md) method to specify the format for creating a bitmap. When creating or retrieving a bitmap with other methods, the bitmap format depends on the original source of the image data. Check the [bitmapFormat](nsbitmapimagerep/bitmapformat.md) property before working with image data.

## Topics

### Creating Bitmap Representations of Images

- [imageRepWithData:](nsbitmapimagerep/imagerepwithdata_.md): Creates and returns a bitmap image representation with the first image in the specified data.
- [imageRepsWithData:](nsbitmapimagerep/imagereps%28with_%29.md): Creates and returns an array of bitmap image representation objects that correspond to the images in the specified data.
- [colorizeByMappingGray:toColor:blackMapping:whiteMapping:](nsbitmapimagerep/colorize%28bymappinggray_to_blackmapping_whitemapping_%29.md): Colorizes a grayscale image.
- [initWithBitmapDataPlanes:pixelsWide:pixelsHigh:bitsPerSample:samplesPerPixel:hasAlpha:isPlanar:colorSpaceName:bitmapFormat:bytesPerRow:bitsPerPixel:](nsbitmapimagerep/init%28bitmapdataplanes_pixelswide_pixelshigh_bitspersample_samplesperpixel_hasalpha_isplanar_colorspacename_bitmapformat_bytesperrow_bitsperpixel_%29.md): Initializes a newly allocated bitmap image representation so it can render the specified image.
- [initWithBitmapDataPlanes:pixelsWide:pixelsHigh:bitsPerSample:samplesPerPixel:hasAlpha:isPlanar:colorSpaceName:bytesPerRow:bitsPerPixel:](nsbitmapimagerep/init%28bitmapdataplanes_pixelswide_pixelshigh_bitspersample_samplesperpixel_hasalpha_isplanar_colorspacename_bytesperrow_bitsperpixel_%29.md): Initializes a newly allocated bitmap image representation so it can render the specified image.
- [initWithCGImage:](nsbitmapimagerep/init%28cgimage_%29-7o5tz.md): Returns a bitmap image representation from a Core Graphics image object.
- [initWithCIImage:](nsbitmapimagerep/init%28ciimage_%29-7bi19.md): Returns a bitmap image representation from a Core Image object.
- [initWithData:](nsbitmapimagerep/init%28data_%29.md): Initializes a newly allocated bitmap image representation from the specified data.
- [initForIncrementalLoad](nsbitmapimagerep/init%28forincrementalload_%29.md): Initializes a newly allocated bitmap image representation for incremental loading.
- [initWithFocusedViewRect:](nsbitmapimagerep/init%28focusedviewrect_%29.md): Deprecated. Initializes a newly allocated bitmap image representation with bitmap data from a rendered image.

### Getting Information About Images

- [bitmapFormat](nsbitmapimagerep/bitmapformat.md): The format of the bitmap image representation.
- [NSBitmapFormat](nsbitmapimagerep/format.md): Constants that represent bitmap component formats.
- [bitsPerPixel](nsbitmapimagerep/bitsperpixel.md): The number of bits allocated for each pixel in each plane of data.
- [bytesPerPlane](nsbitmapimagerep/bytesperplane.md): The number of bytes in each plane or channel of data.
- [bytesPerRow](nsbitmapimagerep/bytesperrow.md): The minimum number of bytes required to specify a scan line in each data plane.
- [planar](nsbitmapimagerep/isplanar.md): A Boolean value that indicates whether the image data is in a planar configuration.
- [numberOfPlanes](nsbitmapimagerep/numberofplanes.md): The number of separate planes into which the image data is organized.
- [samplesPerPixel](nsbitmapimagerep/samplesperpixel.md): The number of components for each pixel.

### Getting the Bitmap Data

- [bitmapData](nsbitmapimagerep/bitmapdata.md): A pointer to the bitmap data.
- [getBitmapDataPlanes:](nsbitmapimagerep/getbitmapdataplanes%28__%29.md): Returns by indirection bitmap data of the bitmap image representation separated into planes.

### Producing Other Representations of Images

- [TIFFRepresentationOfImageRepsInArray:](nsbitmapimagerep/tiffrepresentationofimagereps%28in_%29.md): Returns a TIFF representation of the specified images.
- [TIFFRepresentationOfImageRepsInArray:usingCompression:factor:](nsbitmapimagerep/tiffrepresentationofimagereps%28in_using_factor_%29.md): Returns a TIFF representation of the specified images using the specified compression scheme and factor.
- [TIFFRepresentation](nsbitmapimagerep/tiffrepresentation.md): A TIFF representation of the bitmap image data.
- [TIFFRepresentationUsingCompression:factor:](nsbitmapimagerep/tiffrepresentation%28using_factor_%29.md): Returns a TIFF representation of the image using the specified compression.
- [representationOfImageRepsInArray:usingType:properties:](nsbitmapimagerep/representationofimagereps%28in_using_properties_%29.md): Formats the specified bitmap images using the specified storage type and properties and returns them in a data object.
- [representationUsingType:properties:](nsbitmapimagerep/representation%28using_properties_%29.md): Formats the bitmap representation’s image data using the specified storage type and properties and returns it in a data object.
- [NSDrawBitmap](nsdrawbitmap%28______________________%29.md): Draws a bitmap image.

### Managing Compression Types

- [getTIFFCompressionTypes:count:](nsbitmapimagerep/gettiffcompressiontypes%28__count_%29.md): Returns by indirection an array of all available compression types that can be used when writing a TIFF image.
- [localizedNameForTIFFCompressionType:](nsbitmapimagerep/localizedname%28fortiffcompressiontype_%29.md): Returns an autoreleased string containing the localized name for the specified compression type.
- [canBeCompressedUsing:](nsbitmapimagerep/canbecompressed%28using_%29.md): Tests whether the bitmap image representation can be compressed by the specified compression scheme.
- [setCompression:factor:](nsbitmapimagerep/setcompression%28__factor_%29.md): Sets the bitmap image representation’s compression type and compression factor.
- [getCompression:factor:](nsbitmapimagerep/getcompression%28__factor_%29.md): Returns by indirection the bitmap image representation’s compression type and compression factor.
- [setProperty:withValue:](nsbitmapimagerep/setproperty%28__withvalue_%29.md): Sets the specified property of the bitmap image representation to the specified value.
- [valueForProperty:](nsbitmapimagerep/value%28forproperty_%29.md): Returns the value for the specified property.
- [NSTIFFCompression](nsbitmapimagerep/tiffcompression.md): Constants that represent the supported TIFF data-compression schemes.
- [NSBitmapImageRepPropertyKey](nsbitmapimagerep/propertykey.md): Constants that identify bitmap image representation properties.

### Loading Images Incrementally

- [incrementalLoadFromData:complete:](nsbitmapimagerep/incrementalload%28from_complete_%29.md): Loads the current image data into an incrementally-loaded image representation and returns the current status of the image.
- [NSImageRepLoadStatus](nsbitmapimagerep/loadstatus.md): Constants that identify the loading status of the image.

### Managing Pixel Values

- [setColor:atX:y:](nsbitmapimagerep/setcolor%28__atx_y_%29.md): Changes the color of the pixel at the specified coordinates.
- [colorAtX:y:](nsbitmapimagerep/colorat%28x_y_%29.md): Returns the color of the pixel at the specified coordinates.
- [setPixel:atX:y:](nsbitmapimagerep/setpixel%28__atx_y_%29.md): Sets the bitmap image representation’s pixel at the specified coordinates to the specified raw pixel values.
- [getPixel:atX:y:](nsbitmapimagerep/getpixel%28__atx_y_%29.md): Returns by indirection the pixel data for the specified location in the bitmap image representation.

### Getting Core Graphics Images

- [CGImage](nsbitmapimagerep/cgimage.md): A Core Graphics image object based on the bitmap image representation’s data.

### Managing Color Spaces

- [bitmapImageRepByConvertingToColorSpace:renderingIntent:](nsbitmapimagerep/converting%28to_renderingintent_%29.md): Converts the bitmap image representation to the specified color space.
- [bitmapImageRepByRetaggingWithColorSpace:](nsbitmapimagerep/retagging%28with_%29.md): Changes the color space tag of the bitmap image representation.
- [colorSpace](nsbitmapimagerep/colorspace.md): The color space of the bitmap.

### Constants

- [NSBitmapImageFileType](nsbitmapimagerep/filetype.md): Constants that specify bitmap file types.

## Relationships

### Inherits From

- [NSImageRep](nsimagerep.md)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Bitmap Formats

- [NSCIImageRep](nsciimagerep.md): An object that can render an image from a Core Image object.
- [NSPICTImageRep](nspictimagerep.md): An object that renders an image from a PICT format data stream of version 1, version 2, and extended version 2.
