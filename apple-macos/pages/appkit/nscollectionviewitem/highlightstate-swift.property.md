> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewitem/highlightstate-swift.property](https://developer.apple.com/documentation/appkit/nscollectionviewitem/highlightstate-swift.property)

# highlightState (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The highlight state currently applied to the item.

## Declaration

```swift
var highlightState: NSCollectionViewItem.HighlightState { get set }
```

<a id="Discussion"></a>

## Discussion

The highlight state provides a visual indication of operations happening to items in the collection view. The highlight state normally toggles between the [NSCollectionViewItem.HighlightState.none](highlightstate-swift.enum/none.md) and [NSCollectionViewItem.HighlightState.forSelection](highlightstate-swift.enum/forselection.md) states, but other states may be applied to indicate transient conditions. For example, the [NSCollectionViewItem.HighlightState.forDeselection](highlightstate-swift.enum/fordeselection.md) state is applied during interactive selections when a currently selected item is about to be deselected.

## See Also

### Managing the Selection and Highlight States

- [isSelected](isselected.md): A Boolean indicating whether the item is currently selected.

# highlightState (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The highlight state currently applied to the item.

## Declaration

```objectivec
@property NSCollectionViewItemHighlightState highlightState;
```

<a id="Discussion"></a>

## Discussion

The highlight state provides a visual indication of operations happening to items in the collection view. The highlight state normally toggles between the [NSCollectionViewItemHighlightNone](highlightstate-swift.enum/none.md) and [NSCollectionViewItemHighlightForSelection](highlightstate-swift.enum/forselection.md) states, but other states may be applied to indicate transient conditions. For example, the [NSCollectionViewItemHighlightForDeselection](highlightstate-swift.enum/fordeselection.md) state is applied during interactive selections when a currently selected item is about to be deselected.

## See Also

### Managing the Selection and Highlight States

- [selected](isselected.md): A Boolean indicating whether the item is currently selected.
