> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/addconstraint(_:)](https://developer.apple.com/documentation/appkit/nsview/addconstraint(_:))

# addConstraint(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Adds a constraint on the layout of the receiving view or its subviews.

## Declaration

```swift
func addConstraint(_ constraint: NSLayoutConstraint)
```

## Parameters

- `constraint`: The constraint to be added to the view. The constraint may only reference the view itself or its subviews.

<a id="Discussion"></a>

## Discussion

The constraint must involve only views that are within scope of the receiving view. Specifically, any views involved must be either the receiving view itself, or a subview of the receiving view. Constraints that are added to a view are said to be held by that view. The coordinate system used when evaluating the constraint is the coordinate system of the view that holds the constraint.

## See Also

### Managing the View’s Constraints

- [constraints](constraints.md): Returns the constraints held by the view.
- [addConstraints(\_:)](addconstraints%28__%29.md): Adds multiple constraints on the layout of the receiving view or its subviews.
- [removeConstraint(\_:)](removeconstraint%28__%29.md): Removes the specified constraint from the view.
- [removeConstraints(\_:)](removeconstraints%28__%29.md): Removes the specified constraints from the view.

# addConstraint: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Adds a constraint on the layout of the receiving view or its subviews.

## Declaration

```objectivec
- (void) addConstraint:(NSLayoutConstraint *) constraint;
```

## Parameters

- `constraint`: The constraint to be added to the view. The constraint may only reference the view itself or its subviews.

<a id="Discussion"></a>

## Discussion

The constraint must involve only views that are within scope of the receiving view. Specifically, any views involved must be either the receiving view itself, or a subview of the receiving view. Constraints that are added to a view are said to be held by that view. The coordinate system used when evaluating the constraint is the coordinate system of the view that holds the constraint.

## See Also

### Managing the View’s Constraints

- [constraints](constraints.md): Returns the constraints held by the view.
- [addConstraints:](addconstraints%28__%29.md): Adds multiple constraints on the layout of the receiving view or its subviews.
- [removeConstraint:](removeconstraint%28__%29.md): Removes the specified constraint from the view.
- [removeConstraints:](removeconstraints%28__%29.md): Removes the specified constraints from the view.
