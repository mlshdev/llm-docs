> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimagerep/pixelswide](https://developer.apple.com/documentation/appkit/nsimagerep/pixelswide)

# pixelsWide (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The width of the image, measured in pixels.

## Declaration

```swift
var pixelsWide: Int { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is the width of the image, measured in the units of the device coordinate space. This value is usually derived from the image data itself.

Subclasses can use this property when loading image data to notify the parent class of the image width. Setting this property does not change the actual number of pixels in the image.

## See Also

### Related Documentation

- [NSImageRepMatchesDevice](../nsimagerepmatchesdevice.md): A constant indicating that the value of certain attributes, such as the number of colors or bits per sample, will change to match the display device.
- [size](size.md): The size of the image representation, measured in points in the user coordinate space.

### Specifying Information About the Representation

- [bitsPerSample](bitspersample.md): The number of bits per sample in the object (if the object is a planar image, this property contains the number of bits per sample per plane).
- [colorSpaceName](colorspacename.md): The name of the color space used by the image data.
- [hasAlpha](hasalpha.md): A Boolean value that indicates whether the image data has an alpha channel.
- [isOpaque](isopaque.md): A Boolean value that indicates whether the image is opaque.
- [pixelsHigh](pixelshigh.md): The height of the image, measured in pixels.
- [layoutDirection](layoutdirection.md): The layout direction for the image.
- [Device-Specific Value](../device-specific-value.md): A constant that is used by image representations to denote an attribute whose value changes to match the display device.

# pixelsWide (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The width of the image, measured in pixels.

## Declaration

```objectivec
@property NSInteger pixelsWide;
```

<a id="Discussion"></a>

## Discussion

The value of this property is the width of the image, measured in the units of the device coordinate space. This value is usually derived from the image data itself.

Subclasses can use this property when loading image data to notify the parent class of the image width. Setting this property does not change the actual number of pixels in the image.

## See Also

### Related Documentation

- [NSImageRepMatchesDevice](../nsimagerepmatchesdevice.md): A constant indicating that the value of certain attributes, such as the number of colors or bits per sample, will change to match the display device.
- [size](size.md): The size of the image representation, measured in points in the user coordinate space.

### Specifying Information About the Representation

- [bitsPerSample](bitspersample.md): The number of bits per sample in the object (if the object is a planar image, this property contains the number of bits per sample per plane).
- [colorSpaceName](colorspacename.md): The name of the color space used by the image data.
- [alpha](hasalpha.md): A Boolean value that indicates whether the image data has an alpha channel.
- [opaque](isopaque.md): A Boolean value that indicates whether the image is opaque.
- [pixelsHigh](pixelshigh.md): The height of the image, measured in pixels.
- [layoutDirection](layoutdirection.md): The layout direction for the image.
- [Device-Specific Value](../device-specific-value.md): A constant that is used by image representations to denote an attribute whose value changes to match the display device.
