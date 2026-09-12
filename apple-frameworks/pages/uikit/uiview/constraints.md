> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/constraints](https://developer.apple.com/documentation/uikit/uiview/constraints)

# constraints (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The constraints held by the view.

## Declaration

```swift
var constraints: [NSLayoutConstraint] { get }
```

## See Also

### Managing the view’s constraints

- [addConstraint(\_:)](addconstraint%28__%29.md): Adds a constraint on the layout of the receiving view or its subviews.
- [addConstraints(\_:)](addconstraints%28__%29.md): Adds multiple constraints on the layout of the receiving view or its subviews.
- [removeConstraint(\_:)](removeconstraint%28__%29.md): Removes the specified constraint from the view.
- [removeConstraints(\_:)](removeconstraints%28__%29.md): Removes the specified constraints from the view.

# constraints (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The constraints held by the view.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<__kindof NSLayoutConstraint *> * constraints;
```

## See Also

### Managing the view’s constraints

- [addConstraint:](addconstraint%28__%29.md): Adds a constraint on the layout of the receiving view or its subviews.
- [addConstraints:](addconstraints%28__%29.md): Adds multiple constraints on the layout of the receiving view or its subviews.
- [removeConstraint:](removeconstraint%28__%29.md): Removes the specified constraint from the view.
- [removeConstraints:](removeconstraints%28__%29.md): Removes the specified constraints from the view.
