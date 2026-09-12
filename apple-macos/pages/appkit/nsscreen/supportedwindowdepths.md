> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscreen/supportedwindowdepths](https://developer.apple.com/documentation/appkit/nsscreen/supportedwindowdepths)

# supportedWindowDepths (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A zero-terminated array of the window depths supported by the screen.

## Declaration

```swift
var supportedWindowDepths: UnsafePointer<NSWindow.Depth> { get }
```

<a id="Discussion"></a>

## Discussion

This is a C-style array of window depths. The returned values cannot be used directly. You must pass each one to a function such as [bitsPerPixel](../nswindow/depth/bitsperpixel.md) or [colorSpaceName](../nswindow/depth/colorspacename.md) to obtain a concrete value for the desired screen.

## See Also

### Getting Screen Information

- [depth](depth.md): The current bit depth and colorspace information of the screen.
- [frame](frame.md): The dimensions and location of the screen.
- [deviceDescription](devicedescription.md): The device dictionary for the screen.
- [NSDeviceDescriptionKey](../nsdevicedescriptionkey.md): These constants are the keys for device description dictionaries.
- [colorSpace](colorspace.md): The color space of the screen.
- [localizedName](localizedname.md): The localized name of the display.
- [canRepresent(\_:)](canrepresent%28__%29.md): A Boolean value indicating whether the color space of the screen is capable of representing the specified display gamut.
- [NSDisplayGamut](../nsdisplaygamut.md)
- [screensHaveSeparateSpaces](screenshaveseparatespaces.md): Returns a Boolean value indicating whether each screen can have its own set of spaces.

# supportedWindowDepths (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A zero-terminated array of the window depths supported by the screen.

## Declaration

```objectivec
@property (readonly) const NSWindowDepth * supportedWindowDepths;
```

<a id="Discussion"></a>

## Discussion

This is a C-style array of window depths. The returned values cannot be used directly. You must pass each one to a function such as [NSBitsPerPixelFromDepth](../nswindow/depth/bitsperpixel.md) or [NSColorSpaceFromDepth](../nswindow/depth/colorspacename.md) to obtain a concrete value for the desired screen.

## See Also

### Getting Screen Information

- [depth](depth.md): The current bit depth and colorspace information of the screen.
- [frame](frame.md): The dimensions and location of the screen.
- [deviceDescription](devicedescription.md): The device dictionary for the screen.
- [NSDeviceDescriptionKey](../nsdevicedescriptionkey.md): These constants are the keys for device description dictionaries.
- [userSpaceScaleFactor](userspacescalefactor.md): Deprecated. Returns the scaling factor from user space to device space on the screen.
- [colorSpace](colorspace.md): The color space of the screen.
- [localizedName](localizedname.md): The localized name of the display.
- [canRepresentDisplayGamut:](canrepresent%28__%29.md): A Boolean value indicating whether the color space of the screen is capable of representing the specified display gamut.
- [NSDisplayGamut](../nsdisplaygamut.md)
- [screensHaveSeparateSpaces](screenshaveseparatespaces.md): Returns a Boolean value indicating whether each screen can have its own set of spaces.
