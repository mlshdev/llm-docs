> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimenu/options-swift.struct](https://developer.apple.com/documentation/uikit/uimenu/options-swift.struct)

# UIMenu.Options (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Options you use to configure a menu’s appearance.

## Declaration

```swift
struct Options
```

## Topics

### Options

- [displayInline](options-swift.struct/displayinline.md): An option indicating the menu displays inline with its parent menu instead of displaying as a submenu.
- [destructive](options-swift.struct/destructive.md): An option indicating the menu’s appearance represents a destructive action.
- [singleSelection](options-swift.struct/singleselection.md): An option indicating whether the menu and its submenus allow a single menu item that’s in the “on” state.
- [displayAsPalette](options-swift.struct/displayaspalette.md): An option indicating the menu displays as a row of menu elements for choosing from a collection of items.

### Initializers

- [init(rawValue:)](options-swift.struct/init%28rawvalue_%29.md): Creates a menu options structure from data in an unarchiver.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Creating a menu object

- [init(title:image:identifier:options:children:)](init%28title_image_identifier_options_children_%29.md): Creates a new menu with the specified values.
- [init(title:subtitle:image:identifier:options:children:)](init%28title_subtitle_image_identifier_options_children_%29.md): Creates a new menu with the specified title, subtitle, image, identifier, menu options, and child elements.
- [init(title:subtitle:image:identifier:options:preferredElementSize:children:)](init%28title_subtitle_image_identifier_options_preferredelementsize_children_%29.md): Creates a new menu with the specified title, subtitle, image, identifier, menu options, element size, and child elements.
- [UIMenu.Identifier](identifier-swift.struct.md): Constants you use to identify an app’s standard menus.
- [init(coder:)](init%28coder_%29.md): Creates a menu from data in an unarchiver.

# UIMenuOptions (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Options you use to configure a menu’s appearance.

## Declaration

```objectivec
enum UIMenuOptions : NSUInteger;
```

## Topics

### Options

- [UIMenuOptionsDisplayInline](options-swift.struct/displayinline.md): An option indicating the menu displays inline with its parent menu instead of displaying as a submenu.
- [UIMenuOptionsDestructive](options-swift.struct/destructive.md): An option indicating the menu’s appearance represents a destructive action.
- [UIMenuOptionsSingleSelection](options-swift.struct/singleselection.md): An option indicating whether the menu and its submenus allow a single menu item that’s in the “on” state.
- [UIMenuOptionsDisplayAsPalette](options-swift.struct/displayaspalette.md): An option indicating the menu displays as a row of menu elements for choosing from a collection of items.

## See Also

### Creating a menu object

- [menuWithChildren:](menuwithchildren_.md): Creates a new menu with the specified child elements.
- [menuWithTitle:children:](menuwithtitle_children_.md): Creates a menu with the specified title and child menu elements.
- [menuWithTitle:image:identifier:options:children:](menuwithtitle_image_identifier_options_children_.md): Creates a new menu with the specified values.
- [UIMenuIdentifier](identifier-swift.struct.md): Constants you use to identify an app’s standard menus.
- [initWithCoder:](init%28coder_%29.md): Creates a menu from data in an unarchiver.
