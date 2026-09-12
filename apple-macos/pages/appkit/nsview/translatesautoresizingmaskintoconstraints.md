> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/translatesautoresizingmaskintoconstraints](https://developer.apple.com/documentation/appkit/nsview/translatesautoresizingmaskintoconstraints)

# translatesAutoresizingMaskIntoConstraints (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

A Boolean value indicating whether the view’s autoresizing mask is translated into constraints for the constraint-based layout system.

## Declaration

```swift
var translatesAutoresizingMaskIntoConstraints: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When this property is set to [true](https://developer.apple.com/documentation/swift/true), the view’s superview looks at the view’s autoresizing mask, produces constraints that implement it, and adds those constraints to itself (the superview). If your view has flexible constraints that require dynamic adjustment, set this property to [false](https://developer.apple.com/documentation/swift/false) and apply the constraints yourself.

## See Also

### Opting In to Auto Layout

- [requiresConstraintBasedLayout](requiresconstraintbasedlayout.md): Returns a Boolean value indicating whether the view depends on the constraint-based layout system.

# translatesAutoresizingMaskIntoConstraints (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

A Boolean value indicating whether the view’s autoresizing mask is translated into constraints for the constraint-based layout system.

## Declaration

```objectivec
@property BOOL translatesAutoresizingMaskIntoConstraints;
```

<a id="Discussion"></a>

## Discussion

When this property is set to [true](https://developer.apple.com/documentation/swift/true), the view’s superview looks at the view’s autoresizing mask, produces constraints that implement it, and adds those constraints to itself (the superview). If your view has flexible constraints that require dynamic adjustment, set this property to [false](https://developer.apple.com/documentation/swift/false) and apply the constraints yourself.

## See Also

### Opting In to Auto Layout

- [requiresConstraintBasedLayout](requiresconstraintbasedlayout.md): Returns a Boolean value indicating whether the view depends on the constraint-based layout system.
