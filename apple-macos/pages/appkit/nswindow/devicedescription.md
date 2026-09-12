> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/devicedescription](https://developer.apple.com/documentation/appkit/nswindow/devicedescription)

# deviceDescription (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A dictionary containing information about the window’s resolution, such as color, depth, and so on.

## Declaration

```swift
var deviceDescription: [NSDeviceDescriptionKey : Any] { get }
```

<a id="Discussion"></a>

## Discussion

This information is useful for tuning images and colors to the window’s display capabilities. The contents of the dictionary are described in `Display Device—Descriptions`.

## See Also

### Related Documentation

- [usingColorSpaceName(\_:)](../nscolor/usingcolorspacename%28__%29.md): Deprecated. Creates a new color object whose color is the same as the receiver’s, except that the new color object is in the specified color space.
- [deviceDescription](../nsscreen/devicedescription.md): The device dictionary for the screen.

### Accessing Window Information

- [depthLimit](depthlimit.md): The depth limit of the window.
- [hasDynamicDepthLimit](hasdynamicdepthlimit.md): A Boolean value that indicates whether the window’s depth limit can change to match the depth of the screen it’s on.
- [defaultDepthLimit](defaultdepthlimit.md): Returns the default depth limit for instances of `NSWindow`.
- [windowNumber](windownumber.md): The window number of the window’s window device.
- [windowNumbers(options:)](windownumbers%28options_%29.md): Returns the window numbers for all visible windows satisfying the specified options.
- [NSDeviceDescriptionKey](../nsdevicedescriptionkey.md): These constants are the keys for device description dictionaries.
- [canBecomeVisibleWithoutLogin](canbecomevisiblewithoutlogin.md): A Boolean value that indicates whether the window can be displayed at the login window.
- [sharingType](sharingtype-swift.property.md): A Boolean value that indicates the level of access other processes have to the window’s content.
- [backingType](backingtype.md): The window’s backing store type.
- [displayLink(target:selector:)](displaylink%28target_selector_%29.md): Returns a new display link whose callback will be invoked in-sync with the display the window is on.

# deviceDescription (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A dictionary containing information about the window’s resolution, such as color, depth, and so on.

## Declaration

```objectivec
@property (copy, readonly) NSDictionary<NSString *,id> * deviceDescription;
```

<a id="Discussion"></a>

## Discussion

This information is useful for tuning images and colors to the window’s display capabilities. The contents of the dictionary are described in `Display Device—Descriptions`.

## See Also

### Related Documentation

- [colorUsingColorSpaceName:](../nscolor/usingcolorspacename%28__%29.md): Deprecated. Creates a new color object whose color is the same as the receiver’s, except that the new color object is in the specified color space.
- [deviceDescription](../nsscreen/devicedescription.md): The device dictionary for the screen.
- [bestRepresentationForDevice:](../nsimage/bestrepresentationfordevice_.md): Deprecated. Returns the best representation for the device with the specified characteristics.

### Accessing Window Information

- [depthLimit](depthlimit.md): The depth limit of the window.
- [hasDynamicDepthLimit](hasdynamicdepthlimit.md): A Boolean value that indicates whether the window’s depth limit can change to match the depth of the screen it’s on.
- [defaultDepthLimit](defaultdepthlimit.md): Returns the default depth limit for instances of `NSWindow`.
- [windowNumber](windownumber.md): The window number of the window’s window device.
- [windowNumbersWithOptions:](windownumbers%28options_%29.md): Returns the window numbers for all visible windows satisfying the specified options.
- [NSDeviceDescriptionKey](../nsdevicedescriptionkey.md): These constants are the keys for device description dictionaries.
- [canBecomeVisibleWithoutLogin](canbecomevisiblewithoutlogin.md): A Boolean value that indicates whether the window can be displayed at the login window.
- [sharingType](sharingtype-swift.property.md): A Boolean value that indicates the level of access other processes have to the window’s content.
- [backingType](backingtype.md): The window’s backing store type.
- [displayLinkWithTarget:selector:](displaylink%28target_selector_%29.md): Returns a new display link whose callback will be invoked in-sync with the display the window is on.
