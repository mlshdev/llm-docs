> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/setneedsupdateconstraints()](https://developer.apple.com/documentation/uikit/uiview/setneedsupdateconstraints())

# setNeedsUpdateConstraints() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Controls whether the view’s constraints need updating.

## Declaration

```swift
func setNeedsUpdateConstraints()
```

<a id="Discussion"></a>

## Discussion

When a property of your custom view changes in a way that would impact constraints, you can call this method to indicate that the constraints need to be updated at some point in the future. The system will then call [updateConstraints()](updateconstraints%28%29.md) as part of its normal layout pass. Use this as an optimization tool to batch constraint changes. Updating constraints all at once just before they are needed ensures that you don’t needlessly recalculate constraints when multiple changes are made to your view in between layout passes.

## See Also

### Triggering Auto Layout

- [needsUpdateConstraints()](needsupdateconstraints%28%29.md): A Boolean value that determines whether the view’s constraints need updating.
- [updateConstraints()](updateconstraints%28%29.md): Updates constraints for the view.
- [updateConstraintsIfNeeded()](updateconstraintsifneeded%28%29.md): Updates the constraints for the receiving view and its subviews.

# setNeedsUpdateConstraints (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Controls whether the view’s constraints need updating.

## Declaration

```objectivec
- (void) setNeedsUpdateConstraints;
```

<a id="Discussion"></a>

## Discussion

When a property of your custom view changes in a way that would impact constraints, you can call this method to indicate that the constraints need to be updated at some point in the future. The system will then call [updateConstraints](updateconstraints%28%29.md) as part of its normal layout pass. Use this as an optimization tool to batch constraint changes. Updating constraints all at once just before they are needed ensures that you don’t needlessly recalculate constraints when multiple changes are made to your view in between layout passes.

## See Also

### Triggering Auto Layout

- [needsUpdateConstraints](needsupdateconstraints%28%29.md): A Boolean value that determines whether the view’s constraints need updating.
- [updateConstraints](updateconstraints%28%29.md): Updates constraints for the view.
- [updateConstraintsIfNeeded](updateconstraintsifneeded%28%29.md): Updates the constraints for the receiving view and its subviews.
