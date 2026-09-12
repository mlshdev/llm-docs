> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/depthlimit](https://developer.apple.com/documentation/appkit/nswindow/depthlimit)

# depthLimit (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The depth limit of the window.

## Declaration

```swift
var depthLimit: NSWindow.Depth { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property can be examined with the Application Kit functions [isPlanar](depth/isplanar.md), [colorSpaceName](depth/colorspacename.md), [bitsPerSample](depth/bitspersample.md), and [bitsPerPixel](depth/bitsperpixel.md). In addition, the [NSBestDepth](../nsbestdepth.md) function provides the best depth limit based on a set of parameters.

Setting this property to `0` sets the depth limit to the window’s default depth limit. A depth limit of `0` can be useful for reverting a window object to its initial depth. You can also use one of the explicit bit depths defined in `Explicit Window Depth Limits` ([NSWindow.Depth.twentyfourBitRGB](depth/twentyfourbitrgb.md) is the default).

## See Also

### Accessing Window Information

- [hasDynamicDepthLimit](hasdynamicdepthlimit.md): A Boolean value that indicates whether the window’s depth limit can change to match the depth of the screen it’s on.
- [defaultDepthLimit](defaultdepthlimit.md): Returns the default depth limit for instances of `NSWindow`.
- [windowNumber](windownumber.md): The window number of the window’s window device.
- [windowNumbers(options:)](windownumbers%28options_%29.md): Returns the window numbers for all visible windows satisfying the specified options.
- [deviceDescription](devicedescription.md): A dictionary containing information about the window’s resolution, such as color, depth, and so on.
- [NSDeviceDescriptionKey](../nsdevicedescriptionkey.md): These constants are the keys for device description dictionaries.
- [canBecomeVisibleWithoutLogin](canbecomevisiblewithoutlogin.md): A Boolean value that indicates whether the window can be displayed at the login window.
- [sharingType](sharingtype-swift.property.md): A Boolean value that indicates the level of access other processes have to the window’s content.
- [backingType](backingtype.md): The window’s backing store type.
- [displayLink(target:selector:)](displaylink%28target_selector_%29.md): Returns a new display link whose callback will be invoked in-sync with the display the window is on.

# depthLimit (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The depth limit of the window.

## Declaration

```objectivec
@property NSWindowDepth depthLimit;
```

<a id="Discussion"></a>

## Discussion

The value of this property can be examined with the Application Kit functions [NSPlanarFromDepth](depth/isplanar.md), [NSColorSpaceFromDepth](depth/colorspacename.md), [NSBitsPerSampleFromDepth](depth/bitspersample.md), and [NSBitsPerPixelFromDepth](depth/bitsperpixel.md). In addition, the [NSBestDepth](../nsbestdepth.md) function provides the best depth limit based on a set of parameters.

Setting this property to `0` sets the depth limit to the window’s default depth limit. A depth limit of `0` can be useful for reverting a window object to its initial depth. You can also use one of the explicit bit depths defined in `Explicit Window Depth Limits` ([NSWindowDepthTwentyfourBitRGB](depth/twentyfourbitrgb.md) is the default).

## See Also

### Accessing Window Information

- [hasDynamicDepthLimit](hasdynamicdepthlimit.md): A Boolean value that indicates whether the window’s depth limit can change to match the depth of the screen it’s on.
- [defaultDepthLimit](defaultdepthlimit.md): Returns the default depth limit for instances of `NSWindow`.
- [windowNumber](windownumber.md): The window number of the window’s window device.
- [windowNumbersWithOptions:](windownumbers%28options_%29.md): Returns the window numbers for all visible windows satisfying the specified options.
- [deviceDescription](devicedescription.md): A dictionary containing information about the window’s resolution, such as color, depth, and so on.
- [NSDeviceDescriptionKey](../nsdevicedescriptionkey.md): These constants are the keys for device description dictionaries.
- [canBecomeVisibleWithoutLogin](canbecomevisiblewithoutlogin.md): A Boolean value that indicates whether the window can be displayed at the login window.
- [sharingType](sharingtype-swift.property.md): A Boolean value that indicates the level of access other processes have to the window’s content.
- [backingType](backingtype.md): The window’s backing store type.
- [displayLinkWithTarget:selector:](displaylink%28target_selector_%29.md): Returns a new display link whose callback will be invoked in-sync with the display the window is on.
