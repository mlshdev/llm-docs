> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/constraintsaffectinglayout(for:)](https://developer.apple.com/documentation/uikit/uiview/constraintsaffectinglayout(for:))

# constraintsAffectingLayout(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the constraints impacting the layout of the view for a given axis.

## Declaration

```swift
func constraintsAffectingLayout(for axis: NSLayoutConstraint.Axis) -> [NSLayoutConstraint]
```

## Parameters

- `axis`: The axis for which the constraints should be found.

<a id="return-value"></a>

## Return Value

The constraints impacting the layout of the view for the specified axis.

<a id="Discussion"></a>

## Discussion

The returned set of constraints may not all include the view explicitly. Constraints that impact the location of the view implicitly may also be included. While this provides a good starting point for debugging, there is no guarantee that the returned set of constraints will include all of the constraints that have an impact on the view’s layout in the given orientation.

This method should only be used for debugging constraint-based layout. No application should ship with calls to this method as part of its operation.

## See Also

### Debugging Auto Layout

- [hasAmbiguousLayout](hasambiguouslayout.md): A Boolean value that determines whether the constraints impacting the layout of the view incompletely specify the location of the view.
- [exerciseAmbiguityInLayout()](exerciseambiguityinlayout%28%29.md): Randomly changes the frame of a view with an ambiguous layout between the different valid values.

# constraintsAffectingLayoutForAxis: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the constraints impacting the layout of the view for a given axis.

## Declaration

```objectivec
- (NSArray<__kindof NSLayoutConstraint *> *) constraintsAffectingLayoutForAxis:(UILayoutConstraintAxis) axis;
```

## Parameters

- `axis`: The axis for which the constraints should be found.

<a id="return-value"></a>

## Return Value

The constraints impacting the layout of the view for the specified axis.

<a id="Discussion"></a>

## Discussion

The returned set of constraints may not all include the view explicitly. Constraints that impact the location of the view implicitly may also be included. While this provides a good starting point for debugging, there is no guarantee that the returned set of constraints will include all of the constraints that have an impact on the view’s layout in the given orientation.

This method should only be used for debugging constraint-based layout. No application should ship with calls to this method as part of its operation.

## See Also

### Debugging Auto Layout

- [hasAmbiguousLayout](hasambiguouslayout.md): A Boolean value that determines whether the constraints impacting the layout of the view incompletely specify the location of the view.
- [exerciseAmbiguityInLayout](exerciseambiguityinlayout%28%29.md): Randomly changes the frame of a view with an ambiguous layout between the different valid values.
