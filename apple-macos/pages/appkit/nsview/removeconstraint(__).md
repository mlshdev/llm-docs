> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/removeconstraint(_:)](https://developer.apple.com/documentation/appkit/nsview/removeconstraint(_:))

# removeConstraint(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Removes the specified constraint from the view.

## Declaration

```swift
func removeConstraint(_ constraint: NSLayoutConstraint)
```

## Parameters

- `constraint`: The constraint to remove. Removing a constraint not held by the view has no effect.

## See Also

### Managing the View’s Constraints

- [constraints](constraints.md): Returns the constraints held by the view.
- [addConstraint(\_:)](addconstraint%28__%29.md): Adds a constraint on the layout of the receiving view or its subviews.
- [addConstraints(\_:)](addconstraints%28__%29.md): Adds multiple constraints on the layout of the receiving view or its subviews.
- [removeConstraints(\_:)](removeconstraints%28__%29.md): Removes the specified constraints from the view.

# removeConstraint: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Removes the specified constraint from the view.

## Declaration

```objectivec
- (void) removeConstraint:(NSLayoutConstraint *) constraint;
```

## Parameters

- `constraint`: The constraint to remove. Removing a constraint not held by the view has no effect.

## See Also

### Managing the View’s Constraints

- [constraints](constraints.md): Returns the constraints held by the view.
- [addConstraint:](addconstraint%28__%29.md): Adds a constraint on the layout of the receiving view or its subviews.
- [addConstraints:](addconstraints%28__%29.md): Adds multiple constraints on the layout of the receiving view or its subviews.
- [removeConstraints:](removeconstraints%28__%29.md): Removes the specified constraints from the view.
