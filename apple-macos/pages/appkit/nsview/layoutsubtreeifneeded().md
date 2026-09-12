> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/layoutsubtreeifneeded()](https://developer.apple.com/documentation/appkit/nsview/layoutsubtreeifneeded())

# layoutSubtreeIfNeeded() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Updates the layout of the receiving view and its subviews based on the current views and constraints.

## Declaration

```swift
func layoutSubtreeIfNeeded()
```

<a id="Discussion"></a>

## Discussion

Before displaying a view that uses constraints-based layout the system invokes this method to ensure that the layout of the view and its subviews is up to date. This method updates the layout if needed, first invoking [updateConstraintsForSubtreeIfNeeded()](updateconstraintsforsubtreeifneeded%28%29.md) to ensure that all constraints are up to date. This method is called automatically by the system, but may be invoked manually if you need to examine the most up to date layout.

Subclasses should not override this method.

## See Also

### Triggering Auto Layout

- [needsLayout](needslayout.md): A Boolean value indicating whether the view needs a layout pass before it can be drawn.
- [layout()](layout%28%29.md): Perform layout in concert with the constraint-based layout system.
- [needsUpdateConstraints](needsupdateconstraints.md): A Boolean value indicating whether the view’s constraints need to be updated.
- [updateConstraints()](updateconstraints%28%29.md): Update constraints for the view.
- [updateConstraintsForSubtreeIfNeeded()](updateconstraintsforsubtreeifneeded%28%29.md): Updates the constraints for the receiving view and its subviews.

# layoutSubtreeIfNeeded (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Updates the layout of the receiving view and its subviews based on the current views and constraints.

## Declaration

```objectivec
- (void) layoutSubtreeIfNeeded;
```

<a id="Discussion"></a>

## Discussion

Before displaying a view that uses constraints-based layout the system invokes this method to ensure that the layout of the view and its subviews is up to date. This method updates the layout if needed, first invoking [updateConstraintsForSubtreeIfNeeded](updateconstraintsforsubtreeifneeded%28%29.md) to ensure that all constraints are up to date. This method is called automatically by the system, but may be invoked manually if you need to examine the most up to date layout.

Subclasses should not override this method.

## See Also

### Triggering Auto Layout

- [needsLayout](needslayout.md): A Boolean value indicating whether the view needs a layout pass before it can be drawn.
- [layout](layout%28%29.md): Perform layout in concert with the constraint-based layout system.
- [needsUpdateConstraints](needsupdateconstraints.md): A Boolean value indicating whether the view’s constraints need to be updated.
- [updateConstraints](updateconstraints%28%29.md): Update constraints for the view.
- [updateConstraintsForSubtreeIfNeeded](updateconstraintsforsubtreeifneeded%28%29.md): Updates the constraints for the receiving view and its subviews.
