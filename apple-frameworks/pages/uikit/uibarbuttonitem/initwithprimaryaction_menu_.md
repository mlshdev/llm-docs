> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarbuttonitem/initwithprimaryaction:menu:](https://developer.apple.com/documentation/uikit/uibarbuttonitem/initwithprimaryaction:menu:)

# initWithPrimaryAction:menu:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a plain-style item using the specified primary action and context menu.

## Declaration

```objectivec
- (instancetype) initWithPrimaryAction:(UIAction *) primaryAction menu:(UIMenu *) menu;
```

## Parameters

- `primaryAction`: A [UIAction](../uiaction.md) to associate with the item, which the item uses to configure its title and image.
- `menu`: The menu to present. The context menu displays in response to a person tapping the item.

<a id="return-value"></a>

## Return Value

A newly initialized [UIBarButtonItem](../uibarbuttonitem.md).

## See Also

### Creating items

- [initWithPrimaryAction:](initwithprimaryaction_.md): Creates a plain-style item using the specified primary action.
- [initWithTitle:image:target:action:menu:](initwithtitle_image_target_action_menu_.md): Creates a plain-style item the specified title, image, target, action, and context menu.
- [initWithTitle:menu:](initwithtitle_menu_.md): Creates a plain-style item using the specified title and menu.
- [initWithImage:menu:](initwithimage_menu_.md): Creates a plain-style item using the specified image and context menu.
- [init](init%28%29.md): Initializes the item to its default state.
- [initWithCoder:](init%28coder_%29.md): Creates an item from data in an unarchiver.
