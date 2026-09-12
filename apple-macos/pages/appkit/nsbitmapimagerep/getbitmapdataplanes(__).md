> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbitmapimagerep/getbitmapdataplanes(_:)](https://developer.apple.com/documentation/appkit/nsbitmapimagerep/getbitmapdataplanes(_:))

# getBitmapDataPlanes(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns by indirection bitmap data of the bitmap image representation separated into planes.

## Declaration

```swift
func getBitmapDataPlanes(_ data: UnsafeMutablePointer<UnsafeMutablePointer<UInt8>?>)
```

## Parameters

- `data`: On return, a C array of five character pointers. If the bitmap data is in planar configuration, each pointer will be initialized to point to one of the data planes. If there are less than five planes, the remaining pointers will be set to `NULL`. If the bitmap data is in meshed configuration, only the first pointer will be initialized; the others will be `NULL`.

<a id="Discussion"></a>

## Discussion

Color components in planar configuration are arranged in the expected order—for example, red before green before blue for RGB color. All color planes precede the coverage plane. For bitmaps whose [bitmapFormat](bitmapformat.md) mask does not include [alphaNonpremultiplied](format/alphanonpremultiplied.md), if a coverage plane exists, the bitmap’s color components are premultiplied with it. In this case, if you modify the contents of the bitmap, you are responsible for premultiplying the data.

## See Also

### Related Documentation

- [init(bitmapDataPlanes:pixelsWide:pixelsHigh:bitsPerSample:samplesPerPixel:hasAlpha:isPlanar:colorSpaceName:bitmapFormat:bytesPerRow:bitsPerPixel:)](init%28bitmapdataplanes_pixelswide_pixelshigh_bitspersample_samplesperpixel_hasalpha_isplanar_colorspacename_bitmapformat_bytesperrow_bitsperpixel_%29.md): Initializes a newly allocated bitmap image representation so it can render the specified image.
- [isPlanar](isplanar.md): A Boolean value that indicates whether the image data is in a planar configuration.
- [init(bitmapDataPlanes:pixelsWide:pixelsHigh:bitsPerSample:samplesPerPixel:hasAlpha:isPlanar:colorSpaceName:bytesPerRow:bitsPerPixel:)](init%28bitmapdataplanes_pixelswide_pixelshigh_bitspersample_samplesperpixel_hasalpha_isplanar_colorspacename_bytesperrow_bitsperpixel_%29.md): Initializes a newly allocated bitmap image representation so it can render the specified image.

### Getting the Bitmap Data

- [bitmapData](bitmapdata.md): A pointer to the bitmap data.

# getBitmapDataPlanes: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns by indirection bitmap data of the bitmap image representation separated into planes.

## Declaration

```objectivec
- (void) getBitmapDataPlanes:(unsigned char **) data;
```

## Parameters

- `data`: On return, a C array of five character pointers. If the bitmap data is in planar configuration, each pointer will be initialized to point to one of the data planes. If there are less than five planes, the remaining pointers will be set to `NULL`. If the bitmap data is in meshed configuration, only the first pointer will be initialized; the others will be `NULL`.

<a id="Discussion"></a>

## Discussion

Color components in planar configuration are arranged in the expected order—for example, red before green before blue for RGB color. All color planes precede the coverage plane. For bitmaps whose [bitmapFormat](bitmapformat.md) mask does not include [NSBitmapFormatAlphaNonpremultiplied](format/alphanonpremultiplied.md), if a coverage plane exists, the bitmap’s color components are premultiplied with it. In this case, if you modify the contents of the bitmap, you are responsible for premultiplying the data.

## See Also

### Related Documentation

- [initWithBitmapDataPlanes:pixelsWide:pixelsHigh:bitsPerSample:samplesPerPixel:hasAlpha:isPlanar:colorSpaceName:bitmapFormat:bytesPerRow:bitsPerPixel:](init%28bitmapdataplanes_pixelswide_pixelshigh_bitspersample_samplesperpixel_hasalpha_isplanar_colorspacename_bitmapformat_bytesperrow_bitsperpixel_%29.md): Initializes a newly allocated bitmap image representation so it can render the specified image.
- [planar](isplanar.md): A Boolean value that indicates whether the image data is in a planar configuration.
- [initWithBitmapDataPlanes:pixelsWide:pixelsHigh:bitsPerSample:samplesPerPixel:hasAlpha:isPlanar:colorSpaceName:bytesPerRow:bitsPerPixel:](init%28bitmapdataplanes_pixelswide_pixelshigh_bitspersample_samplesperpixel_hasalpha_isplanar_colorspacename_bytesperrow_bitsperpixel_%29.md): Initializes a newly allocated bitmap image representation so it can render the specified image.

### Getting the Bitmap Data

- [bitmapData](bitmapdata.md): A pointer to the bitmap data.
