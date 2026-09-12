> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarbuttonitem/initwithbarbuttonsystemitem:primaryaction:menu:](https://developer.apple.com/documentation/uikit/uibarbuttonitem/initwithbarbuttonsystemitem:primaryaction:menu:)

# initWithBarButtonSystemItem:primaryAction:menu:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

Creates an item using the specified system item, primary action, and context menu.

## Declaration

```objectivec
- (instancetype) initWithBarButtonSystemItem:(UIBarButtonSystemItem) systemItem primaryAction:(UIAction *) primaryAction menu:(UIMenu *) menu;
```

## Parameters

- `systemItem`: The system item to use as the first item on the bar. For possible values, see [UIBarButtonSystemItem](systemitem.md).
- `primaryAction`: A [UIAction](../uiaction.md) to associate with the item. The system item doesn’t use the action to configure its title and image.
- `menu`: The menu to present. The context menu displays in response to a person tapping the item.

<a id="return-value"></a>

## Return Value

A newly initialized [UIBarButtonItem](../uibarbuttonitem.md).

## See Also

### Creating system items

- [initWithBarButtonSystemItem:primaryAction:](initwithbarbuttonsystemitem_primaryaction_.md): Creates an item using the specified system item and primary action.
- [initWithBarButtonSystemItem:menu:](initwithbarbuttonsystemitem_menu_.md): Creates an item using the specified system item and context menu.
- [initWithBarButtonSystemItem:target:action:](init%28barbuttonsystemitem_target_action_%29.md): Creates an item using the specified system item, target, and action.
- [UIBarButtonSystemItem](systemitem.md): Constants that define system-supplied images for bar button items.
