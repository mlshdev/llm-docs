> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilayoutguide/constraintsaffectinglayout(for:)](https://developer.apple.com/documentation/uikit/uilayoutguide/constraintsaffectinglayout(for:))

# constraintsAffectingLayout(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

The constraints that impact the layout of the guide.

## Declaration

```swift
func constraintsAffectingLayout(for axis: NSLayoutConstraint.Axis) -> [NSLayoutConstraint]
```

## See Also

### Debugging the layout guide

- [hasAmbiguousLayout](hasambiguouslayout.md): A Boolean value indicating whether the constraints impacting the layout guide specify its location ambiguously.

# constraintsAffectingLayoutForAxis: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

The constraints that impact the layout of the guide.

## Declaration

```objectivec
- (NSArray<__kindof NSLayoutConstraint *> *) constraintsAffectingLayoutForAxis:(UILayoutConstraintAxis) axis;
```

## See Also

### Debugging the layout guide

- [hasAmbiguousLayout](hasambiguouslayout.md): A Boolean value indicating whether the constraints impacting the layout guide specify its location ambiguously.
