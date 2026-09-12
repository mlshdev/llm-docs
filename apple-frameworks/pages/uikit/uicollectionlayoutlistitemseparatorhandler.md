> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionlayoutlistitemseparatorhandler](https://developer.apple.com/documentation/uikit/uicollectionlayoutlistitemseparatorhandler)

# UICollectionLayoutListItemSeparatorHandler

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · visionOS 1.0+

A closure that provides granular control over list separator appearance.

## Declaration

```objectivec
typedef UIListSeparatorConfiguration *(^)(NSIndexPath *, UIListSeparatorConfiguration *) UICollectionLayoutListItemSeparatorHandler;
```

## Parameters

- `indexPath`: The [NSIndexPath](../foundation/nsindexpath.md) of the cell to configure separators for.
- `sectionSeparatorConfiguration`: The list section’s separator configuration for the cell at `indexPath`. This configuration contains the values for separator visibility and insets according to the current state of the item.

<a id="return-value"></a>

## Return Value

The configuration to use for the separators at `indexPath`.

## See Also

### Configuring separators

- [showsSeparators](uicollectionlayoutlistconfiguration-c.class/showsseparators.md): A Boolean value that determines whether the list shows separators between cells.
- [separatorConfiguration](uicollectionlayoutlistconfiguration-c.class/separatorconfiguration.md): The section’s preferred configuration for list separators.
- [UIListSeparatorConfiguration](uilistseparatorconfiguration-c.class.md): A configuration that controls the list separator appearance in a list section.
- [itemSeparatorHandler](uicollectionlayoutlistconfiguration-c.class/itemseparatorhandler.md): The closure that provides granular control over the list separator appearance of each item.
