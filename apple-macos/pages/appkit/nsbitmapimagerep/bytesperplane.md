> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbitmapimagerep/bytesperplane](https://developer.apple.com/documentation/appkit/nsbitmapimagerep/bytesperplane)

# bytesPerPlane (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The number of bytes in each plane or channel of data.

## Declaration

```swift
var bytesPerPlane: Int { get }
```

<a id="Discussion"></a>

## Discussion

This number is calculated from the number of bytes per row and the height of the image.

## See Also

### Getting Information About Images

- [bitmapFormat](bitmapformat.md): The format of the bitmap image representation.
- [NSBitmapImageRep.Format](format.md): Constants that represent bitmap component formats.
- [bitsPerPixel](bitsperpixel.md): The number of bits allocated for each pixel in each plane of data.
- [bytesPerRow](bytesperrow.md): The minimum number of bytes required to specify a scan line in each data plane.
- [isPlanar](isplanar.md): A Boolean value that indicates whether the image data is in a planar configuration.
- [numberOfPlanes](numberofplanes.md): The number of separate planes into which the image data is organized.
- [samplesPerPixel](samplesperpixel.md): The number of components for each pixel.

# bytesPerPlane (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The number of bytes in each plane or channel of data.

## Declaration

```objectivec
@property (readonly) NSInteger bytesPerPlane;
```

<a id="Discussion"></a>

## Discussion

This number is calculated from the number of bytes per row and the height of the image.

## See Also

### Getting Information About Images

- [bitmapFormat](bitmapformat.md): The format of the bitmap image representation.
- [NSBitmapFormat](format.md): Constants that represent bitmap component formats.
- [bitsPerPixel](bitsperpixel.md): The number of bits allocated for each pixel in each plane of data.
- [bytesPerRow](bytesperrow.md): The minimum number of bytes required to specify a scan line in each data plane.
- [planar](isplanar.md): A Boolean value that indicates whether the image data is in a planar configuration.
- [numberOfPlanes](numberofplanes.md): The number of separate planes into which the image data is organized.
- [samplesPerPixel](samplesperpixel.md): The number of components for each pixel.
