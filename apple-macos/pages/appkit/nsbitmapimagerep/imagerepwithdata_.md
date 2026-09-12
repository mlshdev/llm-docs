> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbitmapimagerep/imagerepwithdata:](https://developer.apple.com/documentation/appkit/nsbitmapimagerep/imagerepwithdata:)

# imageRepWithData:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Creates and returns a bitmap image representation with the first image in the specified data.

## Declaration

```objectivec
+ (instancetype) imageRepWithData:(NSData *) data;
```

## Parameters

- `data`: A data object containing one or more bitmapped images. The `bitmapData` parameter can contain data in any supported bitmap format.

<a id="return-value"></a>

## Return Value

An [NSBitmapImageRep](../nsbitmapimagerep.md) instance or `nil` if the class is unable to create an image representation.

## See Also

### Creating Bitmap Representations of Images

- [imageRepsWithData:](imagereps%28with_%29.md): Creates and returns an array of bitmap image representation objects that correspond to the images in the specified data.
- [colorizeByMappingGray:toColor:blackMapping:whiteMapping:](colorize%28bymappinggray_to_blackmapping_whitemapping_%29.md): Colorizes a grayscale image.
- [initWithBitmapDataPlanes:pixelsWide:pixelsHigh:bitsPerSample:samplesPerPixel:hasAlpha:isPlanar:colorSpaceName:bitmapFormat:bytesPerRow:bitsPerPixel:](init%28bitmapdataplanes_pixelswide_pixelshigh_bitspersample_samplesperpixel_hasalpha_isplanar_colorspacename_bitmapformat_bytesperrow_bitsperpixel_%29.md): Initializes a newly allocated bitmap image representation so it can render the specified image.
- [initWithBitmapDataPlanes:pixelsWide:pixelsHigh:bitsPerSample:samplesPerPixel:hasAlpha:isPlanar:colorSpaceName:bytesPerRow:bitsPerPixel:](init%28bitmapdataplanes_pixelswide_pixelshigh_bitspersample_samplesperpixel_hasalpha_isplanar_colorspacename_bytesperrow_bitsperpixel_%29.md): Initializes a newly allocated bitmap image representation so it can render the specified image.
- [initWithCGImage:](init%28cgimage_%29-7o5tz.md): Returns a bitmap image representation from a Core Graphics image object.
- [initWithCIImage:](init%28ciimage_%29-7bi19.md): Returns a bitmap image representation from a Core Image object.
- [initWithData:](init%28data_%29.md): Initializes a newly allocated bitmap image representation from the specified data.
- [initForIncrementalLoad](init%28forincrementalload_%29.md): Initializes a newly allocated bitmap image representation for incremental loading.
- [initWithFocusedViewRect:](init%28focusedviewrect_%29.md): Deprecated. Initializes a newly allocated bitmap image representation with bitmap data from a rendered image.
