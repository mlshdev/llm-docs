> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbitmapimagerep/init(cgimage:)-7o5tz](https://developer.apple.com/documentation/appkit/nsbitmapimagerep/init(cgimage:)-7o5tz)

# init(cgImage:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.5+

Returns a bitmap image representation from a Core Graphics image object.

## Declaration

```swift
init(cgImage: CGImage)
```

## Parameters

- `cgImage`: A Core Graphics image object (an opaque type) from which to create the receiver. This opaque type is retained.

<a id="return-value"></a>

## Return Value

An [NSBitmapImageRep](../nsbitmapimagerep.md) object initialized from the contents of the Core Graphics image.

<a id="Discussion"></a>

## Discussion

If you use this method, you should treat the resulting bitmap [NSBitmapImageRep](../nsbitmapimagerep.md) object as read only. Because it only retains the value in the `cgImage` parameter, rather than unpacking the data, accessing the pixel data requires the creation of a copy of that data in memory. Changes to that data are not saved back to the Core Graphics image.

## See Also

### Related Documentation

- [cgImage](cgimage.md): A Core Graphics image object based on the bitmap image representation’s data.

### Creating Bitmap Representations of Images

- [imageReps(with:)](imagereps%28with_%29.md): Creates and returns an array of bitmap image representation objects that correspond to the images in the specified data.
- [colorize(byMappingGray:to:blackMapping:whiteMapping:)](colorize%28bymappinggray_to_blackmapping_whitemapping_%29.md): Colorizes a grayscale image.
- [init(bitmapDataPlanes:pixelsWide:pixelsHigh:bitsPerSample:samplesPerPixel:hasAlpha:isPlanar:colorSpaceName:bitmapFormat:bytesPerRow:bitsPerPixel:)](init%28bitmapdataplanes_pixelswide_pixelshigh_bitspersample_samplesperpixel_hasalpha_isplanar_colorspacename_bitmapformat_bytesperrow_bitsperpixel_%29.md): Initializes a newly allocated bitmap image representation so it can render the specified image.
- [init(bitmapDataPlanes:pixelsWide:pixelsHigh:bitsPerSample:samplesPerPixel:hasAlpha:isPlanar:colorSpaceName:bytesPerRow:bitsPerPixel:)](init%28bitmapdataplanes_pixelswide_pixelshigh_bitspersample_samplesperpixel_hasalpha_isplanar_colorspacename_bytesperrow_bitsperpixel_%29.md): Initializes a newly allocated bitmap image representation so it can render the specified image.
- [init(ciImage:)](init%28ciimage_%29-7bi19.md): Returns a bitmap image representation from a Core Image object.
- [init(data:)](init%28data_%29.md): Initializes a newly allocated bitmap image representation from the specified data.
- [init(forIncrementalLoad:)](init%28forincrementalload_%29.md): Initializes a newly allocated bitmap image representation for incremental loading.
- [init(focusedViewRect:)](init%28focusedviewrect_%29.md): Deprecated. Initializes a newly allocated bitmap image representation with bitmap data from a rendered image.

# initWithCGImage: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns a bitmap image representation from a Core Graphics image object.

## Declaration

```objectivec
- (instancetype) initWithCGImage:(CGImageRef) cgImage;
```

## Parameters

- `cgImage`: A Core Graphics image object (an opaque type) from which to create the receiver. This opaque type is retained.

<a id="return-value"></a>

## Return Value

An [NSBitmapImageRep](../nsbitmapimagerep.md) object initialized from the contents of the Core Graphics image.

<a id="Discussion"></a>

## Discussion

If you use this method, you should treat the resulting bitmap [NSBitmapImageRep](../nsbitmapimagerep.md) object as read only. Because it only retains the value in the `cgImage` parameter, rather than unpacking the data, accessing the pixel data requires the creation of a copy of that data in memory. Changes to that data are not saved back to the Core Graphics image.

## See Also

### Related Documentation

- [CGImage](cgimage.md): A Core Graphics image object based on the bitmap image representation’s data.

### Creating Bitmap Representations of Images

- [imageRepWithData:](imagerepwithdata_.md): Creates and returns a bitmap image representation with the first image in the specified data.
- [imageRepsWithData:](imagereps%28with_%29.md): Creates and returns an array of bitmap image representation objects that correspond to the images in the specified data.
- [colorizeByMappingGray:toColor:blackMapping:whiteMapping:](colorize%28bymappinggray_to_blackmapping_whitemapping_%29.md): Colorizes a grayscale image.
- [initWithBitmapDataPlanes:pixelsWide:pixelsHigh:bitsPerSample:samplesPerPixel:hasAlpha:isPlanar:colorSpaceName:bitmapFormat:bytesPerRow:bitsPerPixel:](init%28bitmapdataplanes_pixelswide_pixelshigh_bitspersample_samplesperpixel_hasalpha_isplanar_colorspacename_bitmapformat_bytesperrow_bitsperpixel_%29.md): Initializes a newly allocated bitmap image representation so it can render the specified image.
- [initWithBitmapDataPlanes:pixelsWide:pixelsHigh:bitsPerSample:samplesPerPixel:hasAlpha:isPlanar:colorSpaceName:bytesPerRow:bitsPerPixel:](init%28bitmapdataplanes_pixelswide_pixelshigh_bitspersample_samplesperpixel_hasalpha_isplanar_colorspacename_bytesperrow_bitsperpixel_%29.md): Initializes a newly allocated bitmap image representation so it can render the specified image.
- [initWithCIImage:](init%28ciimage_%29-7bi19.md): Returns a bitmap image representation from a Core Image object.
- [initWithData:](init%28data_%29.md): Initializes a newly allocated bitmap image representation from the specified data.
- [initForIncrementalLoad](init%28forincrementalload_%29.md): Initializes a newly allocated bitmap image representation for incremental loading.
- [initWithFocusedViewRect:](init%28focusedviewrect_%29.md): Deprecated. Initializes a newly allocated bitmap image representation with bitmap data from a rendered image.
