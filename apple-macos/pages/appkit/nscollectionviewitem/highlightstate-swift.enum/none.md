> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewitem/highlightstate-swift.enum/none](https://developer.apple.com/documentation/appkit/nscollectionviewitem/highlightstate-swift.enum/none)

# NSCollectionViewItem.HighlightState.none (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS 10.11+

No highlight state.

## Declaration

```swift
case none
```

## See Also

### Constants

- [NSCollectionViewItem.HighlightState.forSelection](forselection.md): The selected highlight state. This type of highlight is applied when an item is selected. During interactive highlighting, this state is also applied to indicate that the item will become highlighted.
- [NSCollectionViewItem.HighlightState.forDeselection](fordeselection.md): The deselection highlight state. During interactive selection, this state is used to indicate that the item will become deselected when interactions end. After interactions end, the highlight state returns to [NSCollectionViewItem.HighlightState.none](none.md).
- [NSCollectionViewItem.HighlightState.asDropTarget](asdroptarget.md): The drop target highlight state. This type of highlight is applied when the item is the target of a drop operation on the collection view. After the drop operation completes, the highlight state returns to [NSCollectionViewItem.HighlightState.none](none.md).

# NSCollectionViewItemHighlightNone (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.11+

No highlight state.

## Declaration

```objectivec
NSCollectionViewItemHighlightNone
```

## See Also

### Constants

- [NSCollectionViewItemHighlightForSelection](forselection.md): The selected highlight state. This type of highlight is applied when an item is selected. During interactive highlighting, this state is also applied to indicate that the item will become highlighted.
- [NSCollectionViewItemHighlightForDeselection](fordeselection.md): The deselection highlight state. During interactive selection, this state is used to indicate that the item will become deselected when interactions end. After interactions end, the highlight state returns to [NSCollectionViewItemHighlightNone](none.md).
- [NSCollectionViewItemHighlightAsDropTarget](asdroptarget.md): The drop target highlight state. This type of highlight is applied when the item is the target of a drop operation on the collection view. After the drop operation completes, the highlight state returns to [NSCollectionViewItemHighlightNone](none.md).
