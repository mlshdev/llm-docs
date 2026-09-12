> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenuitem/imagevisibility/automatic](https://developer.apple.com/documentation/appkit/nsmenuitem/imagevisibility/automatic)

# NSMenuItem.ImageVisibility.automatic (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS 27.0+

AppKit should choose whether the item’s image is visible, considering the system configuration.

## Declaration

```swift
case automatic
```

## See Also

### Getting visibility values

- [NSMenuItem.ImageVisibility.hidden](hidden.md): The item image should not be visible.
- [NSMenuItem.ImageVisibility.visible](visible.md): The item image should always be visible. Note that in some cases, AppKit may still hide the image, overriding this preference.

# NSMenuItemImageVisibilityAutomatic (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 27.0+

AppKit should choose whether the item’s image is visible, considering the system configuration.

## Declaration

```objectivec
NSMenuItemImageVisibilityAutomatic
```

## See Also

### Getting visibility values

- [NSMenuItemImageVisibilityHidden](hidden.md): The item image should not be visible.
- [NSMenuItemImageVisibilityVisible](visible.md): The item image should always be visible. Note that in some cases, AppKit may still hide the image, overriding this preference.
