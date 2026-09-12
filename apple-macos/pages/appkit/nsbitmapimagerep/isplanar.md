> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbitmapimagerep/isplanar](https://developer.apple.com/documentation/appkit/nsbitmapimagerep/isplanar)

# isPlanar (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the image data is in a planar configuration.

## Declaration

```swift
var isPlanar: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the data is in a planar configuration or [false](https://developer.apple.com/documentation/swift/false) if it is in a meshed configuration. In a planar configuration, the image data is segregated into a separate plane for each color and coverage component. In a meshed configuration, the data is integrated into a single plane.

## See Also

### Getting Information About Images

- [bitmapFormat](bitmapformat.md): The format of the bitmap image representation.
- [NSBitmapImageRep.Format](format.md): Constants that represent bitmap component formats.
- [bitsPerPixel](bitsperpixel.md): The number of bits allocated for each pixel in each plane of data.
- [bytesPerPlane](bytesperplane.md): The number of bytes in each plane or channel of data.
- [bytesPerRow](bytesperrow.md): The minimum number of bytes required to specify a scan line in each data plane.
- [numberOfPlanes](numberofplanes.md): The number of separate planes into which the image data is organized.
- [samplesPerPixel](samplesperpixel.md): The number of components for each pixel.

# planar (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the image data is in a planar configuration.

## Declaration

```objectivec
@property (readonly, getter=isPlanar) BOOL planar;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the data is in a planar configuration or [false](https://developer.apple.com/documentation/swift/false) if it is in a meshed configuration. In a planar configuration, the image data is segregated into a separate plane for each color and coverage component. In a meshed configuration, the data is integrated into a single plane.

## See Also

### Getting Information About Images

- [bitmapFormat](bitmapformat.md): The format of the bitmap image representation.
- [NSBitmapFormat](format.md): Constants that represent bitmap component formats.
- [bitsPerPixel](bitsperpixel.md): The number of bits allocated for each pixel in each plane of data.
- [bytesPerPlane](bytesperplane.md): The number of bytes in each plane or channel of data.
- [bytesPerRow](bytesperrow.md): The minimum number of bytes required to specify a scan line in each data plane.
- [numberOfPlanes](numberofplanes.md): The number of separate planes into which the image data is organized.
- [samplesPerPixel](samplesperpixel.md): The number of components for each pixel.
