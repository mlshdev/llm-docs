> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenuitem/imagevisibility/visible](https://developer.apple.com/documentation/appkit/nsmenuitem/imagevisibility/visible)

# NSMenuItem.ImageVisibility.visible (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS 27.0+

The item image should always be visible. Note that in some cases, AppKit may still hide the image, overriding this preference.

## Declaration

```swift
case visible
```

## See Also

### Getting visibility values

- [NSMenuItem.ImageVisibility.automatic](automatic.md): AppKit should choose whether the item’s image is visible, considering the system configuration.
- [NSMenuItem.ImageVisibility.hidden](hidden.md): The item image should not be visible.

# NSMenuItemImageVisibilityVisible (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 27.0+

The item image should always be visible. Note that in some cases, AppKit may still hide the image, overriding this preference.

## Declaration

```objectivec
NSMenuItemImageVisibilityVisible
```

## See Also

### Getting visibility values

- [NSMenuItemImageVisibilityAutomatic](automatic.md): AppKit should choose whether the item’s image is visible, considering the system configuration.
- [NSMenuItemImageVisibilityHidden](hidden.md): The item image should not be visible.
