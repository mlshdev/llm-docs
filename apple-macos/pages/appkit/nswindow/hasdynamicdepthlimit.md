> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/hasdynamicdepthlimit](https://developer.apple.com/documentation/appkit/nswindow/hasdynamicdepthlimit)

# hasDynamicDepthLimit (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the window’s depth limit can change to match the depth of the screen it’s on.

## Declaration

```swift
var hasDynamicDepthLimit: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the window has a dynamic depth limit; otherwise, [false](https://developer.apple.com/documentation/swift/false). When the value of [hasDynamicDepthLimit](hasdynamicdepthlimit.md) is [false](https://developer.apple.com/documentation/swift/false), the window uses either its preset depth limit or the default depth limit. A different, and non-dynamic, depth limit can be set using the [depthLimit](depthlimit.md) property.

## See Also

### Accessing Window Information

- [depthLimit](depthlimit.md): The depth limit of the window.
- [defaultDepthLimit](defaultdepthlimit.md): Returns the default depth limit for instances of `NSWindow`.
- [windowNumber](windownumber.md): The window number of the window’s window device.
- [windowNumbers(options:)](windownumbers%28options_%29.md): Returns the window numbers for all visible windows satisfying the specified options.
- [deviceDescription](devicedescription.md): A dictionary containing information about the window’s resolution, such as color, depth, and so on.
- [NSDeviceDescriptionKey](../nsdevicedescriptionkey.md): These constants are the keys for device description dictionaries.
- [canBecomeVisibleWithoutLogin](canbecomevisiblewithoutlogin.md): A Boolean value that indicates whether the window can be displayed at the login window.
- [sharingType](sharingtype-swift.property.md): A Boolean value that indicates the level of access other processes have to the window’s content.
- [backingType](backingtype.md): The window’s backing store type.
- [displayLink(target:selector:)](displaylink%28target_selector_%29.md): Returns a new display link whose callback will be invoked in-sync with the display the window is on.

# hasDynamicDepthLimit (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the window’s depth limit can change to match the depth of the screen it’s on.

## Declaration

```objectivec
@property (readonly) BOOL hasDynamicDepthLimit;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the window has a dynamic depth limit; otherwise, [false](https://developer.apple.com/documentation/swift/false). When the value of [hasDynamicDepthLimit](hasdynamicdepthlimit.md) is [false](https://developer.apple.com/documentation/swift/false), the window uses either its preset depth limit or the default depth limit. A different, and non-dynamic, depth limit can be set using the [depthLimit](depthlimit.md) property.

## See Also

### Accessing Window Information

- [depthLimit](depthlimit.md): The depth limit of the window.
- [defaultDepthLimit](defaultdepthlimit.md): Returns the default depth limit for instances of `NSWindow`.
- [windowNumber](windownumber.md): The window number of the window’s window device.
- [windowNumbersWithOptions:](windownumbers%28options_%29.md): Returns the window numbers for all visible windows satisfying the specified options.
- [deviceDescription](devicedescription.md): A dictionary containing information about the window’s resolution, such as color, depth, and so on.
- [NSDeviceDescriptionKey](../nsdevicedescriptionkey.md): These constants are the keys for device description dictionaries.
- [canBecomeVisibleWithoutLogin](canbecomevisiblewithoutlogin.md): A Boolean value that indicates whether the window can be displayed at the login window.
- [sharingType](sharingtype-swift.property.md): A Boolean value that indicates the level of access other processes have to the window’s content.
- [backingType](backingtype.md): The window’s backing store type.
- [displayLinkWithTarget:selector:](displaylink%28target_selector_%29.md): Returns a new display link whose callback will be invoked in-sync with the display the window is on.
