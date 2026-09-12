> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutconstraint/activate(_:)](https://developer.apple.com/documentation/appkit/nslayoutconstraint/activate(_:))

# activate(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.10+

Activates each constraint in the specified array.

## Declaration

```swift
class func activate(_ constraints: [NSLayoutConstraint])
```

## Parameters

- `constraints`: An array of constraints to activate.

<a id="Discussion"></a>

## Discussion

This convenience method provides an easy way to activate a set of constraints with one call. The effect of this method is the same as setting the [isActive](isactive.md) property of each constraint to [true](https://developer.apple.com/documentation/swift/true). Typically, using this method is more efficient than activating each constraint individually.

## See Also

### Activating and deactivating constraints

- [isActive](isactive.md): The active state of the constraint.
- [deactivate(\_:)](deactivate%28__%29.md): Deactivates each constraint in the specified array.

# activateConstraints: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.10+

Activates each constraint in the specified array.

## Declaration

```objectivec
+ (void) activateConstraints:(NSArray<NSLayoutConstraint *> *) constraints;
```

## Parameters

- `constraints`: An array of constraints to activate.

<a id="Discussion"></a>

## Discussion

This convenience method provides an easy way to activate a set of constraints with one call. The effect of this method is the same as setting the [active](isactive.md) property of each constraint to [true](https://developer.apple.com/documentation/swift/true). Typically, using this method is more efficient than activating each constraint individually.

## See Also

### Activating and deactivating constraints

- [active](isactive.md): The active state of the constraint.
- [deactivateConstraints:](deactivate%28__%29.md): Deactivates each constraint in the specified array.
