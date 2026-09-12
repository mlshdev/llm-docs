> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/updateconstraintsifneeded()](https://developer.apple.com/documentation/uikit/uiview/updateconstraintsifneeded())

# updateConstraintsIfNeeded() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Updates the constraints for the receiving view and its subviews.

## Declaration

```swift
func updateConstraintsIfNeeded()
```

<a id="Discussion"></a>

## Discussion

Whenever a new layout pass is triggered for a view, the system invokes this method to ensure that any constraints for the view and its subviews are updated with information from the current view hierarchy and its constraints. This method is called automatically by the system, but may be invoked manually if you need to examine the most up to date constraints.

Subclasses should not override this method.

## See Also

### Triggering Auto Layout

- [needsUpdateConstraints()](needsupdateconstraints%28%29.md): A Boolean value that determines whether the view’s constraints need updating.
- [setNeedsUpdateConstraints()](setneedsupdateconstraints%28%29.md): Controls whether the view’s constraints need updating.
- [updateConstraints()](updateconstraints%28%29.md): Updates constraints for the view.

# updateConstraintsIfNeeded (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Updates the constraints for the receiving view and its subviews.

## Declaration

```objectivec
- (void) updateConstraintsIfNeeded;
```

<a id="Discussion"></a>

## Discussion

Whenever a new layout pass is triggered for a view, the system invokes this method to ensure that any constraints for the view and its subviews are updated with information from the current view hierarchy and its constraints. This method is called automatically by the system, but may be invoked manually if you need to examine the most up to date constraints.

Subclasses should not override this method.

## See Also

### Triggering Auto Layout

- [needsUpdateConstraints](needsupdateconstraints%28%29.md): A Boolean value that determines whether the view’s constraints need updating.
- [setNeedsUpdateConstraints](setneedsupdateconstraints%28%29.md): Controls whether the view’s constraints need updating.
- [updateConstraints](updateconstraints%28%29.md): Updates constraints for the view.
