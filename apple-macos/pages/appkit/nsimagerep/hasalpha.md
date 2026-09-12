> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimagerep/hasalpha](https://developer.apple.com/documentation/appkit/nsimagerep/hasalpha)

# hasAlpha (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the image data has an alpha channel.

## Declaration

```swift
var hasAlpha: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the receiver has a known alpha channel; otherwise, [false](https://developer.apple.com/documentation/swift/false).

Subclasses can set this property when loading image data to notify the parent class whether that data contains an alpha component. Specifying a value of [true](https://developer.apple.com/documentation/swift/true) does not add an alpha channel to the image data itself; it merely records the fact that the data has an alpha channel.

## See Also

### Specifying Information About the Representation

- [bitsPerSample](bitspersample.md): The number of bits per sample in the object (if the object is a planar image, this property contains the number of bits per sample per plane).
- [colorSpaceName](colorspacename.md): The name of the color space used by the image data.
- [isOpaque](isopaque.md): A Boolean value that indicates whether the image is opaque.
- [pixelsHigh](pixelshigh.md): The height of the image, measured in pixels.
- [pixelsWide](pixelswide.md): The width of the image, measured in pixels.
- [layoutDirection](layoutdirection.md): The layout direction for the image.
- [Device-Specific Value](../device-specific-value.md): A constant that is used by image representations to denote an attribute whose value changes to match the display device.

# alpha (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the image data has an alpha channel.

## Declaration

```objectivec
@property (getter=hasAlpha) BOOL alpha;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the receiver has a known alpha channel; otherwise, [false](https://developer.apple.com/documentation/swift/false).

Subclasses can set this property when loading image data to notify the parent class whether that data contains an alpha component. Specifying a value of [true](https://developer.apple.com/documentation/swift/true) does not add an alpha channel to the image data itself; it merely records the fact that the data has an alpha channel.

## See Also

### Specifying Information About the Representation

- [bitsPerSample](bitspersample.md): The number of bits per sample in the object (if the object is a planar image, this property contains the number of bits per sample per plane).
- [colorSpaceName](colorspacename.md): The name of the color space used by the image data.
- [opaque](isopaque.md): A Boolean value that indicates whether the image is opaque.
- [pixelsHigh](pixelshigh.md): The height of the image, measured in pixels.
- [pixelsWide](pixelswide.md): The width of the image, measured in pixels.
- [layoutDirection](layoutdirection.md): The layout direction for the image.
- [Device-Specific Value](../device-specific-value.md): A constant that is used by image representations to denote an attribute whose value changes to match the display device.
