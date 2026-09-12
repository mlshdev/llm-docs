> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimagerep/bitspersample](https://developer.apple.com/documentation/appkit/nsimagerep/bitspersample)

# bitsPerSample (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The number of bits per sample in the object (if the object is a planar image, this property contains the number of bits per sample per plane).

## Declaration

```swift
var bitsPerSample: Int { get set }
```

<a id="Discussion"></a>

## Discussion

The number of bits used to specify each component of data in a single pixel (for example, a value of 8 for an RGBA image means that each pixel is comprised of four 8-bit values) or [NSImageRepMatchesDevice](../nsimagerepmatchesdevice.md).

A subclass can set this property when loading image data to notify the parent class of how many bits each sample uses. Specifying a value that differs from the actual image data does not change the bit depth of the image.

## See Also

### Related Documentation

- [bitsPerPixel](../nsbitmapimagerep/bitsperpixel.md): The number of bits allocated for each pixel in each plane of data.
- [samplesPerPixel](../nsbitmapimagerep/samplesperpixel.md): The number of components for each pixel.
- [isPlanar](../nsbitmapimagerep/isplanar.md): A Boolean value that indicates whether the image data is in a planar configuration.

### Specifying Information About the Representation

- [colorSpaceName](colorspacename.md): The name of the color space used by the image data.
- [hasAlpha](hasalpha.md): A Boolean value that indicates whether the image data has an alpha channel.
- [isOpaque](isopaque.md): A Boolean value that indicates whether the image is opaque.
- [pixelsHigh](pixelshigh.md): The height of the image, measured in pixels.
- [pixelsWide](pixelswide.md): The width of the image, measured in pixels.
- [layoutDirection](layoutdirection.md): The layout direction for the image.
- [Device-Specific Value](../device-specific-value.md): A constant that is used by image representations to denote an attribute whose value changes to match the display device.

# bitsPerSample (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The number of bits per sample in the object (if the object is a planar image, this property contains the number of bits per sample per plane).

## Declaration

```objectivec
@property NSInteger bitsPerSample;
```

<a id="Discussion"></a>

## Discussion

The number of bits used to specify each component of data in a single pixel (for example, a value of 8 for an RGBA image means that each pixel is comprised of four 8-bit values) or [NSImageRepMatchesDevice](../nsimagerepmatchesdevice.md).

A subclass can set this property when loading image data to notify the parent class of how many bits each sample uses. Specifying a value that differs from the actual image data does not change the bit depth of the image.

## See Also

### Related Documentation

- [bitsPerPixel](../nsbitmapimagerep/bitsperpixel.md): The number of bits allocated for each pixel in each plane of data.
- [samplesPerPixel](../nsbitmapimagerep/samplesperpixel.md): The number of components for each pixel.
- [planar](../nsbitmapimagerep/isplanar.md): A Boolean value that indicates whether the image data is in a planar configuration.

### Specifying Information About the Representation

- [colorSpaceName](colorspacename.md): The name of the color space used by the image data.
- [alpha](hasalpha.md): A Boolean value that indicates whether the image data has an alpha channel.
- [opaque](isopaque.md): A Boolean value that indicates whether the image is opaque.
- [pixelsHigh](pixelshigh.md): The height of the image, measured in pixels.
- [pixelsWide](pixelswide.md): The width of the image, measured in pixels.
- [layoutDirection](layoutdirection.md): The layout direction for the image.
- [Device-Specific Value](../device-specific-value.md): A constant that is used by image representations to denote an attribute whose value changes to match the display device.
