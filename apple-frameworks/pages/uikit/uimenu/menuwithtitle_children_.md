> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimenu/menuwithtitle:children:](https://developer.apple.com/documentation/uikit/uimenu/menuwithtitle:children:)

# menuWithTitle:children:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Creates a menu with the specified title and child menu elements.

## Declaration

```objectivec
+ (UIMenu *) menuWithTitle:(NSString *) title children:(NSArray<UIMenuElement *> *) children;
```

## Parameters

- `title`: The title of the menu.
- `children`: The menu elements in the menu. Specify leaf menu elements using [UIMenuElement](../uimenuelement.md) subclasses like [UIAction](../uiaction.md), [UICommand](../uicommand.md), or [UIKeyCommand](../uikeycommand.md), and specify submenus using [UIMenu](../uimenu.md) objects. You may specify an empty array if the menu has no child menu elements.

<a id="return-value"></a>

## Return Value

A new menu object.

<a id="Discussion"></a>

## Discussion

This method creates a unique identifier for the menu and exposes that value from the [identifier](identifier-swift.property.md) property.

## See Also

### Creating a menu object

- [menuWithChildren:](menuwithchildren_.md): Creates a new menu with the specified child elements.
- [menuWithTitle:image:identifier:options:children:](menuwithtitle_image_identifier_options_children_.md): Creates a new menu with the specified values.
- [UIMenuIdentifier](identifier-swift.struct.md): Constants you use to identify an app’s standard menus.
- [UIMenuOptions](options-swift.struct.md): Options you use to configure a menu’s appearance.
- [initWithCoder:](init%28coder_%29.md): Creates a menu from data in an unarchiver.
