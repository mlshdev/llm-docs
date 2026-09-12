> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbitmapimagerep/numberofplanes](https://developer.apple.com/documentation/appkit/nsbitmapimagerep/numberofplanes)

# numberOfPlanes (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The number of separate planes into which the image data is organized.

## Declaration

```swift
var numberOfPlanes: Int { get }
```

<a id="Discussion"></a>

## Discussion

If the data has a separate plane for each component—that is, [isPlanar](isplanar.md) is [true](https://developer.apple.com/documentation/swift/true)—the value of this property is the number of samples per pixel. If the data is meshed, the value of this property is `1`.

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
- [samplesPerPixel](samplesperpixel.md): The number of components for each pixel.

# numberOfPlanes (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The number of separate planes into which the image data is organized.

## Declaration

```objectivec
@property (readonly) NSInteger numberOfPlanes;
```

<a id="Discussion"></a>

## Discussion

If the data has a separate plane for each component—that is, [planar](isplanar.md) is [true](https://developer.apple.com/documentation/swift/true)—the value of this property is the number of samples per pixel. If the data is meshed, the value of this property is `1`.

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
- [samplesPerPixel](samplesperpixel.md): The number of components for each pixel.
