> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarbuttonitem/initwithbarbuttonsystemitem:menu:](https://developer.apple.com/documentation/uikit/uibarbuttonitem/initwithbarbuttonsystemitem:menu:)

# initWithBarButtonSystemItem:menu:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Creates an item using the specified system item and context menu.

## Declaration

```objectivec
- (instancetype) initWithBarButtonSystemItem:(UIBarButtonSystemItem) systemItem menu:(UIMenu *) menu;
```

## Parameters

- `systemItem`: The system item to use as the first item on the bar. For possible values, see [UIBarButtonSystemItem](systemitem.md).
- `menu`: The menu to present. The context menu displays in response to a person tapping the item.

<a id="return-value"></a>

## Return Value

A newly initialized [UIBarButtonItem](../uibarbuttonitem.md).

## See Also

### Creating system items

- [initWithBarButtonSystemItem:primaryAction:menu:](initwithbarbuttonsystemitem_primaryaction_menu_.md): Creates an item using the specified system item, primary action, and context menu.
- [initWithBarButtonSystemItem:primaryAction:](initwithbarbuttonsystemitem_primaryaction_.md): Creates an item using the specified system item and primary action.
- [initWithBarButtonSystemItem:target:action:](init%28barbuttonsystemitem_target_action_%29.md): Creates an item using the specified system item, target, and action.
- [UIBarButtonSystemItem](systemitem.md): Constants that define system-supplied images for bar button items.
