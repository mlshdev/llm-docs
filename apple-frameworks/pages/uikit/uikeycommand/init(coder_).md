> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uikeycommand/init(coder:)](https://developer.apple.com/documentation/uikit/uikeycommand/init(coder:))

# init(coder:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates a key command from data in an unarchiver.

## Declaration

```swift
init?(coder: NSCoder)
```

## See Also

### Creating a key command object

- [init(title:image:action:input:modifierFlags:propertyList:alternates:discoverabilityTitle:attributes:state:)](init%28title_image_action_input_modifierflags_propertylist_alternates_discoverabilitytitle_attributes_state_%29.md): Creates a key command that you can use as a menu element with a shortcut key, or a shortcut key only for a view controller.
- [init(input:modifierFlags:action:)](init%28input_modifierflags_action_%29.md): Creates a key command that matches the specified input.
- [init()](init%28%29.md): Creates a key command.
- [Adding menus and shortcuts to the menu bar and user interface](../adding-menus-and-shortcuts-to-the-menu-bar-and-user-interface.md): Provide quick access to useful actions by adding menus and keyboard shortcuts to your Mac app built with Mac Catalyst.
- [Navigating an app’s user interface using a keyboard](../navigating-an-app-s-user-interface-using-a-keyboard.md): Navigate between user interface elements using a keyboard and focusable UI elements in iPad apps and apps built with Mac Catalyst.

# initWithCoder: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates a key command from data in an unarchiver.

## Declaration

```objectivec
- (instancetype) initWithCoder:(NSCoder *) coder;
```

## See Also

### Creating a key command object

- [commandWithTitle:image:action:input:modifierFlags:propertyList:](commandwithtitle_image_action_input_modifierflags_propertylist_.md): Creates a key command that you can use as a menu element with a shortcut key, or a shortcut key only for a view controller.
- [commandWithTitle:image:action:input:modifierFlags:propertyList:alternates:](commandwithtitle_image_action_input_modifierflags_propertylist_alternates_.md): Creates a key command with alternatives that you can use as a menu element with a shortcut key, or a shortcut key only for a view controller.
- [keyCommandWithInput:modifierFlags:action:](init%28input_modifierflags_action_%29.md): Creates a key command that matches the specified input.
- [init](init%28%29.md): Creates a key command.
- [Adding menus and shortcuts to the menu bar and user interface](../adding-menus-and-shortcuts-to-the-menu-bar-and-user-interface.md): Provide quick access to useful actions by adding menus and keyboard shortcuts to your Mac app built with Mac Catalyst.
- [Navigating an app’s user interface using a keyboard](../navigating-an-app-s-user-interface-using-a-keyboard.md): Navigate between user interface elements using a keyboard and focusable UI elements in iPad apps and apps built with Mac Catalyst.
