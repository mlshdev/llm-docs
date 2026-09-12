> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicommand/init(coder:)](https://developer.apple.com/documentation/uikit/uicommand/init(coder:))

# init(coder:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Creates a command from data in an unarchiver.

## Declaration

```swift
init?(coder: NSCoder)
```

## See Also

### Creating a command

- [init(title:subtitle:image:action:propertyList:alternates:discoverabilityTitle:attributes:state:)](init%28title_subtitle_image_action_propertylist_alternates_discoverabilitytitle_attributes_state_%29.md): Creates a command with the specified title, subtitle, image, action, property list, alternative commands, discoverability title, attributes, and state.
- [init(title:image:action:propertyList:alternates:discoverabilityTitle:attributes:state:)](init%28title_image_action_propertylist_alternates_discoverabilitytitle_attributes_state_%29.md): Creates a command with the specified title, image, action, property list, alternative commands, discoverability title, attributes, and state.
- [Adding menus and shortcuts to the menu bar and user interface](../adding-menus-and-shortcuts-to-the-menu-bar-and-user-interface.md): Provide quick access to useful actions by adding menus and keyboard shortcuts to your Mac app built with Mac Catalyst.

# initWithCoder: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Creates a command from data in an unarchiver.

## Declaration

```objectivec
- (instancetype) initWithCoder:(NSCoder *) coder;
```

## See Also

### Creating a command

- [commandWithTitle:image:action:propertyList:](commandwithtitle_image_action_propertylist_.md): Creates a command with the specified title, image, action, and property list.
- [commandWithTitle:image:action:propertyList:alternates:](commandwithtitle_image_action_propertylist_alternates_.md): Creates a command with the specified title, image, action, property list, and alternative commands.
- [Adding menus and shortcuts to the menu bar and user interface](../adding-menus-and-shortcuts-to-the-menu-bar-and-user-interface.md): Provide quick access to useful actions by adding menus and keyboard shortcuts to your Mac app built with Mac Catalyst.
