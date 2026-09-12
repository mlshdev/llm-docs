> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionlayoutlistconfiguration-swift.struct/itemseparatorhandler-swift.typealias](https://developer.apple.com/documentation/uikit/uicollectionlayoutlistconfiguration-swift.struct/itemseparatorhandler-swift.typealias)

# UICollectionLayoutListConfiguration.ItemSeparatorHandler

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · visionOS

A closure that provides granular control over list separator appearance.

## Declaration

```swift
typealias ItemSeparatorHandler = (IndexPath, UIListSeparatorConfiguration) -> UIListSeparatorConfiguration
```

## Parameters

- `indexPath`: The [IndexPath](../../foundation/indexpath.md) of the cell to configure separators for.
- `sectionSeparatorConfiguration`: The list section’s separator configuration for the cell at `indexPath`. This configuration contains the values for separator visibility and insets according to the current state of the item.

<a id="return-value"></a>

## Return Value

The configuration to use for the separators at `indexPath`.

## See Also

### Configuring separators

- [showsSeparators](showsseparators.md): A Boolean value that determines whether the list shows separators between cells.
- [separatorConfiguration](separatorconfiguration.md): The section’s preferred configuration for list separators.
- [UIListSeparatorConfiguration](../uilistseparatorconfiguration-swift.struct.md): A configuration that controls the list separator appearance in a list section.
- [itemSeparatorHandler](itemseparatorhandler-swift.property.md): The closure that provides granular control over the list separator appearance of each item.
