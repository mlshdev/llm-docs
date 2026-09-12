> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarbuttonitem/init(barbuttonsystemitem:target:action:)](https://developer.apple.com/documentation/uikit/uibarbuttonitem/init(barbuttonsystemitem:target:action:))

# init(barButtonSystemItem:target:action:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates an item using the specified system item, target, and action.

## Declaration

```swift
convenience init(barButtonSystemItem systemItem: UIBarButtonItem.SystemItem, target: Any?, action: Selector?)
```

## Parameters

- `systemItem`: The system item to use as the first item on the bar. For possible values, see [UIBarButtonItem.SystemItem](systemitem.md).
- `target`: The object that receives the `action` message.
- `action`: The action to send to `target` when a person selects this item.

<a id="return-value"></a>

## Return Value

A newly initialized [UIBarButtonItem](../uibarbuttonitem.md).

## See Also

### Related Documentation

- [init(image:style:target:action:)](init%28image_style_target_action_%29.md): Creates an item using the specified image, style, target, and action.
- [init(title:style:target:action:)](init%28title_style_target_action_%29.md): Creates an item using the specified title, style, target, and action.

### Creating system items

- [init(systemItem:primaryAction:menu:)](init%28systemitem_primaryaction_menu_%29.md): Creates an item using the specified system item, primary action, and context menu.
- [UIBarButtonItem.SystemItem](systemitem.md): Constants that define system-supplied images for bar button items.

# initWithBarButtonSystemItem:target:action: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates an item using the specified system item, target, and action.

## Declaration

```objectivec
- (instancetype) initWithBarButtonSystemItem:(UIBarButtonSystemItem) systemItem target:(id) target action:(SEL) action;
```

## Parameters

- `systemItem`: The system item to use as the first item on the bar. For possible values, see [UIBarButtonSystemItem](systemitem.md).
- `target`: The object that receives the `action` message.
- `action`: The action to send to `target` when a person selects this item.

<a id="return-value"></a>

## Return Value

A newly initialized [UIBarButtonItem](../uibarbuttonitem.md).

## See Also

### Related Documentation

- [initWithImage:style:target:action:](init%28image_style_target_action_%29.md): Creates an item using the specified image, style, target, and action.
- [initWithTitle:style:target:action:](init%28title_style_target_action_%29.md): Creates an item using the specified title, style, target, and action.

### Creating system items

- [initWithBarButtonSystemItem:primaryAction:menu:](initwithbarbuttonsystemitem_primaryaction_menu_.md): Creates an item using the specified system item, primary action, and context menu.
- [initWithBarButtonSystemItem:primaryAction:](initwithbarbuttonsystemitem_primaryaction_.md): Creates an item using the specified system item and primary action.
- [initWithBarButtonSystemItem:menu:](initwithbarbuttonsystemitem_menu_.md): Creates an item using the specified system item and context menu.
- [UIBarButtonSystemItem](systemitem.md): Constants that define system-supplied images for bar button items.
