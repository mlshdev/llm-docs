> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/updateconstraintsforsubtreeifneeded()](https://developer.apple.com/documentation/appkit/nsview/updateconstraintsforsubtreeifneeded())

# updateConstraintsForSubtreeIfNeeded() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Updates the constraints for the receiving view and its subviews.

## Declaration

```swift
func updateConstraintsForSubtreeIfNeeded()
```

<a id="Discussion"></a>

## Discussion

Whenever a new layout pass is triggered for a view, the system invokes this method to ensure that any constraints for the view and its subviews are updated with information from the current view hierarchy and its constraints. This method is called automatically by the system, but may be invoked manually if you need to examine the most up to date constraints.

Subclasses should not override this method.

## See Also

### Triggering Auto Layout

- [needsLayout](needslayout.md): A Boolean value indicating whether the view needs a layout pass before it can be drawn.
- [layout()](layout%28%29.md): Perform layout in concert with the constraint-based layout system.
- [layoutSubtreeIfNeeded()](layoutsubtreeifneeded%28%29.md): Updates the layout of the receiving view and its subviews based on the current views and constraints.
- [needsUpdateConstraints](needsupdateconstraints.md): A Boolean value indicating whether the view’s constraints need to be updated.
- [updateConstraints()](updateconstraints%28%29.md): Update constraints for the view.

# updateConstraintsForSubtreeIfNeeded (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Updates the constraints for the receiving view and its subviews.

## Declaration

```objectivec
- (void) updateConstraintsForSubtreeIfNeeded;
```

<a id="Discussion"></a>

## Discussion

Whenever a new layout pass is triggered for a view, the system invokes this method to ensure that any constraints for the view and its subviews are updated with information from the current view hierarchy and its constraints. This method is called automatically by the system, but may be invoked manually if you need to examine the most up to date constraints.

Subclasses should not override this method.

## See Also

### Triggering Auto Layout

- [needsLayout](needslayout.md): A Boolean value indicating whether the view needs a layout pass before it can be drawn.
- [layout](layout%28%29.md): Perform layout in concert with the constraint-based layout system.
- [layoutSubtreeIfNeeded](layoutsubtreeifneeded%28%29.md): Updates the layout of the receiving view and its subviews based on the current views and constraints.
- [needsUpdateConstraints](needsupdateconstraints.md): A Boolean value indicating whether the view’s constraints need to be updated.
- [updateConstraints](updateconstraints%28%29.md): Update constraints for the view.
