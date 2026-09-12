> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimagerep/colorspacename](https://developer.apple.com/documentation/appkit/nsimagerep/colorspacename)

# colorSpaceName (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The name of the color space used by the image data.

## Declaration

```swift
var colorSpaceName: NSColorSpaceName { get set }
```

<a id="Discussion"></a>

## Discussion

By default, an `NSImageRep` object’s color space name is `NSCalibratedRGBColorSpace`. Color space names are defined as part of the `NSColor` class, in `NSGraphics.h`. The following are valid color space names:

- `NSCalibratedWhiteColorSpace`
- `NSCalibratedBlackColorSpace`
- `NSCalibratedRGBColorSpace`
- `NSDeviceWhiteColorSpace`
- `NSDeviceBlackColorSpace`
- `NSDeviceRGBColorSpace`
- `NSDeviceCMYKColorSpace`
- `NSNamedColorSpace`
- `NSCustomColorSpace`

## See Also

### Specifying Information About the Representation

- [bitsPerSample](bitspersample.md): The number of bits per sample in the object (if the object is a planar image, this property contains the number of bits per sample per plane).
- [hasAlpha](hasalpha.md): A Boolean value that indicates whether the image data has an alpha channel.
- [isOpaque](isopaque.md): A Boolean value that indicates whether the image is opaque.
- [pixelsHigh](pixelshigh.md): The height of the image, measured in pixels.
- [pixelsWide](pixelswide.md): The width of the image, measured in pixels.
- [layoutDirection](layoutdirection.md): The layout direction for the image.
- [Device-Specific Value](../device-specific-value.md): A constant that is used by image representations to denote an attribute whose value changes to match the display device.

# colorSpaceName (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The name of the color space used by the image data.

## Declaration

```objectivec
@property (copy) NSColorSpaceName colorSpaceName;
```

<a id="Discussion"></a>

## Discussion

By default, an `NSImageRep` object’s color space name is `NSCalibratedRGBColorSpace`. Color space names are defined as part of the `NSColor` class, in `NSGraphics.h`. The following are valid color space names:

- `NSCalibratedWhiteColorSpace`
- `NSCalibratedBlackColorSpace`
- `NSCalibratedRGBColorSpace`
- `NSDeviceWhiteColorSpace`
- `NSDeviceBlackColorSpace`
- `NSDeviceRGBColorSpace`
- `NSDeviceCMYKColorSpace`
- `NSNamedColorSpace`
- `NSCustomColorSpace`

## See Also

### Specifying Information About the Representation

- [bitsPerSample](bitspersample.md): The number of bits per sample in the object (if the object is a planar image, this property contains the number of bits per sample per plane).
- [alpha](hasalpha.md): A Boolean value that indicates whether the image data has an alpha channel.
- [opaque](isopaque.md): A Boolean value that indicates whether the image is opaque.
- [pixelsHigh](pixelshigh.md): The height of the image, measured in pixels.
- [pixelsWide](pixelswide.md): The width of the image, measured in pixels.
- [layoutDirection](layoutdirection.md): The layout direction for the image.
- [Device-Specific Value](../device-specific-value.md): A constant that is used by image representations to denote an attribute whose value changes to match the display device.
