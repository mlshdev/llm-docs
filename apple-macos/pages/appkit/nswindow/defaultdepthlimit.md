> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/defaultdepthlimit](https://developer.apple.com/documentation/appkit/nswindow/defaultdepthlimit)

# defaultDepthLimit (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns the default depth limit for instances of `NSWindow`.

## Declaration

```swift
class var defaultDepthLimit: NSWindow.Depth { get }
```

<a id="return-value"></a>

## Return Value

The default depth limit for instances of `NSWindow`, determined by the depth of the deepest screen level available to the window server.

<a id="Discussion"></a>

## Discussion

The value returned can be examined with the Application Kit functions [isPlanar](depth/isplanar.md), [colorSpaceName](depth/colorspacename.md), [bitsPerSample](depth/bitspersample.md), and [bitsPerPixel](depth/bitsperpixel.md).

## See Also

### Related Documentation

- [canStoreColor()](canstorecolor%28%29.md): Deprecated. Indicates whether the window has a depth limit that allows it to store color values.

### Accessing Window Information

- [depthLimit](depthlimit.md): The depth limit of the window.
- [hasDynamicDepthLimit](hasdynamicdepthlimit.md): A Boolean value that indicates whether the window’s depth limit can change to match the depth of the screen it’s on.
- [windowNumber](windownumber.md): The window number of the window’s window device.
- [windowNumbers(options:)](windownumbers%28options_%29.md): Returns the window numbers for all visible windows satisfying the specified options.
- [deviceDescription](devicedescription.md): A dictionary containing information about the window’s resolution, such as color, depth, and so on.
- [NSDeviceDescriptionKey](../nsdevicedescriptionkey.md): These constants are the keys for device description dictionaries.
- [canBecomeVisibleWithoutLogin](canbecomevisiblewithoutlogin.md): A Boolean value that indicates whether the window can be displayed at the login window.
- [sharingType](sharingtype-swift.property.md): A Boolean value that indicates the level of access other processes have to the window’s content.
- [backingType](backingtype.md): The window’s backing store type.
- [displayLink(target:selector:)](displaylink%28target_selector_%29.md): Returns a new display link whose callback will be invoked in-sync with the display the window is on.

# defaultDepthLimit (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns the default depth limit for instances of `NSWindow`.

## Declaration

```objectivec
@property (class, readonly) NSWindowDepth defaultDepthLimit;
```

<a id="return-value"></a>

## Return Value

The default depth limit for instances of `NSWindow`, determined by the depth of the deepest screen level available to the window server.

<a id="Discussion"></a>

## Discussion

The value returned can be examined with the Application Kit functions [NSPlanarFromDepth](depth/isplanar.md), [NSColorSpaceFromDepth](depth/colorspacename.md), [NSBitsPerSampleFromDepth](depth/bitspersample.md), and [NSBitsPerPixelFromDepth](depth/bitsperpixel.md).

## See Also

### Related Documentation

- [canStoreColor](canstorecolor%28%29.md): Deprecated. Indicates whether the window has a depth limit that allows it to store color values.

### Accessing Window Information

- [depthLimit](depthlimit.md): The depth limit of the window.
- [hasDynamicDepthLimit](hasdynamicdepthlimit.md): A Boolean value that indicates whether the window’s depth limit can change to match the depth of the screen it’s on.
- [windowNumber](windownumber.md): The window number of the window’s window device.
- [windowNumbersWithOptions:](windownumbers%28options_%29.md): Returns the window numbers for all visible windows satisfying the specified options.
- [deviceDescription](devicedescription.md): A dictionary containing information about the window’s resolution, such as color, depth, and so on.
- [NSDeviceDescriptionKey](../nsdevicedescriptionkey.md): These constants are the keys for device description dictionaries.
- [canBecomeVisibleWithoutLogin](canbecomevisiblewithoutlogin.md): A Boolean value that indicates whether the window can be displayed at the login window.
- [sharingType](sharingtype-swift.property.md): A Boolean value that indicates the level of access other processes have to the window’s content.
- [backingType](backingtype.md): The window’s backing store type.
- [displayLinkWithTarget:selector:](displaylink%28target_selector_%29.md): Returns a new display link whose callback will be invoked in-sync with the display the window is on.
