> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitview/holdingpriorityforsubview(at:)](https://developer.apple.com/documentation/appkit/nssplitview/holdingpriorityforsubview(at:))

# holdingPriorityForSubview(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Returns the priority of the subview’s width or height when resizing.

## Declaration

```swift
func holdingPriorityForSubview(at subviewIndex: Int) -> NSLayoutConstraint.Priority
```

## Parameters

- `subviewIndex`: The index of the subview.

<a id="return-value"></a>

## Return Value

The layout priority of the subview at the index.

<a id="Discussion"></a>

## Discussion

The priority is the manner that the split view subviews use to maintain their width (for a vertical split view) or height (for a horizontal split view). During a split view resize, subviews with higher priorities maintain their sizes before subviews with lower priorities. The subview with the lowest priority is the first to gain additional thickness if the split view grows or shrinks.

## See Also

### Managing Subviews

- [adjustSubviews()](adjustsubviews%28%29.md): Adjusts the sizes of the split view’s subviews so they (plus the dividers) fill the split view.
- [isSubviewCollapsed(\_:)](issubviewcollapsed%28__%29.md): Returns whether the specified view is in a collapsed state.
- [setHoldingPriority(\_:forSubviewAt:)](setholdingpriority%28__forsubviewat_%29.md): Sets the priority for split view subviews to maintain their width or height.

# holdingPriorityForSubviewAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Returns the priority of the subview’s width or height when resizing.

## Declaration

```objectivec
- (NSLayoutPriority) holdingPriorityForSubviewAtIndex:(NSInteger) subviewIndex;
```

## Parameters

- `subviewIndex`: The index of the subview.

<a id="return-value"></a>

## Return Value

The layout priority of the subview at the index.

<a id="Discussion"></a>

## Discussion

The priority is the manner that the split view subviews use to maintain their width (for a vertical split view) or height (for a horizontal split view). During a split view resize, subviews with higher priorities maintain their sizes before subviews with lower priorities. The subview with the lowest priority is the first to gain additional thickness if the split view grows or shrinks.

## See Also

### Managing Subviews

- [adjustSubviews](adjustsubviews%28%29.md): Adjusts the sizes of the split view’s subviews so they (plus the dividers) fill the split view.
- [isSubviewCollapsed:](issubviewcollapsed%28__%29.md): Returns whether the specified view is in a collapsed state.
- [setHoldingPriority:forSubviewAtIndex:](setholdingpriority%28__forsubviewat_%29.md): Sets the priority for split view subviews to maintain their width or height.
