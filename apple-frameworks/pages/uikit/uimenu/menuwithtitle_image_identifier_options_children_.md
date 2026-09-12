> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimenu/menuwithtitle:image:identifier:options:children:](https://developer.apple.com/documentation/uikit/uimenu/menuwithtitle:image:identifier:options:children:)

# menuWithTitle:image:identifier:options:children:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Creates a new menu with the specified values.

## Declaration

```objectivec
+ (UIMenu *) menuWithTitle:(NSString *) title image:(UIImage *) image identifier:(UIMenuIdentifier) identifier options:(UIMenuOptions) options children:(NSArray<UIMenuElement *> *) children;
```

## Parameters

- `title`: The title of the menu.
- `image`: The image to display next to the menu’s title.
- `identifier`: The unique identifier for the menu. When creating standard menus for your app, specify an appropriate constant defined in [UIMenuIdentifier](identifier-swift.struct.md). For custom menus, specify a custom reverse domain name value, or specify `nil` to let this method create a unique identifier for you.
- `options`: Additional configuration options for the menu. For a list of possible values, see [UIMenuOptions](options-swift.struct.md).
- `children`: The menu elements in the menu. Specify leaf menu elements using [UIMenuElement](../uimenuelement.md) subclasses like [UIAction](../uiaction.md), [UICommand](../uicommand.md), or [UIKeyCommand](../uikeycommand.md), and specify submenus using [UIMenu](../uimenu.md) objects. You may specify an empty array if the menu has no child menu elements.

<a id="return-value"></a>

## Return Value

A new menu object containing the specified menu elements.

## See Also

### Creating a menu object

- [menuWithChildren:](menuwithchildren_.md): Creates a new menu with the specified child elements.
- [menuWithTitle:children:](menuwithtitle_children_.md): Creates a menu with the specified title and child menu elements.
- [UIMenuIdentifier](identifier-swift.struct.md): Constants you use to identify an app’s standard menus.
- [UIMenuOptions](options-swift.struct.md): Options you use to configure a menu’s appearance.
- [initWithCoder:](init%28coder_%29.md): Creates a menu from data in an unarchiver.
