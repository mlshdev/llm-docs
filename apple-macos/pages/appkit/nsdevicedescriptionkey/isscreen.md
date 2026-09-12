> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdevicedescriptionkey/isscreen](https://developer.apple.com/documentation/appkit/nsdevicedescriptionkey/isscreen)

# isScreen (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

If there is a corresponding value, this indicates that the display device is a screen.

## Declaration

```swift
static let isScreen: NSDeviceDescriptionKey
```

## See Also

### Type Properties

- [bitsPerSample](bitspersample.md): The corresponding value is an `NSNumber` object containing an integer that gives the bit depth of the window’s raster image (2-bit, 8-bit, and so forth).
- [colorSpaceName](colorspacename.md): The corresponding value is an `NSString` object giving the name of the window’s color space.
- [isPrinter](isprinter.md): If there is a corresponding value, this indicates that the display device is a printer.
- [resolution](resolution.md): The corresponding value is an `NSValue` object containing a value of type `NSSize` that describes the window’s raster resolution in dots per inch (dpi).
- [size](size.md): The corresponding value is an `NSValue` object containing a value of type `NSSize` that gives the size of the window’s frame rectangle.

# NSDeviceIsScreen (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

If there is a corresponding value, this indicates that the display device is a screen.

## Declaration

```objectivec
extern NSDeviceDescriptionKey NSDeviceIsScreen;
```

## See Also

### Type Properties

- [NSDeviceBitsPerSample](bitspersample.md): The corresponding value is an `NSNumber` object containing an integer that gives the bit depth of the window’s raster image (2-bit, 8-bit, and so forth).
- [NSDeviceColorSpaceName](colorspacename.md): The corresponding value is an `NSString` object giving the name of the window’s color space.
- [NSDeviceIsPrinter](isprinter.md): If there is a corresponding value, this indicates that the display device is a printer.
- [NSDeviceResolution](resolution.md): The corresponding value is an `NSValue` object containing a value of type `NSSize` that describes the window’s raster resolution in dots per inch (dpi).
- [NSDeviceSize](size.md): The corresponding value is an `NSValue` object containing a value of type `NSSize` that gives the size of the window’s frame rectangle.
