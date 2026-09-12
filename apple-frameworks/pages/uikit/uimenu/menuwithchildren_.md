> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimenu/menuwithchildren:](https://developer.apple.com/documentation/uikit/uimenu/menuwithchildren:)

# menuWithChildren:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a new menu with the specified child elements.

## Declaration

```objectivec
+ (UIMenu *) menuWithChildren:(NSArray<UIMenuElement *> *) children;
```

## Parameters

- `children`: The menu elements in the menu. Specify leaf menu elements using [UIMenuElement](../uimenuelement.md) subclasses like [UIAction](../uiaction.md), [UICommand](../uicommand.md), or [UIKeyCommand](../uikeycommand.md), and specify submenus using [UIMenu](../uimenu.md) objects. You may specify an empty array if the menu has no child menu elements.

## See Also

### Creating a menu object

- [menuWithTitle:children:](menuwithtitle_children_.md): Creates a menu with the specified title and child menu elements.
- [menuWithTitle:image:identifier:options:children:](menuwithtitle_image_identifier_options_children_.md): Creates a new menu with the specified values.
- [UIMenuIdentifier](identifier-swift.struct.md): Constants you use to identify an app’s standard menus.
- [UIMenuOptions](options-swift.struct.md): Options you use to configure a menu’s appearance.
- [initWithCoder:](init%28coder_%29.md): Creates a menu from data in an unarchiver.
