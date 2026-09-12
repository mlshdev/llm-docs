> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimenu/init(coder:)](https://developer.apple.com/documentation/uikit/uimenu/init(coder:))

# init(coder:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Creates a menu from data in an unarchiver.

## Declaration

```swift
init?(coder: NSCoder)
```

## See Also

### Creating a menu object

- [init(title:image:identifier:options:children:)](init%28title_image_identifier_options_children_%29.md): Creates a new menu with the specified values.
- [init(title:subtitle:image:identifier:options:children:)](init%28title_subtitle_image_identifier_options_children_%29.md): Creates a new menu with the specified title, subtitle, image, identifier, menu options, and child elements.
- [init(title:subtitle:image:identifier:options:preferredElementSize:children:)](init%28title_subtitle_image_identifier_options_preferredelementsize_children_%29.md): Creates a new menu with the specified title, subtitle, image, identifier, menu options, element size, and child elements.
- [UIMenu.Identifier](identifier-swift.struct.md): Constants you use to identify an app’s standard menus.
- [UIMenu.Options](options-swift.struct.md): Options you use to configure a menu’s appearance.

# initWithCoder: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Creates a menu from data in an unarchiver.

## Declaration

```objectivec
- (instancetype) initWithCoder:(NSCoder *) coder;
```

## See Also

### Creating a menu object

- [menuWithChildren:](menuwithchildren_.md): Creates a new menu with the specified child elements.
- [menuWithTitle:children:](menuwithtitle_children_.md): Creates a menu with the specified title and child menu elements.
- [menuWithTitle:image:identifier:options:children:](menuwithtitle_image_identifier_options_children_.md): Creates a new menu with the specified values.
- [UIMenuIdentifier](identifier-swift.struct.md): Constants you use to identify an app’s standard menus.
- [UIMenuOptions](options-swift.struct.md): Options you use to configure a menu’s appearance.
