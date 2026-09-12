> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/constraintsaffectinglayout(for:)](https://developer.apple.com/documentation/appkit/nsview/constraintsaffectinglayout(for:))

# constraintsAffectingLayout(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Returns the constraints impacting the layout of the view for a given orientation.

## Declaration

```swift
func constraintsAffectingLayout(for orientation: NSLayoutConstraint.Orientation) -> [NSLayoutConstraint]
```

## Parameters

- `orientation`: The direction of the dimension for which the constraints should be found.

<a id="return-value"></a>

## Return Value

The constraints impacting the layout of the view for the specified orientation.

<a id="Discussion"></a>

## Discussion

The returned set of constraints may not all include the view explicitly. Constraints that impact the location of the view implicitly may also be included. While this provides a good starting point for debugging, there is no guarantee that the returned set of constraints will include all of the constraints that have an impact on the view’s layout in the given orientation.

This method should only be used for debugging constraint-based layout. No application should ship with calls to this method as part of its operation.

## See Also

### Debugging Auto Layout

- [hasAmbiguousLayout](hasambiguouslayout.md): A Boolean value indicating whether the constraints impacting the layout of the view incompletely specify the location of the view.
- [exerciseAmbiguityInLayout()](exerciseambiguityinlayout%28%29.md): Randomly changes the frame of a view with an ambiguous layout between the different valid values.

# constraintsAffectingLayoutForOrientation: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Returns the constraints impacting the layout of the view for a given orientation.

## Declaration

```objectivec
- (NSArray<NSLayoutConstraint *> *) constraintsAffectingLayoutForOrientation:(NSLayoutConstraintOrientation) orientation;
```

## Parameters

- `orientation`: The direction of the dimension for which the constraints should be found.

<a id="return-value"></a>

## Return Value

The constraints impacting the layout of the view for the specified orientation.

<a id="Discussion"></a>

## Discussion

The returned set of constraints may not all include the view explicitly. Constraints that impact the location of the view implicitly may also be included. While this provides a good starting point for debugging, there is no guarantee that the returned set of constraints will include all of the constraints that have an impact on the view’s layout in the given orientation.

This method should only be used for debugging constraint-based layout. No application should ship with calls to this method as part of its operation.

## See Also

### Debugging Auto Layout

- [hasAmbiguousLayout](hasambiguouslayout.md): A Boolean value indicating whether the constraints impacting the layout of the view incompletely specify the location of the view.
- [exerciseAmbiguityInLayout](exerciseambiguityinlayout%28%29.md): Randomly changes the frame of a view with an ambiguous layout between the different valid values.
