> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscreen/devicedescription](https://developer.apple.com/documentation/appkit/nsscreen/devicedescription)

# deviceDescription (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The device dictionary for the screen.

## Declaration

```swift
var deviceDescription: [NSDeviceDescriptionKey : Any] { get }
```

<a id="Discussion"></a>

## Discussion

This is a dictionary containing the attributes of the receiver’s screen. For the list of keys you can use to retrieve values from the returned dictionary, see `Display Device—Descriptions`.

In addition to the display device constants described in [NSWindow](../nswindow.md), you can also retrieve the [CGDirectDisplayID](https://developer.apple.com/documentation/coregraphics/cgdirectdisplayid) value associated with the screen from this dictionary. To access this value, specify the Objective-C string `@"NSScreenNumber"` as the key when requesting the item from the dictionary. The value associated with this key is an [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) object containing the display ID value. This string is only valid when used as a key for the dictionary returned by this method.

## See Also

### Getting Screen Information

- [depth](depth.md): The current bit depth and colorspace information of the screen.
- [frame](frame.md): The dimensions and location of the screen.
- [supportedWindowDepths](supportedwindowdepths.md): A zero-terminated array of the window depths supported by the screen.
- [NSDeviceDescriptionKey](../nsdevicedescriptionkey.md): These constants are the keys for device description dictionaries.
- [colorSpace](colorspace.md): The color space of the screen.
- [localizedName](localizedname.md): The localized name of the display.
- [canRepresent(\_:)](canrepresent%28__%29.md): A Boolean value indicating whether the color space of the screen is capable of representing the specified display gamut.
- [NSDisplayGamut](../nsdisplaygamut.md)
- [screensHaveSeparateSpaces](screenshaveseparatespaces.md): Returns a Boolean value indicating whether each screen can have its own set of spaces.

# deviceDescription (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The device dictionary for the screen.

## Declaration

```objectivec
@property (copy, readonly) NSDictionary<NSString *,id> * deviceDescription;
```

<a id="Discussion"></a>

## Discussion

This is a dictionary containing the attributes of the receiver’s screen. For the list of keys you can use to retrieve values from the returned dictionary, see `Display Device—Descriptions`.

In addition to the display device constants described in [NSWindow](../nswindow.md), you can also retrieve the [CGDirectDisplayID](https://developer.apple.com/documentation/coregraphics/cgdirectdisplayid) value associated with the screen from this dictionary. To access this value, specify the Objective-C string `@"NSScreenNumber"` as the key when requesting the item from the dictionary. The value associated with this key is an [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) object containing the display ID value. This string is only valid when used as a key for the dictionary returned by this method.

## See Also

### Getting Screen Information

- [depth](depth.md): The current bit depth and colorspace information of the screen.
- [frame](frame.md): The dimensions and location of the screen.
- [supportedWindowDepths](supportedwindowdepths.md): A zero-terminated array of the window depths supported by the screen.
- [NSDeviceDescriptionKey](../nsdevicedescriptionkey.md): These constants are the keys for device description dictionaries.
- [userSpaceScaleFactor](userspacescalefactor.md): Deprecated. Returns the scaling factor from user space to device space on the screen.
- [colorSpace](colorspace.md): The color space of the screen.
- [localizedName](localizedname.md): The localized name of the display.
- [canRepresentDisplayGamut:](canrepresent%28__%29.md): A Boolean value indicating whether the color space of the screen is capable of representing the specified display gamut.
- [NSDisplayGamut](../nsdisplaygamut.md)
- [screensHaveSeparateSpaces](screenshaveseparatespaces.md): Returns a Boolean value indicating whether each screen can have its own set of spaces.
