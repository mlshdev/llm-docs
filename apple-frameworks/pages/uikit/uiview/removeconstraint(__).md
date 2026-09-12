> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/removeconstraint(_:)](https://developer.apple.com/documentation/uikit/uiview/removeconstraint(_:))

# removeConstraint(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Removes the specified constraint from the view.

## Declaration

```swift
func removeConstraint(_ constraint: NSLayoutConstraint)
```

## Parameters

- `constraint`: The constraint to remove. Removing a constraint not held by the view has no effect.

<a id="Discussion"></a>

## Discussion

When developing for iOS 8.0 or later, set the constraint’s [isActive](../nslayoutconstraint/isactive.md) property to [false](https://developer.apple.com/documentation/swift/false) instead of calling the [removeConstraint(\_:)](removeconstraint%28__%29.md) method directly. The [isActive](../nslayoutconstraint/isactive.md) property automatically adds and removes the constraint from the correct view.

## See Also

### Managing the view’s constraints

- [constraints](constraints.md): The constraints held by the view.
- [addConstraint(\_:)](addconstraint%28__%29.md): Adds a constraint on the layout of the receiving view or its subviews.
- [addConstraints(\_:)](addconstraints%28__%29.md): Adds multiple constraints on the layout of the receiving view or its subviews.
- [removeConstraints(\_:)](removeconstraints%28__%29.md): Removes the specified constraints from the view.

# removeConstraint: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Removes the specified constraint from the view.

## Declaration

```objectivec
- (void) removeConstraint:(NSLayoutConstraint *) constraint;
```

## Parameters

- `constraint`: The constraint to remove. Removing a constraint not held by the view has no effect.

<a id="Discussion"></a>

## Discussion

When developing for iOS 8.0 or later, set the constraint’s [active](../nslayoutconstraint/isactive.md) property to [false](https://developer.apple.com/documentation/swift/false) instead of calling the [removeConstraint:](removeconstraint%28__%29.md) method directly. The [active](../nslayoutconstraint/isactive.md) property automatically adds and removes the constraint from the correct view.

## See Also

### Managing the view’s constraints

- [constraints](constraints.md): The constraints held by the view.
- [addConstraint:](addconstraint%28__%29.md): Adds a constraint on the layout of the receiving view or its subviews.
- [addConstraints:](addconstraints%28__%29.md): Adds multiple constraints on the layout of the receiving view or its subviews.
- [removeConstraints:](removeconstraints%28__%29.md): Removes the specified constraints from the view.
