> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbitmapimagerep/init(focusedviewrect:)](https://developer.apple.com/documentation/appkit/nsbitmapimagerep/init(focusedviewrect:))

# init(focusedViewRect:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Initializes a newly allocated bitmap image representation with bitmap data from a rendered image.

> Use -\[NSView cacheDisplayInRect:toBitmapImageRep:\] to snapshot a view.

## Declaration

```swift
init?(focusedViewRect rect: NSRect)
```

## Parameters

- `rect`: A rectangle that specifies an area of the current window in the current coordinate system.

<a id="return-value"></a>

## Return Value

Returns the initialized object or `nil` If for any reason the new object can’t be initialized.

<a id="Discussion"></a>

## Discussion

This method uses imaging operators to read the image data into a buffer; the object is then created from that data. The object is initialized with information about the image obtained from the window server.

## See Also

### Creating Bitmap Representations of Images

- [imageReps(with:)](imagereps%28with_%29.md): Creates and returns an array of bitmap image representation objects that correspond to the images in the specified data.
- [colorize(byMappingGray:to:blackMapping:whiteMapping:)](colorize%28bymappinggray_to_blackmapping_whitemapping_%29.md): Colorizes a grayscale image.
- [init(bitmapDataPlanes:pixelsWide:pixelsHigh:bitsPerSample:samplesPerPixel:hasAlpha:isPlanar:colorSpaceName:bitmapFormat:bytesPerRow:bitsPerPixel:)](init%28bitmapdataplanes_pixelswide_pixelshigh_bitspersample_samplesperpixel_hasalpha_isplanar_colorspacename_bitmapformat_bytesperrow_bitsperpixel_%29.md): Initializes a newly allocated bitmap image representation so it can render the specified image.
- [init(bitmapDataPlanes:pixelsWide:pixelsHigh:bitsPerSample:samplesPerPixel:hasAlpha:isPlanar:colorSpaceName:bytesPerRow:bitsPerPixel:)](init%28bitmapdataplanes_pixelswide_pixelshigh_bitspersample_samplesperpixel_hasalpha_isplanar_colorspacename_bytesperrow_bitsperpixel_%29.md): Initializes a newly allocated bitmap image representation so it can render the specified image.
- [init(cgImage:)](init%28cgimage_%29-7o5tz.md): Returns a bitmap image representation from a Core Graphics image object.
- [init(ciImage:)](init%28ciimage_%29-7bi19.md): Returns a bitmap image representation from a Core Image object.
- [init(data:)](init%28data_%29.md): Initializes a newly allocated bitmap image representation from the specified data.
- [init(forIncrementalLoad:)](init%28forincrementalload_%29.md): Initializes a newly allocated bitmap image representation for incremental loading.

# initWithFocusedViewRect: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Initializes a newly allocated bitmap image representation with bitmap data from a rendered image.

> Use -\[NSView cacheDisplayInRect:toBitmapImageRep:\] to snapshot a view.

## Declaration

```objectivec
- (instancetype) initWithFocusedViewRect:(NSRect) rect;
```

## Parameters

- `rect`: A rectangle that specifies an area of the current window in the current coordinate system.

<a id="return-value"></a>

## Return Value

Returns the initialized object or `nil` If for any reason the new object can’t be initialized.

<a id="Discussion"></a>

## Discussion

This method uses imaging operators to read the image data into a buffer; the object is then created from that data. The object is initialized with information about the image obtained from the window server.

## See Also

### Creating Bitmap Representations of Images

- [imageRepWithData:](imagerepwithdata_.md): Creates and returns a bitmap image representation with the first image in the specified data.
- [imageRepsWithData:](imagereps%28with_%29.md): Creates and returns an array of bitmap image representation objects that correspond to the images in the specified data.
- [colorizeByMappingGray:toColor:blackMapping:whiteMapping:](colorize%28bymappinggray_to_blackmapping_whitemapping_%29.md): Colorizes a grayscale image.
- [initWithBitmapDataPlanes:pixelsWide:pixelsHigh:bitsPerSample:samplesPerPixel:hasAlpha:isPlanar:colorSpaceName:bitmapFormat:bytesPerRow:bitsPerPixel:](init%28bitmapdataplanes_pixelswide_pixelshigh_bitspersample_samplesperpixel_hasalpha_isplanar_colorspacename_bitmapformat_bytesperrow_bitsperpixel_%29.md): Initializes a newly allocated bitmap image representation so it can render the specified image.
- [initWithBitmapDataPlanes:pixelsWide:pixelsHigh:bitsPerSample:samplesPerPixel:hasAlpha:isPlanar:colorSpaceName:bytesPerRow:bitsPerPixel:](init%28bitmapdataplanes_pixelswide_pixelshigh_bitspersample_samplesperpixel_hasalpha_isplanar_colorspacename_bytesperrow_bitsperpixel_%29.md): Initializes a newly allocated bitmap image representation so it can render the specified image.
- [initWithCGImage:](init%28cgimage_%29-7o5tz.md): Returns a bitmap image representation from a Core Graphics image object.
- [initWithCIImage:](init%28ciimage_%29-7bi19.md): Returns a bitmap image representation from a Core Image object.
- [initWithData:](init%28data_%29.md): Initializes a newly allocated bitmap image representation from the specified data.
- [initForIncrementalLoad](init%28forincrementalload_%29.md): Initializes a newly allocated bitmap image representation for incremental loading.
