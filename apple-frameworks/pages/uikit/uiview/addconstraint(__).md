> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/addconstraint(_:)](https://developer.apple.com/documentation/uikit/uiview/addconstraint(_:))

# addConstraint(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

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

When developing for iOS 8.0 or later, set the constraint’s [isActive](../nslayoutconstraint/isactive.md) property to [true](https://developer.apple.com/documentation/swift/true) instead of calling the [addConstraint(\_:)](addconstraint%28__%29.md) method directly. The [isActive](../nslayoutconstraint/isactive.md) property automatically adds and removes the constraint from the correct view.

## See Also

### Managing the view’s constraints

- [constraints](constraints.md): The constraints held by the view.
- [addConstraints(\_:)](addconstraints%28__%29.md): Adds multiple constraints on the layout of the receiving view or its subviews.
- [removeConstraint(\_:)](removeconstraint%28__%29.md): Removes the specified constraint from the view.
- [removeConstraints(\_:)](removeconstraints%28__%29.md): Removes the specified constraints from the view.

# addConstraint: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

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

When developing for iOS 8.0 or later, set the constraint’s [active](../nslayoutconstraint/isactive.md) property to [true](https://developer.apple.com/documentation/swift/true) instead of calling the [addConstraint:](addconstraint%28__%29.md) method directly. The [active](../nslayoutconstraint/isactive.md) property automatically adds and removes the constraint from the correct view.

## See Also

### Managing the view’s constraints

- [constraints](constraints.md): The constraints held by the view.
- [addConstraints:](addconstraints%28__%29.md): Adds multiple constraints on the layout of the receiving view or its subviews.
- [removeConstraint:](removeconstraint%28__%29.md): Removes the specified constraint from the view.
- [removeConstraints:](removeconstraints%28__%29.md): Removes the specified constraints from the view.
