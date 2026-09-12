> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nslayoutconstraint/activate(_:)](https://developer.apple.com/documentation/uikit/nslayoutconstraint/activate(_:))

# activate(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

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

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

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
