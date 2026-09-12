> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/windownumbers(options:)](https://developer.apple.com/documentation/appkit/nswindow/windownumbers(options:))

# windowNumbers(options:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.6+

Returns the window numbers for all visible windows satisfying the specified options.

## Declaration

```swift
class func windowNumbers(options: NSWindow.NumberListOptions = []) -> [NSNumber]?
```

## Parameters

- `options`: The possible options are specified in [NSWindow.NumberListOptions](numberlistoptions.md).

<a id="return-value"></a>

## Return Value

An array of window numbers for all visible windows satisfying the specified options. (Windows on the active space are returned in z-order; that is, front to back.)

## See Also

### Accessing Window Information

- [depthLimit](depthlimit.md): The depth limit of the window.
- [hasDynamicDepthLimit](hasdynamicdepthlimit.md): A Boolean value that indicates whether the window’s depth limit can change to match the depth of the screen it’s on.
- [defaultDepthLimit](defaultdepthlimit.md): Returns the default depth limit for instances of `NSWindow`.
- [windowNumber](windownumber.md): The window number of the window’s window device.
- [deviceDescription](devicedescription.md): A dictionary containing information about the window’s resolution, such as color, depth, and so on.
- [NSDeviceDescriptionKey](../nsdevicedescriptionkey.md): These constants are the keys for device description dictionaries.
- [canBecomeVisibleWithoutLogin](canbecomevisiblewithoutlogin.md): A Boolean value that indicates whether the window can be displayed at the login window.
- [sharingType](sharingtype-swift.property.md): A Boolean value that indicates the level of access other processes have to the window’s content.
- [backingType](backingtype.md): The window’s backing store type.
- [displayLink(target:selector:)](displaylink%28target_selector_%29.md): Returns a new display link whose callback will be invoked in-sync with the display the window is on.

# windowNumbersWithOptions: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.6+

Returns the window numbers for all visible windows satisfying the specified options.

## Declaration

```objectivec
+ (NSArray<NSNumber *> *) windowNumbersWithOptions:(NSWindowNumberListOptions) options;
```

## Parameters

- `options`: The possible options are specified in [NSWindowNumberListOptions](numberlistoptions.md).

<a id="return-value"></a>

## Return Value

An array of window numbers for all visible windows satisfying the specified options. (Windows on the active space are returned in z-order; that is, front to back.)

## See Also

### Accessing Window Information

- [depthLimit](depthlimit.md): The depth limit of the window.
- [hasDynamicDepthLimit](hasdynamicdepthlimit.md): A Boolean value that indicates whether the window’s depth limit can change to match the depth of the screen it’s on.
- [defaultDepthLimit](defaultdepthlimit.md): Returns the default depth limit for instances of `NSWindow`.
- [windowNumber](windownumber.md): The window number of the window’s window device.
- [deviceDescription](devicedescription.md): A dictionary containing information about the window’s resolution, such as color, depth, and so on.
- [NSDeviceDescriptionKey](../nsdevicedescriptionkey.md): These constants are the keys for device description dictionaries.
- [canBecomeVisibleWithoutLogin](canbecomevisiblewithoutlogin.md): A Boolean value that indicates whether the window can be displayed at the login window.
- [sharingType](sharingtype-swift.property.md): A Boolean value that indicates the level of access other processes have to the window’s content.
- [backingType](backingtype.md): The window’s backing store type.
- [displayLinkWithTarget:selector:](displaylink%28target_selector_%29.md): Returns a new display link whose callback will be invoked in-sync with the display the window is on.
