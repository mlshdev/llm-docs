> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/layoutifneeded()](https://developer.apple.com/documentation/appkit/nswindow/layoutifneeded())

# layoutIfNeeded() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Updates the layout of views in the window based on the current views and constraints.

## Declaration

```swift
func layoutIfNeeded()
```

<a id="Discussion"></a>

## Discussion

Before displaying a window that uses constraints-based layout the system invokes this method to ensure that the layout of all views is up to date. This method updates the layout if needed, first invoking [updateConstraintsIfNeeded()](updateconstraintsifneeded%28%29.md) to ensure that all constraints are up to date. This method is called automatically by the system, but may be invoked manually if you need to examine the most up to date layout.

Subclasses should not override this method.

## See Also

### Triggering Constraint-Based Layout

- [updateConstraintsIfNeeded()](updateconstraintsifneeded%28%29.md): Updates the constraints based on changes to views in the window since the last layout.

# layoutIfNeeded (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Updates the layout of views in the window based on the current views and constraints.

## Declaration

```objectivec
- (void) layoutIfNeeded;
```

<a id="Discussion"></a>

## Discussion

Before displaying a window that uses constraints-based layout the system invokes this method to ensure that the layout of all views is up to date. This method updates the layout if needed, first invoking [updateConstraintsIfNeeded](updateconstraintsifneeded%28%29.md) to ensure that all constraints are up to date. This method is called automatically by the system, but may be invoked manually if you need to examine the most up to date layout.

Subclasses should not override this method.

## See Also

### Triggering Constraint-Based Layout

- [updateConstraintsIfNeeded](updateconstraintsifneeded%28%29.md): Updates the constraints based on changes to views in the window since the last layout.
