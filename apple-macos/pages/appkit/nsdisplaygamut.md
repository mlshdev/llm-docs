> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdisplaygamut](https://developer.apple.com/documentation/appkit/nsdisplaygamut)

# NSDisplayGamut (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.12+

## Declaration

```swift
enum NSDisplayGamut
```

## Topics

### Gamuts

- [NSDisplayGamut.p3](nsdisplaygamut/p3.md)
- [NSDisplayGamut.sRGB](nsdisplaygamut/srgb.md)

### Initializers

- [init(rawValue:)](nsdisplaygamut/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
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
- [NSDeviceDescriptionKey](nsdevicedescriptionkey.md): These constants are the keys for device description dictionaries.
- [colorSpace](nsscreen/colorspace.md): The color space of the screen.
- [localizedName](nsscreen/localizedname.md): The localized name of the display.
- [canRepresent(\_:)](nsscreen/canrepresent%28__%29.md): A Boolean value indicating whether the color space of the screen is capable of representing the specified display gamut.
- [screensHaveSeparateSpaces](nsscreen/screenshaveseparatespaces.md): Returns a Boolean value indicating whether each screen can have its own set of spaces.

# NSDisplayGamut (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.12+

## Declaration

```objectivec
enum NSDisplayGamut : NSInteger;
```

## Topics

### Gamuts

- [NSDisplayGamutP3](nsdisplaygamut/p3.md)
- [NSDisplayGamutSRGB](nsdisplaygamut/srgb.md)

## See Also

### Getting Screen Information

- [depth](nsscreen/depth.md): The current bit depth and colorspace information of the screen.
- [frame](nsscreen/frame.md): The dimensions and location of the screen.
- [supportedWindowDepths](nsscreen/supportedwindowdepths.md): A zero-terminated array of the window depths supported by the screen.
- [deviceDescription](nsscreen/devicedescription.md): The device dictionary for the screen.
- [NSDeviceDescriptionKey](nsdevicedescriptionkey.md): These constants are the keys for device description dictionaries.
- [userSpaceScaleFactor](nsscreen/userspacescalefactor.md): Deprecated. Returns the scaling factor from user space to device space on the screen.
- [colorSpace](nsscreen/colorspace.md): The color space of the screen.
- [localizedName](nsscreen/localizedname.md): The localized name of the display.
- [canRepresentDisplayGamut:](nsscreen/canrepresent%28__%29.md): A Boolean value indicating whether the color space of the screen is capable of representing the specified display gamut.
- [screensHaveSeparateSpaces](nsscreen/screenshaveseparatespaces.md): Returns a Boolean value indicating whether each screen can have its own set of spaces.
