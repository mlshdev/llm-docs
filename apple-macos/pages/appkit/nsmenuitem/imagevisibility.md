> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenuitem/imagevisibility](https://developer.apple.com/documentation/appkit/nsmenuitem/imagevisibility)

# NSMenuItem.ImageVisibility (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 27.0+

Values for the `preferredImageVisibility` property of NSMenuItem. When a menu item is initialized, the default value for the item’s image visibility is Automatic.

## Declaration

```swift
enum ImageVisibility
```

## Topics

### Getting visibility values

- [NSMenuItem.ImageVisibility.automatic](imagevisibility/automatic.md): AppKit should choose whether the item’s image is visible, considering the system configuration.
- [NSMenuItem.ImageVisibility.hidden](imagevisibility/hidden.md): The item image should not be visible.
- [NSMenuItem.ImageVisibility.visible](imagevisibility/visible.md): The item image should always be visible. Note that in some cases, AppKit may still hide the image, overriding this preference.

### Initializers

- [init(rawValue:)](imagevisibility/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing the image

- [image](image.md): The menu item’s image.
- [onStateImage](onstateimage.md): The image of the menu item that indicates an “on” state.
- [offStateImage](offstateimage.md): The image of the menu item that indicates an “off” state.
- [mixedStateImage](mixedstateimage.md): The image of the menu item that indicates a “mixed” state, that is, a state neither “on” nor “off.”
- [preferredImageVisibility](preferredimagevisibility.md): A menu item’s image visibility determines whether the item’s image is displayed when the menu is open. The default visibility for an item’s image is Automatic. With this value, AppKit determines whether the item’s image is visible based on system configuration. If an item’s image should be visible in all cases, regardless of macOS version or other settings, then set the image visibility to `.visible`.

# NSMenuItemImageVisibility (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 27.0+

Values for the `preferredImageVisibility` property of NSMenuItem. When a menu item is initialized, the default value for the item’s image visibility is Automatic.

## Declaration

```objectivec
enum NSMenuItemImageVisibility : NSInteger;
```

## Topics

### Getting visibility values

- [NSMenuItemImageVisibilityAutomatic](imagevisibility/automatic.md): AppKit should choose whether the item’s image is visible, considering the system configuration.
- [NSMenuItemImageVisibilityHidden](imagevisibility/hidden.md): The item image should not be visible.
- [NSMenuItemImageVisibilityVisible](imagevisibility/visible.md): The item image should always be visible. Note that in some cases, AppKit may still hide the image, overriding this preference.

## See Also

### Managing the image

- [image](image.md): The menu item’s image.
- [onStateImage](onstateimage.md): The image of the menu item that indicates an “on” state.
- [offStateImage](offstateimage.md): The image of the menu item that indicates an “off” state.
- [mixedStateImage](mixedstateimage.md): The image of the menu item that indicates a “mixed” state, that is, a state neither “on” nor “off.”
- [preferredImageVisibility](preferredimagevisibility.md): A menu item’s image visibility determines whether the item’s image is displayed when the menu is open. The default visibility for an item’s image is Automatic. With this value, AppKit determines whether the item’s image is visible based on system configuration. If an item’s image should be visible in all cases, regardless of macOS version or other settings, then set the image visibility to `.visible`.
