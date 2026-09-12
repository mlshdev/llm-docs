> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/displaylink(target:selector:)](https://developer.apple.com/documentation/appkit/nswindow/displaylink(target:selector:))

# displayLink(target:selector:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Returns a new display link whose callback will be invoked in-sync with the display the window is on.

## Declaration

```swift
func displayLink(target: Any, selector: Selector) -> CADisplayLink
```

<a id="discussion"></a>

## Discussion

If the window is not on any display the callback will not be invoked.

## See Also

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
- [backingType](backingtype.md): The window’s backing store type.

# displayLinkWithTarget:selector: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Returns a new display link whose callback will be invoked in-sync with the display the window is on.

## Declaration

```objectivec
- (CADisplayLink *) displayLinkWithTarget:(id) target selector:(SEL) selector;
```

<a id="discussion"></a>

## Discussion

If the window is not on any display the callback will not be invoked.

## See Also

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
- [backingType](backingtype.md): The window’s backing store type.
