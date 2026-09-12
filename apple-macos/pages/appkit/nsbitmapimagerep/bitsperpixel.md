> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbitmapimagerep/bitsperpixel](https://developer.apple.com/documentation/appkit/nsbitmapimagerep/bitsperpixel)

# bitsPerPixel (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The number of bits allocated for each pixel in each plane of data.

## Declaration

```swift
var bitsPerPixel: Int { get }
```

<a id="Discussion"></a>

## Discussion

This number is normally equal to the number of bits per sample or, if the data is in meshed configuration, the number of bits per sample times the number of samples per pixel. It can be explicitly set to another value (in [init(bitmapDataPlanes:pixelsWide:pixelsHigh:bitsPerSample:samplesPerPixel:hasAlpha:isPlanar:colorSpaceName:bytesPerRow:bitsPerPixel:)](init%28bitmapdataplanes_pixelswide_pixelshigh_bitspersample_samplesperpixel_hasalpha_isplanar_colorspacename_bytesperrow_bitsperpixel_%29.md)) in case extra memory is allocated for each pixel. This may be the case, for example, if pixel data is aligned on byte boundaries.

## See Also

### Getting Information About Images

- [bitmapFormat](bitmapformat.md): The format of the bitmap image representation.
- [NSBitmapImageRep.Format](format.md): Constants that represent bitmap component formats.
- [bytesPerPlane](bytesperplane.md): The number of bytes in each plane or channel of data.
- [bytesPerRow](bytesperrow.md): The minimum number of bytes required to specify a scan line in each data plane.
- [isPlanar](isplanar.md): A Boolean value that indicates whether the image data is in a planar configuration.
- [numberOfPlanes](numberofplanes.md): The number of separate planes into which the image data is organized.
- [samplesPerPixel](samplesperpixel.md): The number of components for each pixel.

# bitsPerPixel (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The number of bits allocated for each pixel in each plane of data.

## Declaration

```objectivec
@property (readonly) NSInteger bitsPerPixel;
```

<a id="Discussion"></a>

## Discussion

This number is normally equal to the number of bits per sample or, if the data is in meshed configuration, the number of bits per sample times the number of samples per pixel. It can be explicitly set to another value (in [initWithBitmapDataPlanes:pixelsWide:pixelsHigh:bitsPerSample:samplesPerPixel:hasAlpha:isPlanar:colorSpaceName:bytesPerRow:bitsPerPixel:](init%28bitmapdataplanes_pixelswide_pixelshigh_bitspersample_samplesperpixel_hasalpha_isplanar_colorspacename_bytesperrow_bitsperpixel_%29.md)) in case extra memory is allocated for each pixel. This may be the case, for example, if pixel data is aligned on byte boundaries.

## See Also

### Getting Information About Images

- [bitmapFormat](bitmapformat.md): The format of the bitmap image representation.
- [NSBitmapFormat](format.md): Constants that represent bitmap component formats.
- [bytesPerPlane](bytesperplane.md): The number of bytes in each plane or channel of data.
- [bytesPerRow](bytesperrow.md): The minimum number of bytes required to specify a scan line in each data plane.
- [planar](isplanar.md): A Boolean value that indicates whether the image data is in a planar configuration.
- [numberOfPlanes](numberofplanes.md): The number of separate planes into which the image data is organized.
- [samplesPerPixel](samplesperpixel.md): The number of components for each pixel.
