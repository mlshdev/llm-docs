> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/addconstraints(_:)](https://developer.apple.com/documentation/uikit/uiview/addconstraints(_:))

# addConstraints(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Adds multiple constraints on the layout of the receiving view or its subviews.

## Declaration

```swift
func addConstraints(_ constraints: [NSLayoutConstraint])
```

## Parameters

- `constraints`: An array of constraints to be added to the view. All constraints may only reference the view itself or its subviews.

<a id="Discussion"></a>

## Discussion

All constraints must involve only views that are within scope of the receiving view. Specifically, any views involved must be either the receiving view itself, or a subview of the receiving view. Constraints that are added to a view are said to be held by that view. The coordinate system used when evaluating each constraint is the coordinate system of the view that holds the constraint.

When developing for iOS 8.0 or later, use the [NSLayoutConstraint](../nslayoutconstraint.md) class’s  [activate(\_:)](../nslayoutconstraint/activate%28__%29.md) method instead of calling the [addConstraints(\_:)](addconstraints%28__%29.md) method directly. The [activate(\_:)](../nslayoutconstraint/activate%28__%29.md) method automatically adds the constraints to the correct views.

## See Also

### Managing the view’s constraints

- [constraints](constraints.md): The constraints held by the view.
- [addConstraint(\_:)](addconstraint%28__%29.md): Adds a constraint on the layout of the receiving view or its subviews.
- [removeConstraint(\_:)](removeconstraint%28__%29.md): Removes the specified constraint from the view.
- [removeConstraints(\_:)](removeconstraints%28__%29.md): Removes the specified constraints from the view.

# addConstraints: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Adds multiple constraints on the layout of the receiving view or its subviews.

## Declaration

```objectivec
- (void) addConstraints:(NSArray<__kindof NSLayoutConstraint *> *) constraints;
```

## Parameters

- `constraints`: An array of constraints to be added to the view. All constraints may only reference the view itself or its subviews.

<a id="Discussion"></a>

## Discussion

All constraints must involve only views that are within scope of the receiving view. Specifically, any views involved must be either the receiving view itself, or a subview of the receiving view. Constraints that are added to a view are said to be held by that view. The coordinate system used when evaluating each constraint is the coordinate system of the view that holds the constraint.

When developing for iOS 8.0 or later, use the [NSLayoutConstraint](../nslayoutconstraint.md) class’s  [activateConstraints:](../nslayoutconstraint/activate%28__%29.md) method instead of calling the [addConstraints:](addconstraints%28__%29.md) method directly. The [activateConstraints:](../nslayoutconstraint/activate%28__%29.md) method automatically adds the constraints to the correct views.

## See Also

### Managing the view’s constraints

- [constraints](constraints.md): The constraints held by the view.
- [addConstraint:](addconstraint%28__%29.md): Adds a constraint on the layout of the receiving view or its subviews.
- [removeConstraint:](removeconstraint%28__%29.md): Removes the specified constraint from the view.
- [removeConstraints:](removeconstraints%28__%29.md): Removes the specified constraints from the view.
