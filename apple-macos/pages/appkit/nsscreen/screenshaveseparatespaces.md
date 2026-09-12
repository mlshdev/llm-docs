> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscreen/screenshaveseparatespaces](https://developer.apple.com/documentation/appkit/nsscreen/screenshaveseparatespaces)

# screensHaveSeparateSpaces (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.9+

Returns a Boolean value indicating whether each screen can have its own set of spaces.

## Declaration

```swift
class var screensHaveSeparateSpaces: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This method reflects whether the “Displays have separate Spaces” option is enabled in Mission Control system preference. You might use the return value to determine how to present your app when in fullscreen mode.

## See Also

### Getting Screen Information

- [depth](depth.md): The current bit depth and colorspace information of the screen.
- [frame](frame.md): The dimensions and location of the screen.
- [supportedWindowDepths](supportedwindowdepths.md): A zero-terminated array of the window depths supported by the screen.
- [deviceDescription](devicedescription.md): The device dictionary for the screen.
- [NSDeviceDescriptionKey](../nsdevicedescriptionkey.md): These constants are the keys for device description dictionaries.
- [colorSpace](colorspace.md): The color space of the screen.
- [localizedName](localizedname.md): The localized name of the display.
- [canRepresent(\_:)](canrepresent%28__%29.md): A Boolean value indicating whether the color space of the screen is capable of representing the specified display gamut.
- [NSDisplayGamut](../nsdisplaygamut.md)

# screensHaveSeparateSpaces (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.9+

Returns a Boolean value indicating whether each screen can have its own set of spaces.

## Declaration

```objectivec
@property (class, readonly) BOOL screensHaveSeparateSpaces;
```

<a id="Discussion"></a>

## Discussion

This method reflects whether the “Displays have separate Spaces” option is enabled in Mission Control system preference. You might use the return value to determine how to present your app when in fullscreen mode.

## See Also

### Getting Screen Information

- [depth](depth.md): The current bit depth and colorspace information of the screen.
- [frame](frame.md): The dimensions and location of the screen.
- [supportedWindowDepths](supportedwindowdepths.md): A zero-terminated array of the window depths supported by the screen.
- [deviceDescription](devicedescription.md): The device dictionary for the screen.
- [NSDeviceDescriptionKey](../nsdevicedescriptionkey.md): These constants are the keys for device description dictionaries.
- [userSpaceScaleFactor](userspacescalefactor.md): Deprecated. Returns the scaling factor from user space to device space on the screen.
- [colorSpace](colorspace.md): The color space of the screen.
- [localizedName](localizedname.md): The localized name of the display.
- [canRepresentDisplayGamut:](canrepresent%28__%29.md): A Boolean value indicating whether the color space of the screen is capable of representing the specified display gamut.
- [NSDisplayGamut](../nsdisplaygamut.md)
