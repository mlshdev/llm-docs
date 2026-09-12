> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscreen/localizedname](https://developer.apple.com/documentation/appkit/nsscreen/localizedname)

# localizedName (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The localized name of the display.

## Declaration

```swift
var localizedName: String { get }
```

## See Also

### Getting Screen Information

- [depth](depth.md): The current bit depth and colorspace information of the screen.
- [frame](frame.md): The dimensions and location of the screen.
- [supportedWindowDepths](supportedwindowdepths.md): A zero-terminated array of the window depths supported by the screen.
- [deviceDescription](devicedescription.md): The device dictionary for the screen.
- [NSDeviceDescriptionKey](../nsdevicedescriptionkey.md): These constants are the keys for device description dictionaries.
- [colorSpace](colorspace.md): The color space of the screen.
- [canRepresent(\_:)](canrepresent%28__%29.md): A Boolean value indicating whether the color space of the screen is capable of representing the specified display gamut.
- [NSDisplayGamut](../nsdisplaygamut.md)
- [screensHaveSeparateSpaces](screenshaveseparatespaces.md): Returns a Boolean value indicating whether each screen can have its own set of spaces.

# localizedName (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The localized name of the display.

## Declaration

```objectivec
@property (copy, readonly) NSString * localizedName;
```

## See Also

### Getting Screen Information

- [depth](depth.md): The current bit depth and colorspace information of the screen.
- [frame](frame.md): The dimensions and location of the screen.
- [supportedWindowDepths](supportedwindowdepths.md): A zero-terminated array of the window depths supported by the screen.
- [deviceDescription](devicedescription.md): The device dictionary for the screen.
- [NSDeviceDescriptionKey](../nsdevicedescriptionkey.md): These constants are the keys for device description dictionaries.
- [userSpaceScaleFactor](userspacescalefactor.md): Deprecated. Returns the scaling factor from user space to device space on the screen.
- [colorSpace](colorspace.md): The color space of the screen.
- [canRepresentDisplayGamut:](canrepresent%28__%29.md): A Boolean value indicating whether the color space of the screen is capable of representing the specified display gamut.
- [NSDisplayGamut](../nsdisplaygamut.md)
- [screensHaveSeparateSpaces](screenshaveseparatespaces.md): Returns a Boolean value indicating whether each screen can have its own set of spaces.
