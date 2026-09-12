> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenuitem/onstateimage](https://developer.apple.com/documentation/appkit/nsmenuitem/onstateimage)

# onStateImage (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The image of the menu item that indicates an “on” state.

## Declaration

```swift
var onStateImage: NSImage! { get set }
```

## See Also

### Related Documentation

- [state](state.md): The state of the menu item.

### Managing the image

- [image](image.md): The menu item’s image.
- [offStateImage](offstateimage.md): The image of the menu item that indicates an “off” state.
- [mixedStateImage](mixedstateimage.md): The image of the menu item that indicates a “mixed” state, that is, a state neither “on” nor “off.”
- [preferredImageVisibility](preferredimagevisibility.md): A menu item’s image visibility determines whether the item’s image is displayed when the menu is open. The default visibility for an item’s image is Automatic. With this value, AppKit determines whether the item’s image is visible based on system configuration. If an item’s image should be visible in all cases, regardless of macOS version or other settings, then set the image visibility to `.visible`.
- [NSMenuItem.ImageVisibility](imagevisibility.md): Values for the `preferredImageVisibility` property of NSMenuItem. When a menu item is initialized, the default value for the item’s image visibility is Automatic.

# onStateImage (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The image of the menu item that indicates an “on” state.

## Declaration

```objectivec
@property (strong, null_resettable) NSImage * onStateImage;
```

## See Also

### Related Documentation

- [state](state.md): The state of the menu item.

### Managing the image

- [image](image.md): The menu item’s image.
- [offStateImage](offstateimage.md): The image of the menu item that indicates an “off” state.
- [mixedStateImage](mixedstateimage.md): The image of the menu item that indicates a “mixed” state, that is, a state neither “on” nor “off.”
- [preferredImageVisibility](preferredimagevisibility.md): A menu item’s image visibility determines whether the item’s image is displayed when the menu is open. The default visibility for an item’s image is Automatic. With this value, AppKit determines whether the item’s image is visible based on system configuration. If an item’s image should be visible in all cases, regardless of macOS version or other settings, then set the image visibility to `.visible`.
- [NSMenuItemImageVisibility](imagevisibility.md): Values for the `preferredImageVisibility` property of NSMenuItem. When a menu item is initialized, the default value for the item’s image visibility is Automatic.
