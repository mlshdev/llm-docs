> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbitmapimagerep/init(ciimage:)-7bi19](https://developer.apple.com/documentation/appkit/nsbitmapimagerep/init(ciimage:)-7bi19)

# init(ciImage:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.5+

Returns a bitmap image representation from a Core Image object.

## Declaration

```swift
init(ciImage: CIImage)
```

## Parameters

- `ciImage`: A Core Image object whose contents are to be copied to the receiver. This image rectangle must be of a finite size.

<a id="return-value"></a>

## Return Value

An [NSBitmapImageRep](../nsbitmapimagerep.md) object initialized from the contents of the Core Image ([CIImage](https://developer.apple.com/documentation/coreimage/ciimage)) object.

<a id="Discussion"></a>

## Discussion

The image in the `ciImage` parameter must be fully rendered before the receiver can be initialized. If you specify an object whose rendering was deferred (and thus does not have any pixels available now), this method forces the image to be rendered immediately. Rendering the image could result in a performance penalty if the image has a complex rendering chain or accelerated rendering hardware is not available. Rendering uses the current graphics context in the thread from which this method is called; to ensure consistent results across multiple threads, set the current context using the [NSGraphicsContext](../nsgraphicscontext.md) class before calling this method.

By the time this method returns, the resultant [NSBitmapImageRep](../nsbitmapimagerep.md) object can have its raw pixel data inspected, can be put on the pasteboard, and can be encoded to any of the standard image formats that [NSBitmapImageRep](../nsbitmapimagerep.md) supports (JPEG, TIFF, and so on.)

If you pass in a [CIImage](https://developer.apple.com/documentation/coreimage/ciimage) object whose extents are not finite, this method raises an exception.

## See Also

### Related Documentation

- [init(bitmapImageRep:)](https://developer.apple.com/documentation/coreimage/ciimage/init%28bitmapimagerep:%29): Initializes an image object with the specified bitmap image representation.

### Creating Bitmap Representations of Images

- [imageReps(with:)](imagereps%28with_%29.md): Creates and returns an array of bitmap image representation objects that correspond to the images in the specified data.
- [colorize(byMappingGray:to:blackMapping:whiteMapping:)](colorize%28bymappinggray_to_blackmapping_whitemapping_%29.md): Colorizes a grayscale image.
- [init(bitmapDataPlanes:pixelsWide:pixelsHigh:bitsPerSample:samplesPerPixel:hasAlpha:isPlanar:colorSpaceName:bitmapFormat:bytesPerRow:bitsPerPixel:)](init%28bitmapdataplanes_pixelswide_pixelshigh_bitspersample_samplesperpixel_hasalpha_isplanar_colorspacename_bitmapformat_bytesperrow_bitsperpixel_%29.md): Initializes a newly allocated bitmap image representation so it can render the specified image.
- [init(bitmapDataPlanes:pixelsWide:pixelsHigh:bitsPerSample:samplesPerPixel:hasAlpha:isPlanar:colorSpaceName:bytesPerRow:bitsPerPixel:)](init%28bitmapdataplanes_pixelswide_pixelshigh_bitspersample_samplesperpixel_hasalpha_isplanar_colorspacename_bytesperrow_bitsperpixel_%29.md): Initializes a newly allocated bitmap image representation so it can render the specified image.
- [init(cgImage:)](init%28cgimage_%29-7o5tz.md): Returns a bitmap image representation from a Core Graphics image object.
- [init(data:)](init%28data_%29.md): Initializes a newly allocated bitmap image representation from the specified data.
- [init(forIncrementalLoad:)](init%28forincrementalload_%29.md): Initializes a newly allocated bitmap image representation for incremental loading.
- [init(focusedViewRect:)](init%28focusedviewrect_%29.md): Deprecated. Initializes a newly allocated bitmap image representation with bitmap data from a rendered image.

# initWithCIImage: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns a bitmap image representation from a Core Image object.

## Declaration

```objectivec
- (instancetype) initWithCIImage:(CIImage *) ciImage;
```

## Parameters

- `ciImage`: A Core Image object whose contents are to be copied to the receiver. This image rectangle must be of a finite size.

<a id="return-value"></a>

## Return Value

An [NSBitmapImageRep](../nsbitmapimagerep.md) object initialized from the contents of the Core Image ([CIImage](https://developer.apple.com/documentation/coreimage/ciimage)) object.

<a id="Discussion"></a>

## Discussion

The image in the `ciImage` parameter must be fully rendered before the receiver can be initialized. If you specify an object whose rendering was deferred (and thus does not have any pixels available now), this method forces the image to be rendered immediately. Rendering the image could result in a performance penalty if the image has a complex rendering chain or accelerated rendering hardware is not available. Rendering uses the current graphics context in the thread from which this method is called; to ensure consistent results across multiple threads, set the current context using the [NSGraphicsContext](../nsgraphicscontext.md) class before calling this method.

By the time this method returns, the resultant [NSBitmapImageRep](../nsbitmapimagerep.md) object can have its raw pixel data inspected, can be put on the pasteboard, and can be encoded to any of the standard image formats that [NSBitmapImageRep](../nsbitmapimagerep.md) supports (JPEG, TIFF, and so on.)

If you pass in a [CIImage](https://developer.apple.com/documentation/coreimage/ciimage) object whose extents are not finite, this method raises an exception.

## See Also

### Related Documentation

- [initWithBitmapImageRep:](https://developer.apple.com/documentation/coreimage/ciimage/init%28bitmapimagerep:%29): Initializes an image object with the specified bitmap image representation.

### Creating Bitmap Representations of Images

- [imageRepWithData:](imagerepwithdata_.md): Creates and returns a bitmap image representation with the first image in the specified data.
- [imageRepsWithData:](imagereps%28with_%29.md): Creates and returns an array of bitmap image representation objects that correspond to the images in the specified data.
- [colorizeByMappingGray:toColor:blackMapping:whiteMapping:](colorize%28bymappinggray_to_blackmapping_whitemapping_%29.md): Colorizes a grayscale image.
- [initWithBitmapDataPlanes:pixelsWide:pixelsHigh:bitsPerSample:samplesPerPixel:hasAlpha:isPlanar:colorSpaceName:bitmapFormat:bytesPerRow:bitsPerPixel:](init%28bitmapdataplanes_pixelswide_pixelshigh_bitspersample_samplesperpixel_hasalpha_isplanar_colorspacename_bitmapformat_bytesperrow_bitsperpixel_%29.md): Initializes a newly allocated bitmap image representation so it can render the specified image.
- [initWithBitmapDataPlanes:pixelsWide:pixelsHigh:bitsPerSample:samplesPerPixel:hasAlpha:isPlanar:colorSpaceName:bytesPerRow:bitsPerPixel:](init%28bitmapdataplanes_pixelswide_pixelshigh_bitspersample_samplesperpixel_hasalpha_isplanar_colorspacename_bytesperrow_bitsperpixel_%29.md): Initializes a newly allocated bitmap image representation so it can render the specified image.
- [initWithCGImage:](init%28cgimage_%29-7o5tz.md): Returns a bitmap image representation from a Core Graphics image object.
- [initWithData:](init%28data_%29.md): Initializes a newly allocated bitmap image representation from the specified data.
- [initForIncrementalLoad](init%28forincrementalload_%29.md): Initializes a newly allocated bitmap image representation for incremental loading.
- [initWithFocusedViewRect:](init%28focusedviewrect_%29.md): Deprecated. Initializes a newly allocated bitmap image representation with bitmap data from a rendered image.
