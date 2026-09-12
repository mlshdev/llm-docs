> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutconstraint/isactive](https://developer.apple.com/documentation/appkit/nslayoutconstraint/isactive)

# isActive (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The active state of the constraint.

## Declaration

```swift
var isActive: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

You can activate or deactivate a constraint by changing this property. Note that only active constraints affect the calculated layout. If you try to activate a constraint whose items have no common ancestor, an exception is thrown. For newly created constraints, the [isActive](isactive.md) property is [false](https://developer.apple.com/documentation/swift/false) by default.

Activating or deactivating the constraint calls [addConstraint(\_:)](../nsview/addconstraint%28__%29.md) and [removeConstraint(\_:)](../nsview/removeconstraint%28__%29.md) on the view that is the closest common ancestor of the items managed by this constraint. Use this property instead of calling [addConstraint(\_:)](../nsview/addconstraint%28__%29.md) or [removeConstraint(\_:)](../nsview/removeconstraint%28__%29.md) directly.

## See Also

### Activating and deactivating constraints

- [activate(\_:)](activate%28__%29.md): Activates each constraint in the specified array.
- [deactivate(\_:)](deactivate%28__%29.md): Deactivates each constraint in the specified array.

# active (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The active state of the constraint.

## Declaration

```objectivec
@property (getter=isActive) BOOL active;
```

<a id="Discussion"></a>

## Discussion

You can activate or deactivate a constraint by changing this property. Note that only active constraints affect the calculated layout. If you try to activate a constraint whose items have no common ancestor, an exception is thrown. For newly created constraints, the [active](isactive.md) property is [false](https://developer.apple.com/documentation/swift/false) by default.

Activating or deactivating the constraint calls [addConstraint:](../nsview/addconstraint%28__%29.md) and [removeConstraint:](../nsview/removeconstraint%28__%29.md) on the view that is the closest common ancestor of the items managed by this constraint. Use this property instead of calling [addConstraint:](../nsview/addconstraint%28__%29.md) or [removeConstraint:](../nsview/removeconstraint%28__%29.md) directly.

## See Also

### Activating and deactivating constraints

- [activateConstraints:](activate%28__%29.md): Activates each constraint in the specified array.
- [deactivateConstraints:](deactivate%28__%29.md): Deactivates each constraint in the specified array.
