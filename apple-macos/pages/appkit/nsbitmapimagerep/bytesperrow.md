> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbitmapimagerep/bytesperrow](https://developer.apple.com/documentation/appkit/nsbitmapimagerep/bytesperrow)

# bytesPerRow (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The minimum number of bytes required to specify a scan line in each data plane.

## Declaration

```swift
var bytesPerRow: Int { get }
```

<a id="Discussion"></a>

## Discussion

A scan line is a single row of pixels spanning the width of the image. If not explicitly set to another value (in [init(bitmapDataPlanes:pixelsWide:pixelsHigh:bitsPerSample:samplesPerPixel:hasAlpha:isPlanar:colorSpaceName:bytesPerRow:bitsPerPixel:)](init%28bitmapdataplanes_pixelswide_pixelshigh_bitspersample_samplesperpixel_hasalpha_isplanar_colorspacename_bytesperrow_bitsperpixel_%29.md)), this number will be figured from the width of the image, the number of bits per sample, and, if the data is in a meshed configuration, the number of samples per pixel. It can be set to another value to indicate that each row of data is aligned on word or other boundaries.

## See Also

### Getting Information About Images

- [bitmapFormat](bitmapformat.md): The format of the bitmap image representation.
- [NSBitmapImageRep.Format](format.md): Constants that represent bitmap component formats.
- [bitsPerPixel](bitsperpixel.md): The number of bits allocated for each pixel in each plane of data.
- [bytesPerPlane](bytesperplane.md): The number of bytes in each plane or channel of data.
- [isPlanar](isplanar.md): A Boolean value that indicates whether the image data is in a planar configuration.
- [numberOfPlanes](numberofplanes.md): The number of separate planes into which the image data is organized.
- [samplesPerPixel](samplesperpixel.md): The number of components for each pixel.

# bytesPerRow (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The minimum number of bytes required to specify a scan line in each data plane.

## Declaration

```objectivec
@property (readonly) NSInteger bytesPerRow;
```

<a id="Discussion"></a>

## Discussion

A scan line is a single row of pixels spanning the width of the image. If not explicitly set to another value (in [initWithBitmapDataPlanes:pixelsWide:pixelsHigh:bitsPerSample:samplesPerPixel:hasAlpha:isPlanar:colorSpaceName:bytesPerRow:bitsPerPixel:](init%28bitmapdataplanes_pixelswide_pixelshigh_bitspersample_samplesperpixel_hasalpha_isplanar_colorspacename_bytesperrow_bitsperpixel_%29.md)), this number will be figured from the width of the image, the number of bits per sample, and, if the data is in a meshed configuration, the number of samples per pixel. It can be set to another value to indicate that each row of data is aligned on word or other boundaries.

## See Also

### Getting Information About Images

- [bitmapFormat](bitmapformat.md): The format of the bitmap image representation.
- [NSBitmapFormat](format.md): Constants that represent bitmap component formats.
- [bitsPerPixel](bitsperpixel.md): The number of bits allocated for each pixel in each plane of data.
- [bytesPerPlane](bytesperplane.md): The number of bytes in each plane or channel of data.
- [planar](isplanar.md): A Boolean value that indicates whether the image data is in a planar configuration.
- [numberOfPlanes](numberofplanes.md): The number of separate planes into which the image data is organized.
- [samplesPerPixel](samplesperpixel.md): The number of components for each pixel.
