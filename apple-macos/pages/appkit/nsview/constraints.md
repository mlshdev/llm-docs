> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/constraints](https://developer.apple.com/documentation/appkit/nsview/constraints)

# constraints (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

Returns the constraints held by the view.

## Declaration

```swift
var constraints: [NSLayoutConstraint] { get }
```

<a id="return-value"></a>

## Return Value

The constraints held by the view.

## See Also

### Managing the View’s Constraints

- [addConstraint(\_:)](addconstraint%28__%29.md): Adds a constraint on the layout of the receiving view or its subviews.
- [addConstraints(\_:)](addconstraints%28__%29.md): Adds multiple constraints on the layout of the receiving view or its subviews.
- [removeConstraint(\_:)](removeconstraint%28__%29.md): Removes the specified constraint from the view.
- [removeConstraints(\_:)](removeconstraints%28__%29.md): Removes the specified constraints from the view.

# constraints (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

Returns the constraints held by the view.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSLayoutConstraint *> * constraints;
```

<a id="return-value"></a>

## Return Value

The constraints held by the view.

## See Also

### Managing the View’s Constraints

- [addConstraint:](addconstraint%28__%29.md): Adds a constraint on the layout of the receiving view or its subviews.
- [addConstraints:](addconstraints%28__%29.md): Adds multiple constraints on the layout of the receiving view or its subviews.
- [removeConstraint:](removeconstraint%28__%29.md): Removes the specified constraint from the view.
- [removeConstraints:](removeconstraints%28__%29.md): Removes the specified constraints from the view.
