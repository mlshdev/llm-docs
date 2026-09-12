> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimagerep/layoutdirection](https://developer.apple.com/documentation/appkit/nsimagerep/layoutdirection)

# layoutDirection (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

The layout direction for the image.

## Declaration

```swift
var layoutDirection: NSImage.LayoutDirection { get set }
```

<a id="Discussion"></a>

## Discussion

For possible values, see [NSImage.LayoutDirection](../nsimage/layoutdirection.md). The default value for new image representation objects is [NSImage.LayoutDirection.unspecified](../nsimage/layoutdirection/unspecified.md).

## See Also

### Specifying Information About the Representation

- [bitsPerSample](bitspersample.md): The number of bits per sample in the object (if the object is a planar image, this property contains the number of bits per sample per plane).
- [colorSpaceName](colorspacename.md): The name of the color space used by the image data.
- [hasAlpha](hasalpha.md): A Boolean value that indicates whether the image data has an alpha channel.
- [isOpaque](isopaque.md): A Boolean value that indicates whether the image is opaque.
- [pixelsHigh](pixelshigh.md): The height of the image, measured in pixels.
- [pixelsWide](pixelswide.md): The width of the image, measured in pixels.
- [Device-Specific Value](../device-specific-value.md): A constant that is used by image representations to denote an attribute whose value changes to match the display device.

# layoutDirection (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

The layout direction for the image.

## Declaration

```objectivec
@property NSImageLayoutDirection layoutDirection;
```

<a id="Discussion"></a>

## Discussion

For possible values, see [NSImageLayoutDirection](../nsimage/layoutdirection.md). The default value for new image representation objects is [NSImageLayoutDirectionUnspecified](../nsimage/layoutdirection/unspecified.md).

## See Also

### Specifying Information About the Representation

- [bitsPerSample](bitspersample.md): The number of bits per sample in the object (if the object is a planar image, this property contains the number of bits per sample per plane).
- [colorSpaceName](colorspacename.md): The name of the color space used by the image data.
- [alpha](hasalpha.md): A Boolean value that indicates whether the image data has an alpha channel.
- [opaque](isopaque.md): A Boolean value that indicates whether the image is opaque.
- [pixelsHigh](pixelshigh.md): The height of the image, measured in pixels.
- [pixelsWide](pixelswide.md): The width of the image, measured in pixels.
- [Device-Specific Value](../device-specific-value.md): A constant that is used by image representations to denote an attribute whose value changes to match the display device.
