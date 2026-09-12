> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nslayoutconstraint/deactivate(_:)](https://developer.apple.com/documentation/uikit/nslayoutconstraint/deactivate(_:))

# deactivate(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Deactivates each constraint in the specified array.

## Declaration

```swift
class func deactivate(_ constraints: [NSLayoutConstraint])
```

## Parameters

- `constraints`: An array of constraints to deactivate.

<a id="Discussion"></a>

## Discussion

This is a convenience method that provides an easy way to deactivate a set of constraints with one call. The effect of this method is the same as setting the [isActive](isactive.md) property of each constraint to [false](https://developer.apple.com/documentation/swift/false). Typically, using this method is more efficient than deactivating each constraint individually.

## See Also

### Activating and deactivating constraints

- [isActive](isactive.md): The active state of the constraint.
- [activate(\_:)](activate%28__%29.md): Activates each constraint in the specified array.

# deactivateConstraints: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Deactivates each constraint in the specified array.

## Declaration

```objectivec
+ (void) deactivateConstraints:(NSArray<NSLayoutConstraint *> *) constraints;
```

## Parameters

- `constraints`: An array of constraints to deactivate.

<a id="Discussion"></a>

## Discussion

This is a convenience method that provides an easy way to deactivate a set of constraints with one call. The effect of this method is the same as setting the [active](isactive.md) property of each constraint to [false](https://developer.apple.com/documentation/swift/false). Typically, using this method is more efficient than deactivating each constraint individually.

## See Also

### Activating and deactivating constraints

- [active](isactive.md): The active state of the constraint.
- [activateConstraints:](activate%28__%29.md): Activates each constraint in the specified array.
