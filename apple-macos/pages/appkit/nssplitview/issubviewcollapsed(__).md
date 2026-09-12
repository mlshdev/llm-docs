> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitview/issubviewcollapsed(_:)](https://developer.apple.com/documentation/appkit/nssplitview/issubviewcollapsed(_:))

# isSubviewCollapsed(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns whether the specified view is in a collapsed state.

## Declaration

```swift
func isSubviewCollapsed(_ subview: NSView) -> Bool
```

## Parameters

- `subview`: The subview in the split view.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `subview` is in a collapsed state; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing Subviews

- [adjustSubviews()](adjustsubviews%28%29.md): Adjusts the sizes of the split view’s subviews so they (plus the dividers) fill the split view.
- [holdingPriorityForSubview(at:)](holdingpriorityforsubview%28at_%29.md): Returns the priority of the subview’s width or height when resizing.
- [setHoldingPriority(\_:forSubviewAt:)](setholdingpriority%28__forsubviewat_%29.md): Sets the priority for split view subviews to maintain their width or height.

# isSubviewCollapsed: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns whether the specified view is in a collapsed state.

## Declaration

```objectivec
- (BOOL) isSubviewCollapsed:(NSView *) subview;
```

## Parameters

- `subview`: The subview in the split view.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `subview` is in a collapsed state; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing Subviews

- [adjustSubviews](adjustsubviews%28%29.md): Adjusts the sizes of the split view’s subviews so they (plus the dividers) fill the split view.
- [holdingPriorityForSubviewAtIndex:](holdingpriorityforsubview%28at_%29.md): Returns the priority of the subview’s width or height when resizing.
- [setHoldingPriority:forSubviewAtIndex:](setholdingpriority%28__forsubviewat_%29.md): Sets the priority for split view subviews to maintain their width or height.
