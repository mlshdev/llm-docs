> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdevicedescriptionkey/colorspacename](https://developer.apple.com/documentation/appkit/nsdevicedescriptionkey/colorspacename)

# colorSpaceName (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

The corresponding value is an `NSString` object giving the name of the window’s color space.

## Declaration

```swift
static let colorSpaceName: NSDeviceDescriptionKey
```

<a id="Discussion"></a>

## Discussion

See Color Space Names in [Constants](../constants.md) for a list of possible values.

## See Also

### Type Properties

- [bitsPerSample](bitspersample.md): The corresponding value is an `NSNumber` object containing an integer that gives the bit depth of the window’s raster image (2-bit, 8-bit, and so forth).
- [isPrinter](isprinter.md): If there is a corresponding value, this indicates that the display device is a printer.
- [isScreen](isscreen.md): If there is a corresponding value, this indicates that the display device is a screen.
- [resolution](resolution.md): The corresponding value is an `NSValue` object containing a value of type `NSSize` that describes the window’s raster resolution in dots per inch (dpi).
- [size](size.md): The corresponding value is an `NSValue` object containing a value of type `NSSize` that gives the size of the window’s frame rectangle.

# NSDeviceColorSpaceName (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

The corresponding value is an `NSString` object giving the name of the window’s color space.

## Declaration

```objectivec
extern NSDeviceDescriptionKey NSDeviceColorSpaceName;
```

<a id="Discussion"></a>

## Discussion

See Color Space Names in [Constants](../constants.md) for a list of possible values.

## See Also

### Type Properties

- [NSDeviceBitsPerSample](bitspersample.md): The corresponding value is an `NSNumber` object containing an integer that gives the bit depth of the window’s raster image (2-bit, 8-bit, and so forth).
- [NSDeviceIsPrinter](isprinter.md): If there is a corresponding value, this indicates that the display device is a printer.
- [NSDeviceIsScreen](isscreen.md): If there is a corresponding value, this indicates that the display device is a screen.
- [NSDeviceResolution](resolution.md): The corresponding value is an `NSValue` object containing a value of type `NSSize` that describes the window’s raster resolution in dots per inch (dpi).
- [NSDeviceSize](size.md): The corresponding value is an `NSValue` object containing a value of type `NSSize` that gives the size of the window’s frame rectangle.
