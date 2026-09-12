> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/windownumber](https://developer.apple.com/documentation/appkit/nswindow/windownumber)

# windowNumber (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The window number of the window’s window device.

## Declaration

```swift
var windowNumber: Int { get }
```

<a id="Discussion"></a>

## Discussion

Each window device in an application is given a unique window number—note that this isn’t the same as the global window number assigned by the window server. This number can be used to identify the window device with the [order(\_:relativeTo:)](order%28__relativeto_%29.md) method and in the AppKit function [NSWindowList](../nswindowlist.md).

If the window doesn’t have a window device, the value of this property is equal to or less than `0`.

## See Also

### Related Documentation

- [isOneShot](isoneshot.md): Deprecated. A Boolean value that indicates whether the window device the window manages is freed when it’s removed from the screen list.
- [init(contentRect:styleMask:backing:defer:)](init%28contentrect_stylemask_backing_defer_%29.md): Initializes the window with the specified values.

### Accessing Window Information

- [depthLimit](depthlimit.md): The depth limit of the window.
- [hasDynamicDepthLimit](hasdynamicdepthlimit.md): A Boolean value that indicates whether the window’s depth limit can change to match the depth of the screen it’s on.
- [defaultDepthLimit](defaultdepthlimit.md): Returns the default depth limit for instances of `NSWindow`.
- [windowNumbers(options:)](windownumbers%28options_%29.md): Returns the window numbers for all visible windows satisfying the specified options.
- [deviceDescription](devicedescription.md): A dictionary containing information about the window’s resolution, such as color, depth, and so on.
- [NSDeviceDescriptionKey](../nsdevicedescriptionkey.md): These constants are the keys for device description dictionaries.
- [canBecomeVisibleWithoutLogin](canbecomevisiblewithoutlogin.md): A Boolean value that indicates whether the window can be displayed at the login window.
- [sharingType](sharingtype-swift.property.md): A Boolean value that indicates the level of access other processes have to the window’s content.
- [backingType](backingtype.md): The window’s backing store type.
- [displayLink(target:selector:)](displaylink%28target_selector_%29.md): Returns a new display link whose callback will be invoked in-sync with the display the window is on.

# windowNumber (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The window number of the window’s window device.

## Declaration

```objectivec
@property (readonly) NSInteger windowNumber;
```

<a id="Discussion"></a>

## Discussion

Each window device in an application is given a unique window number—note that this isn’t the same as the global window number assigned by the window server. This number can be used to identify the window device with the [orderWindow:relativeTo:](order%28__relativeto_%29.md) method and in the AppKit function [NSWindowList](../nswindowlist.md).

If the window doesn’t have a window device, the value of this property is equal to or less than `0`.

## See Also

### Related Documentation

- [oneShot](isoneshot.md): Deprecated. A Boolean value that indicates whether the window device the window manages is freed when it’s removed from the screen list.
- [initWithContentRect:styleMask:backing:defer:](init%28contentrect_stylemask_backing_defer_%29.md): Initializes the window with the specified values.

### Accessing Window Information

- [depthLimit](depthlimit.md): The depth limit of the window.
- [hasDynamicDepthLimit](hasdynamicdepthlimit.md): A Boolean value that indicates whether the window’s depth limit can change to match the depth of the screen it’s on.
- [defaultDepthLimit](defaultdepthlimit.md): Returns the default depth limit for instances of `NSWindow`.
- [windowNumbersWithOptions:](windownumbers%28options_%29.md): Returns the window numbers for all visible windows satisfying the specified options.
- [deviceDescription](devicedescription.md): A dictionary containing information about the window’s resolution, such as color, depth, and so on.
- [NSDeviceDescriptionKey](../nsdevicedescriptionkey.md): These constants are the keys for device description dictionaries.
- [canBecomeVisibleWithoutLogin](canbecomevisiblewithoutlogin.md): A Boolean value that indicates whether the window can be displayed at the login window.
- [sharingType](sharingtype-swift.property.md): A Boolean value that indicates the level of access other processes have to the window’s content.
- [backingType](backingtype.md): The window’s backing store type.
- [displayLinkWithTarget:selector:](displaylink%28target_selector_%29.md): Returns a new display link whose callback will be invoked in-sync with the display the window is on.
