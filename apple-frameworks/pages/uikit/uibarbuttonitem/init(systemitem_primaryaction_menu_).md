> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarbuttonitem/init(systemitem:primaryaction:menu:)](https://developer.apple.com/documentation/uikit/uibarbuttonitem/init(systemitem:primaryaction:menu:))

# init(systemItem:primaryAction:menu:)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

Creates an item using the specified system item, primary action, and context menu.

## Declaration

```swift
@MainActor @preconcurrency convenience init(systemItem: UIBarButtonItem.SystemItem, primaryAction: UIAction? = nil, menu: UIMenu? = nil)
```

## Parameters

- `systemItem`: The system item to use as the first item on the bar. For possible values, see [UIBarButtonItem.SystemItem](systemitem.md).
- `primaryAction`: A [UIAction](../uiaction.md) to associate with the item. The system item doesn’t use the action to configure its title and image.
- `menu`: The menu to present. The context menu displays in response to a person tapping the item.

<a id="return-value"></a>

## Return Value

A newly initialized [UIBarButtonItem](../uibarbuttonitem.md).

## See Also

### Creating system items

- [init(barButtonSystemItem:target:action:)](init%28barbuttonsystemitem_target_action_%29.md): Creates an item using the specified system item, target, and action.
- [UIBarButtonItem.SystemItem](systemitem.md): Constants that define system-supplied images for bar button items.
