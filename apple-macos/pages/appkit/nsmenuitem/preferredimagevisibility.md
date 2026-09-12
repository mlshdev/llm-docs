> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenuitem/preferredimagevisibility](https://developer.apple.com/documentation/appkit/nsmenuitem/preferredimagevisibility)

# preferredImageVisibility (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

A menu item’s image visibility determines whether the item’s image is displayed when the menu is open. The default visibility for an item’s image is Automatic. With this value, AppKit determines whether the item’s image is visible based on system configuration. If an item’s image should be visible in all cases, regardless of macOS version or other settings, then set the image visibility to `.visible`.

## Declaration

```swift
var preferredImageVisibility: NSMenuItem.ImageVisibility { get set }
```

## See Also

### Managing the image

- [image](image.md): The menu item’s image.
- [onStateImage](onstateimage.md): The image of the menu item that indicates an “on” state.
- [offStateImage](offstateimage.md): The image of the menu item that indicates an “off” state.
- [mixedStateImage](mixedstateimage.md): The image of the menu item that indicates a “mixed” state, that is, a state neither “on” nor “off.”
- [NSMenuItem.ImageVisibility](imagevisibility.md): Values for the `preferredImageVisibility` property of NSMenuItem. When a menu item is initialized, the default value for the item’s image visibility is Automatic.

# preferredImageVisibility (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

A menu item’s image visibility determines whether the item’s image is displayed when the menu is open. The default visibility for an item’s image is Automatic. With this value, AppKit determines whether the item’s image is visible based on system configuration. If an item’s image should be visible in all cases, regardless of macOS version or other settings, then set the image visibility to `.visible`.

## Declaration

```objectivec
@property NSMenuItemImageVisibility preferredImageVisibility;
```

## See Also

### Managing the image

- [image](image.md): The menu item’s image.
- [onStateImage](onstateimage.md): The image of the menu item that indicates an “on” state.
- [offStateImage](offstateimage.md): The image of the menu item that indicates an “off” state.
- [mixedStateImage](mixedstateimage.md): The image of the menu item that indicates a “mixed” state, that is, a state neither “on” nor “off.”
- [NSMenuItemImageVisibility](imagevisibility.md): Values for the `preferredImageVisibility` property of NSMenuItem. When a menu item is initialized, the default value for the item’s image visibility is Automatic.
