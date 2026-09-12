> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/layoutifneeded()](https://developer.apple.com/documentation/uikit/uiview/layoutifneeded())

# layoutIfNeeded() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Lays out the subviews immediately, if layout updates are pending.

## Declaration

```swift
func layoutIfNeeded()
```

<a id="Discussion"></a>

## Discussion

Use this method to force the view to update its layout immediately. When using Auto Layout, the layout engine updates the position of views as needed to satisfy changes in constraints. Using the view that receives the message as the root view, this method lays out the view subtree starting at the root.  If no layout updates are pending, this method exits without modifying the layout or calling any layout-related callbacks.

## See Also

### Laying out subviews

- [layoutSubviews()](layoutsubviews%28%29.md): Lays out subviews.
- [setNeedsLayout()](setneedslayout%28%29.md): Invalidates the current layout of the receiver and triggers a layout update during the next update cycle.
- [requiresConstraintBasedLayout](requiresconstraintbasedlayout.md): A Boolean value that indicates whether the receiver depends on the constraint-based layout system.
- [translatesAutoresizingMaskIntoConstraints](translatesautoresizingmaskintoconstraints.md): A Boolean value that determines whether the view’s autoresizing mask converts to Auto Layout constraints.

# layoutIfNeeded (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

Lays out the subviews immediately, if layout updates are pending.

## Declaration

```objectivec
- (void) layoutIfNeeded;
```

<a id="Discussion"></a>

## Discussion

Use this method to force the view to update its layout immediately. When using Auto Layout, the layout engine updates the position of views as needed to satisfy changes in constraints. Using the view that receives the message as the root view, this method lays out the view subtree starting at the root.  If no layout updates are pending, this method exits without modifying the layout or calling any layout-related callbacks.

## See Also

### Laying out subviews

- [layoutSubviews](layoutsubviews%28%29.md): Lays out subviews.
- [setNeedsLayout](setneedslayout%28%29.md): Invalidates the current layout of the receiver and triggers a layout update during the next update cycle.
- [requiresConstraintBasedLayout](requiresconstraintbasedlayout.md): A Boolean value that indicates whether the receiver depends on the constraint-based layout system.
- [translatesAutoresizingMaskIntoConstraints](translatesautoresizingmaskintoconstraints.md): A Boolean value that determines whether the view’s autoresizing mask converts to Auto Layout constraints.
