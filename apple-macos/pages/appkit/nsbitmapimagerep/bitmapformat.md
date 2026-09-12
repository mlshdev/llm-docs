> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbitmapimagerep/bitmapformat](https://developer.apple.com/documentation/appkit/nsbitmapimagerep/bitmapformat)

# bitmapFormat (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The format of the bitmap image representation.

## Declaration

```swift
var bitmapFormat: NSBitmapImageRep.Format { get }
```

<a id="Discussion"></a>

## Discussion

Returns 0 by default. The return value can indicate several different attributes, which are described in [NSBitmapImageRep.Format](format.md).

## See Also

### Getting Information About Images

- [NSBitmapImageRep.Format](format.md): Constants that represent bitmap component formats.
- [bitsPerPixel](bitsperpixel.md): The number of bits allocated for each pixel in each plane of data.
- [bytesPerPlane](bytesperplane.md): The number of bytes in each plane or channel of data.
- [bytesPerRow](bytesperrow.md): The minimum number of bytes required to specify a scan line in each data plane.
- [isPlanar](isplanar.md): A Boolean value that indicates whether the image data is in a planar configuration.
- [numberOfPlanes](numberofplanes.md): The number of separate planes into which the image data is organized.
- [samplesPerPixel](samplesperpixel.md): The number of components for each pixel.

# bitmapFormat (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The format of the bitmap image representation.

## Declaration

```objectivec
@property (readonly) NSBitmapFormat bitmapFormat;
```

<a id="Discussion"></a>

## Discussion

Returns 0 by default. The return value can indicate several different attributes, which are described in [NSBitmapFormat](format.md).

## See Also

### Getting Information About Images

- [NSBitmapFormat](format.md): Constants that represent bitmap component formats.
- [bitsPerPixel](bitsperpixel.md): The number of bits allocated for each pixel in each plane of data.
- [bytesPerPlane](bytesperplane.md): The number of bytes in each plane or channel of data.
- [bytesPerRow](bytesperrow.md): The minimum number of bytes required to specify a scan line in each data plane.
- [planar](isplanar.md): A Boolean value that indicates whether the image data is in a planar configuration.
- [numberOfPlanes](numberofplanes.md): The number of separate planes into which the image data is organized.
- [samplesPerPixel](samplesperpixel.md): The number of components for each pixel.
