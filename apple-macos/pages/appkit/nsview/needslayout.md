> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/needslayout](https://developer.apple.com/documentation/appkit/nsview/needslayout)

# needsLayout (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

A Boolean value indicating whether the view needs a layout pass before it can be drawn.

## Declaration

```swift
var needsLayout: Bool { get set }
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the view needs a layout pass, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

You only ever need to change the value of this property if your view implements the [layout()](layout%28%29.md) method because it has custom layout that is not expressible in the constraint-based layout system. Setting this property to [true](https://developer.apple.com/documentation/swift/true) lets the system know that the view’s layout needs to be updated before it is drawn. The system checks the value of this property prior to applying constraint-based layout rules for the view.

## See Also

### Triggering Auto Layout

- [layout()](layout%28%29.md): Perform layout in concert with the constraint-based layout system.
- [layoutSubtreeIfNeeded()](layoutsubtreeifneeded%28%29.md): Updates the layout of the receiving view and its subviews based on the current views and constraints.
- [needsUpdateConstraints](needsupdateconstraints.md): A Boolean value indicating whether the view’s constraints need to be updated.
- [updateConstraints()](updateconstraints%28%29.md): Update constraints for the view.
- [updateConstraintsForSubtreeIfNeeded()](updateconstraintsforsubtreeifneeded%28%29.md): Updates the constraints for the receiving view and its subviews.

# needsLayout (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

A Boolean value indicating whether the view needs a layout pass before it can be drawn.

## Declaration

```objectivec
@property BOOL needsLayout;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the view needs a layout pass, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

You only ever need to change the value of this property if your view implements the [layout](layout%28%29.md) method because it has custom layout that is not expressible in the constraint-based layout system. Setting this property to [true](https://developer.apple.com/documentation/swift/true) lets the system know that the view’s layout needs to be updated before it is drawn. The system checks the value of this property prior to applying constraint-based layout rules for the view.

## See Also

### Triggering Auto Layout

- [layout](layout%28%29.md): Perform layout in concert with the constraint-based layout system.
- [layoutSubtreeIfNeeded](layoutsubtreeifneeded%28%29.md): Updates the layout of the receiving view and its subviews based on the current views and constraints.
- [needsUpdateConstraints](needsupdateconstraints.md): A Boolean value indicating whether the view’s constraints need to be updated.
- [updateConstraints](updateconstraints%28%29.md): Update constraints for the view.
- [updateConstraintsForSubtreeIfNeeded](updateconstraintsforsubtreeifneeded%28%29.md): Updates the constraints for the receiving view and its subviews.
