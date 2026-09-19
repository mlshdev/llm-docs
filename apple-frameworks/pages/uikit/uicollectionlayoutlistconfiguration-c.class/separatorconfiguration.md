> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uicollectionlayoutlistconfiguration-c.class/separatorconfiguration

# separatorConfiguration

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · visionOS 1.0+

The section’s preferred configuration for list separators.

## Declaration

```objectivec
@property (nonatomic, copy) UIListSeparatorConfiguration * separatorConfiguration;
```

<a id="Discussion"></a>

## Discussion

This configuration only takes effect if [showsSeparators](showsseparators.md) is [true](https://developer.apple.com/documentation/swift/true).

For more granular control over list separator appearance, use [itemSeparatorHandler](itemseparatorhandler.md).

## See Also

### Configuring separators

- [showsSeparators](showsseparators.md): A Boolean value that determines whether the list shows separators between cells.
- [UIListSeparatorConfiguration](../uilistseparatorconfiguration-c.class.md): A configuration that controls the list separator appearance in a list section.
- [itemSeparatorHandler](itemseparatorhandler.md): The closure that provides granular control over the list separator appearance of each item.
- [UICollectionLayoutListItemSeparatorHandler](../uicollectionlayoutlistitemseparatorhandler.md): A closure that provides granular control over list separator appearance.
