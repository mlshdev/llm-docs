> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/updateconstraintsifneeded()](https://developer.apple.com/documentation/appkit/nswindow/updateconstraintsifneeded())

# updateConstraintsIfNeeded() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Updates the constraints based on changes to views in the window since the last layout.

## Declaration

```swift
func updateConstraintsIfNeeded()
```

<a id="Discussion"></a>

## Discussion

When a new layout pass is triggered for a window, the system invokes this method to ensure that any constraints for views in the window are updated with information from the current view hierarchy and its constraints. This method is called automatically by the system, but may be invoked manually if you need to examine the most up to date constraints.

Subclasses should not override this method.

## See Also

### Triggering Constraint-Based Layout

- [layoutIfNeeded()](layoutifneeded%28%29.md): Updates the layout of views in the window based on the current views and constraints.

# updateConstraintsIfNeeded (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Updates the constraints based on changes to views in the window since the last layout.

## Declaration

```objectivec
- (void) updateConstraintsIfNeeded;
```

<a id="Discussion"></a>

## Discussion

When a new layout pass is triggered for a window, the system invokes this method to ensure that any constraints for views in the window are updated with information from the current view hierarchy and its constraints. This method is called automatically by the system, but may be invoked manually if you need to examine the most up to date constraints.

Subclasses should not override this method.

## See Also

### Triggering Constraint-Based Layout

- [layoutIfNeeded](layoutifneeded%28%29.md): Updates the layout of views in the window based on the current views and constraints.
