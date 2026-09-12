> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenuitem/mixedstateimage](https://developer.apple.com/documentation/appkit/nsmenuitem/mixedstateimage)

# mixedStateImage (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The image of the menu item that indicates a “mixed” state, that is, a state neither “on” nor “off.”

## Declaration

```swift
var mixedStateImage: NSImage! { get set }
```

<a id="Discussion"></a>

## Discussion

A mixed state is useful for indicating a mix of “off” and “on” attribute values in a group of selected objects, such as a selection of text containing boldface and plain (non-boldface) words. By default this is a horizontal line.

## See Also

### Related Documentation

- [state](state.md): The state of the menu item.

### Managing the image

- [image](image.md): The menu item’s image.
- [onStateImage](onstateimage.md): The image of the menu item that indicates an “on” state.
- [offStateImage](offstateimage.md): The image of the menu item that indicates an “off” state.
- [preferredImageVisibility](preferredimagevisibility.md): A menu item’s image visibility determines whether the item’s image is displayed when the menu is open. The default visibility for an item’s image is Automatic. With this value, AppKit determines whether the item’s image is visible based on system configuration. If an item’s image should be visible in all cases, regardless of macOS version or other settings, then set the image visibility to `.visible`.
- [NSMenuItem.ImageVisibility](imagevisibility.md): Values for the `preferredImageVisibility` property of NSMenuItem. When a menu item is initialized, the default value for the item’s image visibility is Automatic.

# mixedStateImage (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The image of the menu item that indicates a “mixed” state, that is, a state neither “on” nor “off.”

## Declaration

```objectivec
@property (strong, null_resettable) NSImage * mixedStateImage;
```

<a id="Discussion"></a>

## Discussion

A mixed state is useful for indicating a mix of “off” and “on” attribute values in a group of selected objects, such as a selection of text containing boldface and plain (non-boldface) words. By default this is a horizontal line.

## See Also

### Related Documentation

- [state](state.md): The state of the menu item.

### Managing the image

- [image](image.md): The menu item’s image.
- [onStateImage](onstateimage.md): The image of the menu item that indicates an “on” state.
- [offStateImage](offstateimage.md): The image of the menu item that indicates an “off” state.
- [preferredImageVisibility](preferredimagevisibility.md): A menu item’s image visibility determines whether the item’s image is displayed when the menu is open. The default visibility for an item’s image is Automatic. With this value, AppKit determines whether the item’s image is visible based on system configuration. If an item’s image should be visible in all cases, regardless of macOS version or other settings, then set the image visibility to `.visible`.
- [NSMenuItemImageVisibility](imagevisibility.md): Values for the `preferredImageVisibility` property of NSMenuItem. When a menu item is initialized, the default value for the item’s image visibility is Automatic.
