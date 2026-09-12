> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/needsupdateconstraints](https://developer.apple.com/documentation/appkit/nsview/needsupdateconstraints)

# needsUpdateConstraints (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

A Boolean value indicating whether the view’s constraints need to be updated.

## Declaration

```swift
var needsUpdateConstraints: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When a property of your view changes in a way that would impact constraints, set the value of this property to [true](https://developer.apple.com/documentation/swift/true) to indicate that the constraints need to be updated at some point in the future. The next time the layout process happens, the constraint-based layout system uses the value of this property to determine whether it needs to call [updateConstraints()](updateconstraints%28%29.md) on the view. Use this as an optimization tool to batch constraint changes. Updating constraints all at once just before they are needed ensures that you don’t needlessly recalculate constraints when multiple changes are made to your view in between layout passes.

## See Also

### Triggering Auto Layout

- [needsLayout](needslayout.md): A Boolean value indicating whether the view needs a layout pass before it can be drawn.
- [layout()](layout%28%29.md): Perform layout in concert with the constraint-based layout system.
- [layoutSubtreeIfNeeded()](layoutsubtreeifneeded%28%29.md): Updates the layout of the receiving view and its subviews based on the current views and constraints.
- [updateConstraints()](updateconstraints%28%29.md): Update constraints for the view.
- [updateConstraintsForSubtreeIfNeeded()](updateconstraintsforsubtreeifneeded%28%29.md): Updates the constraints for the receiving view and its subviews.

# needsUpdateConstraints (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

A Boolean value indicating whether the view’s constraints need to be updated.

## Declaration

```objectivec
@property BOOL needsUpdateConstraints;
```

<a id="Discussion"></a>

## Discussion

When a property of your view changes in a way that would impact constraints, set the value of this property to [true](https://developer.apple.com/documentation/swift/true) to indicate that the constraints need to be updated at some point in the future. The next time the layout process happens, the constraint-based layout system uses the value of this property to determine whether it needs to call [updateConstraints](updateconstraints%28%29.md) on the view. Use this as an optimization tool to batch constraint changes. Updating constraints all at once just before they are needed ensures that you don’t needlessly recalculate constraints when multiple changes are made to your view in between layout passes.

## See Also

### Triggering Auto Layout

- [needsLayout](needslayout.md): A Boolean value indicating whether the view needs a layout pass before it can be drawn.
- [layout](layout%28%29.md): Perform layout in concert with the constraint-based layout system.
- [layoutSubtreeIfNeeded](layoutsubtreeifneeded%28%29.md): Updates the layout of the receiving view and its subviews based on the current views and constraints.
- [updateConstraints](updateconstraints%28%29.md): Update constraints for the view.
- [updateConstraintsForSubtreeIfNeeded](updateconstraintsforsubtreeifneeded%28%29.md): Updates the constraints for the receiving view and its subviews.
