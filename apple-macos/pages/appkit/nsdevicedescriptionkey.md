> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdevicedescriptionkey](https://developer.apple.com/documentation/appkit/nsdevicedescriptionkey)

# NSDeviceDescriptionKey (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

These constants are the keys for device description dictionaries.

## Declaration

```swift
struct NSDeviceDescriptionKey
```

## Topics

### Type Properties

- [bitsPerSample](nsdevicedescriptionkey/bitspersample.md): The corresponding value is an `NSNumber` object containing an integer that gives the bit depth of the window’s raster image (2-bit, 8-bit, and so forth).
- [colorSpaceName](nsdevicedescriptionkey/colorspacename.md): The corresponding value is an `NSString` object giving the name of the window’s color space.
- [isPrinter](nsdevicedescriptionkey/isprinter.md): If there is a corresponding value, this indicates that the display device is a printer.
- [isScreen](nsdevicedescriptionkey/isscreen.md): If there is a corresponding value, this indicates that the display device is a screen.
- [resolution](nsdevicedescriptionkey/resolution.md): The corresponding value is an `NSValue` object containing a value of type `NSSize` that describes the window’s raster resolution in dots per inch (dpi).
- [size](nsdevicedescriptionkey/size.md): The corresponding value is an `NSValue` object containing a value of type `NSSize` that gives the size of the window’s frame rectangle.

### Initializers

- [init(\_:)](nsdevicedescriptionkey/init%28__%29.md)
- [init(rawValue:)](nsdevicedescriptionkey/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting Screen Information

- [depth](nsscreen/depth.md): The current bit depth and colorspace information of the screen.
- [frame](nsscreen/frame.md): The dimensions and location of the screen.
- [supportedWindowDepths](nsscreen/supportedwindowdepths.md): A zero-terminated array of the window depths supported by the screen.
- [deviceDescription](nsscreen/devicedescription.md): The device dictionary for the screen.
- [colorSpace](nsscreen/colorspace.md): The color space of the screen.
- [localizedName](nsscreen/localizedname.md): The localized name of the display.
- [canRepresent(\_:)](nsscreen/canrepresent%28__%29.md): A Boolean value indicating whether the color space of the screen is capable of representing the specified display gamut.
- [NSDisplayGamut](nsdisplaygamut.md)
- [screensHaveSeparateSpaces](nsscreen/screenshaveseparatespaces.md): Returns a Boolean value indicating whether each screen can have its own set of spaces.

# NSDeviceDescriptionKey (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

These constants are the keys for device description dictionaries.

## Declaration

```objectivec
typedef NSString * NSDeviceDescriptionKey;
```

## Topics

### Type Properties

- [NSDeviceBitsPerSample](nsdevicedescriptionkey/bitspersample.md): The corresponding value is an `NSNumber` object containing an integer that gives the bit depth of the window’s raster image (2-bit, 8-bit, and so forth).
- [NSDeviceColorSpaceName](nsdevicedescriptionkey/colorspacename.md): The corresponding value is an `NSString` object giving the name of the window’s color space.
- [NSDeviceIsPrinter](nsdevicedescriptionkey/isprinter.md): If there is a corresponding value, this indicates that the display device is a printer.
- [NSDeviceIsScreen](nsdevicedescriptionkey/isscreen.md): If there is a corresponding value, this indicates that the display device is a screen.
- [NSDeviceResolution](nsdevicedescriptionkey/resolution.md): The corresponding value is an `NSValue` object containing a value of type `NSSize` that describes the window’s raster resolution in dots per inch (dpi).
- [NSDeviceSize](nsdevicedescriptionkey/size.md): The corresponding value is an `NSValue` object containing a value of type `NSSize` that gives the size of the window’s frame rectangle.

## See Also

### Getting Screen Information

- [depth](nsscreen/depth.md): The current bit depth and colorspace information of the screen.
- [frame](nsscreen/frame.md): The dimensions and location of the screen.
- [supportedWindowDepths](nsscreen/supportedwindowdepths.md): A zero-terminated array of the window depths supported by the screen.
- [deviceDescription](nsscreen/devicedescription.md): The device dictionary for the screen.
- [userSpaceScaleFactor](nsscreen/userspacescalefactor.md): Deprecated. Returns the scaling factor from user space to device space on the screen.
- [colorSpace](nsscreen/colorspace.md): The color space of the screen.
- [localizedName](nsscreen/localizedname.md): The localized name of the display.
- [canRepresentDisplayGamut:](nsscreen/canrepresent%28__%29.md): A Boolean value indicating whether the color space of the screen is capable of representing the specified display gamut.
- [NSDisplayGamut](nsdisplaygamut.md)
- [screensHaveSeparateSpaces](nsscreen/screenshaveseparatespaces.md): Returns a Boolean value indicating whether each screen can have its own set of spaces.
