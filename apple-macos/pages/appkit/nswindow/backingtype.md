> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/backingtype](https://developer.apple.com/documentation/appkit/nswindow/backingtype)

# backingType (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The window’s backing store type.

## Declaration

```swift
var backingType: NSWindow.BackingStoreType { get set }
```

<a id="Discussion"></a>

## Discussion

The possible values for this property are described in [NSWindow.BackingStoreType](backingstoretype.md). You can set the property only to switch a buffered window to retained or vice versa; you can’t change the backing type to or from nonretained after initializing a `NSWindow` object (an error is generated if you attempt to do so).

## See Also

### Related Documentation

- [init(contentRect:styleMask:backing:defer:screen:)](init%28contentrect_stylemask_backing_defer_screen_%29.md): Initializes an allocated window with the specified values.
- [init(contentRect:styleMask:backing:defer:)](init%28contentrect_stylemask_backing_defer_%29.md): Initializes the window with the specified values.

### Accessing Window Information

- [depthLimit](depthlimit.md): The depth limit of the window.
- [hasDynamicDepthLimit](hasdynamicdepthlimit.md): A Boolean value that indicates whether the window’s depth limit can change to match the depth of the screen it’s on.
- [defaultDepthLimit](defaultdepthlimit.md): Returns the default depth limit for instances of `NSWindow`.
- [windowNumber](windownumber.md): The window number of the window’s window device.
- [windowNumbers(options:)](windownumbers%28options_%29.md): Returns the window numbers for all visible windows satisfying the specified options.
- [deviceDescription](devicedescription.md): A dictionary containing information about the window’s resolution, such as color, depth, and so on.
- [NSDeviceDescriptionKey](../nsdevicedescriptionkey.md): These constants are the keys for device description dictionaries.
- [canBecomeVisibleWithoutLogin](canbecomevisiblewithoutlogin.md): A Boolean value that indicates whether the window can be displayed at the login window.
- [sharingType](sharingtype-swift.property.md): A Boolean value that indicates the level of access other processes have to the window’s content.
- [displayLink(target:selector:)](displaylink%28target_selector_%29.md): Returns a new display link whose callback will be invoked in-sync with the display the window is on.

# backingType (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The window’s backing store type.

## Declaration

```objectivec
@property NSBackingStoreType backingType;
```

<a id="Discussion"></a>

## Discussion

The possible values for this property are described in [NSBackingStoreType](backingstoretype.md). You can set the property only to switch a buffered window to retained or vice versa; you can’t change the backing type to or from nonretained after initializing a `NSWindow` object (an error is generated if you attempt to do so).

## See Also

### Related Documentation

- [initWithContentRect:styleMask:backing:defer:screen:](init%28contentrect_stylemask_backing_defer_screen_%29.md): Initializes an allocated window with the specified values.
- [initWithContentRect:styleMask:backing:defer:](init%28contentrect_stylemask_backing_defer_%29.md): Initializes the window with the specified values.

### Accessing Window Information

- [depthLimit](depthlimit.md): The depth limit of the window.
- [hasDynamicDepthLimit](hasdynamicdepthlimit.md): A Boolean value that indicates whether the window’s depth limit can change to match the depth of the screen it’s on.
- [defaultDepthLimit](defaultdepthlimit.md): Returns the default depth limit for instances of `NSWindow`.
- [windowNumber](windownumber.md): The window number of the window’s window device.
- [windowNumbersWithOptions:](windownumbers%28options_%29.md): Returns the window numbers for all visible windows satisfying the specified options.
- [deviceDescription](devicedescription.md): A dictionary containing information about the window’s resolution, such as color, depth, and so on.
- [NSDeviceDescriptionKey](../nsdevicedescriptionkey.md): These constants are the keys for device description dictionaries.
- [canBecomeVisibleWithoutLogin](canbecomevisiblewithoutlogin.md): A Boolean value that indicates whether the window can be displayed at the login window.
- [sharingType](sharingtype-swift.property.md): A Boolean value that indicates the level of access other processes have to the window’s content.
- [displayLinkWithTarget:selector:](displaylink%28target_selector_%29.md): Returns a new display link whose callback will be invoked in-sync with the display the window is on.
