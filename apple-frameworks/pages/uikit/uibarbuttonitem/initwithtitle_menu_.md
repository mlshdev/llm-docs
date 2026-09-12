> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarbuttonitem/initwithtitle:menu:](https://developer.apple.com/documentation/uikit/uibarbuttonitem/initwithtitle:menu:)

# initWithTitle:menu:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a plain-style item using the specified title and menu.

## Declaration

```objectivec
- (instancetype) initWithTitle:(NSString *) title menu:(UIMenu *) menu;
```

## Parameters

- `title`: The item’s title. If `nil`, a title doesn’t appear.
- `menu`: The menu to present. The context menu displays in response to a person tapping the item.

<a id="return-value"></a>

## Return Value

A newly initialized [UIBarButtonItem](../uibarbuttonitem.md).

## See Also

### Creating items

- [initWithPrimaryAction:menu:](initwithprimaryaction_menu_.md): Creates a plain-style item using the specified primary action and context menu.
- [initWithPrimaryAction:](initwithprimaryaction_.md): Creates a plain-style item using the specified primary action.
- [initWithTitle:image:target:action:menu:](initwithtitle_image_target_action_menu_.md): Creates a plain-style item the specified title, image, target, action, and context menu.
- [initWithImage:menu:](initwithimage_menu_.md): Creates a plain-style item using the specified image and context menu.
- [init](init%28%29.md): Initializes the item to its default state.
- [initWithCoder:](init%28coder_%29.md): Creates an item from data in an unarchiver.
