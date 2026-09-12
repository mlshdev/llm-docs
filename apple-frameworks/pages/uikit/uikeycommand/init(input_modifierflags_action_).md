> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uikeycommand/init(input:modifierflags:action:)](https://developer.apple.com/documentation/uikit/uikeycommand/init(input:modifierflags:action:))

# init(input:modifierFlags:action:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates a key command that matches the specified input.

## Declaration

```swift
convenience init(input: String, modifierFlags: UIKeyModifierFlags, action: Selector)
```

## Parameters

- `input`: The keys that a person must press. The string must contain one or more characters corresponding to the keys a person pressed. For a list of special characters that don’t have a textual representation, see [Input strings for special keys](../input-strings-for-special-keys.md).
- `modifierFlags`: The bit mask of modifier keys that a person must press. You can use this parameter to specify which modifier keys (Command, Option, and so on) a person must also press. You may specify more than one modifier key. For a list of possible values, see [UIKeyModifierFlags](../uikeymodifierflags.md).
- `action`: The action method to execute on the responder object.

<a id="return-value"></a>

## Return Value

A newly initialized key command object.

<a id="Discussion"></a>

## Discussion

After creating a key command object, you can:

- Add it as a child of a [UIMenu](../uimenu.md) using the menu’s [init(title:image:identifier:options:children:)](../uimenu/init%28title_image_identifier_options_children_%29.md) method.
- Add it to a view controller using the [addKeyCommand(\_:)](../uiviewcontroller/addkeycommand%28__%29.md) method of the view controller.
- Override any responder class and return the key command directly from the responder’s [keyCommands](../uiresponder/keycommands.md) property.

## See Also

### Creating a key command object

- [init(title:image:action:input:modifierFlags:propertyList:alternates:discoverabilityTitle:attributes:state:)](init%28title_image_action_input_modifierflags_propertylist_alternates_discoverabilitytitle_attributes_state_%29.md): Creates a key command that you can use as a menu element with a shortcut key, or a shortcut key only for a view controller.
- [init(coder:)](init%28coder_%29.md): Creates a key command from data in an unarchiver.
- [init()](init%28%29.md): Creates a key command.
- [Adding menus and shortcuts to the menu bar and user interface](../adding-menus-and-shortcuts-to-the-menu-bar-and-user-interface.md): Provide quick access to useful actions by adding menus and keyboard shortcuts to your Mac app built with Mac Catalyst.
- [Navigating an app’s user interface using a keyboard](../navigating-an-app-s-user-interface-using-a-keyboard.md): Navigate between user interface elements using a keyboard and focusable UI elements in iPad apps and apps built with Mac Catalyst.

# keyCommandWithInput:modifierFlags:action: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates a key command that matches the specified input.

## Declaration

```objectivec
+ (instancetype) keyCommandWithInput:(NSString *) input modifierFlags:(UIKeyModifierFlags) modifierFlags action:(SEL) action;
```

## Parameters

- `input`: The keys that a person must press. The string must contain one or more characters corresponding to the keys a person pressed. For a list of special characters that don’t have a textual representation, see [Input strings for special keys](../input-strings-for-special-keys.md).
- `modifierFlags`: The bit mask of modifier keys that a person must press. You can use this parameter to specify which modifier keys (Command, Option, and so on) a person must also press. You may specify more than one modifier key. For a list of possible values, see [UIKeyModifierFlags](../uikeymodifierflags.md).
- `action`: The action method to execute on the responder object.

<a id="return-value"></a>

## Return Value

A newly initialized key command object.

<a id="Discussion"></a>

## Discussion

After creating a key command object, you can:

- Add it as a child of a [UIMenu](../uimenu.md) using the menu’s [init(title:image:identifier:options:children:)](../uimenu/init%28title_image_identifier_options_children_%29.md) method.
- Add it to a view controller using the [addKeyCommand:](../uiviewcontroller/addkeycommand%28__%29.md) method of the view controller.
- Override any responder class and return the key command directly from the responder’s [keyCommands](../uiresponder/keycommands.md) property.

## See Also

### Creating a key command object

- [commandWithTitle:image:action:input:modifierFlags:propertyList:](commandwithtitle_image_action_input_modifierflags_propertylist_.md): Creates a key command that you can use as a menu element with a shortcut key, or a shortcut key only for a view controller.
- [commandWithTitle:image:action:input:modifierFlags:propertyList:alternates:](commandwithtitle_image_action_input_modifierflags_propertylist_alternates_.md): Creates a key command with alternatives that you can use as a menu element with a shortcut key, or a shortcut key only for a view controller.
- [initWithCoder:](init%28coder_%29.md): Creates a key command from data in an unarchiver.
- [init](init%28%29.md): Creates a key command.
- [Adding menus and shortcuts to the menu bar and user interface](../adding-menus-and-shortcuts-to-the-menu-bar-and-user-interface.md): Provide quick access to useful actions by adding menus and keyboard shortcuts to your Mac app built with Mac Catalyst.
- [Navigating an app’s user interface using a keyboard](../navigating-an-app-s-user-interface-using-a-keyboard.md): Navigate between user interface elements using a keyboard and focusable UI elements in iPad apps and apps built with Mac Catalyst.
