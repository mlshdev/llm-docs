> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscreen/userspacescalefactor](https://developer.apple.com/documentation/appkit/nsscreen/userspacescalefactor)

# userSpaceScaleFactor

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.7)

Returns the scaling factor from user space to device space on the screen.

## Declaration

```objectivec
- (CGFloat) userSpaceScaleFactor;
```

<a id="return-value"></a>

## Return Value

The scaling factor, measured in pixels per point, where a point is always equal to 1/72 of an inch. For example, a scaling factor of `2.0` indicates the display has a resolution 2 pixels per point or 144 pixels per inch.

## See Also

### Related Documentation

- [convertRectToBacking:](convertrecttobacking%28__%29.md): Converts the rectangle to the device pixel aligned coordinates system of a screen.
- [backingScaleFactor](backingscalefactor.md): The backing store pixel scale factor for the screen.

### Getting Screen Information

- [depth](depth.md): The current bit depth and colorspace information of the screen.
- [frame](frame.md): The dimensions and location of the screen.
- [supportedWindowDepths](supportedwindowdepths.md): A zero-terminated array of the window depths supported by the screen.
- [deviceDescription](devicedescription.md): The device dictionary for the screen.
- [NSDeviceDescriptionKey](../nsdevicedescriptionkey.md): These constants are the keys for device description dictionaries.
- [colorSpace](colorspace.md): The color space of the screen.
- [localizedName](localizedname.md): The localized name of the display.
- [canRepresentDisplayGamut:](canrepresent%28__%29.md): A Boolean value indicating whether the color space of the screen is capable of representing the specified display gamut.
- [NSDisplayGamut](../nsdisplaygamut.md)
- [screensHaveSeparateSpaces](screenshaveseparatespaces.md): Returns a Boolean value indicating whether each screen can have its own set of spaces.
