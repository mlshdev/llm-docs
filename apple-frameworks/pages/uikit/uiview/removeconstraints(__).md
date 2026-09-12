> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/removeconstraints(_:)](https://developer.apple.com/documentation/uikit/uiview/removeconstraints(_:))

# removeConstraints(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Removes the specified constraints from the view.

## Declaration

```swift
func removeConstraints(_ constraints: [NSLayoutConstraint])
```

## Parameters

- `constraints`: The constraints to remove.

<a id="Discussion"></a>

## Discussion

When developing for iOS 8.0 or later, use the [NSLayoutConstraint](../nslayoutconstraint.md) class’s  [deactivate(\_:)](../nslayoutconstraint/deactivate%28__%29.md) method instead of calling the [removeConstraints(\_:)](removeconstraints%28__%29.md) method directly. The [deactivate(\_:)](../nslayoutconstraint/deactivate%28__%29.md) method automatically removes the constraints from the correct views.

## See Also

### Managing the view’s constraints

- [constraints](constraints.md): The constraints held by the view.
- [addConstraint(\_:)](addconstraint%28__%29.md): Adds a constraint on the layout of the receiving view or its subviews.
- [addConstraints(\_:)](addconstraints%28__%29.md): Adds multiple constraints on the layout of the receiving view or its subviews.
- [removeConstraint(\_:)](removeconstraint%28__%29.md): Removes the specified constraint from the view.

# removeConstraints: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Removes the specified constraints from the view.

## Declaration

```objectivec
- (void) removeConstraints:(NSArray<__kindof NSLayoutConstraint *> *) constraints;
```

## Parameters

- `constraints`: The constraints to remove.

<a id="Discussion"></a>

## Discussion

When developing for iOS 8.0 or later, use the [NSLayoutConstraint](../nslayoutconstraint.md) class’s  [deactivateConstraints:](../nslayoutconstraint/deactivate%28__%29.md) method instead of calling the [removeConstraints:](removeconstraints%28__%29.md) method directly. The [deactivateConstraints:](../nslayoutconstraint/deactivate%28__%29.md) method automatically removes the constraints from the correct views.

## See Also

### Managing the view’s constraints

- [constraints](constraints.md): The constraints held by the view.
- [addConstraint:](addconstraint%28__%29.md): Adds a constraint on the layout of the receiving view or its subviews.
- [addConstraints:](addconstraints%28__%29.md): Adds multiple constraints on the layout of the receiving view or its subviews.
- [removeConstraint:](removeconstraint%28__%29.md): Removes the specified constraint from the view.
