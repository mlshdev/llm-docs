> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitview/adjustsubviews()](https://developer.apple.com/documentation/appkit/nssplitview/adjustsubviews())

# adjustSubviews() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adjusts the sizes of the split view’s subviews so they (plus the dividers) fill the split view.

## Declaration

```swift
func adjustSubviews()
```

<a id="Discussion"></a>

## Discussion

When you call this method, the split view’s subviews resize proportionally; the relative sizes of the subviews don’t change.

The default implementation of this method resizes subviews proportionally so that the ratio of heights (when using horizontal dividers) or widths (when using vertical dividers) doesn’t change, even though the absolute sizes change.

Call this method on split views where you’ve added or removed subviews to reestablish the consistency of subview placement.

This method invalidates the cursor when it is over a divider, ensuring the cursor is always of the correct type during and after resizing animations.

## See Also

### Managing Subviews

- [isSubviewCollapsed(\_:)](issubviewcollapsed%28__%29.md): Returns whether the specified view is in a collapsed state.
- [holdingPriorityForSubview(at:)](holdingpriorityforsubview%28at_%29.md): Returns the priority of the subview’s width or height when resizing.
- [setHoldingPriority(\_:forSubviewAt:)](setholdingpriority%28__forsubviewat_%29.md): Sets the priority for split view subviews to maintain their width or height.

# adjustSubviews (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adjusts the sizes of the split view’s subviews so they (plus the dividers) fill the split view.

## Declaration

```objectivec
- (void) adjustSubviews;
```

<a id="Discussion"></a>

## Discussion

When you call this method, the split view’s subviews resize proportionally; the relative sizes of the subviews don’t change.

The default implementation of this method resizes subviews proportionally so that the ratio of heights (when using horizontal dividers) or widths (when using vertical dividers) doesn’t change, even though the absolute sizes change.

Call this method on split views where you’ve added or removed subviews to reestablish the consistency of subview placement.

This method invalidates the cursor when it is over a divider, ensuring the cursor is always of the correct type during and after resizing animations.

## See Also

### Managing Subviews

- [isSubviewCollapsed:](issubviewcollapsed%28__%29.md): Returns whether the specified view is in a collapsed state.
- [holdingPriorityForSubviewAtIndex:](holdingpriorityforsubview%28at_%29.md): Returns the priority of the subview’s width or height when resizing.
- [setHoldingPriority:forSubviewAtIndex:](setholdingpriority%28__forsubviewat_%29.md): Sets the priority for split view subviews to maintain their width or height.
