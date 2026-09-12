> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbitmapimagerep/samplesperpixel](https://developer.apple.com/documentation/appkit/nsbitmapimagerep/samplesperpixel)

# samplesPerPixel (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The number of components for each pixel.

## Declaration

```swift
var samplesPerPixel: Int { get }
```

<a id="Discussion"></a>

## Discussion

This property reflects both the number of color components and the coverage component, if present.

## See Also

### Related Documentation

- [bitsPerSample](../nsimagerep/bitspersample.md): The number of bits per sample in the object (if the object is a planar image, this property contains the number of bits per sample per plane).

### Getting Information About Images

- [bitmapFormat](bitmapformat.md): The format of the bitmap image representation.
- [NSBitmapImageRep.Format](format.md): Constants that represent bitmap component formats.
- [bitsPerPixel](bitsperpixel.md): The number of bits allocated for each pixel in each plane of data.
- [bytesPerPlane](bytesperplane.md): The number of bytes in each plane or channel of data.
- [bytesPerRow](bytesperrow.md): The minimum number of bytes required to specify a scan line in each data plane.
- [isPlanar](isplanar.md): A Boolean value that indicates whether the image data is in a planar configuration.
- [numberOfPlanes](numberofplanes.md): The number of separate planes into which the image data is organized.

# samplesPerPixel (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The number of components for each pixel.

## Declaration

```objectivec
@property (readonly) NSInteger samplesPerPixel;
```

<a id="Discussion"></a>

## Discussion

This property reflects both the number of color components and the coverage component, if present.

## See Also

### Related Documentation

- [bitsPerSample](../nsimagerep/bitspersample.md): The number of bits per sample in the object (if the object is a planar image, this property contains the number of bits per sample per plane).

### Getting Information About Images

- [bitmapFormat](bitmapformat.md): The format of the bitmap image representation.
- [NSBitmapFormat](format.md): Constants that represent bitmap component formats.
- [bitsPerPixel](bitsperpixel.md): The number of bits allocated for each pixel in each plane of data.
- [bytesPerPlane](bytesperplane.md): The number of bytes in each plane or channel of data.
- [bytesPerRow](bytesperrow.md): The minimum number of bytes required to specify a scan line in each data plane.
- [planar](isplanar.md): A Boolean value that indicates whether the image data is in a planar configuration.
- [numberOfPlanes](numberofplanes.md): The number of separate planes into which the image data is organized.
