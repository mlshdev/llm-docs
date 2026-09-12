> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimagerep/isopaque](https://developer.apple.com/documentation/appkit/nsimagerep/isopaque)

# isOpaque (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the image is opaque.

## Declaration

```swift
var isOpaque: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the image should be treated as fully opaque; otherwise, [false](https://developer.apple.com/documentation/swift/false) to indicate the image may include some transparent regions.

Use this property to test whether an image representation completely covers the area within the rectangle given by the [size](size.md) property.

The property value does not indicate whether the image has an alpha channel or if there is partial or complete transparency when drawing the image rep. Use the [hasAlpha](hasalpha.md) property to determine if the image has an alpha channel.

## See Also

### Specifying Information About the Representation

- [bitsPerSample](bitspersample.md): The number of bits per sample in the object (if the object is a planar image, this property contains the number of bits per sample per plane).
- [colorSpaceName](colorspacename.md): The name of the color space used by the image data.
- [hasAlpha](hasalpha.md): A Boolean value that indicates whether the image data has an alpha channel.
- [pixelsHigh](pixelshigh.md): The height of the image, measured in pixels.
- [pixelsWide](pixelswide.md): The width of the image, measured in pixels.
- [layoutDirection](layoutdirection.md): The layout direction for the image.
- [Device-Specific Value](../device-specific-value.md): A constant that is used by image representations to denote an attribute whose value changes to match the display device.

# opaque (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the image is opaque.

## Declaration

```objectivec
@property (getter=isOpaque) BOOL opaque;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the image should be treated as fully opaque; otherwise, [false](https://developer.apple.com/documentation/swift/false) to indicate the image may include some transparent regions.

Use this property to test whether an image representation completely covers the area within the rectangle given by the [size](size.md) property.

The property value does not indicate whether the image has an alpha channel or if there is partial or complete transparency when drawing the image rep. Use the [alpha](hasalpha.md) property to determine if the image has an alpha channel.

## See Also

### Specifying Information About the Representation

- [bitsPerSample](bitspersample.md): The number of bits per sample in the object (if the object is a planar image, this property contains the number of bits per sample per plane).
- [colorSpaceName](colorspacename.md): The name of the color space used by the image data.
- [alpha](hasalpha.md): A Boolean value that indicates whether the image data has an alpha channel.
- [pixelsHigh](pixelshigh.md): The height of the image, measured in pixels.
- [pixelsWide](pixelswide.md): The width of the image, measured in pixels.
- [layoutDirection](layoutdirection.md): The layout direction for the image.
- [Device-Specific Value](../device-specific-value.md): A constant that is used by image representations to denote an attribute whose value changes to match the display device.
