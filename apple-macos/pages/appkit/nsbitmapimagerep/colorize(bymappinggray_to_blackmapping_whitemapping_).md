> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbitmapimagerep/colorize(bymappinggray:to:blackmapping:whitemapping:)](https://developer.apple.com/documentation/appkit/nsbitmapimagerep/colorize(bymappinggray:to:blackmapping:whitemapping:))

# colorize(byMappingGray:to:blackMapping:whiteMapping:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Colorizes a grayscale image.

## Declaration

```swift
func colorize(byMappingGray midPoint: CGFloat, to midPointColor: NSColor?, blackMapping shadowColor: NSColor?, whiteMapping lightColor: NSColor?)
```

## Parameters

- `midPoint`: A float value representing the midpoint of the grayscale image.
- `midPointColor`: A color object representing the midpoint of the color to map the image to.
- `shadowColor`: A color object representing the black mapping to use for shadows.
- `lightColor`: A color object representing the white mapping to be used in the image.

<a id="Discussion"></a>

## Discussion

This method maps the receiver such that:

- Gray value of `midPoint` –\>  `midPointColor`;
- black –\> `shadowColor`;
- white –\> `lightColor`.

It works on images with 8-bit SPP, and thus supports either 8-bit gray or 24-bit color (with optional alpha).

## See Also

### Creating Bitmap Representations of Images

- [imageReps(with:)](imagereps%28with_%29.md): Creates and returns an array of bitmap image representation objects that correspond to the images in the specified data.
- [init(bitmapDataPlanes:pixelsWide:pixelsHigh:bitsPerSample:samplesPerPixel:hasAlpha:isPlanar:colorSpaceName:bitmapFormat:bytesPerRow:bitsPerPixel:)](init%28bitmapdataplanes_pixelswide_pixelshigh_bitspersample_samplesperpixel_hasalpha_isplanar_colorspacename_bitmapformat_bytesperrow_bitsperpixel_%29.md): Initializes a newly allocated bitmap image representation so it can render the specified image.
- [init(bitmapDataPlanes:pixelsWide:pixelsHigh:bitsPerSample:samplesPerPixel:hasAlpha:isPlanar:colorSpaceName:bytesPerRow:bitsPerPixel:)](init%28bitmapdataplanes_pixelswide_pixelshigh_bitspersample_samplesperpixel_hasalpha_isplanar_colorspacename_bytesperrow_bitsperpixel_%29.md): Initializes a newly allocated bitmap image representation so it can render the specified image.
- [init(cgImage:)](init%28cgimage_%29-7o5tz.md): Returns a bitmap image representation from a Core Graphics image object.
- [init(ciImage:)](init%28ciimage_%29-7bi19.md): Returns a bitmap image representation from a Core Image object.
- [init(data:)](init%28data_%29.md): Initializes a newly allocated bitmap image representation from the specified data.
- [init(forIncrementalLoad:)](init%28forincrementalload_%29.md): Initializes a newly allocated bitmap image representation for incremental loading.
- [init(focusedViewRect:)](init%28focusedviewrect_%29.md): Deprecated. Initializes a newly allocated bitmap image representation with bitmap data from a rendered image.

# colorizeByMappingGray:toColor:blackMapping:whiteMapping: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Colorizes a grayscale image.

## Declaration

```objectivec
- (void) colorizeByMappingGray:(CGFloat) midPoint toColor:(NSColor *) midPointColor blackMapping:(NSColor *) shadowColor whiteMapping:(NSColor *) lightColor;
```

## Parameters

- `midPoint`: A float value representing the midpoint of the grayscale image.
- `midPointColor`: A color object representing the midpoint of the color to map the image to.
- `shadowColor`: A color object representing the black mapping to use for shadows.
- `lightColor`: A color object representing the white mapping to be used in the image.

<a id="Discussion"></a>

## Discussion

This method maps the receiver such that:

- Gray value of `midPoint` –\>  `midPointColor`;
- black –\> `shadowColor`;
- white –\> `lightColor`.

It works on images with 8-bit SPP, and thus supports either 8-bit gray or 24-bit color (with optional alpha).

## See Also

### Creating Bitmap Representations of Images

- [imageRepWithData:](imagerepwithdata_.md): Creates and returns a bitmap image representation with the first image in the specified data.
- [imageRepsWithData:](imagereps%28with_%29.md): Creates and returns an array of bitmap image representation objects that correspond to the images in the specified data.
- [initWithBitmapDataPlanes:pixelsWide:pixelsHigh:bitsPerSample:samplesPerPixel:hasAlpha:isPlanar:colorSpaceName:bitmapFormat:bytesPerRow:bitsPerPixel:](init%28bitmapdataplanes_pixelswide_pixelshigh_bitspersample_samplesperpixel_hasalpha_isplanar_colorspacename_bitmapformat_bytesperrow_bitsperpixel_%29.md): Initializes a newly allocated bitmap image representation so it can render the specified image.
- [initWithBitmapDataPlanes:pixelsWide:pixelsHigh:bitsPerSample:samplesPerPixel:hasAlpha:isPlanar:colorSpaceName:bytesPerRow:bitsPerPixel:](init%28bitmapdataplanes_pixelswide_pixelshigh_bitspersample_samplesperpixel_hasalpha_isplanar_colorspacename_bytesperrow_bitsperpixel_%29.md): Initializes a newly allocated bitmap image representation so it can render the specified image.
- [initWithCGImage:](init%28cgimage_%29-7o5tz.md): Returns a bitmap image representation from a Core Graphics image object.
- [initWithCIImage:](init%28ciimage_%29-7bi19.md): Returns a bitmap image representation from a Core Image object.
- [initWithData:](init%28data_%29.md): Initializes a newly allocated bitmap image representation from the specified data.
- [initForIncrementalLoad](init%28forincrementalload_%29.md): Initializes a newly allocated bitmap image representation for incremental loading.
- [initWithFocusedViewRect:](init%28focusedviewrect_%29.md): Deprecated. Initializes a newly allocated bitmap image representation with bitmap data from a rendered image.
