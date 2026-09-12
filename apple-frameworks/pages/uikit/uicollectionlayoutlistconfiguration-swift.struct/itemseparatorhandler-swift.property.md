> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionlayoutlistconfiguration-swift.struct/itemseparatorhandler-swift.property](https://developer.apple.com/documentation/uikit/uicollectionlayoutlistconfiguration-swift.struct/itemseparatorhandler-swift.property)

# itemSeparatorHandler

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · visionOS

The closure that provides granular control over the list separator appearance of each item.

## Declaration

```swift
var itemSeparatorHandler: UICollectionLayoutListConfiguration.ItemSeparatorHandler? { get set }
```

<a id="Discussion"></a>

## Discussion

The list section treats the configuration that returns from this closure as the final separator configuration for the item at the input index path.

## See Also

### Configuring separators

- [showsSeparators](showsseparators.md): A Boolean value that determines whether the list shows separators between cells.
- [separatorConfiguration](separatorconfiguration.md): The section’s preferred configuration for list separators.
- [UIListSeparatorConfiguration](../uilistseparatorconfiguration-swift.struct.md): A configuration that controls the list separator appearance in a list section.
- [UICollectionLayoutListConfiguration.ItemSeparatorHandler](itemseparatorhandler-swift.typealias.md): A closure that provides granular control over list separator appearance.
