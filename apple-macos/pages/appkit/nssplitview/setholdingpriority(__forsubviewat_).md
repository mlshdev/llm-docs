> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitview/setholdingpriority(_:forsubviewat:)](https://developer.apple.com/documentation/appkit/nssplitview/setholdingpriority(_:forsubviewat:))

# setHoldingPriority(\_:forSubviewAt:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Sets the priority for split view subviews to maintain their width or height.

## Declaration

```swift
func setHoldingPriority(_ priority: NSLayoutConstraint.Priority, forSubviewAt subviewIndex: Int)
```

## Parameters

- `priority`: The priority.
- `subviewIndex`: The index of the subview

<a id="Discussion"></a>

## Discussion

Calling this method sets the priority that split view subviews use to maintain their width (for a vertical split view) or height (for a horizontal split view). During a split view resize, subviews with higher priorities maintain their sizes before subviews with lower priorities. The subview with the lowest priority is the first to gain additional thickness if the split view grows or shrinks.

The default priority is [defaultLow](../nslayoutconstraint/priority-swift.struct/defaultlow.md). Use priorities less than [dragThatCannotResizeWindow](../nslayoutconstraint/priority-swift.struct/dragthatcannotresizewindow.md).

## See Also

### Managing Subviews

- [adjustSubviews()](adjustsubviews%28%29.md): Adjusts the sizes of the split view’s subviews so they (plus the dividers) fill the split view.
- [isSubviewCollapsed(\_:)](issubviewcollapsed%28__%29.md): Returns whether the specified view is in a collapsed state.
- [holdingPriorityForSubview(at:)](holdingpriorityforsubview%28at_%29.md): Returns the priority of the subview’s width or height when resizing.

# setHoldingPriority:forSubviewAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Sets the priority for split view subviews to maintain their width or height.

## Declaration

```objectivec
- (void) setHoldingPriority:(NSLayoutPriority) priority forSubviewAtIndex:(NSInteger) subviewIndex;
```

## Parameters

- `priority`: The priority.
- `subviewIndex`: The index of the subview

<a id="Discussion"></a>

## Discussion

Calling this method sets the priority that split view subviews use to maintain their width (for a vertical split view) or height (for a horizontal split view). During a split view resize, subviews with higher priorities maintain their sizes before subviews with lower priorities. The subview with the lowest priority is the first to gain additional thickness if the split view grows or shrinks.

The default priority is [NSLayoutPriorityDefaultLow](../nslayoutconstraint/priority-swift.struct/defaultlow.md). Use priorities less than [NSLayoutPriorityDragThatCannotResizeWindow](../nslayoutconstraint/priority-swift.struct/dragthatcannotresizewindow.md).

## See Also

### Managing Subviews

- [adjustSubviews](adjustsubviews%28%29.md): Adjusts the sizes of the split view’s subviews so they (plus the dividers) fill the split view.
- [isSubviewCollapsed:](issubviewcollapsed%28__%29.md): Returns whether the specified view is in a collapsed state.
- [holdingPriorityForSubviewAtIndex:](holdingpriorityforsubview%28at_%29.md): Returns the priority of the subview’s width or height when resizing.
