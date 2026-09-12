> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineview/setdropitem(_:dropchildindex:)](https://developer.apple.com/documentation/appkit/nsoutlineview/setdropitem(_:dropchildindex:))

# setDropItem(\_:dropChildIndex:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Used to “retarget” a proposed drop.

## Declaration

```swift
func setDropItem(_ item: Any?, dropChildIndex index: Int)
```

## Parameters

- `item`: The target item.
- `index`: The drop index.

<a id="Discussion"></a>

## Discussion

For example, to specify a drop on `someOutlineItem`, you specify `item` as `someOutlineItem` and `index` as [NSOutlineViewDropOnItemIndex](../nsoutlineviewdroponitemindex.md). To specify a drop between child `2` and `3` of `someOutlineItem`, you specify `item` as `someOutlineItem` and `index` as `3` (children are a zero-based index). To specify a drop on an un-expandable `someOutlineItem`, you specify `item` as `someOutlineItem` and `index` as [NSOutlineViewDropOnItemIndex](../nsoutlineviewdroponitemindex.md).

## See Also

### Supporting Drag and Drop

- [shouldCollapseAutoExpandedItems(forDeposited:)](shouldcollapseautoexpandeditems%28fordeposited_%29.md): Returns a Boolean value that indicates whether auto-expanded items should return to their original collapsed state.

# setDropItem:dropChildIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Used to “retarget” a proposed drop.

## Declaration

```objectivec
- (void) setDropItem:(id) item dropChildIndex:(NSInteger) index;
```

## Parameters

- `item`: The target item.
- `index`: The drop index.

<a id="Discussion"></a>

## Discussion

For example, to specify a drop on `someOutlineItem`, you specify `item` as `someOutlineItem` and `index` as [NSOutlineViewDropOnItemIndex](../nsoutlineviewdroponitemindex.md). To specify a drop between child `2` and `3` of `someOutlineItem`, you specify `item` as `someOutlineItem` and `index` as `3` (children are a zero-based index). To specify a drop on an un-expandable `someOutlineItem`, you specify `item` as `someOutlineItem` and `index` as [NSOutlineViewDropOnItemIndex](../nsoutlineviewdroponitemindex.md).

## See Also

### Supporting Drag and Drop

- [shouldCollapseAutoExpandedItemsForDeposited:](shouldcollapseautoexpandeditems%28fordeposited_%29.md): Returns a Boolean value that indicates whether auto-expanded items should return to their original collapsed state.
