> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimenu/init(title:subtitle:image:identifier:options:children:)](https://developer.apple.com/documentation/uikit/uimenu/init(title:subtitle:image:identifier:options:children:))

# init(title:subtitle:image:identifier:options:children:)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS

Creates a new menu with the specified title, subtitle, image, identifier, menu options, and child elements.

## Declaration

```swift
@MainActor @preconcurrency convenience init(title: String = "", subtitle: String? = nil, image: UIImage? = nil, identifier: UIMenu.Identifier? = nil, options: UIMenu.Options = [], children: [UIMenuElement] = [])
```

## Parameters

- `title`: The title of the menu.
- `subtitle`: The subtitle of the menu.
- `image`: The image to display next to the menu’s title.
- `identifier`: The unique identifier for the menu. When creating standard menus for your app, specify an appropriate constant defined in [UIMenu.Identifier](identifier-swift.struct.md). For custom menus, specify a custom reverse domain name value, or specify `nil` to let this method create a unique identifier for you.
- `options`: Additional configuration options for the menu. For a list of possible values, see [UIMenu.Options](options-swift.struct.md).
- `children`: The menu elements in the menu. Specify leaf menu elements using [UIMenuElement](../uimenuelement.md) subclasses like [UIAction](../uiaction.md), [UICommand](../uicommand.md), or [UIKeyCommand](../uikeycommand.md), and specify submenus using [UIMenu](../uimenu.md) objects. You may specify an empty array if the menu has no child menu elements.

## See Also

### Creating a menu object

- [init(title:image:identifier:options:children:)](init%28title_image_identifier_options_children_%29.md): Creates a new menu with the specified values.
- [init(title:subtitle:image:identifier:options:preferredElementSize:children:)](init%28title_subtitle_image_identifier_options_preferredelementsize_children_%29.md): Creates a new menu with the specified title, subtitle, image, identifier, menu options, element size, and child elements.
- [UIMenu.Identifier](identifier-swift.struct.md): Constants you use to identify an app’s standard menus.
- [UIMenu.Options](options-swift.struct.md): Options you use to configure a menu’s appearance.
- [init(coder:)](init%28coder_%29.md): Creates a menu from data in an unarchiver.
