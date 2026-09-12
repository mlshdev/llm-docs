> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbitmapimagerep/init(data:)](https://developer.apple.com/documentation/appkit/nsbitmapimagerep/init(data:))

# init(data:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Initializes a newly allocated bitmap image representation from the specified data.

## Declaration

```swift
init?(data: Data)
```

## Parameters

- `data`: A data object containing image data. The contents of `bitmapData` can be any supported bitmap format. For TIFF data, the [NSBitmapImageRep](../nsbitmapimagerep.md) is initialized from the first header and image data found in `bitmapData`.

<a id="return-value"></a>

## Return Value

Returns an initialized [NSBitmapImageRep](../nsbitmapimagerep.md) if the initialization was successful or `nil` if it was unable to interpret the contents of `bitmapData`.

## See Also

### Creating Bitmap Representations of Images

- [imageReps(with:)](imagereps%28with_%29.md): Creates and returns an array of bitmap image representation objects that correspond to the images in the specified data.
- [colorize(byMappingGray:to:blackMapping:whiteMapping:)](colorize%28bymappinggray_to_blackmapping_whitemapping_%29.md): Colorizes a grayscale image.
- [init(bitmapDataPlanes:pixelsWide:pixelsHigh:bitsPerSample:samplesPerPixel:hasAlpha:isPlanar:colorSpaceName:bitmapFormat:bytesPerRow:bitsPerPixel:)](init%28bitmapdataplanes_pixelswide_pixelshigh_bitspersample_samplesperpixel_hasalpha_isplanar_colorspacename_bitmapformat_bytesperrow_bitsperpixel_%29.md): Initializes a newly allocated bitmap image representation so it can render the specified image.
- [init(bitmapDataPlanes:pixelsWide:pixelsHigh:bitsPerSample:samplesPerPixel:hasAlpha:isPlanar:colorSpaceName:bytesPerRow:bitsPerPixel:)](init%28bitmapdataplanes_pixelswide_pixelshigh_bitspersample_samplesperpixel_hasalpha_isplanar_colorspacename_bytesperrow_bitsperpixel_%29.md): Initializes a newly allocated bitmap image representation so it can render the specified image.
- [init(cgImage:)](init%28cgimage_%29-7o5tz.md): Returns a bitmap image representation from a Core Graphics image object.
- [init(ciImage:)](init%28ciimage_%29-7bi19.md): Returns a bitmap image representation from a Core Image object.
- [init(forIncrementalLoad:)](init%28forincrementalload_%29.md): Initializes a newly allocated bitmap image representation for incremental loading.
- [init(focusedViewRect:)](init%28focusedviewrect_%29.md): Deprecated. Initializes a newly allocated bitmap image representation with bitmap data from a rendered image.

# initWithData: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Initializes a newly allocated bitmap image representation from the specified data.

## Declaration

```objectivec
- (instancetype) initWithData:(NSData *) data;
```

## Parameters

- `data`: A data object containing image data. The contents of `bitmapData` can be any supported bitmap format. For TIFF data, the [NSBitmapImageRep](../nsbitmapimagerep.md) is initialized from the first header and image data found in `bitmapData`.

<a id="return-value"></a>

## Return Value

Returns an initialized [NSBitmapImageRep](../nsbitmapimagerep.md) if the initialization was successful or `nil` if it was unable to interpret the contents of `bitmapData`.

## See Also

### Creating Bitmap Representations of Images

- [imageRepWithData:](imagerepwithdata_.md): Creates and returns a bitmap image representation with the first image in the specified data.
- [imageRepsWithData:](imagereps%28with_%29.md): Creates and returns an array of bitmap image representation objects that correspond to the images in the specified data.
- [colorizeByMappingGray:toColor:blackMapping:whiteMapping:](colorize%28bymappinggray_to_blackmapping_whitemapping_%29.md): Colorizes a grayscale image.
- [initWithBitmapDataPlanes:pixelsWide:pixelsHigh:bitsPerSample:samplesPerPixel:hasAlpha:isPlanar:colorSpaceName:bitmapFormat:bytesPerRow:bitsPerPixel:](init%28bitmapdataplanes_pixelswide_pixelshigh_bitspersample_samplesperpixel_hasalpha_isplanar_colorspacename_bitmapformat_bytesperrow_bitsperpixel_%29.md): Initializes a newly allocated bitmap image representation so it can render the specified image.
- [initWithBitmapDataPlanes:pixelsWide:pixelsHigh:bitsPerSample:samplesPerPixel:hasAlpha:isPlanar:colorSpaceName:bytesPerRow:bitsPerPixel:](init%28bitmapdataplanes_pixelswide_pixelshigh_bitspersample_samplesperpixel_hasalpha_isplanar_colorspacename_bytesperrow_bitsperpixel_%29.md): Initializes a newly allocated bitmap image representation so it can render the specified image.
- [initWithCGImage:](init%28cgimage_%29-7o5tz.md): Returns a bitmap image representation from a Core Graphics image object.
- [initWithCIImage:](init%28ciimage_%29-7bi19.md): Returns a bitmap image representation from a Core Image object.
- [initForIncrementalLoad](init%28forincrementalload_%29.md): Initializes a newly allocated bitmap image representation for incremental loading.
- [initWithFocusedViewRect:](init%28focusedviewrect_%29.md): Deprecated. Initializes a newly allocated bitmap image representation with bitmap data from a rendered image.
