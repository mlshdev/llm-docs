> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/visualizeconstraints(_:)](https://developer.apple.com/documentation/appkit/nswindow/visualizeconstraints(_:))

# visualizeConstraints(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Displays a visual representation of the supplied constraints in the window.

## Declaration

```swift
func visualizeConstraints(_ constraints: [NSLayoutConstraint]?)
```

## Parameters

- `constraints`: The constraints to visualize. All constraints must be held by views in the window.

<a id="Discussion"></a>

## Discussion

The constraints to visualize are typically discovered by identifying a view whose layout is unexpected and then calling [constraintsAffectingLayout(for:)](../nsview/constraintsaffectinglayout%28for_%29.md) on that view.

This method should only be used for debugging constraint-based layout. No application should ship with calls to this method as part of its operation.

# visualizeConstraints: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Displays a visual representation of the supplied constraints in the window.

## Declaration

```objectivec
- (void) visualizeConstraints:(NSArray<NSLayoutConstraint *> *) constraints;
```

## Parameters

- `constraints`: The constraints to visualize. All constraints must be held by views in the window.

<a id="Discussion"></a>

## Discussion

The constraints to visualize are typically discovered by identifying a view whose layout is unexpected and then calling [constraintsAffectingLayoutForOrientation:](../nsview/constraintsaffectinglayout%28for_%29.md) on that view.

This method should only be used for debugging constraint-based layout. No application should ship with calls to this method as part of its operation.
