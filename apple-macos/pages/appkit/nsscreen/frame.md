> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscreen/frame](https://developer.apple.com/documentation/appkit/nsscreen/frame)

# frame (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The dimensions and location of the screen.

## Declaration

```swift
var frame: NSRect { get }
```

<a id="Discussion"></a>

## Discussion

This is the full screen rectangle at the current resolution. This rectangle includes any space currently occupied by the menu bar and dock.

## See Also

### Related Documentation

- [visibleFrame](visibleframe.md): The current location and dimensions of the visible screen.

### Getting Screen Information

- [depth](depth.md): The current bit depth and colorspace information of the screen.
- [supportedWindowDepths](supportedwindowdepths.md): A zero-terminated array of the window depths supported by the screen.
- [deviceDescription](devicedescription.md): The device dictionary for the screen.
- [NSDeviceDescriptionKey](../nsdevicedescriptionkey.md): These constants are the keys for device description dictionaries.
- [colorSpace](colorspace.md): The color space of the screen.
- [localizedName](localizedname.md): The localized name of the display.
- [canRepresent(\_:)](canrepresent%28__%29.md): A Boolean value indicating whether the color space of the screen is capable of representing the specified display gamut.
- [NSDisplayGamut](../nsdisplaygamut.md)
- [screensHaveSeparateSpaces](screenshaveseparatespaces.md): Returns a Boolean value indicating whether each screen can have its own set of spaces.

# frame (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The dimensions and location of the screen.

## Declaration

```objectivec
@property (readonly) NSRect frame;
```

<a id="Discussion"></a>

## Discussion

This is the full screen rectangle at the current resolution. This rectangle includes any space currently occupied by the menu bar and dock.

## See Also

### Related Documentation

- [visibleFrame](visibleframe.md): The current location and dimensions of the visible screen.

### Getting Screen Information

- [depth](depth.md): The current bit depth and colorspace information of the screen.
- [supportedWindowDepths](supportedwindowdepths.md): A zero-terminated array of the window depths supported by the screen.
- [deviceDescription](devicedescription.md): The device dictionary for the screen.
- [NSDeviceDescriptionKey](../nsdevicedescriptionkey.md): These constants are the keys for device description dictionaries.
- [userSpaceScaleFactor](userspacescalefactor.md): Deprecated. Returns the scaling factor from user space to device space on the screen.
- [colorSpace](colorspace.md): The color space of the screen.
- [localizedName](localizedname.md): The localized name of the display.
- [canRepresentDisplayGamut:](canrepresent%28__%29.md): A Boolean value indicating whether the color space of the screen is capable of representing the specified display gamut.
- [NSDisplayGamut](../nsdisplaygamut.md)
- [screensHaveSeparateSpaces](screenshaveseparatespaces.md): Returns a Boolean value indicating whether each screen can have its own set of spaces.
