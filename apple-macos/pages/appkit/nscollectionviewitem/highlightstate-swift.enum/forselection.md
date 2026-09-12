> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewitem/highlightstate-swift.enum/forselection](https://developer.apple.com/documentation/appkit/nscollectionviewitem/highlightstate-swift.enum/forselection)

# NSCollectionViewItem.HighlightState.forSelection (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS 10.11+

The selected highlight state. This type of highlight is applied when an item is selected. During interactive highlighting, this state is also applied to indicate that the item will become highlighted.

## Declaration

```swift
case forSelection
```

## See Also

### Constants

- [NSCollectionViewItem.HighlightState.none](none.md): No highlight state.
- [NSCollectionViewItem.HighlightState.forDeselection](fordeselection.md): The deselection highlight state. During interactive selection, this state is used to indicate that the item will become deselected when interactions end. After interactions end, the highlight state returns to [NSCollectionViewItem.HighlightState.none](none.md).
- [NSCollectionViewItem.HighlightState.asDropTarget](asdroptarget.md): The drop target highlight state. This type of highlight is applied when the item is the target of a drop operation on the collection view. After the drop operation completes, the highlight state returns to [NSCollectionViewItem.HighlightState.none](none.md).

# NSCollectionViewItemHighlightForSelection (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.11+

The selected highlight state. This type of highlight is applied when an item is selected. During interactive highlighting, this state is also applied to indicate that the item will become highlighted.

## Declaration

```objectivec
NSCollectionViewItemHighlightForSelection
```

## See Also

### Constants

- [NSCollectionViewItemHighlightNone](none.md): No highlight state.
- [NSCollectionViewItemHighlightForDeselection](fordeselection.md): The deselection highlight state. During interactive selection, this state is used to indicate that the item will become deselected when interactions end. After interactions end, the highlight state returns to [NSCollectionViewItemHighlightNone](none.md).
- [NSCollectionViewItemHighlightAsDropTarget](asdroptarget.md): The drop target highlight state. This type of highlight is applied when the item is the target of a drop operation on the collection view. After the drop operation completes, the highlight state returns to [NSCollectionViewItemHighlightNone](none.md).
